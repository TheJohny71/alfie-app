import { Clock, Battery } from 'lucide-react'

export function LeaveBalance() {
  const balances = {
    vacation: { total: 25, used: 15 },
    sick: { total: 10, used: 3 },
    personal: { total: 5, used: 1 }
  }

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {Object.entries(balances).map(([type, { total, used }]) => (
        <div key={type} className="rounded-lg border bg-card p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-medium capitalize">{type}</h3>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="mt-3">
            <div className="flex items-center justify-between text-sm">
              <span>{used} used</span>
              <span>{total - used} remaining</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary"
                style={{ width: `${(used / total) * 100}%` }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
