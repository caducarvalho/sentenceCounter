import getLengthCount from "@resources/getLengthCount";
import getPlural from "@resources/getPlural";
import settings from "@settings/settings.json";

const getTimeToRead = ({ text }: { text: string }) => {
  const wordCount = getLengthCount({ string: text, isWordCount: true });

  const getTime = (time: number) => {
    if (time < 1) {
      return getPlural({
        value: Math.ceil(time * 60),
        term: "second",
      });
    } else {
      return getPlural({
        value: Math.round(time * 10) / 10,
        term: "minute",
      });
    }
  };

  return `${getTime(wordCount / settings.speed.max)} ~ ${getTime(
    wordCount / settings.speed.min
  )}`;
};

export default getTimeToRead;
