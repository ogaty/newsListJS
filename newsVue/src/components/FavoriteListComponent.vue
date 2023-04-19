<script setup>

/**
 * props
 * @type {Readonly<{[key in string]?: any}>}
 */
const props = defineProps([
    'postList'
])

</script>

<template>
    <div>
        <div class="inputWrap">
            <input type="text" placeholder="search" onChange="handleChange" />
        </div>
        <ul>
            <li v-for="post in props.postList" v-bind:key="post.id" class="post-data">
                <span @click="emit('handleClick', post)">{{ post.title }}</span>
            </li>
        </ul>
    </div>
</template>

<style scoped>
</style>
