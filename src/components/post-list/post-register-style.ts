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
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  gap: 8px;
`;

interface ButtonProps {
  type?: "voltar" | "registrar";
}

const colors = {
  voltar: {
    background: "#FFFFFF",
    text: "#ff6b00",
  },
  registrar: {
    background: "#ff6b00",
    text: "#FFFFFF",
  },
};

export const Button = styled.TouchableOpacity<ButtonProps>`
  display: flex;
  align-items: center;
  background-color: ${(props) => colors[props.type || "registrar"].background};
  padding: 10px;
  border-radius: 4px;
  border: 1px solid ${(props) => colors[props.type || "registrar"].text};
  width: 100%;
`;

export const ButtonText = styled.Text<ButtonProps>`
  color: ${(props) => colors[props.type || "registrar"].text};
  font-weight: bold;
  font-size: 16px;
`;
