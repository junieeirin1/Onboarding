import { DemoUser, OnboardingRecord, OnboardingStatus, TaskStatus } from '@/lib/types'

export const demoUsers: DemoUser[] = [
  { id: 'mgmt-1', name: 'Management Team', email: 'management@hycast.local', role: 'management' },
  { id: 'mgr-1', name: 'Tech Manager', email: 'manager.tech@hycast.local', role: 'manager', department: 'Technology & Sustainability' },
  { id: 'mgr-2', name: 'Sales Manager', email: 'manager.sales@hycast.local', role: 'manager', department: 'Sales & Marketing' },
  { id: 'emp-1', name: 'New Hire', email: 'employee.newhire@hycast.local', role: 'employee', department: 'Technology & Sustainability' },
  { id: 'admin-1', name: 'Hycast Admin', email: 'admin@hycast.local', role: 'admin' },
]

const task = (
  id: string,
  section: string,
  title: string,
  responsibleRole: string,
  assigneeName: string | undefined,
  dueDate: string,
  status: TaskStatus,
  audience: 'shared' | 'employee' = 'shared',
  mandatory = true,
) => ({ id, section, title, responsibleRole, assigneeName, dueDate, status, audience, mandatory })

export const onboardings: OnboardingRecord[] = [
  {
    id: 'ob-1001',
    employeeName: 'New Hire',
    employeeEmail: 'employee.newhire@hycast.local',
    jobTitle: 'Graduate Engineer',
    department: 'Technology & Sustainability',
    managerId: 'mgr-1',
    managerName: 'Tech Manager',
    startDate: '2026-04-01',
    deadline: '2026-04-30',
    status: 'in_progress',
    tasks: [
      task('t-1', 'General', 'Arbeidsreglement', 'Department Manager', 'Tech Manager', '2026-04-02', 'done', 'employee'),
      task('t-2', 'General', 'Hycast organisasjon', 'Department Manager', 'Tech Manager', '2026-04-05', 'in_progress', 'employee'),
      task('t-3', 'General', 'HMS/Compliance', 'HSEQ Manager', 'HSEQ Manager', '2026-04-05', 'assigned'),
      task('t-4', 'Technology & Bærekraft', 'Hycast sine produkter', 'Head of Technology & Sustainability', 'Tech Manager', '2026-04-14', 'assigned'),
      task('t-5', 'Technology & Bærekraft', 'Hycast sin bærekraftstrategi', 'Head of Technology & Sustainability', undefined, '2026-04-21', 'not_started'),
      task('t-6', 'Welcome package', 'Hycast drikkeflaske', 'Department Manager', 'Tech Manager', '2026-04-01', 'done', 'employee', false),
    ],
  },
  {
    id: 'ob-1002',
    employeeName: 'Sales Recruit',
    employeeEmail: 'sales.recruit@hycast.local',
    jobTitle: 'Sales Engineer',
    department: 'Sales & Marketing',
    managerId: 'mgr-2',
    managerName: 'Sales Manager',
    startDate: '2026-03-15',
    deadline: '2026-04-14',
    status: 'blocked',
    tasks: [
      task('t-7', 'General', 'IT', 'IS/IT Responsible', 'IT Responsible', '2026-03-15', 'done'),
      task('t-8', 'Sales & Marketing', 'Kunder/markedsområde/konkurrenter', 'Head of Sales & Marketing', 'Sales Manager', '2026-03-25', 'blocked'),
      task('t-9', 'Sales & Marketing', 'Tilbudsarbeid i Hycast', 'Head of Sales & Marketing', 'Sales Manager', '2026-03-28', 'in_progress'),
    ],
  },
]

export const onboardingStatuses: Array<{ value: OnboardingStatus; label: string }> = [
  { value: 'planned', label: 'Planned' },
  { value: 'in_progress', label: 'In progress' },
  { value: 'blocked', label: 'Blocked' },
  { value: 'completed', label: 'Completed' },
]
