const User = require('../models/users'); // Importa tu modelo de usuario

// Controlador para gestionar usuarios
const UserController = {
    // Crear un usuario
    createUser: async (req, res) => {
        try {
            const { name, email, password } = req.body;

            // Validar campos obligatorios
            if (!name || !email || !password) {
                return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
            }

            // Crear el usuario
            const newUser = new User({ name, email, password });
            await newUser.save();

            res.status(201).json({ message: 'Usuario creado con éxito.', user: newUser });
        } catch (error) {
            res.status(500).json({ message: 'Error al crear el usuario.', error: error.message });
        }
    },

    // Obtener todos los usuarios
    getAllUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener los usuarios.', error: error.message });
        }
    },

    // Obtener un usuario por ID
    getUserById: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await User.findById(id);

            if (!user) {
                return res.status(404).json({ message: 'Usuario no encontrado.' });
            }

            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener el usuario.', error: error.message });
        }
    },

    // Actualizar un usuario
    updateUser: async (req, res) => {
        try {
            const { id } = req.params;
            const updates = req.body;

            const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true });

            if (!updatedUser) {
                return res.status(404).json({ message: 'Usuario no encontrado.' });
            }

            res.status(200).json({ message: 'Usuario actualizado con éxito.', user: updatedUser });
        } catch (error) {
            res.status(500).json({ message: 'Error al actualizar el usuario.', error: error.message });
        }
    },

    // Eliminar un usuario
    deleteUser: async (req, res) => {
        try {
            const { id } = req.params;

            const deletedUser = await User.findByIdAndDelete(id);

            if (!deletedUser) {
                return res.status(404).json({ message: 'Usuario no encontrado.' });
            }

            res.status(200).json({ message: 'Usuario eliminado con éxito.' });
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar el usuario.', error: error.message });
        }
    },
};

module.exports = UserController;