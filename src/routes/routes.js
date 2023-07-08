const expres = require("express");
const router = expres.Router();

const whatsappController = require("../controllers/whatsappControllers"); 

/* métodos para verificar token (get) y post recibir mns */
router
.get("/", whatsappController.VerifyToken)
.post("/", whatsappController.ReceivedMessage)

module.exports = router;