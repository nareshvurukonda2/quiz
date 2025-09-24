import { Amplify, API, graphqlOperation, Auth } from 'aws-amplify';
import awsExports from './aws-exports.js';
Amplify.configure(awsExports);

// Sample 5 questions (add remaining 45 later)
const questions = [
  { q: "What does AI stand for?", options: ["Artificial Intelligence","Auto Input","Automatic Integration","None"], correct: "Artificial Intelligence" },
  { q: "Which is a supervised learning algorithm?", options: ["Linear Regression","K-Means","PCA","DBSCAN"], correct: "Linear Regression" },
  { q: "Which library is used for ML in Python?", options: ["TensorFlow","React","Angular","NodeJS"], correct: "TensorFlow" },
  { q: "What is Generative AI used for?", options: ["Generate content","Clean data","Secure network","Sort arrays"], correct: "Generate content" },
  { q: "Which technique reduces overfitting?", options: ["Regularization","Extrapolation","Sorting","None"], correct: "Regularization" }
];

const quizDiv = document.getElementById('questions');
questions.forEach((q,i)=>{
  const div = document.createElement('div');
  div.innerHTML = `<p>${i+1}. ${q.q}</p>` + q.options.map(o=>`<label><input type="radio" name="q${i}" value="${o}"> ${o}</label>`).join("<br>");
  quizDiv.appendChild(div);
});

let timeLeft = 30*60;
const timerEl = document.getElementById('timer');
const timerInterval = setInterval(()=>{
  const minutes = Math.floor(timeLeft/60);
  const seconds = timeLeft % 60;
  timerEl.textContent = `Time Left: ${minutes}:${seconds<10?'0'+seconds:seconds}`;
  if(timeLeft<=0){
    clearInterval(timerInterval);
    submitQuiz();
  }
  timeLeft--;
},1000);

document.getElementById('quiz-form').addEventListener('submit', e=>{
  e.preventDefault();
  submitQuiz();
});

async function submitQuiz(){
  clearInterval(timerInterval);
  let score=0;
  questions.forEach((q,i)=>{
    const ans = document.querySelector(`input[name="q${i}"]:checked`);
    if(ans && ans.value===q.correct) score++;
  });

  try{
    const user = await Auth.currentAuthenticatedUser();
    const createQuizResult = `
      mutation CreateQuizResult($input: CreateQuizResultInput!) {
        createQuizResult(input:$input) { id }
      }
    `;
    await API.graphql(graphqlOperation(createQuizResult,{
      input:{
        studentName: user.username,
        score: score,
        totalQuestions: questions.length,
        submittedAt: new Date().toISOString()
      }
    }));
    alert(`Quiz Submitted! Your Score: ${score}/${questions.length}`);
    window.location.reload();
  }catch(err){
    console.error(err);
    alert("Error submitting quiz. Make sure you are signed in.");
  }
}
