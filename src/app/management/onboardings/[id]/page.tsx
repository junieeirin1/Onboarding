import { notFound } from 'next/navigation'
import { AppShell } from '@/components/layout/app-shell'
import { SummaryCard } from '@/components/onboarding/summary-card'
import { TaskSection } from '@/components/onboarding/task-section'
import { requireRole } from '@/lib/auth'
import { completionPercent, getOnboardingById, groupTasks, overdueTasks } from '@/lib/onboarding'

export default async function ManagementOnboardingDetail({ params }: { params: Promise<{ id: string }> }) {
  const user = await requireRole(['management', 'admin'])
  const { id } = await params
  const record = getOnboardingById(id)
  if (!record) notFound()
  const grouped = groupTasks(record.tasks)

  return (
    <AppShell user={user}>
      <div className="page-header">
        <div>
          <p className="eyebrow">Management detail</p>
          <h1>{record.employeeName}</h1>
          <p className="muted">{record.department} · {record.jobTitle} · Manager: {record.managerName}</p>
        </div>
      </div>
      <div className="summary-grid">
        <SummaryCard title="Status" value={record.status.replace('_', ' ')} />
        <SummaryCard title="Completion" value={`${completionPercent(record.tasks)}%`} />
        <SummaryCard title="Overdue tasks" value={String(overdueTasks(record.tasks).length)} />
        <SummaryCard title="Deadline" value={record.deadline} />
      </div>
      {grouped.map((section) => (
        <TaskSection key={section.section} title={section.section} tasks={section.tasks} />
      ))}
    </AppShell>
  )
}
