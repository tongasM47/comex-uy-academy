import type { Subtopic } from '../types'

export const p12Lessons: Subtopic[] = [
  // ─────────────────────────────────────────────────────────────
  {
    id: "p12-s1",
    moduleId: "p12",
    title: "Contenedores, peso volumétrico y fletes",
    summary: "Cómo se mide y se cobra la carga: tipos de contenedor, TEU, FCL y LCL, peso volumétrico aéreo, recargos del flete marítimo, demoras de contenedor y seguro de carga. Son las cuentas que vas a hacer todos los días en un forwarder o en el área de importaciones.",
    minutes: 20,
    sections: [
      {
        heading: "Los contenedores y el TEU",
        blocks: [
          { type: "p", text: "Casi toda la carga general que entra y sale por el **Puerto de Montevideo** viaja en contenedores estándar ISO. Cada naviera tiene su ficha técnica con medidas exactas; los valores de esta tabla son ejemplos de flota citados por la investigación y te sirven como referencia para hacer cuentas:" },
          { type: "table", headers: ["Tipo", "Interior aprox. (largo × ancho × alto)", "Volumen", "Carga útil aprox.", "Uso"], rows: [
            ["**20' Dry** (DV o GP) = 1 TEU", "5,90 × 2,35 × 2,39 m", "~33 m³", "~28 t", "Carga densa o pesada"],
            ["**40' Dry** (DV) = 2 TEU", "12,03 × 2,35 × 2,39 m", "~67-68 m³", "~28,7 t", "Carga general"],
            ["**40' High Cube** (HC) = 2 TEU", "12,03 × 2,35 × 2,70 m", "~76 m³", "~28,6 t", "Carga voluminosa y liviana"],
            ["**Reefer** 20'/40' (RF/RH)", "Algo menor que el seco por el aislamiento", "Varía por naviera", "Variable", "Carne, frutas, lácteos, farma; necesita toma eléctrica"],
            ["**Open Top / Flat Rack**", "—", "—", "—", "Carga sobredimensionada (OOG, *out of gauge*)"],
            ["**Tank** (ISO tank)", "—", "Varía", "—", "Líquidos a granel"]
          ], caption: "Referencias de flota; confirmá siempre con la naviera" },
          { type: "p", text: "El **TEU** (*Twenty-foot Equivalent Unit*) es la unidad con la que se cuentan contenedores en estadísticas y terminales: un 20' es 1 TEU y un 40' (seco o High Cube) es 2 TEU. El **FEU** equivale a 2 TEU. El TEU mide **largo**, no altura: por eso un 40' HC sigue siendo 2 TEU aunque sea más alto." },
          { type: "eli5", text: "El TEU es como contar **cajas de zapatos del mismo tamaño**. Una caja chica (20 pies) vale 1; una caja larga (40 pies) vale 2, porque ocupa el lugar de dos chicas en el estante. Que la caja larga sea un poco más alta no cambia la cuenta." },
          { type: "example", title: "Contenedores no es lo mismo que TEU", text: "En una escala se descargan 120 contenedores de 20' y 210 de 40'. Son **330 contenedores**, pero **540 TEU** (120 × 1 + 210 × 2). Cuando leas que el Puerto de Montevideo movió **857.491 TEU en 2025** (dato de la ANP), pensá que son TEU, no unidades." },
          { type: "callout", tone: "uy", title: "Dónde se mueven en Montevideo", text: "La **TCP** (Terminal Cuenca del Plata, 80% Katoen Natie y 20% ANP) es la terminal especializada de contenedores, con unas 3.000 tomas para reefer. **Montecon** opera los muelles públicos multipropósito. Si trabajás con carne o fruta, el reefer y sus tomas eléctricas van a ser parte de tu vocabulario diario." }
        ]
      },
      {
        heading: "FCL y LCL: contenedor entero o compartido",
        blocks: [
          { type: "list", items: [
            "**FCL** (*Full Container Load*): contratás el contenedor entero, lo cargás y precintás en origen. Suele convenir desde unos **13-15 m³** en adelante, según las tarifas.",
            "**LCL** (*Less than Container Load*): carga suelta compartida. Un forwarder o consolidador **consolida** en origen y **desconsolida** en destino (en Montevideo, en depósitos o terminales habilitados). Se cobra por **W/M** (*weight or measure*): el mayor entre toneladas y metros cúbicos, con la relación **1 t = 1 m³**.",
            "En la consolidación, la naviera emite un **MBL** (*master bill of lading*) al consolidador, y este emite un **HBL** (*house bill of lading*) a cada cliente."
          ] },
          { type: "eli5", text: "**FCL** es alquilar el ómnibus entero para tu familia: salís cuando querés y nadie toca tus cosas. **LCL** es comprar asientos en un ómnibus compartido: pagás solo tu lugar, pero hay que esperar a que suban todos y, al llegar, bajar con cuidado el equipaje de cada uno." },
          { type: "example", title: "Cobro por W/M", text: "Cinco pallets de 1,2 × 1,0 × 1,0 m ocupan **6 m³** y pesan 2.000 kg (**2 t**). El W/M es el mayor de los dos: se cobra por **6 W/M**. Si la tarifa fuera USD 60 por W/M, el flete sería USD 360." },
          { type: "example", title: "¿FCL o LCL para 14 m³?", text: "Una carga de 14 m³ y 3 t. Cotización LCL: USD 70 por W/M más USD 25 por W/M de desconsolidación en destino. Cotización FCL de un 20': USD 1.300 de flete más USD 250 de THC en destino. LCL: W/M = 14, entonces (70 + 25) × 14 = **USD 1.330**. FCL: 1.300 + 250 = **USD 1.550**. Gana el LCL por **USD 220**, pero el FCL tiene menos manipulación y menos riesgo. Con 16 m³, el LCL costaría 95 × 16 = USD 1.520: prácticamente empate. (Tarifas ficticias, solo didácticas.)" },
          { type: "callout", tone: "tip", title: "Compará el costo total", text: "Nunca compares solo el flete. En LCL sumá la desconsolidación y los gastos de depósito; en FCL, el THC y las demoras de contenedor si no lo devolvés a tiempo. Lo correcto es cotizar las dos opciones puerta a puerta." }
        ]
      },
      {
        heading: "Aéreo: el peso volumétrico",
        blocks: [
          { type: "p", text: "En un avión, el espacio se termina antes que la capacidad de peso. Por eso las aerolíneas cobran por el **peso facturable** (*chargeable weight*), que es el **mayor** entre el peso bruto real y el **peso volumétrico**. El divisor IATA estándar es **6000**: el peso volumétrico es (largo × ancho × alto en cm) ÷ 6000, lo que equivale a **1 m³ = 166,67 kg** (se suele redondear a 167). Algunos couriers usan ÷ 5000 (1 m³ = 200 kg)." },
          { type: "tool", toolId: "volumetric-calculator" },
          { type: "example", title: "Cajas livianas", text: "Cuatro cajas de 60 × 50 × 40 cm, de 12 kg cada una. Cada caja: 60 × 50 × 40 = 120.000 cm³ ÷ 6000 = **20 kg volumétricos**. Total volumétrico: 4 × 20 = **80 kg**. Peso real: 4 × 12 = 48 kg. Se paga por **80 kg**." },
          { type: "example", title: "Pallet denso", text: "Un pallet de 120 × 80 × 100 cm que pesa 250 kg: 960.000 cm³ ÷ 6000 = 160 kg volumétricos. El real es mayor, así que se factura por **250 kg**. A USD 3,20 por kg serían **USD 800**, más recargos de combustible y seguridad. (Tarifa ficticia.)" },
          { type: "eli5", text: "El avión es como el baúl del auto antes de ir a la playa: se llena con la sombrilla y las sillas antes de llegar al peso máximo. Si mandás una caja enorme de plumas, la aerolínea te cobra **como si pesara más**, porque ocupa el lugar que podría usar algo pesado que paga bien." },
          { type: "callout", tone: "uy", title: "Carrasco", text: "La carga aérea de Uruguay se concentra en el **Aeropuerto Internacional de Carrasco**, en la **Terminal de Cargas del Uruguay (TCU)**, con el régimen de aeropuerto libre **MVD Free Airport** (lanzado en 2016) y certificación IATA CEIV Pharma (2018) para farmacéuticos." },
          { type: "callout", tone: "warn", title: "Terrestre consolidado", text: "En camión consolidado se usa a menudo una relación de **1 m³ = 333 kg**, pero es una convención de mercado que la investigación marca para confirmar con cada transportista." }
        ]
      },
      {
        heading: "Cuánto entra en un contenedor",
        blocks: [
          { type: "p", text: "El **cubicaje** es calcular el volumen de la carga: largo × ancho × alto de cada bulto (en metros) da m³; si las medidas están en cm, dividís por 1.000.000. Siempre con las **medidas exteriores** del bulto o pallet." },
          { type: "example", title: "¿20' o 40' HC?", text: "300 cajas de 0,5 × 0,4 × 0,4 m. Cada caja ocupa 0,08 m³, en total **24 m³**. En un 40' HC (~76 m³) ocuparía cerca del **32%**; en un 20' (~33 m³), cerca del **73%**. Conviene el 20'." },
          { type: "example", title: "Pallets en el piso de un 20'", text: "Pallets de 1,2 × 1,0 m en un solo nivel, piso interior de un 20' de unos 5,90 × 2,35 m. Dos filas de 4 pallets con el lado de 1,2 m a lo largo ocupan 4,8 m de largo y 2,0 m de ancho; en los ~1,1 m que sobran entra 1 pallet girado. Resultado: **9 pallets**. Las referencias de mercado hablan de 9 a 10, pero conviene confirmarlo con la naviera. Y ojo: muchas veces el **peso máximo** (~28 t) limita antes que el espacio." },
          { type: "eli5", text: "El cubicaje es como jugar al Tetris con cajas reales: no alcanza con que el volumen total “entre” en el contenedor; las piezas tienen que acomodarse con su forma. A veces girar una pieza te hace ganar un lugar." }
        ]
      },
      {
        heading: "La cotización marítima y sus recargos",
        blocks: [
          { type: "table", headers: ["Tramo", "Conceptos típicos"], rows: [
            ["Origen", "Retiro (*pick-up*), gastos de origen, THC de origen, emisión del BL, VGM, precinto"],
            ["Flete internacional", "**O/F** (*ocean freight* básico) más recargos"],
            ["Destino (Montevideo)", "THC de destino, gastos de terminal o depósito, liberación del BL, desconsolidación (LCL), almacenaje, flete interno, honorarios del despachante, tributos"]
          ] },
          { type: "table", headers: ["Sigla", "Nombre", "Qué compensa"], rows: [
            ["**BAF**", "Bunker Adjustment Factor", "Variación del precio del combustible"],
            ["**CAF**", "Currency Adjustment Factor", "Variación cambiaria (suele ser un % del flete)"],
            ["**THC**", "Terminal Handling Charge", "Manipulación del contenedor en la terminal"],
            ["**PSS**", "Peak Season Surcharge", "Temporada alta"],
            ["**GRI**", "General Rate Increase", "Aumento general de tarifas"],
            ["**LSS**", "Low Sulphur Surcharge", "Combustible bajo en azufre (IMO 2020)"],
            ["**ISPS**", "Recargo de seguridad portuaria", "Código PBIP/ISPS"],
            ["**WRS**", "War Risk Surcharge", "Zonas de conflicto"],
            ["**OWS**", "Overweight Surcharge", "Contenedores pesados"],
            ["**IMO/DG**", "Dangerous goods surcharge", "Mercancía peligrosa"]
          ], caption: "Recargos frecuentes" },
          { type: "callout", tone: "info", title: "VGM", text: "El **VGM** (*Verified Gross Mass*) es el peso bruto verificado del contenedor que exige el convenio SOLAS antes de embarcar. Si venís de la Armada, SOLAS te suena: es uno de tus puentes naturales con este trabajo." }
        ]
      },
      {
        heading: "Demoras de contenedor y seguro de la carga",
        blocks: [
          { type: "list", items: [
            "**Demurrage** (demora): el contenedor **lleno** se queda **dentro de la terminal** más allá de los días libres.",
            "**Detention** (detención o sobreestadía): el contenedor está **fuera de la terminal**, en el depósito del importador, más tiempo del permitido hasta devolverlo vacío.",
            "En Uruguay se suele hablar de “**demoras de contenedor**” en general. Las causas típicas: canal rojo, documentos faltantes o falta de fondos para pagar los tributos.",
            "Prevención: documentación lista antes del arribo, negociar días libres extra, coordinar retiro y devolución."
          ] },
          { type: "example", title: "Flete, BAF, THC y detention", text: "Flete básico de un 40': USD 2.000. BAF: 15% del flete = **USD 300**. THC de destino: **USD 280**. Días libres: 7; el contenedor se devuelve el día 11, con detention de USD 60 por día: (11 − 7) × 60 = **USD 240**. Total: 2.000 + 300 + 280 + 240 = **USD 2.820**. (Valores ficticios.)" },
          { type: "eli5", text: "La naviera te presta su caja gratis unos días. Si la dejás demasiado tiempo en el puerto (demurrage) o en tu casa (detention), te cobra una multa por día, como un libro atrasado en la biblioteca." },
          { type: "table", headers: ["Cláusula (Institute Cargo Clauses 2009)", "Alcance", "Cubre, por ejemplo", "No cubre, por ejemplo"], rows: [
            ["**ICC (A)**", "“Todo riesgo” con exclusiones", "Robo, mojadura, rotura en manipulación", "Vicio propio, embalaje insuficiente, demora, merma normal"],
            ["**ICC (B)**", "Riesgos nombrados, intermedio", "Incendio, varada o hundimiento, colisión, entrada de agua de mar o río, echazón", "Robo, rotura común"],
            ["**ICC (C)**", "Riesgos nombrados, mínimo", "Incendio, explosión, varada, colisión, avería gruesa, echazón", "Daños por agua, desastres naturales"]
          ] },
          { type: "callout", tone: "tip", title: "El vínculo con los Incoterms", text: "En **CIF** el vendedor contrata como mínimo **ICC (C)**; en **CIP**, **ICC (A)**. La suma asegurada mínima es el valor del contrato más 10%, y eso coincide con el 110% que exige la UCP 600 cuando hay carta de crédito." }
        ]
      }
    ],
    eli5: [
      { concept: "TEU", text: "Es contar cajas de zapatos del mismo tamaño: la chica vale 1 y la larga vale 2, aunque sea un poco más alta." },
      { concept: "FCL vs. LCL", text: "FCL es alquilar el ómnibus entero; LCL es comprar asientos en un ómnibus compartido con otros pasajeros." },
      { concept: "Peso volumétrico", text: "El avión se llena de espacio antes que de peso: una caja enorme de plumas paga como si pesara más, porque ocupa el lugar de algo pesado." },
      { concept: "Consolidación", text: "Es juntar los paquetes de muchos vecinos en un mismo camión para que el viaje salga más barato; desconsolidar es repartir cada paquete a su dueño." },
      { concept: "Demurrage y detention", text: "La naviera te presta la caja gratis unos días; si la dejás demasiado en el puerto o en tu casa, te cobra por día como un libro atrasado de la biblioteca." },
      { concept: "Seguro ICC A/B/C", text: "A cubre casi todo, B una lista de desastres grandes y C solo los desastres más gordos. Más cobertura, más caro." }
    ],
    keyPoints: [
      "20' = 1 TEU; 40' y 40' HC = 2 TEU. El TEU mide largo, no altura.",
      "Referencias: 20' ~33 m³, 40' ~67-68 m³, 40' HC ~76 m³, carga útil del orden de 28 t; confirmar con la naviera.",
      "FCL suele convenir desde ~13-15 m³; LCL se cobra por W/M, el mayor entre toneladas y m³ (1 t = 1 m³).",
      "Peso volumétrico aéreo IATA: cm³ ÷ 6000 (1 m³ ≈ 167 kg); algunos couriers usan ÷ 5000.",
      "Peso facturable aéreo = el mayor entre peso bruto real y volumétrico.",
      "Recargos frecuentes: BAF (combustible), CAF (cambio), THC (terminal), PSS (temporada alta), GRI (aumento general).",
      "Demurrage: contenedor lleno en terminal; detention: contenedor fuera de terminal, pasados los días libres.",
      "ICC (A) es la cobertura más amplia; en CIF el mínimo es ICC (C) y en CIP ICC (A), por el valor del contrato más 10%."
    ],
    probableQuestions: [
      { question: "¿Cuántos TEU es un 40' High Cube?", answer: "2 TEU: el TEU mide largo, no altura." },
      { question: "¿Cómo se calcula el peso volumétrico aéreo?", answer: "Largo × ancho × alto en cm dividido 6000 (1 m³ ≈ 167 kg); se cobra el mayor entre ese y el peso real." },
      { question: "¿FCL o LCL para 8 m³?", answer: "Normalmente LCL; desde ~13-15 m³ suele convenir un 20' completo, pero lo correcto es cotizar ambos con gastos de destino." },
      { question: "¿Qué es el W/M?", answer: "Weight or measure: en LCL se cobra el mayor entre toneladas y m³, con 1 t = 1 m³." },
      { question: "¿Qué diferencia hay entre demurrage y detention?", answer: "Demurrage: contenedor lleno dentro de la terminal más allá de los días libres; detention: contenedor fuera de la terminal más tiempo del pactado." },
      { question: "¿Qué compensa el BAF?", answer: "La variación del precio del combustible." },
      { question: "¿Qué es un HBL y un MBL?", answer: "El MBL lo emite la naviera al consolidador; el HBL lo emite el forwarder a cada cliente." },
      { question: "¿Qué cobertura mínima exige CIF y cuál CIP?", answer: "CIF: ICC (C). CIP: ICC (A). En ambos casos por el valor del contrato más 10%." },
      { question: "¿Qué es el VGM?", answer: "El peso bruto verificado del contenedor que exige SOLAS antes del embarque." }
    ],
    sources: [
      { title: "Maersk: chargeable weight", url: "https://ewscpcd.maersk.com/logistics-explained/transportation-and-freight/2025/03/10/air-cargo-chargeable-weight" },
      { title: "iContainers: cálculo de cargos aéreos", url: "https://www.icontainers.com/es/ayuda/como-calcular-los-cargos-del-transporte-aereo/" },
      { title: "Fulfillbot: dimensiones de contenedores", url: "https://fulfillbot.com/blog/shipping-container-dimensions/" },
      { title: "Tiba: recargos FCL/LCL", url: "https://www.tibagroup.com/es/logistica/transporte-maritimo/fcl-lcl-recargos-aplicables" },
      { title: "Maersk: demurrage y detention", url: "https://www.maersk.com/es-mx/logistics-explained/transportation-and-freight/2023/08/28/what-is-demurrage-detention-in-shipping-for-buyers" },
      { title: "Ship4wd: Institute Cargo Clauses", url: "https://ship4wd.com/resource-center/glossary/institute-cargo-clauses" },
      { title: "ANP: Folleto Puerto de Montevideo 2025", url: "https://www.anp.com.uy/sites/default/files/archivos/parrafo-colapsable/2025-11/FOLLETO%20puerto%20Montevideo%202025.pdf" },
      { title: "Mundo Marítimo: Carrasco y el sector farmacéutico", url: "https://mundomaritimo.cl/noticias/aeropuerto-de-carrasco-uruguay-sector-farmaceutico-lidera-el-desarrollo-en-la-terminal-de-cargas" }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: "p12-s2",
    moduleId: "p12",
    title: "Trabajar en comex en Uruguay: roles y cómo ser despachante",
    summary: "Dónde se trabaja en comercio exterior en Uruguay, qué piden los avisos, cómo es la carrera dentro de un estudio de despachante y qué hace falta para llegar a ser despachante de aduana. Es el mapa para decidir a qué puertas golpear primero.",
    minutes: 18,
    sections: [
      {
        heading: "Dónde se trabaja",
        blocks: [
          { type: "table", headers: ["Empleador", "Qué hace", "Puestos de entrada", "Lo que más valoran"], rows: [
            ["**Estudio de despachante de aduana**", "Representa al importador o exportador ante la DNA; arma y numera el DUA en LUCIA; asiste a verificaciones", "Cadete o gestor, auxiliar administrativo, auxiliar de aduana, asistente de gestión de despacho", "Prolijidad documental, NCM, LUCIA, VUCE, trato con la Aduana, horario flexible"],
            ["**Agente de carga (freight forwarder) y NVOCC**", "Vende y coordina el transporte internacional, consolida carga, emite HBL y HAWB", "Customer service operativo, documentación, pricing junior, tráfico", "Inglés, Excel, seguimiento de embarques, Incoterms, atención al cliente"],
            ["**Agencia marítima**", "Representa a la naviera en puerto: escalas, manifiestos, liberación de BL, contenedores vacíos", "Asistente de documentación, operaciones de buque, equipos", "Conocimiento portuario, inglés, turnos: **acá la experiencia naval pesa mucho**"],
            ["**Importador o exportador** (dpto. de comex)", "Compra y vende al exterior, coordina con forwarder y despachante, paga proveedores", "Asistente de comercio exterior, de importaciones, de compras internacionales", "ERP (SAP), Excel, inglés, coordinación, costeo de importación"],
            ["**Zona franca o centro de distribución**", "Almacenaje, reexportación, distribución regional", "Asistente de exportaciones, operador logístico, inventarios", "Regímenes de zona franca, tránsito, inglés y portugués"],
            ["**Terminales portuarias y aeroportuarias**", "Movimiento de contenedores y carga (TCP, Montecon, TCU)", "Planificación, facturación, atención a clientes", "Operativa portuaria y de buques"],
            ["**Banco** (mesa de comex)", "Cartas de crédito, cobranzas, transferencias SWIFT, garantías", "Back office de comex, analista de operaciones", "UCP 600, URC 522, revisión documental minuciosa, normativa cambiaria y de prevención de lavado"],
            ["**Courier**", "Despacho de envíos chicos y régimen de franquicias", "Agente de soporte de operaciones, atención", "Rapidez, sistemas, régimen de envíos 2026"]
          ] },
          { type: "eli5", text: "El comercio exterior es como organizar un casamiento con invitados que vienen de otro país. El **forwarder** es el organizador que consigue los pasajes; la **agencia marítima** es la que representa a la aerolínea en el aeropuerto; el **despachante** es el que hace los trámites de migraciones; el **banco** cuida que la plata llegue a quien tiene que llegar; y el **dpto. de comex** de la empresa es la familia que coordina a todos." }
        ]
      },
      {
        heading: "Qué piden los avisos uruguayos",
        blocks: [
          { type: "p", text: "La investigación relevó avisos visibles en Indeed, Jooble, bolsas universitarias y llamados publicados entre 2025 y 2026. Algunos ejemplos reales:" },
          { type: "table", headers: ["Aviso", "Requisitos destacados"], rows: [
            ["Asistente de Comercio Exterior con experiencia en despachante (SGF Global)", "1 año en comex o logística, Excel, inglés escrito intermedio, Incoterms"],
            ["Asistente de Gestión de Despacho (Synergos)", "Experiencia en despacho; trámites ante Aduana y VUCE; control de permisos; coordinación con transportistas y agencias marítimas. **Salario publicado: $ 60.000 nominales por mes**"],
            ["Customer Service Operator para un forwarder (Randstad)", "Registro y seguimiento de embarques aéreos, marítimos y terrestres"],
            ["Asistente de Documentación (KMA Uruguay, agencia marítima)", "Operativa en el Puerto de Montevideo"],
            ["Cadete o gestor de trámites comex", "Certificados de origen ante la CIU y la Cámara de Comercio; libreta de conducir"],
            ["Analista de Comercio Exterior (Trafigura, Montevideo)", "Comex, RRII, Administración o Economía; 2 a 5 años; inglés avanzado; trabajo bajo presión"],
            ["Responsable de Comercio Exterior (CUDIM)", "Título en Comex o Administración; 2 años; inglés avanzado; negociación con proveedores; trato con despachante"]
          ] },
          { type: "list", items: [
            "**Estudios**: Comercio Exterior, Negocios Internacionales, **Administración**, Economía o afines. Para puestos junior suele alcanzar con ser estudiante avanzado.",
            "**Idiomas**: inglés intermedio (operativo) a avanzado (analista); el portugués suma por el comercio con Brasil.",
            "**Herramientas**: Excel (tablas dinámicas, BUSCARV o XLOOKUP), ERP como SAP, **LUCIA**, **VUCE**, el expediente electrónico **GEX** y los portales de navieras y terminales.",
            "**Conocimientos**: Incoterms 2020, NCM, documentación (factura, packing list, BL, AWB, CRT, certificado de origen), regímenes aduaneros, costeo de importación.",
            "**Blandas**: organización, proactividad, trabajo bajo presión, comunicación con muchas partes, atención al detalle."
          ] },
          { type: "callout", tone: "warn", title: "Sueldos: poca información pública", text: "El único aviso relevado con sueldo explícito es el de Synergos ($ 60.000 nominales). Otros datos (encuestas con muestras chicas, referencias gerenciales de 2022) no son confiables para un puesto de entrada, y los laudos del Consejo de Salarios para empleados de despachantes hay que consultarlos en el MTSS. Tomá cualquier rango como orientativo." },
          { type: "callout", tone: "info", title: "¿SIGA?", text: "Ningún aviso uruguayo relevado menciona un sistema llamado “SIGA”. En Uruguay lo central es **LUCIA** (DNA), la **VUCE** y el **GEX**. Si lo ves en algún material, confirmá a qué se refiere antes de ponerlo en el CV." }
        ]
      },
      {
        heading: "La escalera dentro de un estudio de despachante",
        blocks: [
          { type: "p", text: "El **Decreto 913/986** (Consejo de Salarios, subgrupo despachantes de aduana) definió categorías que, aunque son antiguas, siguen siendo útiles para entender la carrera interna:" },
          { type: "table", headers: ["Nivel", "Categoría", "Tarea esencial"], rows: [
            ["1", "Cadete", "Entrega y retiro de documentos, bancos, mandados"],
            ["2", "Auxiliar administrativo", "Prepara permisos de importación, exportación y tránsito, calcula IVA, atiende teléfono"],
            ["3", "Auxiliar de aduana", "Tramita los documentos en la Aduana (sin hacer el despacho en sí)"],
            ["4", "Operador", "Carga de datos y sistemas administrativos"],
            ["5", "Oficial administrativo", "Caja, contabilidad, facturación de despachos"],
            ["6", "Oficial técnico B", "Redacta permisos de exportación y tránsito; coordina con transportistas y agencias marítimas"],
            ["7", "Encargado de administración", "Supervisa la administración"],
            ["8", "Oficial técnico A", "Despacho de importación; controla declaraciones antes de presentarlas"],
            ["9", "Encargado de despacho", "Supervisa todas las operaciones; asesora a clientes sobre requisitos y costos"],
            ["10", "Gerente", "Planifica y controla; sustituye al despachante en lo que la ley permite"]
          ], caption: "Categorías del Decreto 913/986" },
          { type: "eli5", text: "Es como la carrera en un restaurante: empezás llevando y trayendo cosas (cadete), después preparás ingredientes (auxiliar), luego cocinás platos sencillos (oficial técnico B), más tarde los platos difíciles (oficial técnico A), y al final organizás toda la cocina (encargado). El dueño con el título habilitante es el chef: el despachante." }
        ]
      },
      {
        heading: "Ser empleado registrado de un despachante",
        blocks: [
          { type: "p", text: "Para que un empleado actúe en nombre del despachante ante la Aduana tiene que estar **registrado en el sistema informático aduanero** (Decreto 96/015, arts. 6 a 8). El trámite “Solicitud de Registro de Empleados de Despachante” funciona así:" },
          { type: "steps", items: [
            { title: "Lo inicia el despachante", text: "No el empleado: va con una nota firmada por el titular." },
            { title: "Documentos", text: "Cédula del empleado y **Planilla de Control de Trabajo del MTSS**: tiene que figurar como empleado formal." },
            { title: "Costo y canal", text: "Es gratuito. Se hace en línea con usuario autorizado por la DNA vía pre-expediente GEX, o en la Mesa de Entrada de la DNA (Rambla 25 de Agosto de 1825 N.º 199, Montevideo)." },
            { title: "Baja", text: "Por nota escrita." }
          ] },
          { type: "callout", tone: "warn", title: "Lo que el empleado no puede hacer", text: "Según el Decreto 96/015 (art. 7), el empleado autorizado **no puede**: firmar el DUA ni sus correcciones, firmar actas de reconocimiento o de discrepancia, hacer autorrevisiones o acuerdos de pago, ni cobrar devoluciones. Y el despachante **responde por los actos de sus empleados**." },
          { type: "callout", tone: "uy", title: "No hay “carné de auxiliar”", text: "No existe una habilitación que saques por tu cuenta para ser auxiliar. **Primero te contrata un estudio y después el despachante te registra.** Por eso el camino es buscar trabajo directamente, no un certificado previo." }
        ]
      },
      {
        heading: "Cómo se llega a ser despachante",
        blocks: [
          { type: "p", text: "Los requisitos para ser despachante de aduana (persona física) están en el **artículo 16 del CAROU** (Código Aduanero de la República Oriental del Uruguay, Ley 19.276 de 2014):" },
          { type: "list", ordered: true, items: [
            "Tener domicilio en el país.",
            "Ser mayor de edad.",
            "Tener secundaria completa.",
            "**Aprobar un examen de competencia** en materia aduanera y de comercio exterior ante un **tribunal de tres miembros**.",
            "No tener condenas por asociación para delinquir ni por delitos contra la fe pública, la Administración Pública, la Administración de Justicia o la economía y hacienda pública.",
            "No estar en concurso (o tener su conclusión judicial).",
            "Estar al día con DGI, BPS y DNA."
          ] },
          { type: "p", text: "El Poder Ejecutivo puede exigir además **estudios terciarios en comercio exterior**. Las personas jurídicas también pueden habilitarse (art. 18). La habilitación la otorga el **MEF**, con inscripción en el **Registro de Despachantes** (art. 23)." },
          { type: "table", headers: ["Tema", "Qué dice la reglamentación (Decreto 96/015, mod. 2022)"], rows: [
            ["**Garantía**", "Base de **USD 15.000** a la orden de la DNA (aval bancario a primera demanda, seguro, depósito en efectivo o valores prendados). Se suman USD 15.000 si el promedio anual despachado supera USD 20 millones, y llega hasta **USD 70.000** si supera USD 40 millones. Se actualiza cada 3 años; el Fondo de Garantía Social de la Asociación de Despachantes puede cubrir hasta el 50%"],
            ["**Apoderados**", "Ciclo básico aprobado y examen ante el mismo tribunal"],
            ["**Poder del cliente**", "El titular de la mercadería otorga un poder escrito, registrado ante la DNA y comunicado electrónicamente"]
          ] },
          { type: "callout", tone: "warn", title: "La vía de los “tres cursos”", text: "El decreto modificado en 2022 prevé, para la habilitación definitiva, aprobar el examen **o** tres cursos de especialización de al menos 10 horas dictados por la DNA, en una vía vinculada a 8 años desde la inscripción en el Registro. La interpretación exacta de esa vía está pendiente de confirmar con la DNA: no la des por segura." },
          { type: "p", text: "El **temario oficial del examen** (programa DNA 2024) tiene **18 unidades**: régimen del despachante; derecho administrativo (Decreto 500/991); comercio exterior (Convención de Viena de compraventa, Incoterms); acuerdos multilaterales; ALADI y MERCOSUR; régimen de origen; nomenclatura; valoración (Acuerdo de Valoración de la OMC, Decreto 538/008); Código Aduanero (Ley 19.276 y decretos 96 a 99/015); legislación fiscal (IMADUNI, IVA); importación; exportación; tránsito; franquicias tributarias; franquicias territoriales (zonas francas, puerto libre); regímenes especiales; DUA; e infraccional aduanero (arts. 199 a 226 del CAROU, mod. Ley 20.212)." },
          { type: "eli5", text: "Ser despachante es como ser **escribano de la Aduana**: no alcanza con saber; hay que rendir un examen ante un tribunal, tener los papeles en regla y dejar una **garantía de plata** por si algo sale mal. A cambio, tu firma vale ante el Estado." },
          { type: "callout", tone: "info", title: "Formación en Uruguay", text: "UTU tiene una Tecnicatura en Logística y cursos de comex; existe la Escuela de Formación Profesional en Comercio Exterior y Aduana (terciaria no universitaria, registrada en el MEC); CENNAVE ofrece un Técnico en Comercio y Transporte Internacional; y las universidades privadas tienen licenciaturas en negocios internacionales. La gremial del sector es la **ADAU** (Asociación de Despachantes de Aduana del Uruguay); sus cursos y bolsa de trabajo conviene consultarlos directamente." }
        ]
      }
    ],
    eli5: [
      { concept: "Despachante de aduana", text: "Es el traductor oficial entre la empresa y la Aduana: sabe llenar los formularios correctos y responde si están mal." },
      { concept: "Forwarder", text: "Es el organizador de excursiones: no tiene el barco ni el avión, pero consigue los lugares, arma el viaje y te avisa cuando llega." },
      { concept: "Agencia marítima", text: "Es el representante de la empresa de ómnibus en la terminal: no maneja el ómnibus, pero se ocupa de los papeles y de que todo esté listo cuando llega." },
      { concept: "Registro de empleado", text: "Es como que el dueño de un club te dé la credencial de staff: no la sacás vos, te la tramita él cuando ya trabajás ahí." },
      { concept: "Garantía del despachante", text: "Es como el depósito que dejás al alquilar: queda guardado por si rompés algo, y solo se usa si fallás." }
    ],
    keyPoints: [
      "Se trabaja en comex en estudios de despachante, forwarders, agencias marítimas, empresas importadoras y exportadoras, zonas francas, terminales, bancos y couriers.",
      "Los avisos piden Excel, inglés, Incoterms, NCM, documentación y manejo de LUCIA, VUCE y GEX; Administración es una carrera afín.",
      "En las agencias marítimas la experiencia naval es un diferencial inmediato.",
      "El Decreto 913/986 ordena la carrera interna de un estudio: de cadete a gerente.",
      "El empleado de despachante lo registra el despachante ante la DNA (Decreto 96/015); no puede firmar el DUA.",
      "Requisitos para despachante (CAROU art. 16): domicilio, mayoría de edad, secundaria, examen ante tribunal de tres miembros, antecedentes limpios, no concurso y estar al día con DGI, BPS y DNA.",
      "La habilitación la otorga el MEF; la garantía base es USD 15.000 y puede llegar a USD 70.000 según el volumen despachado.",
      "El examen tiene 18 unidades (programa DNA 2024), del régimen del despachante al infraccional aduanero."
    ],
    probableQuestions: [
      { question: "¿Qué hace un despachante de aduana?", answer: "Representa al importador o exportador ante la DNA, arma y numera el DUA en LUCIA y asiste a las verificaciones." },
      { question: "¿Dónde pesa más la experiencia naval en comex?", answer: "En las agencias marítimas y los forwarders, por el conocimiento de buques, puerto y operativa." },
      { question: "¿Quién inicia el registro de un empleado de despachante ante la DNA?", answer: "El despachante titular, con nota firmada, cédula del empleado y planilla del MTSS." },
      { question: "¿Qué no puede hacer un empleado autorizado de despachante?", answer: "Firmar el DUA o sus correcciones, firmar actas, hacer autorrevisiones o acuerdos de pago ni cobrar devoluciones." },
      { question: "¿Qué artículo del CAROU fija los requisitos para ser despachante?", answer: "El artículo 16." },
      { question: "¿Ante quién se rinde el examen de despachante?", answer: "Ante un tribunal de tres miembros; la habilitación la otorga el MEF." },
      { question: "¿Cuál es la garantía base de un despachante?", answer: "USD 15.000 a la orden de la DNA, con complementos según el volumen despachado, hasta USD 70.000." },
      { question: "¿Qué sistemas informáticos piden los avisos uruguayos?", answer: "LUCIA (DNA), VUCE, GEX, Excel y ERP como SAP." }
    ],
    sources: [
      { title: "IMPO: CAROU art. 16", url: "https://impo.com.uy/bases/leyes-originales/19276-2014/16" },
      { title: "IMPO: CAROU art. 18", url: "https://impo.com.uy/bases/codigo-aduanero/19276-2014/18" },
      { title: "IMPO: Decreto 96/015", url: "https://www.impo.com.uy/bases/decretos/96-2015" },
      { title: "Presidencia: Decreto MEF de octubre de 2022", url: "https://medios.presidencia.gub.uy/legal/2022/decretos/10/mef_788.pdf" },
      { title: "gub.uy: Registro de empleados de despachante", url: "https://www.gub.uy/tramites/solicitud-registro-empleados-despachante" },
      { title: "DNA: Programa del examen de despachantes 2024", url: "https://aduanas.gub.uy/innovaportal/file/18872/1/programa-despachantes-2024.pdf" },
      { title: "IMPO: Decreto 913/986", url: "https://impo.com.uy/bases/decretos/913-1986/3" },
      { title: "Indeed Uruguay: empleos de comercio exterior", url: "https://uy.indeed.com/Empleos-de-Comercio-exterior-en-Departamento-de-Montevideo" },
      { title: "Jooble Uruguay: transporte marítimo Montevideo", url: "https://uy.jooble.org/trabajo-transporte-maritimo/Montevideo%2C-Montevideo" },
      { title: "CUDIM: llamado Responsable de Comercio Exterior", url: "https://cudim.org/wp-content/uploads/2025/09/Llamado-Externo-Responsable-de-Comercio-Exterior.pdf" }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: "p12-s3",
    moduleId: "p12",
    title: "CV, carta y entrevista para quien viene de la Armada",
    summary: "Una guía práctica para pasar de oficial de la Armada a una oficina de comex: cómo traducir lo que hiciste a bordo al idioma de un forwarder o un despachante, cómo armar el CV y la carta, y cómo encarar la entrevista sin que la transición juegue en contra.",
    minutes: 18,
    sections: [
      {
        heading: "Tu punto de partida es mejor de lo que parece",
        blocks: [
          { type: "p", text: "Un oficial que fue **Jefe de Cubierta y Armas** de un buque sabe cosas que a un recién egresado le llevan años: cómo se estiba y se asegura una carga, cómo se coordina una maniobra con muchas personas, qué es un registro que no puede tener errores, cómo se trabaja con procedimientos y con normas internacionales como **SOLAS** o el código **ISPS**. El comex vive de eso: **documentos exactos, plazos que no se negocian y coordinación entre muchas partes**." },
          { type: "p", text: "Lo que falta es vocabulario comercial y aduanero (Incoterms, NCM, DUA, LUCIA, carta de crédito) y **traducir** la experiencia para que alguien que nunca pisó un buque la entienda. Esta lección es justamente eso: un traductor." },
          { type: "eli5", text: "Es como un buen jugador de fútbol que se pasa al fútbol de salón: sabe pasar, marcar y leer el juego, pero tiene que aprender las reglas nuevas y adaptar el lenguaje. Nadie empieza de cero; empieza con otra camiseta." },
          { type: "callout", tone: "tip", title: "Por dónde empezar", text: "La investigación sugiere apuntar **primero a agencias marítimas y forwarders**, donde el conocimiento de buques y puerto es un diferencial inmediato, y luego a estudios de despachante. El dpto. de comex de un importador o la mesa de un banco también son opciones, pero ahí la ventaja naval es menos directa." }
        ]
      },
      {
        heading: "El traductor: de la Armada al comex",
        blocks: [
          { type: "table", headers: ["En la Armada", "Cómo escribirlo en un CV de comex"], rows: [
            ["Jefe de Cubierta y Armas", "Coordinación de equipos y recursos; responsabilidad sobre inventario, mantenimiento y seguridad de equipos"],
            ["Maniobras, estiba, carga y descarga a bordo", "Conocimiento práctico de operativa portuaria, estiba, seguridad de la carga y coordinación con terminales"],
            ["Procedimientos, registros, inventarios, inspecciones", "Gestión documental rigurosa, cumplimiento normativo y auditorías"],
            ["Guardias y operaciones", "Trabajo bajo presión, turnos, toma de decisiones con información incompleta"],
            ["Mando de personal", "Liderazgo, delegación y comunicación clara"],
            ["Inglés técnico y naval, OMI, SOLAS, ISPS", "Inglés técnico marítimo; familiaridad con normativa internacional (SOLAS y VGM, ISPS)"],
            ["Planificación logística de navegación y abastecimiento", "Planificación logística, cronogramas, aprovisionamiento"]
          ], caption: "Tabla de traducción de competencias" },
          { type: "callout", tone: "warn", title: "Evitá la jerga sin traducir", text: "Siglas internas, grados sin explicar y nombres de cursos navales no le dicen nada a un gerente de forwarder. Si escribís “AN (CG)”, aclarás que es un grado de oficial; si nombrás un curso, decís qué aprendiste. Regla: **si tu abuela no lo entiende, el reclutador tampoco**." },
          { type: "eli5", text: "Traducir tu experiencia es como explicarle a un amigo que no sabe de fútbol por qué tu equipo ganó: no le hablás de “cierre de diagonal por izquierda”, le decís “cubrimos bien los espacios y aprovechamos los contraataques”. Lo mismo que hiciste, contado con palabras que el otro usa." }
        ]
      },
      {
        heading: "La estructura del CV (1 a 2 páginas)",
        blocks: [
          { type: "steps", items: [
            { title: "1. Encabezado", text: "Nombre, celular, mail, LinkedIn y ciudad. Nada más." },
            { title: "2. Perfil (3 o 4 líneas)", text: "El resumen que el reclutador lee en 10 segundos. Ejemplo de la investigación: “Oficial de la Armada Nacional con experiencia en operativa marítima y portuaria, coordinación de equipos y gestión documental bajo normas estrictas. Estudiante de Licenciatura en Administración (UDELAR) con formación en comercio exterior (Incoterms, NCM, DUA, logística internacional). Busco incorporarme al área operativa de un despachante, agente de carga o departamento de comercio exterior.”" },
            { title: "3. Formación", text: "Licenciatura en Administración (en curso), formación naval y los cursos de comex que vayas haciendo (Incoterms, operativa LUCIA o despacho, clasificación NCM)." },
            { title: "4. Experiencia", text: "Con **logros medibles**: cuántas personas a cargo, qué equipos, auditorías o inspecciones aprobadas, operaciones realizadas. Un número vale más que un adjetivo." },
            { title: "5. Conocimientos técnicos", text: "Excel (si es avanzado, decilo y dalo por demostrable), ERP si aplica, Incoterms 2020, documentación de comex, idiomas con nivel concreto." },
            { title: "6. Otros", text: "Si gestionás una marca propia, sumala: compras, proveedores, habilitaciones regulatorias. Muestra visión de negocio. Actividades como la vela de competición pueden sumar si las contás como disciplina y trabajo en equipo." }
          ] },
          { type: "example", title: "Un logro bien escrito", text: "Mal: “Responsable de la cubierta del buque”. Mejor: “Coordiné un equipo de [N] personas en maniobras de atraque, carga y estiba; mantuve al día inventarios y registros de equipos sin observaciones en [N] inspecciones”. Completá los corchetes con tus datos reales: no infles números, porque en la entrevista te los van a preguntar." },
          { type: "eli5", text: "El CV es como la vidriera de un comercio: el que pasa mira 10 segundos. Si en la vidriera ponés lo que el cliente busca (Excel, inglés, Incoterms, puerto), entra a preguntar. Si ponés cosas que no entiende, sigue de largo." }
        ]
      },
      {
        heading: "La carta de presentación",
        blocks: [
          { type: "steps", items: [
            { title: "Párrafo 1: el puesto y la empresa", text: "Qué puesto buscás y por qué esa empresa, con algo concreto de su operativa (rutas, rubros, clientes, si opera en TCP o en Carrasco)." },
            { title: "Párrafo 2: dos o tres logros traducidos", text: "Orden documental, mando de personal, conocimiento portuario, con el lenguaje de la tabla de traducción." },
            { title: "Párrafo 3: formación y disponibilidad", text: "Qué estás estudiando de comex, tu carrera en FCEA y tu disponibilidad (horaria, fecha de inicio, cambio de carrera planificado)." },
            { title: "Cierre", text: "Una propuesta concreta de entrevista." }
          ] },
          { type: "example", title: "Esqueleto para adaptar", text: "“Me postulo al puesto de Asistente de Documentación porque [empresa] opera [rutas o servicios concretos] en el Puerto de Montevideo, un entorno que conozco desde el lado del buque. En la Armada coordiné maniobras de carga y estiba y llevé registros e inventarios con la exigencia de un entorno normado, y trabajo con inglés técnico marítimo. Hoy curso la Licenciatura en Administración en FCEA y me estoy formando en Incoterms, documentación de transporte y despacho. Tengo disponibilidad para [inicio y horario]. Me gustaría conversar en una entrevista sobre cómo puedo sumar al equipo de operaciones.”" },
          { type: "callout", tone: "tip", title: "Una carta por aviso", text: "No mandes la misma carta a todos. Cambiá el párrafo 1 para cada empresa: es lo que demuestra que leíste el aviso y averiguaste a qué se dedican." }
        ]
      },
      {
        heading: "La entrevista",
        blocks: [
          { type: "list", items: [
            "**Pitch de 60 segundos**: el mismo mensaje del perfil del CV, dicho en voz alta. Ensayalo hasta que salga natural.",
            "**Aclará la disponibilidad**: fecha de baja, compatibilidad con el servicio. Si no lo decís, queda como una duda no dicha que juega en contra.",
            "**Método STAR** para preguntas conductuales: **S**ituación, **T**area, **A**cción, **R**esultado. Usá ejemplos de guardia, maniobra, inspección o ejercicio.",
            "**Investigá la empresa**: si es forwarder, qué rutas y agentes; si es despachante, qué rubros; si es importador, qué productos y orígenes.",
            "**Inglés concreto**: “escribo correos operativos y leo documentación técnica sin dificultad; mantengo conversaciones con interlocutores del exterior”, con un ejemplo listo.",
            "**Flexibilidad horaria**: el comex trabaja al ritmo de buques, cut-offs y verificaciones. La vida a bordo es un buen argumento."
          ] },
          { type: "example", title: "“¿Por qué dejar la Armada para trabajar en comercio exterior?”", text: "Respuesta modelo de la investigación, para adaptar: “En la Armada aprendí a operar en entornos regulados, a coordinar equipos y a trabajar con procedimientos donde un error documental tiene consecuencias. El comercio exterior me permite aplicar eso en el mundo empresarial, cerca del puerto y del mar, y crecer profesionalmente junto con mi licenciatura en Administración.”" },
          { type: "example", title: "“Te asignan 3 embarques urgentes el mismo día”", text: "Priorizo por impacto (vencimiento de días libres, perecederos, cliente con producción parada), comunico tiempos realistas a cada uno, delego lo que se pueda y pido apoyo si hay riesgo real. Es la lógica de la guardia: prioridades claras y comunicación." },
          { type: "example", title: "“¿Dónde te ves en 3 años?”", text: "“Dominando la operativa completa de importación y exportación, con autonomía en clientes propios y avanzando hacia un rol de analista o coordinador; evaluando la formación para el examen de despachante.”" },
          { type: "eli5", text: "La entrevista es como una revista de inspección: el que la hace quiere ver que lo que dice el papel es cierto y que sabés reaccionar cuando algo no está en el manual. Si llegás con todo ordenado y respondés con ejemplos concretos, la inspección sale bien." },
          { type: "callout", tone: "uy", title: "Preguntas técnicas que seguro aparecen", text: "FOB vs. CIF y base del valor en aduana en Uruguay (CIF); qué es el DUA y LUCIA; canales verde, naranja y rojo; FCL o LCL para un volumen dado; peso volumétrico; demurrage vs. detention; carta de crédito vs. cobranza; qué es el ACE 18. Todas están en los módulos de esta app: repasalas antes de cada entrevista." }
        ]
      },
      {
        heading: "Plan de acción",
        blocks: [
          { type: "steps", items: [
            { title: "Semana 1-2: CV y LinkedIn", text: "Armá el CV con la tabla de traducción y el perfil. Pedile a alguien fuera de la Armada que lo lea y te diga qué no entiende." },
            { title: "Semana 2-4: formación visible", text: "Hacé cursos cortos certificables (Incoterms, clasificación arancelaria, operativa LUCIA) y sumalos al CV." },
            { title: "Mes 1-2: postulaciones dirigidas", text: "Primero agencias marítimas y forwarders; después estudios de despachante y dptos. de comex. Revisá a mano buscojobs, Computrabajo y LinkedIn, además de Indeed, Jooble y las bolsas universitarias." },
            { title: "Siempre: entrevistas ensayadas", text: "Pitch de 60 segundos, tres historias STAR y repaso técnico de los temas clave." }
          ] },
          { type: "callout", tone: "info", title: "Expectativas realistas", text: "Un puesto de entrada (cadete, auxiliar, asistente) suele pagar cerca de los mínimos del laudo; el único dato público concreto relevado es un aviso de $ 60.000 nominales. La ventaja de tu perfil es que, con la licenciatura y la experiencia de mando, podés crecer rápido hacia analista o coordinador." }
        ]
      }
    ],
    eli5: [
      { concept: "Traducir competencias", text: "Es contar lo mismo que hiciste con las palabras que usa el otro, como explicarle un partido a alguien que no sabe de fútbol." },
      { concept: "Perfil del CV", text: "Es la vidriera del comercio: en 10 segundos el que pasa tiene que ver lo que busca." },
      { concept: "Método STAR", text: "Es contar una anécdota como un parte de novedades: qué pasaba, qué te tocaba, qué hiciste y cómo terminó." },
      { concept: "Pitch de 60 segundos", text: "Es tu presentación de ascensor: si te cruzás con el gerente entre dos pisos, en ese tiempo tiene que saber quién sos y qué ofrecés." },
      { concept: "Carta de presentación", text: "Es la nota que dejás junto al regalo: dice por qué lo elegiste para esa persona en particular." }
    ],
    keyPoints: [
      "La experiencia naval (estiba, coordinación, registros, normas SOLAS e ISPS) se traduce directamente a operativa portuaria y gestión documental.",
      "Apuntá primero a agencias marítimas y forwarders, donde el conocimiento de buques y puerto es un diferencial inmediato.",
      "CV de 1 a 2 páginas: encabezado, perfil, formación, experiencia con logros medibles, conocimientos técnicos y otros.",
      "Evitá la jerga militar sin traducir: siglas internas y grados sin explicar.",
      "Carta en cuatro partes: puesto y empresa, logros traducidos, formación y disponibilidad, cierre con propuesta de entrevista.",
      "En la entrevista: pitch de 60 segundos, método STAR, disponibilidad clara e investigación previa de la empresa.",
      "Sumá cursos cortos certificables (Incoterms, NCM, LUCIA) para mostrar formación en comex.",
      "La gestión de una marca propia muestra visión de negocio: compras, proveedores y habilitaciones."
    ],
    probableQuestions: [
      { question: "¿Por qué querés dejar la Armada para trabajar en comercio exterior?", answer: "Porque en la Armada aprendí a operar en entornos regulados, coordinar equipos y trabajar con procedimientos donde un error documental tiene consecuencias, y el comex me permite aplicarlo en la empresa, cerca del puerto, junto con mi licenciatura." },
      { question: "Contame una situación de presión que resolviste.", answer: "Usar el método STAR con un ejemplo de guardia, maniobra, inspección o ejercicio: situación, tarea, acción y resultado." },
      { question: "¿Cómo manejás un error propio?", answer: "Lo reconozco rápido, lo informo, lo corrijo y dejo un control (lista de verificación, doble chequeo) para que no se repita." },
      { question: "¿Cómo te organizás con muchos frentes?", answer: "Con una planilla de seguimiento por embarque con fechas críticas (ETA, cut-off, días libres), alertas y un reporte diario." },
      { question: "¿Qué nivel de inglés tenés?", answer: "Responder concreto, por ejemplo: escribo correos operativos y leo documentación técnica sin dificultad, con un ejemplo listo." },
      { question: "¿Qué sabés de nuestra empresa?", answer: "Investigarlo antes: rutas y agentes si es forwarder, rubros si es despachante, productos y orígenes si es importador." },
      { question: "¿Disponibilidad horaria?", answer: "Mostrar flexibilidad real: el comex trabaja al ritmo de buques y cut-offs, y la vida a bordo lo demuestra." },
      { question: "¿Dónde te ves en 3 años?", answer: "Dominando la operativa de importación y exportación, con autonomía en clientes y avanzando hacia analista o coordinador, evaluando el examen de despachante." }
    ],
    sources: [
      { title: "Indeed Uruguay: empleos de comercio exterior", url: "https://uy.indeed.com/Empleos-de-Comercio-exterior-en-Departamento-de-Montevideo" },
      { title: "Jooble Uruguay: transporte marítimo Montevideo", url: "https://uy.jooble.org/trabajo-transporte-maritimo/Montevideo%2C-Montevideo" },
      { title: "CUDIM: llamado Responsable de Comercio Exterior", url: "https://cudim.org/wp-content/uploads/2025/09/Llamado-Externo-Responsable-de-Comercio-Exterior.pdf" },
      { title: "Bolsa UM: Analista de Comercio Exterior (Trafigura)", url: "https://empleo.um.edu.uy/jobs/759224" }
    ]
  }
]
