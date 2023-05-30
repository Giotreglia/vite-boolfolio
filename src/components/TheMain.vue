<script>
import axios from 'axios';
import projectCard from './projectCard.vue';
export default {
    name: 'TheMain',
    components: {
        projectCard
    },
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
        },
        getImagePath: function (img) {
            return new URL(`../assets/${img}`, import.meta.url).href;
        }
    },
    mounted() {
        this.getProjects();
    },
}
</script>

<template>
    <div class="container">
        <div class="row py-5">
            <div class="col-3" v-for="project in   projects  ">
                <projectCard :img="project.image" :title="project.title" :description="project.description"
                    :category="project.category" :client="project.client" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>