import React from "react";
import settings from "@settings/settings.json";

const Controls = ({
  minCount,
  minCountHandler,
  maxCount,
  maxCountHandler,
  showCount,
  showCountToggler,
  isWordCount,
  isWordCountToggler,
}: {
  minCount: number;
  minCountHandler: (e?: any) => void;
  maxCount: number;
  maxCountHandler: (e?: any) => void;
  showCount: boolean;
  showCountToggler: (e?: any) => void;
  isWordCount: boolean;
  isWordCountToggler: (e?: any) => void;
}) => {
  const maxRange: number = isWordCount
    ? settings.range.maxWords
    : settings.range.maxChars;

  const handleMinValue = (val: number) => {
    if (val >= maxCount) {
      minCountHandler(maxCount);
    } else {
      minCountHandler(val);
    }
  };

  const handleMaxValue = (val: number) => {
    if (val <= minCount) {
      maxCountHandler(minCount);
    } else {
      maxCountHandler(val);
    }
  };

  const changeToWordCount = () => {
    isWordCountToggler(true);
    minCountHandler(settings.default.minWords);
    maxCountHandler(settings.default.maxWords);
  };

  const changeToCharCount = () => {
    isWordCountToggler(false);
    minCountHandler(settings.default.minChars);
    maxCountHandler(settings.default.maxChars);
  };

  return (
    <div className="pb-4 border-b grid grid-cols-2 sm:grid-cols-4 gap-4">
      <div className="flex flex-col gap-1">
        <span className="block text-xs text-gray-400">Count by</span>
        <label
          htmlFor="changeToWordCount"
          className="flex items-center gap-1 font-medium text-sm"
        >
          <input
            type="radio"
            checked={isWordCount}
            onChange={changeToWordCount}
            name="changeToWordCount"
            id="changeToWordCount"
            className="shrink-0 grow-0"
          />
          <span className="basis-full shrink-1 grow-0">Words</span>
        </label>

        <label
          htmlFor="changeToCharCount"
          className="flex items-center gap-1 font-medium text-sm"
        >
          <input
            type="radio"
            checked={!isWordCount}
            onChange={changeToCharCount}
            name="changeToCharCount"
            id="changeToCharCount"
            className="shrink-0 grow-0"
          />
          <span className="basis-full shrink-1 grow-0">Characters</span>
        </label>
      </div>

      <div className="flex flex-col gap-1">
        <span className="block text-xs text-gray-400">Count display</span>
        <label
          htmlFor="showCountToggler"
          className="flex items-center gap-1 font-medium text-sm"
        >
          <input
            type="checkbox"
            checked={showCount}
            onChange={() => showCountToggler(!showCount)}
            name="showCountToggler"
            id="showCountToggler"
            className="shrink-0 grow-0"
          />
          <span className="basis-full shrink-1 grow-0">Show count</span>
        </label>
      </div>

      <div className="flex flex-col gap-1">
        <span className="block text-xs text-gray-400">
          Minimum characters: <strong>{minCount}</strong>
        </span>

        <label htmlFor="minCountHandler">
          <input
            className="w-full"
            type="range"
            name="minCountHandler"
            id="minCountHandler"
            value={minCount}
            onChange={({ target }: any) =>
              handleMinValue(parseInt(target.value))
            }
            min={0}
            max={maxRange}
            step={1}
          />
        </label>
      </div>

      <div className="flex flex-col gap-1">
        <span className="block text-xs text-gray-400">
          Maximum characters: <strong>{maxCount}</strong>
        </span>

        <label htmlFor="maxCountHandler">
          <input
            className="w-full"
            type="range"
            name="maxCountHandler"
            id="maxCountHandler"
            value={maxCount}
            onChange={({ target }: any) =>
              handleMaxValue(parseInt(target.value))
            }
            min={0}
            max={maxRange}
            step={1}
          />
        </label>
      </div>
    </div>
  );
};

export default Controls;
