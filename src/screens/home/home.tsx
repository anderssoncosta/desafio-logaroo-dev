import { FlatList, View } from "react-native";
import Header from "@/components/header/header";
import Post from "@/components/post/post";
import PostList from "@/components/post-list/post-list";
import { ContentSearch, DeviderHorizontal, Input } from "./style";
import { usePostList } from "@/components/post-list/use-post-list";
import { useEffect, useState } from "react";

const Home = () => {
  const { posts } = usePostList();
  const [search, setSearch] = useState("");
  const [listPost, setListPost] = useState(posts);

  useEffect(() => {
    if (!search) {
      setListPost(posts);
    } else {
      setListPost(
        posts.filter((item) => {
          return item.title.toLowerCase().indexOf(search.toLowerCase()) >= 0;
        })
      );
    }
  }, [search, posts]);

  return (
    <View>
      <Header />
      <Post />
      <DeviderHorizontal />
      <ContentSearch>
        <Input
          placeholder="Filtar"
          value={search}
          onChangeText={(e) => setSearch(e)}
        />
      </ContentSearch>

      <View style={{ padding: 10 }}>
        <FlatList
          style={{ height: 600 }}
          ItemSeparatorComponent={DeviderHorizontal}
          data={listPost}
          keyExtractor={(item) => item?.id?.toString() ?? "0"}
          renderItem={({ item }) => (
            <PostList
              body={item.body}
              postId={item.id ?? 0}
              title={item.title}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Home;
