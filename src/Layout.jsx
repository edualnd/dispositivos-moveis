import { TabletSmartphone } from "lucide-react-native";
import { Text, View } from "react-native";
export default function Layout({ children }) {
  return (
    <View className="bg-gray-200 flex-1 flex flex-col">
      {/* Header */}
      <View className="bg-black w-screen h-14 p-2 flex flex-row gap-3 items-center">
        <TabletSmartphone color={"white"} size={44} />
        <Text className="text-white font-bold text-xl">
          Desenvolvimento para dispositivos móveis
        </Text>
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
