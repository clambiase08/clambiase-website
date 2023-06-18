


const contactForm = document.querySelector('form');
contactForm.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    let messageObj = {
        name: e.target.name.value,
        email: e.target.email.value,
        reason: e.target.reason.value,
        priority: e.target.priority.value,
        message: e.target.message.value
    }
    contactForm.reset()
    submitForm(messageObj)
}


function submitForm(messageObj) {
    fetch('http://localhost:3000/messages', {
        method: 'POST',
        headers: {
           'Content-type': 'application/json' 
        },
        body: JSON.stringify(messageObj)
    })
    .then(res => {
        if (!res.ok) {throw new Error('Network response was not ok');
     }
     return res.json();
    })
    .then(message => console.log(message))
    .catch(error => console.log(error))
}

const input2 = document.querySelector("#explore");
input2.addEventListener('click', function() {
    alert('Coming Soon!');
});

//Practicing adding event listener that deletes the submit button:

//function deleteSubmit(e) {
//    e.target.remove()
//}

//function addEventListenerToSubmitButton() {
//    const submit = document.querySelector("#submit")
//    submit.addEventListener('click', deleteSubmit)
//}

//addEventListenerToSubmitButton()