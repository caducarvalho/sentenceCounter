import React from "react";
import getLengthCount from "@resources/getLengthCount";
import getTimeToRead from "@resources/getTimeToRead";
import getPlural from "@/resources/getPlural";

const TextReport = ({
  text,
  minCount,
  maxCount,
  isWordCount,
}: {
  text: string;
  minCount: number;
  maxCount: number;
  isWordCount: boolean;
}) => {
  const getUnrangedSentences = (t: string, isOver?: boolean) => {
    const textArray: string[] = t.split(". ");

    if (isOver) {
      return textArray.filter(
        (s: string) => getLengthCount({ string: s, isWordCount }) > maxCount
      ).length;
    }

    return textArray.filter(
      (s: string) => getLengthCount({ string: s, isWordCount }) < minCount
    ).length;
  };

  return (
    <div className="pt-4 grid grid-cols-2 gap-4">
      <dl className="flex flex-col gap-1">
        <dt className="text-xs text-gray-400">Word count</dt>
        <dd className="text-xs text-gray-600 font-bold">
          {getPlural({
            value: getLengthCount({ string: text, isWordCount: true }),
            term: "word",
          })}
        </dd>
      </dl>

      <dl className="flex flex-col gap-1">
        <dt className="text-xs text-gray-400">Character count</dt>
        <dd className="text-xs text-gray-600 font-bold">
          {getPlural({
            value: getLengthCount({ string: text, isWordCount: false }),
            term: "character",
          })}
          <br />
          <span className="font-normal">
            {getLengthCount({
              string: text.replace(/[' ']/g, ""),
              isWordCount: false,
            })}{" "}
            without spaces
          </span>
        </dd>
      </dl>

      <dl className="flex flex-col gap-1">
        <dt className="text-xs text-gray-400">Time to read</dt>
        <dd className="text-xs text-gray-600 font-bold">
          {getTimeToRead({ text })}
        </dd>
      </dl>

      <dl className="flex flex-col gap-1">
        <dt className="text-xs text-gray-400">Total sentences</dt>
        <dd className="text-xs text-gray-600 font-bold">
          {getPlural({ value: text.split(". ").length, term: "sentence" })}
        </dd>
      </dl>

      <dl className="flex flex-col gap-1">
        <dt className="text-xs text-gray-400">Too short sentences</dt>
        <dd
          className={`text-xs font-bold ${
            getUnrangedSentences(text) > 0 ? "text-red-600" : "text-green-600"
          }`}
        >
          {getPlural({ value: getUnrangedSentences(text), term: "sentence" })}
        </dd>
      </dl>

      <dl className="flex flex-col gap-1">
        <dt className="text-xs text-gray-400">Too long sentences</dt>
        <dd
          className={`text-xs font-bold ${
            getUnrangedSentences(text, true) > 0
              ? "text-red-600"
              : "text-green-600"
          }`}
        >
          {getPlural({
            value: getUnrangedSentences(text, true),
            term: "sentence",
          })}
        </dd>
      </dl>
    </div>
  );
};

export default TextReport;
