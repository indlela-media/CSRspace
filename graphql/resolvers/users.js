const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');

const User = require('../../models/User');

require('dotenv').config();

module.exports = {
    Mutation: {
        async register(_, { registerInput: {username, email, password, confirmPassowrd }}) {
            //Validate User Data

            //Make Sure User Doesnt Already Exist
            const user = await User.findOne({ username });

            if (user) {
                throw new UserInputError('Username is taken', {
                    errors: {
                        username: 'This username is taken'
                    }
                })
            }
            
            //Hash Password And Create Auth Token
            password = await bcrypt.hash(password, 12);

            const newUser = new User({
                email,
                username,
                password,
                createdAt: new Date().toISOString()
            });

            const res = await newUser.save();

            const token = jwt.sign({
                id: res.id,
                email: res.email,
                username: res.username
            }, process.env.SECRET_KEY, {expiresIn: '1h'});

            return {
                ...res._doc,
                id: res._id,
                token
            }
        }
    }
}