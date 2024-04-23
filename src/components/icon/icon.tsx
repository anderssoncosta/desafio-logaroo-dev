import { Feather } from "@expo/vector-icons";

type IconNames = keyof typeof Feather.glyphMap;

interface IconProps {
  name: IconNames;
  size?: number;
  color?: string;
}

const Icon = ({ name, color, size = 22 }: IconProps) => {
  return <Feather name={name} color={color} size={size} />;
};
export default Icon;
