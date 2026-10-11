import type { DocSpecimen } from '../types'
import { fld, IMP, IMP_BANK, BR } from './shared'

export const letraCambio: DocSpecimen = {
  id: 'letra-cambio',
  title: "Letra de cambio (giro comercial)",
  subtitle: "Bill of exchange / draft · la orden de pago que el importador acepta en una cobranza D/A",
  description:
    "La letra de cambio es un **título de crédito** por el cual el **librador** le ordena al **librado** pagar una suma a un **beneficiario o tomador** en una fecha, a la vista o a plazo. En comercio exterior aparece en la **cobranza documentaria D/A** (documentos contra aceptación): el importador **acepta** la letra y recibe los documentos para retirar la mercadería, y paga al vencimiento. También se usa en cartas de crédito por aceptación o negociación. Un banco puede **avalarla**, lo que la hace descontable.",
  scenario:
    `Variante de pago de la operación con Brasil: en lugar de pagar por adelantado, ${BR.exporter} acepta cobrar por **cobranza documentaria D/A a 60 días** de la fecha de factura. Su banco manda la factura ${BR.invoice}, el CRT, el certificado de origen y esta letra a ${IMP_BANK.name}, que se la presenta a ${IMP.name}. El importador la acepta, recibe los documentos y paga el ${BR.dueDate}.`,
  sections: [
    {
      title: "Datos de la letra",
      fields: [
        fld(1, "Lugar y fecha de libramiento", `São Paulo, ${BR.invoiceDate}`,
          "Dónde y cuándo se emite. En una cobranza suele coincidir con la fecha de la factura.",
          4),
        fld(2, "Número de la letra", "Letra N.º 1/1 (ficticia)",
          "Identificación de la letra. Si hay varias cuotas, se numeran (1/3, 2/3…).",
          4),
        fld(3, "Importe en números", BR.invoiceTotal,
          "El monto a pagar. Tiene que coincidir con la factura que acompaña la cobranza (acá, el precio CPT con flete incluido).",
          4, ["USD 10.000,00", "USD 10.860,00", "USD 1.080,00"], 0),
        fld(4, "Vencimiento", `A 60 días de la fecha de factura (${BR.dueDate})`,
          "Cuándo se paga. “A la vista” es al presentarla; “a X días vista” se cuenta desde la aceptación; “a X días fecha” desde la emisión o la factura. Acá, 60 días desde el 02/09/2026 dan el 01/11/2026.",
          12, ["A la vista", "A 60 días vista (desde la aceptación)", "A 90 días de la fecha de factura (01/12/2026)"], 0),
      ],
    },
    {
      title: "Orden de pago",
      fields: [
        fld(5, "Orden y beneficiario (tomador)", `Páguese a la orden de ${BR.bank}`,
          "A quién se paga. En una cobranza el tomador suele ser el banco del exportador, que después le acredita el cobro al exportador.",
          6, [`Páguese a la orden de ${IMP.name}`, "Páguese al portador", `Páguese a la orden de ${BR.carrier}`], 0),
        fld(6, "Importe en letras", "Diez mil ochocientos dólares estadounidenses",
          "El importe escrito en palabras. Si no coincide con el importe en números, se genera un problema de interpretación: revisalo siempre.",
          6, ["Diez mil dólares estadounidenses", "Diez mil ochocientos sesenta dólares estadounidenses", "Mil ochenta dólares estadounidenses"], 0),
        fld(7, "Valor recibido / referencia", `Valor en mercaderías según factura ${BR.invoice}`,
          "La causa de la letra: la venta documentada en la factura.",
          12),
      ],
    },
    {
      title: "Partes",
      fields: [
        fld(8, "Librado (girado)", `${IMP.name} · ${IMP.address}`,
          "Quien tiene que pagar: el importador. En la cobranza, el banco presentador le muestra los documentos y la letra.",
          6, [`${BR.exporter} · São Paulo`, `${IMP_BANK.name} · Montevideo`, `${BR.bank}`], 0),
        fld(9, "Lugar de pago", "Montevideo, Uruguay, por intermedio del banco presentador",
          "Dónde se paga la letra al vencimiento.",
          6),
        fld(10, "Librador (firma)", `${BR.exporter} · firma autorizada`,
          "Quien emite la letra y da la orden de pago: el exportador.",
          6, [`${IMP.name} · firma autorizada`, `${IMP_BANK.name} · firma`, `${BR.carrier} · firma`], 0),
        fld(11, "Aceptación del librado", `ACEPTADA · ${IMP.name} · firma y fecha`,
          "Al firmar la aceptación, el importador se obliga a pagar al vencimiento. En D/A, con esta firma el banco le entrega los documentos y puede retirar la mercadería.",
          6),
        fld(12, "Aval (opcional)", "Sin aval",
          "Un banco puede avalar la letra y garantizar el pago. Una letra avalada se puede descontar (forfaiting). Si el exportador desconfía del importador, puede pedir el aval.",
          12),
      ],
    },
  ],
  notes: [
    "En la cobranza los bancos **no garantizan el pago**: solo son mandatarios. Si el importador acepta y después no paga, el riesgo es del exportador.",
    "Si la instrucción de cobranza lo prevé, una letra impaga se puede **protestar**; también se puede reclamar al seguro de crédito si se contrató.",
    "Si la cobranza no dice D/P ni D/A y trae una letra a plazo, la URC 522 manda entregar los documentos **contra pago** por defecto.",
    "Controlá que el importe en números y en letras coincidan con la factura, y que el vencimiento esté bien calculado.",
    "Los requisitos formales de la letra según la ley uruguaya de títulos valores no se cubren en este modelo: confirmalos con el banco o un abogado.",
  ],
  sources: [
    { title: "ICC, URC 522", url: "https://iccwbo.org/business-solutions/banking-finance/urc-522/" },
    { title: "ICC, texto de las URC 522 (PDF)", url: "https://iccwbo.org/wp-content/uploads/sites/3/2019/06/icc-uniform-rules-for-collections-v1-0.pdf" },
    { title: "BCU", url: "https://www.bcu.gub.uy" },
  ],
}
