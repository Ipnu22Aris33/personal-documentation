<template>
  <div class="project-card">
    <div v-if="project.image" class="project-image">
      <img :src="project.image" :alt="project.title" />
    </div>
    
    <div class="project-body">
      <h3 class="project-title">{{ project.title }}</h3>
      <p class="project-description">{{ project.description }}</p>
      
      <div v-if="project.tags" class="project-tags">
        <span v-for="tag in project.tags" :key="tag" class="tag">
          {{ tag }}
        </span>
      </div>
      
      <div class="project-links">
        <a v-if="project.demo" :href="project.demo" target="_blank" class="link-demo">
          Demo
        </a>
        <a v-if="project.github" :href="project.github" target="_blank" class="link-github">
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  project: {
    title: string;
    description: string;
    image?: string;
    tags?: string[];
    demo?: string;
    github?: string;
  };
}>();
</script>

<style scoped>
.project-card {
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  transition: transform 0.2s, box-shadow 0.2s;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.project-image {
  width: 100%;
  height: 180px;
  overflow: hidden;
  background: var(--vp-c-bg-alt);
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-body {
  padding: 1.25rem;
}

.project-title {
  font-size: 1.25rem;
  color: var(--vp-c-text-1);
  margin: 0 0 0.5rem;
}

.project-description {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tag {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
}

.project-links {
  display: flex;
  gap: 0.75rem;
}

.link-demo,
.link-github {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s;
}

.link-demo {
  background: var(--vp-c-brand-1);
  color: white;
}

.link-demo:hover {
  background: var(--vp-c-brand-2);
}

.link-github {
  border: 1px solid var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.link-github:hover {
  background: var(--vp-c-brand-1);
  color: white;
}
</style>

