

<template>
    <h1>Perfil</h1>
    <div>
        <p><strong>ID:</strong> {{ perfil.id }}</p>
        <p><strong>Name:</strong> {{ perfil.name }}</p>
        <p><strong>Email:</strong> {{ perfil.email }}</p>
        <p><strong>Email Verified At:</strong> {{ perfil.email_verified_at || 'Not Verified' }}</p>
        <p><strong>Created At:</strong> {{ perfil.created_at }}</p>
        <p><strong>Updated At:</strong> {{ perfil.updated_at }}</p>
    </div>

    <button @click="funSalir()">Logout</button>
    
</template>

<script setup>
import { onMounted, ref } from 'vue';
import authService from '../../../services/auth.service';
import { useRouter } from 'vue-router';

const perfil = ref({});
const router = useRouter();

onMounted(() => {
    getPerfil();
});

async function getPerfil() {
  const {data} = await authService.perfil();
  perfil.value = data;
}

async function funSalir() {
    await authService.logout();
  localStorage.removeItem('access_token');
  router.push({ name: 'Login' });
}

</script>