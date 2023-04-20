import React from "react"
import Comments from "./Comments.jsx";
import PropTypes from "prop-types";

/**
 * 投稿データ表示
 * @param {Object} props
 * @param {Object} props.postData 投稿データ
 * @param {array} props.commentData コメントデータ
 * @param {function} props.addFavorite お気に入り追加コールバック
 * @returns {JSX.Element}
 */
const PostData = (props) => {
    return (
        <div className="post">
            <h3 className="title" role="title">
                {props.postData['title']}<br/>
                <button onClick={props.addFavorite} data-id={props.postData['id']}>Favorite</button>
            </h3>
            <div className="body">
                {props.postData['body']}
            </div>

            <hr />

            <Comments
                commentData={props.commentData}
                />
        </div>
    )
}

PostData.propTypes = {
    postData: PropTypes.object.isRequired,
    commentData: PropTypes.array,
    addFavorite: PropTypes.func.isRequired
}

export default PostData

