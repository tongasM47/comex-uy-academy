import type { Question } from '../types'

// Preguntas del módulo 09. Base: docs/research/03_regimenes_exportacion.md (y 01/02 para origen y CAROU).
export const p09Questions: Question[] = [
  {
    "id": "q-p09-001",
    "moduleId": "p09",
    "subtopicId": "p09-s1",
    "difficulty": 1,
    "prompt": "Como regla general, ¿cómo trata Uruguay a las exportaciones?",
    "options": [
      "No las grava, y la exportación de bienes no lleva IVA",
      "Las grava con un 5 % general",
      "Les cobra IVA del 22 %",
      "Les cobra el AEC"
    ],
    "answer": 0,
    "explanation": "Uruguay como regla no grava las exportaciones; las excepciones son puntuales (por ejemplo, la detracción a los cueros). El exportador además recupera el IVA de compras (Dec. 220/998 art. 129)."
  },
  {
    "id": "q-p09-002",
    "moduleId": "p09",
    "subtopicId": "p09-s1",
    "difficulty": 1,
    "prompt": "¿Cuándo se presenta la declaración de exportación?",
    "options": [
      "Dentro de los 30 días posteriores al embarque",
      "Antes de la salida del medio de transporte",
      "Cuando se cobra la exportación",
      "Al momento de emitir la proforma"
    ],
    "answer": 1,
    "explanation": "CAROU art. 108: la declaración se presenta antes de la salida del medio de transporte. Además el art. 110 admite el despacho directo sin depósito temporal de exportación."
  },
  {
    "id": "q-p09-003",
    "moduleId": "p09",
    "subtopicId": "p09-s1",
    "difficulty": 2,
    "prompt": "¿Cuál es el plazo para solicitar canal en un DUA de exportación?",
    "options": [
      "5 días hábiles desde la numeración",
      "90 días desde el embarque",
      "30 días corridos desde la numeración; si no, el DUA se anula",
      "No hay plazo"
    ],
    "answer": 2,
    "explanation": "Según el procedimiento de DUA digital de exportación de la DNA, la solicitud de canal se hace dentro de 30 días corridos de la numeración. Los 5 días hábiles son para presentarse si toca canal rojo."
  },
  {
    "id": "q-p09-004",
    "moduleId": "p09",
    "subtopicId": "p09-s1",
    "difficulty": 2,
    "prompt": "En exportación, ¿cuáles son los canales habituales en LUCIA?",
    "options": [
      "Verde, naranja y rojo siempre",
      "Solo rojo",
      "Azul y blanco",
      "Verde y rojo; el naranja es excepcional"
    ],
    "answer": 3,
    "explanation": "Según el procedimiento de la DNA, en exportación se asigna verde (libramiento automático) o rojo (verificación por un vista); el naranja es excepcional."
  },
  {
    "id": "q-p09-005",
    "moduleId": "p09",
    "subtopicId": "p09-s1",
    "difficulty": 2,
    "prompt": "Si un DUA de exportación va a canal rojo, ¿cuánto tiempo hay para presentarse?",
    "options": [
      "5 días hábiles",
      "30 días corridos",
      "24 horas",
      "60 días"
    ],
    "answer": 0,
    "explanation": "En canal rojo hay que presentarse dentro de 5 días hábiles para que el vista verifique la mercadería y la documentación."
  },
  {
    "id": "q-p09-006",
    "moduleId": "p09",
    "subtopicId": "p09-s1",
    "difficulty": 3,
    "prompt": "¿En qué rango de numeración se ubican los DUA de exportación en LUCIA?",
    "options": [
      "1 a 499.999",
      "500.001 a 749.999",
      "750.000 a 999.999",
      "No tienen rango propio"
    ],
    "answer": 1,
    "explanation": "La investigación de la DNA indica para exportación el rango 500.001-749.999, lo que permite distinguirlo de un DUA de importación."
  },
  {
    "id": "q-p09-007",
    "moduleId": "p09",
    "subtopicId": "p09-s1",
    "difficulty": 2,
    "prompt": "¿Qué entidades pueden emitir certificados de origen en Uruguay según el Decreto 182/016?",
    "options": [
      "Solo la DNA",
      "Solo Uruguay XXI",
      "DNI-MIEM, MGAP, Cámara de Industrias, Cámara Mercantil, Cámara Nacional de Comercio y Servicios y Unión de Exportadores",
      "Cualquier despachante de aduana"
    ],
    "answer": 2,
    "explanation": "El Decreto 182/016 habilita a esas entidades; la Asesoría de Política Comercial del MEF administra los regímenes de origen y las audita."
  },
  {
    "id": "q-p09-008",
    "moduleId": "p09",
    "subtopicId": "p09-s1",
    "difficulty": 1,
    "prompt": "¿Desde cuándo es obligatorio el Certificado de Origen Digital (COD) para exportar con preferencia a Argentina y Brasil?",
    "options": [
      "Desde el 18/07/2024",
      "Desde el 01/01/2026",
      "Desde el 25/09/2014",
      "Desde el 01/02/2020"
    ],
    "answer": 3,
    "explanation": "El Decreto 4/020 lo hizo obligatorio desde el 01/02/2020; el papel solo se admite por fuerza mayor, avisando a la APC en 2 días hábiles."
  },
  {
    "id": "q-p09-009",
    "moduleId": "p09",
    "subtopicId": "p09-s1",
    "difficulty": 2,
    "prompt": "En el Régimen de Origen MERCOSUR vigente desde el 18/07/2024, ¿cuánto vale el certificado?",
    "options": [
      "12 meses desde su emisión",
      "180 días desde su emisión",
      "90 días desde la factura",
      "Indefinidamente"
    ],
    "answer": 0,
    "explanation": "El régimen nuevo extiende la validez a 12 meses (antes 180 días) y permite emitirlo dentro de los 180 días corridos desde la factura comercial."
  },
  {
    "id": "q-p09-010",
    "moduleId": "p09",
    "subtopicId": "p09-s1",
    "difficulty": 2,
    "prompt": "Una mercadería sale en exportación temporaria en el mismo estado y no se cumplen sus condiciones. Según el CAROU art. 113:",
    "options": [
      "Se considera importada",
      "Se considera exportada definitivamente",
      "Se decomisa",
      "Se prorroga automáticamente"
    ],
    "answer": 1,
    "explanation": "El incumplimiento en la exportación temporaria en el mismo estado hace que se la considere exportada definitivamente."
  },
  {
    "id": "q-p09-011",
    "moduleId": "p09",
    "subtopicId": "p09-s1",
    "difficulty": 3,
    "prompt": "¿Qué regímenes de exportación enumera el art. 107 del CAROU?",
    "options": [
      "Exportación definitiva, draw back, toma de stock y admisión temporaria",
      "Exportación definitiva y zona franca",
      "Exportación definitiva, temporaria en el mismo estado, temporaria para perfeccionamiento pasivo y tránsito",
      "Solo la exportación definitiva"
    ],
    "answer": 2,
    "explanation": "El art. 107 lista esos cuatro regímenes. Draw back y toma de stock son mecanismos de la Ley 18.184, no regímenes de exportación del CAROU."
  },
  {
    "id": "q-p09-012",
    "moduleId": "p09",
    "subtopicId": "p09-s1",
    "difficulty": 2,
    "prompt": "¿Qué es el OEC?",
    "options": [
      "Un certificado de origen electrónico",
      "Un régimen obligatorio para todos los exportadores",
      "Un permiso del LATU",
      "Una certificación voluntaria y gratuita de la DNA para operadores confiables, por 3 años, con controles simplificados"
    ],
    "answer": 3,
    "explanation": "El Operador Económico Calificado (Ley 19.149 art. 148; Dec. 51/014; CAROU art. 40) se basa en el Marco SAFE de la OMA y da menos inspecciones y prioridad."
  },
  {
    "id": "q-p09-013",
    "moduleId": "p09",
    "subtopicId": "p09-s2",
    "difficulty": 1,
    "prompt": "¿Cuál es la tasa base de la detracción a la exportación de cueros bovinos (41.04.11 y 41.04.19)?",
    "options": [
      "5 %, reducida a 0 % por prórrogas sucesivas",
      "22 %",
      "10 %, sin reducciones",
      "No existe ninguna detracción"
    ],
    "answer": 0,
    "explanation": "El Decreto 639/006 fija el 5 %, pero se viene reduciendo a 0 % por prórrogas anuales; la última confirmada es el Decreto 122/025 del 10/06/2025."
  },
  {
    "id": "q-p09-014",
    "moduleId": "p09",
    "subtopicId": "p09-s2",
    "difficulty": 2,
    "prompt": "¿Cuál es el último decreto confirmado que prorrogó el 0 % de la detracción a los cueros?",
    "options": [
      "Decreto 120/026",
      "Decreto 122/025, del 10/06/2025",
      "Decreto 505/009",
      "Decreto 48/022"
    ],
    "answer": 1,
    "explanation": "La serie es 269/020, 174/021, 188/022, 144/023, 120/024 y 122/025. No está confirmada una prórroga en junio de 2026: conviene verificarlo antes de cotizar."
  },
  {
    "id": "q-p09-015",
    "moduleId": "p09",
    "subtopicId": "p09-s2",
    "difficulty": 1,
    "prompt": "¿Cuánto es la tasa de inspección no intrusiva (escáner) por DUA de exportación?",
    "options": [
      "36 UI",
      "400 UI",
      "85 UI",
      "0,2 % del FOB"
    ],
    "answer": 2,
    "explanation": "Decreto 235/024 y RG DNA 57/2024: 85 UI por DUA. 36 UI es la tasa VUCE por certificado y 400 UI la rectificación post-control."
  },
  {
    "id": "q-p09-016",
    "moduleId": "p09",
    "subtopicId": "p09-s2",
    "difficulty": 2,
    "prompt": "Un exportador numera un DUA y luego lo anula. ¿Paga la tasa de escáner?",
    "options": [
      "No, solo si se escanea el contenedor",
      "Solo si el DUA fue a canal rojo",
      "No, nunca se paga en exportación",
      "Sí, se paga aunque se anule el DUA"
    ],
    "answer": 3,
    "explanation": "La RG DNA 57/2024 aclara que la tasa se paga aunque se anule el DUA. Están exentos solo los envíos aéreos de hasta 20 kg y hasta US$ 200."
  },
  {
    "id": "q-p09-017",
    "moduleId": "p09",
    "subtopicId": "p09-s2",
    "difficulty": 2,
    "prompt": "¿Qué envíos están exentos de la tasa de escáner?",
    "options": [
      "Envíos aéreos de hasta 20 kg y hasta US$ 200",
      "Todas las exportaciones a Brasil",
      "Los contenedores refrigerados",
      "Las exportaciones desde zona franca"
    ],
    "answer": 0,
    "explanation": "La exención de la RG DNA 57/2024 alcanza a los envíos aéreos de hasta 20 kg y US$ 200."
  },
  {
    "id": "q-p09-018",
    "moduleId": "p09",
    "subtopicId": "p09-s2",
    "difficulty": 2,
    "prompt": "¿Cuánto cobra la VUCE por cada certificado usado en una operación?",
    "options": [
      "85 UI",
      "36 UI",
      "US$ 50",
      "1 % del FOB"
    ],
    "answer": 1,
    "explanation": "La VUCE se autofinancia con una tasa de 36 UI por certificado usado en una operación (desde 2016)."
  },
  {
    "id": "q-p09-019",
    "moduleId": "p09",
    "subtopicId": "p09-s2",
    "difficulty": 3,
    "prompt": "Un embarque usa dos certificados VUCE y un DUA. ¿Cuántas UI suman la tasa de escáner y las tasas VUCE?",
    "options": [
      "121 UI",
      "170 UI",
      "157 UI",
      "85 UI"
    ],
    "answer": 2,
    "explanation": "85 UI (escáner) + 2 × 36 UI (VUCE) = 157 UI."
  },
  {
    "id": "q-p09-020",
    "moduleId": "p09",
    "subtopicId": "p09-s2",
    "difficulty": 2,
    "prompt": "¿Cuánto cuesta rectificar un DUA después del control aduanero?",
    "options": [
      "85 UI",
      "4.000 UI",
      "Es gratis",
      "400 UI"
    ],
    "answer": 3,
    "explanation": "CAROU art. 70: la rectificación luego del control paga una tasa de 400 UI por declaración."
  },
  {
    "id": "q-p09-021",
    "moduleId": "p09",
    "subtopicId": "p09-s2",
    "difficulty": 3,
    "prompt": "Si la detracción a cueros volviera al 5 %, ¿cuánto pagaría una exportación de cueros de US$ 120.000?",
    "options": [
      "US$ 6.000",
      "US$ 600",
      "US$ 12.000",
      "US$ 26.400"
    ],
    "answer": 0,
    "explanation": "120.000 × 5 % = 6.000. Con la tasa reducida a 0 % no se paga nada; por eso cada prórroga anual importa al sector."
  },
  {
    "id": "q-p09-022",
    "moduleId": "p09",
    "subtopicId": "p09-s3",
    "difficulty": 1,
    "prompt": "¿Qué ley regula la devolución de tributos a los exportadores?",
    "options": [
      "Ley 18.184",
      "Ley 16.492 art. 2 (texto dado por la Ley 19.149 art. 362)",
      "Ley 15.921",
      "Ley 19.276"
    ],
    "answer": 1,
    "explanation": "La Ley 16.492 art. 2 regula la devolución de los impuestos indirectos incluidos en el costo de bienes industrializados exportados; las tasas están en el Decreto 48/022."
  },
  {
    "id": "q-p09-023",
    "moduleId": "p09",
    "subtopicId": "p09-s3",
    "difficulty": 2,
    "prompt": "¿Qué devuelve exactamente la devolución de tributos de la Ley 16.492?",
    "options": [
      "El arancel pagado al importar los insumos",
      "El IVA efectivamente pagado en las compras",
      "Los impuestos indirectos incluidos en el costo de bienes industrializados producidos en Uruguay, como un porcentaje del valor exportado",
      "El IRAE del ejercicio"
    ],
    "answer": 2,
    "explanation": "Es un porcentaje fijo por posición NCM. El arancel de insumos se recupera por draw back y el IVA de compras por el mecanismo del Dec. 220/998 art. 129."
  },
  {
    "id": "q-p09-024",
    "moduleId": "p09",
    "subtopicId": "p09-s3",
    "difficulty": 2,
    "prompt": "¿Qué decreto prorrogó hasta el 31/05/2027 el régimen transitorio del Anexo II del Decreto 48/022?",
    "options": [
      "Decreto 127/025",
      "Decreto 173/024",
      "Decreto 505/009",
      "Decreto 120/026"
    ],
    "answer": 3,
    "explanation": "El Decreto 120/026, del 01/06/2026, prorrogó el Anexo II hasta el 31/05/2027. El 127/025 lo había llevado hasta el 31/05/2026."
  },
  {
    "id": "q-p09-025",
    "moduleId": "p09",
    "subtopicId": "p09-s3",
    "difficulty": 2,
    "prompt": "¿Cuándo es exigible el crédito de la devolución de tributos?",
    "options": [
      "El primer día del quinto mes posterior al embarque",
      "Al día siguiente del embarque",
      "A los 20 días hábiles del embarque",
      "Al cierre del ejercicio fiscal"
    ],
    "answer": 0,
    "explanation": "Decreto 435/002: el crédito es exigible el primer día del quinto mes posterior al embarque. Los 20 días hábiles corresponden al pago del draw back por el BROU."
  },
  {
    "id": "q-p09-026",
    "moduleId": "p09",
    "subtopicId": "p09-s3",
    "difficulty": 3,
    "prompt": "Una exportación embarcada el 14/07/2026 genera un crédito de devolución. ¿Desde qué fecha es exigible?",
    "options": [
      "01/11/2026",
      "01/12/2026",
      "14/12/2026",
      "01/01/2027"
    ],
    "answer": 1,
    "explanation": "El quinto mes posterior a julio es diciembre (agosto 1, septiembre 2, octubre 3, noviembre 4, diciembre 5), y el crédito es exigible el primer día de ese mes."
  },
  {
    "id": "q-p09-027",
    "moduleId": "p09",
    "subtopicId": "p09-s3",
    "difficulty": 2,
    "prompt": "¿A quién se puede endosar un certificado de crédito de devolución de tributos?",
    "options": [
      "A cualquier persona",
      "Solo a la DGI",
      "Solo a bancos o cooperativas de intermediación financiera",
      "No se puede endosar"
    ],
    "answer": 2,
    "explanation": "Según el Decreto 435/002, solo el beneficiario puede endosarlo, y solo a bancos o cooperativas de intermediación financiera, para obtener liquidez antes."
  },
  {
    "id": "q-p09-028",
    "moduleId": "p09",
    "subtopicId": "p09-s3",
    "difficulty": 3,
    "prompt": "Una posición del Anexo II tiene una devolución del 6 % y se exportan US$ 80.000. ¿Cuánto es la devolución?",
    "options": [
      "US$ 480",
      "US$ 1.600",
      "US$ 13.333",
      "US$ 4.800"
    ],
    "answer": 3,
    "explanation": "80.000 × 6 % = 4.800. El monto se convierte a pesos con el tipo de cambio interbancario comprador del día anterior al embarque."
  },
  {
    "id": "q-p09-029",
    "moduleId": "p09",
    "subtopicId": "p09-s3",
    "difficulty": 2,
    "prompt": "¿Cómo recupera el IVA de compras un exportador?",
    "options": [
      "Lo deduce (Dec. 220/998 art. 129) y, como no tiene IVA ventas, pide a la DGI certificados de crédito para pagar otros tributos o cederlos",
      "Lo cobra en efectivo en el BROU al embarcar",
      "No lo puede recuperar",
      "Se lo descuenta del precio al cliente extranjero"
    ],
    "answer": 0,
    "explanation": "El exportador no factura IVA pero sí lo paga en compras; ese crédito fiscal lo usa con certificados de crédito de la DGI."
  },
  {
    "id": "q-p09-030",
    "moduleId": "p09",
    "subtopicId": "p09-s3",
    "difficulty": 2,
    "prompt": "¿Quién tiene derecho a recuperar el IVA de compras por exportación?",
    "options": [
      "Todos los proveedores de la cadena",
      "Solo el exportador directo",
      "El importador extranjero",
      "El despachante"
    ],
    "answer": 1,
    "explanation": "La recuperación corresponde solo al exportador directo; las etapas anteriores de la cadena facturan con IVA normalmente."
  },
  {
    "id": "q-p09-031",
    "moduleId": "p09",
    "subtopicId": "p09-s3",
    "difficulty": 3,
    "prompt": "Una empresa exporta a un usuario de zona franca. ¿Cuándo obtiene la devolución de tributos?",
    "options": [
      "Al numerar el DUA de exportación",
      "Nunca, porque la zona franca es territorio nacional",
      "Cuando se compruebe la salida de la mercadería al exterior",
      "A los 20 días hábiles"
    ],
    "answer": 2,
    "explanation": "CAROU art. 163: cuando se exporta a zona franca, los beneficios a la exportación se otorgan recién al comprobar la salida hacia otro país."
  },
  {
    "id": "q-p09-032",
    "moduleId": "p09",
    "subtopicId": "p09-s3",
    "difficulty": 2,
    "prompt": "¿Se puede acumular la devolución de tributos con las preferencias de la TGA del Decreto 316/992?",
    "options": [
      "Sí, siempre",
      "Solo en el Anexo II",
      "Solo para exportaciones a zona franca",
      "No, el Decreto 48/022 art. 3 lo impide"
    ],
    "answer": 3,
    "explanation": "El art. 3 del Decreto 48/022 establece que la devolución no es acumulable con esas preferencias."
  }
]
