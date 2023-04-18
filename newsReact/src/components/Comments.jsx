import React from "react"

const Comments = (props) => {
    return (
        props.commentData.map(c => (
                <div key={c['id']}>
                    <div>
                        <h4>{c['name']}</h4>
                    </div>
                    <div>
                        {c['body']}
                    </div>
                </div>
            )
        )
    )
}

export default Comments
