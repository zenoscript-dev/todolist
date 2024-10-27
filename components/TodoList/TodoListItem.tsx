import { Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "../Themed";
import AntDesign from "@expo/vector-icons/AntDesign";
import { colors } from "@/constants/Colors";


interface TodoListItemProps {
  title: string;
  time: string;
  icon: string;
}

const TodoListItem = ({ title, time, icon }: TodoListItemProps) => {
  return (
    <Pressable style={styles.todoItemWrapper}>
      <View style={styles.todoItemInfoWrapper}>
        <View style={styles.todoItemIcon}>
          <Text style={styles.todoItemIconText}>{icon}</Text>
        </View>
        <View style={styles.todoItemInfo}>
          <Text
            style={styles.todoItemTitle}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {title}
          </Text>
          <Text style={styles.todoItemTime}>{time}</Text>
        </View>
      </View>
      <AntDesign name="right" size={24} color={colors.darkGray} />
    </Pressable>
  );
};

export default TodoListItem;

const styles = StyleSheet.create({
  todoItemWrapper: {
    width: "100%",
    minHeight: 50,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 5,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: colors.lightGray,
    borderWidth: .35,
  },
  todoItemIconText: {
    fontSize: 40,
  },
  todoItemIcon: {
    width: 50,
    height: 50,
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.darkGray,
  },
  todoItemInfoWrapper: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    paddingLeft: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 16,
  },
  todoItemInfo: {
    flex: 1,
    overflow: "hidden",
  },
  todoItemTitle: {
    fontSize: 18,
    fontWeight: "500",
    maxWidth: "80%",
  },
  todoItemTime: {
    fontSize: 12,
    color: colors.darkGray,
    marginTop: 10,
  },
});
