# 02 — Importación en Uruguay: secuencia, DUA, cálculo de tributos y NCM/AEC

> Material de estudio para una app de comercio exterior orientada a quien busca trabajo en una oficina de comex o en una despachante de aduana en Uruguay.
> Investigado al **10/10/2026**. Las cifras llevan su año y su norma. Lo que no se pudo confirmar en una fuente oficial reciente va marcado con **[VERIFICAR]**.
> Convenciones: DNA = Dirección Nacional de Aduanas; CAROU = Código Aduanero de la República Oriental del Uruguay (Ley 19.276); VA = valor en aduana; TGA = Tasa Global Arancelaria.

---

## 0. Resumen ejecutivo: tasas vigentes en una importación definitiva (2026)

| Concepto | Alícuota / monto | Base | Norma | Naturaleza |
|---|---|---|---|---|
| **TGA** (arancel; equivale al AEC o a la tasa nacional) | 0% a 35% según NCM. Intra-MERCOSUR con origen: 0% | Valor en aduana (CIF) | Decretos de arancel; Dec. 430/021 (NCM VII Enmienda); Dec. 369/022 (–10%) | Costo |
| **Tasa Consular** | **5%** general; **3%** origen ACE 18 (MERCOSUR); 3% Chile; 0% México (salvo autos) | Valor en aduana | Ley 19.535, art. 265 (vigente desde 01/01/2018) | Costo |
| **Tasa de servicios aduaneros** (“tasa por servicios preferenciales”, conocida como TSA) | 0,2% con **tope US$ 50** por DUA | CIF | Ley 16.320 art. 170; Dec. 667/992 (mod. Dec. 540/994) | Costo |
| **Servicios extraordinarios** (TSE) | Escala fija en US$ por tramo de valor (ej.: US$ 108 entre 8.001 y 30.000) | Valor de la operación | Dec. 305/986 (montos actualizados) **[VERIFICAR montos 2026]** | Costo |
| **Tasa de inspección no intrusiva** (escáner) | **85 UI por DUA** (≈ $ 565 con UI de oct-2026 = $ 6,65) | Por declaración | Ley 20.075 art. 161; Dec. 235/024; RG DNA 57/2024 | Costo |
| **Precio LATU** (solo alimentos con control) | 0,5% | CIF | Dec. 194/022 (antes 1,5%) | Costo |
| **IVA importación** | 22% básica / 10% mínima | **VA + arancel** (×1,5 si lo importa un no contribuyente o se importa a nombre propio por cuenta ajena) | TO DGI 2023, Título 10, arts. 13 lit. B y 34 | Crédito fiscal para contribuyentes |
| **Anticipo de IVA** | 10% (bienes a tasa básica) / 3% (tasa mínima) | VA + arancel | Dec. 220/998 art. 115 | Se descuenta del IVA mensual (art. 117) |
| **Anticipo de IRAE** (solo bienes de consumo del Anexo) | **4%** desde 01/01/2026 (antes: 15% Anexo 1 / 4% Anexo 2) | VA + arancel | Dec. 788/008 art. 2, texto dado por **Dec. 335/025** | Se descuenta de los anticipos de IRAE |
| **IMESI** (solo bienes gravados) | Según numeral: p. ej. cosméticos 10% fijado (tope legal 20%), cerveza 27% (tope), cigarrillos 70% | Contribuyentes: anticipo sobre VA + arancel. No contribuyentes: (VA + arancel) × 1,5 | TO DGI Título 11; Dec. 96/990; Dec. 335/996 art. 4 | Anticipo o costo |
| **Honorarios del despachante** | De mercado, orientativo ≈ 1% del CIF con mínimo; + IVA 22% | CIF | No es un tributo **[VERIFICAR tarifa]** | Costo |

**Fuentes de la tabla:**
- Ley 19.535 art. 265 (Tasa Consular): https://www.impo.com.uy/bases/leyes/19535-2017/265
- Decreto 667/992 (0,2% CIF, tope US$ 50): https://www.aduanas.gub.uy/innovaportal/v/7591/6/innova.front/decreto-n%C2%B0667_992.html y https://www.aduanas.gub.uy/innovaportal/v/2773/8/innova.front/tasa-por-servicios-preferenciales.html
- Decreto 305/986 (servicios extraordinarios): https://www.impo.com.uy/bases/decretos/305-1986
- Montos 2018 de TSA y servicios extraordinarios según la Embajada argentina: https://exportaciones.cancilleria.gob.ar/Estadistica/imagen_producto/7196
- RG DNA 57/2024 (85 UI): https://aduanas.gub.uy/innovaportal/file/26806/1/rg-57-2024-disposiciones-para-el-cobro-de-la-tasa.pdf
- Valor UI octubre 2026: https://datosuruguay.com/actualizaciones/ui-2026-10
- Decreto 194/022 (LATU 0,5%): https://www.impo.com.uy/bases/decretos/194-2022
- IVA, TO 2023 Título 10: https://www.impo.com.uy/bases/todgi-2023/10-2024 y https://impo.com.uy/bases/todgi2023/101-2024/13_T10
- Anticipo IVA, Dec. 220/998: https://www.impo.com.uy/bases/decretos/220-1998/115, https://impo.com.uy/bases/decretos/220-1998/116, https://impo.com.uy/bases/decretos/220-1998/117
- Anticipo IRAE: https://impo.com.uy/bases/decretos/788-2008/2, https://impo.com.uy/bases/decretos/335-2025, https://impo.com.uy/bases/decretos-originales/110-2012/1
- IMESI: https://impo.com.uy/bases/todgi2023/101-2024/1_T11, https://www.impo.com.uy/bases/decretos/96-1990, https://www.impo.com.uy/bases/decretos/335-1996

---

## 1. Secuencia de una importación en Uruguay, paso a paso

### 1.1 Línea de tiempo

```
[1] Negociación y pro-forma ─► [2] Permisos previos (VUCE) ─► [3] Pago al proveedor / apertura de carta de crédito
     ─► [4] Embarque (B/L, AWB o CRT/MIC-DTA) + seguro ─► [5] Arribo: manifiesto/DAL en LUCIA, descarga, depósito temporal
     ─► [6] Despachante arma la carpeta y transmite el DUA + DVA ─► [7] Numeración (NNN-AAAA-999999) y liquidación
     ─► [8] Pago de tributos (BROU/red de cobranza; DGI) ─► [9] Solicitud de canal: VERDE / NARANJA / ROJO
     ─► [10] Verificación (Vista) ─► [11] Cumplido = levante/libramiento ─► [12] Retiro de la terminal o depósito (vía 4 del DUA)
     ─► [13] Regularización y archivo (RADE/RASO); controles a posteriori
```

### 1.2 Cada paso en detalle

1. **Negociación y factura pro-forma.** Se acuerdan precio, Incoterm, plazo y forma de pago. La pro-forma sirve para pedir cotizaciones de flete y seguro, iniciar permisos previos y, si hace falta, abrir una carta de crédito. En el DUA puede asociarse con el código **PROF**.
2. **Clasificación arancelaria y permisos previos.** Antes de comprar, el despachante clasifica la mercadería en la NCM (10 dígitos en Uruguay: 8 de la NCM más 2 de apertura nacional). Con esa clasificación se sabe qué arancel paga y qué intervenciones requiere. Esas intervenciones (las **MNNT**, medidas no arancelarias por NCM) se tramitan en la **VUCE**: registros y autorizaciones del MSP (medicamentos, cosméticos, alimentos), del MGAP (sanidad animal y vegetal), del LATU (control de alimentos, conformidad), de la URSEA (seguridad eléctrica), del MIEM, del MDN y otros. LUCIA fija en qué momento debe presentarse cada documento: **1** = al numerar, **2** = al pedir canal, **3** = a posteriori.
3. **Pago internacional.** Puede ser transferencia anticipada, cobranza documentaria, carta de crédito o cuenta abierta. Intervienen el banco del importador y el corresponsal en el exterior.
4. **Embarque.** El vendedor o el transitario reservan bodega. Se emiten el documento de transporte (conocimiento marítimo **B/L**, guía aérea **AWB**, o **CRT** con **MIC/DTA** por carretera), la factura comercial definitiva, el packing list y la póliza de seguro si el Incoterm lo exige.
5. **Arribo.** El **agente de transporte** (agencia marítima o aérea) presenta ante la DNA la **declaración de llegada / manifiesto** (DAL), que queda registrada en LUCIA. La carga se descarga en la zona primaria (terminal o depósito portuario) y queda en **depósito temporal de importación**, donde puede permanecer hasta 12 meses, prorrogables (CAROU arts. 57–62). Si la cantidad difiere del manifiesto, hay una tolerancia del **5%** (art. 54) y las diferencias deben justificarse en **8 días hábiles** (art. 53).
6. **Transmisión del DUA.** El despachante (declarante) obtiene la referencia del arribo (número y línea del manifiesto o DAL, o del documento de ingreso a un depósito o zona franca). Con ella envía por la red VAN el **mensaje DUA** junto con la **DVA** (declaración del valor). En el mismo mensaje propone su **autoliquidación** e indica si acepta que LUCIA la corrija (S, N o P = prueba).
7. **Numeración.** LUCIA valida el mensaje y asigna el número con formato **NNN-AAAA-999999** (aduana, año, correlativo). Si no se solicita canal en **30 días corridos**, el DUA vence.
8. **Pago de tributos.** Se paga todo junto y en un solo acto: no se aceptan pagos parciales. Los agentes de cobranza (BROU o medios electrónicos como URUTEC o SISTARBANC) tienen plazo hasta el **día hábil siguiente** (18:00 en el BROU). Los tributos internos (IVA, IMESI, IRAE) pueden pagarse en la DGI dentro de los **7 días hábiles** desde la aceptación. Si no se paga, el DUA se anula y se cobran igual las tasas de servicio (TSA, TSE, TCI).
9. **Canal de revisión.** Lo asigna el sistema de **selectividad** (CAROU art. 74) por análisis de riesgo, complementado con una muestra al azar:
   - **VERDE:** cumplido automático, sin revisión previa al levante. LUCIA envía la observación “DISMERC” (mercadería disponible).
   - **NARANJA:** análisis documental a cargo de un **Vista** (verificador). Puede derivar en revisión física.
   - **ROJO:** análisis documental **y** verificación física. El declarante entrega un **sobre auxiliar** con la documentación y tiene **5 días hábiles** para presentarse a la verificación.
   - En exportación se usan solo **VERDE y ROJO**. Después del levante hay canales internos de control a posteriori: **marrón** (estudio de Fiscalización), **blanco** (sin estudio, pasa a archivo) y **celeste** (laboratorio).
10. **Verificación.** El Vista controla posición NCM, valor, origen, cantidad y estado, y puede extraer muestras para análisis químico. Si encuentra discrepancias, emite una **hoja de observaciones** (5 días hábiles para levantarla) o una **liquidación complementaria**, con posible infracción.
11. **Cumplido / levante.** El CAROU (art. 2) lo llama **libramiento**: la autorización para disponer de la mercadería. Sin el cumplido registrado en LUCIA la mercadería no sale del recinto.
12. **Retiro.** Con la **vía 4** del DUA (o la constancia electrónica) se retira la mercadería de la terminal o depósito. Antes hay que pagar los servicios de la terminal y los proventos de la ANP, y el agente marítimo debe liberar el contenedor (“libre deuda” o entrega de B/L). Se admiten retiros parciales, que quedan anotados en el DUA.
13. **Regularización y archivo.** Las imágenes de los documentos (DAE firmados digitalmente) se guardan en un **RADE**, servicio de archivo digital homologado por la DNA que los conserva 10 años. Los papeles van a un **RASO**, archivo físico, con plazo de 5 días hábiles. La DNA puede fiscalizar a posteriori.

### 1.3 Agentes que intervienen

| Agente | Rol en la importación | Base normativa |
|---|---|---|
| **Importador** | Dueño o consignatario. Debe estar al día con la DNA, DGI, BPS y BSE, e inscripto en el registro de importadores. Responde por el destino de la mercadería. | CAROU arts. 32–43 (operadores) |
| **Despachante de aduana** | Auxiliar privado del comercio y de la función pública aduanera, persona física o jurídica. Actúa por cuenta de terceros ante la DNA: clasifica, valora, confecciona y transmite el DUA, liquida y paga tributos, y asiste a la verificación. Es el **declarante** en la gran mayoría de los casos. | CAROU art. 14 (definición y preceptividad), art. 15 (excepciones), art. 23 (registro), art. 27 (responsabilidad solidaria), art. 28 (sanciones, desde apercibimiento hasta inhabilitación); Dec. 96/015 |
| **DNA** | Autoridad aduanera: controla, clasifica, valora, recauda y asigna canales. Tiene preeminencia sobre otros organismos en la zona primaria. | CAROU arts. 6–12 |
| **Agente de transporte** (agencia marítima o aérea) | Gestiona el arribo, la permanencia y la salida del medio de transporte, la carga y descarga, y los transbordos. Presenta el manifiesto o declaración de llegada. | CAROU art. 32 |
| **Transitario / freight forwarder / agente de carga** | Organiza el transporte puerta a puerta, consolida carga (LCL), emite el HBL. Es el “arquitecto logístico”. | CAROU (agentes de carga) |
| **ANP y terminales** | La ANP administra el puerto de Montevideo y cobra proventos. **TCP – Terminal Cuenca del Plata** (80% Katoen Natie, 20% ANP) opera la terminal especializada de contenedores y, desde el acuerdo de 2021, tiene prioridad de atraque para portacontenedores. **Montecon** opera los muelles públicos multipropósito. | **[VERIFICAR situación operativa 2026]** |
| **Depositario** | Opera un depósito aduanero o portuario (zona primaria, extraportuario, zona franca). Informa ingresos y egresos, y su stock se asocia al DUA. | CAROU (depósito temporal y aduanero) |
| **Banco** | Pagos internacionales (transferencia, carta de crédito, cobranza) y cobro de tributos como agente de cobranza (BROU, redes electrónicas). | — |
| **Aseguradora** | Póliza de transporte. Si no hay seguro declarado, la DNA usa un **seguro ficto del 1% del FOB**. | Procedimiento DNA |
| **Organismos de control (vía VUCE)** | MSP, MGAP (DGSG, DGSA, DINARA), LATU, URSEA, MIEM, MDN, Ambiente, INAC, entre otros. Emiten certificados y permisos que LUCIA verifica electrónicamente. Cada certificado VUCE usado en una operación aduanera tiene un costo de referencia de **36 UI** **[VERIFICAR si se cobra como tasa]**. | VUCE |

### 1.4 CAROU (Ley 19.276): lo mínimo para una entrevista

- **Art. 2, definiciones:**
  - **Declarante:** la persona que presenta la declaración de mercadería, o en cuyo nombre se presenta.
  - **Despacho aduanero:** el conjunto de trámites para aplicar un régimen aduanero.
  - **Libramiento:** la autorización de la DNA para disponer de la mercadería.
  - **Mercadería:** todo bien susceptible de un destino aduanero.
  - **Régimen aduanero:** el tratamiento que se aplica a la mercadería objeto de tráfico internacional.
- **Art. 14:** define al despachante y establece que la tramitación de los regímenes y declaraciones le corresponde a él, salvo las tareas propias de los agentes de transporte.
- **Art. 15:** casos en que la intervención del despachante **no es preceptiva**:
  - envíos postales no comerciales;
  - equipaje;
  - envíos de entrega expresa de hasta unos US$ 200;
  - envíos de organismos estatales;
  - franquicias de residentes que retornan;
  - muestras exentas de hasta US$ 500 (importación) o US$ 1.000 (exportación) (Ley 19.924);
  - régimen especial de comercio fronterizo (Ley 20.419, 2025).
- **Art. 27:** el despachante responde **solidariamente** con su comitente por los tributos aduaneros, sus reajustes y los proventos portuarios. Las consecuencias de cambiar el destino de la mercadería son solo del comitente.
- **Art. 70:** corrección de una declaración ya registrada, en ciertos casos con un pago de 400 UI.
- **Art. 74:** selectividad, que es la base legal de los canales.

**Fuentes de la sección 1:**
- Procedimiento DUA Digital – Importación (DNA): https://www.aduanas.gub.uy/innovaportal/file/10163/1/procedimiento_dua_digital_-_importacion.pdf
- Anexo DUA digital (formas de despacho, documentos, canales): https://www.aduanas.gub.uy/innovaportal/file/9902/1/dua_digital__importacion_anexo.pdf
- Operaciones de entrada, procedimiento: https://www.aduanas.gub.uy/innovaportal/file/7995/1/operaciones_de_entrada_procedimientos.pdf
- Procedimiento de exportación (canales verde y rojo; marrón, blanco y celeste): https://www.aduanas.gub.uy/innovaportal/file/12331/1/procedimiento_expo_od_96-2012_.pdf
- CAROU, Ley 19.276: https://www.impo.com.uy/bases/codigo-aduanero/19276-2014 (artículos /2, /14, /15, /23, /27, /32, /74)
- Manual de inducción a LUCIA (2017): https://www.aduanas.gub.uy/innovaportal/file/18337/1/manual-induccion-lucia-octubre-2017-_-v1.pdf
- VUCE, resultados 2023: https://vuce.gub.uy/wp-content/uploads/2024/03/RESULTADOS-VUCE-Dic-2023-1.pdf
- TCP y Montecon: https://www.mundomaritimo.cl/noticias/terminal-cuenca-del-plata-comienza-a-centralizar-operaciones-de-contenedores-en-el-puerto-de-montevideo

### 1.5 Régimen de compras por internet (novedad 2026, útil para la entrevista)

- **Ley 20.446** (Presupuesto 2025–2029), arts. 627–635, reglamentada por el **Decreto 50/2026** (12/03/2026).
- **Prestación única:** **60%** sobre el valor de factura o el valor declarado, con mínimo de **US$ 20** por envío. Reemplaza todos los tributos. No se aplica a bienes gravados por IMESI.
- **Nueva franquicia (desde el 01/05/2026):** **US$ 800 por persona y por año**, en hasta **3 envíos**. Se paga IVA, con mínimo de US$ 20. Puede haber exoneración de IVA para vendedores con residencia fiscal en EE. UU. registrados ante la DNA (RG 9/2026 y RG 12/2026; plazo extendido al 01/07/2026).
- Un envío de más de US$ 800 o de más de 20 kg requiere despacho formal con despachante.

**Fuentes:**
- https://www.fedex.com/content/dam/fedex/lac-latin-america/downloads/regulatory/UY_ES_2026_5_pdf_Regulatory-Alert-updated-28-April.pdf
- https://www.aduanas.gub.uy/innovaportal/file/28462/1/rg-12-2026.pdf
- https://kpmg.com/us/en/taxnewsflash/news/2025/10/uruguay-proposed-changes-international-purchase-regime-budget-bill.html

---

## 2. El DUA (Documento Único Aduanero)

### 2.1 Qué es

El **DUA** es la declaración aduanera única que se usa para todos los regímenes: importación, exportación, tránsito y admisión temporaria. Se creó con el Decreto 333/992 y hoy es **100% digital**: se transmite como mensaje XML por red VAN al sistema **LUCIA**. Incluye la **liquidación de todos los tributos**, también los internos de la DGI, que se pagan en un solo acto (Dec. 220/998 art. 133). Va acompañado de la **DVA** (declaración del valor en aduana, formulario DV-1). Desde la reforma digital los documentos se presentan como **DAE**, imágenes firmadas digitalmente y alojadas en un RADE. Los certificados emitidos por la VUCE viajan electrónicamente y no se adjunta imagen.

**Vías impresas** (cuando se imprimen):

| Vía | Destino y uso |
|---|---|
| 1 | Aduana. Se conserva mientras no prescriben los tributos. |
| 2 | Importador. Es su justificante legal de la importación. |
| 3 | Declarante (despachante). |
| 4 | Aduana. Controla la salida de la mercadería del recinto o depósito. |
| 5 | Transporte, para mercadería en tránsito pendiente de verificación. |
| 0 | Otros usos justificados. |

### 2.2 Regímenes y códigos

- **Casilla A1, “Régimen”:** código numérico de 2 dígitos según la tabla de regímenes de LUCIA. Ejemplos confirmados en el instructivo de la DNA:

| Código | Régimen |
|---|---|
| **10** | Importación definitiva (despacho directo, desde depósito o desde zona franca o depósito franco) |
| **20** | Admisión temporaria para reexpedición en el mismo estado |
| **21** | Admisión temporaria para perfeccionamiento activo (transformación, elaboración, reparación) |
| **30** | Reimportación en el mismo estado |
| **31** | Reimportación con transformación o reparación en el exterior |

- **Sobre las siglas IMPO, EXPO, TRAN y ADMT.** En el lenguaje diario y en algunos procedimientos (por ejemplo “EXPO PL”) se habla de *IMPO* (importación), *EXPO* (exportación), *TRAN* (tránsito) y *ADMT / AT* (admisión temporaria) como **familias de régimen**. En el DUA, sin embargo, el régimen se declara con el **código numérico** de la casilla A1 y el **subrégimen u operación solicitada** en la casilla 53. No se encontró una tabla oficial que use esas siglas de 4 letras como código de LUCIA. **[VERIFICAR la tabla completa de regímenes y subregímenes, incluidos exportación y tránsito, en LUCIA > Datos básicos > Tablas generales]**.
- **Formas de despacho de importación (casilla D):**

| Código | Forma de despacho |
|---|---|
| 0 | Normal |
| 1 | DUA anticipado (en un instructivo anterior figuraba como “despacho urgente”) |
| 2 | Abierto en frontera terrestre (AFT) |
| 4 | Normal con asociación de cargas terrestres |

- **Modalidad (TipoTransito):** N = normal; R = repetitivo (varias expediciones); K = consolidado o correlacionado.
- **Tipo de acción del mensaje:** I = inicial; C = corrección; V = cambio de variables; D = cambio de documentación.
- **Códigos de acuerdo (casilla 61, obligatoria):**
  - **310** = ACE 18 (MERCOSUR), que exige prueba de origen ORIM/CODM;
  - **302 / 3024 / 3083** = ACE 2 automotor, autopartes y zonas francas con Brasil;
  - **111 / 112** = México;
  - **1117 / 1118 / 1119** = Acuerdo MERCOSUR–UE (sin cupo; cupo MERCOSUR; cupo bilateral Uruguay), aplicado provisionalmente desde el **01/05/2026**.
- **Código de exoneración (casilla 63):** códigos genéricos según la RG DNA 72/2023. Por ejemplo, **10042 y 10043** corresponden a equipos de transporte de carga (Ley 20.212 art. 657, RG 24/2025).

### 2.3 Documentos que se asocian al DUA

| Código LUCIA | Documento |
|---|---|
| FACC / FACI / FACN | Factura comercial. FACC: a nivel cabezal (también se usa para flete, gastos y certificado de seguro). FACI: por ítem. FACN: no parcializable. |
| PROF | Pro-forma |
| REMN | Remito |
| NCRD / NDEB | Nota de crédito / nota de débito |
| ORII / ORIN; ORIM / CODM | Certificado de origen; en MERCOSUR también la **declaración de origen** (formato `DORI-<nºfactura>-<AAMMDD>`, RG 06/2025) y el certificado digital **COD** |
| Conocimiento / AWB / CRT, MIC-DTA | Documento de transporte. Se asocia por **manifiesto + conocimiento + línea** (segmento ASOMANIF). |
| Packing list | Lista de empaque |
| Póliza o certificado de seguro | Si no se presenta, se aplica el seguro ficto del 1% del FOB. |
| Certificados VUCE | MSP, MGAP, LATU, URSEA, etc. (segmento IMPDOC01, con número y vencimiento) |
| DVA (DV-1) | Declaración del valor |

### 2.4 Ejemplar ilustrado: casillas del DUA de importación

Fuentes: el *Instructivo de llenado del DUA para Importación* (versión XML, DNA) y el *Capítulo 7 – Instructivo* (numeración clásica de casillas). Los **ejemplos son ficticios**.

#### A. Cabezal (datos generales)

| Casilla | Nombre | Qué va | Ejemplo |
|---|---|---|---|
| A1 | Régimen | Código de 2 dígitos | `10` (importación definitiva) |
| A2 | Aduana | Aduana donde se presenta, 3 dígitos | `001` (Montevideo) **[VERIFICAR código]** |
| B | Carpeta | Nº interno de carpeta del despachante (6 caracteres) | `004512` |
| C | Nº de DUA / año | Lo asigna LUCIA | `001-2026-123456` |
| D | Forma de despacho | 0, 1, 2 o 4 | `0` |
| 1A / 1B | Tipo y nº de documento del importador | 4 = RUT (2 = CI, 6 = pasaporte); 12 dígitos con ceros a la izquierda | `4` / `210000000019` |
| 2 | Nombre del importador | Razón social según el RUT (40 caracteres) | `ESPÍRITU DEMO S.A.` |
| 3 | Domicilio del importador | Domicilio fiscal | `Montevideo, Rincón 123` |
| 4 | Documento del declarante | RUT o CI del despachante | `4 / 2100…` |
| 5 | Nombre del declarante | Despachante | `Desp. Juan Pérez` |
| 6 | Código del declarante | Código que asigna la DNA | `1234` |
| 7 | (Uso futuro) | No se llena | — |
| 8A / 8B | Usuario de zona franca | Solo si la mercadería viene de una ZF | — |
| 9 | Proveedor | Nombre del proveedor del exterior | `NINGBO GLASS CO.` |
| 10 | Dirección del proveedor | Calle, ciudad, país | `Ningbo, China` |
| 11 | Entidad financiera | Código del banco interviniente | `001` (BROU) **[VERIFICAR]** |
| 12 | Cantidad de facturas | Nº de facturas | `1` |
| 13 | Monto total de facturas | En la divisa de la factura, sin decimales | `20000` |
| 14 | Moneda | Código de la divisa (única por DUA) | `USD` / `2222` **[VERIFICAR tabla]** |
| 17 | Naturaleza de la transacción | Código de 2 caracteres (compraventa, sin pago, etc.) | `11` **[VERIFICAR]** |
| 19 | Modo de transporte en frontera | Marítimo, aéreo, terrestre… (A = medios propios) | `1` (marítimo) **[VERIFICAR]** |
| 33 | Aduana de ingreso | 3 dígitos | `001` |
| 34 | Lugar de localización de la mercadería | Código del depósito o terminal (4 caracteres) | `TCP1` **[ficticio]** |
| 36 | Depósito de destino | Si corresponde | — |
| 37 | Total de bultos | Suma de los bultos de todos los ítems | `850` |
| 38 | Peso bruto total (kg) | Hasta 3 decimales | `12500,000` |
| 39 / 48 | Monto y nº de garantía | Si corresponde | — |
| 40 | Cantidad de ítems | Máximo 9999 | `2` |
| 46 | Total CIF (USD) | Suma de la casilla 84 | `22700` |
| 47 | Total a pagar (en pesos) | Suma de todos los tributos | `$ 601.259` |
| 49 / 50 | Código y monto de cada tributo | Lista de tributos liquidados (Tabla 10) | `TGA 163.440`… |
| 87 | Total del valor en aduana | Suma de la casilla 85 | — |
| 93 | Observaciones | Texto libre (100 caracteres) | — |
| 94 | Firma y fecha | Firma electrónica del declarante | — |
| — | Acepta diferencia | S / N / P | `S` |
| — | Forma de pago DNA / DGI | 1 = BROU, 4 = URUTEC, 5 = SISTARBANC; IVA cód. 1 o 2 | `4` / `1` |

#### B. Ítem (una línea por cada NCM de 10 dígitos con iguales condiciones de origen, acuerdo y cupo)

| Casilla | Nombre | Qué va | Ejemplo |
|---|---|---|---|
| 51 | Nº de ítem | Correlativo | `1` |
| 52C | Documento de carga | Manifiesto o stock asociado | — |
| 53 | Operación solicitada | Subrégimen | **[VERIFICAR código]** |
| 57A / 57B | Tipo y cantidad de bultos | Igual que el documento de carga | `CT` / `850` |
| 58 | Peso neto (kg) | Sin envases | `11800,000` |
| 59 | Peso bruto (kg) | Sin contenedor | `12500,000` |
| 60A | NCM (10 dígitos) | 8 dígitos NCM + 2 de apertura nacional | `7013.37.00.00` **[ejemplo]** |
| 60B | Apertura nacional (DGI) | Para tributos internos | `00` |
| 61 | Código de acuerdo | 310 = ACE 18; régimen general **[VERIFICAR código]** | `310` |
| 63 | Código de exoneración | Si hay una norma de exoneración | — |
| 65A / 65B | Nomenclatura del acuerdo | Solo para acuerdos con NALADISA (no MERCOSUR) | — |
| 71 | Exonera recargo | S si la DNA lo autorizó | — |
| 72 | País de origen | Según el certificado de origen o el país de fabricación | `156` (China) **[VERIFICAR tabla]** |
| 73 | País de procedencia | Desde donde se despachó y se emitió el título de transporte | `156` |
| 74 | País de adquisición | Donde se formalizó la compra | `156` |
| 75 | Estado de la mercadería | Nuevo, usado… | `N` **[VERIFICAR]** |
| 77A / 77B | Unidad de volumen físico (UVF) y cantidad | Según el arancel | `KG` / `11800` |
| 78A / 78B | Unidad comercial y cantidad | Según la factura | `UN` / `24000` |
| 79A / 79B | Unidad y cantidad de admisión temporaria LATU | Solo en AT | — |
| 80–82 | Forma de pago, plazo y % de interés | Del precio facturado | — |
| 84 | Valor CIF (USD) | Del ítem | `22700` |
| 85 | Valor en aduana | Método 1 OMC: precio + ajustes del art. 8 | `22700` |
| 86 / 87 | Ajuste (%) y valor ajustado | Si corresponde | — |
| 89 | VA ajustado + TGA | Base de IVA y anticipos | `26786` |
| 90 | Marcas y números | `S/M` y `S/N` si no tiene | `NB-01/850` |
| 91 | Tributo, base y alícuota | Por cada tributo del ítem | `TGA C84 18%` |
| 92A–E | Descripción | (a) genérica y pública, en español; (c), (d) y (e) técnicas y reservadas; los químicos con nombre IUPAC y nº CAS | `Vasos de vidrio templado 300 ml` |

#### C. Segmentos asociados

- **IMPDOC01:** documentos y certificados (código, número, vencimiento, imagen).
- **IMPCNT01:** contenedores (formato `AAAU-123456-7`, precintos, pies).
- **VALFAC01:** facturas (número, fecha, **Incoterm**, lugar de entrega, moneda, importe).
- **ASOMANIF:** manifiesto (tipo, fecha de arribo, nº de manifiesto, conocimiento, línea, bultos).
- **ASOSTOCK:** stock en depósito.
- **ASOMNNT:** medidas no arancelarias asociadas a la NCM.

> **Nota para el ejercicio “completar el DUA”.** En el XML de LUCIA, el flete y el seguro **no tienen casillas propias**: entran en la fórmula del valor en aduana (casilla 85). El **Incoterm** se declara en la factura asociada (VALFAC01). Las monedas extranjeras que no figuran en la tabla se convierten a USD con el arbitraje del BCU del **día hábil anterior** al registro.

**Fuentes de la sección 2:**
- Instructivo de llenado del DUA de importación: https://www.aduanas.gub.uy/innovaportal/file/14492/1/instructivo--importacion.pdf
- Estructura XML del DUA de importación: https://www.aduanas.gub.uy/innovaportal/file/14492/1/dua-de-importacion.pdf
- Capítulo 7, instructivo de operaciones de entrada (casillas numeradas, vías, regímenes 10/20/21/30/31): https://www.aduanas.gub.uy/innovaportal/file/7996/1/operaciones_de_entrada_instructivo.pdf
- Anexo 10 RG 73 (tablas de códigos): https://www.aduanas.gub.uy/innovaportal/file/14467/1/anexo10_r_g_73.pdf
- RG 06/2025 (prueba de origen, códigos de acuerdo): https://aduanas.gub.uy/innovaportal/file/27365/1/rg-06-2025.pdf
- RG 72/2023 (códigos de exoneración): https://www.aduanas.gub.uy/innovaportal/file/25772/1/rg-72.2023.pdf
- RG 24/2025: https://vuce.gub.uy/wp-content/uploads/2025/09/rg-24-2025.pdf
- Comunicado 33/2026 (MERCOSUR–UE, códigos 1117, 1118 y 1119): https://www.aduanas.gub.uy/innovaportal/file/28750/1/comunicado-33_2026-anexo.pdf
- Página DNA del Acuerdo MERCOSUR–UE: https://www.aduanas.gub.uy/innovaportal/v/28577/1/innova.front/acuerdo%20mercosur%20ue.html
- Dec. 220/998 art. 133 (un solo acto de pago): https://www.impo.com.uy/bases/decretos/220-1998/133

---

## 3. Cálculo de una importación

### 3.1 Valor en aduana

- **Marco legal.** Uruguay aplica el **Acuerdo de Valoración de la OMC** (Acuerdo relativo a la aplicación del art. VII del GATT 1994).
- **Método 1, valor de transacción.** Es el precio realmente pagado o por pagar, más los ajustes del art. 8:
  - comisiones y corretajes (salvo las de compra);
  - envases y embalajes;
  - *assists* (herramientas, moldes, materiales suministrados por el comprador);
  - cánones y regalías vinculados;
  - el producto de la reventa que vuelve al vendedor;
  - **el transporte, la carga y manipulación y el seguro hasta el lugar de importación**.

  Se restan los conceptos que no integran el valor si están separados en la factura: transporte interno posterior a la importación, intereses de financiación y derechos internos.
- **Los otros métodos van en orden:**
  1. valor de transacción;
  2. mercancías idénticas;
  3. mercancías similares;
  4. valor deducido;
  5. valor reconstruido;
  6. método de “último recurso”.

  El importador puede pedir que se invierta el orden entre el 4 y el 5.
- **Uruguay valora en base CIF** (puerto o frontera de entrada):

```
Valor en aduana (CIF) = FOB + Flete internacional + Seguro internacional (+ ajustes art. 8)
```

- **Cuando no hay seguro declarado:** se usa un **seguro ficto del 1% del valor FOB** (procedimiento de operaciones de entrada de la DNA).
- **Conversión de Incoterms:**
  - Si compré **EXW**, sumo el traslado y la carga en origen hasta el embarque.
  - Si compré **CFR o CPT**, solo agrego el seguro.
  - Si compré **CIF o CIP**, uso ese valor y reviso los ajustes.
  - Si compré **DAP, DPU o DDP**, resto lo que corresponde a gastos posteriores a la llegada (descarga, transporte interno y, en DDP, los tributos).

**Fuentes:**
- https://www.aduanas.gub.uy/innovaportal/file/7995/1/operaciones_de_entrada_procedimientos.pdf
- Instructivo del DUA, casilla 85: https://www.aduanas.gub.uy/innovaportal/file/14492/1/instructivo--importacion.pdf
- Acuerdo de Valoración OMC: https://www.wto.org/spanish/docs_s/legal_s/20-val.pdf **[no se pudo abrir desde el entorno; texto estándar]**

### 3.2 Los tributos uno por uno

#### a) Tasa Global Arancelaria (TGA)

- Es el **arancel de importación** de Uruguay. Suma tres componentes: **IMADUNI** (Impuesto Aduanero Único a la Importación), **recargo mínimo** y **recargo adicional** (Dec. 430/021 art. 6). Ejemplos de esa tabla:

| TGA | Recargo mínimo | Recargo adicional | IMADUNI |
|---|---|---|---|
| 7% | 6% | 1% | 0% |
| 12% | 6% | 4% | 2% |
| 20% | 6% | 4% | 10% |
| 35% | 6% | 19% | 10% |

- En la práctica nadie desglosa: se liquida “la TGA” que figura en el arancel para cada NCM. Para la extrazona coincide con el **AEC**, salvo en las listas de excepción y los regímenes nacionales.
- **Base:** valor en aduana (CIF).
- **Origen MERCOSUR con certificado o declaración de origen (ACE 18, código 310):** **0%**, con preferencia del 100%. Quedan afuera el azúcar (partida 17.01) y el sector automotor, que se rige por acuerdos bilaterales (ACE 2 con Brasil, ACE 57 con Argentina).
- **Derechos específicos:** algunas NCM tienen además un derecho específico o un precio ficto (Dec. 264/003; ciertos textiles y calzado) **[VERIFICAR para cada NCM]**.

**Fuentes:**
- https://www.impo.com.uy/bases/decretos/430-2021/6
- https://www.impo.com.uy/bases/decretos/130-1992/1
- https://www2.aladi.org/SitioALADI/documentos/FichasDescriptivasAcuerdos/FD_AAP.CE_18_Argentina_Brasil_Paraguay_Uruguay.pdf

#### b) Tasa Consular (TC)

- **Situación vigente (ley):** **5%** del valor en aduana para la generalidad de las importaciones y **3%** para las importaciones al amparo del **ACE 18 (MERCOSUR)** (Ley 19.535 art. 265, vigente desde el 01/01/2018; antes era 2% para todo).
- **Exoneraciones:**
  - admisión temporaria;
  - petróleo crudo y ciertos combustibles;
  - **bienes de capital** de uso exclusivo industrial, agropecuario o pesquero cuya TGA extrazona sea 0% o 2%;
  - **México 0%** (salvo autos);
  - **Chile 3%** (Ley 19.812, 2019).
- **Facultad de reducción:** desde 2020 el Poder Ejecutivo puede bajarla hasta 0,5 puntos por año, hasta un piso del 2%, y eliminarla para el ACE 18. Según la prensa, **no la había usado a agosto de 2024**. En abril de 2025 el director de la Asesoría de Política Comercial del MEF habló de “desinflarla” primero y de no cobrarla durante 3 años a las importaciones desde el MERCOSUR. Además, el **Acuerdo de Facilitación del Comercio del MERCOSUR** prevé una transición de 3 años para dejar de aplicarla a los socios, y el **Acuerdo MERCOSUR–UE** obliga a eliminarla tras un período de gracia de 3 años.
- **Conclusión 2026:** no se encontró ninguna norma que haya cambiado el 5% y el 3%. Para el estudio y los ejercicios se usan **5% extrazona y 3% MERCOSUR**. **[VERIFICAR antes de usar en la práctica: posible reducción por decreto en 2025–2026 y tratamiento del origen UE desde el 01/05/2026]**.
- La TC **no integra** la base del IVA, que según la ley es “valor normal de aduana más el arancel”.

**Fuentes:**
- https://www.impo.com.uy/bases/leyes/19535-2017/265
- https://www.elobservador.com.uy/economia-y-empresas/el-impuesto-millonario-que-uruguay-tiene-pendiente-eliminar-un-contexto-fiscal-desafiante-n5956808
- https://www.elobservador.com.uy/economia-y-empresas/empresarios-piden-reducir-tasa-consular-y-aranceles-avance-compras-web-el-exterior-n5995771
- https://www.gub.uy/ministerio-economia-finanzas/comunicacion/publicaciones/exposicion-motivos-rc-2023/7-insercion-internacional/71-medidas
- https://www.pwc.com.uy/es/acerca-de-nosotros/publicaciones/analisis-comex-pwc/ediciones-anteriores/uruguay-reduce-tasa-consular-a-la-importacion-de-productos-chile.html
- https://www.elobservador.com.uy/nota/uruguay-debera-eliminar-la-tasa-consular-en-tres-anos-segun-acuerdo-con-ue--201973192721

#### c) Tasa de servicios aduaneros (TSA / “tasa por servicios preferenciales”)

- **0,2% del CIF, con un tope de US$ 50** por permiso o DUA.
- Se paga **aunque la mercadería esté exonerada**.
- Base legal: Ley 16.320 art. 170 y Dec. 667/992, modificado por el Dec. 540/994.

**Fuentes:**
- https://www.aduanas.gub.uy/innovaportal/v/7591/6/innova.front/decreto-n%C2%B0667_992.html
- https://www.aduanas.gub.uy/innovaportal/v/2773/8/innova.front/tasa-por-servicios-preferenciales.html

#### d) Tasa de servicios extraordinarios (TSE)

- Escala fija por **tramo de valor** de la operación. Se creó con el Dec. 305/986 (US$ 10 a US$ 500) y las cifras se actualizaron después. Montos que reporta la Embajada argentina (2018):

| Tramo de valor (US$) | Tasa (US$) |
|---|---|
| 500 – 1.000 | 12 |
| 1.000 – 2.000 | 30 |
| 2.000 – 8.000 | 48 |
| 8.001 – 30.000 | 108 |
| 30.000 – 100.000 | 240 |
| más de 100.000 | 600 |

- **[VERIFICAR montos vigentes 2026 en una liquidación real de LUCIA]**.

**Fuentes:**
- https://www.impo.com.uy/bases/decretos/305-1986
- https://exportaciones.cancilleria.gob.ar/Estadistica/imagen_producto/7196

#### e) Tasa de inspección no intrusiva (escáneres)

- **85 UI por DUA** de importación, exportación o tránsito.
- Están exentos los envíos aéreos de hasta 20 kg y US$ 200.
- Base legal: Ley 20.075 art. 161, Dec. 235/024 y RG 57/2024.
- Con la UI de octubre de 2026 ≈ $ 6,65, son **≈ $ 565**, unos US$ 14 al tipo de cambio ilustrativo de $ 40.

**Fuente:** https://aduanas.gub.uy/innovaportal/file/26806/1/rg-57-2024-disposiciones-para-el-cobro-de-la-tasa.pdf

#### f) Otras tasas y conceptos

- **TCI (tasa de contralor de importaciones) / “tasa BROU”:** es una comisión histórica sobre las importaciones que cobra el BROU. El procedimiento de la DNA todavía la menciona entre las tasas de servicio (TSA, TSE, TCI) que se cobran si se anula un DUA. Un artículo de 2015 la ubicaba en 3% del VA, pero ese dato **no se pudo confirmar como vigente** y no aparece en las listas de 2018. **[VERIFICAR]**
- **Tasa de movilización de bultos (TMB) y proventos portuarios:** la TMB aparece en las normas de exoneración, junto al IMADUNI, los recargos y la TC (por ejemplo, Ley 20.212 art. 657). Hoy los servicios portuarios los factura la ANP o la terminal **fuera del DUA** (por tonelada, contenedor o almacenaje). **[VERIFICAR si la TMB sigue liquidándose en el DUA]**
- **Precio LATU:** **0,5% del CIF**, solo para los alimentos sujetos a control (Dec. 194/022).
- **VUCE:** 36 UI de costo de referencia por certificado utilizado **[VERIFICAR si es un cobro]**.
- **Corrección de la declaración** ya registrada: **400 UI** en ciertos casos (CAROU art. 70).
- **Honorarios del despachante:** son libres. Las referencias van de **≈ 1% del CIF** (embajada argentina, 2018) a un rango de 0,5% a 3%, con mínimo por despacho, más IVA. Se suma el **timbre profesional electrónico** de la Caja de Profesionales o de la Asociación de Despachantes, de unos US$ 4,40 en 2018. **[VERIFICAR tarifa 2026 con ADAU]**

#### g) IVA a la importación

- **Tasas:** básica **22%**; mínima **10%** (alimentos básicos, medicamentos, etc.). Algunos bienes están exentos, como libros y diarios.
- **Base:** **valor normal de aduana + arancel (TGA)**. Si el importador **no es contribuyente** o importa a nombre propio por cuenta ajena, la base se **incrementa en 50%** (TO 2023, Tít. 10, art. 13 lit. B).
- **Discrepancia en las fuentes:** algunas fuentes privadas indican que la base incluye todas las tasas (GTAI) o el IMESI (yo-facturo). El texto legal consultado dice solo “valor normal de aduana más el arancel”. **[VERIFICAR contra una liquidación real]**
- Para un contribuyente, el IVA de importación es **crédito fiscal**.

#### h) Anticipo de IVA

- **10%** si el bien está gravado a la tasa básica; **3%** si está gravado a la tasa mínima.
- Base: **VA + arancel** (Dec. 220/998 art. 115).
- Se descuenta del IVA del mes (art. 117).
- **No corresponde anticipo** (art. 116) en estos casos: bienes exonerados o con IVA en suspenso, importadores con exoneración subjetiva y otros casos con declaración jurada previa.
- Para un **no contribuyente**, el IVA se paga completo y no hay anticipo.

#### i) Anticipo de IRAE

- **Quiénes:** contribuyentes de IRAE que importan **bienes de consumo** incluidos en el Anexo.
- **Alícuota:** **4%** desde el **01/01/2026** (Dec. 335/025). Antes: **15%** para el Anexo 1 y 4% para el Anexo 2 (Dec. 110/012).
- **Base:** VA + arancel.
- Se descuenta de los anticipos mensuales de IRAE (Dec. 788/008 art. 4).
- **Exceptuados:** quienes tienen todas sus rentas exentas y las empresas promovidas por la Ley 16.906, en ambos casos con declaración jurada.
- El Anexo vigente se publica en los sitios de Presidencia y del MEF. **[VERIFICAR si la NCM está en el Anexo]**

#### j) IMESI

- **Qué grava:** la **primera enajenación** de bienes específicos: bebidas, alcoholes, cosmética y perfumería, tabaco, vehículos, combustibles, lubricantes, etc.
- **Contribuyente de IMESI:** al importar paga un **anticipo de IMESI** con la tasa vigente sobre **VA + arancel** (Dec. 335/996 art. 4).
- **No contribuyente:** paga el IMESI en el despacho, sobre (VA + arancel) × 1,5 o sobre un ficto (Dec. 96/990 art. 11).
- **Tasas de referencia:**

| Bien | Tasa |
|---|---|
| Cosmética y perfumería (numeral 8) | 10% fijado por decreto (tope legal 20%) **[VERIFICAR vigencia]** |
| Bebidas alcohólicas (numeral 4) | Tope 85% (se usan precios fictos) |
| Cerveza | Tope 27% |
| Vinos finos y espumantes | Tope 23% |
| Bebidas sin alcohol con jugo, aguas y sodas | Tope 22% |
| Cigarrillos | 70% |
| Lubricantes | Tope 35% |

- El whisky importado lleva estampilla de la DGI (Dec. 335/996).

**Fuentes de g) a j):**
- https://www.impo.com.uy/bases/todgi-2023/10-2024
- https://impo.com.uy/bases/todgi2023/101-2024/13_T10
- https://www.impo.com.uy/bases/decretos/220-1998/115
- https://impo.com.uy/bases/decretos/220-1998/116
- https://impo.com.uy/bases/decretos/220-1998/117
- https://impo.com.uy/bases/decretos/788-2008
- https://impo.com.uy/bases/decretos/335-2025
- https://impo.com.uy/bases/decretos-originales/110-2012/1
- https://impo.com.uy/bases/todgi2023/101-2024/1_T11
- https://www.impo.com.uy/bases/decretos/96-1990
- https://www.impo.com.uy/bases/decretos/96-1990/25
- https://www.impo.com.uy/bases/decretos/335-1996
- Fuentes privadas con datos divergentes: https://www.gtai.de/de/trade/uruguay/zoll/zoelle-und-weitere-einfuhrabgaben-2023332 y https://yo-facturo.com/blog/como-importar-a-uruguay/

#### k) Recargos y multas

- **Recargos:** son los componentes de la TGA (mínimo y adicional) descritos en a). En la jerga, “exento de todo recargo, incluso el mínimo” significa TGA 0%.
- **Pago fuera de plazo:** el DUA se anula. En las deudas tributarias corren multa y recargos por mora según el Código Tributario.
- **Infracciones aduaneras:** las define el CAROU (diferencia, contrabando, defraudación, etc.). **[VERIFICAR artículos y montos; esta parte del CAROU no se pudo extraer]**

#### l) ¿Qué son las “amortizaciones”?

No existe ningún tributo de importación uruguayo vigente con ese nombre. Las normas y procedimientos consultados de la DNA y la DGI no lo mencionan. Si el curso lo usa, lo más probable es una de estas tres acepciones (**[VERIFICAR con el docente]**):

1. **En el costeo de la importación:** “amortizar” significa **prorratear** gastos fijos (honorarios, flete, gastos bancarios, tasas fijas como la TSA o la TSE) entre las unidades importadas para llegar al **costo unitario puesto en depósito**.
2. **Anticipos “recuperables”:** el anticipo de IVA, el anticipo de IRAE y el IVA de importación no son costo para un contribuyente, porque se **recuperan** o se descuentan después. Algunos docentes separan la liquidación en “costos” y “créditos o amortizables”.
3. **Uso contable:** si lo importado es un **bien de uso** (maquinaria), su costo de importación, sin los tributos recuperables, se activa y se **amortiza** (deprecia) en su vida útil.

### 3.3 Orden de cálculo (algoritmo para la app)

```
1. CIF = FOB + flete + seguro (si no hay seguro: 1% FOB)        → VA
2. TGA = VA × %TGA (0% si origen MERCOSUR con prueba de origen)
3. TC  = VA × 5% (3% si ACE 18; 0% si exonerada)
4. TSA = min(CIF × 0,2%; US$ 50)
5. TSE = escala por tramo
6. Inspección no intrusiva = 85 UI
7. (LATU 0,5% CIF si alimento controlado)
8. BASE INTERNA = VA + TGA        (× 1,5 si no contribuyente)
9. IMESI o anticipo IMESI = BASE × %IMESI (si corresponde)
10. IVA = BASE × 22% (o 10%)
11. Anticipo IVA = BASE × 10% (o 3%)       (solo contribuyentes)
12. Anticipo IRAE = BASE × 4%              (solo bienes del Anexo; contribuyentes IRAE)
13. TOTAL A PAGAR EN EL DUA = suma de 2 a 12
14. COSTO NO RECUPERABLE = TGA + TC + TSA + TSE + escáner + LATU + honorarios (+ IMESI si es costo)
```

> **Supuestos de los ejemplos:** US$ 1 = $ 40 (ilustrativo); 85 UI × $ 6,65 = $ 565,25 ≈ **US$ 14,13**; tasas de 2026 según la tabla del punto 0; importador contribuyente de IVA e IRAE. Todos los importes en US$.

### 3.4 Ejemplo 1: importación intra-MERCOSUR con prueba de origen (Brasil)

Vajilla de vidrio desde São Paulo, camión, CPT Montevideo. FOB US$ 10.000; flete US$ 800; seguro US$ 60. Declaración de origen ACE 18 (código 310). IVA básico.

| # | Concepto | Cálculo | US$ |
|---|---|---|---|
| 1 | Valor en aduana (CIF) | 10.000 + 800 + 60 | **10.860,00** |
| 2 | TGA | 10.860 × 0% (ACE 18) | 0,00 |
| 3 | Tasa Consular | 10.860 × 3% | 325,80 |
| 4 | TSA | 10.860 × 0,2% = 21,72 (< tope 50) | 21,72 |
| 5 | Servicios extraordinarios | tramo 8.001–30.000 | 108,00 |
| 6 | Inspección no intrusiva | 85 UI | 14,13 |
| 7 | Base interna | 10.860 + 0 | 10.860,00 |
| 8 | IVA 22% | 10.860 × 22% | 2.389,20 |
| 9 | Anticipo IVA 10% | 10.860 × 10% | 1.086,00 |
| 10 | Anticipo IRAE 4% (si está en el Anexo) | 10.860 × 4% | 434,40 |
| | **Total del DUA** | | **4.379,25** |
| | Costo no recuperable (3+4+5+6) | | 469,65 (4,3% del CIF) |
| | Recuperable como crédito (8+9+10) | | 3.909,60 |

**Lección:** con origen MERCOSUR el arancel es 0%, pero **no todo es gratis**. Siguen la Tasa Consular del 3%, las tasas de servicio, el IVA y los anticipos. Sin la prueba de origen válida, se pagaría la TGA extrazona y la TC del 5%.

### 3.5 Ejemplo 2: extra-MERCOSUR, régimen general (China)

Vasos de vidrio, FOB Ningbo US$ 20.000; flete marítimo US$ 2.500; seguro US$ 200. TGA ilustrativa del 18% **[VERIFICAR la NCM real]**. IVA básico.

| # | Concepto | Cálculo | US$ |
|---|---|---|---|
| 1 | CIF | 20.000 + 2.500 + 200 | **22.700,00** |
| 2 | TGA 18% | 22.700 × 18% | 4.086,00 |
| 3 | Tasa Consular 5% | 22.700 × 5% | 1.135,00 |
| 4 | TSA | 22.700 × 0,2% = 45,40 (< 50) | 45,40 |
| 5 | Servicios extraordinarios | tramo 8.001–30.000 | 108,00 |
| 6 | Inspección no intrusiva | 85 UI | 14,13 |
| 7 | Base interna | 22.700 + 4.086 | 26.786,00 |
| 8 | IVA 22% | 26.786 × 22% | 5.892,92 |
| 9 | Anticipo IVA 10% | 26.786 × 10% | 2.678,60 |
| 10 | Anticipo IRAE 4% | 26.786 × 4% | 1.071,44 |
| | **Total del DUA** | | **15.031,49** (≈ $ 601.260) |
| | Costo no recuperable (2 a 6) | | 5.388,53 (23,7% del CIF) |
| | Honorarios del despachante (1% CIF + IVA) | 227 + 49,94 | 276,94 (IVA recuperable) |

### 3.6 Ejemplo 3: importación con IMESI (cosméticos desde EE. UU.)

Cremas faciales, FOB Miami US$ 15.000; flete aéreo US$ 1.200; seguro US$ 150. TGA ilustrativa del 18% **[VERIFICAR NCM 3304]**. IMESI numeral 8 al 10% **[VERIFICAR]**. El importador es contribuyente de IMESI. Requiere registro previo del producto en el MSP vía VUCE.

| # | Concepto | Cálculo | US$ |
|---|---|---|---|
| 1 | CIF | 15.000 + 1.200 + 150 | **16.350,00** |
| 2 | TGA 18% | 16.350 × 18% | 2.943,00 |
| 3 | Tasa Consular 5% | 16.350 × 5% | 817,50 |
| 4 | TSA | 16.350 × 0,2% | 32,70 |
| 5 | Servicios extraordinarios | tramo 8.001–30.000 | 108,00 |
| 6 | Inspección no intrusiva | 85 UI | 14,13 |
| 7 | Base interna | 16.350 + 2.943 | 19.293,00 |
| 8 | Anticipo IMESI 10% | 19.293 × 10% | 1.929,30 |
| 9 | IVA 22% | 19.293 × 22% | 4.244,46 |
| 10 | Anticipo IVA 10% | 19.293 × 10% | 1.929,30 |
| 11 | Anticipo IRAE 4% | 19.293 × 4% | 771,72 |
| | **Total del DUA** | | **12.790,11** |

**Variante:** si quien importa es un **no contribuyente** (persona física), la base se multiplica por 1,5: 19.293 × 1,5 = 28.939,50. Queda IMESI 10% = 2.893,95 e IVA 22% = 6.366,69, ambos definitivos (no son anticipos), y **no** hay anticipos de IVA ni de IRAE.

**Fuentes de la sección 3:** las mismas de 3.2, más los procedimientos de la DNA citados en la sección 1.

---

## 4. NCM, Sistema Armonizado y AEC

### 4.1 Estructura de la NCM

```
Ejemplo:  2208 . 30 . 20 . 00
          │ │    │    │    └─ 2 dígitos: apertura nacional uruguaya (10 dígitos en LUCIA)
          │ │    │    └────── 8º dígito: subítem NCM (MERCOSUR)
          │ │    │   7º dígito: ítem NCM (MERCOSUR)
          │ │    └─ 5º-6º: subpartida del Sistema Armonizado (SA)
          │ └────── 3º-4º: partida (SA)
          └──────── 1º-2º: capítulo (SA)
```

- **SA (Sistema Armonizado):** lo administra la Organización Mundial de Aduanas (OMA). Tiene **6 dígitos**, 21 secciones y 97 capítulos (el 77 está reservado).
- **NCM:** suma **2 dígitos MERCOSUR** (ítem y subítem), en total 8. Hoy está ajustada a la **VII Enmienda del SA (SA 2022)**: en Uruguay, Decreto 430/021.
- **Uruguay** agrega **2 dígitos nacionales** para los tributos internos, las aperturas de TGA y los controles. Por eso el DUA pide 10 dígitos más un dígito verificador.
- **Modificaciones recientes del bloque:** Resolución GMC 4/2026 (mayo) y 16/2026 (junio) cambiaron la NCM y el AEC. **[VERIFICAR su incorporación en Uruguay]**

### 4.2 Las 6 Reglas Generales Interpretativas (RGI)

1. **RGI 1:** los títulos de secciones y capítulos solo orientan. La clasificación la determinan **los textos de las partidas y las notas** de sección y capítulo.
2. **RGI 2a:** un artículo **incompleto o sin terminar**, o **desarmado**, se clasifica como el completo si ya tiene sus características esenciales. **RGI 2b:** una referencia a una materia incluye sus **mezclas y combinaciones**. Las mercancías de varias materias se resuelven con la RGI 3.
3. **RGI 3**, si dos o más partidas parecen aplicables:
   - **3a:** la partida **más específica** prevalece sobre la genérica;
   - **3b:** en mezclas, manufacturas compuestas y **surtidos** para la venta al por menor, decide el componente que da el **carácter esencial**;
   - **3c:** si nada de lo anterior resuelve, se elige la **última partida** por orden de numeración.
4. **RGI 4:** lo que no puede clasificarse con las reglas anteriores va en la partida de los artículos **más análogos**.
5. **RGI 5a:** los **estuches y fundas** hechos para un artículo, aptos para uso prolongado, se clasifican **con** ese artículo. **RGI 5b:** los **envases** se clasifican con la mercancía si son los normales para ella y no son reutilizables por naturaleza.
6. **RGI 6:** para clasificar en **subpartidas** se aplican los textos de subpartida y sus notas, y las reglas anteriores, **comparando solo subpartidas del mismo nivel**. En la NCM se agrega una “regla general complementaria” (RGC) que extiende el criterio a ítems y subítems.

**Método práctico:**
1. Identificar qué es el producto (materia, función, grado de elaboración).
2. Ubicar la sección y el capítulo.
3. Leer las notas legales.
4. Elegir la partida con la RGI 1 (o 2 a 5).
5. Bajar a subpartida, ítem y subítem con la RGI 6.
6. Consultar las Notas Explicativas del SA (NESA), los dictámenes de clasificación del MERCOSUR y las clasificaciones de la DNA.
7. Verificar en el arancel integrado de LUCIA: TGA, MNNT, IMESI y anticipos.

### 4.3 Dónde se consulta el arancel en Uruguay

- **Arancel integrado de la DNA** (módulo “Arancel Integrado a nivel Nacional” de LUCIA y consulta web en aduanas.gub.uy): muestra la NCM con su TGA, los acuerdos, las MNNT y los tributos internos.
- **ALADI:** sistema de información de acuerdos y aranceles (preferencias por acuerdo).
- **MERCOSUR:** la NCM y el AEC se publican en mercosur.int.
- **Access2Markets (UE):** consulta gratuita de aranceles uruguayos.

**Nota:** no se pudo verificar la URL exacta de la consulta web del arancel de la DNA. **[VERIFICAR]**

### 4.4 AEC (Arancel Externo Común)

- **Qué es:** el arancel común que los cuatro socios del MERCOSUR aplican a las importaciones de **terceros países**. Rige desde 1995.
- **Niveles:** el AEC general va de **0% a 20%**, con niveles escalonados y más alto cuanto mayor es la elaboración del bien. Hay niveles de hasta **35%** en bienes sensibles: autos, lácteos, textiles, calzado, en parte por normas nacionales o “modificaciones temporales”. Según el Country Commercial Guide de EE. UU., la estructura de Uruguay tiene **19 tasas, de 0% a 35%**.
- **Promedio aplicado por Uruguay:** **8,2% en 2025**, frente a 9,4% en 2017 (Examen de Política Comercial de la OMC, abril de 2026).
- **Reducción del 10% (Decisión CMC 08/22, 20/07/2022):**
  - baja 10% el AEC de **6.886 códigos NCM** (≈ 66% del universo);
  - los que estaban en 2% pasan a 0%;
  - el promedio de esos códigos cae de 8,5% a 7,1%;
  - quedan **excluidos** los textiles, la confección, el calzado, los juguetes, los duraznos en conserva, los lácteos y el sector automotor;
  - Uruguay la incorporó por el **Dec. 369/022** y la Res. MEF 8658/022, con su Anexo V de **1.409 códigos** adicionales;
  - según el MEF, el arancel promedio aplicado de Uruguay bajó de **9,2% a 8,3%**.
- **Listas nacionales de excepción al AEC:** Decisión CMC 01/25, incorporada en Uruguay por el **Dec. 211/025**.

| País | Códigos NCM en la lista | Vigencia |
|---|---|---|
| Argentina | 100 | hasta fines de 2028 |
| Brasil | 100 | hasta fines de 2028 |
| **Uruguay** | **225** | **hasta fines de 2029** |
| Paraguay | 649 | hasta fines de 2030 |

  En julio de 2025 el CMC autorizó, además, una **lista temporal de 50 códigos adicionales** por país. Según la OMC, en 2025 las excepciones de Uruguay abarcaban 4.273 líneas, ≈ 35% de las partidas, si se suman todos los regímenes.
- **Regímenes especiales:**
  - **BK** (bienes de capital) y **BIT** (bienes de informática y telecomunicaciones): cada país puede aplicar aranceles distintos del AEC. Uruguay suele aplicar **0% o 2%** a los BK no producidos en la región. El comunicado del MEF de 2022 confirma que las excepciones de BK y BIT siguen vigentes. **[VERIFICAR plazos vigentes de BK y BIT y la alícuota uruguaya]**
  - **Sector automotor y azúcar:** fuera del AEC y del libre comercio intrazona.
  - **Admisión temporaria, zonas francas, *drawback*:** regímenes nacionales.

### 4.5 ¿Qué significa “AEC 18” en el curso?

Hay tres lecturas posibles, ordenadas de más a menos probable. **[VERIFICAR con el material del curso]**

1. **Es “ACE 18”, con las letras invertidas.** Es el **Acuerdo de Complementación Económica N° 18** de la ALADI, firmado el 29/11/1991 por Argentina, Brasil, Paraguay y Uruguay. Es el instrumento jurídico que da la **preferencia del 100% (arancel 0%) intra-MERCOSUR**, con su régimen de origen (Protocolo Adicional 218) y su certificado o declaración de origen. En LUCIA corresponde al **código de acuerdo 310**. Además, la Ley 19.535 lo menciona expresamente: la **Tasa Consular es del 3% “para el ACE 18”**. Es la lectura más probable en un curso uruguayo.
2. **AEC del 18%.** Muchos bienes de consumo tenían AEC del 20%. Con el recorte del 10% de la Decisión 08/22 (20% × 0,9 = 18%), **18%** quedó como un nivel muy frecuente para los bienes finales extrazona.
3. Una **decisión del CMC con número 18** relativa al AEC. No se encontró ninguna relevante para Uruguay.

**Fuentes de la sección 4:**
- NCM VII Enmienda: https://www.impo.com.uy/bases/decretos/430-2021/6
- Decreto 369/022 y anexo de la Dec. 08/22: https://www.impo.com.uy/bases/decretos/369-2022/1 y https://www.impo.com.uy/bases/decretos-internacional/369-2022/1
- MEF, reducción del AEC: https://www.gub.uy/ministerio-economia-finanzas/comunicacion/noticias/mercosur-reduccion-del-arancel-externo-comun
- MEF, medidas de reducción (TGA 9,2% → 8,3%): https://www.gub.uy/ministerio-economia-finanzas/comunicacion/publicaciones/exposicion-motivos-rc-2023/7-insercion-internacional/71-medidas
- Listas de excepción (julio 2025): https://www.swissinfo.ch/spa/mercosur-aprueba-una-ampliaci%C3%B3n-de-las-listas-de-excepciones-arancelarias/89627093
- Prensa MERCOSUR, agosto 2026: https://prensamercosur.org/2026/08/24/el-arancel-externo-comun-sigue-siendo-una-de-las-grandes-tareas-pendientes-del-mercosur-el-bloque-avanzo-pero-las-excepciones-nacionales-mantienen-abierta-la-disputa/
- GTAI 2026 (225 posiciones hasta 2029): https://www.gtai.de/de/trade/uruguay/zoll/zoelle-und-weitere-einfuhrabgaben-2023332
- OMC, Examen de Política Comercial de Uruguay (WT/TPR/S/486, 15/04/2026): https://www.wto.org/spanish/news_s/news_docs/S486_s.pdf
- US Country Commercial Guide: https://www.trade.gov/country-commercial-guides/uruguay-import-tariffs
- ALADI, ficha del ACE 18: https://www2.aladi.org/SitioALADI/documentos/FichasDescriptivasAcuerdos/FD_AAP.CE_18_Argentina_Brasil_Paraguay_Uruguay.pdf

---

## (a) 25 preguntas de examen (múltiple opción)

**1.** ¿Qué sistema informático usa la DNA para registrar las declaraciones?
A) SIDUNEA B) LUCIA C) SINTIA D) VUCE
**Respuesta: B.** LUCIA es el sistema aduanero uruguayo. La VUCE es la ventanilla de certificados y permisos previos.

**2.** ¿Cuál es la base del arancel (TGA) en Uruguay?
A) FOB B) Valor en aduana (CIF) C) Precio de venta D) CIF + IVA
**Respuesta: B.** El arancel se aplica sobre el valor en aduana, que en Uruguay es base CIF.

**3.** Si no se declara seguro, la DNA considera un seguro de:
A) 0,5% del CIF B) 1% del FOB C) 2% del FOB D) No se agrega nada
**Respuesta: B.** Es el seguro ficto del 1% sobre el FOB.

**4.** ¿Cuál es la Tasa Consular general vigente por ley?
A) 2% B) 3% C) 5% D) 10%
**Respuesta: C.** Es del 5% (Ley 19.535 art. 265). Para el ACE 18 es 3%.

**5.** Una importación desde Brasil con declaración de origen MERCOSUR paga Tasa Consular de:
A) 0% B) 2% C) 3% D) 5%
**Respuesta: C.** El 3% corresponde al ACE 18.

**6.** ¿Cuál es el tope de la tasa de servicios aduaneros del 0,2%?
A) US$ 20 B) US$ 50 C) US$ 100 D) No tiene tope
**Respuesta: B.** Dec. 667/992.

**7.** La base del IVA de importación es:
A) CIF B) CIF + TGA C) CIF + TGA + Tasa Consular D) FOB + TGA
**Respuesta: B.** La ley dice “valor normal de aduana más el arancel”.

**8.** Si quien importa no es contribuyente de IVA, la base se:
A) Reduce 50% B) Incrementa 50% C) Mantiene D) Duplica
**Respuesta: B.** TO Título 10, art. 13.

**9.** El anticipo de IVA para un bien gravado a la tasa básica es:
A) 3% B) 10% C) 15% D) 22%
**Respuesta: B.** Es 10% (3% para los bienes gravados a la tasa mínima).

**10.** Desde el 01/01/2026, el anticipo de IRAE para los bienes de consumo del Anexo es:
A) 15% B) 10% C) 4% D) 0%
**Respuesta: C.** Dec. 335/025.

**11.** ¿Qué canal implica solo un análisis documental?
A) Verde B) Naranja C) Rojo D) Celeste
**Respuesta: B.** El naranja es documental. El rojo es documental más físico. El verde no tiene revisión.

**12.** En exportación, la DNA aplica los canales:
A) Verde y naranja B) Verde y rojo C) Los tres D) Solo rojo
**Respuesta: B.** Así lo establece el procedimiento de exportación.

**13.** ¿Qué artículo del CAROU establece la responsabilidad solidaria del despachante?
A) 2 B) 14 C) 27 D) 74
**Respuesta: C.** El art. 27.

**14.** ¿En cuál de estos casos NO es preceptivo el despachante?
A) Importación de 1 contenedor B) Equipaje de viajero C) Exportación de carne D) Admisión temporaria industrial
**Respuesta: B.** CAROU art. 15.

**15.** ¿Cuántos dígitos tiene la NCM?
A) 6 B) 8 C) 10 D) 12
**Respuesta: B.** Son 8: los 6 del SA más 2 del MERCOSUR. Uruguay agrega 2 dígitos nacionales en LUCIA.

**16.** ¿Qué RGI dice que se elige la partida más específica?
A) 1 B) 2a C) 3a D) 5
**Respuesta: C.** La RGI 3a.

**17.** Un estuche de guitarra presentado con la guitarra se clasifica:
A) Aparte B) Con la guitarra (RGI 5a) C) Según la RGI 3c D) Como plástico
**Respuesta: B.** Por la RGI 5a.

**18.** ¿Cuánto bajó el AEC la Decisión CMC 08/22?
A) 5% B) 10% C) 20% D) 50%
**Respuesta: B.** Un 10% sobre unas 6.886 posiciones.

**19.** ¿Hasta cuántos códigos NCM puede tener Uruguay en su lista de excepciones al AEC?
A) 100 B) 225 C) 649 D) 1.000
**Respuesta: B.** 225, hasta fines de 2029 (más una lista temporal de 50).

**20.** El ACE 18 es:
A) Un decreto uruguayo B) El acuerdo ALADI que instrumenta el libre comercio MERCOSUR C) Un arancel del 18% D) Un formulario
**Respuesta: B.** Es el acuerdo firmado en 1991.

**21.** ¿Cuál es el plazo para pedir canal después de numerar el DUA?
A) 5 días hábiles B) 15 días C) 30 días corridos D) 90 días
**Respuesta: C.** Si no se pide canal en ese plazo, el DUA vence.

**22.** ¿Qué documento acredita la importación ante el importador?
A) Vía 1 B) Vía 2 C) Vía 4 D) Vía 5
**Respuesta: B.** La vía 4 sirve para la salida del recinto.

**23.** La tasa de inspección no intrusiva es de:
A) 0,2% CIF B) 85 UI por DUA C) US$ 50 D) 1% FOB
**Respuesta: B.** RG 57/2024.

**24.** El IMESI grava:
A) Todas las importaciones B) La primera enajenación de ciertos bienes específicos C) Solo los servicios D) Solo las exportaciones
**Respuesta: B.** Bebidas, cosméticos, tabaco, vehículos, combustibles, etc.

**25.** ¿Qué es el “libramiento” según el CAROU?
A) El pago de tributos B) La autorización para disponer de la mercadería C) La descarga D) El canal verde
**Respuesta: B.** CAROU art. 2.

---

## (b) 8 ejercicios numéricos con solución

**E1. CIF con seguro ficto.** Se compró CFR Montevideo a US$ 5.400 (FOB 5.000 + flete 400). No hay póliza. ¿Cuál es el valor en aduana?
*Solución:* seguro = 1% × FOB = 50. VA = 5.000 + 400 + 50 = **US$ 5.450**.
*Ojo:* el ficto se calcula sobre el FOB. No se calcula sobre el CFR, que daría 54.

**E2. Desde EXW.** Precio EXW US$ 11.500. Traslado a puerto y carga en origen US$ 500. Flete US$ 900. No hay seguro. ¿Cuál es el valor en aduana?
*Solución:* FOB = 12.000; seguro ficto = 120; **CIF = 13.020**.

**E3. TSA con tope.** Calcular la TSA para CIF de US$ 8.000 y de US$ 40.000.
*Solución:* 8.000 × 0,2% = **US$ 16**. 40.000 × 0,2% = 80, que supera el tope: **US$ 50**.

**E4. Extrazona completa.** CIF US$ 30.000; TGA 14%; importador contribuyente; bien de consumo del Anexo de IRAE.
*Solución:*
- TGA = 4.200
- TC 5% = 1.500
- TSA = 50 (tope)
- TSE = 240 (tramo 30.000–100.000) [VERIFICAR monto]
- Escáner = 14,13
- Base interna = 34.200
- IVA 22% = 7.524
- Anticipo IVA 10% = 3.420
- Anticipo IRAE 4% = 1.368

**Total = US$ 18.316,13.**

**E5. Ahorro de origen.** CIF US$ 50.000 de origen argentino, con TGA extrazona del 12%. ¿Cuánto se ahorra en TGA y en TC si el certificado de origen es válido?
*Solución:* TGA: 6.000 → 0. TC: 2.500 (5%) → 1.500 (3%). **Ahorro = US$ 7.000.** El IVA también baja, porque su base pasa de 56.000 a 50.000: 1.320 menos de IVA, aunque ese IVA es recuperable.

**E6. Tasa mínima de IVA.** Alimento con IVA mínimo, CIF US$ 6.000, TGA 0% (origen MERCOSUR), sujeto a control LATU.
*Solución:*
- LATU 0,5% = 30
- TC 3% = 180
- TSA = 12
- TSE = 48
- Escáner = 14,13
- IVA 10% = 600
- Anticipo IVA 3% = 180

**Total = US$ 1.064,13.**

**E7. Particular no contribuyente.** Persona física importa por la vía formal un bien de CIF US$ 3.000 con TGA 20%.
*Solución:*
- TGA = 600
- TC = 150
- TSA = 6
- TSE = 48
- Escáner = 14,13
- Base IVA = (3.000 + 600) × 1,5 = 5.400
- IVA = 1.188, sin anticipos

**Total = US$ 2.006,13**, es decir, 67% del CIF.

**E8. Efecto de la Decisión 08/22.** ¿Qué AEC resulta de bajar 10% un 18%, un 12% y un 2%? ¿Cuánto se ahorra en TGA sobre un CIF de 20.000 con AEC original del 18%?
*Solución:* 18% → 16,2%; 12% → 10,8%; 2% → **0%** (regla expresa de la decisión, en lugar del 1,8% que daría la cuenta). TGA: 3.600 → 3.240, **ahorro US$ 360**.

---

## (c) 15 preguntas probables de entrevista, con respuesta modelo

1. **¿Qué hace un despachante de aduana?**
   Es un auxiliar privado del comercio y de la función pública aduanera (CAROU art. 14). Representa al importador o exportador ante la DNA: clasifica la mercadería en la NCM, determina el valor, arma y transmite el DUA en LUCIA, liquida y paga los tributos, gestiona los certificados de la VUCE y asiste a la verificación. Además responde solidariamente por los tributos (art. 27), así que su trabajo exige rigor.

2. **Contame el circuito de una importación marítima.**
   Pro-forma y clasificación, permisos en VUCE, pago, embarque con B/L, arribo y manifiesto del agente marítimo, transmisión del DUA y de la DVA, numeración, pago de tributos, canal, verificación si toca naranja o rojo, cumplido, pago de la terminal y liberación del contenedor, retiro y archivo de la carpeta.

3. **¿Qué diferencia hay entre los canales verde, naranja y rojo?**
   Verde: levante sin revisión. Naranja: un Vista revisa los documentos. Rojo: revisión documental y física. Los asigna la selectividad por análisis de riesgo.

4. **¿Qué tributos paga una importación desde China?**
   TGA según la NCM, Tasa Consular del 5%, TSA del 0,2% con tope de US$ 50, servicios extraordinarios, la tasa de escáner de 85 UI, IVA del 22% o 10% sobre CIF más TGA, y si el importador es contribuyente, el anticipo de IVA y eventualmente el de IRAE del 4%. IMESI si el producto lo tiene.

5. **¿Y desde Brasil?**
   Si hay prueba de origen del ACE 18, la TGA es 0%. Sigue la Tasa Consular del 3%, las tasas de servicio, el IVA y los anticipos.

6. **¿Cómo calculás el valor en aduana?**
   Con el método de transacción del Acuerdo de Valoración de la OMC: precio de factura más los ajustes del art. 8, más flete y seguro hasta Montevideo, o sea base CIF. Si no hay póliza, se usa el 1% del FOB.

7. **¿Qué es la NCM y cómo clasificás un producto?**
   Es la nomenclatura de 8 dígitos: SA más 2 dígitos del MERCOSUR. Aplico las RGI en orden, empezando por los textos de partida y las notas, y después consulto las notas explicativas, los dictámenes y el arancel integrado.

8. **¿Qué pasa si la DNA encuentra una diferencia en la verificación?**
   Emite una observación o una liquidación complementaria y puede configurarse una infracción aduanera. Hay que responder en plazo (5 días hábiles), y si se discute el monto, puede pedirse una garantía para liberar la mercadería.

9. **¿Qué documentos pedís al cliente para importar?**
   Factura comercial, documento de transporte, packing list, seguro, prueba de origen si hay preferencia, los permisos o certificados de VUCE que correspondan, el RUT y que esté al día con la DNA, DGI, BPS y BSE.

10. **¿Qué es la VUCE?**
    Es la Ventanilla Única de Comercio Exterior. Centraliza los trámites de los organismos (MSP, MGAP, LATU, URSEA…), y sus certificados se vinculan electrónicamente al DUA.

11. **¿Qué es el ACE 18?**
    Es el acuerdo de la ALADI que instrumenta el libre comercio del MERCOSUR. En el DUA se declara con el código de acuerdo 310 y requiere certificado o declaración de origen.

12. **Si un cliente quiere bajar costos de importación, ¿qué le sugerís?**
    Revisar la clasificación y las preferencias de origen (MERCOSUR, México, Chile, UE desde 2026), regímenes como la admisión temporaria si va a reexportar, consolidar embarques para diluir las tasas fijas y aprovechar las exoneraciones (bienes de capital, Ley de Inversiones), siempre dentro de la norma.

13. **¿Qué parte de los tributos es costo y qué parte se recupera?**
    Son costo la TGA, la Tasa Consular, las tasas de servicio y los honorarios. El IVA de importación y los anticipos de IVA y de IRAE son créditos para un contribuyente, y el IMESI anticipado se descuenta del IMESI de las ventas.

14. **¿Qué cambió en 2026 en comercio exterior?**
    El anticipo de IRAE quedó en 4% (Dec. 335/025). Hay un nuevo régimen de compras por internet: franquicia de US$ 800 por año y prestación única del 60% (Ley 20.446, Dec. 50/2026). Y el Acuerdo MERCOSUR–UE se aplica provisionalmente desde el 1 de mayo, con nuevos códigos de acuerdo y declaración de origen del exportador.

15. **¿Por qué querés trabajar en comex?**
    Respuesta personal. Conviene combinar interés por el rigor normativo, gusto por los números y la logística, y capacidad de trabajar bajo plazos con clientes y organismos.

---

## (d) 10 explicaciones ELI5 con analogías

1. **DUA:** es el “formulario de inscripción” de la mercadería para entrar al país. Dice quién la trae, qué es, cuánto vale y cuánto paga.
2. **LUCIA:** es el portero digital del edificio. Lee el formulario, le pone número y decide si pasás directo o te revisan.
3. **Canales:** como en un aeropuerto. Verde: pasás sin abrir la valija. Naranja: te piden los papeles. Rojo: te abren la valija y miran todo.
4. **Valor CIF:** es lo que cuesta “la caja puesta en la puerta de Uruguay”: el producto más el viaje más el seguro del viaje.
5. **Arancel (TGA):** es la “entrada” que se paga por traer algo de afuera del club MERCOSUR. Los socios del club no pagan entrada si muestran el carné, que es el certificado de origen.
6. **Tasa Consular:** es como un “cubierto” en el restaurante: lo pagás aunque no pidas plato principal. Hasta los socios del club pagan un poco (3%).
7. **IVA y anticipos:** es como dejar una seña. Pagás ahora en la aduana y, si sos empresa, después te lo descuentan de lo que le debés a la DGI.
8. **NCM:** es la dirección postal de un producto: país (capítulo), ciudad (partida), barrio (subpartida) y casa (ítem y subítem). Si te equivocás de dirección, pagás otro arancel.
9. **Despachante:** es el gestor con matrícula que hace el trámite por vos y además sale de garantía si falta pagar algo.
10. **Prueba de origen:** es el “pasaporte” del producto. Demuestra que nació en el MERCOSUR, la UE o México, y le da descuento en la entrada.

---

## Incertidumbres principales [VERIFICAR]

1. **Tasa Consular 2026:** la ley dice 5% y 3%, y no se encontró ningún decreto de reducción, pero no se pudo descartar del todo. Tampoco está claro su tratamiento para el origen UE después del 01/05/2026.
2. **Montos vigentes de servicios extraordinarios (TSE)** y vigencia de la **TCI / tasa BROU** y de la **TMB** en el DUA.
3. **Base del IVA:** la ley dice “VA + arancel”; algunas fuentes privadas incluyen otras tasas o el IMESI.
4. **Anexo del anticipo de IRAE 2026:** qué NCM incluye.
5. **IMESI de cosmética:** 10% por decreto, frente al tope legal del 20%.
6. **Tabla completa de regímenes y subregímenes de LUCIA**, incluidos los códigos de exportación y tránsito, y si existen las siglas IMPO, EXPO, TRAN y ADMT como códigos.
7. **Plazos y alícuotas de BK y BIT** para Uruguay en 2026.
8. **Honorarios y timbre del despachante en 2026.**
9. **Situación operativa de TCP y Montecon en 2026.**
10. **El significado de “AEC 18” y de “amortizaciones” en el curso.**

*Nota metodológica:* se agotó el cupo de búsquedas web antes de cerrar los puntos 6 y 7. Algunos PDF de aduanas.gub.uy y de la OMC no pudieron descargarse en forma directa; se leyeron mediante extracción automatizada.
