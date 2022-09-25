import { useState, createContext, useContext, useEffect } from "react";
import {
  getPostsRequest,
  createPostRequest,
  deletePostRequest,
  getPostRequest,
  updatePostRequest,
} from "../api/posts";

const postContext = createContext();

export const usePosts = () => {
  const context = useContext(postContext);
  return context;
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await getPostsRequest();
    setPosts(response.data);
  };

  const createPost = async (post) => {
    try {
      const response = await createPostRequest(post);
      setPosts([...posts, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (id) => {
    const response = await deletePostRequest(id);
    if (response.status === 204) {
      setPosts(posts.filter((post) => post._id !== id));
    }
  };

  const getPost = async (id) => {
    const response = await getPostRequest(id);
    return response.data;
  };

  const updatePost = async (id, post) => {
    const response = await updatePostRequest(id, post);
    setPosts(posts.map((post) => (post._id === id ? response.data : post)));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <postContext.Provider
      value={{
        posts,
        getPosts,
        createPost,
        deletePost,
        getPost,
        updatePost,
      }}
    >
      {children}
    </postContext.Provider>
  );
};
