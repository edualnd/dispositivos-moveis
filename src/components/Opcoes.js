import { View, FlatList, Text, Image } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
export default function Opcoes() {
  const router = useRouter();
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
        contentContainerClassName="p-5 gap-4 items-center justify-center"
        data={opcoes}
        renderItem={({ item }) => (
          <View className="w-70 h-30 drop-shadow-black/50 drop-shadow-sm bg-gray-300 rounded-2xl justify-center items-center">
            <View className=" w-60 h-5 items-end justify-center p-1">
              <MaterialCommunityIcons
                name="card-account-details-outline"
                size={16}
                color="black"
                onPress={() =>
                  router.push({
                    pathname: "/details",
                    params: { nome: `${item.nome}` },
                  })
                }
              />
            </View>
            <View className=" w-50 h-20 gap-5 flex flex-row justify-center items-center">
              <Image
                className="w-16 h-16 rounded-full"
                source={{ uri: item.avatar }}
              ></Image>
              <View className="w-45 h-15justify-center">
                <Text className="font-bold">{item.nome}</Text>
                <Text className="font-bold">{item.email}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}
