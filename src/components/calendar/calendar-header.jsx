import { ChevronLeft, ChevronRight } from 'lucide-react'

export function CalendarHeader({ date, onPrevious, onNext }) {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  return (
    <header className="flex items-center justify-between px-6 py-4">
      <h2 className="text-lg font-semibold text-foreground">
        {monthNames[date.getMonth()]} {date.getFullYear()}
      </h2>
      <div className="flex items-center space-x-2">
        <button
          onClick={onPrevious}
          className="p-2 hover:bg-accent rounded-full"
          aria-label="Previous month"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={onNext}
          className="p-2 hover:bg-accent rounded-full"
          aria-label="Next month"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}
