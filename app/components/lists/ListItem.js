import React from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import colors from "../../config/colors";
import AppText from "../AppText";

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  arrowIcon,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.lightGrey} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </AppText>
            )}
          </View>
          {arrowIcon && (
            <View style={styles.arrowIconContainer}>
              <Ionicons name="chevron-forward" size={20} color={colors.grey} />
            </View>
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  arrowIconContainer: {
    justifyContent: "center",
  },
  container: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    justifyContent: "center",
    flex: 1,
    marginLeft: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: "600",
  },
  subTitle: {
    color: colors.grey,
  },
});

export default ListItem;
