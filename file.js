

let inputValue;
let inputNumber
let inputCvv
let inputMm
let inputYy
let msg="can't be blank"


const cardNameInput = document.getElementById('name-card');
const cardNumberInput = document.getElementById('number-card');
const motherNumberInput = document.getElementById('mm');
const yearNumberInput = document.getElementById('yy');
const cvvNumberInput = document.getElementById('cvv');
const form = document.querySelector('#form');
if (form) {
  localStorage.clear()
}

window.onload = function() {
  updateOutput();
}

const input1 = document.getElementById("name-card");
if (input1) {
  input1.addEventListener("input", function() {
    inputValue = input1.value;
    updateOutput();
  });
}


const input2 = document.getElementById("number-card")
if (input2) {
  
input2.addEventListener("input", function () {

  inputNumber= input2.value
  inputNumber = inputNumber.replace(/(\d{4})/g, "$1 "); 
    updateOutput()
  })
}

const input3 = document.getElementById("mm")
if (input3) {
  input3.addEventListener("input", function () {
    inputMm = input3.value
    updateOutput()
  })
  
}

const input4 = document.getElementById("yy")
if (input4) {
  input4.addEventListener("input", function () {
    inputYy = input4.value
  
    updateOutput()
  })
  
}

const input5 = document.getElementById("cvv");
if (input5) {
  input5.addEventListener("input", function() {
    inputCvv = input5.value;
    updateOutput();
  });
}


updateOutput();

function updateOutput() {
  
  if (!inputNumber) {
    
    const cardNumberInput = localStorage.getItem("cardNumberInput") || "0000000000000000";
    const formattedCardNumber = cardNumberInput.replace(/(\d{4})/g, "$1 ")
    document.getElementById("output1").innerHTML = formattedCardNumber;
  }
  else{
 
      document.getElementById("output1").innerHTML = inputNumber
    }
   

  if (!inputValue) {
   document.getElementById("output2").innerHTML = localStorage.getItem("cardNameInput") || "Jane Appleseed"
  
  }
  else{
    
    document.getElementById("output2").innerHTML = inputValue
  }

  if (!inputMm) {
    document.getElementById("output3").innerHTML = localStorage.getItem("motherNumberInput /") || "00/"
  }
  else{
    document.getElementById("output3").innerHTML = inputMm
  }

  if (!inputYy) {
    document.getElementById("output4").innerHTML = localStorage.getItem("yearNumberInput") ||"00"
  }
  else{
    document.getElementById("output4").innerHTML = inputYy;
  }
 
  if (!inputCvv) {
    document.getElementById("output5").innerHTML = localStorage.getItem("cvvNumberInput") || "123"
  }
  else{
    document.getElementById("output5").innerHTML = inputCvv;
  }

}




  function validateCardName() {
    const cardNameInput = document.getElementById('name-card');
    const cardNameValue = cardNameInput.value;
    if (cardNameValue == '') {
      cardNameInput.style.border = '1px solid hsl(0, 100%, 66%)'; 
      cardNameInput.setCustomValidity('wrong format, name only'); 
    } else {
      cardNameInput.style.borderColor = ''; 
      cardNameInput.setCustomValidity(''); 
    }
  
  }
  function validateCardNumber() {
    const cardNumberInput = document.getElementById('number-card');
    const cardNumberValue = cardNumberInput.value;
    if (isNaN(cardNumberValue)) {
      cardNumberInput.style.border = '1px solid hsl(0, 100%, 66%)';
      cardNumberInput.setCustomValidity('wrong format, numbers only'); 
    } else {
      cardNumberInput.style.borderColor = ''; 
      cardNumberInput.setCustomValidity(''); 
    }
  
  }
    
    
  function validateExpMm() {
    const motherNumberInput = document.getElementById('mm');
    const motherNumberValue = motherNumberInput.value;
    if (isNaN(motherNumberValue)) {
      motherNumberInput.style.border = '1px solid hsl(0, 100%, 66%)'; 
      motherNumberInput.setCustomValidity(msg); 
    } else {
      motherNumberInput.style.borderColor = ''; 
      motherNumberInput.setCustomValidity(''); 
    }
  }
  function validateExpYy() {
    const yearNumberInput = document.getElementById('yy');
    const yearNumberValue = yearNumberInput.value;
    if (isNaN(yearNumberValue)) {
      yearNumberInput.style.border = '1px solid hsl(0, 100%, 66%)'; 
      yearNumberInput.setCustomValidity(msg); 
    } else {
      yearNumberInput.style.borderColor = ''; 
      yearNumberInput.setCustomValidity(''); 
    }
  }
  function validateCvv() {
    const cvvNumberInput = document.getElementById('cvv');
    const cvvNumberValue = cvvNumberInput.value;
    if (isNaN(cvvNumberValue)) {
      cvvNumberInput.style.border = '1px solid hsl(0, 100%, 66%)';
      
      cvvNumberInput.setCustomValidity(msg); 
    } else {
      cvvNumberInput.style.borderColor = ''; 
      cvvNumberInput.setCustomValidity(''); 
    }
  }
  
  
  
  // seleciona o formulário

if (form) {
  
// adiciona um evento de envio do formulário
form.addEventListener('submit', (e) => {
  // previne o comportamento padrão do envio do formulário
  e.preventDefault();
  
  console.log(cardNameInput.value)
  saveLocalStorage()
  // redireciona o usuário para a página desejada
  window.location.href = 'in.html';
});
}

function saveLocalStorage() {
localStorage.setItem("cardNameInput",cardNameInput.value)
localStorage.setItem("cardNumberInput",cardNumberInput.value)
localStorage.setItem("motherNumberInput",motherNumberInput.value)
localStorage.setItem("yearNumberInput",yearNumberInput.value)
localStorage.setItem("cvvNumberInput",cvvNumberInput.value)
}