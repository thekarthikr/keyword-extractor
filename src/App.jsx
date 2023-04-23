import { useState } from "react";
import { Container, Box } from "@chakra-ui/react";
import Header from "./components/Header";
import TextInput from "./components/TextInput";
import KeywordsModal from "./components/KeywordsModal";

const App = () => {
  const [keywords, setKeywords] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const extractKeywords = async (text) => {
    setLoading(true);
    setIsOpen(true);

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
        "X-RapidAPI-Host": "keyword-extractor.p.rapidapi.com",
      },
      body: `{"text":
      "${text}","top_n":20,"ngram_range":[1,2],"diversify":false,"diversity":0}`,
    };

    const res = await fetch(
      "https://keyword-extractor.p.rapidapi.com/api/keyword",
      options
    );

    const { result } = await res.json();

    let words = Object.keys(result);

    let capitalizedWords = words.map(function (word) {
      return word.replace(/\b\w/g, function (firstLetter) {
        return firstLetter.toUpperCase();
      });
    });
    const data = capitalizedWords.join(", ");

    setKeywords(data);
    setLoading(false);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Box background={"gray.200"} height='100vh' paddingTop={"5rem"}>
      <Container maxW={"3xl"} centerContent>
        <Header />
        <TextInput extractKeywords={extractKeywords} />
      </Container>

      <KeywordsModal
        keywords={keywords}
        loading={loading}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </Box>
  );
};

export default App;
