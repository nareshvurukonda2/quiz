// Timer: 30 minutes
let timer = 30 * 60;
let answers = {};

// 50 Questions: AI, ML, Generative AI
let questions = [
  {text: "What is the main purpose of supervised learning?", options: ["Predict labels","Generate text","Cluster data","Reduce features"], correct: "Predict labels"},
  {text: "Which algorithm is used for classification?", options: ["Decision Tree","K-Means","PCA","Apriori"], correct: "Decision Tree"},
  {text: "What does NLP stand for?", options: ["Natural Language Processing","Neural Learning Process","Network Language Protocol","None"], correct: "Natural Language Processing"},
  {text: "Generative AI models are used to:", options: ["Create new content","Classify images","Reduce dimensions","Optimize data"], correct: "Create new content"},
  {text: "Which is a generative AI model for images?", options: ["DALL·E","ResNet","Random Forest","KNN"], correct: "DALL·E"},
  {text: "Which is a supervised ML algorithm?", options: ["Linear Regression","K-Means","PCA","DBSCAN"], correct: "Linear Regression"},
  {text: "Which type of learning does reinforcement learning use?", options: ["Reward-based","Label-based","Clustering","Dimension reduction"], correct: "Reward-based"},
  {text: "What is a common activation function in neural networks?", options: ["ReLU","Mean","Variance","Covariance"], correct: "ReLU"},
  {text: "Which generative AI model is famous for text generation?", options: ["GPT","K-Means","Autoencoder","SVM"], correct: "GPT"},
  {text: "What is overfitting in ML?", options: ["Model fits training too well","Model underperforms","Random error","Missing data"], correct: "Model fits training too well"},
  {text: "Which is an unsupervised learning algorithm?", options: ["K-Means","Decision Tree","Linear Regression","SVM"], correct: "K-Means"},
  {text: "In ML, what is feature scaling used for?", options: ["Normalize data","Generate new features","Create outputs","Reduce labels"], correct: "Normalize data"},
  {text: "Which AI application is used for chatbots?", options: ["NLP","Reinforcement learning","Clustering","Regression"], correct: "NLP"},
  {text: "Which loss function is used in regression?", options: ["Mean Squared Error","Cross-Entropy","Hinge Loss","KL Divergence"], correct: "Mean Squared Error"},
  {text: "Which technique is used in generative AI for images?", options: ["Diffusion Models","Random Forest","SVM","Logistic Regression"], correct: "Diffusion Models"},
  {text: "Which ML algorithm is used for predicting continuous values?", options: ["Linear Regression","Decision Tree Classifier","K-Means","Apriori"], correct: "Linear Regression"},
  {text: "What is a token in NLP?", options: ["Word or subword unit","Feature","Label","Algorithm"], correct: "Word or subword unit"},
  {text: "Which generative AI can produce human-like voices?", options: ["Text-to-Speech models","KNN","PCA","Decision Tree"], correct: "Text-to-Speech models"},
  {text: "Which AI technique is used for recommendation systems?", options: ["Collaborative Filtering","Clustering","Linear Regression","Decision Tree"], correct: "Collaborative Filtering"},
  {text: "Which technique reduces data dimensions in ML?", options: ["PCA","Linear Regression","SVM","Naive Bayes"], correct: "PCA"},
  {text: "Which generative AI model can generate music?", options: ["OpenAI Jukebox","K-Means","SVM","Random Forest"], correct: "OpenAI Jukebox"},
  {text: "Which algorithm is best for anomaly detection?", options: ["Isolation Forest","Linear Regression","Decision Tree","Naive Bayes"], correct: "Isolation Forest"},
  {text: "What does GAN stand for?", options: ["Generative Adversarial Network","Graph Algorithm Network","General AI Node","Gradient Activation Network"], correct: "Generative Adversarial Network"},
  {text: "Which AI model is used for image classification?", options: ["Convolutional Neural Network","Linear Regression","K-Means","Apriori"], correct: "Convolutional Neural Network"},
  {text: "Which technique is used for AI text summarization?", options: ["Transformer Models","PCA","K-Means","Random Forest"], correct: "Transformer Models"},
  {text: "Which algorithm is used for clustering?", options: ["K-Means","Linear Regression","Decision Tree","Naive Bayes"], correct: "K-Means"},
  {text: "Which model can generate realistic images from text prompts?", options: ["DALL·E","SVM","Linear Regression","Decision Tree"], correct: "DALL·E"},
  {text: "Which ML task predicts categories?", options: ["Classification","Regression","Clustering","Dimensionality reduction"], correct: "Classification"},
  {text: "Which generative AI is used for video generation?", options: ["Runway ML","Linear Regression","KNN","Naive Bayes"], correct: "Runway ML"},
  {text: "Which optimization algorithm is popular in neural networks?", options: ["Adam","Apriori","K-Means","DBSCAN"], correct: "Adam"},
  {text: "What is embedding in NLP?", options: ["Vector representation of words","Loss function","Activation function","Hyperparameter"], correct: "Vector representation of words"},
  {text: "Which generative AI can create 3D models?", options: ["NVIDIA GANverse3D","Linear Regression","KNN","Decision Tree"], correct: "NVIDIA GANverse3D"},
  {text: "Which ML technique reduces overfitting?", options: ["Regularization","Clustering","PCA","GAN"], correct: "Regularization"},
  {text: "Which AI application is used in self-driving cars?", options: ["Computer Vision","Text Generation","Speech Synthesis","Recommendation"], correct: "Computer Vision"},
  {text: "Which is an example of reinforcement learning?", options: ["AlphaGo","Linear Regression","K-Means","PCA"], correct: "AlphaGo"},
  {text: "Which activation function outputs 0 or 1?", options: ["Sigmoid","ReLU","Tanh","Softmax"], correct: "Sigmoid"},
  {text: "Which technique generates text in ChatGPT?", options: ["Transformer","SVM","K-Means","Random Forest"], correct: "Transformer"},
  {text: "Which ML algorithm works well with small datasets?", options: ["Decision Tree","Neural Networks","GAN","Transformer"], correct: "Decision Tree"},
  {text: "Which generative AI creates art from text?", options: ["DALL·E","KNN","Linear Regression","SVM"], correct: "DALL·E"},
  {text: "Which metric is used for classification performance?", options: ["Accuracy","MSE","R-Squared","PCA"], correct: "Accuracy"},
  {text: "Which ML algorithm is used for regression?", options: ["Linear Regression","K-Means","Decision Tree Classifier","DBSCAN"], correct: "Linear Regression"},
  {text: "Which generative AI is famous for coding assistance?", options: ["GitHub Copilot","SVM","PCA","KNN"], correct: "GitHub Copilot"},
  {text: "Which AI model predicts next word in a sentence?", options: ["Language Model","Linear Regression","KNN","Decision Tree"], correct: "Language Model"},
  {text: "Which ML method is used for dimensionality reduction?", options: ["PCA","Linear Regression","Decision Tree","KNN"], correct: "PCA"},
  {text: "Which generative AI creates synthetic data?", options: ["CTGAN","Linear Regression","Random Forest","SVM"], correct: "CTGAN"},
  {text: "Which ML method is probabilistic?", options: ["Naive Bayes","K-Means","Decision Tree","Linear Regression"], correct: "Naive Bayes"},
  {text: "Which AI application is used for sentiment analysis?", options: ["NLP","GAN","PCA","Clustering"], correct: "NLP"},
  {text: "Which generative AI can generate images from sketches?", options: ["Sketch-RNN","Linear Regression","SVM","Decision Tree"], correct: "Sketch-RNN"},
  {text: "Which ML algorithm works on distance between points?", options: ["KNN","Linear Regression","Naive Bayes","Decision Tree"], correct: "KNN"},
  {text: "Which AI model detects objects in images?", options: ["YOLO","Linear Regression","K-Means","Apriori"], correct: "YOLO"},
  {text: "Which generative AI can create 3D assets for games?", options: ["NVIDIA GANverse3D","Linear Regression","SVM","Random Forest"], correct: "NVIDIA GANverse3D"},
  {text: "Which technique improves neural network training with mini-batches?", options: ["Stochastic Gradient Descent","Decision Tree","K-Means","PCA"], correct: "Stochastic Gradient Descent"}
];

// Display questions
function displayQuestions() {
  let quizDiv = document.getElementById("quiz");
  quizDiv.innerHTML = "";
  questions.forEach((q,i) => {
    let html = `<div class="question"><p>${i+1}. ${q.text}</p><div class="options">`;
    q.options.forEach(opt => {
      html += `<label><input type="radio" name="q${i}" value="${opt}" onclick="answers[${i}]='${opt}'"> ${opt}</label><br>`;
    });
    html += "</div></div>";
    quizDiv.innerHTML += html;
  });
}

// Submit quiz and calculate score
function submitQuiz() {
  let score = 0;
  questions.forEach((q,i)=>{
    if(answers[i] === q.correct) score++;
  });
  alert("Your Score: " + score + " / " + questions.length);
}

// Start countdown timer
function startTimer() {
  let interval = setInterval(() => {
    let minutes = Math.floor(timer/60);
    let seconds = timer%60;
    document.getElementById("timer").innerText = minutes + ":" + (seconds<10?"0":"")+seconds;
    timer--;
    if(timer < 0){ clearInterval(interval); submitQuiz(); }
  }, 1000);
}

// Initialize
displayQuestions();
startTimer();
