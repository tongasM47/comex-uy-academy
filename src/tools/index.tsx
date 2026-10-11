import type { ToolId } from '../data/types'
import { IncotermsVisualizer } from './IncotermsVisualizer'
import { ImportCalculator } from './ImportCalculator'
import { VolumetricCalculator } from './VolumetricCalculator'
import { PaymentFlows } from './PaymentFlows'
import { SequenceTimeline } from './SequenceTimeline'

// eslint-disable-next-line react-refresh/only-export-components
export const toolTitles: Record<ToolId, string> = {
  'incoterms-visualizer': 'Incoterms: costos y riesgo',
  'import-calculator': 'Calculadora de importación',
  'volumetric-calculator': 'Peso volumétrico y cubicaje',
  'payment-flows': 'Flujos de pago internacional',
  'import-sequence': 'Secuencia de una importación',
  'export-sequence': 'Secuencia de una exportación',
}

export function ToolEmbed({ id }: { id: ToolId }) {
  switch (id) {
    case 'incoterms-visualizer':
      return <IncotermsVisualizer />
    case 'import-calculator':
      return <ImportCalculator />
    case 'volumetric-calculator':
      return <VolumetricCalculator />
    case 'payment-flows':
      return <PaymentFlows />
    case 'import-sequence':
      return <SequenceTimeline kind="import" />
    case 'export-sequence':
      return <SequenceTimeline kind="export" />
  }
}
