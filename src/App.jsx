import { Container, Box } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TextInput from "./components/TextInput";

const App = () => {
  const extractKeywords = (text) => {};

  return (
    <Box background={"gray.200"} height='100vh' paddingTop={"5rem"}>
      <Container maxW={"3xl"} centerContent>
        <Header />
        <TextInput extractKeywords={extractKeywords} />
        <Footer />
      </Container>
    </Box>
  );
};

export default App;
