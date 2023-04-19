import React, {useState} from "react";
import PropTypes from "prop-types";

/**
 * 投稿リスト
 * @param {Object} props
 * @param {array} props.postList 投稿一覧
 * @param {function} props.handleCallback クリック時のコールバック関数
 * @returns {JSX.Element}
 */
const PostList = (props) => {

    const [searchText, setSearchText] = useState("")

    /**
     * 検索テキストアップデート
     * @param {Object} event
     */
    const handleChange = (event) => {
//        console.log(event.target.value)

        setSearchText(event.target.value)
    }


    return (
        <>
            <div className="inputWrap">
                <input type="text" placeholder="search" onChange={handleChange} />
            </div>
            <ul>
                {
                    props.postList.filter(p => {return searchText.length == 0 || p.title.indexOf(searchText) >= 0}).map(p =>
                        <li key={p.id} data-id={p.id} onClick={props.handleClick}>{p.title}</li>
                    )
                }
            </ul>
        </>
    )
}

PostList.propTypes = {
    postList: PropTypes.array,
    handleClick: PropTypes.func
}

export default PostList
