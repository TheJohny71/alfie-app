export function CalendarControls({ view, onViewChange }) {
  const views = ['Month', 'Week', 'Day']
  
  return (
    <div className="flex items-center justify-between p-4 border-b border-border/10">
      <div className="flex items-center space-x-1 bg-accent/50 backdrop-blur-lg rounded-lg p-1">
        {views.map((v) => (
          <button
            key={v}
            onClick={() => onViewChange(v.toLowerCase())}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-default
              ${view === v.toLowerCase()
                ? 'bg-background text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground hover:bg-accent'
              }`}
          >
            {v}
          </button>
        ))}
      </div>
      <button className="text-sm font-medium text-primary hover:text-primary/90 transition-colors">
        Today
      </button>
    </div>
  )
}
