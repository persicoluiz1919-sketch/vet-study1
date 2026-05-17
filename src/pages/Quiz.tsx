import { useParams, useNavigate } from 'react-router-dom'
import { useStudyStore } from '@/store/studyStore'
import { useState, useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import toast from 'react-hot-toast'

const SAMPLE_QUESTIONS = [
  {
    id: '1',
    question: 'Qual é o maior órgão do corpo de um cão?',
    options: ['Coração', 'Fígado', 'Pulmão', 'Cérebro'],
    correctAnswer: 1,
    explanation: 'O fígado é o maior órgão interno do corpo do cão',
  },
  {
    id: '2',
    question: 'Qual antibiótico é mais comumente usado em gatos?',
    options: ['Amoxicilina', 'Fluoroquinolona', 'Penicilina', 'Cefalosporina'],
    correctAnswer: 0,
    explanation: 'Amoxicilina é o antibiótico mais seguro e comum para gatos',
  },
  {
    id: '3',
    question: 'Qual é a temperatura corporal normal de um cavalo?',
    options: ['36°C', '37°C', '38°C', '39°C'],
    correctAnswer: 2,
    explanation: 'A temperatura normal de um cavalo é entre 37.5°C e 38.5°C',
  },
]

function Quiz() {
  const { subjectId } = useParams()
  const navigate = useNavigate()
  const { subjects } = useStudyStore()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

  const subject = subjects.find((s) => s.id === subjectId)
  const question = SAMPLE_QUESTIONS[currentQuestion]

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index)
    setAnswered(true)
    if (index === question.correctAnswer) {
      setScore(score + 1)
      toast.success('Resposta correta! 🎉')
    } else {
      toast.error('Resposta incorreta!')
    }
  }

  const handleNext = () => {
    if (currentQuestion < SAMPLE_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setAnswered(false)
      setSelectedAnswer(null)
    } else {
      // Quiz completed
      navigate('/', { state: { score, total: SAMPLE_QUESTIONS.length } })
    }
  }

  if (!subject) {
    return <div className="min-h-screen flex items-center justify-center">Disciplina não encontrada</div>
  }

  return (
    <div className="min-h-screen pt-20 pb-10 bg-gradient-to-br from-primary-50 to-slate-100">
      <div className="max-w-2xl mx-auto px-4">
        <button
          onClick={() => navigate(`/study/${subjectId}`)}
          className="flex items-center text-primary-600 hover:text-primary-700 mb-6 font-semibold"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Voltar
        </button>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold text-slate-900">{subject.title}</h2>
            <span className="badge-primary">
              Questão {currentQuestion + 1}/{SAMPLE_QUESTIONS.length}
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div
              className="bg-primary-600 h-2 rounded-full transition-all"
              style={{ width: `${((currentQuestion + 1) / SAMPLE_QUESTIONS.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="card-premium p-8 mb-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">{question.question}</h3>

          <div className="space-y-4 mb-8">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => !answered && handleAnswer(index)}
                disabled={answered}
                className={`w-full p-4 border-2 rounded-lg font-semibold transition-all ${
                  answered
                    ? index === question.correctAnswer
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : index === selectedAnswer
                      ? 'border-red-500 bg-red-50 text-red-700'
                      : 'border-slate-200 bg-slate-50 text-slate-600'
                    : 'border-primary-200 hover:border-primary-600 text-slate-900'
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {answered && (
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
              <p className="font-semibold text-blue-900 mb-1">Explicação:</p>
              <p className="text-blue-800">{question.explanation}</p>
            </div>
          )}

          {answered && (
            <button onClick={handleNext} className="btn-primary w-full">
              {currentQuestion === SAMPLE_QUESTIONS.length - 1 ? 'Finalizar' : 'Próxima Questão'}
            </button>
          )}
        </div>

        {/* Score */}
        <div className="text-center">
          <p className="text-slate-600">Acertos: {score}/{currentQuestion}</p>
        </div>
      </div>
    </div>
  )
}

export default Quiz