const express = require('express');
const Coach = require('../model/coach');

const router = express.Router();

// Récupérer tous les coachs
router.get('/coaches', async (req, res) => {
    try {
        const coaches = await Coach.getAllCoaches();
        res.json(coaches);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des coachs' });
    }
});

// Récupérer un coach par son ID
router.get('/coaches/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const coach = await Coach.getCoachById(id);
        res.json(coach);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération du coach' });
    }
});

// Ajouter un coach
router.post('/coaches', async (req, res) => {
    const { nom, prenom, email, specialite } = req.body;
    try {
        const newCoach = await Coach.createCoach(nom, prenom, email, specialite);
        res.json(newCoach);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de l’ajout du coach' });
    }
});

// Mettre à jour un coach
router.put('/coaches/:id', async (req, res) => {
    const { id } = req.params;
    const { nom, prenom, email, specialite } = req.body;
    try {
        const updatedCoach = await Coach.updateCoach(id, nom, prenom, email, specialite);
        res.json(updatedCoach);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la mise à jour du coach' });
    }
});

// Supprimer un coach
router.delete('/coaches/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Coach.deleteCoach(id);
        res.json({ message: 'Coach supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la suppression du coach' });
    }
});

module.exports = router;
