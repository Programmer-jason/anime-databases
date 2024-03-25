const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
        email: {
            type: String,
            required: [true, 'you need to add email'],
        },
        pass: {
            type: String
        }
    },
    {
        timestamp: true
    }
)

const Admin = mongoose.model('admin', AdminSchema);

module.exports = Admin

