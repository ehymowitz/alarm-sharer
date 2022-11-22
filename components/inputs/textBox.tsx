import React, { useState } from "react";
import { TextInput } from "react-native";
import tw from "twrnc";
import Container from "../containers/container";
import TextContainer from "../containers/textContainer";
import ErrorText from "../typography/errorText";

interface TextBoxProps {
  placeholder: string;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  errorText?: string;
  showError?: boolean;
}

const TextBox = ({
  placeholder,
  text,
  setText,
  errorText,
  showError,
}: TextBoxProps) => {
  return (
    <TextContainer>
      <TextInput
        style={tw`h-10 bg-white p-2 my-2`}
        onChangeText={setText}
        value={text}
        placeholder={placeholder}
      />
      {showError && <ErrorText>{errorText}</ErrorText>}
    </TextContainer>
  );
};

export default TextBox;
