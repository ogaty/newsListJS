<script setup>
import { ref } from 'vue'

const props = defineProps([
    'postData',
    'commentData',
])

const emit = defineEmits([
    'addFavorite'
])

</script>

<template>
    <div class="post">
        <div class="title">
            {{ props.postData.title }}
        </div>
        <div class="body">
            {{ props.postData.body }}
        </div>

        <hr />

        <div>
            <div>
                <button v-bind:data-id="props.postData.id" @click="emit('addFavorite', props.postData.id)">favorite</button>
            </div>
            <div v-for="comment in props.commentData">
                <div>
                    <strong>{{ comment.name }}</strong>
                </div>
                <div>
                    {{ comment.body }}
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
</style>
