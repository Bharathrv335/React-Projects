import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

const Product = ({ route }) => {
  const { item } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.border}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.textA}>{item.title}</Text>
        <Text style={styles.textB}>{item.category}</Text>
        <View>
          <Text style={styles.textA}>
            Price :<Text style={styles.textC}> ${item.price}</Text>
          </Text>
        </View>
        <Text style={styles.textD}>{item.description}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    height: 230,
    width: "100%",
    resizeMode: "contain",
  },
  border: {
    borderWidth: 1,
    borderColor: "#a3a3a3",
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  textA: {
    fontSize: 14,
    fontWeight: "700",
    paddingTop: 8,
  },
  textB: {
    fontSize: 14,
    fontWeight: "700",
    paddingTop: 6,
    color: "red",
  },
  textC: {
    color: "#00c70a",
    fontSize: 16,
    fontWeight: "700",
  },
  textD: {
    color: "#545454",
    fontSize: 12,
    paddingTop: 6,
  },
});
