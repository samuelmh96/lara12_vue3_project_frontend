<template>
    <div class="table-container">
        <table class="publications-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Published</th>
              <th>Comments</th>
              <th>Reactions</th>
              <th>Images</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="publication in publications" :key="publication.id">
              <td>
                <a :href="publication.url" class="title-link">{{ publication.title }}</a>
              </td>
              <td class="description">{{ publication.description }}</td>
              <td class="date">{{ formatDate(publication.published_timestamp) }}</td>
              <td class="text-center">{{ publication.comments_count }}</td>
              <td class="text-center">{{ publication.public_reactions_count }}</td>
              <td>
                <img 
                  v-if="publication.cover_image" 
                  :src="publication.cover_image" 
                  alt="Cover" 
                  class="cover-image"
                />
                <span v-else class="no-image">No image</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

// Variables
const publications = ref([]);

// onMounted
onMounted(() => {
  getPublications();
});

// Functions
function getPublications() {
  fetch('https://dev.to/api/articles')
    .then(response => response.json())
    .then(json => {
      publications.value = json;
    });
}

// Formatear fecha
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString();
}
</script>

<style scoped>
.container {
  padding: 20px;
  font-family: Arial, sans-serif;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #333;
}

.table-container {
  overflow-x: auto;
}

.publications-table {
  width: 100%;
  border-collapse: collapse;
  background-color: rgb(238, 236, 236);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
}

.publications-table th,
.publications-table td {
  padding: 12px;
  border-bottom: 1px solid #ddd;
}

.publications-table thead {
  background-color: #f4f4f4;
}

.publications-table th {
  text-align: left;
  font-weight: bold;
  color: #555;
}

.publications-table tbody tr:hover {
  background-color: #f9f9f9;
}

.title-link {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}

.title-link:hover {
  text-decoration: underline;
}

.description {
  color: #666;
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.date {
  color: #777;
}

.text-center {
  text-align: center;
}

.cover-image {
  width: 100px;
  height: 60px;
  object-fit: cover;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.no-image {
  font-style: italic;
  color: #999;
}
</style>