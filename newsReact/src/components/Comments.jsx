import React from "react"
import PropTypes from "prop-types";

/**
 * comments
 *
 * @param {Object} props
 * @param {array} props.commentData コメント一覧
 * @returns {JSX.Element}
 */
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

Comments.propTypes = {
    commentData: PropTypes.array
}

export default Comments
