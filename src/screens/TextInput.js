import React from "react";
import { TextInput } from "react-native";

const Input = (
  {
    onChangeText,
    value,
    onSubmitEditing,
    returnKeyType,
    keyboardType,
    style,
    placeholder,
  },
  ref
) => {
  return (
    <TextInput
      onChangeText={onChangeText}
      value={value}
      ref={ref}
      onSubmitEditing={onSubmitEditing}
      blurOnSubmit={returnKeyType === "next" ? false : true}
      returnKeyType={returnKeyType}
      keyboardType={keyboardType}
      style={style}
      placeholder={placeholder}
    />
  );
};
const forwardInput = React.forwardRef(Input);
export default forwardInput;
