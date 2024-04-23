import { FlatList, View } from "react-native";
import Header from "@/components/header/header";
import Post from "@/components/post/post";
import PostList from "@/components/post-list/post-list";
import { DeviderHorizontal } from "./style";
import { usePostList } from "@/components/post-list/use-post-list";

const Home = () => {
  const { posts } = usePostList();

  return (
    <View>
      <Header />
      <Post />
      <DeviderHorizontal />
      <View style={{ padding: 10 }}>
        <FlatList
          style={{ height: 600 }}
          ItemSeparatorComponent={DeviderHorizontal}
          data={posts}
          keyExtractor={(item) => item?.id?.toString() ?? "0"}
          renderItem={({ item }) => (
            <PostList postId={item.id ?? 0} title={item.title} />
          )}
        />
      </View>
    </View>
  );
};

export default Home;
