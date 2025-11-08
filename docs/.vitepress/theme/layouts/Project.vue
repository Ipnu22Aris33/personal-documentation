<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useData, useRouter } from 'vitepress';

const { frontmatter } = useData();
const router = useRouter();

const showHeader = frontmatter.value.showHeader ?? true;
const title = frontmatter.value.title ?? 'Projects';
const description = frontmatter.value.description ?? '';
const projects = frontmatter.value.projects ?? [];
const defaultFilter = frontmatter.value.defaultFilter ?? 'All';

// Auto-generate filters dari semua categories
const allFilters = computed(() => {
    const filters = new Set<string>([defaultFilter]);

    projects.forEach((p: any) => {
        if (Array.isArray(p.categories)) {
            p.categories.forEach((cat: string) => filters.add(cat));
        } else if (p.categories) {
            filters.add(p.categories);
        }
    });

    return Array.from(filters);
});

const activeFilter = ref(defaultFilter);

const setFilter = (filter: string) => {
    activeFilter.value = filter;
    router.go(`/projects/#${filter.toLowerCase()}`);
};

onMounted(() => {
    const hash = window.location.hash.slice(1);
    if (hash && allFilters.value.map(f => f.toLowerCase()).includes(hash)) {
        activeFilter.value = allFilters.value.find(f => f.toLowerCase() === hash) || defaultFilter;
    }
});

// Filter projects berdasarkan categories
const filteredProjects = computed(() => {
    if (activeFilter.value === defaultFilter) return projects;

    return projects.filter((p: any) => {
        const cats = Array.isArray(p.categories) ? p.categories : [p.categories];
        return cats.some((cat: string) =>
            cat?.toLowerCase() === activeFilter.value.toLowerCase()
        );
    });
});
</script>

<template>
    <div class="project-layout">
        <header v-if="showHeader" class="project-header">
            <h1>{{ title }}</h1>
            <p v-if="description">{{ description }}</p>
        </header>

        <div v-if="allFilters.length > 1" class="filter-tabs">
            <button v-for="filter in allFilters" :key="filter"
                :class="['tab-button', { active: activeFilter === filter }]" @click="setFilter(filter)">
                {{ filter }}
            </button>
        </div>

        <div class="project-grid">
            <ProjectCard v-for="project in filteredProjects" :key="project.title" :project="project" />
        </div>
    </div>
</template>



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
    margin-top: 1rem;
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

.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
}
</style>