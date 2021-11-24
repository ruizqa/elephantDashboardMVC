const express = require( 'express' );
const ElephantRouter = express.Router();
const {ElephantController} = require( './../controllers/Elephants' );


ElephantRouter.get('/',ElephantController.home)
ElephantRouter.get('/elephants/new',ElephantController.addElephant)
ElephantRouter.post('/elephants', ElephantController.postElephant)
ElephantRouter.get("/elephants/:id", ElephantController.displayElephant)
ElephantRouter.get("/elephants/edit/:id", ElephantController.editElephant)
ElephantRouter.post("/elephants/edit", ElephantController.postEdit)
ElephantRouter.post("/elephants/destroy", ElephantController.killElephant)


module.exports={ElephantRouter}