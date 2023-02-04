import React from "react";
import { TextInput } from "react-native";
import tw from "twrnc";
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
        style={tw`h-10 bg-white p-2 my-2 bg-slate-500 text-white rounded`}
        onChangeText={setText}
        value={text}
        placeholder={placeholder}
      />
      {showError && <ErrorText>{errorText}</ErrorText>}
    </TextContainer>
  );
};

export default TextBox;
