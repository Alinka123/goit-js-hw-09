const formData = {
    email: "",
    message: "",
}
const formEl = document.querySelector(".feedback-form")
const LS_KEY = "feedback-form-state"

formEl.addEventListener("input", handleFormInput)
formEl.addEventListener("submit", handleFormSubmit)

function handleFormInput(e) {
    formData[e.target.name] = e.target.value.trim()
 localStorage.setItem(LS_KEY, JSON.stringify(formData))   
}
function populateTexarea() {
    const savedData = localStorage.getItem(LS_KEY)
    if (!savedData) return

    const data = JSON.parse(savedData)
   formData.email = data.email || '';
    formData.message = data.message || '';
    
    formEl.email.value = formData.email;
  formEl.message.value = formData.message;
}

function handleFormSubmit(e){
    e.preventDefault()
    const {email, message} = formData
    if (!email || !message) {
        alert('Fill please all fields')
        return
    }
console.log(formData);
    localStorage.removeItem(LS_KEY)
    formEl.reset()
    formData.email = '';
formData.message = '';
}
populateTexarea()