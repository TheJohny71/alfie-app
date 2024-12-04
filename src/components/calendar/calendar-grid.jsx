import { useState } from 'react'

export function CalendarGrid({ date, view }) {
  const [selectedDates, setSelectedDates] = useState([])

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const renderDays = () => {
    const days = []
    const daysInMonth = getDaysInMonth(date)
    const firstDay = getFirstDayOfMonth(date)

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 border-t border-l" />)
    }

    // Add cells for each day of the month
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
          className={`h-24 border-t border-l p-2 cursor-pointer transition-colors
            ${isSelected ? 'bg-primary/10' : 'hover:bg-accent'}`}
          onClick={() => handleDateClick(currentDate)}
        >
          <span className="text-sm font-medium">{day}</span>
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
    <div className="border-r border-b">
      <div className="grid grid-cols-7 text-sm">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="py-2 text-center font-medium">
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
