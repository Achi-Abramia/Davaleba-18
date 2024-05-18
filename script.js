// დავალება 1
// შექმენით ფორმა და დაამატეთ ვალიდაციები შემდეგი პირობებით:
// firstName: შეამოწმეთ თუ სახელის სიგრძე ნაკლებია 6 სიმბოლოზე  გამოაჩინეთ ერორი;
// lastName: შეამოწმეთ თუ გვარის სიგრძე  ნაკლებია 6 სიმბოლოზე  გამოაჩინეთ ერორი;
// email:   დაამატეთ რეგექსის ვალდიაცია, ამ მასალის მიხედვით https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
// password: შეამოწმეთ თუ პაროლის სიგრძე ნაკლებია 6 სიმბოლოზე გამოაჩინეთ ერორი;
// confirm password შეამოწმეთ მისი მნიშვნელობა  ემთხვევა თუ არა password ველში ჩაწერილ მნიშნელობას, თუ არ ემთხვევა გამოაჩინეთ ერორი;
// description: დაამატეთ textarea და შეზღუდეთ სიმბოლოების რაოდენობა მაქს 100 სიმბოლო თუ 100 სიმბოლოზე მეტს ჩაწერთ, გამოაჩინეთ ერორი;


// registration ღილაკზე დაჭერისას, ფორმა დაასაბმითეთ და თუ რომელიმე ზემოთ ჩამოთვლილი პირობა არ შესრულდა, კონკრეტული ველის ქვემოთ p ტეგში გამოიტანეთ შესაბამისი  ერორის ტექსტი. 


const registrationForm = document.getElementById("registration")
registrationForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const registrationValues = document.forms["registration"]
  const firstName = registrationValues.first_name
  const firstNameError = registrationValues.first_name_error
  const lastName = registrationValues.last_name
  const lastNameError = registrationValues.last_name_error
  const email = registrationValues.email
  const emailError = registrationValues.email_error
  const password = registrationValues.password
  const passwordError = registrationValues.password_error
  const confirmPassword = registrationValues.confirm_password
  const confirmPasswordError = registrationValues.confirm_password_error
  const description = registrationValues.description
  const descriptionError = registrationValues.description_error
  
  try {
    if (firstName.value.length < 6) {
      firstName.style.border = "2px solid red"
      throw new Error("First name must contain minimum 6 letter")
    } else {
      firstName.style.border = "2px solid green"
      firstNameError.textContent = "First name is valid"
      firstNameError.style.color = "green"
    }
  } catch (error) {
    firstNameError.textContent = error.message
    firstNameError.style.color = "red"
  }
})