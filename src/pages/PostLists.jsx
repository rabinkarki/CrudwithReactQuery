import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import { deletePost, fetchPosts } from "../api/posts";
import AddPost from "../Components/AddPost";

const PostLists = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    isLoading,
    data: posts,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
  const deletePostMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
  if (isLoading) return "Loading....";
  if (isError) return `Error:${error}`;
  const handleDelete = (id) => {
    deletePostMutation.mutate(id);
  };
  return (
    <div className="flex flex-col items-center bg-indigo-400 h-full">
      <AddPost />

      {posts.map((post) => {
        return (
          <div key={post.id} className="w-[80%]  bg-white mt-1">
            <h3 onClick={() => navigate(`/post/${post.id}`)} className="p-1">
              {post.title}
            </h3>
            <button
              onClick={() => navigate(`/post/${post.id}/edit`)}
              className="rounded md:rounded-lg p-1 bg-zinc-300 w-20 h-9"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(post.id)}
              className="rounded md:rounded-lg  bg-zinc-300 ml-3 p-1 w-20 h-9"
            >
              delete
            </button>
          </div>
        );
      })}
      {console.log(posts)}
    </div>
  );
};

export default PostLists;
