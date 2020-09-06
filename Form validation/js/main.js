let name = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let nameinvalid=document.getElementById('nameinvalid');
let emailinvalid=document.getElementById('emailinvalid');
let phoneinvalid=document.getElementById('phoneinvalid');
let validUser=false;
let validEmail=false;
let validPhone=false;
$('#failure').hide();
$('#success').hide();
name.addEventListener('blur', ()=>{
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){0,10}$/;
    let str=name.value;
    
    if(regex.test(str)){
        name.classList.add('is-valid');
        name.classList.remove('is-invalid');
        nameinvalid.classList.remove('invalid-feedback');
        nameinvalid.classList.add('valid-feedback');
        validUser=true;

    }else{
        name.classList.add('is-invalid');
        name.classList.remove('is-valid');
        nameinvalid.classList.remove('valid-feedback');
        nameinvalid.classList.add('invalid-feedback');
    }
});

email.addEventListener('blur', ()=>{
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str=email.value;
    
    if(regex.test(str)){
        email.classList.add('is-valid');
        email.classList.remove('is-invalid');
        emailinvalid.classList.remove('invalid-feedback');
        emailinvalid.classList.add('valid-feedback');
        validEmail=true    
    }else{
        email.classList.add('is-invalid');
        email.classList.remove('is-valid');
        emailinvalid.classList.remove('valid-feedback');
        emailinvalid.classList.add('invalid-feedback');
    }
    
});

phone.addEventListener('blur', ()=>{
    let regex = /^([0-9]){10}$/;
    let str=phone.value;
    
    if(regex.test(str)){
        phone.classList.add('is-valid');
        phone.classList.remove('is-invalid');
        phoneinvalid.classList.remove('invalid-feedback');
        phoneinvalid.classList.add('valid-feedback');
        validPhone=true;
        

    }else{
        phone.classList.add('is-invalid');
        phone.classList.remove('is-valid');
        phoneinvalid.classList.remove('valid-feedback');
        phoneinvalid.classList.add('invalid-feedback');
    } 
});

let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    e.preventDefault();
    if(validEmail && validPhone && validUser){
        let success = document.getElementById('success');
        success.classList.add('show');
        $('#failure').hide();
        $('#success').show();
    }else{
        let failure= document.getElementById('failure');
        failure.classList.add('show');
        $('#success').hide();
        $('#failure').show();
    }
})