import React, { PropsWithChildren } from "react";
import { Linking, TouchableOpacity } from "react-native";
import RegularText from "./regularText";

interface LinkTextProps {
  link: string;
}

const LinkText = ({ children, link }: PropsWithChildren<LinkTextProps>) => {
  const handleLink = () => Linking.openURL(link);

  return (
    <TouchableOpacity onPress={handleLink}>
      <RegularText>{children}</RegularText>;
    </TouchableOpacity>
  );
};

export default LinkText;
