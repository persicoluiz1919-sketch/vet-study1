import { useParams, useNavigate } from 'react-router-dom'
import { useStudyStore } from '@/store/studyStore'
import { ArrowLeft, Play } from 'lucide-react'

function Study() {
  const { subjectId } = useParams()
  const { subjects, startSession } = useStudyStore()
  const navigate = useNavigate()
  const subject = subjects.find((s) => s.id === subjectId)

  if (!subject) {
    return <div className="min-h-screen flex items-center justify-center">Disciplina não encontrada</div>
  }

  const handleStartQuiz = () => {
    startSession(subjectId!)
    navigate(`/quiz/${subjectId}`)
  }

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-4xl mx-auto px-4">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-primary-600 hover:text-primary-700 mb-6 font-semibold"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Voltar
        </button>

        <div className="card-premium p-8 mb-8">
          <div className="text-6xl mb-4">{subject.icon}</div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">{subject.title}</h1>
          <p className="text-xl text-slate-600 mb-6">{subject.description}</p>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <p className="text-slate-600 mb-2">Progresso</p>
              <div className="w-full bg-slate-200 rounded-full h-3">
                <div
                  className="bg-primary-600 h-3 rounded-full transition-all"
                  style={{ width: `${subject.progress}%` }}
                />
              </div>
              <p className="text-sm text-slate-600 mt-2">{subject.progress}%</p>
            </div>
            <div>
              <p className="text-slate-600 mb-2">Aulas</p>
              <p className="text-2xl font-bold text-primary-600">
                {subject.completedLessons}/{subject.lessons}
              </p>
            </div>
          </div>

          <button
            onClick={handleStartQuiz}
            className="btn-primary w-full flex items-center justify-center"
          >
            <Play className="w-5 h-5 mr-2" />
            Iniciar Quiz
          </button>
        </div>
      </div>
    </div>
  )
}

export default Study