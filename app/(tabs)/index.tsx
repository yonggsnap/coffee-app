import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import React from "react";

import icedCoffe from "@/assets/images/iced-coffee.png";
import { Link } from "expo-router";

export default function app() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={icedCoffe}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <View style={styles.viewButtons}>
          <Text style={styles.text}>Coffee Shop</Text>
          <Link href="/contact" asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Contact Us</Text>
            </Pressable>
          </Link>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  viewButtons : {
    justifyContent: "center",
    alignContent: "center",
    marginTop: 200
  },
  backgroundImage: {
    height: "100%",
    width: "100%",
    flex: 1,
  },
  button: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingVertical: 20,
    borderRadius: 15,
    marginHorizontal: "auto",
    marginTop: 20,
    display: "flex",
    maxWidth: 200,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
