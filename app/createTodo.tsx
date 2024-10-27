import FormBuilder from "@/components/Form/FormBuilder";
import { View } from "@/components/Themed";
import { StyleSheet, TextInput } from "react-native";

interface field {
  id: number;
  name: string;
  type: string;
  placeholder: string | Date;
  label: string;
  required: boolean;
  multiSelect?: boolean;
  value: any;
  errorMessage: string;
  maxLength?: number;
  children?: field[];
  size?: "full" | "half";
}

export default function CreateTodo() {
  const fields = [
    {
      id: 0,
      name: "title",
      type: "text",
      placeholder: "task name",
      label: "Task Title",
      required: true,
      maxLength: 50,
      value: "",
      errorMessage: "",
    },
    // {
    //   id: 1,
    //   name: "category",
    //   type: "horizontalScrollSelect",
    //   multiSelect: false,
    //   placeholder: "",
    //   label: "Category",
    //   required: true,
    //   value: "",
    //   errorMessage: "",
    // },
    {
      id: 1,
      name: "emoji",
      type: "emoji",
      placeholder: "",
      label: "Emoji",
      required: false,
      value: "",
      errorMessage: "",
      size: "half",
      maxLength: 1,
      children: [
        {
          id: 2,
          name: "color",
          type: "color",
          placeholder: "",
          label: "Color",
          required: false,
          value: "",
          errorMessage: "",
          size: "half",
        },
      ],
    },
    {
      id: 3,
      name: "startTime",
      type: "time",
      placeholder: "7:00",
      label: "Start Date & Time",
      required: true,
      value: new Date(),
      errorMessage: "",
    },
    {
      id: 4,
      name: "endTime",
      type: "time",
      placeholder: "9:00",
      label: "End Date & Time",
      required: true,
      value: new Date(),
      errorMessage: "",
    },
    {
      id: 5,
      name: "description",
      type: "textArea",
      label: "Description",
      placeholder: "description",
      required: false,
      value: "",
      errorMessage: "",
    },
  ];

  const onSubmit = (data: field[]) => {
    // Handle form submission logic here
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <FormBuilder fields={fields} onSubmit={onSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
