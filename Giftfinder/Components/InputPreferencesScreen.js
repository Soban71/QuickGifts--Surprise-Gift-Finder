import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import LottieView from "lottie-react-native";

const interestsList = [
  "chocolate",
  "sweets",
  "music",
  "tech",
  "customizable",
  "mug",
  "fitness",
  "health",
  "gadgets",
  "fashion",
  "leather",
  "portable",
  "photography",
  "fun",
  "cooking",
  "experience",
  "relaxation",
  "spa",
  "home",
  "decor",
  "games",
  "socks",
  "handmade",
  "t-shirt",
  "art",
  "craft",
  "coffee",
  "gourmet",
  "office",
  "luxury",
  "travel",
  "gear",
  "hygiene",
  "sports",
  "kitchen",
  "outdoor",
  "adventure",
  "garden",
  "hiking",
  "golf",
  "watches",
  "beauty",
  "perfume",
  "diary",
  "food",
  "yoga",
  "eyewear",
  "tools",
  "jewelry",
];

export default function InputPreferencesScreen({ navigation }) {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggleInterest = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const getRecommendations = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://192.168.1.19:8081/recommend", {
        interests: selectedInterests.join(","),
      });
      if (response.data) {
        setTimeout(() => {
          setLoading(false);
          navigation.navigate("getRecommendations", {
            gifts: response.data.gifts,
          });
        }, 5000);
      } else {
        setLoading(false);
        Alert.alert("Error", "No gift recommendations found.");
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      Alert.alert("Error", "An error occurred while getting recommendations.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Select Interests</Text>
      </View>
      <View style={styles.grid}>
        {interestsList.map((interest, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.interestBox,
              selectedInterests.includes(interest) &&
                styles.selectedInterestBox,
            ]}
            onPress={() => toggleInterest(interest)}
          >
            <Text style={styles.interestText}>{interest}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={getRecommendations}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <>
            <Text style={styles.buttonText}>Get Recommendations</Text>
            <LottieView
              source={require("../assets/image2.jpeg")}
              autoPlay
              loop
              style={styles.buttonIcon}
            />
          </>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#E0F7FA",
    alignItems: "center",
    padding: 20,
  },
  header: {
    width: "100%",
    padding: 30,
    backgroundColor: "#00796B",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  interestBox: {
    width: "30%",
    margin: 5,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  selectedInterestBox: {
    backgroundColor: "#00796B",
    borderColor: "#004D40",
    shadowColor: "#004D40",
  },
  interestText: {
    fontSize: 15,
    color: "#333",
  },
  button: {
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: "#00796B",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  buttonIcon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
});
