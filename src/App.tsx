import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore } from '@/store/authStore'
import Login from '@/pages/Login'
import Dashboard from '@/pages/Dashboard'
import Study from '@/pages/Study'
import Quiz from '@/pages/Quiz'
import Profile from '@/pages/Profile'
import Loading from '@/components/Loading'
import Navbar from '@/components/Navbar'
import toast, { Toaster } from 'react-hot-toast'

function App() {
  const { user, loading, initialize } = useAuthStore()

  useEffect(() => {
    initialize()
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        {user && <Navbar />}
        <Routes>
          <Route path="/" element={user ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
          <Route path="/study/:subjectId" element={user ? <Study /> : <Navigate to="/login" />} />
          <Route path="/quiz/:subjectId" element={user ? <Quiz /> : <Navigate to="/login" />} />
          <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
        </Routes>
        <Toaster position="top-right" />
      </div>
    </Router>
  )
}

export default App