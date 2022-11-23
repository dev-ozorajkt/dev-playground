<template>
    <div class="py-12">
        <h2 class="text-4xl font-bold font-ubuntu text-center mb-12"><span
                class="animate-rotate">&#10024;</span>What's New<span class="animate-rotate">&#10024;</span>
        </h2>
        <div>
            

        <ul v-if="posts">
        <li v-for="post in posts" v-bind:key="post._id">
          {{ post.title }}
        </li>
      </ul>
      <p v-else>There are no new stuff</p>
        </div>
    </div>
</template>

<script setup>
    const query = groq`*[_type == "post"]`
    const { data: posts, refresh } = useSanityQuery(query)
</script>

<style scoped>
.animate-rotate {
    display: inline-block;
    animation-name: rotating;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
}

@keyframes rotating {
    0% {
        transform: scale(0.5);
    }

    33.3% {
        transform: scale(0.8);
    }

    100% {
        transform: scale(0.5);
    }
}

</style>