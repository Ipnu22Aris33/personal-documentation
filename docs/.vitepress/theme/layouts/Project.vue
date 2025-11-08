<template>
  <div class="project-layout">
    <header v-if="showHeader" class="project-header">
      <h1>{{ title }}</h1>
      <p v-if="description">{{ description }}</p>
    </header>

    <div v-if="allFilters.length > 1" class="filter-tabs">
      <button
        v-for="filter in allFilters"
        :key="filter"
        :class="['tab-button', { active: activeFilter === filter }]"
        @click="setFilter(filter)"
      >
        {{ filter }}
      </button>
    </div>

    <ProjectCategory
      v-for="category in filteredCategories"
      :key="category.name"
      :category="category"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import { useData, useRouter } from 'vitepress';

const { frontmatter } = useData();
const router = useRouter();

const showHeader = frontmatter.value.showHeader ?? true;
const title = frontmatter.value.title ?? 'Projects';
const description = frontmatter.value.description ?? '';
const categories = frontmatter.value.categories ?? [];
const defaultFilter = frontmatter.value.defaultFilter ?? 'all';

// Auto-generate filters dari categories
const allFilters = computed(() => {
  const filters = new Set<string>([defaultFilter]);
  categories.forEach((cat: any) => {
    cat.projects?.forEach((p: any) => {
      if (p.category) filters.add(p.category);
    });
  });
  return Array.from(filters);
});

const activeFilter = ref(defaultFilter);

// Set filter dan update hash
const setFilter = (filter: string) => {
  activeFilter.value = filter;
  router.go(`/projects/#${filter.toLowerCase()}`);
};

// Sync dari hash URL
onMounted(() => {
  const hash = window.location.hash.slice(1);
  if (hash && allFilters.value.includes(hash)) {
    activeFilter.value = hash;
  }
});

// Filter categories
const filteredCategories = computed(() => {
  if (activeFilter.value === defaultFilter) return categories;
  
  return categories
    .map((cat: any) => ({
      ...cat,
      projects: cat.projects?.filter((p: any) => 
        p.category?.toLowerCase() === activeFilter.value.toLowerCase()
      ) ?? []
    }))
    .filter((cat: any) => cat.projects.length > 0);
});
</script>

<style scoped>
.project-layout {
  max-width: var(--project-max-width, 1200px);
  margin: 0 auto;
  padding: 2rem 1rem;
}

.project-header {
  text-align: center;
  margin-bottom: 2rem;
}

.project-header h1 {
  font-size: 2.5rem;
  color: var(--vp-c-brand-1);
  margin: 0;
}

.project-header p {
  color: var(--vp-c-text-2);
  margin-top: 0.5rem;
}

.filter-tabs {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.tab-button {
  background: transparent;
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
  padding: 0.6rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;
}

.tab-button:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.tab-button.active {
  background: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  color: white;
}
</style>