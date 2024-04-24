import { useNavigation } from "@react-navigation/native";
import { Container, Title, Content, Button, ButtonText } from "./style";

const Post = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Content>
        <Title>Blog Post</Title>
        <Button onPress={() => navigation.navigate("RegisterPost")}>
          <ButtonText>Adicionar</ButtonText>
        </Button>
      </Content>
    </Container>
  );
};

export default Post;
