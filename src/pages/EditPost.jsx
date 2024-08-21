import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPost, updatePost } from "../api/posts";
import Postform from "../Components/Postform";
const EditPost = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    isLoading,
    isError,
    data: post,
    error,
  } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => fetchPost(id),
  });
  const updateMutation = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      navigate("/");
    },
  });
  if (isLoading) return "loading..";
  if (isError) return `Error:${error.message}`;
  if (!post) return "No post data available";
  const handleSubmit = (updatedPost) => {
    updateMutation.mutate({ id, ...updatedPost });
  };

  return (
    <div>
      <Postform onSubmit={handleSubmit} initialValue={post} />
    </div>
  );
};

export default EditPost;
