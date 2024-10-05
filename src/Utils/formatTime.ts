export const formatTime = (count: number) => {
  const seconds = Math.floor(count / 1000);
  const milliseconds = Math.floor((count % 1000) / 10);
  return `${seconds}.${milliseconds < 10 ? "0" : ""}${milliseconds}`;
};
