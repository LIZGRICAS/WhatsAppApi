const express = require("express");
const apiRoute = require("./routes/routes")

const app = express();

/* creación de puerto donde se consumirá la api */
const PORT = process.env.PORT || 3000;

/* formateo de la app */
app.use(express.json());

app.use("/whatsapp", apiRoute);

/* correr la aplicación */
app.listen(PORT, () => (console.log("el puerto es: " + PORT)));