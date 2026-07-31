import { View, FlatList, Text } from "react-native";

export default function Opcoes() {
  const opcoes = ["Listas", "Formulários", "Componentes"];
  opcoes.sort();
  return (
    <View className="w-full h-20">
      <FlatList
        contentContainerClassName="p-5 flex-row gap-4 items-center justify-center"
        data={opcoes}
        renderItem={({ item }) => (
          <View className="bg-gray-300 rounded-2xl w-32 h-10 flex justify-center items-center">
            <Text className="font-bold">{item}</Text>
          </View>
        )}
      />
    </View>
  );
}
