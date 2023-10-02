const getLengthCount = ({
  string,
  isWordCount,
}: {
  string: string;
  isWordCount: boolean;
}) => (isWordCount ? string.split(" ").length : string.length);

export default getLengthCount;
