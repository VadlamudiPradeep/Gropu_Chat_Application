var token = localStorage.getItem('token')
function sendMessages (e){
  e.preventDefault();
let chats  = {
  message:e.target.message.value 
}

  // Send a POST request to the backend to add the message to the database
  axios.post('http://localhost:3000/chat/messages',chats ,{headers:{'Authorization':token}})
  .then((response) => {
    console.log(response.data.message);
    addNewExpensetoUI(response.data.message)
  })
  .catch((error) => {
    console.error(error);
  });


};




// // // DOMContentLoaded
window.addEventListener('DOMContentLoaded',  () => {
  // const token  = localStorage.getItem('token')
 

  axios.get('http://localhost:3000/chat/getMessages',{headers:{'Authorization': token}}).then(response => {
  
 response.data.expenses.forEach(message=>{
 addNewExpensetoUI(message);

 });
 })
 .catch(err=>{
  showError(err);
} );

})

// // Show Expense to DOM / UI
function addNewExpensetoUI(message) {
  try{
  // After submit clear input field
  document.getElementById("message").value = '';


  // const parentElement = document.getElementById('expenseTracker');
  const parentElement = document.getElementById('chats');
  const expenseElemId = `message-${message.id}`;
  parentElement.innerHTML += `
      <li id=${expenseElemId}>
          ${message.messages} 
     
      </li>`
  } catch(err){
      // console.log(err)
      showError(err);
  }
}

function showError(err){
  document.body.innerHTML += `<h4 style='color:black>${err}</h4>`
}
