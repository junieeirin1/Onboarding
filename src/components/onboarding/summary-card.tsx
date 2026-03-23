export function SummaryCard({ title, value, helper }: { title: string; value: string; helper?: string }) {
  return (
    <div className="summary-card">
      <p className="muted">{title}</p>
      <strong>{value}</strong>
      {helper ? <span>{helper}</span> : null}
    </div>
  )
}
