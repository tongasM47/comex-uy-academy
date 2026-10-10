import type { Subtopic } from '../types'

export const p01Lessons: Subtopic[] = [
  // ───────────────────────────────────────────────────────────── p01-s1
  {
    id: 'p01-s1',
    moduleId: 'p01',
    title: 'Qué es el comercio exterior y quiénes participan en Uruguay',
    summary:
      'Comerciar con el exterior es mover mercadería a través de una frontera aduanera, con papeles, tributos y muchos actores. Saber quién hace qué es lo primero que te van a preguntar en cualquier oficina de comex.',
    minutes: 11,
    sections: [
      {
        heading: 'La idea de fondo: cruzar una frontera aduanera',
        blocks: [
          {
            type: 'p',
            text: 'Cuando una empresa uruguaya compra vasos en China, vende carne a los Países Bajos o manda vino a Brasil en camión, está haciendo **comercio exterior**. Lo que cambia respecto de una venta en plaza no es tanto el producto sino el hecho de que la mercadería **cruza una frontera aduanera**. Y cada vez que eso pasa, el Estado quiere saber qué entra o sale, cuánto vale, de dónde viene y qué tributos corresponden.',
          },
          {
            type: 'p',
            text: 'Por eso una operación de comex siempre tiene tres capas que corren en paralelo: la **comercial** (el contrato entre comprador y vendedor, el precio, el Incoterm, el pago), la **logística** (cómo viaja la mercadería, en qué contenedor, con qué transportista) y la **aduanera** (la declaración ante la Dirección Nacional de Aduanas, los tributos, los controles). Un buen operador de comex es el que logra que las tres capas cuenten la misma historia.',
          },
          {
            type: 'eli5',
            text: 'Pensá en un club con portero. Adentro del club (Uruguay) todos se mueven libres, pero cada vez que alguien entra o sale con una bolsa, el portero mira qué lleva, anota cuánto vale y a veces cobra una entrada. El comercio exterior es todo lo que pasa en esa puerta: quién trae la bolsa, quién la carga, quién llena el formulario del portero y quién paga la entrada.',
          },
          {
            type: 'list',
            items: [
              '**Importación:** la mercadería extranjera entra al territorio aduanero uruguayo. La definitiva es la que la “nacionaliza”: se pagan los tributos y queda libre para circular y venderse.',
              '**Exportación:** la mercadería sale del territorio aduanero hacia otro país (o hacia una zona franca, que a efectos aduaneros se trata como exterior).',
              '**Tránsito:** la mercadería pasa por Uruguay sin quedarse, por ejemplo carga paraguaya que baja por la Hidrovía y se trasborda en Nueva Palmira.',
              '**Regímenes suspensivos:** la mercadería entra sin pagar tributos con la condición de volver a salir, como la admisión temporaria. Los vas a ver en el módulo 7.',
            ],
          },
        ],
      },
      {
        heading: 'Los actores de una operación',
        blocks: [
          {
            type: 'p',
            text: 'En una importación típica intervienen muchas personas y organismos. Ninguno hace todo, y gran parte del trabajo de una oficina de comex es coordinarlos. Esta tabla resume quién es quién en Uruguay.',
          },
          {
            type: 'table',
            headers: ['Actor', 'Qué hace', 'Base'],
            rows: [
              ['**Importador / exportador**', 'Dueño de la mercadería. Para importar tiene que estar al día con la DNA, la DGI, el BPS y el BSE, e inscripto en el registro de importadores.', 'CAROU arts. 32–43'],
              ['**Despachante de aduana**', 'Auxiliar privado del comercio y de la función pública aduanera. Clasifica, valora, arma y transmite el DUA, liquida y paga tributos y asiste a la verificación.', 'CAROU art. 14 y ss.'],
              ['**DNA** (Dirección Nacional de Aduanas)', 'Autoridad aduanera: controla, clasifica, valora, recauda y asigna canales de revisión.', 'CAROU arts. 6–12'],
              ['**Agente de transporte** (agencia marítima o aérea)', 'Representa al buque o al avión: presenta el manifiesto de llegada, gestiona carga, descarga y transbordos.', 'CAROU art. 32'],
              ['**Freight forwarder / agente de carga**', 'Organiza el transporte puerta a puerta, consolida carga suelta y emite el conocimiento “house”.', '—'],
              ['**ANP y terminales**', 'La Administración Nacional de Puertos administra el puerto de Montevideo. TCP opera la terminal de contenedores y Montecon los muelles públicos multipropósito.', '—'],
              ['**Depositario**', 'Opera un depósito aduanero o portuario e informa ingresos y egresos de mercadería.', 'CAROU'],
              ['**Banco**', 'Hace los pagos internacionales (transferencias, cartas de crédito, cobranzas) y cobra tributos como agente de cobranza (por ejemplo, el BROU).', '—'],
              ['**Aseguradora**', 'Emite la póliza de transporte de la carga.', '—'],
              ['**Organismos de control** (vía VUCE)', 'MSP, MGAP, LATU, URSEA, MIEM y otros: emiten permisos y certificados que el sistema aduanero verifica en forma electrónica.', '—'],
            ],
            caption: 'Fuente: Procedimiento DUA digital de importación (DNA) y CAROU, Ley 19.276.',
          },
          {
            type: 'callout',
            tone: 'uy',
            title: 'TCP y Montecon',
            text: 'En el puerto de Montevideo vas a escuchar todo el tiempo estos dos nombres. **TCP** (Terminal Cuenca del Plata) es 80 % de Katoen Natie y 20 % de la ANP, y desde el acuerdo de 2021 tiene prioridad de atraque para portacontenedores. **Montecon** opera los muelles públicos multipropósito. Cuando un cliente pregunta “¿dónde está mi contenedor?”, casi siempre la respuesta es una de las dos.',
          },
        ],
      },
      {
        heading: 'El despachante de aduana, pieza central',
        blocks: [
          {
            type: 'p',
            text: 'El **Código Aduanero de la República Oriental del Uruguay** (CAROU, Ley 19.276) define al despachante en su art. 14 y establece que tramitar los regímenes y las declaraciones le corresponde a él, salvo las tareas propias de los agentes de transporte. En la práctica es el **declarante** en la gran mayoría de las operaciones: firma el DUA, liquida los tributos y da la cara ante la DNA.',
          },
          {
            type: 'p',
            text: 'No es un simple gestor. El art. 27 del CAROU lo hace **responsable solidario** con su cliente (el comitente) por los tributos aduaneros, sus reajustes y los proventos portuarios. Eso explica por qué los estudios de despachantes son tan prolijos con los papeles: si algo falta pagar, también se lo pueden reclamar a ellos.',
          },
          {
            type: 'list',
            items: [
              'Envíos postales no comerciales.',
              'Equipaje de viajeros.',
              'Envíos de entrega expresa de bajo valor.',
              'Envíos de organismos estatales.',
              'Franquicias de residentes que retornan.',
              'Muestras exentas de hasta US$ 500 en importación o US$ 1.000 en exportación (Ley 19.924).',
              'Régimen especial de comercio fronterizo (Ley 20.419, de 2025).',
            ],
          },
          {
            type: 'p',
            text: 'Esa lista son los casos del **art. 15 del CAROU** en los que la intervención del despachante **no es obligatoria**. Fuera de ellos, para importar o exportar en forma comercial necesitás un despachante.',
          },
          {
            type: 'callout',
            tone: 'info',
            title: 'Si entrás a trabajar en un estudio',
            text: 'Para que un empleado actúe en nombre del despachante tiene que estar **registrado en el sistema aduanero** (Decreto 96/015). El trámite lo inicia el despachante, no el empleado, y es gratuito. Un empleado registrado **no puede firmar el DUA** ni sus correcciones, ni actas de discrepancia: eso queda para el titular, que además responde por los actos de sus empleados.',
          },
        ],
      },
      {
        heading: 'Los sistemas: LUCIA, VUCE y compañía',
        blocks: [
          {
            type: 'p',
            text: 'Hoy el comercio exterior uruguayo es casi totalmente digital. Hay dos nombres que tenés que manejar desde el primer día:',
          },
          {
            type: 'table',
            headers: ['Sistema', 'Qué es', 'Para qué lo usás'],
            rows: [
              ['**LUCIA**', 'El sistema informático de la DNA.', 'Ahí se transmite el DUA, se numera, se liquidan los tributos y se asigna el canal (verde, naranja o rojo).'],
              ['**VUCE**', 'Ventanilla Única de Comercio Exterior.', 'Centraliza los permisos y certificados de los organismos (MSP, MGAP, LATU, URSEA…). Los certificados viajan electrónicamente y se vinculan al DUA.'],
              ['**GEX**', 'Expediente electrónico.', 'Trámites ante la DNA, por ejemplo el registro de empleados de despachante.'],
              ['**RADE**', 'Archivo digital homologado por la DNA.', 'Guarda durante 10 años las imágenes de los documentos firmadas digitalmente.'],
            ],
          },
          {
            type: 'eli5',
            text: 'LUCIA es el portero digital del edificio: lee tu formulario, le pone número y decide si pasás directo o si te revisan la mochila. La VUCE es la ventanilla donde juntás todos los permisos de los demás organismos sin tener que ir oficina por oficina.',
          },
          {
            type: 'p',
            text: 'El **DUA** (Documento Único Aduanero) es la declaración que se usa para todos los regímenes: importación, exportación, tránsito y admisión temporaria. Se creó con el Decreto 333/992 y hoy es un mensaje electrónico que el despachante envía a LUCIA. LUCIA le asigna un número con el formato **NNN-AAAA-999999** (aduana, año y correlativo).',
          },
        ],
      },
      {
        heading: 'Dónde se trabaja en comex en Uruguay',
        blocks: [
          {
            type: 'p',
            text: 'Como vos querés entrar a una oficina de comex, conviene ver el mapa de empleadores desde ahora. Cada uno ve la misma operación desde un ángulo distinto.',
          },
          {
            type: 'table',
            headers: ['Empleador', 'Qué hace', 'Puestos de entrada', 'Lo que más valoran'],
            rows: [
              ['Estudio de despachante', 'Representa al importador o exportador ante la DNA y arma el DUA en LUCIA.', 'Cadete o gestor, auxiliar administrativo, auxiliar de aduana.', 'Prolijidad, NCM, LUCIA, VUCE.'],
              ['Freight forwarder / NVOCC', 'Vende y coordina transporte internacional y consolida carga.', 'Customer service operativo, documentación, pricing junior.', 'Inglés, Excel, seguimiento de embarques, Incoterms.'],
              ['Agencia marítima', 'Representa a la naviera en puerto: escalas, manifiestos, liberación de B/L, contenedores vacíos.', 'Documentación, operaciones de buque, equipos.', 'Conocimiento portuario e inglés.'],
              ['Importador o exportador', 'Compra o vende al exterior y coordina con forwarder y despachante.', 'Asistente de comercio exterior o de importaciones.', 'ERP, Excel, costeo de importación.'],
              ['Zona franca / centro de distribución', 'Almacenaje, reexportación y distribución regional.', 'Asistente de exportaciones, operador logístico.', 'Regímenes de zona franca y tránsito.'],
              ['Banco (mesa de comercio exterior)', 'Cartas de crédito, cobranzas, transferencias SWIFT, garantías.', 'Back office, analista de operaciones.', 'UCP 600, URC 522, revisión documental.'],
              ['Courier', 'Despacho de envíos chicos y régimen de franquicias.', 'Operaciones, atención.', 'Rapidez y régimen 2026.'],
            ],
            caption: 'Fuente: relevamiento de avisos y Decreto 913/986 (categorías de empleados de despachantes).',
          },
          {
            type: 'callout',
            tone: 'tip',
            title: 'Tu experiencia naval cuenta',
            text: 'En una **agencia marítima** o en una terminal, conocer cómo funciona un buque, los turnos y la operativa portuaria pesa mucho. Es un punto fuerte para destacar en el CV cuando hables de puertos, escalas y manifiestos.',
          },
        ],
      },
      {
        heading: 'Una operación de punta a punta',
        blocks: [
          {
            type: 'p',
            text: 'Para que veas cómo encajan los actores, seguí una importación de vasos de vidrio desde Ningbo (China) hasta un depósito en Montevideo.',
          },
          {
            type: 'steps',
            items: [
              { title: 'Negociación', text: 'El importador recibe una **factura pro-forma** del proveedor con precio, Incoterm y forma de pago.' },
              { title: 'Clasificación y permisos', text: 'El despachante clasifica los vasos en la NCM y revisa si necesitan algún permiso en la VUCE.' },
              { title: 'Pago', text: 'El banco del importador transfiere el anticipo al proveedor o abre una carta de crédito.' },
              { title: 'Embarque', text: 'El forwarder reserva el contenedor; la naviera emite el **B/L** cuando lo carga en el buque.' },
              { title: 'Arribo', text: 'La agencia marítima presenta el manifiesto ante la DNA; el contenedor se descarga en TCP y queda en depósito temporal.' },
              { title: 'Despacho', text: 'El despachante transmite el DUA en LUCIA, se pagan los tributos y el sistema asigna canal.' },
              { title: 'Retiro', text: 'Con el levante (el CAROU lo llama **libramiento**) y los gastos de terminal pagos, el contenedor sale hacia el depósito del importador.' },
            ],
          },
          {
            type: 'example',
            title: 'Quién llama a quién',
            text: 'Si el contenedor llega y el DUA no está listo, la terminal empieza a cobrar almacenaje y la naviera cobra demoras por el contenedor. El importador llama al despachante, el despachante pide al cliente la factura que falta, el forwarder pide días libres extra a la naviera. Todo eso es comercio exterior de todos los días.',
          },
          {
            type: 'eli5',
            text: 'Es como organizar un cumpleaños en otra ciudad: uno compra la torta (importador), otro la lleva en auto (transportista), otro arma la lista de invitados y los permisos del salón (despachante) y el dueño del salón (la Aduana) controla en la puerta que lo que entra coincide con la lista.',
          },
        ],
      },
    ],
    eli5: [
      {
        concept: 'Comercio exterior',
        text: 'Es lo que pasa en la puerta del club. Adentro todos se mueven libres; en la puerta el portero (la Aduana) mira qué traés, cuánto vale y te cobra la entrada si corresponde.',
      },
      {
        concept: 'Despachante de aduana',
        text: 'Es el gestor con matrícula que llena los formularios de la Aduana por vos. Y si falta pagar algo, también le pueden cobrar a él, como un garante que firmó con vos el alquiler.',
      },
      {
        concept: 'Freight forwarder',
        text: 'Es el organizador de excursiones: no tiene el ómnibus ni el avión, pero consigue los lugares, arma el viaje y te avisa cuando llegaste.',
      },
      {
        concept: 'LUCIA',
        text: 'Es el portero digital: recibe el formulario, le pone número y decide si pasás directo (verde), si te piden los papeles (naranja) o si te abren la valija (rojo).',
      },
    ],
    keyPoints: [
      'Toda operación de comex tiene tres capas: comercial, logística y aduanera, y las tres tienen que coincidir.',
      'El despachante de aduana es el declarante en la mayoría de los casos (CAROU art. 14) y responde solidariamente con su cliente por los tributos (art. 27).',
      'El art. 15 del CAROU lista los casos en que el despachante no es obligatorio: envíos postales no comerciales, equipaje, envíos expresos de bajo valor, entre otros.',
      'LUCIA es el sistema de la DNA donde se transmite y numera el DUA; la VUCE centraliza los permisos de los demás organismos.',
      'El DUA es la declaración única para importación, exportación, tránsito y admisión temporaria, y su número tiene el formato NNN-AAAA-999999.',
      'En el puerto de Montevideo, TCP opera la terminal de contenedores y Montecon los muelles públicos multipropósito.',
      'Los empleos de entrada están en estudios de despachantes, forwarders, agencias marítimas, departamentos de comex, zonas francas, bancos y couriers.',
    ],
    probableQuestions: [
      { question: '¿Qué hace un despachante de aduana?', answer: 'Representa al importador o exportador ante la DNA: clasifica la mercadería, determina el valor, arma y transmite el DUA en LUCIA, liquida y paga tributos y asiste a la verificación. Responde solidariamente por los tributos (CAROU art. 27).' },
      { question: '¿Qué diferencia hay entre la DNA y el despachante?', answer: 'La DNA es la autoridad pública que controla y recauda; el despachante es un auxiliar privado que actúa por cuenta del cliente ante la DNA.' },
      { question: '¿Qué es LUCIA?', answer: 'El sistema informático de la DNA donde se transmiten, numeran y liquidan los DUA y se asignan los canales de revisión.' },
      { question: '¿Qué es la VUCE?', answer: 'La Ventanilla Única de Comercio Exterior: centraliza los permisos y certificados de organismos como MSP, MGAP, LATU o URSEA y los vincula electrónicamente al DUA.' },
      { question: 'Nombrá tres casos en los que no es obligatorio el despachante.', answer: 'Equipaje, envíos postales no comerciales y envíos de entrega expresa de bajo valor (CAROU art. 15). También muestras exentas, envíos estatales y franquicias de residentes que retornan.' },
      { question: '¿Qué rol cumple la agencia marítima?', answer: 'Representa a la naviera en puerto: presenta el manifiesto de llegada ante la DNA, gestiona la descarga y libera el B/L y los contenedores.' },
      { question: '¿Qué hace un freight forwarder?', answer: 'Organiza el transporte internacional puerta a puerta, consolida carga suelta (LCL) y emite el conocimiento house a cada cliente.' },
      { question: '¿Puede un empleado de despachante firmar un DUA?', answer: 'No. El empleado registrado (Decreto 96/015) no puede firmar el DUA ni sus correcciones; lo firma el despachante titular, que responde por sus empleados.' },
    ],
    sources: [
      { title: 'DNA: Procedimiento DUA digital de importación', url: 'https://www.aduanas.gub.uy/innovaportal/file/10163/1/procedimiento_dua_digital_-_importacion.pdf' },
      { title: 'IMPO: Código Aduanero, Ley 19.276', url: 'https://www.impo.com.uy/bases/codigo-aduanero/19276-2014' },
      { title: 'gub.uy: Registro de empleados de despachante', url: 'https://www.gub.uy/tramites/solicitud-registro-empleados-despachante' },
      { title: 'IMPO: Decreto 96/015', url: 'https://www.impo.com.uy/bases/decretos/96-2015' },
      { title: 'IMPO: Decreto 913/986 (categorías de empleados de despachantes)', url: 'https://impo.com.uy/bases/decretos/913-1986/3' },
      { title: 'Mundo Marítimo: TCP centraliza contenedores', url: 'https://www.mundomaritimo.cl/noticias/terminal-cuenca-del-plata-comienza-a-centralizar-operaciones-de-contenedores-en-el-puerto-de-montevideo' },
      { title: 'Indeed Uruguay: empleos de comercio exterior', url: 'https://uy.indeed.com/Empleos-de-Comercio-exterior-en-Departamento-de-Montevideo' },
    ],
  },

  // ───────────────────────────────────────────────────────────── p01-s2
  {
    id: 'p01-s2',
    moduleId: 'p01',
    title: 'Mapa general: Incoterms, pro-forma, documentos, secuencia, admisión temporaria y zona franca',
    summary:
      'Una vista de pájaro de todo el curso: qué es cada pieza y cómo se conecta con las demás. Si entendés este mapa, cada módulo siguiente tiene dónde engancharse.',
    minutes: 12,
    sections: [
      {
        heading: 'Por qué empezar por el mapa',
        blocks: [
          {
            type: 'p',
            text: 'En comercio exterior todo está conectado. El Incoterm que pactás en la pro-forma define quién paga el flete; el flete entra en el valor en aduana; el valor en aduana es la base de los tributos del DUA; y si la mercadería va a una zona franca o entra en admisión temporaria, cambia todo el tratamiento tributario. Por eso conviene ver primero el mapa completo y después ir pieza por pieza.',
          },
          {
            type: 'table',
            headers: ['Pieza', 'Pregunta que responde', 'Módulo'],
            rows: [
              ['Incoterms', '¿Dónde se entrega, quién paga qué y cuándo pasa el riesgo?', '2'],
              ['Pro-forma y factura comercial', '¿Qué se ofreció y qué se vendió, a qué precio y en qué condiciones?', '3'],
              ['Documentos de transporte y de origen', '¿Cómo viaja, quién puede retirarla y dónde se produjo?', '4'],
              ['Secuencia de importación y DUA', '¿Qué pasos hay desde el pedido hasta el retiro?', '5'],
              ['Cálculo de tributos', '¿Cuánto se paga y sobre qué base?', '6'],
              ['Admisión temporaria', '¿Puedo entrar insumos sin pagar si después exporto?', '7'],
              ['Zona franca', '¿Qué pasa con la mercadería en un área fuera del territorio aduanero?', '8'],
            ],
          },
        ],
      },
      {
        heading: 'Incoterms: el reparto de la cancha',
        blocks: [
          {
            type: 'p',
            text: 'Los **Incoterms** son 11 reglas de tres letras de la **Cámara de Comercio Internacional (ICC)** que se usan en los contratos de compraventa entre empresas. Definen el punto de **entrega**, cuándo se **transfiere el riesgo**, cómo se **reparten los costos** y quién hace los trámites de exportación e importación. La edición vigente es **Incoterms® 2020**. No regulan la propiedad, el precio ni el medio de pago.',
          },
          {
            type: 'eli5',
            text: 'Los Incoterms son las reglas de “¿quién lleva la torta a la fiesta?”: dicen hasta dónde la lleva tu tía, desde dónde la lleva tu mamá, quién paga el taxi y de quién es la culpa si la torta se cae en el camino.',
          },
          {
            type: 'callout',
            tone: 'uy',
            title: 'Un dato que conecta con el DUA',
            text: 'En Uruguay el **valor en aduana de una importación se arma en base CIF**: producto más flete y seguro hasta el lugar de importación. Si compraste FOB, el despachante le suma el flete y el seguro. Por eso el Incoterm no es solo un tema comercial: cambia la cuenta de los tributos.',
          },
        ],
      },
      {
        heading: 'Pro-forma, factura y documentos',
        blocks: [
          {
            type: 'p',
            text: 'La **factura pro-forma** es una cotización formal que el exportador manda antes de cerrar la venta. Con ella el importador tramita permisos, abre una carta de crédito o calcula el costo. No tiene efecto fiscal ni sirve para despachar. La **factura comercial**, en cambio, la emite el exportador cuando concreta la venta y es documento obligatorio del DUA: prueba el precio que se pagó.',
          },
          {
            type: 'table',
            headers: ['Documento', 'Para qué sirve', 'Quién lo emite'],
            rows: [
              ['Pro-forma', 'Oferta formal antes de la venta', 'Exportador'],
              ['Factura comercial', 'Prueba de la compraventa y del precio', 'Exportador'],
              ['Packing list', 'Detalle por bulto: pesos, medidas y marcas', 'Exportador'],
              ['B/L, AWB o CRT', 'Contrato de transporte y recibo de la carga (marítimo, aéreo o carretero)', 'Transportista o forwarder'],
              ['MIC/DTA', 'Manifiesto del camión y tránsito aduanero terrestre', 'Transportista terrestre'],
              ['Certificado de origen', 'Prueba dónde se produjo la mercadería para acceder a preferencias', 'Entidad habilitada (cámaras)'],
              ['DUA', 'Declaración aduanera', 'Despachante, en LUCIA'],
            ],
          },
          {
            type: 'eli5',
            text: 'La pro-forma es el menú con precios que te dan antes de pedir. La factura comercial es el ticket que te dan después de comer.',
          },
        ],
      },
      {
        heading: 'La secuencia de una importación',
        blocks: [
          {
            type: 'p',
            text: 'Toda importación sigue más o menos la misma línea de tiempo. En el módulo 5 la vas a ver al detalle; acá te alcanza con la secuencia.',
          },
          { type: 'tool', toolId: 'import-sequence' },
          {
            type: 'steps',
            items: [
              { title: 'Negociación y pro-forma', text: 'Se pactan precio, Incoterm, plazo y forma de pago.' },
              { title: 'Clasificación y permisos', text: 'El despachante clasifica en la NCM y se tramitan los permisos en la VUCE.' },
              { title: 'Pago internacional', text: 'Transferencia, cobranza documentaria o carta de crédito.' },
              { title: 'Embarque', text: 'Se emiten el documento de transporte, la factura comercial y el packing list.' },
              { title: 'Arribo', text: 'El agente de transporte presenta el manifiesto; la carga queda en depósito temporal.' },
              { title: 'DUA', text: 'El despachante transmite el DUA y la declaración de valor; LUCIA lo numera y liquida.' },
              { title: 'Pago y canal', text: 'Se pagan los tributos y el sistema asigna canal verde, naranja o rojo.' },
              { title: 'Levante y retiro', text: 'Con el cumplido, se pagan los gastos de terminal y la mercadería sale.' },
            ],
          },
        ],
      },
      {
        heading: 'Admisión temporaria: entrar sin pagar para volver a salir',
        blocks: [
          {
            type: 'p',
            text: 'La **admisión temporaria** (AT) permite ingresar mercadería extranjera **sin pagar los tributos de importación**, con la condición de que vuelva a salir del país dentro de un plazo, transformada (perfeccionamiento activo) o en el mismo estado. Es un régimen **suspensivo**: los tributos quedan en suspenso y, si la mercadería no sale, hay que pagarlos o se aplican sanciones.',
          },
          {
            type: 'table',
            headers: ['Mecanismo (Ley 18.184)', 'Qué hace'],
            rows: [
              ['Admisión temporaria', 'Ingreso sin tributos de insumos para transformarlos y reexportarlos.'],
              ['Toma de stock', 'La empresa repone, sin tributos, insumos que ya había importado pagando y usó en algo que exportó.'],
              ['Draw back', 'Se devuelven los tributos pagados por insumos que después se incorporaron a un producto exportado.'],
            ],
          },
          {
            type: 'callout',
            tone: 'uy',
            title: 'Plazo y control',
            text: 'Para el régimen industrial de la **Ley 18.184** el plazo de la operación es de **18 meses**, perentorio, con una sola prórroga excepcional de hasta 18 meses más. El contralor es del **MIEM**, con intervención técnica del **LATU**, sin perjuicio de la DNA y la DGI. Vender en plaza mercadería que está en admisión temporaria sin nacionalizarla es una infracción.',
          },
          {
            type: 'example',
            title: 'Tela para camisas',
            text: 'Una confeccionista importa tela en admisión temporaria, la convierte en camisas y las exporta a Brasil. No pagó arancel ni IVA por la tela porque la tela salió del país incorporada a las camisas.',
          },
        ],
      },
      {
        heading: 'Zona franca: territorio uruguayo, pero fuera de la aduana',
        blocks: [
          {
            type: 'p',
            text: 'Una **zona franca** es un área cercada y aislada del territorio nacional, determinada por el Poder Ejecutivo, donde se pueden hacer actividades industriales, comerciales o de servicios con beneficios fiscales (Ley 15.921). Para el CAROU (art. 160), la mercadería que entra a la zona se considera **fuera del territorio aduanero** a efectos de los tributos de importación.',
          },
          {
            type: 'table',
            headers: ['Movimiento', 'Cómo se trata'],
            rows: [
              ['Exterior → zona franca', 'Sin tributos.'],
              ['Territorio no franco → zona franca', 'Es una **exportación** (DUA de exportación).'],
              ['Zona franca → territorio no franco', 'Es una **importación a todos sus efectos**: DUA, arancel según origen, IVA y demás tributos.'],
              ['Zona franca → exterior', 'Sin tributos.'],
            ],
          },
          {
            type: 'eli5',
            text: 'La zona franca es como el free shop del aeropuerto: estás en Uruguay, pero lo que está ahí adentro todavía no “entró” al país. Si lo sacás a la calle, pagás como cualquier importación.',
          },
          {
            type: 'callout',
            tone: 'info',
            text: 'La mercadería puede quedarse en la zona franca por **tiempo indefinido** (CAROU art. 161). Zonamerica, Parque de las Ciencias, Florida, Colonia y Nueva Palmira son ejemplos de zonas francas uruguayas.',
          },
        ],
      },
    ],
    eli5: [
      {
        concept: 'Incoterms',
        text: 'Son las reglas de quién lleva la torta a la fiesta: hasta dónde la lleva cada uno, quién paga el taxi y de quién es la culpa si se cae.',
      },
      {
        concept: 'Admisión temporaria',
        text: 'Es como pedir prestados los ingredientes al almacén con la promesa de devolverlos convertidos en torta para vender afuera. Si no devolvés nada, tenés que pagar los ingredientes y una multa.',
      },
      {
        concept: 'Zona franca',
        text: 'Es una sala de espera mágica donde las cosas pueden quedarse, cambiarse de caja y volver a irse sin pagar entrada. Solo pagan si salen a la calle uruguaya.',
      },
      {
        concept: 'Pro-forma y factura',
        text: 'La pro-forma es el menú antes de pedir; la factura comercial es el ticket después de comer.',
      },
    ],
    keyPoints: [
      'Incoterms 2020 define entrega, riesgo, costos y trámites; no regula propiedad, precio ni pago.',
      'El valor en aduana de una importación uruguaya es base CIF, por eso el Incoterm afecta los tributos.',
      'La pro-forma es una oferta sin efecto fiscal; la factura comercial prueba la venta y acompaña al DUA.',
      'La secuencia de importación va de la pro-forma al retiro, pasando por permisos, pago, embarque, arribo, DUA, canal y levante.',
      'La admisión temporaria (Ley 18.184) suspende los tributos de insumos que se reexportan; plazo de 18 meses, con control del MIEM y el LATU.',
      'La zona franca es territorio uruguayo pero fuera del territorio aduanero; sacar mercadería de ella al resto del país es una importación.',
    ],
    probableQuestions: [
      { question: '¿Qué regulan y qué no regulan los Incoterms?', answer: 'Regulan entrega, transferencia del riesgo, reparto de costos y trámites aduaneros. No regulan la propiedad, el precio, el medio de pago ni la ley aplicable.' },
      { question: '¿Sirve la pro-forma para despachar una importación definitiva?', answer: 'No. Es una oferta previa sin efecto fiscal; para el DUA se necesita la factura comercial.' },
      { question: '¿Qué es la admisión temporaria?', answer: 'Un régimen suspensivo que permite ingresar mercadería sin pagar tributos de importación con la condición de que vuelva a salir, transformada o en el mismo estado, dentro de un plazo.' },
      { question: '¿Cuál es el plazo de la admisión temporaria industrial?', answer: '18 meses perentorios (Ley 18.184), con una sola prórroga excepcional de hasta 18 meses más.' },
      { question: '¿Qué es pasar mercadería de una zona franca al resto del país?', answer: 'Una importación a todos sus efectos: se hace DUA y se pagan arancel según origen, IVA y demás tributos.' },
      { question: '¿Y de territorio no franco a zona franca?', answer: 'Una exportación, con DUA de exportación.' },
      { question: '¿Cuánto puede quedarse la mercadería en zona franca?', answer: 'Por tiempo indefinido (CAROU art. 161).' },
    ],
    sources: [
      { title: 'ICC: Incoterms® 2020', url: 'https://iccwbo.org/business-solutions/incoterms-rules/incoterms-2020/' },
      { title: 'DNA: Orden del Día 001/2003 (valor en aduana)', url: 'https://www.aduanas.gub.uy/innovaportal/file/1647/1/od-2003-001.pdf' },
      { title: 'IMPO: Código Aduanero, Ley 19.276', url: 'https://www.impo.com.uy/bases/codigo-aduanero/19276-2014' },
      { title: 'DNA: Procedimiento DUA digital de importación', url: 'https://www.aduanas.gub.uy/innovaportal/file/10163/1/procedimiento_dua_digital_-_importacion.pdf' },
      { title: 'IMPO: Ley 18.184 (admisión temporaria)', url: 'https://www.impo.com.uy/bases/leyes/18184-2007' },
      { title: 'IMPO: Ley 15.921 (zonas francas)', url: 'https://www.impo.com.uy/bases/leyes/15921-1987' },
      { title: 'IMPO: CAROU art. 160', url: 'https://www.impo.com.uy/bases/codigo-aduanero/19276-2014/160' },
    ],
  },

  // ───────────────────────────────────────────────────────────── p01-s3
  {
    id: 'p01-s3',
    moduleId: 'p01',
    title: 'Logística internacional: modos de transporte, puertos y terminales de Uruguay',
    summary:
      'Cómo viaja la mercadería, cómo se mide y se cobra el flete, y qué infraestructura tiene Uruguay. Es el vocabulario diario de un forwarder y de cualquier oficina de comex.',
    minutes: 13,
    sections: [
      {
        heading: 'Los modos de transporte',
        blocks: [
          {
            type: 'p',
            text: 'Elegir el modo de transporte es elegir entre costo, tiempo y riesgo. Cada modo tiene su documento y su forma de cobrar el flete.',
          },
          {
            type: 'table',
            headers: ['Modo', 'Ventajas', 'Desventajas', 'Documento', 'Se cobra por'],
            rows: [
              ['**Marítimo**', 'Barato por unidad, grandes volúmenes', 'Lento, depende de escalas y transbordos', 'B/L (conocimiento de embarque)', 'Contenedor (FCL) o W/M (LCL)'],
              ['**Aéreo**', 'Rápido, ideal para alto valor, urgencias, perecederos y farma', 'Caro; límites de peso, tamaño y mercancía peligrosa', 'AWB (guía aérea)', 'Kilo facturable'],
              ['**Terrestre (camión)**', 'Puerta a puerta, flexible, dominante con Argentina y Brasil', 'Pasos de frontera, capacidad limitada', 'CRT + MIC/DTA', 'Viaje o kg/m³ en consolidado'],
              ['**Fluvial**', 'Hidrovía Paraná-Paraguay, graneles', 'Calado del río, estacionalidad', 'Conocimiento fluvial', 'Tonelada o contenedor'],
              ['**Ferroviario**', 'Grandes volúmenes internos', 'Poca relevancia internacional hoy en Uruguay', '—', 'Vagón o tonelada'],
              ['**Multimodal**', 'Un solo contrato y responsable', 'Exige coordinación', 'Documento multimodal', 'Global'],
            ],
          },
        ],
      },
      {
        heading: 'Marítimo: FCL, LCL y contenedores',
        blocks: [
          {
            type: 'p',
            text: 'En el transporte marítimo de carga general hay dos formas de contratar. **FCL** (*Full Container Load*) es alquilar el contenedor entero: el cliente lo carga y lo precinta en origen. **LCL** (*Less than Container Load*) es carga suelta compartida: un consolidador junta la carga de varios clientes en un contenedor y en destino lo **desconsolida**. El LCL se cobra por **W/M** (*weight or measure*): lo mayor entre las toneladas y los metros cúbicos, con la equivalencia 1 t = 1 m³.',
          },
          {
            type: 'eli5',
            text: 'FCL es alquilar el ómnibus entero para tu familia. LCL es comprar asientos en un ómnibus compartido: pagás solo tu lugar, pero viajás con otros y en la terminal hay que separar el equipaje de cada uno.',
          },
          {
            type: 'table',
            headers: ['Contenedor', 'Interior aprox. (L × A × H)', 'Volumen', 'Carga útil aprox.', 'TEU'],
            rows: [
              ['20′ Dry', '5,90 × 2,35 × 2,39 m', '~33 m³', '~28 t', '1'],
              ['40′ Dry', '12,03 × 2,35 × 2,39 m', '~67-68 m³', '~28,7 t', '2'],
              ['40′ High Cube', '12,03 × 2,35 × 2,70 m', '~76 m³', '~28,6 t', '2'],
              ['Reefer 20′/40′', 'Algo menor que el seco por el aislamiento', 'Varía por naviera', 'Variable', '1 o 2'],
            ],
            caption: 'Valores de referencia de una naviera; cada línea tiene su ficha técnica.',
          },
          {
            type: 'p',
            text: 'El **TEU** (*Twenty-foot Equivalent Unit*) es la unidad de medida de los puertos: un 20′ vale 1 TEU y un 40′, seco o High Cube, vale 2. Por eso 120 contenedores de 20′ y 210 de 40′ son 330 contenedores pero **540 TEU**. Los reefer (refrigerados) se usan para carne, frutas, lácteos y farma, y necesitan toma eléctrica en la terminal.',
          },
        ],
      },
      {
        heading: 'Aéreo: el peso volumétrico',
        blocks: [
          {
            type: 'p',
            text: 'Un avión se llena de espacio antes que de peso. Por eso las aerolíneas cobran por el **peso facturable** (*chargeable weight*): el mayor entre el peso bruto real y el **peso volumétrico**. El divisor estándar de la IATA es **6000**: largo × ancho × alto en centímetros, dividido 6000, da kilos volumétricos (equivale a 1 m³ = 166,67 kg). Algunos couriers usan 5000.',
          },
          {
            type: 'example',
            title: 'Caja liviana pero grande',
            text: 'Una caja de 100 × 60 × 30 cm pesa 20 kg. Volumen: 180.000 cm³ ÷ 6000 = **30 kg volumétricos**. Como 30 es mayor que 20, se paga por **30 kg**.',
          },
          { type: 'tool', toolId: 'volumetric-calculator' },
          {
            type: 'eli5',
            text: 'Si mandás una caja enorme llena de plumas, la aerolínea te cobra como si pesara más, porque ocupa el lugar de algo pesado que podría haber llevado.',
          },
          {
            type: 'callout',
            tone: 'uy',
            title: 'Carrasco',
            text: 'La carga aérea uruguaya pasa por el **Aeropuerto Internacional de Carrasco**, en la Terminal de Cargas del Uruguay (TCU), con el régimen **MVD Free Airport** (aeropuerto libre, lanzado en 2016). En 2018 obtuvo la certificación IATA CEIV Pharma, y se especializa en farmacéuticos, electrónicos y redistribución regional.',
          },
        ],
      },
      {
        heading: 'Terrestre: el MERCOSUR por ruta',
        blocks: [
          {
            type: 'p',
            text: 'Con Argentina y Brasil manda el camión. El marco es el **ATIT** (Acuerdo sobre Transporte Internacional Terrestre, ALADI, 1990), firmado por Argentina, Bolivia, Brasil, Chile, Paraguay, Perú y Uruguay. Su anexo regula el tránsito aduanero internacional: los tributos quedan suspendidos durante el viaje, el camión va precintado y se controla en la aduana de partida, en la frontera y en destino.',
          },
          {
            type: 'list',
            items: [
              '**CRT:** el contrato de transporte por carretera, el equivalente del B/L o la AWB.',
              '**MIC/DTA:** Manifiesto Internacional de Carga / Declaración de Tránsito Aduanero. Un solo documento que es manifiesto del camión y declaración de tránsito; está informatizado en el MERCOSUR (Res. GMC 17/04).',
            ],
          },
          {
            type: 'table',
            headers: ['Con', 'Pasos de frontera principales'],
            rows: [
              ['Argentina', 'Fray Bentos – Puerto Unzué/Gualeguaychú; Paysandú – Colón; Salto – Concordia (represa de Salto Grande)'],
              ['Brasil', 'Rivera – Santana do Livramento; Chuy – Chuí; Río Branco – Jaguarão; Artigas – Quaraí; Bella Unión – Barra do Quaraí; Aceguá – Aceguá'],
            ],
          },
        ],
      },
      {
        heading: 'Puertos y terminales de Uruguay',
        blocks: [
          {
            type: 'p',
            text: 'El **Puerto de Montevideo** lo administra la **ANP** (Administración Nacional de Puertos), bajo el MTOP, y funciona con régimen de **Puerto Libre** (Ley 16.246 de 1992): la mercadería puede circular, almacenarse y manipularse en el recinto sin pagar tributos de importación mientras esté ahí. En 2025 movió **857.491 TEU**, según la ANP.',
          },
          {
            type: 'table',
            headers: ['Terminal o puerto', 'Qué hay que saber'],
            rows: [
              ['**TCP – Terminal Cuenca del Plata**', '80 % Katoen Natie, 20 % ANP. Terminal especializada de contenedores, concesión extendida en 2021 hasta 2081 con prioridad de atraque para portacontenedores. Tiene en marcha una expansión con un nuevo muelle de unos 730 m.'],
              ['**Montecon**', 'Opera los muelles públicos multipropósito; su accionista mayoritario es Neltume Ports. Perdió parte del tráfico de contenedores a TCP desde 2021.'],
              ['Otras terminales en Montevideo', 'TGM (graneles), TEBETUR (celulosa de UPM), Terminal Pesquera Capurro.'],
              ['**Nueva Palmira** (Colonia)', 'Kilómetro 0 de la Hidrovía Paraná-Paraguay y segundo puerto del país por volumen. Terminal de la ANP y terminales privadas de Corporación Navíos y Ontur, bajo régimen de zona franca. Graneles, celulosa, fertilizantes y trasbordo de barcazas.'],
              ['Otros puertos', 'Fray Bentos y Paysandú (río Uruguay), Juan Lacaze, Colonia (pasajeros), La Paloma.'],
            ],
          },
          {
            type: 'callout',
            tone: 'warn',
            title: 'Datos que cambian rápido',
            text: 'El estado de la expansión de TCP (se esperaba terminarla a inicios de 2026) y la propuesta de nueva terminal de contenedores que presentó Neltume en septiembre de 2026 están en movimiento. Antes de citarlos en una entrevista, confirmalos en la ANP o en prensa marítima reciente.',
          },
          {
            type: 'p',
            text: '¿Por qué se habla de Uruguay como **hub logístico**? Por los regímenes especiales (puerto libre, aeropuerto libre, zonas francas, depósitos, admisión temporaria, tránsito), por la ubicación en la boca del Río de la Plata y de la Hidrovía, por la estabilidad institucional, por los puertos operando 24/7 y por los centros de distribución regional en zonas francas.',
          },
        ],
      },
      {
        heading: 'Lo que cuesta mover la carga',
        blocks: [
          {
            type: 'p',
            text: 'Una cotización marítima tiene tres tramos: **origen** (retiro, gastos y THC de origen, emisión del B/L), **flete internacional** (el flete básico más recargos) y **destino** (THC de destino, gastos de terminal, desconsolidación si es LCL, almacenaje, flete interno, honorarios y tributos).',
          },
          {
            type: 'table',
            headers: ['Sigla', 'Qué compensa'],
            rows: [
              ['**BAF**', 'Variación del precio del combustible'],
              ['**CAF**', 'Variación cambiaria'],
              ['**THC**', 'Manipulación del contenedor en la terminal'],
              ['**PSS**', 'Temporada alta'],
              ['**GRI**', 'Aumento general de tarifas de la naviera'],
              ['**LSS**', 'Combustible bajo en azufre (IMO 2020)'],
            ],
          },
          {
            type: 'p',
            text: 'Dos palabras que vas a escuchar mucho: **demurrage** es cuando el contenedor lleno se queda **dentro de la terminal** más allá de los días libres; **detention** es cuando el importador lo tiene **fuera de la terminal** más tiempo del permitido antes de devolverlo vacío. En Uruguay se suele decir “demoras de contenedor” para las dos. Las causas típicas son el canal rojo, documentos faltantes o no tener fondos para pagar tributos.',
          },
          {
            type: 'eli5',
            text: 'La naviera te presta su caja gratis unos días. Si la dejás demasiado en el puerto (demurrage) o en tu casa (detention), te cobra por día, como un libro atrasado en la biblioteca.',
          },
          {
            type: 'example',
            title: 'Flete más demoras',
            text: 'Flete básico de un 40′: US$ 2.000. BAF 15 %: US$ 300. THC de destino: US$ 280. Días libres 7, el contenedor vuelve el día 11 y la detention es de US$ 60 por día: (11 − 7) × 60 = US$ 240. Total: **US$ 2.820**. Tarifas ficticias, solo para practicar.',
          },
        ],
      },
    ],
    eli5: [
      {
        concept: 'TEU',
        text: 'Es como contar cajas de zapatos del mismo tamaño: una caja chica (20 pies) vale 1 y una larga (40 pies) vale 2, porque ocupa el lugar de dos chicas.',
      },
      {
        concept: 'FCL y LCL',
        text: 'FCL es alquilar el ómnibus entero; LCL es comprar asientos en uno compartido con otros pasajeros.',
      },
      {
        concept: 'Peso volumétrico',
        text: 'El avión se llena de espacio antes que de peso. Una caja enorme de plumas paga como si pesara más porque ocupa el lugar de algo pesado.',
      },
      {
        concept: 'Puerto libre',
        text: 'Es una sala de espera donde las cajas pueden quedarse, cambiar de envoltorio y volver a irse sin pagar entrada al país. Solo pagan si salen a la calle uruguaya.',
      },
    ],
    keyPoints: [
      'Cada modo tiene su documento: B/L (marítimo), AWB (aéreo), CRT + MIC/DTA (carretera).',
      'FCL es contenedor completo; LCL es carga consolidada que se cobra por W/M, con 1 t = 1 m³.',
      'Un 20′ es 1 TEU y un 40′ (seco o High Cube) son 2 TEU.',
      'En aéreo se paga el peso facturable: el mayor entre peso real y volumétrico (cm³ ÷ 6000).',
      'El ATIT regula el transporte terrestre y el tránsito aduanero con Argentina, Brasil y otros países de la región.',
      'TCP opera la terminal de contenedores de Montevideo; Montecon los muelles multipropósito; Nueva Palmira es el kilómetro 0 de la Hidrovía.',
      'Demurrage es el contenedor lleno dentro de la terminal; detention, fuera de ella sin devolver.',
    ],
    probableQuestions: [
      { question: '¿Qué diferencia hay entre FCL y LCL?', answer: 'FCL es contratar el contenedor completo; LCL es carga suelta consolidada con otros embarcadores, que se cobra por W/M.' },
      { question: '¿Qué es un TEU?', answer: 'La unidad equivalente a un contenedor de 20 pies. Un 40′ vale 2 TEU.' },
      { question: '¿Cómo se calcula el peso facturable aéreo?', answer: 'Es el mayor entre el peso bruto real y el volumétrico, que se obtiene multiplicando las medidas en cm y dividiendo por 6000.' },
      { question: '¿Qué documentos acompañan un camión al MERCOSUR?', answer: 'El CRT, que es el contrato de transporte, y el MIC/DTA, que es manifiesto y declaración de tránsito aduanero.' },
      { question: '¿Qué es TCP y qué es Montecon?', answer: 'TCP es la terminal especializada de contenedores del puerto de Montevideo (Katoen Natie 80 %, ANP 20 %); Montecon opera los muelles públicos multipropósito.' },
      { question: '¿Qué diferencia hay entre demurrage y detention?', answer: 'Demurrage: el contenedor lleno sigue en la terminal después de los días libres. Detention: el importador lo tiene fuera de la terminal más tiempo del permitido.' },
      { question: '¿Por qué se dice que Uruguay es un hub logístico?', answer: 'Por sus regímenes especiales (puerto y aeropuerto libre, zonas francas, tránsito), su ubicación en el Río de la Plata y la Hidrovía, su estabilidad y sus centros de distribución regional.' },
      { question: '¿Qué es el BAF?', answer: 'El recargo del flete que compensa la variación del precio del combustible.' },
    ],
    sources: [
      { title: 'ANP: Folleto Puerto de Montevideo 2025', url: 'https://www.anp.com.uy/sites/default/files/archivos/parrafo-colapsable/2025-11/FOLLETO%20puerto%20Montevideo%202025.pdf' },
      { title: 'ANP: Nueva Palmira', url: 'https://www.anp.com.uy/en/node/51' },
      { title: 'Mundo Marítimo: expansión de TCP', url: 'https://www.mundomaritimo.cl/noticias/editor/49741' },
      { title: 'ShipUniverse: Neltume y TCP (sep. 2026)', url: 'https://www.shipuniverse.com/?p=18309' },
      { title: 'Mundo Marítimo: carga en Carrasco', url: 'https://mundomaritimo.cl/noticias/aeropuerto-de-carrasco-uruguay-sector-farmaceutico-lidera-el-desarrollo-en-la-terminal-de-cargas' },
      { title: 'ALADI: estudio ATIT y MIC/DTA', url: 'https://www2.aladi.org/nsfaladi/estudios.nsf/F9359CE629BD85EB0325877D0049B2D6/$FILE/241.pdf' },
      { title: 'Maersk: chargeable weight', url: 'https://ewscpcd.maersk.com/logistics-explained/transportation-and-freight/2025/03/10/air-cargo-chargeable-weight' },
      { title: 'Maersk: demurrage y detention', url: 'https://www.maersk.com/es-mx/logistics-explained/transportation-and-freight/2023/08/28/what-is-demurrage-detention-in-shipping-for-buyers' },
      { title: 'Tiba: recargos FCL/LCL', url: 'https://www.tibagroup.com/es/logistica/transporte-maritimo/fcl-lcl-recargos-aplicables' },
      { title: 'Fulfillbot: dimensiones de contenedores', url: 'https://fulfillbot.com/blog/shipping-container-dimensions/' },
    ],
  },
]
