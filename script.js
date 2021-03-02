const form = document.querySelector('.form');
const button = document.getElementById('btn');
const input = document.querySelector('input');



//Show Error Message and error border=======================
function showError(input, message){
    const Form = input.parentElement;
    Form.className = 'form error';
    const small = Form.querySelector('small')
    small.innerText = message;
}

//show success border======================================
function showSuccess(input){
    const Form = input.parentElement;
    Form.className = 'form success';
}

//check email isnt empty==================================
function checkRequired(input){
    let isRequired = false;
    if(input.value.trim() ===''){
        showError(input, 'Email canot be empty!')
        isRequired = true;
    }else{
        showSuccess(input);
    }
    return isRequired;
}

//show email example=====================================
function showEmailExample(input,message){
    const Form = input.parentElement;
    const emailAdress = Form.querySelector('#email');
    emailAdress.value = message;
}

//check email validity==================================
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      showSuccess(input);
    } else {
      showError(input, 'Please provide a valid email address');
      showEmailExample(input,'email@example.com');
    }
  }
  
//Event Listeners========================================
button.addEventListener('click',function(e){
    e.preventDefault();

    if(!checkRequired(email)){
		checkEmail(email);
	}
});
