<template>
    <nav class="p-4 bg-blue-600">
            <div class="container flex items-center justify-between max-auto">
                <RouterLink to="/" class="text-2xl font-bold text-white">MI TIENDA</RouterLink>
                <ul class="flex space-x-6">
                    <li><RouterLink to="/" class="text-white hover:text-gray-200">INICIO</RouterLink></li>
                    <li><RouterLink to="/productos" class="text-white hover:text-gray-200">PRODUCTOS</RouterLink></li>
                    <li><RouterLink to="/nosotros" class="text-white hover:text-gray-200">NOSOTROS</RouterLink></li>
                    <li><RouterLink to="/blog" class="text-white hover:text-gray-200">BLOG</RouterLink></li>
                    <li><RouterLink to="/auth/login" class="text-white hover:text-gray-200">INGRESAR</RouterLink></li>
                </ul>
            </div>
        </nav>
</template>