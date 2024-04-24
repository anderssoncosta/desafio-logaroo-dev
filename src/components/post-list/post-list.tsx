import { View } from "react-native";
import {
  Button,
  Container,
  ContentIcon,
  ContentPost,
  TextBody,
  TextTitle,
} from "./post-list-style";
import Icon from "../icon/icon";
import { usePostList } from "./use-post-list";

interface PostListProps {
  title: string;
  body: string;
  postId: number;
}

const PostList = ({ title, postId, body }: PostListProps) => {
  const { postDelete } = usePostList();

  return (
    <Container>
      <ContentPost>
        <View>
          <TextTitle>{title}</TextTitle>
        </View>
        <View>
          <TextBody>{body}</TextBody>
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
