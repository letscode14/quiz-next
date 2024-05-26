"use client"
import { useRouter } from 'next/navigation';


const Home = () => {
  const router =  useRouter()

  return (
    <div className='d-flex align-items-center justify-content-center vh-100 vw-100'>
      <div>
        <h1 className='mb-4'>TRIVIA QUIZ APP </h1>
        <div className='d-flex justify-content-center'>
          <button className='btn me-3  btn-outline-dark fw-bold' onClick={() => router.push('/master')}>Master</button>
          <button className='btn btn-danger fw-bold' onClick={() => router.push('/student')}>Student</button>
        </div>
        
      </div>
      
    </div>
  );
};

export default Home;

