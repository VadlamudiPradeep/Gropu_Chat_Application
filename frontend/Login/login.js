async function signIn(e){
    try{
     e.preventDefault();
  
     let loginDetails = {
        email:e.target.email.value,
        password:e.target.password.value,
     };
  
     if(loginDetails.email.length < 0){
      alert('Enter a valid email');
      return;
     }else if(loginDetails.password.length < 8){
      alert('Enter A strong password')
     };
  
 await axios.post('http://localhost:3000/user/Login', loginDetails).then(response =>{
  localStorage.setItem('token' ,response.data.token)
 })
   }
    catch(err){
      document.body.innerHTML += `<h3 style='color:solid black'>${err}</h3>`
    }
  };
  