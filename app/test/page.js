"use client";

import { useState, useEffect } from 'react';
import { getQuestions, saveAnswers, getAnswers } from '../../utils/index';
import { useRouter } from 'next/navigation';

const Student = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState(getAnswers());
  const [score, setScore] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const router = useRouter()

  useEffect(() => {
    const fetchedQuestions = getQuestions();
    if (fetchedQuestions.length > 0) {
      const shuffledQuestions = fetchedQuestions.sort(() => 0.5 - Math.random());
      setQuestions(shuffledQuestions.slice(0, 10));
    }
  }, []);
  const totalMark = questions.length

  const handleAnswerChange = (questionIndex, option) => {
    const newAnswers = { ...answers, [questionIndex]: option };
    setAnswers(newAnswers);
    saveAnswers(newAnswers);
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correctOption) {
        calculatedScore += 1;
      }
    });
    setScore(calculatedScore);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div className='vh-100 vw-100 d-flex justify-content-center align-items-center'>
      <div>
        
      {score === null ? (
   
        <div>
                 <h1>Quiz </h1>
          <p className='fs-2'>{`#${currentQuestionIndex+1}/${totalMark}`} {questions[currentQuestionIndex]?.question}</p>
          <ul>
            {questions[currentQuestionIndex]?.options.map((opt, i) => (
              <li key={i}>
                <div className='form-check'>
                <input
                  type="radio"
                  className='form-check-input'
                  name={`question-${currentQuestionIndex}`}
                  value={opt}
                  checked={answers[currentQuestionIndex] === opt}
                  onChange={() => handleAnswerChange(currentQuestionIndex, opt)}
                  disabled={currentQuestionIndex > answers.length - 1}
                />
                 <label class="form-check-label fs-5" for="flexRadioDefault1">
                   {opt}
                 </label>
                </div>
              </li>
            ))}
          </ul>
          <div>
            <button className='btn btn-dark-outline me-2' onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
              Previous
            </button>
            {currentQuestionIndex < questions.length - 1 ? (
              <button className='btn btn-danger' onClick={handleNext}>Next</button>
            ) : (
              <button className='btn btn-success' onClick={handleSubmit}>Submit</button>
            )}
          </div>
        </div>
      ) : (
        <div>
             <div>
             <img className="img-fluid" style={{width:'400px'}} src="https://miro.medium.com/v2/resize:fit:1000/1*FBRsnCP9wE84UVW1Kkv5Yw.jpeg"></img>

            </div>
            <div>
            <h2 className='text-center fw-bold'>Your Score: {score} / {totalMark}</h2>
            <div className='text-center'>
                <button className='btn btn-danger' onClick={() => router.push('/student')}>Back to Home</button>
            </div>
                
            </div>
           
        </div>
      )}

        </div>
      
    </div>
  );
};

export default Student;
