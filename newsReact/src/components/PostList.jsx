import React, {useState} from "react";

const PostList = (props) => {

    const [searchText, setSearchText] = useState("")

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

export default PostList
