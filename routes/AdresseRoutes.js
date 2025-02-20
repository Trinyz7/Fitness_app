const express = require('express');
const Address = require('../model/adresse');

const router = express.Router();

// Récupérer l'adresse d'un utilisateur par son ID
router.get('/address/user/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const address = await Address.getAddressByUserId(userId);
        res.json(address);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération de l’adresse' });
    }
});

module.exports = router;
