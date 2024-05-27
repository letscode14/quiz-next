"use client";

import withAuth from '@/components/withAuth.js';
import { useState, useEffect } from 'react';
import { getQuestions, saveQuestions } from '@/utils';

function ViewQuestion() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchedQuestions = getQuestions();
    setQuestions(fetchedQuestions);
  }, []);

  const handleDelete = (index) => {
    const confirmation = confirm('Are you sure')
    if(!confirmation){
        return
    }
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
    saveQuestions(updatedQuestions);  // Persist the changes in localStorage
  };

  return (
    <div className='pt-5 px-5'>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Question</th>
            <th scope="col">Options</th>
            <th scope="col">Correct Ans</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((value, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{value.question}</td>
              <td>{value.options.map((opt, i) => <div key={i}>{opt}</div>)}</td>
              <td>{value.correctOption}</td>
              <td>
                <button
                  className='btn btn-sm btn-danger'
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default withAuth(ViewQuestion);
