let email = prompt('Enter an email', '');

let goodEmailFlag = false; //for easier  code reading
let goodPassFlag = false;

if (!email) {
    alert('Canceled.');
} else if (email.length < 6) {
    alert('I don’t know any emails having name length less than 6 symbols');
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
    goodEmailFlag = true;
} else {
    alert('I don’t know you');
}

if (goodEmailFlag) {
    let pass = prompt('Enter a password', '');

    if (!pass) {
        alert('Canceled.');
    } else if ((email === 'user@gmail.com' && pass === 'UserPass') || (email === 'admin@gmail.com' && pass === 'AdminPass')) {
        goodPassFlag = true;
    }
}

let newPass;

if (goodPassFlag) {
    if(!confirm('Do you want to change your password?')) {
        alert('You have failed the change.');
    } else {
        prompt('First write your old password', '');
        
        pass = prompt('Enter a password', '');

        if (!pass) {
            alert('Canceled.');
        } else if ((email === 'user@gmail.com' && pass === 'UserPass') || (email === 'admin@gmail.com' && pass === 'AdminPass')) {
            newPass = prompt('Enter a new password', '');
        }
    }
}

if (newPass) {
    if (newPass.length < 5) {
        alert('It’s too short password. Sorry.');
    } else {
        let passCheck = prompt("Enter new password again", '');
        
        if (newPass != passCheck) {
            alert('You wrote the wrong password.');
        } else {
            alert('You have successfully changed your password.');
        }
    }
}