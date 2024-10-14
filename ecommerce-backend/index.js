// index.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes"); 
const authRoutes = require("./routes/authRoutes"); 

dotenv.config();

const app = express();


mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB conectado"))
  .catch((error) =>
    console.log(`Error de conexión a MongoDB: ${error.message}`)
  );

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/products", productRoutes); 
app.use("/api/auth", authRoutes); 

// Ruta raíz de prueba
app.get("/", (req, res) => {
  res.send("Bienvenido a la API de la aplicación de comercio electrónico");
});

// Manejo de errores generales
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Algo salió mal, por favor intente nuevamente.");
});

// Puerto y arranque del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
