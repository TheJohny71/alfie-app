import { useState } from 'react'
import { Calendar, Clock } from 'lucide-react'

export function LeaveRequestForm() {
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
    type: 'vacation',
    notes: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Start Date</label>
            <div className="relative">
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                className="w-full rounded-md border px-3 py-2 pl-10"
                required
              />
              <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">End Date</label>
            <div className="relative">
              <input
                type="date"
                value={formData.endDate}
                onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                className="w-full rounded-md border px-3 py-2 pl-10"
                required
              />
              <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Leave Type</label>
          <select
            value={formData.type}
            onChange={(e) => setFormData({...formData, type: e.target.value})}
            className="w-full rounded-md border px-3 py-2"
          >
            <option value="vacation">Vacation</option>
            <option value="sick">Sick Leave</option>
            <option value="personal">Personal Leave</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Notes</label>
          <textarea
            value={formData.notes}
            onChange={(e) => setFormData({...formData, notes: e.target.value})}
            className="w-full rounded-md border px-3 py-2 h-24"
            placeholder="Add any additional notes..."
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-primary-foreground rounded-md px-4 py-2 font-medium"
      >
        Submit Request
      </button>
    </form>
  )
}
