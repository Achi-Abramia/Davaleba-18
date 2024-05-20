// დავალება 1
// შექმენით ფორმა და დაამატეთ ვალიდაციები შემდეგი პირობებით:
// firstName: შეამოწმეთ თუ სახელის სიგრძე ნაკლებია 6 სიმბოლოზე  გამოაჩინეთ ერორი;
// lastName: შეამოწმეთ თუ გვარის სიგრძე  ნაკლებია 6 სიმბოლოზე  გამოაჩინეთ ერორი;
// email:   დაამატეთ რეგექსის ვალდიაცია, ამ მასალის მიხედვით https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
// password: შეამოწმეთ თუ პაროლის სიგრძე ნაკლებია 6 სიმბოლოზე გამოაჩინეთ ერორი;
// confirm password შეამოწმეთ მისი მნიშვნელობა  ემთხვევა თუ არა password ველში ჩაწერილ მნიშნელობას, თუ არ ემთხვევა გამოაჩინეთ ერორი;
// description: დაამატეთ textarea და შეზღუდეთ სიმბოლოების რაოდენობა მაქს 100 სიმბოლო თუ 100 სიმბოლოზე მეტს ჩაწერთ, გამოაჩინეთ ერორი;


// registration ღილაკზე დაჭერისას, ფორმა დაასაბმითეთ და თუ რომელიმე ზემოთ ჩამოთვლილი პირობა არ შესრულდა, კონკრეტული ველის ქვემოთ p ტეგში გამოიტანეთ შესაბამისი  ერორის ტექსტი. 


const firstNameError = document.getElementById("first_name_error")
const lastNameError = document.getElementById("last_name_error")
const emailError = document.getElementById("email_error")
const passwordError = document.getElementById("password_error")
const confirmPasswordError = document.getElementById("confirm_password_error")
const descriptionError = document.getElementById("description_error")

const registrationForm = document.getElementById("registration")
registrationForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const registrationValues = document.forms["registration"]
  const firstName = registrationValues.first_name
  const lastName = registrationValues.last_name
  const email = registrationValues.email
  const password = registrationValues.password
  const confirmPassword = registrationValues.confirm_password
  const description = registrationValues.description


  try {
    if (firstName.value.length < 6) {
      firstName.style.border = "2px solid red"
      throw new Error("First name must contain minimum 6 letter")
    } else {
      firstName.style.border = "2px solid green"
      firstNameError.textContent = "First name is valid"
      firstNameError.style.color = "green"
    }
    if (lastName.value.length < 6) {
      lastName.style.border = "2px solid red"
      throw new Error("Last name must contain minimum 6 letter")
    } else {
      lastName.style.border = "2px solid green"
      lastNameError.textContent = "last name is valid"
      lastNameError.style.color = "green"
    }
    if (password.value.length < 6) {
      password.style.border = "2px solid red"
      throw new Error("Password must contain minimum 6 letter")
    } else {
      password.style.border = "2px solid green"
      passwordError.textContent = "Password is valid"
      passwordError.style.color = "green"
    }
    if (confirmPassword !== password) {
      confirmPassword.style.border = "2px solid red"
      throw new Error("The password confirmation doesn't march")
    } else {
      confirmPassword.style.border = "2px solid green"
      confirmPasswordError.textContent = "The password confirmation is valid"
      confirmPasswordError.style.color = "green"
    }
    if (description.value.length > 100) {
      description.style.border = "2px solid red"
      throw new Error("Description character limit is 100")
    } else {
      description.style.border = "2px solid green"
      descriptionError.textContent = "Description is valid"
      descriptionError.style.color = "green"
    }
  } catch (error) {
    firstNameError.textContent = error.message
    firstNameError.style.color = "red"
    lastNameError.textContent = error.message
    lastNameError.style.color = "red"
  } 

})


// დავალება 2 
// დაამატეთ ინფუთის ველი;
// ღილაკზე დაჭერისას , რასაც ჩაწერთ ინფუთის ველში, დააფუშეთ ცარიელ მასივში;
//  ამ მასივში შენახული  მნიშვნელობები გამოიტანეთ li ტეგების შიგნით.


const inputText = document.getElementById("text_for_array")
const arrayButton = document.getElementById("array_button")
const ul = document.getElementById("array_text")
const li = document.getElementById("array_text_li")

arrayButton.addEventListener("click", () => {
  const arrayForText = []
  arrayForText.push(inputText.value)
  inputText.value = ""
  
  for (let i = 0; i < arrayForText.length; i++) {
    let liText = arrayForText[i]
    li.textContent = liText
  }
})


// დავალება 3
// შექმენით 5 ელემენტიანი  ობიექტების მასივი (სახელი, გვარი, ასაკი, პროფესია);
//  გაფილტრეთ ის ელემენტები, რომლის ასაკიც მეტია 18ზე;
// გამოიტანეთ მხოლოდ გაფილტრული ობიექტები  li კონტენტის შიგნით.


const ulPerson = document.getElementById("person")

const arrayToFilter = [
   {
        name: 'Levani',
        lastName:'Chaobashvili',
        age: 23,
        profession:"Cook"
    },
    {
        name: 'Gigi',
        lastName:'Khajomia',
        age: 23,
        profession:"Dentist"
    },
    {
        name: 'Achi',
        lastName:'Abramia',
        age: 27,
        profession:"Developer"
    },
    {
        name: 'Dato',
        lastName:'Terterashvili',
        age: 16,
        profession:"Analyst"
    },
    {
        name: 'Nini',
        lastName:'Kurtanidze',
        age: 17,
        profession:"Doctor"
    },
]

for (let i = 0; i < arrayToFilter.length; i++) {
  const obj = arrayToFilter[i]
  if (obj.age > 18) {
    const liPersonInfo = document.createElement("li")
    liPersonInfo.textContent = `${obj.name} ${obj.lastName} ${obj.age} ${obj.profession}`
    ulPerson.appendChild(liPersonInfo)
  }
}


// დავალება 4
// html შექმენით <div id="user-list"></div> გამოიყენეთ 4 ელემენტიანი გრიდ სისტემა,
// ეს მასივი გამოიყენეთ და html ში გამოიტანეთ (ჯავასკრიპტით) 4 user card, თითოეული ქარდი უნდა შეიცავდეს შემდეგ ინფორმაციას users მასივის ელემენტებიდან   

//   (ობიექტებიდან):
//  1. image ჩასვით სურათის ადგილას (შეგიძლიათ image ფოტოები შეცვალოთ)
//  2. "John Doe" ს ადგილას ჩასვით first_name და last_name.


//  (მოქმედებები) #5 დავალებაში შექმნილ user card - ს აქვს ღილაკები (აიქონები თუ ვერ ნახეთ ამ ღილაკებზე სიტყვიერად დაწერეთ წაშლა და ინფო), ინფო ღილაკზე დაჭერის შედეგად ღილაკების ქვემოთ გამოვაჩინოთ email, რომელიც განთავსებული იქნება ცენტრში, წაშლა ღილაკზე დაჭერით წავშალოთ შესაბამისი user card-ი. გამოიყენეთ remove() მეთოდი


const users = [
{
id: 7,
email: "michael.lawson@reqres.in",
first_name: "Michael",
last_name: "Lawson",
image: "https://picsum.photos/200/300",
},
{
id: 8,
email: "lindsay.ferguson@reqres.in",
first_name: "Lindsay",
last_name: "Ferguson",
image: "https://picsum.photos/200/300",
},
{
id: 9,
email: "tobias.funke@reqres.in",
first_name: "Tobias",
last_name: "Funke",
image: "https://picsum.photos/200/300",
},
{
id: 10,
email: "byron.fields@reqres.in",
first_name: "Byron",
last_name: "Fields",
image: "https://picsum.photos/200/300",
},
{
id: 11,
email: "george.edwards@reqres.in",
first_name: "George",
last_name: "Edwards",
image: "https://picsum.photos/200/300",
},
{
id: 12,
email: "rachel.howell@reqres.in",
first_name: "Rachel",
last_name: "Howell",
image: "https://picsum.photos/200/300",
}
];


const cardContainer = document.createElement("div")
cardContainer.setAttribute("id", "card_container")
document.body.appendChild(cardContainer)

for (let i = 0; i < 4; i++) {
  const userInfo = users[i]
  const cardBox = document.createElement("div")
  cardBox.setAttribute("id", "card_box")
  cardContainer.appendChild(cardBox)


  const cardBoxImage = document.createElement("img")
  cardBoxImage.setAttribute("src", `${userInfo.image}`)
  cardBoxImage.setAttribute("id", "card_box_image")
  cardBox.appendChild(cardBoxImage)
  
  const cardName = document.createElement("span")
  cardName.textContent = `${userInfo.first_name} ${userInfo.last_name}`
  cardName.setAttribute("id", "card_name")
  cardBox.appendChild(cardName)
  
  const buttonDelete = document.createElement("button")
  buttonDelete.textContent = "წაშლა"
  buttonDelete.setAttribute("id", "button_delete")
  cardBox.appendChild(buttonDelete)
  
  buttonDelete.addEventListener("click", () => {
    cardBox.remove()
  })
  
  const buttonInfo = document.createElement("button")
  buttonInfo.textContent = "ინფო"
  buttonInfo.setAttribute("id", "button_info")
  cardBox.appendChild(buttonInfo)
  
  buttonInfo.addEventListener("click", () => {
    if (!cardBox.querySelector(".card_email")) {
      const cardEmail = document.createElement("span")
      cardEmail.textContent = userInfo.email
      cardEmail.setAttribute("class", "card_email")
      cardBox.appendChild(cardEmail)
    }
  })
}
