import React, {useEffect, useRef, useState} from 'react'

import PostData from "./components/PostData.jsx";
import PostList from "./components/PostList.jsx";
import FavoriteList from "./components/FavoriteList.jsx";

function App(props) {
    const videoRef = useRef()
    const commentList = props.comments;
    const postList = props.posts;
    const [postData, setPostData] = useState(postList[0])
    const [commentData, setCommentData] = useState([])
    const [favorite, setFavorite] = useState([])
    const [listType, setListType] = useState(0)

    useEffect(() => {
        const postId = 1
        const post = postList.find(p => p.id == postId)
        const postComments = commentList.filter(c => {return c.postId == postId})

        setPostData(post)
        setCommentData(postComments)
    }, []);

    const updatePostData = (event) => {
        const postId = event.target.dataset["id"]
        const post = postList.find(p => p.id == postId)
        const postComments = commentList.filter(c => {return c.postId == postId})
//        const commentId = commentList[commentIndex]['id']
//        console.log("postId = %d, commentId = %d", postId, commentId)
//        console.log(event.target.dataset["id"])
//        console.log(event.target.getAttribute("data-id"))

        setPostData(post)
        setCommentData(postComments)
    }

    const addFavorite = (event) => {
        setFavorite([...favorite, parseInt(event.target.dataset['id'])])
    }

    const listDefinition = [
        <PostList postList={postList} handleClick={updatePostData} />,
        <FavoriteList favorite={postList.filter(post => {return favorite.includes(post['id'])})} />
    ]

    const changeType = (event) => {
        setListType(listType === 0 ? 1 : 0)
    }


    return (
        <div className="wrap">
            <div className="left">
                {listDefinition[listType]}
            </div>
            <div className="right">
                <PostData
                    postData={postData}
                    commentData={commentData}
                    addFavorite={addFavorite}
                />
            </div>
        </div>
    )
}

export default App
