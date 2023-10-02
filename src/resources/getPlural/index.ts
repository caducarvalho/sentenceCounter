const dict: {
  [e: string]: {
    singular: string;
    plural: string;
  };
} = {
  second: {
    singular: "second",
    plural: "seconds",
  },
  minute: {
    singular: "minute",
    plural: "minutes",
  },
  sentence: {
    singular: "sentence",
    plural: "sentences",
  },
  word: {
    singular: "word",
    plural: "words",
  },
  character: {
    singular: "character",
    plural: "characters",
  },
};

interface PluralParams {
  term: string;
  value: number;
  hideNumber?: boolean;
  transform?: string;
  suffix?: string;
  human?: boolean;
}

const getPlural = ({
  term,
  value,
  hideNumber,
  transform,
  suffix,
  human,
}: PluralParams) => {
  const termArray: string[] = term.split(" ");
  const termBuild: string[] = [];

  for (const termItem of termArray) {
    const termObject:
      | {
          singular: string;
          plural: string;
        }
      | undefined = dict[term];

    if (value === 1) {
      termBuild.push(termObject ? termObject.singular : termItem);
    } else {
      termBuild.push(termObject ? termObject.plural : termItem + "s");
    }
  }

  if (transform === "titlecase") {
    for (let j = 0; j < termBuild.length; j++) {
      termBuild[j] =
        termBuild[j].charAt(0).toUpperCase() + termBuild[j].slice(1);
    }
  }

  switch (transform) {
    case "uppercase":
      return (
        (hideNumber
          ? termBuild.join(" ").toUpperCase()
          : `${value} ${termBuild.join(" ").toUpperCase()}`) +
        (suffix ? ` ${suffix}` : "")
      );
    case "capitalize":
      return (
        (hideNumber
          ? termBuild.join(" ").charAt(0).toUpperCase()
          : `${value} ${termBuild.join(" ").charAt(0).toUpperCase()}`) +
        (suffix ? ` ${suffix}` : "")
      );
    default:
      return (
        (hideNumber ? termBuild.join(" ") : `${value} ${termBuild.join(" ")}`) +
        (suffix ? ` ${suffix}` : "")
      );
  }
};

export default getPlural;
