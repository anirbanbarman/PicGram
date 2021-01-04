
const initialState = {
    picGramData: {
        metadata: {},
        pics: [],

    },
    dataLoading: true,
    DataLoaded: false,
    backUpData: {}
};

export const reducer = (state = initialState, action) => {

    switch (action.type) {

        case "PIC_DATA_LOADED":
            return {
                ...state,
                picGramData: action.payload,
                dataLoading: false,
                DataLoaded: true,
                backUpData: action.payload,
            };
        case "MOST_LIKED_PIC":
            const filterPicGramData = state.backUpData.pics.reduce(function (prev, current) {
                return (prev.likes > current.likes) ? prev : current
            })

            return {
                ...state,
                picGramData: { ...state.picGramData, pics: [filterPicGramData] },
            };
        case "MOST_COMMENT_PIC":
            const filterPicGramDataComment = state.backUpData.pics.reduce(function (prev, current) {
                return (prev.comments.length > current.comments.length) ? prev : current
            })


            return {
                ...state,
                picGramData: { ...state.picGramData, pics: [filterPicGramDataComment] },
            };
        case "SEARCH_BY_CATEGORY":
            const filterPicGramDataSearchText = state.backUpData.pics.filter((obj) => {
                return (obj.category.toLowerCase()).indexOf(action.payload.toLowerCase()) !== -1
            })

            return {
                ...state,
                picGramData: { ...state.picGramData, pics: filterPicGramDataSearchText },
            };
            case "ADD_LIKE":
          
            const addLikeCount=state.picGramData.pics.map(obj=>{
            if(obj.id===action.payload.id){
             return { ...obj,likes:obj.likes+1,like:true}
            }
            return obj

            });
            const backUplikeAdd=state.backUpData.pics.map(obj=>{
                if(obj.id===action.payload.id){
                 return { ...obj,likes:obj.likes+1,like:true}
                }
                return obj
    
                });

            return {
                ...state,
                picGramData: { ...state.picGramData, pics: addLikeCount },
                backUpData: { ...state.backUpData, pics: backUplikeAdd },
            };
            case "REMOVE_LIKE":
                const RemoveLikeCount=state.picGramData.pics.map(obj=>{
                    if(obj.id===action.payload.id){
                     return { ...obj,likes:obj.likes-1,like:false}
                    }
                    return obj
        
                    });
                    const backUplikeRemove=state.backUpData.pics.map(obj=>{
                        if(obj.id===action.payload.id){
                         return { ...obj,likes:obj.likes-1,like:false}
                        }
                        return obj
            
                        });
             return {
                ...state,
                picGramData: { ...state.picGramData, pics: RemoveLikeCount },
                backUpData: { ...state.backUpData, pics: backUplikeRemove }
            };
            case "ADD_POST":
                debugger
                const addPost=state.picGramData.pics.map(obj=>{
                    if(obj.id===action.payload.id){
                     return {...obj,comments:[...obj.comments,action.payload.post]}
                    }
                    return obj
        
                    });
                    const backUpPost=state.backUpData.pics.map(obj=>{
                        if(obj.id===action.payload.id){
                            return {...obj,comments:[...obj.comments,action.payload.post]}
                        }
                        return obj
            
                        });
             return {
                ...state,
                picGramData: { ...state.picGramData, pics: addPost },
                backUpData: { ...state.backUpData, pics: backUpPost }
            };
           



        default:
            return state;
    }

};