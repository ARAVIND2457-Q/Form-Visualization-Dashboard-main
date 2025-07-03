const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    salery: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    hike: {
        type: Number
    },
    tokens: [
        {
            token: {
                type: String,
                required: true,
                timestamps: true
            }
        }
    ]
});

// hashing the password
UserSchema.pre('save', async function (next) {
    console.log('pre method bcrypt in')
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
})

// generating jwt token for authentication
UserSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }
}

const User = mongoose.model('User', UserSchema);

module.exports = User;