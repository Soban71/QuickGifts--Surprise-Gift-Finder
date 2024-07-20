import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Animated,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function GiftRecommendationsScreen({ route }) {
  const { gifts } = route.params;

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.giftItem}
        onPress={() => console.log(`Selected: ${item.name}`)}
      >
        <View style={styles.giftContent}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.details}>Category: {item.category}</Text>
          <Text style={styles.details}>Price: ${item.price}</Text>
        </View>
        <Animated.View style={styles.iconContainer}>
          <Icon name="angle-right" size={30} color="#00796B" />
        </Animated.View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Recommended Gifts</Text>
      </View>
      <FlatList
        data={gifts}
        keyExtractor={(item, index) =>
          item.id ? item.id.toString() : index.toString()
        }
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0F7FA",
  },
  header: {
    width: "100%",
    padding: 20,
    backgroundColor: "#00796B",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 10,
    alignItems: "center",
    marginBottom: 20,
    marginTop: 30,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  giftItem: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6.68,
  },
  giftContent: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  details: {
    fontSize: 16,
    color: "#555",
  },
  iconContainer: {
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
