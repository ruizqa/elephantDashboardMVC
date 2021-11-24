const {elephantModel} = require( './../models/elephantModel' );


const ElephantController = {
    home:function(req, res) {
        elephantModel
        .findAll()
        .then(data => res.render("results", {elephants: data}))
        .catch(err => console.log(err))
    },


    addElephant: function(req, res){
        res.render("form");
    },

    postElephant:function(req, res) {
        let elephant = {}
        elephant.name = req.body.name;
        elephant.age = req.body.age;
        elephant.type = req.body.type;
        elephantModel
        .create(elephant)
        .then(newElephant => console.log('Elephant created: ', newElephant))
        .catch(err => console.log(err))
        res.redirect('/')
    },


    displayElephant: function(req, res){
        elephantModel
        .findById(req.params.id)
        .then(data => res.render("display", {elephant:data}))
        .catch(err => res.json(err));
    },

    editElephant: function(req, res){
        elephantModel
        .findById(req.params.id)
        .then(data => res.render("edit", {elephant:data}))
        .catch(err => res.json(err));
    },


    postEdit: function(req, res) {
        console.log(req.body)
        let elephant = {}
        elephant.name = req.body.name;
        elephant.age = req.body.age;
        elephant.type = req.body.type;
    
        elephantModel
        .update(req.body.id, elephant)
        .then(newElephant => console.log(`Elephant ${request.body.id} edited: `, newElephant))
        .catch(err => console.log(err))
        res.redirect('/')
    },

    killElephant:  function(req, res){
        elephantModel
        .delete(req.body.id)
        .then(console.log(`Deleting elephant ${req.body.id}`))
        .catch(err => console.log(err));
    
        res.redirect('/')
    }




}


module.exports={ElephantController}
