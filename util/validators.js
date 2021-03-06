//Register Form Validator
module.exports.validateRegisterInput = (
    email,
    password,
    confirmPassword
) => {
    const errors = {};

    if(email.trim() === '') {
        errors.email = 'Email must not be empty';
    }

    else {
        const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;

        if(!email.match(regEx)) {
            errors.email = 'Email must be a valid email adress';
        }
    }

    if (password === '') {
        errors.password = 'Password must not be empty';
    }

    else if(password !== confirmPassword) {
        errors.password = 'Passwords must match';
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}

//Login Form Validator
module.exports.validateLoginInput = (email, passowrd) => {
    const errors = {};

    if(email.trim() === '') {
        errors.email = 'Email must not be empty';
    }

    if(passowrd.trim() === '') {
        errors.password = 'Password must not be empty';
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}