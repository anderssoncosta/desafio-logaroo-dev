import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  display: flex;
  width: 100%;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #efefef;
  border-radius: 4px;
  margin-top: 10px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #ff6b00;
  text-transform: uppercase;
`;

export const Button = styled.TouchableOpacity`
  background-color: #ff6b00;
  padding: 10px;
  border-radius: 4px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
`;

export const DeviderHorizontal = styled.View`
  width: 100%;
  height: 1px;
  background-color: aqua;
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
  width: 80%;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #ff6b00;
  padding: 0 10px;
`;

export const DeviderVertical = styled.View`
  width: 1px;
  height: 100%;
  background-color: aqua;
`;
