import React from 'react'
import { useRouter } from 'next/navigation'
import { logout } from '@/utils/auth'

export default function Button() {
    const router = useRouter()

    const handleLogout = () => {
        logout()
        router.push('/login')
    }
  return (
    <div className='d-flex justify-content-between px-5 py-3'>
      <button className='btn btn-primary fw-bold' onClick={() => router.push('/view')}>View Quesions</button>
      <button className='btn btn-danger fw-bold' onClick={handleLogout}>Logout</button>
    </div>
  )
}
