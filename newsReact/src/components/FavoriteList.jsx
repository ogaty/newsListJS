import React, {useState} from "react";
import PropTypes from "prop-types";

/**
 * お気に入りリスト
 * @param {Object} props
 * @param {array} props.favorite お気に入りリスト
 * @param {function} props.handleClick クリックコールバック
 * @returns {JSX.Element}
 */
const FavoriteList = (props) => {
    const [searchText, setSearchText] = useState("")

    /**
     * 検索テキストアップデート
     * @param {Object} event
     */
    const handleChange = (event) => {
        setSearchText(event.target.value)
    }

    return (
        <>
            <div className="inputWrap">
                <input type="text" placeholder="search" onChange={handleChange} />
            </div>
            <ul>
                {
                    props.favorite.filter(p => {return searchText.length == 0 || p.title.indexOf(searchText) >= 0}).map(p =>
                        <li key={p.id} data-id={p.id} onClick={props.handleClick}>{p.title}</li>
                    )
                }
            </ul>
        </>
    )
}

FavoriteList.propTypes = {
    favorite: PropTypes.array,
    handleClick: PropTypes.func
}

export default FavoriteList

