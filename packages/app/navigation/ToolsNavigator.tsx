import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import { ToolsStackParamList } from "../types";
import Header from "./Header";

// Pages
import { lazy } from "@loadable/component";
const SearchScreen = lazy(() => import("../screens/Tools/Search"));
const CalendarScreen = lazy(() => import("../screens/Tools/Calendar"));
const CreditsScreen = lazy(() => import("../screens/Tools/Credits"));
const OpenSourceScreen = lazy(() => import("../screens/Tools/OpenSource"));
const BouncersScreen = lazy(() => import("../screens/Tools/Bouncers"));
const NearbyScreen = lazy(() => import("../screens/Tools/Nearby"));
const ActivityWidgetScreen = lazy(() => import("../screens/Tools/WidgetConfigure/ActivityWidget"));

const ToolsStack = createStackNavigator<ToolsStackParamList>();

export default function ToolsNavigator() {
  return (
    <ToolsStack.Navigator
      screenOptions={{
        header: props => <Header {...props} />,
        cardStyle: {
          maxHeight: "100%",
        },
      }}>
      <ToolsStack.Screen name="Search" component={SearchScreen} />
      <ToolsStack.Screen name="Calendar" component={CalendarScreen} />
      <ToolsStack.Screen name="Credits" component={CreditsScreen} />
      <ToolsStack.Screen name="OpenSource" component={OpenSourceScreen} />
      <ToolsStack.Screen name="Bouncers" component={BouncersScreen} />
      <ToolsStack.Screen name="Nearby" component={NearbyScreen} />
      <ToolsStack.Screen name="WidgetConfigureActivityWidget" component={ActivityWidgetScreen} />
    </ToolsStack.Navigator>
  );
}
