import React, { useState } from "react";
import { uploadFile } from "../firebase/utilFunctions";
import PrimaryButton from "./buttons/primaryButton";
import TextContainer from "./containers/textContainer";
import TextBox from "./inputs/textBox";

const AlarmUpload = () => {
  const [composerName, setComposerName] = useState("");
  const [showError, setShowError] = useState(false);

  const handleUpload = () => {
    if (composerName.length === 0) {
      setShowError(true);
      return;
    }

    setShowError(false);

    uploadFile(composerName);
  };

  return (
    <TextContainer>
      <TextBox
        placeholder="Composer Name"
        text={composerName}
        setText={setComposerName}
        showError={showError}
        errorText="Please put your composer name!"
      />
      <PrimaryButton title="Create Song" onPress={handleUpload} />
    </TextContainer>
  );
};

export default AlarmUpload;
