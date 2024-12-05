// Copy everything between the ``` and paste into src/components/calendar/calendar-grid.jsx
import React, { useState } from 'react'

export function CalendarGrid({ date, view }) {
  const [selectedDates, setSelectedDates] = useState([])

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const isToday = (date) => {
    const today = new Date()
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear()
  }

  const renderDays = () => {
    const days = []
    const daysInMonth = getDaysInMonth(date)
    const firstDay = getFirstDayOfMonth(date)
    const today = new Date()

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div 
          key={`empty-${i}`} 
          className="h-24 border-b border-r border-gray-100 dark:border-gray-800/50" 
        />
      )
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = new Date(date.getFullYear(), date.getMonth(), day)
      const isCurrentDay = isToday(currentDate)
      const isSelected = selectedDates.some(d => 
        d.getDate() === currentDate.getDate() &&
        d.getMonth() === currentDate.getMonth() &&
        d.getFullYear() === currentDate.getFullYear()
      )

      days.push(
        <div
          key={day}
          className={`relative h-24 border-b border-r border-gray-100 dark:border-gray-800/50 p-2 
            transition-colors duration-200 group
            ${isSelected ? 'bg-purple-50/50 dark:bg-purple-900/20' : 
              'hover:bg-gray-50 dark:hover:bg-gray-800/50'}`}
          onClick={() => handleDateClick(currentDate)}
        >
          <div className="relative z-10">
            <span className={`
              inline-flex items-center justify-center w-8 h-8 rounded-full text-sm
              ${isCurrentDay ? 'bg-purple-600 text-white font-medium' : 
                'text-gray-900 dark:text-gray-300 group-hover:bg-white dark:group-hover:bg-gray-700 group-hover:shadow-sm'}
            `}>
              {day}
            </span>
          </div>
          
          {/* Event indicators */}
          <div className="mt-2 space-y-1">
            <div className="h-1.5 w-8 rounded-full bg-purple-200 dark:bg-purple-800/50" />
          </div>
        </div>
      )
    }

    return days
  }

  const handleDateClick = (clickedDate) => {
    setSelectedDates(prev => {
      const isSelected = prev.some(d => 
        d.getDate() === clickedDate.getDate() &&
        d.getMonth() === clickedDate.getMonth() &&
        d.getFullYear() === clickedDate.getFullYear()
      )
      
      if (isSelected) {
        return prev.filter(d => 
          d.getDate() !== clickedDate.getDate() ||
          d.getMonth() !== clickedDate.getMonth() ||
          d.getFullYear() !== clickedDate.getFullYear()
        )
      }
      return [...prev, clickedDate]
    })
  }

  return (
    <div className="border-t border-l border-gray-100 dark:border-gray-800/50">
      <div className="grid grid-cols-7">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div 
            key={day} 
            className="py-3 text-center text-sm font-medium text-gray-500 dark:text-gray-400 border-b border-r border-gray-100 dark:border-gray-800/50"
          >
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7">
        {renderDays()}
      </div>
    </div>
  )
}
