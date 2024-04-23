import { useNavigation } from "@react-navigation/native";
import {
  Container,
  Title,
  Content,
  Button,
  ButtonText,
  Input,
  ContentSearch,
  ButtonSearch,
  ButtonTextSearch,
} from "./style";
import { usePostList } from "../post-list/use-post-list";
import { useState } from "react";

const Post = () => {
  const { postSearch } = usePostList();
  const [search, setSearch] = useState<string>("");
  const navigation = useNavigation();

  const handleSearch = () => {
    postSearch(search);
  };

  return (
    <Container>
      <Content>
        <Title>Blog Post</Title>
        <Button onPress={() => navigation.navigate("RegisterPost")}>
          <ButtonText>Adicionar</ButtonText>
        </Button>
      </Content>
      <ContentSearch>
        <Input placeholder="Buscar" value={search} onChangeText={setSearch} />
        <ButtonSearch onPress={handleSearch}>
          <ButtonTextSearch>Buscar</ButtonTextSearch>
        </ButtonSearch>
      </ContentSearch>
    </Container>
  );
};

export default Post;
