let formvalue       = document.getElementById("form");
let uservalue       = document.getElementById("username");
let emailvalue      = document.getElementById("email");
let passvalue       = document.getElementById("password");
let repassvalue     = document.getElementById("repassword");

formvalue.addEventListener("submit",e =>{
    e.preventDefault();
    validation();   
})

let seterror = (element,message) =>{
    const input = element.parentElement;
    let inputtag = document.getElementsByTagName("input")
    let inputdis = input.querySelector('.error');
    inputdis.innerText = message;
    for(i=0;i<inputtag.length;i++){
        inputtag[i].classList.add("br");
    }
}   
let setsuccess = (element) =>{
    let input = element.parentElement;
    let inputdis = input.querySelector('.error');   
    inputdis.innerText = "";
    let inputtag = document.getElementsByTagName("input");
    inputtag.innerText = "";
    for(i=0;i<inputtag.length;i++){
        inputtag[i].classList.remove("br");
    }
}
let validemail = (email)=>{
    let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    return reg.test(String(email).toLowerCase());
}
let passcheck = (password) =>{
    let reg = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).*$/;
    return reg.test(String(password));
}

let validation = () =>{
    let username = uservalue.value.trim();
    let email = emailvalue.value.trim();
    let password = passvalue.value.trim();
    let repassword = repassvalue.value.trim();

    if (username.length === 0){
        seterror(uservalue,"Username is required");
    }else{
        setsuccess(uservalue);
    }

    if(email === ''){
        seterror(emailvalue,"E-Mail required");
    }else if(!validemail(email)){
        seterror(emailvalue,"Provide a vaild e-mail")
    }else{
        setsuccess(emailvalue);
    }

    if(password === ""){
        seterror(passvalue ,"Password required");
    }else if(password.length < 8){
        seterror(passvalue,"Password must be at least 8 charaters.")
    }else if(!passcheck(password)){
        seterror(passvalue,"The password must contain capital and digit and special charater")
    }else{
        setsuccess(passvalue);
    }

    if(repassword === ""){
        seterror(repassvalue,"Please confirm your password");
    }else if(repassword !== password){
        seterror(repassvalue,"Password doesn't match");
    }else{
        setsuccess(repassvalue);
        window.location.href = "./thank.html"
    }
};


