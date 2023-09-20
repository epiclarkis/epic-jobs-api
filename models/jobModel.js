const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jobSchema = new Schema({
    jobTitle: {
        type: String,
        required: true
    },
    jobCompany: {
        type: String,
        required: true
    },
    jobType: {
        type: String,
        required: true
    },
    jobLocation: {
        type: String,
        required: true
    },
    jobSalary: {
        type: Number,
        required: true
    },
    jobUrl: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Job', jobSchema)