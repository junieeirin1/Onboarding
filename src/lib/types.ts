export type UserRole = 'management' | 'manager' | 'employee' | 'admin'

export type OnboardingStatus = 'planned' | 'in_progress' | 'blocked' | 'completed'
export type TaskStatus = 'not_started' | 'assigned' | 'in_progress' | 'done' | 'blocked'

export type TaskAudience = 'shared' | 'employee'

export type DemoUser = {
  id: string
  name: string
  email: string
  role: UserRole
  department?: string
}

export type OnboardingTask = {
  id: string
  section: string
  title: string
  responsibleRole: string
  assigneeName?: string
  dueDate: string
  status: TaskStatus
  audience: TaskAudience
  mandatory: boolean
}

export type OnboardingRecord = {
  id: string
  employeeName: string
  employeeEmail: string
  jobTitle: string
  department: string
  managerId: string
  managerName: string
  startDate: string
  deadline: string
  status: OnboardingStatus
  tasks: OnboardingTask[]
}
