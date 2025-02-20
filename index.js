require('dotenv').config();
const express = require('express');
const abonnementRoutes = require("./routes/AbonnementRoutes.js"); // Importation des routes

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware pour parser le JSON
app.use('/api', abonnementRoutes); // Intégration des routes des abonnements

app.get('/', (req, res) => {
    res.send('🚀 API is running!');
});

app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});
