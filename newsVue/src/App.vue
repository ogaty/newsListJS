<script setup>
import {ref} from 'vue'

import Comments from "./data/Comments.js";
import Posts from "./data/Posts.js";

import PostListComponent from "./components/PostListComponent.vue"
import PostDataComponent from "./components/PostDataComponent.vue"
import FavoriteListComponent from "./components/FavoriteListComponent.vue";

const commentList = Comments;
const postList = Posts;
const favoriteList = ref({});

let PostData = ref(postList[0]);
let CommentData = ref(commentList.filter(c => {return c.postId == 1}));
let favorite = ref([]);
let listType = ref(0);

/**
 * クリックハンドラ
 * @param {Object} post
 */
const handleClick = (post) => {
    const postId = post.id
    const comments = commentList.filter(c => {return c.postId == postId})
//        console.log("postId = %d, commentId = %d", postId, commentId)
//        console.log(event.target.dataset["id"])
//        console.log(event.target.getAttribute("data-id"))

    PostData.value = postList[postId]
    CommentData.value = comments
}

/**
 * お気に入り追加
 * @param {int} id
 */
const addFavorite = (id) => {
    favorite.value.push(id)
    favoriteList.value = postList.filter(post => {return favorite.value.includes(post['id'])})
}

/**
 * 表示タイプ変更
 */
const changeType = () => {
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
                <PostListComponent :post-list=postList @handle-click=handleClick />
            </div>
            <div v-else>
                <FavoriteListComponent :post-list=favoriteList />
            </div>
        </div>
        <div class="right">
            <PostDataComponent
                :post-data=PostData
                :comment-data=CommentData
                @add-favorite=addFavorite
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
