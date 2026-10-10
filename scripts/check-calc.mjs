// Verifica que computeImport reproduce los ejemplos resueltos de
// docs/research/02_importacion_calculo_dua.md (ejemplos 1-3 y ejercicios E1-E8).
// Uso: node --experimental-strip-types scripts/check-calc.mjs
import assert from 'node:assert/strict'
import { computeImport, DEFAULT_UI_USD, tseFor } from '../src/data/calc.ts'

const base = { insurance: 0, arancelPct: 0, origin: 'extrazona', ivaRate: 22, contribuyente: true, imesiPct: 0, latu: false, irraeAnticipo: true, uiUsd: DEFAULT_UI_USD }
const line = (r, k) => r.lines.find((l) => l.key === k)?.amount ?? 0
const near = (a, b, msg) => assert.ok(Math.abs(a - b) < 0.005, `${msg}: esperado ${b}, obtenido ${a}`)
let n = 0
const ok = (name, r) => { n++; console.log(`OK  ${name}  VA=${r.valorAduana}  total=${r.totalTributos}  recuperable=${r.totalRecuperable}  costoReal=${r.costoReal}`) }

// Ejemplo 1: intra-MERCOSUR (Brasil), FOB 10.000, flete 800, seguro 60
let r = computeImport({ ...base, fob: 10000, freight: 800, insurance: 60, origin: 'mercosur', arancelPct: 18 })
near(r.valorAduana, 10860, 'E1 VA'); near(line(r, 'tga'), 0, 'E1 TGA'); near(line(r, 'tc'), 325.8, 'E1 TC')
near(line(r, 'tsa'), 21.72, 'E1 TSA'); near(line(r, 'tse'), 108, 'E1 TSE'); near(line(r, 'escaner'), 14.13, 'E1 escáner')
near(line(r, 'iva'), 2389.2, 'E1 IVA'); near(line(r, 'anticipo-iva'), 1086, 'E1 ant IVA'); near(line(r, 'anticipo-irae'), 434.4, 'E1 ant IRAE')
near(r.totalTributos, 4379.25, 'E1 total'); near(r.totalTributos - r.totalRecuperable, 469.65, 'E1 no recuperable'); near(r.totalRecuperable, 3909.6, 'E1 recuperable')
ok('Ejemplo 1 (Brasil, ACE 18)', r)

// Ejemplo 2: China, FOB 20.000, flete 2.500, seguro 200, TGA 18%
r = computeImport({ ...base, fob: 20000, freight: 2500, insurance: 200, arancelPct: 18 })
near(r.valorAduana, 22700, 'E2 VA'); near(line(r, 'tga'), 4086, 'E2 TGA'); near(line(r, 'tc'), 1135, 'E2 TC'); near(line(r, 'tsa'), 45.4, 'E2 TSA')
near(line(r, 'iva'), 5892.92, 'E2 IVA'); near(line(r, 'anticipo-iva'), 2678.6, 'E2 ant IVA'); near(line(r, 'anticipo-irae'), 1071.44, 'E2 ant IRAE')
near(r.totalTributos, 15031.49, 'E2 total'); near(r.totalTributos - r.totalRecuperable, 5388.53, 'E2 no recuperable')
ok('Ejemplo 2 (China, TGA 18%)', r)

// Ejemplo 3: cosméticos EE. UU., FOB 15.000, flete 1.200, seguro 150, TGA 18%, IMESI 10%
r = computeImport({ ...base, fob: 15000, freight: 1200, insurance: 150, arancelPct: 18, imesiPct: 10 })
near(r.valorAduana, 16350, 'E3 VA'); near(line(r, 'tga'), 2943, 'E3 TGA'); near(line(r, 'tc'), 817.5, 'E3 TC'); near(line(r, 'tsa'), 32.7, 'E3 TSA')
near(line(r, 'imesi'), 1929.3, 'E3 IMESI'); near(line(r, 'iva'), 4244.46, 'E3 IVA'); near(line(r, 'anticipo-iva'), 1929.3, 'E3 ant IVA'); near(line(r, 'anticipo-irae'), 771.72, 'E3 ant IRAE')
near(r.totalTributos, 12790.11, 'E3 total')
ok('Ejemplo 3 (cosméticos con IMESI)', r)
// Variante no contribuyente
r = computeImport({ ...base, fob: 15000, freight: 1200, insurance: 150, arancelPct: 18, imesiPct: 10, contribuyente: false })
near(line(r, 'imesi'), 2893.95, 'E3v IMESI'); near(line(r, 'iva'), 6366.69, 'E3v IVA'); near(line(r, 'anticipo-iva'), 0, 'E3v sin anticipo'); near(line(r, 'anticipo-irae'), 0, 'E3v sin IRAE')
near(r.totalRecuperable, 0, 'E3v nada recuperable')
ok('Ejemplo 3, variante no contribuyente', r)

// E1: seguro ficto. FOB 5.000 + flete 400, sin póliza
r = computeImport({ ...base, fob: 5000, freight: 400, insurance: null })
near(r.valorAduana, 5450, 'Ej E1 VA'); ok('Ejercicio E1 (seguro ficto)', r)
// E2: desde EXW 11.500 + 500 = FOB 12.000, flete 900, sin seguro
r = computeImport({ ...base, fob: 12000, freight: 900, insurance: null })
near(r.valorAduana, 13020, 'Ej E2 VA'); ok('Ejercicio E2 (desde EXW)', r)
// E3: TSA con tope
near(line(computeImport({ ...base, fob: 8000, freight: 0 }), 'tsa'), 16, 'Ej E3 TSA 8.000')
near(line(computeImport({ ...base, fob: 40000, freight: 0 }), 'tsa'), 50, 'Ej E3 TSA 40.000'); n++; console.log('OK  Ejercicio E3 (TSA 16 y tope 50)')
// E4: CIF 30.000, TGA 14%
r = computeImport({ ...base, fob: 30000, freight: 0, arancelPct: 14 })
near(line(r, 'tse'), 240, 'Ej E4 TSE'); near(r.totalTributos, 18316.13, 'Ej E4 total'); ok('Ejercicio E4 (extrazona, CIF 30.000)', r)
// E5: ahorro de origen, CIF 50.000, TGA 12%
const ex = computeImport({ ...base, fob: 50000, freight: 0, arancelPct: 12 })
const me = computeImport({ ...base, fob: 50000, freight: 0, arancelPct: 12, origin: 'mercosur' })
near(line(ex, 'tga') + line(ex, 'tc') - line(me, 'tga') - line(me, 'tc'), 7000, 'Ej E5 ahorro'); near(line(ex, 'iva') - line(me, 'iva'), 1320, 'Ej E5 IVA')
n++; console.log('OK  Ejercicio E5 (ahorro de origen 7.000)')
// E6: alimento IVA mínimo, CIF 6.000, MERCOSUR, LATU, sin IRAE
r = computeImport({ ...base, fob: 6000, freight: 0, origin: 'mercosur', ivaRate: 10, latu: true, irraeAnticipo: false })
near(line(r, 'latu'), 30, 'Ej E6 LATU'); near(line(r, 'anticipo-iva'), 180, 'Ej E6 ant IVA 3%'); near(r.totalTributos, 1064.13, 'Ej E6 total'); ok('Ejercicio E6 (IVA mínimo + LATU)', r)
// E7: particular no contribuyente, CIF 3.000, TGA 20%
r = computeImport({ ...base, fob: 3000, freight: 0, arancelPct: 20, contribuyente: false })
near(line(r, 'iva'), 1188, 'Ej E7 IVA'); near(r.totalTributos, 2006.13, 'Ej E7 total'); ok('Ejercicio E7 (no contribuyente)', r)
// E8: AEC 18% → 16,2%; TGA sobre 20.000
near(computeImport({ ...base, fob: 20000, freight: 0, arancelPct: 18 }).lines[0].amount - computeImport({ ...base, fob: 20000, freight: 0, arancelPct: 16.2 }).lines[0].amount, 360, 'Ej E8')
n++; console.log('OK  Ejercicio E8 (ahorro 360)')
// Bordes de la escala TSE
assert.equal(tseFor(8000), 48); assert.equal(tseFor(8001), 108); assert.equal(tseFor(30000), 240); assert.equal(tseFor(100001), 600)
console.log(`\n${n} verificaciones OK`)
