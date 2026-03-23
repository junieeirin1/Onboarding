import { AppShell } from '@/components/layout/app-shell'
import { KpiGrid } from '@/components/management/kpi-grid'
import { OnboardingTable } from '@/components/management/onboarding-table'
import { requireRole } from '@/lib/auth'
import { getManagerOnboardings, overdueTasks } from '@/lib/onboarding'

export default async function ManagerPage() {
  const user = await requireRole(['manager', 'admin'])
  const records = getManagerOnboardings(user.id)

  return (
    <AppShell user={user}>
      <div className="hero-card">
        <p className="eyebrow" style={{ color: 'rgba(255,255,255,.75)' }}>Manager workspace</p>
        <h1 style={{ marginTop: 0 }}>Welcome back, {user.name}</h1>
        <p>Manage onboarding progress for your new employees and follow up on overdue tasks.</p>
      </div>
      <KpiGrid items={[
        { title: 'My onboardings', value: String(records.length) },
        { title: 'Overdue tasks', value: String(overdueTasks(records.flatMap((record) => record.tasks)).length) },
        { title: 'Active employees', value: String(records.filter((record) => record.status !== 'completed').length) },
        { title: 'Due this month', value: String(records.length) },
      ]} />
      <OnboardingTable records={records} basePath="/manager/onboardings" />
    </AppShell>
  )
}
