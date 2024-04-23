import api from "./api";

export interface PostProps {
  id: number;
  title: string;
  body: string;
}

export interface PostResponse {
  data: PostProps[];
}

const createPost = async (newPost: any) => {
  try {
    const response: PostResponse = await api.post("/posts", newPost);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getPosts = async (): Promise<PostProps[]> => {
  try {
    const response = await api.get("/posts");
    return response.data;
  } catch (error) {
    console.log("Erro ao buscar, ", error);
    throw error;
  }
};

const deletePost = async (PostId: number) => {
  try {
    const response = await api.delete(`/posts/${PostId}`);
    return response.data;
  } catch (error) {
    console.log("Erro ao deletar, ", error);
  }
};

export { getPosts, deletePost, createPost };
