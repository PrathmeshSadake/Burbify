import React, { useState } from "react";
import { Switch } from "react-native";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";

const categories = [
  {
    label: "Furniture",
    value: 1,
  },
  {
    label: "MacBooks",
    value: 2,
  },
  {
    label: "Smart Phones",
    value: 3,
  },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);
  const [isNew, setIsNew] = useState(false);
  return (
    <Screen>
      <Switch value={isNew} onValueChange={(value) => setIsNew(value)} />
      <AppPicker
        selectedItem={category}
        onSelectedItem={(item) => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder="Category"
      />
      <AppTextInput placeholder="Username" icon="email" />
    </Screen>
  );
}
