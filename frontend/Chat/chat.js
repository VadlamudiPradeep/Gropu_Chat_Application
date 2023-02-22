
var token = sessionStorage.getItem('token')
function sendMessages (e){
  e.preventDefault();
let chats  = {
  message:e.target.message.value 
}

  // Send a POST request to the backend to add the message to the database
  axios.post('http://localhost:3000/chat/messages',chats ,{headers:{'Authorization':token}})
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });


};
