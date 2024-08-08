
let form=document.querySelector(".formstyle")
let user=document.getElementById("user")
let email=document.getElementById("email")
let password=document.getElementById("pass")
let cpassword=document.getElementById("cpass")

form.addEventListener('submit',(e)=>{
    
    if(!Validite()){e.preventDefault();}
    else
    alert("Registered successfully")
})

function Validite(){
 
  let formuser=user.value.trim()
  let formemail=email.value.trim()
  let formpass=password.value.trim()
  let formcpass=cpassword.value.trim()
  let succes=true;

  if(formuser===''){
    succes=false;
    error(user,"Type your name")}
else
    success(user)  //user

    if(formemail===''){
        succes=false;
        error(email,"Type your email")}
    else
    success(email)  //email

    if(formpass===''){
        succes=false;
        error(password,"Type password")}
    else if(formpass.length<8){
        succes=false;
        error(password,"Type atleast 8 characters")}
    else
    success(password)      //password

    if(formcpass===''){
        succes=false;
        error(cpassword,"Type conform password")}
    else if(formcpass!==formpass){
        succes=false;
        error(cpassword,"password doesn't match")}
    else{
    success(cpassword) }        //conform password
    return succes;  

}
function error(element,ermsg){
       let parelement=element.parentElement;
       let errormsg=parelement.querySelector(".error")
       errormsg.innerText=ermsg;

       parelement.classList.add('fail')
       parelement.classList.remove('success')
}

function success(element){
    let parelement=element.parentElement;
    let errormsg=parelement.querySelector(".error")
    errormsg.innerText='';

    parelement.classList.add('success')
    parelement.classList.remove('fail')
}
