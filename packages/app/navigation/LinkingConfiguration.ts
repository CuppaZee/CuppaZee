import * as Linking from "expo-linking";
import { Platform } from "react-native";

export default {
  prefixes: Platform.OS === "web" ? [Linking.makeUrl("/")] : ["cuppazee://", "uk.cuppazee.paper://"],
  config: {
    screens: {
      Root: {
        screens: {
          Dashboard: {
            path: "",
            screens: {
              Dash: "",
            },
          },
          User: {
            path: "user",
            screens: {
              Profile: ":username",
              Activity: ":username/activity/:date?",
              Inventory: ":username/inventory",
              ZeeOps: ":username/zeeops",
              Challenges: ":username/challenges",
            },
          },
          Clan: {
            path: "clan",
            screens: {
              Stats: ":clanid/:year?/:month?",
            },
          },
          Tools: {
            path: "tools",
            screens: {
              Calendar: "calendar",
              Bouncers: "bouncers",
              Credits: "credits",
              WidgetConfigureActivityWidget: "widget_configure_activity_widget/:id",
            },
          },
          Auth: "login",
        },
      },
      somewherewithoutcoffee: "*",
    },
  },
};
