import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Groups from "@screens/Groups";
import Players from "@screens/Groups";
import NewGroup from "@screens/Groups";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="groups" component={Groups} />
      <Screen name="groups" component={NewGroup} />
      <Screen name="groups" component={Players} />
    </Navigator>
  );
}
