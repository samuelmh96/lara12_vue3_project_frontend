<template>
    <h1>Login</h1>

    <label for="">Ingrese su correo: </label>
    <input type="email" placeholder="Ingrese su correo"  v-model="credenciales.email"/>
    <br>

    <label for="">Ingrese su contraseña: </label>
    <input type="password" placeholder="Ingrese su contraseña" v-model="credenciales.password"/>

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

const credenciales = ref({ email: '', password: '' });
const respuesta = ref({});

async function funIngresar() {
    const {data} = await authService.login(credenciales.value);
    respuesta.value = data;
}
</script>