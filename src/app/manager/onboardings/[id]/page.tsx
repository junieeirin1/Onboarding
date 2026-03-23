import { notFound } from 'next/navigation'
import { AppShell } from '@/components/layout/app-shell'
import { SummaryCard } from '@/components/onboarding/summary-card'
import { TaskSection } from '@/components/onboarding/task-section'
import { requireRole } from '@/lib/auth'
import { completionPercent, getOnboardingById, groupTasks, overdueTasks } from '@/lib/onboarding'

export default async function ManagerOnboardingDetail({ params }: { params: Promise<{ id: string }> }) {
  const user = await requireRole(['manager', 'admin'])
  const { id } = await params
  const record = getOnboardingById(id)
  if (!record || (user.role === 'manager' && record.managerId !== user.id)) notFound()

  return (
    <AppShell user={user}>
      <div className="page-header">
        <div>
          <p className="eyebrow">Manager workspace</p>
          <h1>{record.employeeName}</h1>
          <p className="muted">{record.department} · {record.jobTitle} · Start {record.startDate}</p>
        </div>
        <a className="primary-button" href="/manager/onboardings/new">Create another</a>
      </div>
      <div className="summary-grid">
        <SummaryCard title="Status" value={record.status.replace('_', ' ')} />
        <SummaryCard title="Progress" value={`${completionPercent(record.tasks)}%`} />
        <SummaryCard title="Overdue tasks" value={String(overdueTasks(record.tasks).length)} />
        <SummaryCard title="Deadline" value={record.deadline} />
      </div>
      {groupTasks(record.tasks).map((section) => (
        <TaskSection key={section.section} title={section.section} tasks={section.tasks} />
      ))}
    </AppShell>
  )
}
