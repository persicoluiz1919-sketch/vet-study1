import { useAuthStore } from '@/store/authStore'
import { useNavigate } from 'react-router-dom'
import { User, LogOut, Mail, Calendar } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import toast from 'react-hot-toast'

function Profile() {
  const { user, logout } = useAuthStore()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    toast.success('Desconectado com sucesso!')
    navigate('/login')
  }

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="section-title mb-8">Meu Perfil</h1>

        <div className="card-premium p-8">
          <div className="flex items-center mb-8">
            {user?.avatar ? (
              <img src={user.avatar} alt={user.name} className="w-24 h-24 rounded-full mr-6" />
            ) : (
              <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mr-6">
                <User className="w-12 h-12 text-white" />
              </div>
            )}
            <div>
              <h2 className="text-3xl font-bold text-slate-900">{user?.name}</h2>
              <p className="text-slate-600">Estudante de Medicina Veterinária</p>
            </div>
          </div>

          <div className="space-y-6 mb-8">
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-primary-600 mr-4" />
              <div>
                <p className="text-sm text-slate-600">Email</p>
                <p className="font-semibold text-slate-900">{user?.email}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Calendar className="w-6 h-6 text-primary-600 mr-4" />
              <div>
                <p className="text-sm text-slate-600">Membro desde</p>
                <p className="font-semibold text-slate-900">
                  {user?.createdAt && formatDistanceToNow(new Date(user.createdAt), { locale: ptBR, addSuffix: true })}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
            <p className="text-blue-900">
              <strong>Plano Atual:</strong> {user?.subscription === 'premium' ? 'Premium 🌟' : 'Gratuito'}
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="btn-primary w-full flex items-center justify-center bg-red-600 hover:bg-red-700"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Sair
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile