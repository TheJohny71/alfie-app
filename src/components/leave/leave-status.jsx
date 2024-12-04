export function LeaveStatus({ status }) {
  const statusStyles = {
    pending: "bg-warning/10 text-warning",
    approved: "bg-success/10 text-success",
    rejected: "bg-destructive/10 text-destructive"
  }

  return (
    <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[status] || ''}`}>
      {status}
    </div>
  )
}

export function LeaveStatusList() {
  const requests = [
    { id: 1, dates: "Dec 24-26", type: "Vacation", status: "approved" },
    { id: 2, dates: "Jan 2-3", type: "Personal", status: "pending" },
  ]

  return (
    <div className="space-y-4">
      <h3 className="font-semibold">Recent Requests</h3>
      <div className="divide-y rounded-md border">
        {requests.map((request) => (
          <div key={request.id} className="flex items-center justify-between p-4">
            <div>
              <p className="font-medium">{request.type}</p>
              <p className="text-sm text-muted-foreground">{request.dates}</p>
            </div>
            <LeaveStatus status={request.status} />
          </div>
        ))}
      </div>
    </div>
  )
}
