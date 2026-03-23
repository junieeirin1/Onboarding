import { DemoUser } from '@/lib/types'

export function Topbar({ user }: { user: DemoUser }) {
  return (
    <header className="topbar">
      <div>
        <p className="muted">Hycast onboarding platform</p>
        <strong>{user.role} workspace</strong>
      </div>
      <div className="topbar-user">
        <strong>{user.name}</strong>
        <span>{user.email}</span>
      </div>
    </header>
  )
}
