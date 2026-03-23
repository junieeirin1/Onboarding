import { statusLabel } from '@/lib/onboarding'
import { OnboardingTask } from '@/lib/types'

export function TaskSection({ title, tasks }: { title: string; tasks: OnboardingTask[] }) {
  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <h3>{title}</h3>
          <p className="muted">{tasks.length} task(s)</p>
        </div>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Responsible</th>
              <th>Assigned</th>
              <th>Due</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>
                  <strong>{task.title}</strong>
                  <div className="muted">{task.mandatory ? 'Mandatory' : 'Optional'}</div>
                </td>
                <td>{task.responsibleRole}</td>
                <td>{task.assigneeName ?? 'Unassigned'}</td>
                <td>{task.dueDate}</td>
                <td><span className={`status-chip status-${task.status}`}>{statusLabel(task.status)}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
