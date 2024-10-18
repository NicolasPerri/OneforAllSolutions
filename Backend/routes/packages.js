const express = require('express');
const router = express.Router();
const Package = require('../models/Package');

// Obtener todos los paquetes
router.get('/', async (req, res) => {
  try {
    const packages = await Package.find();
    res.json(packages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obtener un paquete específico por ID
router.get('/:id', getPackage, (req, res) => {
  res.json(res.package);
});

// Crear un nuevo paquete
router.post('/', async (req, res) => {
  const package = new Package({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    features: req.body.features
  });

  try {
    const newPackage = await package.save();
    res.status(201).json(newPackage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Actualizar un paquete
router.patch('/:id', getPackage, async (req, res) => {
  if (req.body.name != null) {
    res.package.name = req.body.name;
  }
  if (req.body.description != null) {
    res.package.description = req.body.description;
  }
  if (req.body.price != null) {
    res.package.price = req.body.price;
  }
  if (req.body.features != null) {
    res.package.features = req.body.features;
  }

  try {
    const updatedPackage = await res.package.save();
    res.json(updatedPackage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Eliminar un paquete
router.delete('/:id', getPackage, async (req, res) => {
  try {
    await res.package.remove();
    res.json({ message: 'Paquete eliminado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware para obtener un paquete por ID
async function getPackage(req, res, next) {
  let package;
  try {
    package = await Package.findById(req.params.id);
    if (package == null) {
      return res.status(404).json({ message: 'Paquete no encontrado' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.package = package;
  next();
}

module.exports = router;