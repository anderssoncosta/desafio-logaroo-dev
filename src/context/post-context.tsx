import { createContext, ReactNode, useState } from "react";

interface PostProviderProps {
  children: ReactNode;
}

interface PostData {
  id?: number;
  title: string;
  body: string;
}

export type PostContextData = {
  post: PostData[];
};

export const PostContext = createContext({} as PostContextData);

const PostProvider = ({ children }: PostProviderProps) => {
  const [post, setPost] = useState<PostData[]>([]);

  return (
    <PostContext.Provider value={{ post }}>{children}</PostContext.Provider>
  );
};
export default PostProvider;
