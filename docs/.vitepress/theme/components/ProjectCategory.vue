<template>
  <div class="category">
    <h2 class="category-title">{{ category.name }}</h2>
    <div class="project-grid">
      <ProjectCard
        v-for="project in category.projects"
        :key="project.title"
        :project="project"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  category: {
    name: string;
    projects: any[];
  };
}>();
</script>

<style scoped>
.category {
  margin-bottom: 4rem;
}

.category-title {
  font-size: 1.8rem;
  color: var(--vp-c-brand-1);
  margin-bottom: 1.5rem;
  border-bottom: 2px solid var(--vp-c-divider);
  padding-bottom: 0.5rem;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}
</style>