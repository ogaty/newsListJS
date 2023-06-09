import React, {useEffect, useState} from 'react'

import PostData from "@/components/PostData.jsx";
import PostList from "@/components/PostList.jsx";
import FavoriteList from "@/components/FavoriteList.jsx";
import PropTypes from "prop-types";

/**
 * App
 * @param {Object} props props
 @param {array} props.posts
 * @param {array} props.comments
 * @returns {JSX.Element}
 * @constructor
 */
function App(props) {
    const commentList = props.comments;
    const postList = props.posts;
    const [postData, setPostData] = useState(postList[0])
    const [commentData, setCommentData] = useState([])
    const [favorite, setFavorite] = useState([])
    const [listType, setListType] = useState(0)

    /**
     * 初期化
     */
    useEffect(() => {
        const postId = 1
        const post = postList.find(p => p.id == postId)
        const postComments = commentList.filter(c => {return c.postId == postId})

        setPostData(post)
        setCommentData(postComments)
    }, []);

    /**
     * 投稿データ更新
     * @param {Object} event 発火イベント
     */
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

    /**
     * お気に入り追加
     * @param {Object} event 発火イベント
     */
    const addFavorite = (event) => {
        setFavorite([...favorite, parseInt(event.target.dataset['id'])])
    }

    /**
     * リストコンポーネント
     * @type {JSX.Element[]}
     */
    const listDefinition = [
        <PostList key={0} postList={postList} handleClick={updatePostData} />,
        <FavoriteList key={1} favorite={postList.filter(post => {return favorite.includes(post['id'])})} handleClick={updatePostData} />
    ]

    /**
     * リスト切り替え
     * @param {Object} event 発火イベント
     */
    const changeType = () => {
        setListType(listType === 0 ? 1 : 0)
    }


    return (
        <div className="wrap">
            <div className="left">
                <div>
                    <input type="checkbox" onClick={changeType} />Favorite
                </div>
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

App.propTypes = {
    'posts': PropTypes.array.isRequired,
    'comments': PropTypes.array.isRequired,
}

export default App
