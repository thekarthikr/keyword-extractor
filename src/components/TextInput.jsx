import { useState } from "react";
import { Textarea, Button, useToast } from "@chakra-ui/react";

const TextInput = ({ extractKeywords }) => {
  const [text, setText] = useState("");
  const toast = useToast();

  const submitText = () => {
    if (text.trim() === "") {
      toast({
        title: "Text field is empty",
        description: "Please enter some text to extract keywords",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } else {
      extractKeywords(text.replace(/\s+/g, " "));
    }
  };

  return (
    <>
      <Textarea
        marginTop={10}
        padding={5}
        color='GrayText'
        background={"whiteAlpha.500"}
        height={200}
        onChange={(e) => setText(e.target.value)}
      />

      <Button
        backgroundColor='blue.500'
        color='whiteAlpha.900'
        _hover={{ backgroundColor: "blue.600" }}
        marginTop={5}
        onClick={submitText}
      >
        Extract Keywords
      </Button>
    </>
  );
};

export default TextInput;
