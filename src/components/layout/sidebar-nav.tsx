import Link from 'next/link'
import { DemoUser } from '@/lib/types'

function itemsForRole(role: DemoUser['role']) {
  switch (role) {
    case 'management':
      return [
        { href: '/management', label: 'Dashboard' },
        { href: '/management', label: 'All onboardings' },
      ]
    case 'manager':
      return [
        { href: '/manager', label: 'Overview' },
        { href: '/manager/onboardings', label: 'My onboardings' },
        { href: '/manager/onboardings/new', label: 'Create onboarding' },
      ]
    case 'employee':
      return [{ href: '/employee/onboarding', label: 'My onboarding' }]
    case 'admin':
      return [
        { href: '/admin/templates', label: 'Templates' },
        { href: '/management', label: 'Management dashboard' },
      ]
  }
}

export function SidebarNav({ user }: { user: DemoUser }) {
  return (
    <aside className="sidebar">
      <div className="brand-card">
        <p className="eyebrow">HYCAST</p>
        <h1>Onboarding</h1>
        <p className="muted">Internal introduction workflow</p>
      </div>
      <div className="profile-card">
        <strong>{user.name}</strong>
        <span>{user.email}</span>
        <span className="pill">{user.role}</span>
      </div>
      <nav className="nav-list">
        {itemsForRole(user.role).map((item) => (
          <Link key={item.href + item.label} href={item.href} className="nav-link">
            {item.label}
          </Link>
        ))}
      </nav>
      <form action="/api/demo-logout" method="post">
        <button className="secondary-button" type="submit">Sign out</button>
      </form>
    </aside>
  )
}
