import { View, FlatList, Text, Image } from "react-native";

export default function Opcoes() {
  const opcoes = [
    {
      nome: "João Silva",
      avatar: "https://github.com/edualnd.png",
      email: "joao.silva@email.com",
    },
    {
      nome: "Maria Oliveira",
      avatar: "https://github.com/edualnd.png",
      email: "maria.oliveira@email.com",
    },
    {
      nome: "Carlos Santos",
      avatar: "https://github.com/edualnd.png",
      email: "carlos.santos@email.com",
    },
  ];
  return (
    <View className="flex-1">
      <FlatList
        contentContainerClassName="p-5 flex-row gap-4 items-center justify-center"
        data={opcoes}
        renderItem={({ item }) => (
          <View className="bg-gray-300 rounded-2xl w-60 h-30 gap-2 flex  flex-row justify-center items-center">
            <Image
              className="w-12 h-12 rounded-full"
              source={{ uri: item.avatar }}
            ></Image>
            <View>
              <Text className="font-bold">{item.nome}</Text>
              <Text className="font-bold">{item.email}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
