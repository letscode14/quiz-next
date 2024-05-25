export const saveQuestions = (questions) => {
    localStorage.setItem('questions', JSON.stringify(questions));
  };
  
  export const getQuestions = () => {
    const questions = localStorage.getItem('questions');
    return questions ? JSON.parse(questions) : [];
  };
  
  export const saveAnswers = (answers) => {
    localStorage.setItem('answers', JSON.stringify(answers));
  };
  
  export const getAnswers = () => {
    const answers = localStorage.getItem('answers');
    return answers ? JSON.parse(answers) : {};
  };