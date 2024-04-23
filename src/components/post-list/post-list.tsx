import { Text, View } from "react-native";
import { Button, Container, ContentIcon, ContentPost } from "./post-list-style";
import Icon from "../icon/icon";
import { usePostList } from "./use-post-list";

interface PostListProps {
  id?: number;
  title: string;
  postId: number;
}

const PostList = ({ title, postId }: PostListProps) => {
  const { postDelete } = usePostList();

  return (
    <Container>
      <ContentPost>
        <View>
          <Text>{title}</Text>
        </View>
      </ContentPost>
      <ContentIcon>
        <Button onPress={() => postDelete(postId)}>
          <Icon name="trash" color="#FFF" />
        </Button>
      </ContentIcon>
    </Container>
  );
};
export default PostList;
