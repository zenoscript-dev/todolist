import { StyleSheet, View } from "react-native";
import React, { ReactNode } from "react";
import { Text } from "../Themed";

interface FormFieldProps {
  label: string;
  required: boolean;
  error?: string;
  children: ReactNode;
}

const FormField = ({ label, children,error, required }: FormFieldProps) => {
  return (
    <View style={styles.fieldWrapper}>
      <Text style={styles.fieldText}>{label}{required && ' *'}</Text>
      {children}
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({
  fieldWrapper: {
    minWidth: '100%',
    display: "flex",
    gap: 12,
    marginBottom: 16,
  },
  fieldText: {
    fontSize: 18,
    fontWeight: "600",
  },
  
  errorText: {
    color: "red",
    fontSize: 14,
  },
});
