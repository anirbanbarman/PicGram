export const picDataLoad = () => {
    return (dispatch) => {
        fetch("https://raw.githubusercontent.com/Lokenath/MyRepo/master/Test/package.json")
            .then(res => res.json())
            .then(res2 => {
                res2.pics.map(a => a.post =""
                );

                dispatch(PIC_DATA_LOADED(res2))
            })

    }

}
export const PIC_DATA_LOADED = (picData) => {
    return { type: "PIC_DATA_LOADED", payload: picData }
}
export const mostLiked = () => {
    return { type: "MOST_LIKED_PIC" }
}
export const mostComment = () => {
    return { type: "MOST_COMMENT_PIC" }
}
export const searchByCategory = (searchText) => {
    return { type: "SEARCH_BY_CATEGORY", payload: searchText }
}
export const addLike = (obj) => {
    return { type: "ADD_LIKE", payload: obj }
}
export const removeLike = (obj) => {
    return { type: "REMOVE_LIKE", payload: obj }
}
export const addPost = (comment) => {
    return { type: "ADD_POST", payload: comment }
}
export const postText = (id,text) => {
    return { type: "POST_TEXT_SAVE", payload:{id, text} }
}