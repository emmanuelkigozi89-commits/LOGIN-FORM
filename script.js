const userName = document.getElementById('name')
const phoneNumber = document.getElementById('Phone_number')
const email = document.getElementById('email')
const form = document.getElementById('form')
const ppassword = document.getElementById('ppassword')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  const messages = []

  if (userName.value === '' || userName.value == null) {
    messages.push('Name is required')
  }

  if (ppassword.value.length <=6 ) {
    messages.push('Password is required and must be not less than 6 characters')
  }
  if(ppassword.value.length >=10 ){
    messages.push('Password must not be more than 10 characters.')
  }

  if (phoneNumber.value === '' || phoneNumber.value == null || !/^\d+$/.test(phoneNumber.value)) {
    messages.push('Phone number is required and must contain only numbers')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})