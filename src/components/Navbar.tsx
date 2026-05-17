import { useAuthStore } from '@/store/authStore'
import { useNavigate, useLocation } from 'react-router-dom'
import { BookOpen, Home, User } from 'lucide-react'

function Navbar() {
  const { user } = useAuthStore()
  const navigate = useNavigate()
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-primary-600 hover:text-primary-700 font-bold text-2xl"
        >
          <BookOpen className="w-8 h-8 mr-2" />
          Vet Study
        </button>

        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/')}
            className={`flex items-center px-4 py-2 rounded-lg transition-all ${
              isActive('/')
                ? 'bg-primary-100 text-primary-600 font-semibold'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Home className="w-5 h-5 mr-2" />
            Dashboard
          </button>
          <button
            onClick={() => navigate('/profile')}
            className={`flex items-center px-4 py-2 rounded-lg transition-all ${
              isActive('/profile')
                ? 'bg-primary-100 text-primary-600 font-semibold'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <User className="w-5 h-5 mr-2" />
            {user?.name.split(' ')[0]}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar