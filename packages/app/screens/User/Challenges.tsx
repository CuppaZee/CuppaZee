import { RouteProp, useRoute } from "@react-navigation/native";
import { Layout, Spinner, Text } from "@ui-kitten/components";
import dayjs from "dayjs";
import * as React from "react";
import useMunzeeRequest from "../../hooks/useMunzeeRequest";
import useComponentSize from "../../hooks/useComponentSize";
import { UserStackParamList } from "../../types";
import useTitle from "../../hooks/useTitle";
import { ActivityConverter, UserActivityData } from "../../components/Activity/Data";
import useCuppaZeeRequest from "../../hooks/useCuppaZeeRequest";
import ChallengesConverter from "../../components/Challenges/Data";

export default function UserChallengesScreen() {
  const [size, onLayout] = useComponentSize();
  const route = useRoute<RouteProp<UserStackParamList, "Challenges">>();  
  useTitle(
    `☕ ${route.params.username} - Challenges - ${dayjs(route.params?.date).format("DD/MM/YYYY")}`
  );
  const user = useMunzeeRequest("user", { username: route.params?.username }, route.params?.username !== undefined);
  const data = useCuppaZeeRequest<{ data: UserActivityData }>(
    "user/activity",
    {
      user_id: user.data?.data?.user_id,
      day: route.params?.date ?? dayjs().format("YYYY-MM-DD"),
    },
    user.data?.data?.user_id !== undefined
  );
  const d = React.useMemo(
    () =>
      data.data?.data ? ChallengesConverter(ActivityConverter(data.data?.data, null, { username: "sohcah" })) : null,
    [data.dataUpdatedAt]
  );
  
  if (!data.data || !d || !size) {
    return (
      <Layout
        onLayout={onLayout}
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Spinner />
      </Layout>
    );
  }
  return (
    <Layout onLayout={onLayout} style={{ flex: 1, flexDirection: "row" }}>
      <Text>{JSON.stringify(d, null, 2)}</Text>
    </Layout>
  );
}