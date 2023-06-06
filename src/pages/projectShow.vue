<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'projectShow',
    data() {
        return {
            store,
            project: null
        }
    },
    mounted() {
        const slug = this.$route.params.slug;
        axios.get(`${this.store.serverUrl}/api/project/${slug}`)
            .then(response => {
                if (response.data.succes) {
                    this.project = response.data.results;
                } else {
                    this.$router.push({ name: 'not-found' });
                }
            })
    },

}

</script>

<template>
    <div class="container">
        <div class="row justify-content-center">

            <div v-if="project" class="col-3">
                <div class="card">
                    <img :src="project.image" class="card-img-top" :alt="project.title">
                    <div class="card-body">
                        <h5 class="card-title">{{ project.title }}</h5>
                        <p class="card-text">{{ project.description }}</p>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center m-5">
                <router-link :to="{ name: 'projects' }" class="btn btn-primary">Torna alla lista</router-link>
            </div>

        </div>
    </div>
</template>