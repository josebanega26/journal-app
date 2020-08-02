export const truncateText = (text: string, length: number = 40) => {
  if (text.length <= length) {
    return text;
  }
  return text.substring(0, length) + '\u2026';
};
