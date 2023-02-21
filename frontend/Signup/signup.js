async function signup(e){
  try{
        e.preventDefault();
    
        let signupDetails ={
            name:e.target.name.value,
            email:e.target.email.value,
            phone:e.target.phone.value,
            password:e.target.password.value
        };
      if(signupDetails.name.length < 6 || signupDetails.name === ''){
        alert('Enter a valid name');
        return ;
      }else if(signupDetails.email.indexOf('@')==-1){
        alert('Enter a valid email');
        return ;
      }else if(signupDetails.phone.length < 10 || signupDetails.password.length < 8){
        alert('Enter a valid phone number or password ');
        return ;
      }
  
        
     await axios.post('http://localhost:3000/user/signup', signupDetails)
     .then(response =>{
      if(response.status === 404){
        alert('user already exits please login ')
       }else if(response.status === 201){
        window.location.href = '../Login/login.html';
       }
     })
     .catch(err=>{
      throw new Error(err)
     })
    }
  catch(err){
    document.body.innerHTML += `<h4 style="color:black">${err}</h4>`
  }
    }
  
  