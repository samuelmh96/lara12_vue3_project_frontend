<template>
    <!--
      <h1>Ingresar</h1>
  <br>
      <label for="">Ingrese Correo:</label>
      <input type="email" v-model="credenciales.email">
      {{ errors.email }}
      <br>
      <label for="">Ingrese Contraseña:</label>
      <input type="password" v-model="credenciales.password">
      {{ errors.password }}
      <br>
      <button @click="funIngresar()">Ingresar</button>
      <br>
      {{ credenciales }}
      <br>
      {{ respuesta }}
  
      -->
  
    <div
      class="flex items-center justify-center min-w-full min-h-screen overflow-hidden bg-surface-50 dark:bg-surface-950"
    >
      <div
        class="flex flex-col items-center justify-center w-full sm:w-[450px] px-6 py-12"
      >
        <!-- Contenedor principal con un gradiente de fondo -->
        <div
          class="p-3 bg-gradient-to-b from-primary-500 via-transparent to-transparent rounded-2xl"
        >
          <!-- Caja de contenido -->
          <div class="px-8 py-10 bg-surface-0 dark:bg-surface-900 rounded-2xl">
            <div class="mb-8 text-center">
              <!-- Icono/Logo -->
              <svg
                viewBox="0 0 54 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-16 h-16 mx-auto mb-8"
              >
                <path
                  fill="var(--primary-color)"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.1637 19.2467C17.1566 19.4033 17.1529 19.561 17.1529 19.7194C17.1529 25.3503 21.7203 29.915 27.3546 29.915C32.9887 29.915 37.5561 25.3503 37.5561 19.7194C37.5561 19.5572 37.5524 19.3959 37.5449 19.2355C38.5617 19.0801 39.5759 18.9013 40.5867 18.6994L40.6926 18.6782C40.7191 19.0218 40.7326 19.369 40.7326 19.7194C40.7326 27.1036 34.743 33.0896 27.3546 33.0896C19.966 33.0896 13.9765 27.1036 13.9765 19.7194C13.9765 19.374 13.9896 19.0316 14.0154 18.6927L14.0486 18.6994C15.0837 18.9062 16.1223 19.0886 17.1637 19.2467ZM33.3284 11.4538C31.6493 10.2396 29.5855 9.52381 27.3546 9.52381C25.1195 9.52381 23.0524 10.2421 21.3717 11.4603C20.0078 11.3232 18.6475 11.1387 17.2933 10.907C19.7453 8.11308 23.3438 6.34921 27.3546 6.34921C31.36 6.34921 34.9543 8.10844 37.4061 10.896C36.0521 11.1292 34.692 11.3152 33.3284 11.4538ZM43.826 18.0518C43.881 18.6003 43.9091 19.1566 43.9091 19.7194C43.9091 28.8568 36.4973 36.2642 27.3546 36.2642C18.2117 36.2642 10.8 28.8568 10.8 19.7194C10.8 19.1615 10.8276 18.61 10.8816 18.0663L7.75383 17.4411C7.66775 18.1886 7.62354 18.9488 7.62354 19.7194C7.62354 30.6102 16.4574 39.4388 27.3546 39.4388C38.2517 39.4388 47.0855 30.6102 47.0855 19.7194C47.0855 18.9439 47.0407 18.1789 46.9536 17.4267L43.826 18.0518ZM44.2613 9.54743L40.9084 10.2176C37.9134 5.95821 32.9593 3.1746 27.3546 3.1746C21.7442 3.1746 16.7856 5.96385 13.7915 10.2305L10.4399 9.56057C13.892 3.83178 20.1756 0 27.3546 0C34.5281 0 40.8075 3.82591 44.2613 9.54743Z"
                />
              </svg>
              <!-- Título -->
              <div
                class="mb-4 text-3xl font-semibold text-surface-900 dark:text-surface-0"
              >
                Bienvenido a mi Administrador!
              </div>
              <span class="font-medium text-muted-color"
                >Para Gestonar Ingrese sus credenciales</span
              >
            </div>
  
            <!-- Formulario -->
            <form>
              <!-- Email -->
              <div class="mb-6">
                <label
                  for="email1"
                  class="block mb-2 text-xl font-medium text-surface-900 dark:text-surface-0"
                  >Email</label
                >
                <input
                  type="text"
                  id="email1"
                  placeholder="Correo"
                  v-model="credenciales.email"
                  class="w-full px-4 py-2 text-lg border rounded-lg bg-surface-0 dark:bg-surface-900 border-surface-300 dark:border-surface-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
  
              <!-- Contraseña -->
              <div class="mb-6">
                <label
                  for="password1"
                  class="block mb-2 text-xl font-medium text-surface-900 dark:text-surface-0"
                  >Contraseña</label
                >
                <input
                  type="password"
                  id="password1"
                  placeholder="Contraseña"
                   v-model="credenciales.password"
                  class="w-full px-4 py-2 text-lg border rounded-lg bg-surface-0 dark:bg-surface-900 border-surface-300 dark:border-surface-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
  
              <!-- Recordar y enlace a la contraseña olvidada -->
              <div class="flex items-center justify-between mb-6">
                <div class="flex items-center">
                  <input type="checkbox" id="rememberme1" class="mr-2" />
                  <label for="rememberme1" class="text-lg">Recordar</label>
                </div>
                <span
                  class="text-sm font-medium cursor-pointer text-primary hover:underline"
                  >Olvidaste tu contraseña?</span
                >
              </div>
  
              <!-- Botón de Ingreso -->
              <button
              type="button"
              @click="funIngresar()"
                class="w-full py-3 text-xl font-semibold text-white rounded-lg bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                INGRESAR
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script setup>
  import { ref } from "vue";
  import authService from "../../services/auth.service";
  import { useRouter } from "vue-router";
  
  const credenciales = ref({ email: "", password: "" });
  const respuesta = ref();
  const errors = ref({});
  
  const router = useRouter();
  
  async function funIngresar() {
    try {
      const res = await authService.login(credenciales.value);
      respuesta.value = res.data;
  
      localStorage.setItem("access_token", res.data.access_token);
  
      // redireccionar
      router.push({ name: "MiPerfil" });
    } catch (error) {
      console.log(error.response?.data?.errors);
      errors.value = error.response?.data?.errors;
    }
  }
  </script>