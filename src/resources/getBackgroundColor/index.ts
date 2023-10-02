const getBackgroundColor = ({
  minCount,
  maxCount,
  length,
}: {
  minCount: number;
  maxCount: number;
  length: number;
}) => {
  const scale: number = 70;
  const margin: number = maxCount - minCount;

  if (length < minCount) {
    const difference: number = minCount - length; // 3
    const hue = 80 - (difference * scale) / margin; // 80 - (difference * scale / margin)

    return `hsl(${hue < 10 ? 10 : hue}, 100%, 60%)`;
  } else if (length > maxCount) {
    const difference: number = length - maxCount; // 3
    const hue = 80 - (difference * scale) / margin; // 80 - (difference * scale / margin)

    return `hsl(${hue < 10 ? 10 : hue}, 100%, 60%)`;
  } else {
    return "hsl(80, 100%, 60%)";
  }
};

export default getBackgroundColor;
