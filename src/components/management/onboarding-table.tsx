import Link from 'next/link'
import { OnboardingRecord } from '@/lib/types'
import { completionPercent } from '@/lib/onboarding'

export function OnboardingTable({ records, basePath = '/management/onboardings' }: { records: OnboardingRecord[]; basePath?: string }) {
  return (
    <div className="panel table-wrap">
      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Department</th>
            <th>Manager</th>
            <th>Status</th>
            <th>Progress</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td>
                <strong>{record.employeeName}</strong>
                <div className="muted">{record.jobTitle}</div>
              </td>
              <td>{record.department}</td>
              <td>{record.managerName}</td>
              <td><span className={`status-chip status-${record.status}`}>{record.status.replace('_', ' ')}</span></td>
              <td>{completionPercent(record.tasks)}%</td>
              <td><Link className="inline-link" href={`${basePath}/${record.id}`}>View</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
