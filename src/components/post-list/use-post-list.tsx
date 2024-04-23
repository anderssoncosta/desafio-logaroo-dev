import { createPost, deletePost, getPosts } from "@/services/post";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface usePostList {
  postDelete: (postId: number) => Promise<void>;
  postsRegister: (data: Post) => Promise<void>;
  posts: Post[];
  postSearch: (searchTerm: string) => void;
}

export const usePostList = (): usePostList => {
  const [posts, setPosts] = useState<Post[]>([]);

  const postsRegister = async (data: Post): Promise<void> => {
    try {
      if (!data.title || !data.body) {
        Alert.alert("Erro", "Preencha todos os campos");
        return;
      }
      await createPost(data);
      console.log(data);
      Alert.alert("Post criado com sucesso!");
    } catch (error) {
      console.error(error);
    }
  };

  const postDelete = async (postId: number): Promise<void> => {
    try {
      // await deletePost(postId);
      Alert.alert("Atenção!", "Deseja realmente exluir?", [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancelado"),
          style: "cancel",
        },
        {
          text: "Confirmar",
          onPress: () => deletePost(postId),
          style: "destructive",
        },
      ]);
      console.log(postId);
    } catch (error) {
      console.log("Erro ao deletar, ", error);
    }
  };

  const postList = async (): Promise<void> => {
    try {
      const response = await getPosts();
      // console.log(response);
      setPosts(response);
    } catch (error) {
      console.error(error);
    }
  };

  const postSearch = (searchTerm: string): void => {
    const filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setPosts(filteredPosts);
    console.log("teste => ", filteredPosts);
  };

  useEffect(() => {
    postList();
  }, []);

  return { posts, postDelete, postsRegister, postSearch };
};
