import { ReactNode } from 'react'
import { DemoUser } from '@/lib/types'
import { SidebarNav } from '@/components/layout/sidebar-nav'
import { Topbar } from '@/components/layout/topbar'

export function AppShell({ user, children }: { user: DemoUser; children: ReactNode }) {
  return (
    <div className="app-shell">
      <SidebarNav user={user} />
      <div className="app-main">
        <Topbar user={user} />
        <main className="page-frame">{children}</main>
      </div>
    </div>
  )
}
