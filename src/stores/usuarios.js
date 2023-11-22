import { ref, onMounted } from 'vue'
import {defineStore} from 'pinia'
import axios from 'axios';
import swal from 'sweetalert';

export const useUsuariosStore = defineStore('usuarios', () => {
    const users = ref([]);
    const roles = ref([]);
    const user = ref({
        usuario: '',
        contrasena: '',
        correo: '',
        rol: ''
    });



    // obtener roles

    const getRoles = async () => {
        const request = await axios.get('http://localhost:3000/api/roles');
        roles.value = request.data;
    }

    const getUsuarios = async () => {
        const request = await axios.get('http://localhost:3000/api/usuarios');
        users.value = request.data;
    }

    // crear usuarios
    const addUsuario = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/usuarios', user.value, {
                headers: {
                    'Content-Type': 'application/json'
                },
                responseType: 'json',
                withCredentials: false
            });

            if (response.status !== 200) {
               throw new Error('Error al agregar el registro'+response.status);
            }
            await getUsuarios();
            console.log(response.data);
            swal("Registro agregado correctamente", "Presiona el botón!", "success");
        } catch (error) {
            console.error(error);
            swal("Error al agregar el registro", "Presiona el botón!", "error");
        }   
    }

    onMounted(async () => {        
        await getRoles();
        await getUsuarios();
    })

    

    return {
        roles,
        user,
        users,
        addUsuario
        
    }
});