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

  const renderDays = () => {
    const days = []
    const daysInMonth = getDaysInMonth(date)
    const firstDay = getFirstDayOfMonth(date)

    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div 
          key={`empty-${i}`} 
          className="h-32 border-b border-r border-border/10 dark:border-border/10" 
        />
      )
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = new Date(date.getFullYear(), date.getMonth(), day)
      const isSelected = selectedDates.some(d => 
        d.getDate() === currentDate.getDate() &&
        d.getMonth() === currentDate.getMonth() &&
        d.getFullYear() === currentDate.getFullYear()
      )

      days.push(
        <div
          key={day}
          className={`relative h-32 border-b border-r border-border/10 dark:border-border/10 p-2 transition-colors
            ${isSelected ? 'bg-primary/5' : 'hover:bg-accent'}`}
          onClick={() => handleDateClick(currentDate)}
        >
          <div className="relative z-10">
            <span className={`
              inline-flex h-8 w-8 items-center justify-center rounded-full text-sm
              ${isToday(currentDate) ? 'bg-primary text-primary-foreground font-medium' : 
                'text-foreground group-hover:bg-background'}`}
            >
              {day}
            </span>
          </div>
          
          <div className="mt-2 space-y-1">
            <div className="h-1.5 w-8 rounded-full bg-primary/20" />
          </div>
        </div>
      )
    }

    return days
  }

  return (
    <div className="border-t border-l border-border/10 dark:border-border/10">
      <div className="grid grid-cols-7">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="py-3 text-center text-sm font-medium text-muted-foreground border-b border-r border-border/10">
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
