import type { DocSpecimen } from '../types'
import { fld, IMP, CN } from './shared'

export const facturaComercial: DocSpecimen = {
  id: 'factura-comercial',
  title: "Factura comercial",
  subtitle: "Commercial invoice · el comprobante de la compraventa y la base del valor en aduana",
  description:
    "El Código Aduanero (Ley 19.276, art. 2) define la factura comercial como el documento **emitido por el exportador** que detalla las mercaderías de cada embarque por precio y nombre comercial. Prueba la compraventa y el **precio de transacción**, que es el punto de partida del valor en aduana. Es documento obligatorio del DUA de importación: el despachante la digitaliza y la transmite por LUCIA. No hay una resolución de la DNA con una lista cerrada de campos, pero la práctica coincide en los que ves en este modelo.",
  scenario:
    `Es la factura definitiva del embarque de vasos que ${CN.exporter} le vende a ${IMP.name}. Se emitió al embarcar el contenedor y repite los números de la pro-forma ${CN.proforma}: ${CN.totalQty} por ${CN.totalUsd}, **${CN.incotermShort}**, pagadera por la carta de crédito ${CN.lc}.`,
  sections: [
    {
      title: "Encabezado",
      fields: [
        fld(1, "Título", "COMMERCIAL INVOICE / FACTURA COMERCIAL",
          "Identifica el documento como factura definitiva. Con carta de crédito, la UCP 600 (art. 18) pide que la emita el beneficiario a nombre del ordenante y en la moneda del crédito.",
          6),
        fld(2, "Número y fecha", `${CN.invoice} · ${CN.invoiceDate}`,
          "Número de factura del exportador y fecha. El número se repite en el certificado de origen, el packing list y el DUA; si no coincide, salta en el control documental.",
          6, [`${CN.proforma} · ${CN.proformaDate}`, `${CN.invoice} · ${CN.proformaDate}`, `${CN.bl} · ${CN.onBoard}`], 0),
        fld(3, "Referencias", `Pro-forma ${CN.proforma} · Carta de crédito ${CN.lc}`,
          "Se citan la pro-forma y, si la exige el crédito, su número. Ayuda al banco y al despachante a vincular toda la carpeta.",
          12),
      ],
    },
    {
      title: "Partes",
      fields: [
        fld(4, "Vendedor / exportador", `${CN.exporter} · ${CN.address}`,
          "Nombre y domicilio del vendedor. Tiene que ser el mismo que figura como beneficiario del crédito y, en general, como embarcador del B/L.",
          6, [`${IMP.name} · ${IMP.address}`, `${CN.carrier} · Ningbo`, "Ejemplo Trading Ltd. · Hong Kong"], 0),
        fld(5, "Comprador / importador", `${IMP.name} · ${IMP.address} · RUT ${IMP.rut}`,
          "Nombre, domicilio y RUT del comprador. Debe coincidir con el titular del DUA: si la factura sale a nombre de otra empresa, la aduana va a pedir explicaciones.",
          6, [`${IMP.name} · RUT 21 000000 0002`, `${CN.exporter} · ${CN.address}`, "Distribuidora Ejemplo (consumidor final)"], 0),
      ],
    },
    {
      title: "Detalle de la mercadería",
      fields: [
        fld(6, "Ítem 1: descripción", CN.i1.desc,
          "Nombre comercial, material, capacidad y modelo. La descripción en la factura tiene que corresponder exactamente a la del crédito (UCP 600, art. 14.e); en los otros documentos puede ser más general.",
          6),
        fld(7, "Ítem 1: cantidad × precio = total", "15.000 un × USD 0,70 = USD 10.500,00",
          "Cantidad, precio unitario y total del ítem. Un ítem por mercadería: no se agrupan productos distintos aunque compartan partida.",
          6, ["15.000 un × USD 0,95 = USD 14.250,00", "10.000 un × USD 0,70 = USD 7.000,00", "15.000 un × USD 0,70 = USD 10.050,00"], 0),
        fld(8, "Ítem 2: descripción", CN.i2.desc,
          "Mismo criterio que el ítem 1. Si dos modelos tienen distinta capacidad o precio, van en líneas separadas.",
          6),
        fld(9, "Ítem 2: cantidad × precio = total", "10.000 un × USD 0,95 = USD 9.500,00",
          "Verificá siempre la multiplicación. Un error aritmético en la factura es una discrepancia en el banco y una duda de valor en la aduana.",
          6),
        fld(10, "Total de la factura", `${CN.totalUsd} (veinte mil dólares estadounidenses)`,
          "Suma de los ítems, en números y en letras. Es el precio de transacción: el despachante le suma flete y seguro para llegar al valor en aduana base CIF.",
          8, ["USD 22.700,00 (veintidós mil setecientos)", "USD 19.500,00 (diecinueve mil quinientos)", "USD 20.200,00 (veinte mil doscientos)"], 0),
        fld(11, "Moneda", "USD",
          "La moneda del contrato y del crédito. En el DUA la moneda es única por declaración.",
          4),
      ],
    },
    {
      title: "Condiciones comerciales",
      fields: [
        fld(12, "Incoterm® 2020 y lugar", CN.incoterm,
          "Define qué gastos están incluidos en el precio. Con FCA, el flete marítimo y el seguro los paga el comprador, así que el despachante tiene que sumarlos para armar el CIF.",
          12, ["CIF Montevideo, Incoterms® 2020", "FOB Puerto de Ningbo, Incoterms® 2020", "FCA Puerto de Ningbo (sin versión)"], 0),
        fld(13, "País de origen", "China",
          "País donde se produjo la mercadería. En la importación determina si hay preferencia; con China se aplica el arancel general.",
          4, ["Uruguay", "Hong Kong", "Brasil"], 0),
        fld(14, "Forma de pago", `Carta de crédito irrevocable a la vista ${CN.lc}`,
          "Cómo se paga. Debe coincidir con lo pactado en la pro-forma y con el crédito emitido.",
          8),
        fld(15, "Puertos y medio de transporte", `Ningbo → Montevideo · buque ${CN.vessel}`,
          "Origen, destino y medio. Tienen que ser los mismos que en el B/L y en el crédito.",
          6),
        fld(16, "Bultos, marcas y pesos", `${CN.cartons} · ${CN.marks} · neto ${CN.net} · bruto ${CN.gross}`,
          "Bultos, marcas y pesos totales. El detalle por caja va en el packing list; los totales tienen que coincidir con él y con el B/L.",
          6, [`550 cajas · DE / MVD / 1-550 · neto ${CN.gross} · bruto ${CN.net}`, `300 cajas · DE / MVD / 1-300 · neto 4.500 kg`, `1 contenedor · sin marcas · bruto 9.160 kg`], 0),
      ],
    },
    {
      title: "Declaración y firma",
      fields: [
        fld(17, "Declaración y firma del exportador", "We certify this invoice is true and correct · firma y sello",
          "Firma de quien emite. La UCP 600 dice que con carta de crédito la factura no necesita firma salvo que el crédito la pida; para la aduana uruguaya, conviene confirmar con el despachante si se exige firma manuscrita.",
          12),
      ],
    },
  ],
  notes: [
    "Compará siempre factura, packing list, B/L y certificado de origen: **número de factura, cantidades, pesos y descripción** tienen que coincidir.",
    "Si la factura no indica el Incoterm, pedí una corrección o una nota aclaratoria: sin Incoterm no se sabe qué gastos integran el valor en aduana.",
    "El flete y el seguro, si están incluidos, conviene que vengan **discriminados**. Así se ve qué parte del precio es mercadería y qué parte es transporte.",
    "Con carta de crédito, la descripción de la mercadería en la factura tiene que corresponder a la del crédito. Es una de las discrepancias más frecuentes.",
    "El número de copias exigidas, la firma manuscrita y la traducción son puntos que conviene confirmar con el despachante o en el procedimiento de DUA digital de la DNA.",
    "La factura comercial no “vence” como la pro-forma: es el comprobante definitivo de la venta.",
  ],
  sources: [
    { title: "Código Aduanero (Ley 19.276), IMPO", url: "https://www.impo.com.uy/bases/codigo-aduanero/19276-2014" },
    { title: "Decreto-Ley 10.314, art. 18 (antecedente)", url: "https://impo.com.uy/bases/decretos-ley/10314-1943/18" },
    { title: "DNA, procedimiento DUA digital – importación", url: "https://www.aduanas.gub.uy/innovaportal/file/9989/1/procedimiento_de_importacion_dua_digital.pdf" },
    { title: "trade.gov, Uruguay Import Requirements and Documentation", url: "https://www.trade.gov/country-commercial-guides/uruguay-import-requirements-and-documentation" },
  ],
}
