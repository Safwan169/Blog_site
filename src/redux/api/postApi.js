const { apiSlice } = require("./baseApi");

export const postApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addPosts: builder.mutation({
            query: (data) => {   
                //   console.log(data,'this is the data form api' )
             return   {
                url:"/posts/addPost",
                method:"POST",
                body:data
            }}
            
        }),
        getPost:builder.query({
            query:()=> `/posts/allPosts`
        }),
        deletePost:builder.mutation({
            query:(id)=>({
                url:`/posts/deletePost/${id}`,
                method:"DELETE"
            })
        }),
        upDatePost:builder.mutation({
            query:(data)=>({
                url:`/posts/updatePost/${data.id}`,
                method:"patch",
                body:data
            })
        })  

    })
})

export const {useAddPostsMutation,useGetPostQuery,useDeletePostMutation,useUpDatePostMutation}=postApi
