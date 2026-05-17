import React from 'react'

interface Props {
  icon: React.ReactNode
  title: string
  value: string | number
  color: 'blue' | 'green' | 'purple' | 'yellow'
}

function StatsCard({ icon, title, value, color }: Props) {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
    yellow: 'bg-yellow-100 text-yellow-600',
  }

  return (
    <div className="card p-6">
      <div className={`w-12 h-12 rounded-lg ${colorClasses[color]} flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <p className="text-slate-600 text-sm mb-2">{title}</p>
      <h3 className="text-3xl font-bold text-slate-900">{value}</h3>
    </div>
  )
}

export default StatsCard