import styled from "styled-components/native";

export const Header = styled.Text`
  flex: 1;
  border-radius: 8px;
  width: 100%;
  height: 100px;
`;

export const DeviderHorizontal = styled.View`
  width: 100%;
  height: 1px;
  background-color: #efefef;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const FlatListPost = styled.FlatList`
  height: 600px;
`;

export const ContentSearch = styled.View`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 10px;
`;
export const ButtonSearch = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ff6b00;
  padding: 5px;
  border-radius: 4px;
`;

export const ButtonTextSearch = styled.Text`
  color: #ff6b00;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #ff6b00;
  padding: 0 10px;
`;
