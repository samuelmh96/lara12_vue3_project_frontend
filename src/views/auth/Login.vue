<template>
    <h1>Login</h1>
    
    <br>
    <label for="">Ingrese su correo: </label>
    <input type="email" placeholder="Ingrese su correo" v-model="credenciales.email" />
    <span style="color: red;">{{ errors.email }}</span>
    <br>

    <label for="">Ingrese su contraseña: </label>
    <input type="password" placeholder="Ingrese su contraseña" v-model="credenciales.password" />
    <span style="color: red;">{{ errors.password }}</span>

    <br>
    <button @click="funIngresar()">Ingresar </button>

    <br>
    {{ credenciales }}
    <br>
    {{ respuesta }}

</template>

<script setup>
import { ref } from 'vue';
import authService from '../../services/auth.service';
import { useRouter } from 'vue-router';

const credenciales = ref({ email: '', password: '' });
const respuesta = ref({});
const errors = ref({});

const router = useRouter();

async function funIngresar() {
    try {
        const res = await authService.login(credenciales.value);
        respuesta.value = res.data;

        localStorage.setItem('access_token', res.data.access_token);

        //Redireccionar
        router.push({ name: 'MiPerfil' });

    } catch (error) {
        console.log(error.response?.data?.errors);
        errors.value = error.response?.data?.errors;
    }
}
</script>