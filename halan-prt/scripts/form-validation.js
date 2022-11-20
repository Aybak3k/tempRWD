// WARNING:- mv back-end

// Temp
// name.value === '' || == null


// Vars
const passwd = document.querySelector("#passwd")
const confirmPasswd = document.querySelector("#confirm-passwd")
const signupForm = document.querySelector("#signup-form")


// $
signupForm.addEventListener("submit", e => {
    if (passwd.value != confirmPasswd.value) {
        e.preventDefault()
        alert("Passwords Don't Match")  // TODO: send them in a beautiful way
    }
})


// var inputs = document.getElementsByTagName("input");
// for(var i = 0; i < inputs.length; i++){
//     inputs[i].required = true;
// }

// for when ya wan add nofollow for all user links in input
// or noopener for all external links