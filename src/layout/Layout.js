import { TabletSmartphone } from "lucide-react-native";
import { Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
export default function Layout({ children }) {
  const router = useRouter();

  return (
    <View className="bg-gray-200 flex-1 flex flex-col ">
      {/* Header */}
      <View className="bg-black w-screen h-14 p-5 flex flex-row gap-6 items-center justify-between">
        <View className="flex flex-row gap-3 items-center justify-center">
          <TabletSmartphone
            color={"white"}
            size={44}
            onPress={() => router.dismiss(1)}
          />
          <Text className="text-white font-bold text-xl">
            Desenvolvimento Mobile
          </Text>
        </View>
        <AntDesign
          name="user-add"
          size={24}
          color="white"
          onPress={() => router.push("/contact")}
        />
      </View>
      {/* Main */}
      <View className="flex-1">{children}</View>
      {/* Footer */}
      <View className="bg-black/60 w-screen h-10 flex justify-center items-center">
        <Text className="text-white/30">
          Eduarda Gonçalves - IFSP Campus Caraguatatuba
        </Text>
      </View>
    </View>
  );
}
