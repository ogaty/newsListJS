<script setup>
  const props = defineProps([
      'comment'
  ])
</script>

<template>
    <div>
        <strong>{{ props.comment.name }}</strong>
    </div>
    <div>
        {{ props.comment.body }}
    </div>
</template>
