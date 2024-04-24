import {
  Button,
  ButtonText,
  Content,
  ContentButton,
  Input,
  InputMultiline,
  Label,
} from "./post-register-style";
import { useState } from "react";
import { View } from "react-native";
import { usePostList } from "./use-post-list";
import Header from "../header/header";
import { useNavigation } from "@react-navigation/native";

const RegisterPost = () => {
  const { postsRegister } = usePostList();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const navigation = useNavigation();

  const handlePostSubmit = async () => {
    postsRegister({ title, body });
    setTitle("");
    setBody("");
  };

  return (
    <>
      <Header />
      <Content>
        <View>
          <Label>Título:</Label>
          <Input
            placeholder="Título do Post"
            value={title}
            onChangeText={setTitle}
          />
        </View>

        <View>
          <Label>Conteúdo:</Label>
          <InputMultiline
            placeholder="Adicionar conteúdo do post"
            multiline
            value={body}
            onChangeText={setBody}
          />
        </View>
        <ContentButton>
          <Button type="voltar" onPress={navigation.goBack}>
            <ButtonText type="voltar">Voltar</ButtonText>
          </Button>
          <Button type="registrar" onPress={handlePostSubmit}>
            <ButtonText type="registrar">Registar</ButtonText>
          </Button>
        </ContentButton>
      </Content>
    </>
  );
};

export default RegisterPost;
