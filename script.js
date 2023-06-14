


const form = document.querySelector('form');

function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.message.value)
    form.reset()
}

form.addEventListener('submit', handleSubmit);

// const input1 = document.querySelector('#submit')
// input1.addEventListener('click', () => alert('Stay Tuned!'));

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