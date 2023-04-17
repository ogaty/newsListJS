import React from "react"

const PostData = (props) => {
    return (
        <div className="post">
            <div className="title">
                {props.postData['title']}
            </div>
            <div className="body">
                {props.postData['body']}
            </div>

            <hr />

            <div>
                <div>
                    <button data-id={props.postData['id']} onClick={props.addFavorite}>favorite</button>
                </div>
                <div>
                    <strong>{props.commentData['name']}</strong>
                </div>
                <div>
                    {props.commentData['body']}
                </div>
            </div>
        </div>
    )
}

export default PostData

