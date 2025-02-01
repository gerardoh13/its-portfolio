const $form = document.getElementById('contact-form')

$form.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value

    if (!name || !email || !message) {
        alert("Please fill in all fields.")
        event.preventDefault()
    }
}

console.log("hello world")