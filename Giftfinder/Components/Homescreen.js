import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Logoimg from "../assets/images.jpeg"; // Ensure this is a high-quality image
import BackgroundImage from "../assets/image2.jpeg"; // Add a unique, high-quality background image
import LottieView from "lottie-react-native";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={BackgroundImage} style={styles.backgroundImage} />
      <View style={styles.overlay} />
      <View style={styles.header}>
        <Text style={styles.headerText}>Gift Finder</Text>
        <Text style={styles.subHeaderText}>
          Find the perfect gift for your loved ones
        </Text>
      </View>
      <View style={styles.content}>
        <Image source={Logoimg} style={styles.image} />
        <Text style={styles.introduction}>
          Welcome to Gift Finder! Our app helps you find the perfect gift for
          any occasion. Simply select your interests and get personalized
          recommendations.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Preferences")}
        >
          <Text style={styles.buttonText}>Find a Gift 🎁</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingBottom: 20,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  header: {
    width: "100%",
    padding: 20,
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
    paddingTop: 30,
    marginTop: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  subHeaderText: {
    fontSize: 16,
    color: "#fff",
    marginTop: 10,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  content: {
    width: "90%",
    height: "80%",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 9,
    marginBottom: 20,
  },
  introduction: {
    fontSize: 17,
    textAlign: "center",
    marginVertical: 20,
    color: "#333",
    letterSpacing: 0.5,
    lineHeight: 24,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginVertical: 20,
    borderWidth: 3,
    borderColor: "#00796B",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    marginTop: 50,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#00796B",
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    marginTop: 30,
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
