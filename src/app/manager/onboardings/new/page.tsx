import { AppShell } from '@/components/layout/app-shell'
import { requireRole } from '@/lib/auth'

export default async function ManagerNewOnboardingPage() {
  const user = await requireRole(['manager', 'admin'])

  return (
    <AppShell user={user}>
      <div className="page-header">
        <div>
          <p className="eyebrow">Manager workspace</p>
          <h1>Create onboarding</h1>
          <p className="muted">This scaffold includes the form layout and role-based route. Hook it to persistence next.</p>
        </div>
      </div>
      <form className="panel form-grid">
        <div className="field">
          <label htmlFor="employee">Employee name</label>
          <input id="employee" placeholder="e.g. Jane Doe" />
        </div>
        <div className="field">
          <label htmlFor="email">Employee email</label>
          <input id="email" type="email" placeholder="jane.doe@hycast.com" />
        </div>
        <div className="field">
          <label htmlFor="department">Department</label>
          <select id="department">
            <option>Technology & Sustainability</option>
            <option>Sales & Marketing</option>
            <option>Engineering</option>
            <option>Finance & HSEQ</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="startDate">Start date</label>
          <input id="startDate" type="date" />
        </div>
        <div className="field" style={{ gridColumn: '1 / -1' }}>
          <label htmlFor="notes">Manager notes</label>
          <input id="notes" placeholder="Optional welcome or setup notes" />
        </div>
        <div style={{ gridColumn: '1 / -1', display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
          <a className="secondary-button" href="/manager/onboardings">Cancel</a>
          <button className="primary-button" type="button">Save draft</button>
        </div>
      </form>
    </AppShell>
  )
}
