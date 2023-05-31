<script>

export default {
    name: 'projectCard',
    props: {
        img: String,
        title: String,
        description: String,
        category: String,
        client: String,
        slug: String

    }
}
</script>

<template>
    <div class="card mb-3">
        <img :src="img" class="card-img-top" :alt="title">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">{{ description }}</p>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Category: {{ category }}</li>
                <li class="list-group-item">Client: {{ client }}</li>
                <li class="list-group-item">
                    <router-link :to="{ name: 'project', params: { slug: slug } }"
                        class="btn btn-primary">Dettagli</router-link>
                </li>
            </ul>

        </div>
    </div>
</template>

<style scoped></style>