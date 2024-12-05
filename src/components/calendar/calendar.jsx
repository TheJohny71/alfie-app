// Copy everything between the ``` and paste into src/components/calendar/calendar.jsx
import React, { useState } from 'react'
import { CalendarHeader } from './calendar-header'
import { CalendarGrid } from './calendar-grid'
import { CalendarControls } from './calendar-controls'

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [view, setView] = useState('month')

  const prevMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1))
  }

  const nextMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1))
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl shadow-gray-200/20 dark:shadow-none overflow-hidden">
      <div className="backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 sticky top-0 z-10">
        <CalendarControls view={view} onViewChange={setView} />
        <CalendarHeader 
          date={currentDate}
          onPrevious={prevMonth}
          onNext={nextMonth}
        />
      </div>
      <CalendarGrid 
        date={currentDate}
        view={view}
      />
    </div>
  )
}
