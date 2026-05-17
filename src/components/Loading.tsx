import { BookOpen } from 'lucide-react'

function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8 flex items-center justify-center">
          <BookOpen className="w-16 h-16 text-white animate-bounce" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Vet Study</h2>
        <p className="text-primary-100">Carregando plataforma de estudos...</p>
      </div>
    </div>
  )
}

export default Loading