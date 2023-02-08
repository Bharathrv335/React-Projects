import React, { useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./Action";

function Products() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  
  if (error) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.border}
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Details", { item })}
          >
            <Image source={{ uri: item.image }} style={styles.images} />
            <View style={{ alignItems: "center" }}>
              <Text style={styles.textA}>{item.title}</Text>
              <Text style={styles.textA}>
                Price :<Text style={styles.textB}> ${item.price}</Text>
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  border: {
    borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 5,
    borderColor: "#a3a3a3",
    borderRadius: 5,
    paddingVertical: 10,
  },
  textA: {
    fontSize: 14,
    fontWeight: "600",
    paddingTop: 6,
  },
  textB: {
    color: "#00c70a",
    fontSize: 16,
    fontWeight: "700",
  },
  images: {
    resizeMode: "contain",
    height: 150,
    width: "100%",
  },
});
