import { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

export default function List() {
  const [personagens, setPersonagens] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCharacters = async () => {
    try {
      const response = await fetch("https://dragonball-api.com/api/characters");
      const data = await response.json();
      setPersonagens(data.items);
    } catch (error) {
      console.error(error);
    } finally {
   //   setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <View style={s.container}>
      <Text style={s.titulo}>Lista de Personagens</Text>

      {loading ? (
        <View style={s.loading}>
          <Image
            source={require("@/assets/Loading_icon.gif")}
            style={s.loadingImg}
          />
        </View>
      ) : (
        <FlatList
          data={personagens}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={s.card}>
              <Image source={{ uri: item.image }} style={s.img} />
              <Text style={s.nome}>{item.name}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  titulo: {
    fontSize: 32,
    textAlign: "center",
    marginBottom: 16,
    
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingImg: {
    width: 120,
    height: 120,
  },
  card: {
    alignItems: "center",
    marginBottom: 20,
  },
  img: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  nome: {
    fontSize: 18,
    marginTop: 8,
  },
});
