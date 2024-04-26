const form = document.getElementById("registration");
const username = form.elements["username"]
const email = form.elements["email"];
const password = form.elements["password"];


//! Username Validation:
function checkUserName(errorDisplayDiv) {
    // Regex: checks for two at least unique characters 
    // and no special characters or whitespace
    const regex = /^(?=.*(.).*\1)[A-Za-z0-9]{2,}$/;

    // test regex
    console.log(regex.test(username.value));


    if (!regex.test(username.value)) {
        console.log('gere');
        errorDisplayDiv.innerHTML = '<small>Provide two special characters</small>';
        errorDisplayDiv.style.display = 'block';

        username.focus();
        return false;
    }
    return username.value;
}


//! Email Validation:
function validateEmail(errorDisplayDiv) {
    //Regex: Email validation.
    //@ and domain name.
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    //test regex
    console.log(regex.test(email.value)); 
    
    if (!regex.test(email.value)) {
        console.log('gere');
        errorDisplayDiv.innerHTML = '<small>Invalid email format.</small>';
        errorDisplayDiv.style.display = 'block';

        email.focus();
        return false;
    }
    return email.value;
}








    // let emailVal = email.value;

    // const atpos = emailVal.indexOf('@');
    // const dotpos = emailVal.lastIndexOf(".");

    // if (atpos < 1) {
    //     alert(
    //         "Your email must include an @ symbol, which must be at the beginning of email."
    //     );
    //     email.focus();
    //     evt.returnValue = false;
    //     return false;
    // }

    // if (dotpos - atpos < 2) {
    //     alert(
    //         "Invalid structure: @.\nYou must include a domain name after the @ symbol."
    //     );
    //     email.focus();
    //     evt.returnValue = false;
    //     return false;
    // }

    // evt.returnValue = true;
    // return emailVal;
}

form.addEventListener('submit', validateEmail);