import { redirect } from 'next/navigation'
import { getCurrentUser } from '@/lib/auth'

export default async function HomePage() {
  const user = await getCurrentUser()
  if (!user) redirect('/login')

  switch (user.role) {
    case 'management':
      redirect('/management')
    case 'manager':
      redirect('/manager')
    case 'employee':
      redirect('/employee/onboarding')
    case 'admin':
      redirect('/admin/templates')
  }
}
