import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Layout, Spinner, Text } from "@ui-kitten/components";
import * as React from "react";
import useCuppaZeeRequest from "../../hooks/useCuppaZeeRequest";
import useMunzeeRequest from "../../hooks/useMunzeeRequest";
import useComponentSize from "../../hooks/useComponentSize";
import { UserStackParamList } from "../../types";
import useTitle from "../../hooks/useTitle";
import { Pressable, ScrollView, View } from "react-native";
import MapView from "../../components/Maps/MapView";
import { UserDeploys } from "@cuppazee/api/user/deploys";
import { MunzeeSpecialBouncer } from "@cuppazee/api/munzee/specials";
import TypeImage from "../../components/Common/TypeImage";
import useDay from "../../hooks/useDay";
import Loading from "../../components/Loading";
import { useTranslation } from "react-i18next";

type Bouncer = NonNullable<UserDeploys["response"]["data"]>["munzees"][0] & {
  bouncer?: MunzeeSpecialBouncer & { hash: string };
  location?: {
    record?: {
      name: string;
      latitude: number;
      longitude: number;
      countryCode: string;
    };
    distance: number;
  };
  timezone: string[];
}

export default function UserBouncersScreen() {
  const { t } = useTranslation();
  const nav = useNavigation();
  const day = useDay();
  const [size, onLayout] = useComponentSize();
  const route = useRoute<RouteProp<UserStackParamList, "Bouncers">>();
  useTitle(`☕ ${route.params.username} - ${t("pages:user_bouncers")}`);
  const user = useMunzeeRequest(
    "user",
    { username: route.params?.username },
    route.params?.username !== undefined
  );
  const data = useCuppaZeeRequest<{ data: Bouncer[] }>(
    "user/bouncers",
    {
      user_id: user.data?.data?.user_id,
    },
    user.data?.data?.user_id !== undefined
  );

  if (!data.data || !size) {
    return (
      <Layout style={{ flex: 1 }} onLayout={onLayout}>
        <Loading data={[user, data]} />
      </Layout>
    );
  }
  return (
    <Layout onLayout={onLayout} style={{ flex: 1, flexDirection: "row" }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 4 }}>
        <Layout style={{ height: 400, margin: 4, borderRadius: 8 }}>
          <MapView
            nav={nav}
            latitude={0}
            longitude={0}
            markers={data.data.data
              .filter(i => i.bouncer)
              .map(i => ({
                lat: Number(i.bouncer?.latitude),
                lng: Number(i.bouncer?.longitude),
                icon: i.pin_icon,
                id: i.munzee_id,
                munzee: i.bouncer?.munzee_id,
              }))}
          />
        </Layout>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {data.data.data.map(i => (
            <Pressable
              style={{
                width: 400,
                maxWidth: "100%",
                flexGrow: 1,
              }}
              onPress={
                i.bouncer
                  ? () =>
                      nav.navigate("Tools", {
                        screen: "Munzee",
                        params: {
                          a: i.bouncer?.munzee_id,
                        },
                      })
                  : undefined
              }>
              <Layout
                level="2"
                style={{
                  margin: 4,
                  flexDirection: "row",
                  alignItems: "center",
                  borderRadius: 8,
                  flex: 1,
                }}>
                <View style={{ padding: 4 }}>
                  <TypeImage icon={i.pin_icon} style={{ size: 48 }} />
                </View>
                <View style={{ padding: 4 }}>
                  <Text category="h6">{i.friendly_name}</Text>
                  {i.bouncer ? (
                    <>
                      <Text category="s1">
                        {t("user_bouncers:host", {
                          name: i.bouncer.friendly_name,
                          creator: i.bouncer.full_url.split("/")[4],
                        })}
                      </Text>
                      {i.location?.record && (
                        <Text category="s2">
                          {t("user_bouncers:location", {
                            town: i.location?.record?.name,
                            country: i.location?.record?.countryCode,
                            times: i.timezone.map(t => day().tz(t).format("HH:mm")).join(", "),
                          })}
                        </Text>
                      )}
                      <Text category="c1">
                        {t("user_bouncers:captures", {number: i.number_of_captures, date: i.last_captured_at ? day(i.last_captured_at).format("L LT") : "-"})}
                      </Text>
                    </>
                  ) : (
                    <>
                        <Text category="s1">{t(`user_bouncers:rest_${(["a","b","c"] as const)[Math.floor(Math.random() * 3)]}` as const)}</Text>
                    </>
                  )}
                </View>
              </Layout>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </Layout>
  );
}
