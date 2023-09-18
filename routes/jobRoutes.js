const express = require('express')
const router = express.Router()
const { 
    getJobs,
    getJob,
    postJob,
    patchJob,
    deleteJob
 } = require('../controllers/jobControllers')

// GET jobs
router.get('/', getJobs)

// GET job
router.get('/:id', getJob)

// POST job
router.post('/', postJob)

// PATCH job
router.patch('/:id', patchJob)

// DELETE job
router.delete('/:id', deleteJob)

module.exports = router