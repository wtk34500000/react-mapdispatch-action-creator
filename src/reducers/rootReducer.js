
const initState ={
    posts: [
        {id: '1', title: 'qui est esse', body:'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'},
        {id: '2', title: 'qui est esse', body:'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'},
        {id: '3', title: 'qui est esse', body:'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'}
    ]
}

const rootReducer = (state=initState , action)=>{
    if(action.type === "DELETE_POST"){
        let newPosts = state.posts.filter(post =>{
            return action.id !==post.id
        })
        return {
            ...state,
            posts: newPosts
        }
    }

    return state;
}

export default rootReducer