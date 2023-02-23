

let signInBtn=document.getElementById('sign-in-btn')
var state;
const userUrl='http://localhost:3000/user/Login'


signInBtn.addEventListener('click', signIn)
function signIn(e){
  let emailInp=document.getElementById('email').value
  let passInp=document.getElementById('password').value

  if(emailInp.indexOf('@')==-1){
      alert('Enter a valid Email ID!')
      return
  }else if(passInp.length<5){
      alert("Enter a valid Password!")
      return
  }else{
      document.getElementById('email').value=""
      document.getElementById('password').value=""

      let creds={
          email: emailInp,
          password:passInp
      }

      axios.post('http://localhost:3000/user/Login',creds ).then(response=>{
        alert(response.data.message);
        localStorage.setItem('token' ,response.data.token);
      
              if (response.data.code==2){
                  alert("You have entered an Invalid Password!")
              }else if(response.data.code==0){
                  alert("Your email is not registered with us!")
              }else if(response.data.code==1){
                  alert("Sign In Successful!")
                  
              }
      }).catch(err=>console.log(err))
  }
}

// //Check if already Logged In
// function checkAuthState(){
//   state=JSON.parse(sessionStorage.getItem('auth'))
//   if (state==null||state==undefined||state==''){
//       return
//   }else if(state.token){
//       location.replace('../Groups/groups.html')
//   }else{
//       return
//   }
// }

