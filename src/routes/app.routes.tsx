import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Groups } from "../screens/Groups";
import { Players } from "../screens/Players";
import { NewGroup } from "../screens/NewGroup";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Groups" component={Groups} />
      <Screen name="Players" component={Players} />
      <Screen name="NewGroup" component={NewGroup} />
    </Navigator>
  );
}
