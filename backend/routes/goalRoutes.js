const express = require('express')
const router = express.Router()
const { getGoals, postGoals, updateGoals, deleteGoals, setGoals } = require('../controller/goalController')

router.route('/').get(getGoals).post(setGoals)
router.route('/:id').put(updateGoals).delete(deleteGoals)

module.exports = router




//Another way to make, but aren't so clean

/*
router.get('/', (getGoals))

router.post('/', (setGoals))

router.put('/:id', (updateGoals))

router.delete('/:id', (deleteGoals))
*/

