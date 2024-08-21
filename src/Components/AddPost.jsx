import React from 'react'
import { useMutation,useQueryClient } from '@tanstack/react-query'
import { createPost } from '../api/posts';
import { v4 as uuidv4} from 'uuid';
import Postform from './Postform';


const AddPost = () => {
    const queryClient=useQueryClient();
    const CreatePostMutation=useMutation({
        mutationFn:createPost,
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['posts']});
            console.log("success!")
        }
    });
    const handleAddPost=(post)=>{
      CreatePostMutation.mutate({
        id:uuidv4(),
        ...post
      })

    }
  return (
    <div >
    <h2 className='text-2xl font-serif shadow-md'>Add new post</h2>
    <Postform onSubmit={handleAddPost} initialValue={{}} /> 
    </div>
  )
}

export default AddPost