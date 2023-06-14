


const input1 = document.querySelector("#submit");
input1.addEventListener('click', function() {
    alert('Stay Tuned!');
});

//Practicing arrow functions:
//input1.addEventListener('click', () => alert('Stay Tuned!'));

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