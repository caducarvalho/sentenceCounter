import React, { useState } from "react";
import Playground from "@components/Playground";
import Container from "@components/Container";
import Controls from "@components/Controls";
import Header from "@components/Header";
import settings from "@settings/settings.json";

const App = () => {
  const [text, textHandler] = useState<string>(settings.text);
  const [showCount, showCountToggler] = useState<boolean>(false);
  const [minCount, minCountHandler] = useState<number>(
    settings.default.minWords
  );
  const [maxCount, maxCountHandler] = useState<number>(
    settings.default.maxWords
  );
  const [isWordCount, isWordCountToggler] = useState<boolean>(true);

  return (
    <Container>
      <Header />

      <Controls
        showCount={showCount}
        showCountToggler={showCountToggler}
        minCount={minCount}
        minCountHandler={minCountHandler}
        maxCount={maxCount}
        maxCountHandler={maxCountHandler}
        isWordCount={isWordCount}
        isWordCountToggler={isWordCountToggler}
      />

      <Playground
        text={text}
        textHandler={textHandler}
        minCount={minCount}
        maxCount={maxCount}
        isWordCount={isWordCount}
        showCount={showCount}
      />
    </Container>
  );
};

export default App;
