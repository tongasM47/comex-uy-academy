# Guía para escribir contenido

El alumno es Gastón: uruguayo de 29 años, oficial de la Armada, estudiante de Administración en FCEA. Arranca **desde cero** en comercio exterior y quiere conseguir trabajo en una oficina de comex: un despachante, un forwarder, el departamento de comex de un importador o exportador, o la mesa de comercio exterior de un banco. Tiene tiempo para estudiar sin apuro y quiere entender a fondo, no memorizar.

## Tono
- Español rioplatense, de vos ("fijate", "tenés"), cálido y claro, como un buen profesor que trabajó en una oficina de comex. Tono humano: nada de frases de folleto ni relleno.
- Cada concepto técnico se explica la primera vez que aparece. Las siglas se desarrollan al usarlas por primera vez en cada lección.
- Muchos ejemplos concretos de Uruguay: Puerto de Montevideo, TCP, Montecon, Carrasco, Nueva Palmira, LUCIA, VUCE, DNA, LATU, BROU, despachantes, importaciones desde Brasil y China, exportaciones de carne, celulosa, lana, soja y vino.

## Exactitud (lo más importante)
- La única base son los archivos de `docs/research/`. Cada dato cuantitativo o normativo (alícuotas, plazos, artículos, números de ley o decreto, fechas) tiene que salir de ahí.
- Si un dato está marcado `[VERIFICAR]` en la investigación, no lo presentes como seguro. Omitilo o ponelo en un `callout` de tono `warn` que diga que conviene confirmarlo (con el despachante, en la DNA o en IMPO, según el caso).
- No inventes normas, números de artículo ni cifras. Si no lo sabés con certeza, no lo escribas.
- Cuando des una cifra que cambia seguido (tasas, alícuotas), decí desde cuándo rige ("desde el 1/1/2026", "vigente a octubre de 2026").
- Los ejemplos numéricos tienen que cerrar: verificá cada cuenta con `node -e`.
- Al final de cada `Subtopic`, en `sources`, poné las URLs de la investigación que respaldan la lección.
- No copies textos con derechos de autor (ICC, artículos de prensa). Parafraseá con tus palabras.

## Formato del texto
- Mini-markdown en línea: `**negrita**`, `*cursiva*` y `` `código` ``. No uses markdown de bloque (encabezados, listas con guiones) dentro de un string: para eso están los tipos de `Block`.
- Bloques disponibles (ver `src/data/types.ts`): `p`, `list`, `table`, `callout` (con tono `info`, `warn`, `tip` o `uy` para particularidades de Uruguay), `steps`, `eli5`, `example`, `doc` (inserta un documento ilustrado) y `tool` (inserta una herramienta interactiva).
- Documentos ilustrados disponibles (`DocId`): proforma, factura-comercial, packing-list, bl, awb, crt, mic-dta, certificado-origen, dua, carta-credito, letra-cambio.
- Herramientas disponibles (`ToolId`):
  - `incoterms-visualizer`: cadena interactiva que muestra costos y riesgo por Incoterm.
  - `import-calculator`: calculadora de costo de importación.
  - `volumetric-calculator`: peso volumétrico y cubicaje.
  - `payment-flows`: flujos animados de carta de crédito, cobranza y transferencia.
  - `import-sequence` y `export-sequence`: líneas de tiempo interactivas.

## Código TypeScript
- Archivos `.ts` que importan los tipos con `import type { ... } from '../types'`.
- Usá strings con comillas dobles o template literals con backticks. Cuidado con los apóstrofes y las comillas dentro del texto.
- Antes de terminar, verificá que compila:
  `npx tsc --noEmit --strict --skipLibCheck --module esnext --moduleResolution bundler --target es2022 <archivo>`
- Los IDs tienen que ser únicos: preguntas `q-p02-001`, flashcards `f-p02-001` y casos `c-p02-01`.
