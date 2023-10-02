import React from "react";
import TextReport from "@components/TextReport";
import getLengthCount from "@resources/getLengthCount";
import getBackgroundColor from "@resources/getBackgroundColor";

const TextRenderer = ({
  text,
  showCount,
  minCount,
  maxCount,
  isWordCount,
}: {
  text: string;
  showCount: boolean;
  minCount: number;
  maxCount: number;
  isWordCount: boolean;
}) => {
  const textArray: string[] = text.split(". ");

  return (
    <>
      <div className="pb-4 border-b">
        <div className="leading-8 max-h-96 overflow-x-hidden overflow-y-scroll font-serif">
          {textArray.map((t: string, i: number) => (
            <span
              key={i}
              className="p-1 mr-1 rounded ring-1 ring-gray-900/10 ring-inset"
              style={{
                backgroundColor: getBackgroundColor({
                  minCount,
                  maxCount,
                  length: getLengthCount({ string: t, isWordCount }),
                }),
              }}
            >
              {t}
              {i === textArray.length - 1 ? null : "."}
              {showCount ? (
                <small className="ml-1 bg-white opacity-50 rounded-sm p-0.5 ring-1 ring-gray-900/30 align-text-top text-xs font-sans font-medium">
                  {getLengthCount({ string: t, isWordCount })}
                </small>
              ) : null}
            </span>
          ))}
        </div>
      </div>

      <TextReport
        text={text}
        minCount={minCount}
        maxCount={maxCount}
        isWordCount={isWordCount}
      />
    </>
  );
};

export default TextRenderer;
