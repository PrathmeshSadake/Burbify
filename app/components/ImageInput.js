import React, { useEffect } from "react";
import {
  Alert,
  BackHandler,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import colors from "../config/colors";

export default function ImageInput({ imageUri, onChangeImage }) {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      alert("You need to enable permission to access your gallery!");
    }
  };

  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
    });
    if (!result.cancelled) {
      onChangeImage(result.uri);
    }
  };

  const handlePress = () => {
    if (!imageUri) {
      selectImage();
    } else {
      Alert.alert("Delete", "Are you sure?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
    }
  };
  
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons color={colors.grey} name="camera" size={50} />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.lightGrey,
    borderRadius: 15,
    height: 80,
    justifyContent: "center",
    overflow: "hidden",
    width: 80,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
