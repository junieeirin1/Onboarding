import { requireRole } from '@/lib/auth'
import { getOnboardings, completionPercent, overdueTasks } from '@/lib/onboarding'
import { KpiGrid } from '@/components/management/kpi-grid'
import { OnboardingTable } from '@/components/management/onboarding-table'
import { AppShell } from '@/components/layout/app-shell'

export default async function ManagementPage() {
  const user = await requireRole(['management', 'admin'])
  const records = getOnboardings()
  const allTasks = records.flatMap((record) => record.tasks)

  return (
    <AppShell user={user}>
      <div className="page-header">
        <div>
          <p className="eyebrow">Management dashboard</p>
          <h1>All onboardings</h1>
          <p className="muted">Track progress, risk, and delivery across departments.</p>
        </div>
      </div>
      <KpiGrid
        items={[
          { title: 'Total onboardings', value: String(records.length) },
          { title: 'Active', value: String(records.filter((record) => record.status !== 'completed').length) },
          { title: 'Blocked', value: String(records.filter((record) => record.status === 'blocked').length) },
          { title: 'Avg. completion', value: `${completionPercent(allTasks)}%`, helper: `${overdueTasks(allTasks).length} overdue tasks` },
        ]}
      />
      <OnboardingTable records={records} />
    </AppShell>
  )
}
