<script setup>
import {ref, reactive, toRefs} from 'vue'

import Comments from "./data/Comments.js";
import Posts from "./data/Posts.js";

import PostListComponent from "./components/PostListComponent.vue"
import PostDataComponent from "./components/PostDataComponent.vue"
import FavoriteListComponent from "./components/FavoriteListComponent.vue";

const commentList = Comments;
const postList = Posts;
const favoriteList = ref({});

let PostData = ref(postList[0]);
let CommentData = ref(commentList[0]);
let favorite = ref([]);
let listType = ref(0);

const handleClick = (post) => {
    const postId = post.id
    const commentIndex = commentList.findIndex(c => {return c.postId == postId})
    const commentId = commentList[commentIndex]['id']
//        console.log("postId = %d, commentId = %d", postId, commentId)
//        console.log(event.target.dataset["id"])
//        console.log(event.target.getAttribute("data-id"))

    PostData.value = postList[postId]
    CommentData.value = commentList[commentId]
}

const addFavorite = (id) => {
    favorite.value.push(id)
    favoriteList.value = postList.filter(post => {return favorite.value.includes(post['id'])})
}

const changeType = (event) => {
    listType.value = listType.value == 0 ? 1 : 0
}
</script>

<template>
    <div class="wrap">
        <div class="left">
            <div>
                <input type="checkbox" @click="changeType" />
            </div>
            <div v-if="listType == 0">
                <PostListComponent :postList=postList @handleClick=handleClick />
            </div>
            <div v-else>
                <FavoriteListComponent :postList=favoriteList />
            </div>
        </div>
        <div class="right">
            <PostDataComponent
                :postData=PostData
                :commentData=CommentData
                @addFavorite=addFavorite
            />
        </div>
    </div>
</template>

<style scoped>
.wrap {
    display: flex;
    justify-content: space-between;
    width: 1000px;
}

.left {
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 10px;
}

.right {
    width: 600px;
}
.post {
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
}
</style>
