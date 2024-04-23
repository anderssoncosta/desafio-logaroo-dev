import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./stack.routes";
import { StatusBar } from "expo-status-bar";

const Routes = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default Routes;
