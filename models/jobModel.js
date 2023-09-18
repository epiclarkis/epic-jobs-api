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
    jobCategory: {
        type: String,
        required: true
    },
    jobDescription: {
        type: String,
        required: true
    },
    jobStatus: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Job', jobSchema)