import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #efefef;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: auto;
`;

export const ContentPost = styled.TouchableOpacity`
  width: 90%;
  display: flex;
`;

export const ContentBody = styled.View`
  display: flex;
  width: 90%;
`;

export const ContentIcon = styled.View`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #ff6b00;
  padding: 5px;
  border-radius: 4px;
`;




