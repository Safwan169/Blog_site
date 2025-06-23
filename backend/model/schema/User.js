const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: function() {
            return this.provider !== 'google'; // Only required if not Google auth
        }
    },
    userName: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    isBanned: {
        type: Boolean,
        default: false
    },
 
    photo: {
        type: String,
        default: ''
    },
    provider: {
        type: String,
        enum: ['local', 'google', 'facebook'], 
        default: 'local'
    },
    googleId: {
        type: String,
        sparse: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);