const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
    userName: {
        type: 'string',
        required: true,
        minLength: 3
    },
    email: {
        type: 'string',
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Please enter a valid email');
            }
        }
    },
    password: {
        type: 'string',
        required: true,
        min:5
    }
});

userSchema.pre("save",async function(next){
    let salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password,salt);
    next();

})
const User= mongoose.model('User',userSchema);

module.exports = User;