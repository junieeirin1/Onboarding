import { notFound } from 'next/navigation'
import { AppShell } from '@/components/layout/app-shell'
import { SummaryCard } from '@/components/onboarding/summary-card'
import { TaskSection } from '@/components/onboarding/task-section'
import { requireRole } from '@/lib/auth'
import { completionPercent, getEmployeeOnboarding, groupTasks, overdueTasks } from '@/lib/onboarding'

export default async function EmployeeOnboardingPage() {
  const user = await requireRole(['employee', 'admin'])
  const record = getEmployeeOnboarding(user.email)
  if (!record) notFound()
  const visibleTasks = record.tasks

  return (
    <AppShell user={user}>
      <div className="hero-card">
        <p className="eyebrow" style={{ color: 'rgba(255,255,255,.75)' }}>Employee onboarding</p>
        <h1 style={{ marginTop: 0 }}>Welcome to Hycast, {record.employeeName}</h1>
        <p>Your onboarding plan is grouped by section and tracks the mandatory tasks for your first month.</p>
      </div>
      <div className="summary-grid">
        <SummaryCard title="Progress" value={`${completionPercent(visibleTasks)}%`} />
        <SummaryCard title="Status" value={record.status.replace('_', ' ')} />
        <SummaryCard title="Overdue tasks" value={String(overdueTasks(visibleTasks).length)} />
        <SummaryCard title="Deadline" value={record.deadline} />
      </div>
      {groupTasks(visibleTasks).map((section) => (
        <TaskSection key={section.section} title={section.section} tasks={section.tasks} />
      ))}
    </AppShell>
  )
}
