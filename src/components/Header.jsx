import { Text, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <Heading fontFamily='Poppins' marginBottom={5}>
        Keyword Extractor
      </Heading>

      <Text>
        Paste your text below, and we'll do my best to extract the keywords for
        you.
      </Text>
    </>
  );
};

export default Header;
