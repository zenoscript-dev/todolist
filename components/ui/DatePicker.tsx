import { Button, Modal, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { AntDesign } from "@expo/vector-icons";
import globalStyles from "@/constants/GlobalStyles";
import { Text, View } from "../Themed";
import { useTheme } from "@react-navigation/native";

interface DateTimeProps {
  id: number;
  onChange: (date: string | Date, id: number) => void;
  value: Date;
  mode: "date" | "time" | "datetime" | "countdown";
  is24Hour: boolean;
  display: "default" | "spinner" | "calendar";
  maximumDate?: Date;
  minimumDate?: Date;
}

const DatetimePicker = ({
  onChange,
  value,
  mode,
  is24Hour,
  display,
  minimumDate = new Date(),
  id,
}: DateTimeProps) => {
  const [show, setShow] = useState<boolean>(false);
  const [dateTime, setDateTime] = useState<Date>(value);
  const theme = useTheme();

  // Format date or time based on mode
  const formattedValue =
    mode === "date"
      ? dateTime.toLocaleDateString()
      : mode === "time"
      ? dateTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      : `${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}`;

  return (
    <>
      <Pressable
        onPress={() => setShow(true)}
        style={[
          globalStyles.fieldInput,
          {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          },
        ]}
      >
        <Text>{formattedValue}</Text>
        <AntDesign name="calendar" style={globalStyles.icons} />
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={show}
        onRequestClose={() => setShow(!show)}
      >
        <View style={styles.modalOverlay}>
          <View
            style={[
              styles.modalContent,
              { backgroundColor: theme.dark ? "black" : "white" },
            ]}
          >
            <View style={styles.buttonsWrapper}>
              <Button title="Close" onPress={() => setShow(false)} />
              <Button
                title="Done"
                onPress={() => {
                  onChange(dateTime, id);
                  setShow(false);
                }}
              />
            </View>
            <DateTimePicker
              value={new Date(dateTime)}
              display="spinner"
              mode={mode}
              is24Hour={is24Hour}
              onChange={(event, date) => {
                if (date) {
                  setDateTime(date);
                }
              }}
              style={styles.datePicker}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default DatetimePicker;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adds a transparent overlay
  },
  modalContent: {
    padding: 16,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    minHeight: "40%", // Adjusts height to your preference
    alignItems: "center",
  },
  datePicker: {
    width: "100%",
  },
  buttonsWrapper: {
    // marginVertical: 16,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
