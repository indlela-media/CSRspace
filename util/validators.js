module.exports.validateRegisterInput = (
    username,
    email,
    password,
    confirmPassword
) => {
    const errors = {};

    if(username.trim() === '') {
        errors.username = 'Username must not be empty';
    }
}