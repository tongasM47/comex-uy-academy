import type { Flashcard } from '../types'

// Flashcards del módulo 6. Base: investigación 02 (secciones 0, 3 y 4) y 04 (secciones 2, 3 y 4.5).

const f = (n: number, subtopicId: string, front: string, back: string): Flashcard => ({
  id: `f-p06-${String(n).padStart(3, '0')}`,
  moduleId: 'p06',
  subtopicId,
  front,
  back,
})

export const p06Flashcards: Flashcard[] = [
  // p06-s1
  f(1, "p06-s1", "¿Qué tipo de integración es el MERCOSUR?", "Una unión aduanera imperfecta: libre comercio intrazona + AEC, con excepciones nacionales y sectores fuera (automotor y azúcar)."),
  f(2, "p06-s1", "Tratado de Asunción", "26/03/1991 (en vigor 29/11/1991). Crea el MERCOSUR."),
  f(3, "p06-s1", "Órganos decisorios y sus normas", "CMC → Decisiones; GMC → Resoluciones; CCM → Directivas."),
  f(4, "p06-s1", "Estados Partes del MERCOSUR", "Argentina, Brasil, Paraguay y Uruguay (fundadores); Bolivia (adhesión, 2024); Venezuela suspendida."),
  f(5, "p06-s1", "ACE 18", "Acuerdo de Complementación Económica N° 18 de la ALADI (29/11/1991): preferencia del 100% intra-MERCOSUR. Código 310 en el DUA."),
  f(6, "p06-s1", "Criterios de origen MERCOSUR con insumos no originarios", "Salto de partida (4 dígitos SA) o CIF de materiales no originarios ≤ 40% del FOB; los requisitos específicos prevalecen."),
  f(7, "p06-s1", "Prueba de origen MERCOSUR en LUCIA", "Certificado (ORIM), certificado digital COD (CODM) o declaración de origen con formato DORI-<nºfactura>-<AAMMDD> (RG 06/2025)."),
  // p06-s2
  f(8, "p06-s2", "Estructura del código de 10 dígitos", "6 del SA (capítulo, partida, subpartida) + 2 del MERCOSUR (ítem, subítem) + 2 de apertura nacional uruguaya."),
  f(9, "p06-s2", "RGI 1", "Los títulos solo orientan; clasifican los textos de partida y las notas de sección y capítulo."),
  f(10, "p06-s2", "RGI 2a y 2b", "2a: incompletos o desarmados con carácter esencial se clasifican como el completo. 2b: una materia incluye sus mezclas y combinaciones."),
  f(11, "p06-s2", "RGI 3 (a, b, c)", "3a: lo más específico; 3b: carácter esencial (mezclas, compuestos, surtidos); 3c: la última partida por numeración."),
  f(12, "p06-s2", "RGI 4, 5 y 6", "4: lo más análogo. 5a: estuches con su artículo; 5b: envases normales con la mercancía. 6: subpartidas comparando solo las del mismo nivel."),
  f(13, "p06-s2", "AEC: vigencia y niveles", "Desde 1995. General 0% a 20%, picos de hasta 35%. Uruguay: promedio aplicado 8,2% en 2025."),
  f(14, "p06-s2", "Decisión CMC 08/22", "–10% al AEC de 6.886 códigos; 2% → 0%. Uruguay: Dec. 369/022. Promedio aplicado de 9,2% a 8,3% según el MEF."),
  f(15, "p06-s2", "Lista nacional de excepciones de Uruguay", "225 códigos NCM hasta fines de 2029 (Dec. CMC 01/25; Dec. 211/025)."),
  f(16, "p06-s2", "“AEC 18” vs. “ACE 18”", "AEC = Arancel Externo Común. ACE = Acuerdo de Complementación Económica. “AEC 18” es casi seguro una errata por ACE 18; lectura alternativa: AEC del 18%."),
  f(17, "p06-s2", "Componentes de la TGA", "IMADUNI + recargo mínimo + recargo adicional (Dec. 430/021 art. 6). Ej.: 20% = 6% + 4% + 10%."),
  // p06-s3
  f(18, "p06-s3", "Fórmula del valor en aduana", "CIF = FOB + flete + seguro (+ ajustes art. 8 del Acuerdo de Valoración OMC). Sin póliza: seguro ficto del 1% del FOB."),
  f(19, "p06-s3", "Tasa Consular vigente", "5% general; 3% ACE 18 y Chile; 0% México (salvo autos). Ley 19.535 art. 265, desde el 01/01/2018. No integra la base del IVA."),
  f(20, "p06-s3", "Tasa de servicios aduaneros (TSA)", "0,2% del CIF con tope de US$ 50 por DUA (Dec. 667/992). Se paga aunque la mercadería esté exonerada."),
  f(21, "p06-s3", "Servicios extraordinarios (TSE), escala 2018", "500–1.000: 12; 1.000–2.000: 30; 2.000–8.000: 48; 8.001–30.000: 108; 30.000–100.000: 240; más de 100.000: 600. Montos a verificar."),
  f(22, "p06-s3", "Tasa de escáner", "85 UI por DUA (Ley 20.075 art. 161; Dec. 235/024; RG 57/2024). ≈ $ 565 con UI de $ 6,65."),
  f(23, "p06-s3", "Precio LATU", "0,5% del CIF, solo alimentos sujetos a control (Dec. 194/022; antes 1,5%)."),
  f(24, "p06-s3", "IVA de importación", "22% básica / 10% mínima sobre VA + TGA. No contribuyente: base × 1,5. Crédito fiscal para contribuyentes."),
  f(25, "p06-s3", "Anticipo de IVA", "10% (tasa básica) / 3% (tasa mínima) sobre VA + TGA (Dec. 220/998 art. 115). Se descuenta del IVA del mes."),
  f(26, "p06-s3", "Anticipo de IRAE", "4% desde el 01/01/2026 (Dec. 335/025) sobre VA + TGA, solo bienes de consumo del Anexo. Antes 15% / 4%."),
  f(27, "p06-s3", "IMESI en la importación", "Contribuyente: anticipo sobre VA + TGA (Dec. 335/996 art. 4). No contribuyente: IMESI definitivo sobre (VA + TGA) × 1,5."),
  f(28, "p06-s3", "¿Existe un tributo llamado “amortización”?", "No. Puede referirse a prorratear gastos fijos por unidad, a los anticipos recuperables o a la amortización contable de un bien de uso."),
  f(29, "p06-s3", "Orden de cálculo", "VA → TGA → Tasa Consular → TSA → TSE → escáner → LATU → base interna → IMESI → IVA → anticipo IVA → anticipo IRAE."),
  // p06-s4
  f(30, "p06-s4", "Ejemplo 1 (Brasil, ACE 18, CIF 10.860): resultado", "Total DUA US$ 4.379,25; costo no recuperable US$ 469,65 (4,3% del CIF); recuperable US$ 3.909,60."),
  f(31, "p06-s4", "Ejercicio E5: ahorro de origen (CIF 50.000, TGA 12%)", "TGA 6.000 → 0; TC 2.500 → 1.500. Ahorro US$ 7.000 (más US$ 1.320 de IVA, recuperable)."),
  f(32, "p06-s4", "Ejercicio E6 (alimento MERCOSUR, IVA mínimo, LATU, CIF 6.000)", "TC 180 + TSA 12 + TSE 48 + escáner 14,13 + LATU 30 + IVA 600 + anticipo IVA 180 = US$ 1.064,13."),
  // p06-s5
  f(33, "p06-s5", "Ejemplo 2 (China, CIF 22.700, TGA 18%): resultado", "Base interna 26.786; total DUA US$ 15.031,49 (≈ $ 601.260); costo no recuperable US$ 5.388,53 (23,7%)."),
  f(34, "p06-s5", "Ejercicio E4 (CIF 30.000, TGA 14%)", "TGA 4.200; TC 1.500; TSA 50 (tope); TSE 240; escáner 14,13; IVA 7.524; ant. IVA 3.420; ant. IRAE 1.368. Total US$ 18.316,13."),
  f(35, "p06-s5", "Ejemplo 3 (cosméticos, IMESI 10%, CIF 16.350)", "Contribuyente: total US$ 12.790,11 (costo 3.915,33). No contribuyente: base 28.939,50; IMESI 2.893,95; IVA 6.366,69; sin anticipos."),
  f(36, "p06-s5", "Ejercicio E7 (particular, CIF 3.000, TGA 20%)", "TGA 600; TC 150; TSA 6; TSE 48; escáner 14,13; IVA 1.188 sobre base 5.400. Total US$ 2.006,13, el 67% del CIF."),
  f(37, "p06-s5", "¿Qué es costo y qué se recupera en el DUA?", "Costo: TGA, TC, TSA, TSE, escáner, LATU, honorarios. Recuperable (contribuyente): IVA, anticipos de IVA e IRAE, anticipo de IMESI."),
]
