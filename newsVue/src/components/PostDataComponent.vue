<script setup>

import CommentComponent from "./CommentComponent.vue";

/**
 * props
 * @type {Readonly<{[key in string]?: any}>}
 */
const props = defineProps([
    'postData',
    'commentData',
])

/**
 * emit
 * @type {EmitFn<string[]>}
 */
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
            <div v-for="comment in props.commentData" v-bind:key="comment.id" class="comment-data">
                <CommentComponent :comment="comment" />
            </div>
        </div>
    </div>

</template>

<style scoped>
</style>
