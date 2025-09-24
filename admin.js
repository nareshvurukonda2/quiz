import { Amplify, API, graphqlOperation, Auth } from 'aws-amplify';
import awsExports from './aws-exports.js';
Amplify.configure(awsExports);

const tableBody = document.querySelector("#results-table tbody");

async function loadResults(){
  try{
    const listQuizResults = `
      query ListQuizResults {
        listQuizResults {
          items {
            studentName
            score
            totalQuestions
            submittedAt
          }
        }
      }
    `;
    const result = await API.graphql(graphqlOperation(listQuizResults));
    const items = result.data.listQuizResults.items;
    items.forEach(r=>{
      const row = document.createElement('tr');
      row.innerHTML = `<td>${r.studentName}</td><td>${r.score}</td><td>${r.totalQuestions}</td><td>${r.submittedAt}</td>`;
      tableBody.appendChild(row);
    });
  }catch(err){
    console.error(err);
    alert("Error fetching results. Only admin can view this.");
  }
}

loadResults();
