import Animal from '../models/animalModel.js';

// Tüm hayvanları getir
export const getAnimals = async (req, res) => {
  try {
    const animals = await Animal.find();
    res.status(200).json(animals);
  } catch (error) {
    res.status(500).json({ message: 'Hayvanları alırken bir hata oluştu.', error: error.message });
  }
};

// Tek bir hayvanı getir
export const getAnimal = async (req, res) => {
  const { id } = req.params;
  try {
    const animal = await Animal.findById(id);
    if (!animal) {
      return res.status(404).json({ message: 'Hayvan bulunamadı.' });
    }
    res.status(200).json(animal);
  } catch (error) {
    res.status(500).json({ message: 'Hayvan alırken bir hata oluştu.', error: error.message });
  }
};

// Yeni bir hayvan oluştur
export const createAnimal = async (req, res) => {
  const { species, gender, color, healthStatus, image, description } = req.body;

  // Gerekli alanları kontrol et
  if (!species) {
    return res.status(400).json({ message: 'Tür alanı zorunludur.' });
  }

  try {
    const newAnimal = new Animal({
      species,
      gender,
      color,
      healthStatus,
      image,
      description,
    });

    const savedAnimal = await newAnimal.save();
    res.status(201).json({ message: 'Hayvan başarıyla eklendi.', data: savedAnimal });
  } catch (error) {
    res.status(500).json({ message: 'Hayvan eklerken bir hata oluştu.', error: error.message });
  }
};

// Bir hayvanı güncelle
export const updateAnimal = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedAnimal = await Animal.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedAnimal) {
      return res.status(404).json({ message: 'Hayvan bulunamadı.' });
    }
    res.status(200).json({ message: 'Hayvan başarıyla güncellendi.', data: updatedAnimal });
  } catch (error) {
    res.status(500).json({ message: 'Hayvan güncellenirken bir hata oluştu.', error: error.message });
  }
};

// Bir hayvanı sil
export const deleteAnimal = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedAnimal = await Animal.findByIdAndDelete(id);
    if (!deletedAnimal) {
      return res.status(404).json({ message: 'Hayvan bulunamadı.' });
    }
    res.status(200).json({ message: 'Hayvan başarıyla silindi.' });
  } catch (error) {
    res.status(500).json({ message: 'Hayvan silinirken bir hata oluştu.', error: error.message });
  }
};
