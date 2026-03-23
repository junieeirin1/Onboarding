import { SummaryCard } from '@/components/onboarding/summary-card'

export function KpiGrid({ items }: { items: Array<{ title: string; value: string; helper?: string }> }) {
  return (
    <div className="summary-grid">
      {items.map((item) => (
        <SummaryCard key={item.title} {...item} />
      ))}
    </div>
  )
}
