import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { ScrollView, TextInput, View } from "../Themed";
import FormField from "./FormField";
import DatetimePicker from "../ui/DatePicker";
import globalStyles from "@/constants/GlobalStyles";
import Button from "../ui/Button";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import HorizontalSelectSlider from "../ui/HorizontalSelectSlider";
import { useTheme } from "@react-navigation/native";
import Colors from "@/constants/Colors";

interface FormBuilderProps {
  fields: any[];
  onSubmit: (data: any) => void;
}

const CATEGORIES = [
  { label: "Category 1", value: "Category 1" },
  { label: "Category 2", value: "Category 2" },
  { label: "Category 3", value: "blah" },
  { label: "Category 1", value: "Category 1" },
  { label: "Category 2", value: "Category 2" },
  { label: "Category 3", value: "blah" },
];
const FormBuilder = ({ fields, onSubmit }: FormBuilderProps) => {
  const [formData, setFormData] = useState(fields);
  const theme = useTheme();

  const handleDataChange = (value: string | Date, id: number) => {
    console.log(id);
    const data: any = [...formData];
      data.id.value = value;
      setFormData(data);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingScrollView
        style={[
          globalStyles.contentPadding,
          {
            backgroundColor: theme?.dark
              ? Colors.dark.background
              : Colors.light.background,
          },
        ]}
        showsVerticalScrollIndicator={false}
        stickyFooter={
          <View style={[globalStyles.contentPadding, { paddingVertical: 10 }]}>
            <Button title="Submit" onPress={() => onSubmit(formData)} />
          </View>
        }
      >
        {formData.map((field) => {
          return field.type === "date" ? (
            <FormField
              label={field.label}
              error={field.errorMessage}
              key={field.id}
              required={field.required}
            >
              <DatetimePicker
                id={field.id}
                mode="date"
                display="spinner"
                onChange={handleDataChange}
                is24Hour={false}
                value={field.value instanceof Date ? field.value : new Date()}
              />
            </FormField>
          ) : field.type === "time" ? (
            <FormField
              label={field.label}
              error={field.errorMessage}
              key={field.id}
              required={field.required}
            >
              <DatetimePicker
                id={field.id}
                mode="datetime"
                display="spinner"
                onChange={handleDataChange}
                is24Hour={false}
                value={field.value instanceof Date ? field.value : new Date()}
              />
            </FormField>
          ) : field.type === "horizontalScrollSelect" ? (
            <FormField
              label={field.label}
              error={field.errorMessage}
              key={field.id}
              required={field.required}
            >
              <HorizontalSelectSlider items={CATEGORIES} />
            </FormField>
          ) : field.size === "half" ? (
            <View style={styles.halfWrapper}>
              <FormField
                label={field.label}
                error={field.errorMessage}
                key={field.id}
                required={field.required}
              >
                <TextInput
                  placeholder=""
                  style={[
                    globalStyles.fieldInput,
                    // field.size === "half" && { width: "100%" },
                  ]}
                  maxLength={field.maxLength}
                  keyboardType="twitter"
                  value={field.value || ""}
                  onChangeText={(text) => handleDataChange(text, field.id)}
                />
              </FormField>
            </View>
          ) : (
            <FormField
              label={field.label}
              error={field.errorMessage}
              key={field.id}
              required={field.required}
            >
              <TextInput
                placeholder={field.placeholder as string}
                style={[
                  globalStyles.fieldInput,
                  field.type === "textArea" && { height: 150 },
                ]}
                value={field.value as string}
                onChangeText={(text) => handleDataChange(text, field.id)}
                maxLength={field.maxLength}
                multiline={field.type === "textArea"}
                numberOfLines={field.type === "textArea" ? 23 : 1}
              />
            </FormField>
          );
        })}
      </KeyboardAvoidingScrollView>
    </SafeAreaView>
  );
};

export default FormBuilder;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  halfWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 20,
  },
});
