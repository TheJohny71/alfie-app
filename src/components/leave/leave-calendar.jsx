import { Calendar } from '../calendar/calendar'

export function LeaveCalendar() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Team Calendar</h2>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-primary mr-2" />
            <span>Approved</span>
          </div>
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-warning mr-2" />
            <span>Pending</span>
          </div>
        </div>
      </div>
      <Calendar />
    </div>
  )
}
