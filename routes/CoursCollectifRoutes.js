const express = require('express');
const CoursCollectif = require('../model/coursCollectif');

const router = express.Router();

// Récupérer tous les cours collectifs
router.get('/courses', async (req, res) => {
    try {
        const courses = await CoursCollectif.getAllCourses();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des cours collectifs' });
    }
});

// Récupérer les cours collectifs d'un club spécifique
router.get('/courses/club/:id_club', async (req, res) => {
    const { id_club } = req.params;
    try {
        const courses = await CoursCollectif.getCoursesByClub(id_club);
        res.json(courses);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des cours par club' });
    }
});

// Récupérer les cours collectifs par date
router.get('/courses/date/:date', async (req, res) => {
    const { date } = req.params;
    try {
        const courses = await CoursCollectif.getCoursesByDate(date);
        res.json(courses);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des cours par date' });
    }
});

// Ajouter un cours collectif
router.post('/courses', async (req, res) => {
    const { nom, description, max_participant, id_club } = req.body;
    try {
        const newCourse = await CoursCollectif.addCourse(nom, description, max_participant, id_club);
        res.json(newCourse);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de l’ajout du cours collectif' });
    }
});

module.exports = router;
