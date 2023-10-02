import React from "react";
import TextRenderer from "@components/TextRenderer";
import ZeroState from "@components/ZeroState";
import TextArea from "@components/TextArea";

const Playground = ({
  text,
  textHandler,
  minCount,
  maxCount,
  isWordCount,
  showCount,
}: {
  text: string;
  textHandler: (e: any) => void;
  minCount: number;
  maxCount: number;
  isWordCount: boolean;
  showCount: boolean;
}) => (
  <div className="flex flex-col sm:grid sm:grid-cols-3 gap-4">
    <TextArea value={text} valueHandler={textHandler} />

    <div className="col-span-2">
      {text === "" ? (
        <ZeroState />
      ) : (
        <TextRenderer
          text={text}
          showCount={showCount}
          minCount={minCount}
          maxCount={maxCount}
          isWordCount={isWordCount}
        />
      )}
    </div>
  </div>
);

export default Playground;
