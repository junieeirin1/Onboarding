import { demoUsers } from '@/data/demo-data'

export default function LoginPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: 24 }}>
      <div className="panel" style={{ width: 'min(520px, 100%)' }}>
        <p className="eyebrow">HYCAST</p>
        <h1>Demo sign in</h1>
        <p className="muted">Choose one of the seeded user accounts to preview each onboarding interface.</p>
        <form action="/api/demo-login" method="post" className="form-grid" style={{ marginTop: 20 }}>
          <div className="field" style={{ gridColumn: '1 / -1' }}>
            <label htmlFor="email">User</label>
            <select id="email" name="email" defaultValue={demoUsers[0].email}>
              {demoUsers.map((user) => (
                <option key={user.email} value={user.email}>{user.name} — {user.role}</option>
              ))}
            </select>
          </div>
          <button className="primary-button" type="submit" style={{ gridColumn: '1 / -1' }}>Continue</button>
        </form>
      </div>
    </div>
  )
}
