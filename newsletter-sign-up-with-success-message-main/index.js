const validateEmail = (email) => {
  var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return emailRegex.test(email)
}
const onSubmitDesktop = (event) => {
  var email = document.getElementById("email");
  if(!validateEmail(email.value)) {
    var error = document.getElementById("error");
    error.classList.add("visible")
    email.classList.add("error");
  }

  if(validateEmail(email.value)) {
    var error = document.getElementById("error");

    error?.classList?.remove("visible")
    email?.classList?.remove("error");

    showSuccess(email.value)
  }
}

const showSuccess = (email) => {
  var successForm = document.getElementById('success-form')
  var successEmail = document.getElementById('success-email')
  var desktopForm = document.getElementById('desktop-form')
  desktopForm.classList.add("hidden")

  var mobileForm = document.getElementById('mobile-form')
  mobileForm.classList.add("hidden")

  successEmail.innerHTML = email + '.'
  successForm.classList.remove("hidden")
}

const onSubmitMobile = (event) => {
  var email = document.getElementById("email-mobile");
  if(!validateEmail(email.value)) {
    var error = document.getElementById("error-mobile");
    error.classList.add("visible")
    email.classList.add("error");
  }

  if(validateEmail(email.value)) {
    var error = document.getElementById("mobile-error");
    error?.classList?.remove("visible")
    email?.classList?.remove("error");


    showSuccess(email.value)
  }
}

const dismissMessage = () => {
  var desktopForm = document.getElementById('desktop-form')
  var mobileForm = document.getElementById('mobile-form')
  var successForm = document.getElementById('success-form')
  var successEmail = document.getElementById('success-email')
  var email = document.getElementById("email");
  var mobile_email = document.getElementById("email-mobile");


  successEmail.innerHTML = ''
  desktopForm.classList.remove("hidden")
  mobileForm.classList.remove("hidden")
  successForm.classList.add("hidden")
  email.value = ''
  mobile_email.value = ''
}