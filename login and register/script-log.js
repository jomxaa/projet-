const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');



registerLink.addEventListener('click',()=> {
    logregBox.classList.add('active');

});

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
});


const form1 = document.querySelector("#form1");
const user = document.querySelector('#user');
const email = document.querySelector('#email');
const age = document.querySelector('#age');
const adresse = document.querySelector('#adresse');
const gender = document.querySelector('#gender');
const password = document.querySelector('#password');


// Evenements
form1.addEventListener('submit',e=>{
    e.preventDefault();

    form_verify();
})

// Fonstions
function form_verify() {
    // Obtenir toutes les valeurs des inputs
    const userValue = user.value.trim();
    const emailValue = email.value.trim();
    const ageValue = age.value.trim();
    const adresseValue = adresse.value.trim();
    const genderValue = gender.value.trim();
    const pwdValue = password.value.trim();}

    // Username verify
    if (userValue === "") {
        let message ="Username ne peut pas être vide";
        setError(user,message);
    }else if(!userValue.match(/^[a-zA-Z]/)){
        let message ="User doit commencer par une lettre";
        setError(user,message)
    }else{
        let letterNum = userValue.length;
        if (letterNum < 3) {
            let message ="User doit avoir au moins 3 caractères";
            setError(user,message)
        } else {
            setSuccess(user);
        }
    }
// email verify
if (emailValue === "") {
    let message = "Email ne peut pas être vide";
    setError(email,message);
}else if(!email_verify(emailValue)){
    let message = "Email non valide";
    setError(email,message);
}else{
    setSuccess(email)
}

// password verify
if (pwdValue ==="") {
    let message ="Le passeword ne peut pas être vide";
    setError(password,message)
}else if(!password_verify(pwdValue)){
    let message = "Le mot de passe est trop faible (8 à 12 caractères)";
    setError(password,message)
}else{
    setSuccess(password);
}
// pwd confirm
if (pwd2Value ==="") {
    let message ="Le passeword confirm ne peut pas être vide";
    setError(password2,message)
}else if( pwdValue !== pwd2Value){
    let message ="Les mot de passes ne correspondent pas";
    setError(password2,message)
}else{
    setSuccess(password2)
}


function setError(elem,message) {
const formControl = elem.parentElement;
const small = formControl.querySelector('small');

// Ajout du message d'erreur
small.innerText = message

// Ajout de la classe error
formControl.className = "form-control error";
}

function setSuccess(elem) {
const formControl = elem.parentElement;
formControl.className ='form-control success'
}

function email_verify(email) {
/*
* r_rona.22-t@gmail.com
    /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/
*/
return /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(email);
}
function password_verify(passeword) {
return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/.test(passeword);
}
