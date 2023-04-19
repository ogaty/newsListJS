<script setup>

/**
 * props
 * @type {Readonly<{[key in string]?: any}>}
 */
const props = defineProps([
    'postList'
])
/**
 * emit
 * @type {EmitFn<string[]>}
 */
const emit = defineEmits(
    ['handleClick']
)
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
.left .inputWrap {
    box-sizing: border-box;
    padding: 20px;
}

.left ul {
    list-style: none;
}

.left li {
    text-decoration: underline;
    margin: 10px 0;
    cursor: pointer;
}
.left input {
    width: 100%;
}


</style>
