import React from "react"

const Comments = (props) => {
    return (
        <details>
            <summary>
                comments
            </summary>
            {
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
            }
        </details>
    )
}

export default Comments
