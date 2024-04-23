import RegisterPost from "@/components/post-list/post-register";
import Home from "@/screens/home/home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RegisterPost" component={RegisterPost} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
