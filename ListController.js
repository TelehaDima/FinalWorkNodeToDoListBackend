const ListModel = require('./ListModel');

//GET
module.exports.getList = async (req, res) => {
    const MyList = await ListModel.find();
    res.send(MyList)
}

//POST
module.exports.saveList = async (req, res) => {
    const { name } = req.body;
    ListModel.create({ name })
        .then((data) => {
            console.log('Item added')
            res.send(data)
        }) 
}

//DELETE
module.exports.deleteList = async (req, res) => {
    const { _id } = req.body;
    ListModel.findByIdAndDelete(_id)
    .then(()=>res.send('Deleted item'))
}

//PUT
module.exports.editList = async (req, res) => {
    const { name, _id } = req.body;
    ListModel.findByIdAndUpdate(_id, { name })
    .then(()=>res.send('Edited List'))
}