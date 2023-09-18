const mongoose = require('mongoose')
const Job = require('../models/jobModel')

// GET jobs
const getJobs = async (req, res) => {
    const jobs = await Job.find({}).sort({ createdAt: -1 })
    res.status(200).json(jobs)
}

// GET job
const getJob = async (req, res) => {
    const {id} = req.params

    // Validate ID type
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Job does not exist.'})
    }

    const job = await Job.findById(id)

    if (!job) {
        return res.status(404).json({error: 'Job does not exist.'})
    }

    res.status(200).json(job)
}

// POST job
const postJob = async (req, res) => {
    const { jobTitle, jobType, jobCategory, jobDescription, jobStatus } = req.body

    try {
        const job = await Job.create({jobTitle, jobType, jobCategory, jobDescription, jobStatus})
        return res.status(200).json(job)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

// PATCH job
const patchJob = async (req, res) => {
    const {id} = req.params

    // Validate ID type
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Job does not exist.'})
    }
    
    const job = await Job.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!job) {
        return res.status(404).json({error: 'Job does not exist.'})
    }

    res.status(200).json(job)
}

// DELETE job
const deleteJob = async (req, res) => {
    const {id} = req.params

    // Validate ID type
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Job does not exist.'})
    }
    
    const job = await Job.findOneAndDelete({_id: id})

    if (!job) {
        return res.status(404).json({error: 'Job does not exist.'})
    }

    res.status(200).json(job)
}

module.exports = {
    getJobs,
    getJob,
    postJob,
    patchJob,
    deleteJob
}