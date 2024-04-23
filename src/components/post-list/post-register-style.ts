import styled from "styled-components/native";

export const Content = styled.View`
  width: 100%;
  display: flex;
  gap: 5px;
  padding: 10px;
`;

export const Label = styled.Text`
  color: #949494;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #ff6b00;
  padding: 0 10px;
`;

export const InputMultiline = styled.TextInput`
  width: 100%;
  height: 100px;
  border-radius: 4px;
  border: 1px solid #ff6b00;
  padding: 10px;
`;

export const ContentButton = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  background-color: #ff6b00;
  padding: 10px;
  border-radius: 4px;
  width: 45%;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
