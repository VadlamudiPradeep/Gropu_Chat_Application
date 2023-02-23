var token = localStorage.getItem('token')
function sendMessages (e){
  e.preventDefault();
let chats  = {
  message:e.target.message.value ,
}

  // Send a POST request to the backend to add the message to the database
  axios.post('http://localhost:3000/chat/messages',chats ,{headers:{'Authorization':token}})
  .then((response) => {
    

    setInterval(()=>{
      addNewExpensetoUI(response.data.message);
    },1000)
  })
  .catch((error) => {
    console.error(error);
  });


};




// // // DOMContentLoaded
window.addEventListener('DOMContentLoaded',  () => {
  // const token  = localStorage.getItem('token')
 

  axios.get('http://localhost:3000/chat/getMessages',{headers:{'Authorization': token}}).then(response => {
  let x = response.data.messages;
x.forEach(messageDetails=>{
 addNewExpensetoUI(messageDetails);
 });
 })
 .catch(err=>{
 console.log(err)
} );

})

// // Show Expense to DOM / UI
function addNewExpensetoUI(m){
    
        // After submit clear input field
        document.getElementById("message").value = '';
      
      
        // const parentElement = document.getElementById('expenseTracker');
        const parentElement = document.getElementById('chats');
        const dataElement = document.createElement('ul');
        const childElement = `message-${m.id}`
       dataElement.innerHTML +=`<li id=${childElement}>${m.message}</li>`

        parentElement.appendChild(dataElement);
};