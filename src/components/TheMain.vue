<script>
import axios from 'axios';
export default {
    name: 'TheMain',
    data() {
        return {
            serverUrl: 'http://localhost:8000',
            projects: []
        }
    },
    methods: {
        getProjects() {
            console.log('ciao');
            axios.get(`${this.serverUrl}/api/projects`)
                .then(response => {
                    this.projects = response.data.results;
                    console.log(this.projects);
                })
        }
    },
    mounted() {
        this.getProjects();
    },
}
</script>

<template>
    <div v-for="project in projects">
        <h1>{{ project.title }}</h1>

    </div>
</template>

<style scoped></style>