import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { demoUsers } from '@/data/demo-data'
import { DemoUser, UserRole } from '@/lib/types'

export async function getCurrentUser(): Promise<DemoUser | null> {
  const store = await cookies()
  const email = store.get('hycast_user')?.value
  if (!email) return null
  return demoUsers.find((user) => user.email === email) ?? null
}

export async function requireUser(): Promise<DemoUser> {
  const user = await getCurrentUser()
  if (!user) redirect('/login')
  return user
}

export async function requireRole(roles: UserRole[]): Promise<DemoUser> {
  const user = await requireUser()
  if (!roles.includes(user.role)) redirect('/')
  return user
}
