import axios from "axios";

const BASEURL = process.env.BASEURL || "http://localhost:4000";

export const getPostsRequest = async () =>
  await axios.get(BASEURL + "/posts");

export const createPostRequest = async (post) => {
  const form = new FormData();
  for (let key in post) {
    form.append(key, post[key]);
  }
  return await axios.post(BASEURL + "/posts", form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deletePostRequest = async (id) =>
  await axios.delete(BASEURL + `/posts/${id}`);

export const getPostRequest = async (id) =>
  await axios.get(BASEURL + `/posts/${id}`);

export const updatePostRequest = async (id, newFields) =>
  await axios.put(BASEURL + `/${id}`, newFields);
