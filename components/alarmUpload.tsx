import React, { useState } from "react";
import { useMutation } from "react-query";
import { queryClient } from "../App";
import { uploadFile } from "../firebase/utilFunctions";
import PrimaryButton from "./buttons/primaryButton";
import TextContainer from "./containers/textContainer";
import TextBox from "./inputs/textBox";

const AlarmUpload = () => {
  const [composerName, setComposerName] = useState("");
  const [showError, setShowError] = useState(false);

  const handleUpload = async () => {
    if (composerName.length === 0) {
      setShowError(true);
      return;
    }

    setShowError(false);

    await uploadFile(composerName);
  };

  const alarmsUpload = useMutation(handleUpload, {
    onSuccess: () => queryClient.invalidateQueries("alarms"),
  });

  return (
    <TextContainer>
      <TextBox
        placeholder="Composer Name"
        text={composerName}
        setText={setComposerName}
        showError={showError}
        errorText="Please put your composer name!"
      />
      <PrimaryButton title="Create Song" onPress={alarmsUpload.mutate} />
    </TextContainer>
  );
};

export default AlarmUpload;
