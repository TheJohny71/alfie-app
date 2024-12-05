// Copy everything between the ``` and paste into src/components/calendar/calendar-controls.jsx
import React from 'react'

export function CalendarControls({ view, onViewChange }) {
  const views = ['month', 'week', 'day']

  return (
    <div className="flex items-center justify-between p-6 border-b border-gray-200/10 dark:border-gray-800">
      <div className="flex items-center space-x-1 bg-gray-100/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-lg p-1">
        {views.map((v) => (
          <button
            key={v}
            onClick={() => onViewChange(v)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out
              ${view === v 
                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-gray-700/50'
              }`}
          >
            {v.charAt(0).toUpperCase() + v.slice(1)}
          </button>
        ))}
      </div>
      <button className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
        Today
      </button>
    </div>
  )
}
