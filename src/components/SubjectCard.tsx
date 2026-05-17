import { Subject } from '@/types'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface Props {
  subject: Subject
}

function SubjectCard({ subject }: Props) {
  const navigate = useNavigate()

  return (
    <div className="card p-6 hover:shadow-xl transition-all cursor-pointer group">
      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{subject.icon}</div>
      
      <h3 className="text-xl font-bold text-slate-900 mb-2">{subject.title}</h3>
      <p className="text-slate-600 text-sm mb-4 line-clamp-2">{subject.description}</p>

      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold text-slate-600">PROGRESSO</span>
          <span className="text-sm font-bold text-primary-600">{subject.progress}%</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2">
          <div
            className="bg-primary-600 h-2 rounded-full transition-all"
            style={{ width: `${subject.progress}%` }}
          />
        </div>
      </div>

      <div className="flex justify-between items-center mb-6 text-sm">
        <span className="text-slate-600">{subject.completedLessons}/{subject.lessons} aulas</span>
      </div>

      <button
        onClick={() => navigate(`/study/${subject.id}`)}
        className="btn-primary w-full flex items-center justify-center"
      >
        Estudar
        <ArrowRight className="w-4 h-4 ml-2" />
      </button>
    </div>
  )
}

export default SubjectCard