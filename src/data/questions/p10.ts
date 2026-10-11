import type { Question } from '../types'

export const p10Questions: Question[] = [
  {
    id: "q-p10-001",
    moduleId: "p10",
    subtopicId: "p10-s1",
    difficulty: 1,
    prompt: "Según la Constitución uruguaya, ¿qué mayoría se necesita para aprobar un tratado de comercio?",
    options: [
      "Mayoría simple de presentes en la Asamblea General",
      "Dos tercios del Senado",
      "Mayoría absoluta del total de componentes de cada Cámara",
      "No requiere aprobación parlamentaria"
    ],
    answer: 2,
    explanation: "El art. 85, numeral 7, de la Constitución pide aprobación por mayoría absoluta del total de componentes de cada Cámara. Se vota cámara por cámara, no en Asamblea General con los presentes."
  },
  {
    id: "q-p10-002",
    moduleId: "p10",
    subtopicId: "p10-s1",
    difficulty: 1,
    prompt: "¿Quién concluye y suscribe los tratados en Uruguay?",
    options: [
      "El Presidente de la República, actuando con el ministro o ministros respectivos o con el Consejo de Ministros",
      "El Parlamento",
      "La Suprema Corte de Justicia",
      "El Ministerio de Relaciones Exteriores en solitario"
    ],
    answer: 0,
    explanation: "El art. 168, numeral 20, le da al Poder Ejecutivo la facultad de concluir y suscribir tratados, pero necesita la aprobación del Poder Legislativo para ratificarlos."
  },
  {
    id: "q-p10-003",
    moduleId: "p10",
    subtopicId: "p10-s1",
    difficulty: 2,
    prompt: "¿Cuál es la diferencia correcta entre firma y ratificación?",
    options: [
      "Son exactamente lo mismo",
      "La firma siempre expresa el consentimiento definitivo",
      "La ratificación la hace el Parlamento depositando el instrumento",
      "La ratificación es el acto internacional de consentimiento definitivo, posterior a la firma; en Uruguay requiere antes una ley aprobatoria"
    ],
    answer: 3,
    explanation: "El Parlamento aprueba por ley; el Poder Ejecutivo ratifica, es decir, emite y deposita el instrumento de ratificación. Firmar no obliga definitivamente cuando el tratado está sujeto a ratificación."
  },
  {
    id: "q-p10-004",
    moduleId: "p10",
    subtopicId: "p10-s1",
    difficulty: 1,
    prompt: "¿Qué parte de un tratado sirve para interpretarlo pero no crea obligaciones directas?",
    options: [
      "Los anexos",
      "El preámbulo",
      "Las cláusulas finales",
      "Los protocolos"
    ],
    answer: 1,
    explanation: "El preámbulo contiene los considerandos: motivos y objetivos. Forma parte del contexto para interpretar (art. 31.2 de la Convención de Viena), pero no impone obligaciones por sí mismo. Los anexos, en cambio, son parte integrante y obligatoria."
  },
  {
    id: "q-p10-005",
    moduleId: "p10",
    subtopicId: "p10-s1",
    difficulty: 2,
    prompt: "¿Qué es una reserva a un tratado?",
    options: [
      "Una enmienda acordada por todas las partes",
      "Una declaración unilateral de un Estado que excluye o modifica para sí los efectos de ciertas disposiciones",
      "La denuncia o retiro del tratado",
      "Un anexo técnico con listas arancelarias"
    ],
    answer: 1,
    explanation: "La reserva es unilateral y no se admite si el tratado la prohíbe o si es incompatible con su objeto y fin. Los tratados de integración como los de ALADI o MERCOSUR normalmente no admiten reservas."
  },
  {
    id: "q-p10-006",
    moduleId: "p10",
    subtopicId: "p10-s1",
    difficulty: 2,
    prompt: "¿Qué principio de la Convención de Viena dice que todo tratado en vigor obliga y debe cumplirse de buena fe?",
    options: [
      "Rebus sic stantibus",
      "Cláusula de la nación más favorecida",
      "Principio de convergencia",
      "Pacta sunt servanda (art. 26)"
    ],
    answer: 3,
    explanation: "Pacta sunt servanda está en el art. 26. Se complementa con el art. 27: un Estado no puede invocar su derecho interno para justificar el incumplimiento. La convergencia es un principio de ALADI, no de la Convención de Viena."
  },
  {
    id: "q-p10-007",
    moduleId: "p10",
    subtopicId: "p10-s1",
    difficulty: 3,
    prompt: "El acuerdo comercial interino MERCOSUR–UE se firmó el 17/01/2026. ¿Cómo lo aprobó Uruguay?",
    options: [
      "Por la Ley N.º 20.462, completando la ratificación el 26/02/2026 junto con Argentina",
      "Por decreto del Poder Ejecutivo, sin pasar por el Parlamento",
      "Por la Ley N.º 19.276, que es el Código Aduanero",
      "Todavía no lo aprobó a octubre de 2026"
    ],
    answer: 0,
    explanation: "Es un ejemplo real del circuito uruguayo: firma por el Ejecutivo, ley aprobatoria del Parlamento (Ley 20.462) y ratificación. La Ley 19.276 es el CAROU, no tiene que ver con este acuerdo."
  },
  {
    id: "q-p10-008",
    moduleId: "p10",
    subtopicId: "p10-s1",
    difficulty: 2,
    prompt: "¿Qué artículo de la Convención de Viena permite aplicar un tratado total o parcialmente antes de que entre en vigor, como ocurrió con el acuerdo con la UE?",
    options: [
      "El art. 26, pacta sunt servanda",
      "El art. 102 de la Carta de la ONU",
      "El art. 25, sobre aplicación provisional",
      "El art. 19, sobre reservas"
    ],
    answer: 2,
    explanation: "La aplicación provisional (art. 25) procede si el tratado lo prevé o las partes lo acuerdan. Es exactamente lo que pasó con el iTA MERCOSUR–UE desde el 1/5/2026."
  },
  {
    id: "q-p10-009",
    moduleId: "p10",
    subtopicId: "p10-s2",
    difficulty: 1,
    prompt: "¿Qué etapa de integración agrega un arancel externo común a una zona de libre comercio?",
    options: [
      "El mercado común",
      "La zona de preferencias arancelarias",
      "La unión económica",
      "La unión aduanera"
    ],
    answer: 3,
    explanation: "Unión aduanera = zona de libre comercio + Arancel Externo Común + política comercial común frente a terceros. El mercado común agrega además la libre circulación de factores."
  },
  {
    id: "q-p10-010",
    moduleId: "p10",
    subtopicId: "p10-s2",
    difficulty: 2,
    prompt: "¿Por qué una zona de libre comercio necesita reglas de origen?",
    options: [
      "Porque la zona de libre comercio tiene moneda común",
      "Porque en ella no existen aduanas",
      "Porque cada país mantiene su propio arancel frente a terceros y hay que evitar la triangulación",
      "Porque lo exige la OMC para cualquier importación"
    ],
    answer: 2,
    explanation: "Si cada socio cobra un arancel distinto a terceros, sin reglas de origen un producto chino podría entrar por el país con arancel más bajo y pasar libre al resto. Las reglas de origen exigen que la mercadería sea realmente del socio."
  },
  {
    id: "q-p10-011",
    moduleId: "p10",
    subtopicId: "p10-s2",
    difficulty: 1,
    prompt: "¿Cuándo se firmó el Tratado de Asunción?",
    options: [
      "El 12/08/1980",
      "El 26/03/1991",
      "El 17/12/1994",
      "El 18/02/2002"
    ],
    answer: 1,
    explanation: "El Tratado de Asunción (26/03/1991) creó el MERCOSUR. 12/08/1980 es el Tratado de Montevideo de ALADI; 17/12/1994 es Ouro Preto; 18/02/2002 es Olivos."
  },
  {
    id: "q-p10-012",
    moduleId: "p10",
    subtopicId: "p10-s2",
    difficulty: 2,
    prompt: "¿Qué hizo el Protocolo de Ouro Preto (1994)?",
    options: [
      "Fijó la estructura institucional definitiva y le dio personalidad jurídica internacional al MERCOSUR",
      "Creó el Tribunal Permanente de Revisión",
      "Incorporó a Bolivia como Estado Parte",
      "Estableció la cláusula democrática"
    ],
    answer: 0,
    explanation: "El TPR viene del Protocolo de Olivos (2002) y la cláusula democrática del Protocolo de Ushuaia (1998). Ouro Preto ordenó los órganos y estableció la toma de decisiones por consenso."
  },
  {
    id: "q-p10-013",
    moduleId: "p10",
    subtopicId: "p10-s2",
    difficulty: 1,
    prompt: "¿Cómo se llaman las normas que dicta el Grupo Mercado Común (GMC)?",
    options: [
      "Resoluciones",
      "Decisiones",
      "Directivas",
      "Recomendaciones"
    ],
    answer: 0,
    explanation: "CMC dicta Decisiones; GMC, Resoluciones; CCM, Directivas. Un truco: de arriba hacia abajo, D-R-D (Decisiones, Resoluciones, Directivas)."
  },
  {
    id: "q-p10-014",
    moduleId: "p10",
    subtopicId: "p10-s2",
    difficulty: 1,
    prompt: "¿Dónde tiene sede el Tribunal Permanente de Revisión del MERCOSUR?",
    options: [
      "En Montevideo",
      "En Buenos Aires",
      "En Asunción",
      "En Brasilia"
    ],
    answer: 2,
    explanation: "El TPR está en Asunción. En Montevideo están la Secretaría del MERCOSUR y el PARLASUR, por eso es fácil confundirse."
  },
  {
    id: "q-p10-015",
    moduleId: "p10",
    subtopicId: "p10-s2",
    difficulty: 1,
    prompt: "¿Qué país está suspendido como Estado Parte del MERCOSUR a 2026?",
    options: [
      "Bolivia",
      "Venezuela",
      "Chile",
      "Paraguay"
    ],
    answer: 1,
    explanation: "Venezuela está suspendida desde 2016 por incumplir el acervo y desde 2017 por el Protocolo de Ushuaia. Bolivia es Estado Parte en proceso de adhesión y Chile es Estado Asociado."
  },
  {
    id: "q-p10-016",
    moduleId: "p10",
    subtopicId: "p10-s2",
    difficulty: 2,
    prompt: "Desde su incorporación en 2024, ¿qué plazo tiene Bolivia para incorporar el acervo, el AEC, la NCM y el régimen de origen?",
    options: [
      "1 año",
      "10 años",
      "No tiene plazo",
      "4 años"
    ],
    answer: 3,
    explanation: "Bolivia tiene 4 años desde 2024, es decir, alrededor de 2028. Además, los acuerdos externos firmados por los cuatro fundadores (como el de la UE o el de EFTA) no la incluyen como parte."
  },
  {
    id: "q-p10-017",
    moduleId: "p10",
    subtopicId: "p10-s2",
    difficulty: 1,
    prompt: "¿Cuántos dígitos tiene la Nomenclatura Común del MERCOSUR (NCM)?",
    options: [
      "6 dígitos",
      "8 dígitos",
      "10 dígitos",
      "12 dígitos"
    ],
    answer: 1,
    explanation: "La NCM toma los 6 dígitos del Sistema Armonizado y agrega 2 dígitos MERCOSUR, total 8."
  },
  {
    id: "q-p10-018",
    moduleId: "p10",
    subtopicId: "p10-s2",
    difficulty: 2,
    prompt: "¿Qué establece la Decisión CMC 32/00?",
    options: [
      "El compromiso de negociar en forma conjunta acuerdos comerciales con terceros que otorguen preferencias arancelarias",
      "El Arancel Externo Común vigente desde 1995",
      "La creación del PARLASUR",
      "El régimen de origen intrazona"
    ],
    answer: 0,
    explanation: "La Dec. 32/00 es el centro del debate sobre la flexibilización: Uruguay pidió poder negociar con más libertad (por ejemplo con el CPTPP o China), y el acuerdo Argentina–EE.UU. de 2026 reavivó la discusión."
  },
  {
    id: "q-p10-019",
    moduleId: "p10",
    subtopicId: "p10-s2",
    difficulty: 2,
    prompt: "¿Desde cuándo rige para Uruguay el TLC MERCOSUR–Singapur?",
    options: [
      "Desde el 7/12/2023",
      "Desde el 1/5/2026",
      "Todavía no rige",
      "Desde el 1/3/2026"
    ],
    answer: 3,
    explanation: "Se firmó el 7/12/2023 en Río de Janeiro y entró en vigor para Uruguay, en forma bilateral con Singapur, el 1/3/2026. El 1/5/2026 es la fecha de aplicación provisional del acuerdo con la UE."
  },
  {
    id: "q-p10-020",
    moduleId: "p10",
    subtopicId: "p10-s2",
    difficulty: 3,
    prompt: "¿Cuál es el estado del TLC MERCOSUR–EFTA para Uruguay a octubre de 2026, según la investigación?",
    options: [
      "Vigente desde el 1/1/2026 para todo el MERCOSUR",
      "Negociación lanzada en 2026, sin firma",
      "Firmado el 16/09/2025 y ratificado por Uruguay en junio de 2026, sin vigencia confirmada",
      "Rechazado por el Parlamento uruguayo"
    ],
    answer: 2,
    explanation: "Uruguay lo ratificó en junio de 2026 (poco después de Brasil), pero Argentina y Paraguay seguían en trámite y no hay confirmación de que ya rija. Además en Suiza podría haber referéndum."
  },
  {
    id: "q-p10-021",
    moduleId: "p10",
    subtopicId: "p10-s2",
    difficulty: 2,
    prompt: "¿En qué situación está la relación de Uruguay con el CPTPP en 2026?",
    options: [
      "Uruguay ya es miembro pleno desde 2025",
      "Uruguay nunca pidió adherir",
      "El MERCOSUR negocia en bloque su ingreso",
      "Hay un Grupo de Trabajo de Adhesión en curso desde que en noviembre de 2025 se decidió iniciar el proceso"
    ],
    answer: 3,
    explanation: "Los miembros del CPTPP decidieron en noviembre de 2025 iniciar el proceso con Uruguay y crearon un grupo de trabajo; en junio de 2026 pidieron acelerarlo. El gobierno estima que puede llevar unos 2 años. Es una vía individual, no del bloque."
  },
  {
    id: "q-p10-022",
    moduleId: "p10",
    subtopicId: "p10-s2",
    difficulty: 1,
    prompt: "¿Cuándo asumió Uruguay la Presidencia Pro Tempore del MERCOSUR?",
    options: [
      "El 6/12/2024",
      "El 30/06/2026",
      "El 17/01/2026",
      "El 1/5/2026"
    ],
    answer: 1,
    explanation: "Uruguay la recibió de Paraguay el 30/06/2026 en la LXVIII Cumbre. La PPT rota cada semestre en orden alfabético."
  },
  {
    id: "q-p10-023",
    moduleId: "p10",
    subtopicId: "p10-s3",
    difficulty: 1,
    prompt: "¿Qué es el ACE 18?",
    options: [
      "El acuerdo de ALADI que protocoliza el programa de liberación comercial del MERCOSUR",
      "El Arancel Externo Común número 18",
      "El TLC Uruguay–México",
      "Un régimen de origen de la Unión Europea"
    ],
    answer: 0,
    explanation: "El ACE 18 (29/11/1991) registra en ALADI el programa de liberación del Tratado de Asunción; por eso figura en el certificado de origen MERCOSUR. \"AEC 18\" no existe: es una confusión de siglas."
  },
  {
    id: "q-p10-024",
    moduleId: "p10",
    subtopicId: "p10-s3",
    difficulty: 1,
    prompt: "¿Cómo está registrado en ALADI el TLC Uruguay–México?",
    options: [
      "ACE 35",
      "ACE 73",
      "ACE 60",
      "ACE 18"
    ],
    answer: 2,
    explanation: "ACE 60 = Uruguay–México (vigente desde el 15/07/2004). ACE 35 = MERCOSUR–Chile; ACE 73 = ALC Uruguay–Chile; ACE 18 = MERCOSUR."
  },
  {
    id: "q-p10-025",
    moduleId: "p10",
    subtopicId: "p10-s3",
    difficulty: 1,
    prompt: "¿Cuántos países miembros tiene la ALADI?",
    options: [
      "10",
      "11",
      "13",
      "12"
    ],
    answer: 2,
    explanation: "Argentina, Bolivia, Brasil, Chile, Colombia, Cuba, Ecuador, México, Panamá, Paraguay, Perú, Uruguay y Venezuela."
  },
  {
    id: "q-p10-026",
    moduleId: "p10",
    subtopicId: "p10-s3",
    difficulty: 2,
    prompt: "¿Cuál es el mecanismo de ALADI en el que participan todos los miembros y que consiste en una rebaja porcentual del arancel?",
    options: [
      "El AAP (Acuerdo de Alcance Parcial)",
      "El ACE (Acuerdo de Complementación Económica)",
      "El AEC (Arancel Externo Común)",
      "La PAR (Preferencia Arancelaria Regional)"
    ],
    answer: 3,
    explanation: "La PAR es regional y porcentual, según la categoría de desarrollo de cada país. Los AAP y los ACE son entre algunos miembros. El AEC es del MERCOSUR, no de ALADI."
  },
  {
    id: "q-p10-027",
    moduleId: "p10",
    subtopicId: "p10-s3",
    difficulty: 2,
    prompt: "¿Qué tratado creó la ALADI y a qué organización reemplazó?",
    options: [
      "El Tratado de Montevideo de 1980, que reemplazó a la ALALC",
      "El Tratado de Asunción de 1991, que reemplazó al GATT",
      "El Tratado de Montevideo de 1960, que reemplazó a la CEPAL",
      "El Protocolo de Ouro Preto, que reemplazó al MERCOSUR"
    ],
    answer: 0,
    explanation: "La ALALC (Tratado de Montevideo de 1960) no logró su zona de libre comercio en plazos fijos. El TM80, del 12/08/1980, creó la ALADI con un enfoque gradual y flexible."
  },
  {
    id: "q-p10-028",
    moduleId: "p10",
    subtopicId: "p10-s3",
    difficulty: 3,
    prompt: "Un exportador uruguayo vende queso a Chile. ¿Qué acuerdos podría invocar en el certificado de origen?",
    options: [
      "El ACE 18, porque Chile es Estado Asociado del MERCOSUR",
      "El ACE 35 (MERCOSUR–Chile) o el ACE 73 (ALC Uruguay–Chile), según el que use el importador",
      "El ACE 60, porque es el TLC bilateral de Uruguay",
      "Ninguno: Chile no tiene acuerdo con Uruguay"
    ],
    answer: 1,
    explanation: "Con Chile conviven el acuerdo del bloque (ACE 35) y el bilateral de nueva generación (ACE 73). El certificado debe invocar el mismo acuerdo que declarará el importador. El ACE 18 es solo intra-MERCOSUR y el ACE 60 es con México."
  },
  {
    id: "q-p10-029",
    moduleId: "p10",
    subtopicId: "p10-s3",
    difficulty: 2,
    prompt: "¿Qué cubre frente a la OMC a los acuerdos parciales de ALADI?",
    options: [
      "El art. XXIV del GATT exclusivamente",
      "El Protocolo de Olivos",
      "La Cláusula de Habilitación de 1979",
      "La Convención de Viena de 1969"
    ],
    answer: 2,
    explanation: "La Cláusula de Habilitación permite a los países en desarrollo darse preferencias entre sí sin extenderlas a todos los miembros de la OMC; es el paraguas de ALADI y sus ACE."
  },
  {
    id: "q-p10-030",
    moduleId: "p10",
    subtopicId: "p10-s3",
    difficulty: 2,
    prompt: "¿Quién es el depositario de los acuerdos de ALADI?",
    options: [
      "La Secretaría General de ALADI, en Montevideo",
      "El Gobierno de Paraguay",
      "La Secretaría de la ONU en Nueva York",
      "El Ministerio de Economía de Uruguay"
    ],
    answer: 0,
    explanation: "La Secretaría General es el órgano técnico y depositario de los acuerdos ALADI. El Gobierno de Paraguay es el depositario de los tratados del MERCOSUR."
  },
  {
    id: "q-p10-031",
    moduleId: "p10",
    subtopicId: "p10-s4",
    difficulty: 1,
    prompt: "¿Desde cuándo se aplica provisionalmente el Acuerdo Comercial Interino MERCOSUR–UE?",
    options: [
      "Desde el 6/12/2024",
      "Desde el 17/01/2026",
      "Todavía no se aplica",
      "Desde el 1/05/2026"
    ],
    answer: 3,
    explanation: "6/12/2024 fue la conclusión política (Montevideo) y 17/01/2026 la firma (Asunción). La aplicación provisional del iTA empezó el 1/05/2026 para los cuatro Estados Partes."
  },
  {
    id: "q-p10-032",
    moduleId: "p10",
    subtopicId: "p10-s4",
    difficulty: 2,
    prompt: "¿Por qué la UE dividió el acuerdo con el MERCOSUR en EMPA e iTA?",
    options: [
      "Por pedido del MERCOSUR",
      "Para que la parte comercial, de competencia exclusiva de la UE, pudiera aprobarse sin la ratificación de los 27 parlamentos nacionales",
      "Porque el TJUE lo ordenó",
      "Para excluir la agricultura del acuerdo"
    ],
    answer: 1,
    explanation: "El EMPA es mixto: necesita unanimidad del Consejo, el Parlamento Europeo y los 27 Estados. El iTA es solo-UE: mayoría cualificada en el Consejo y aprobación del Parlamento Europeo. Cuando entre en vigor el EMPA, reemplazará al iTA."
  },
  {
    id: "q-p10-033",
    moduleId: "p10",
    subtopicId: "p10-s4",
    difficulty: 2,
    prompt: "Durante la aplicación provisional, ¿cómo se asignan en Uruguay las cuotas de carne del acuerdo con la UE?",
    options: [
      "Por licitación del Banco Central",
      "Por \"primero llegado, primero servido\", con certificados de INAC",
      "Por sorteo del MEF",
      "No hay cuotas: todo entra libre"
    ],
    answer: 1,
    explanation: "Como el MERCOSUR no acordó todavía la distribución interna de las cuotas, se usa el criterio de primero llegado. INAC certifica carne bovina, aviar y porcina; el MEF el resto, vía VUCE."
  },
  {
    id: "q-p10-034",
    moduleId: "p10",
    subtopicId: "p10-s4",
    difficulty: 1,
    prompt: "¿En qué año dejó Uruguay de ser beneficiario del SGP de la Unión Europea?",
    options: [
      "2004",
      "2019",
      "2026",
      "2014"
    ],
    answer: 3,
    explanation: "Desde el 1/01/2014, por la reforma del SGP europeo que excluyó a los países de ingreso alto o medio-alto. Por eso el acuerdo MERCOSUR–UE era tan importante para recuperar acceso preferencial."
  },
  {
    id: "q-p10-035",
    moduleId: "p10",
    subtopicId: "p10-s4",
    difficulty: 3,
    prompt: "¿Qué resolvió el TJUE el 29/09/2026 en el asunto C-460/26 R (Polonia c. Consejo)?",
    options: [
      "Rechazó las medidas cautelares que pedía Polonia para suspender la aplicación provisional; el fondo sigue pendiente",
      "Anuló el acuerdo con el MERCOSUR",
      "Emitió el dictamen pedido por el Parlamento Europeo declarando el acuerdo incompatible",
      "Ordenó suspender las cuotas de carne"
    ],
    answer: 0,
    explanation: "La Vicepresidencia del Tribunal rechazó las cautelares porque Polonia no demostró un perjuicio grave e irreparable. Siguen pendientes el recurso de anulación y el dictamen pedido por el Parlamento Europeo el 21/01/2026."
  },
  {
    id: "q-p10-036",
    moduleId: "p10",
    subtopicId: "p10-s4",
    difficulty: 2,
    prompt: "¿Qué tratado hizo que la Unión Europea sustituyera y sucediera jurídicamente a la \"Comunidad Europea\"?",
    options: [
      "El Tratado de Roma (1957)",
      "El Tratado de Maastricht (1992)",
      "El Tratado de Lisboa (2009)",
      "El Acta Única Europea (1986)"
    ],
    answer: 2,
    explanation: "Maastricht creó la UE y renombró la CEE como Comunidad Europea, pero recién con Lisboa (2009) la UE sustituye a la CE y tiene personalidad jurídica única. Desde entonces \"Comunidad Europea\" ya no existe jurídicamente."
  },
  {
    id: "q-p10-037",
    moduleId: "p10",
    subtopicId: "p10-s4",
    difficulty: 2,
    prompt: "Con la aplicación provisional del acuerdo con la UE, ¿qué pasó con la carne de la cuota Hilton?",
    options: [
      "Quedó con 7,5% de arancel",
      "Se eliminó la cuota Hilton",
      "Pasó a pagar 20%",
      "Pasó a arancel 0% intracuota"
    ],
    answer: 3,
    explanation: "La cuota Hilton existente pasó a 0% desde el inicio. La nueva cuota MERCOSUR de 99.000 t de carne bovina tiene 7,5% intracuota, escalonada en 5 años."
  },
  {
    id: "q-p10-038",
    moduleId: "p10",
    subtopicId: "p10-s4",
    difficulty: 3,
    prompt: "En materia de origen, ¿qué novedad trae el acuerdo MERCOSUR–UE que destaca el MRREE?",
    options: [
      "Elimina las reglas de origen",
      "Exige certificados emitidos por la Comisión Europea",
      "Permite la autocertificación del origen por el exportador",
      "Solo admite el certificado ACE 18"
    ],
    answer: 2,
    explanation: "El acuerdo permite que el exportador declare el origen en un documento comercial, con una transición desde los certificados emitidos por entidades. Las reglas de origen siguen existiendo, con requisitos por producto y acumulación bilateral."
  },
  {
    id: "q-p10-039",
    moduleId: "p10",
    subtopicId: "p10-s4",
    difficulty: 2,
    prompt: "¿Quién negocia la política comercial en la Unión Europea?",
    options: [
      "Cada Estado miembro por separado",
      "La Comisión Europea, con autorización del Consejo y aprobación del Parlamento Europeo",
      "El Tribunal de Justicia de la UE",
      "El Banco Central Europeo"
    ],
    answer: 1,
    explanation: "La política comercial común es competencia exclusiva de la UE (art. 3 TFUE). La Comisión (DG Trade) negocia, el Consejo autoriza y el Parlamento Europeo aprueba. Si el acuerdo es mixto, también ratifican los parlamentos nacionales."
  }
]
