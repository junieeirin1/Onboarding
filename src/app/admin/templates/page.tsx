import { AppShell } from '@/components/layout/app-shell'
import { requireRole } from '@/lib/auth'

export default async function AdminTemplatesPage() {
  const user = await requireRole(['admin'])

  return (
    <AppShell user={user}>
      <div className="page-header">
        <div>
          <p className="eyebrow">Admin workspace</p>
          <h1>Onboarding templates</h1>
          <p className="muted">This starter page is ready for template versioning and checklist administration.</p>
        </div>
      </div>
      <div className="panel list-card">
        <div>
          <strong>Hycast Employee Onboarding</strong>
          <div className="muted">Version 1 · Published</div>
        </div>
        <div className="muted">Sections included: General, Technology & Bærekraft, Sales & Marketing, Finance & HSEQ, Welcome package.</div>
      </div>
    </AppShell>
  )
}
