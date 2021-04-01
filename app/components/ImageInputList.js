import React, { useRef } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ImageInput from "./ImageInput";

export default function ImageInputList({
  imageUris = [],
  onRemoveImage,
  onAddImage,
}) {
  const scrollView = useRef();

  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((imageUri) => (
            <View key={imageUri} style={styles.image}>
              <ImageInput
                imageUri={imageUri}
                key={imageUri}
                onChangeImage={() => onRemoveImage(imageUri)}
              />
            </View>
          ))}
          <ImageInput onChangeImage={(imageUri) => onAddImage(imageUri)} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});
