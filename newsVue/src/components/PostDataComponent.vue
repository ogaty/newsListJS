<script setup>
import { ref } from 'vue'

const props = defineProps([
    'postData',
    'commentData',
])

const emit = defineEmits([
    'addFavorite'
])

console.log(props.postData)
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
            <div>
                <strong>{{ props.commentData.name }}</strong>
            </div>
            <div>
                {{ props.commentData.body }}
            </div>
        </div>
    </div>

</template>

<style scoped>
</style>
