import { AppShell } from '@/components/layout/app-shell'
import { OnboardingTable } from '@/components/management/onboarding-table'
import { requireRole } from '@/lib/auth'
import { getManagerOnboardings } from '@/lib/onboarding'

export default async function ManagerOnboardingsPage() {
  const user = await requireRole(['manager', 'admin'])
  const records = getManagerOnboardings(user.id)

  return (
    <AppShell user={user}>
      <div className="page-header">
        <div>
          <p className="eyebrow">Manager workspace</p>
          <h1>My onboardings</h1>
          <p className="muted">Use this overview to track all onboarding cases assigned to you.</p>
        </div>
        <a className="primary-button" href="/manager/onboardings/new">Create onboarding</a>
      </div>
      <OnboardingTable records={records} basePath="/manager/onboardings" />
    </AppShell>
  )
}
