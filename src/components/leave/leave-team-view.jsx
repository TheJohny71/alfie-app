import { Users } from 'lucide-react'

export function LeaveTeamView() {
  const teamMembers = [
    { id: 1, name: "Alex Thompson", status: "Available" },
    { id: 2, name: "Sarah Wilson", status: "On Leave", dates: "Dec 24-26" },
    { id: 3, name: "Mike Johnson", status: "Available" },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Users className="h-5 w-5" />
        <h2 className="text-lg font-semibold">Team Availability</h2>
      </div>
      <div className="divide-y rounded-md border">
        {teamMembers.map((member) => (
          <div key={member.id} className="flex items-center justify-between p-4">
            <div>
              <p className="font-medium">{member.name}</p>
              {member.dates && (
                <p className="text-sm text-muted-foreground">{member.dates}</p>
              )}
            </div>
            <span className={`text-sm ${
              member.status === "Available" ? "text-success" : "text-warning"
            }`}>
              {member.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
