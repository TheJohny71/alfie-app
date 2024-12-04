export function CalendarControls({ view, onViewChange }) {
  const views = ['month', 'week', 'day']

  return (
    <div className="flex items-center space-x-2 p-4 border-b">
      {views.map((v) => (
        <button
          key={v}
          onClick={() => onViewChange(v)}
          className={`px-3 py-1 rounded-md text-sm font-medium capitalize
            ${view === v 
              ? 'bg-primary text-primary-foreground'
              : 'hover:bg-accent hover:text-accent-foreground'
            }`}
        >
          {v}
        </button>
      ))}
    </div>
  )
}
