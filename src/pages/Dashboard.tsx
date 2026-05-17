import { useStudyStore } from '@/store/studyStore'
import SubjectCard from '@/components/SubjectCard'
import StatsCard from '@/components/StatsCard'
import { BarChart3, BookOpen, Award, Target } from 'lucide-react'

function Dashboard() {
  const { subjects } = useStudyStore()
  const totalProgress = (subjects.reduce((acc, s) => acc + s.progress, 0) / subjects.length).toFixed(0)
  const totalLessons = subjects.reduce((acc, s) => acc + s.completedLessons, 0)

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-10">
          <h1 className="section-title">Dashboard de Estudos</h1>
          <p className="section-subtitle">Bem-vindo à Vet Study - Sua jornada veterinária começa aqui</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <StatsCard
            icon={<BarChart3 className="w-8 h-8" />}
            title="Progresso Geral"
            value={`${totalProgress}%`}
            color="blue"
          />
          <StatsCard
            icon={<BookOpen className="w-8 h-8" />}
            title="Aulas Completadas"
            value={totalLessons}
            color="green"
          />
          <StatsCard
            icon={<Target className="w-8 h-8" />}
            title="Disciplinas"
            value={subjects.length}
            color="purple"
          />
          <StatsCard
            icon={<Award className="w-8 h-8" />}
            title="Pontos"
            value="0"
            color="yellow"
          />
        </div>

        {/* Subjects */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-slate-900">Disciplinas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjects.map((subject) => (
              <SubjectCard key={subject.id} subject={subject} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard