"use client"


import { useRouter } from "next/navigation"

export default function page() {
    const router = useRouter()

   const startQuiz = () =>
    {
        const confirmation = window.confirm('Are you sure')
        if(confirmation){
            router.push('/test')
        }
    }
  return (
    <div className="vh-100 vw-100 d-flex justify-content-center align-items-center">
        <div>
            <div>
             <img className="img-fluid" style={{width:'400px'}} src="https://miro.medium.com/v2/resize:fit:1000/1*FBRsnCP9wE84UVW1Kkv5Yw.jpeg"></img>

            </div>
            <div className="text-center">
             <button className="btn btn-danger" onClick={startQuiz}>Start Quiz</button>
            </div>
            
        </div>
       
    </div>
  )
}

