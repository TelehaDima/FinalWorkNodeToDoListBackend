const { Router } = require('express');
const { getList, saveList, deleteList, editList } = require('./ListController');

const router = Router();

router.get('/', getList);
router.post('/saveList', saveList);
router.delete('/deleteList', deleteList);
router.put('/editList', editList);




module.exports = router;