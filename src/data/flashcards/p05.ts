import type { Flashcard } from '../types'

// Flashcards del módulo 5. Base: investigación 02 (secciones 1 y 2) y 05 (sección 2).

const f = (n: number, subtopicId: string, front: string, back: string): Flashcard => ({
  id: `f-p05-${String(n).padStart(3, '0')}`,
  moduleId: 'p05',
  subtopicId,
  front,
  back,
})

export const p05Flashcards: Flashcard[] = [
  // p05-s1
  f(1, "p05-s1", "¿Cuántos pasos tiene la secuencia de una importación y cómo se agrupan?", "13 pasos: 4 antes del arribo (pro-forma, permisos, pago, embarque), el despacho (5 a 12) y la regularización y archivo (13)."),
  f(2, "p05-s1", "¿Qué es una MNNT?", "Una medida no arancelaria asociada a una NCM: registros o autorizaciones de MSP, MGAP, LATU, URSEA y otros, que se tramitan en la VUCE."),
  f(3, "p05-s1", "Momentos de presentación de documentos en LUCIA", "1 = al numerar el DUA; 2 = al pedir canal; 3 = a posteriori."),
  f(4, "p05-s1", "¿Cuánto puede estar la mercadería en depósito temporal?", "Hasta 12 meses, prorrogables (CAROU arts. 57 a 62)."),
  f(5, "p05-s1", "Tolerancia y plazo ante diferencias con el manifiesto", "Tolerancia del 5% (art. 54); las diferencias se justifican en 8 días hábiles (art. 53)."),
  f(6, "p05-s1", "Formato del número de DUA", "NNN-AAAA-999999: aduana, año y correlativo. Ejemplo: 001-2026-123456."),
  f(7, "p05-s1", "Plazo para pedir canal", "30 días corridos desde la numeración; si no, el DUA vence."),
  f(8, "p05-s1", "Plazos de pago de tributos", "Un solo acto, sin pagos parciales. Agentes de cobranza: hasta el día hábil siguiente (18:00 en el BROU). Tributos internos en la DGI: 7 días hábiles desde la aceptación."),
  f(9, "p05-s1", "¿Qué es DISMERC?", "La observación que envía LUCIA en canal verde: mercadería disponible."),
  f(10, "p05-s1", "Plazo para presentarse a la verificación en canal rojo", "5 días hábiles, entregando el sobre auxiliar con la documentación."),
  f(11, "p05-s1", "¿Qué es el libramiento?", "La autorización de la DNA para disponer de la mercadería (CAROU art. 2). En la oficina: cumplido o levante."),
  f(12, "p05-s1", "RADE y RASO", "RADE: archivo digital homologado de los DAE, por 10 años. RASO: archivo físico de los papeles, con plazo de 5 días hábiles."),
  // p05-s2
  f(13, "p05-s2", "CAROU art. 14", "Define al despachante y le asigna la tramitación de regímenes y declaraciones, salvo las tareas de los agentes de transporte."),
  f(14, "p05-s2", "CAROU art. 15", "Casos en que el despachante no es preceptivo: envíos postales no comerciales, equipaje, entrega expresa hasta unos US$ 200, organismos estatales, residentes que retornan, muestras exentas, comercio fronterizo."),
  f(15, "p05-s2", "CAROU art. 27", "El despachante responde solidariamente con su comitente por tributos aduaneros, reajustes y proventos portuarios. El cambio de destino es solo del comitente."),
  f(16, "p05-s2", "CAROU art. 74", "Selectividad: base legal de los canales (análisis de riesgo más muestra al azar)."),
  f(17, "p05-s2", "CAROU art. 70", "Corrección de una declaración ya registrada; en ciertos casos con un pago de 400 UI."),
  f(18, "p05-s2", "Requisitos del despachante persona física (CAROU art. 16)", "Domicilio en el país, mayoría de edad, secundaria completa, examen ante tribunal de tres miembros, sin ciertas condenas, sin concurso y al día con DGI, BPS y DNA."),
  f(19, "p05-s2", "Garantía del despachante (Dec. 96/015)", "Base US$ 15.000 a la orden de la DNA; crece con el volumen, hasta US$ 70.000 si supera US$ 40 millones anuales."),
  f(20, "p05-s2", "¿Qué no puede hacer un empleado registrado de despachante?", "Firmar el DUA o sus correcciones, actas de reconocimiento o discrepancia, autorrevisiones o acuerdos de pago, ni cobrar devoluciones (Dec. 96/015 art. 7)."),
  f(21, "p05-s2", "Agente de transporte vs. forwarder", "Agente de transporte: representa al buque o avión y presenta el manifiesto. Forwarder: organiza el transporte puerta a puerta, consolida LCL y emite el HBL."),
  // p05-s3
  f(22, "p05-s3", "¿Qué norma creó el DUA y cómo se transmite hoy?", "El Decreto 333/992. Hoy es 100% digital: mensaje XML por red VAN a LUCIA, con la DVA (DV-1)."),
  f(23, "p05-s3", "Vías del DUA", "1 Aduana; 2 importador (justificante legal); 3 despachante; 4 Aduana, controla la salida del recinto; 5 transporte en tránsito; 0 otros usos."),
  f(24, "p05-s3", "Códigos de régimen (casilla A1)", "10 importación definitiva; 20 AT reexpedición mismo estado; 21 AT perfeccionamiento activo; 30 reimportación mismo estado; 31 reimportación con transformación."),
  f(25, "p05-s3", "Formas de despacho (casilla D)", "0 normal; 1 DUA anticipado; 2 abierto en frontera terrestre; 4 normal con asociación de cargas terrestres."),
  f(26, "p05-s3", "Códigos de acuerdo (casilla 61)", "310 ACE 18; 302/3024/3083 ACE 2 Brasil; 111/112 México; 1117/1118/1119 MERCOSUR–UE (desde el 01/05/2026)."),
  f(27, "p05-s3", "Canales en importación y exportación", "Importación: verde, naranja (documental) y rojo (documental + físico). Exportación: solo verde y rojo. A posteriori: marrón, blanco y celeste."),
  f(28, "p05-s3", "Tipos de acción del mensaje DUA", "I inicial; C corrección; V cambio de variables; D cambio de documentación."),
  // p05-s4
  f(29, "p05-s4", "¿Cuándo se abre un nuevo ítem del DUA?", "Por cada NCM de 10 dígitos con iguales condiciones de origen, acuerdo y cupo."),
  f(30, "p05-s4", "Casillas 72, 73 y 74", "72 país de origen; 73 país de procedencia (desde donde se despachó); 74 país de adquisición (donde se compró)."),
  f(31, "p05-s4", "Casillas 84, 85 y 89", "84 valor CIF del ítem; 85 valor en aduana (método 1 OMC + ajustes); 89 VA ajustado + TGA, base de IVA y anticipos."),
  f(32, "p05-s4", "Casillas 58 y 59", "58 peso neto sin envases; 59 peso bruto sin contenedor. En kg, hasta 3 decimales."),
  f(33, "p05-s4", "¿Dónde van el flete, el seguro y el Incoterm en el DUA?", "Flete y seguro no tienen casilla propia: integran el valor en aduana (85). El Incoterm va en la factura asociada, segmento VALFAC01."),
  f(34, "p05-s4", "Casilla 92 (descripción)", "(a) genérica y pública, en español; (c), (d) y (e) técnicas y reservadas; químicos con nombre IUPAC y número CAS."),
  f(35, "p05-s4", "Segmentos asociados del DUA", "IMPDOC01 documentos; IMPCNT01 contenedores; VALFAC01 facturas; ASOMANIF manifiesto; ASOSTOCK stock; ASOMNNT medidas no arancelarias."),
  f(36, "p05-s4", "Casillas 1A/1B y 14", "1A tipo de documento del importador (4 = RUT); 1B número con 12 dígitos y ceros a la izquierda. 14: moneda, única por DUA."),
]
