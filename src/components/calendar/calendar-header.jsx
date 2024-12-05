// Copy everything between the ``` and paste into src/components/calendar/calendar-header.jsx
import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function CalendarHeader({ date, onPrevious, onNext }) {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  return (
    <header className="flex items-center justify-between px-6 py-4">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white tracking-tight">
        {monthNames[date.getMonth()]} {date.getFullYear()}
      </h2>
      <div className="flex items-center space-x-1">
        <button
          onClick={onPrevious}
          className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          aria-label="Previous month"
        >
          <ChevronLeft className="h-5 w-5 stroke-2" />
        </button>
        <button
          onClick={onNext}
          className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          aria-label="Next month"
        >
          <ChevronRight className="h-5 w-5 stroke-2" />
        </button>
      </div>
    </header>
  )
}
