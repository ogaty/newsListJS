import React from "react"
import Comments from "./Comments.jsx";

const PostData = (props) => {
    return (
        <div className="post">
            <h3 className="title">
                {props.postData['title']}
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

export default PostData

