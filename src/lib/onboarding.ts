import { onboardings } from '@/data/demo-data'
import { OnboardingRecord, OnboardingTask, TaskStatus } from '@/lib/types'

export function getOnboardings(): OnboardingRecord[] {
  return onboardings
}

export function getOnboardingById(id: string): OnboardingRecord | undefined {
  return onboardings.find((item) => item.id === id)
}

export function getEmployeeOnboarding(email: string): OnboardingRecord | undefined {
  return onboardings.find((item) => item.employeeEmail === email)
}

export function getManagerOnboardings(managerId: string): OnboardingRecord[] {
  return onboardings.filter((item) => item.managerId === managerId)
}

export function completionPercent(tasks: OnboardingTask[]): number {
  const complete = tasks.filter((task) => task.status === 'done').length
  return tasks.length ? Math.round((complete / tasks.length) * 100) : 0
}

export function overdueTasks(tasks: OnboardingTask[]): OnboardingTask[] {
  const now = new Date('2026-04-10')
  return tasks.filter((task) => !['done'].includes(task.status) && new Date(task.dueDate) < now)
}

export function statusLabel(status: TaskStatus): string {
  return {
    not_started: 'Not started',
    assigned: 'Assigned',
    in_progress: 'In progress',
    done: 'Done',
    blocked: 'Blocked',
  }[status]
}

export function groupTasks(tasks: OnboardingTask[]): Array<{ section: string; tasks: OnboardingTask[] }> {
  const map = new Map<string, OnboardingTask[]>()
  tasks.forEach((task) => {
    const list = map.get(task.section) ?? []
    list.push(task)
    map.set(task.section, list)
  })
  return Array.from(map.entries()).map(([section, sectionTasks]) => ({ section, tasks: sectionTasks }))
}
