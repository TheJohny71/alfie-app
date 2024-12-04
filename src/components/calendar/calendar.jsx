import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { CalendarHeader } from './calendar-header'
import { CalendarGrid } from './calendar-grid'
import { CalendarControls } from './calendar-controls'

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [view, setView] = useState('month') // month, week, day

  const prevMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1))
  }

  const nextMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1))
  }

  return (
    <div className="bg-background rounded-lg shadow">
      <CalendarControls view={view} onViewChange={setView} />
      <CalendarHeader 
        date={currentDate}
        onPrevious={prevMonth}
        onNext={nextMonth}
      />
      <CalendarGrid 
        date={currentDate}
        view={view}
      />
    </div>
  )
}
