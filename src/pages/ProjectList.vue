<script>
import axios from 'axios';
import projectCard from '../components/projectCard.vue';
import { store } from '../store';
export default {
    name: 'ProjectList',
    components: {
        projectCard
    },
    data() {
        return {
            store,
            projects: [],
            currentPage: 1,
            lastPage: '',
        }
    },
    methods: {
        getProjects(apiPage) {
            console.log('ciao');
            axios.get(`${this.store.serverUrl}/api/projects`, {
                params: {
                    page: apiPage
                }
            })
                .then(response => {
                    this.projects = response.data.results.data;
                    this.currentPage = response.data.results.current_page;
                    this.lastPage = response.data.results.last_page;
                    console.log(this.projects);
                })
        },
        getImagePath: function (img) {
            return new URL(`../assets/${img}`, import.meta.url).href;
        }
    },
    mounted() {
        this.getProjects(1);
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

        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
                <li class="page-item"><button class="page-link" @click="getProjects(currentPage - 1)"
                        :class="{ 'disabled': currentPage == 1 }">Previous</button></li>
                <li class="page-item"><button class="page-link" @click="getProjects(currentPage + 1)"
                        :class="{ 'disabled': currentPage == lastPage }">Next</button></li>
            </ul>
        </nav>
    </div>
</template>

<style scoped></style>