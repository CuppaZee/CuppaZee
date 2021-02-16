import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Button, Icon, Layout, Text, DrawerItem, useTheme } from "@ui-kitten/components";
import dayjs from "dayjs";
import * as React from "react";
import { useTranslation } from "react-i18next";
import {
  FlatList,
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
  ViewProps,
} from "react-native";
import UserActivityOverview from "../../components/Activity/Overview";
import ZeeOpsOverview from "../../components/ZeeOps/Overview";
import { useClanBookmarks, useUserBookmarks } from "../../hooks/useBookmarks";
import useComponentSize from "../../hooks/useComponentSize";
import useTitle from "../../hooks/useTitle";
import { DashStackParamList } from "../../types";
import ClansDashCard from "./Clans";
import UserDashCard from "./User";

function WheelWrapper({
  onWheel,
  children,
}: React.PropsWithChildren<{ onWheel: (event: React.WheelEvent<HTMLDivElement>) => void }>) {
  if (Platform.OS === "web")
    return (
      <div className="snap-item-center" onWheel={onWheel}>
        <style>
          {".snap-item-center > div > div > div { scroll-snap-align: center !important }"}
        </style>
        {children}
      </div>
    );
  return <>{children}</>;
}

const FlexView = (props: ViewProps) => <View {...props} style={[props.style, { flex: 1 }]} />;

export interface DashCardProps<i> {
  item: i;
  index: number;
  touched: number[];
}

export default function DashboardScreen() {
  const { t } = useTranslation();
  const nav = useNavigation();
  const route = useRoute<RouteProp<DashStackParamList, "Dash">>();
  const theme = useTheme();
  const scrollRef = React.useRef<FlatList>();
  const scrollSize = React.useRef<{ width: number; height: number }>();
  const position = React.useRef<number>();
  const [users] = useUserBookmarks();
  const [clans] = useClanBookmarks();
  const [touched, setTouched] = React.useState<number[]>([0]);
  const [index, setIndex] = React.useState<number>(0);
  const [size, onLayout] = useComponentSize();
  const width = scrollSize.current?.width ?? size?.width ?? 0;
  useTitle(`☕ Dashboard`);
  return (
    <Layout onLayout={onLayout} style={{ flex: 1 }}>
      <ScrollView
        onContentSizeChange={(w, h) => (scrollSize.current = { width: w, height: h })}
        style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: -8,
          }}>
          {[{ nonUser: "clan" }, ...users].map((i, n) => (
            <Pressable
              onPress={() => {
                scrollRef.current?.scrollToOffset({
                  offset: (position.current || 0) + (n - index) * Math.min(600, width),
                });
              }}>
              {"nonUser" in i ? (
                <Layout
                  level="2"
                  style={
                    index === n
                      ? {
                          height: 32,
                          width: 32,
                          borderRadius: 16,
                          marginHorizontal: 2,
                          justifyContent: "center",
                          alignItems: "center",
                        }
                      : {
                          height: 16,
                          width: 16,
                          borderRadius: 8,
                          marginHorizontal: 2,
                          justifyContent: "center",
                          alignItems: "center",
                        }
                  }>
                  <Icon
                    style={
                      index === n
                        ? { color: theme["text-basic-color"], height: 24, width: 24 }
                        : { color: theme["text-basic-color"], height: 12, width: 12 }
                    }
                    name="shield-half-full"
                  />
                </Layout>
              ) : (
                <Image
                  style={
                    index === n
                      ? { height: 32, width: 32, borderRadius: 16, marginHorizontal: 2 }
                      : { height: 16, width: 16, borderRadius: 8, marginHorizontal: 2 }
                  }
                  source={{
                    uri: `https://munzee.global.ssl.fastly.net/images/avatars/ua${Number(
                      i.user_id
                    ).toString(36)}.png`,
                  }}
                />
              )}
            </Pressable>
          ))}
        </View>
        <WheelWrapper
          onWheel={ev => {
            if ((scrollSize.current?.height || 1) > (size?.height || 0)) return;
            scrollRef.current?.scrollToOffset({
              offset:
                (position.current || 0) + (ev.nativeEvent.deltaY / 100) * Math.min(600, width),
            });
          }}>
          <FlatList
          style={{ flexGrow: 1 }}
            decelerationRate="fast"
            ref={sv => {
              scrollRef.current = sv || undefined;
            }}
            horizontal={true}
            pagingEnabled={Platform.OS === "web"}
            contentOffset={{ x: Math.min(600, width), y: 0 }}
            onScroll={ev => {
              if (position.current === undefined && Platform.OS === "web") {
                scrollRef.current?.scrollToOffset({
                  offset: Math.min(600, width),
                  animated: false,
                });
              }
              if (ev.nativeEvent.contentOffset.x !== undefined) {
                position.current = ev.nativeEvent.contentOffset.x;
                const pos = Math.ceil((ev.nativeEvent.contentOffset.x - 16) / Math.min(600, width));
                setIndex(Math.round((ev.nativeEvent.contentOffset.x - 16) / Math.min(600, width)));
                if (!touched.includes(pos)) setTouched([...touched, pos]);
              }
            }}
            scrollEventThrottle={4}
            snapToInterval={Math.min(600, width)}
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
            snapToStart={true}
            data={[{ nonUser: "clan" }, ...users]}
            CellRendererComponent={FlexView}
            renderItem={({ item, index }) => (
                <View
                  style={{
                    width: Math.min(600, width),
                    padding: 8,
                    zIndex: -index,
                    height: "100%",
                    flex: 1,
                    alignSelf: "center",
                  }}>
                  {"nonUser" in item ? (item.nonUser === "clan" ? <ClansDashCard /> : null) : <UserDashCard item={item} index={index} touched={touched} />}
                </View>
              )
            }
            ListFooterComponent={<View style={{ width: (width - Math.min(600, width)) / 2 }} />}
            ListHeaderComponent={<View style={{ width: (width - Math.min(600, width)) / 2 }} />}
          />
        </WheelWrapper>
        {width > 600 && (
          <>
            <Button
              appearance="ghost"
              accessoryLeft={props => <Icon name="chevron-left" {...props} />}
              onPress={() => {
                scrollRef.current?.scrollToOffset({
                  offset: (position.current || 0) - Math.min(600, width),
                });
              }}
              style={{ position: "absolute", left: 0, top: 0, bottom: 0 }}
            />
            <Button
              appearance="ghost"
              accessoryLeft={props => <Icon name="chevron-right" {...props} />}
              onPress={() => {
                scrollRef.current?.scrollToOffset({
                  offset: (position.current || 0) + Math.min(600, width),
                });
              }}
              style={{ position: "absolute", right: 0, top: 0, bottom: 0 }}
            />
          </>
        )}
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  card: { margin: 4, borderRadius: 4 },
});