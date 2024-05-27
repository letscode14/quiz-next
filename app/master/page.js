"use client";

import withAuth from '@/components/withAuth.js';

import { toast } from 'react-toastify';
import { useState } from 'react';
import { saveQuestions, getQuestions } from '../../utils/index.js';
import Button from '@/components/Button.js';

const Instructor = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctOption, setCorrectOption] = useState('');
  const [questions, setQuestions] = useState(getQuestions());

  const handleAddQuestion = () => {
    const notify = (message) => toast(message);
    if(!question){
      return notify('Add the question')
    }

     if(!options.every(elem => elem.trim() !='')){
       return notify('Provide all options')
     }

     if(!correctOption){
      return notify('Provide correct option')
     }




    

    const newQuestion = {
      question,
      options,
      correctOption,
    };
    const updatedQuestions = [...questions, newQuestion];
    setQuestions(updatedQuestions);
    saveQuestions(updatedQuestions);
    setQuestion('');
    setOptions(['', '', '', '']);
    setCorrectOption('');
    notify('question added Successfully')
  };

  return (
    <div>
      <Button/>
      <div className='d-flex vw-100 vh-100 justify-content-center align-items-center'>
      
      <div style={{width:'350px'}}>
      <h1>INSTRUCTOR</h1>
      <div className='form-floating mb-3'>
        <input
          className='form-control'
          type="text"
          placeholder="Enter your question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <label for="floatingInput">Enter the question</label>
      </div>
     
      {options.map((option, index) => (
        <div className='form-floating mt-2'>
            <input
           className='form-control'
          key={index}
          type="text"
          placeholder={`Option ${index + 1}`}
          value={option}
          onChange={(e) => {
            const newOptions = [...options];
            newOptions[index] = e.target.value;
            setOptions(newOptions);
          }}
        />
        <label for="floatingInput">Options {index +1}</label>
        </div>

        
      ))}
     <select class="form-select mt-2" onChange={(e) => setCorrectOption(e.target.value)} aria-label="Default select example">
        {options.map((value) => 
        {
           if(value !='')
          return(

            <option  value={value}>{value}</option>
          )
          
        }
        
       

        )


        }
        <option selected> Select Correct option</option>
        
       
    </select>
    <div className='text-center mt-3'>
      <button className='btn btn-danger' onClick={handleAddQuestion}>Add Question</button>
    </div>
    

        
      
      
      </div>
     
     
    </div>
    </div>
    
   
  );
};

export default withAuth(Instructor);

