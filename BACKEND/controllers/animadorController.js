import Animador from '../models/Animador.js';
import bcrypt from 'bcrypt';
    // Importa tu modelo de usuario

// Controlador para gestionar usuarios
/* const registrar = async (req, res) => {
    const { nombre, usuario, email, password, nacionalidad, urlPortafolio } = req.body;
    
    const animadorExistente = await Animador.findOne
    ({ email });
    if (animadorExistente) {
        return res.status(400).json({ msg: 'El usuario ya está registrado' });
    }

    try {
        const animador = new Animador(req.body);
        const animadorGuardado = await animador.save();
        res.json(animadorGuardado);
        res.json({ msg: 'Usuario registrado con éxito' });
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: 'Hubo un error al registrar el usuario', error: error.message });
            }
         }; */
         const registrar = async (req, res) => {
            const { nombre, usuario, email, password, nacionalidad, urlPortafolio } = req.body;
        
            try {
                // Verificar si el usuario ya está registrado
                const animadorExistente = await Animador.findOne({ email });
                if (animadorExistente) {
                    return res.status(400).json({ msg: 'El usuario ya está registrado' });
                }
        
                // Guardar nuevo usuario
                const animador = new Animador(req.body);
                const animadorGuardado = await animador.save();
        
                // ✅ Solo enviamos una respuesta
                return res.json({ 
                    msg: 'Usuario registrado con éxito', 
                    animador: animadorGuardado 
                });
        
            } catch (error) {
                console.log(error);
                return res.status(400).json({ 
                    msg: 'Hubo un error al registrar el usuario', 
                    error: error.message 
                });
            }
        };
        

const perfil = async (req, res) => {
    try {
        const animadores3D = await animadores3D.find({usuario: req.usuario.id});
        res.status(200).json(animadores3D);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los usuarios.', error: error.message });
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const animador = await Animador.findOne({ email });

        if (!animador) {
            return res.status(404).json({ msg: 'Usuario no encontrado' });
        }
        
        const passwordCorrecto = await bcrypt.compare(password, animador.password);

            if (!passwordCorrecto) {
                return res.status(400).json({ success: false, message: "Contraseña incorrecta" });
            }

            return res.status(200).json({ success: true, 
                message: "Contraseña correcta",
                id: animador._id.toString(), 
                nombre: animador.nombre,
                email: animador.email,});
               
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Error al iniciar sesión', error: error.message });
    }
};
    
/* 
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
    }, */


export {
    registrar, perfil, login
};