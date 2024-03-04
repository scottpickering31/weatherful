export function formatTimeStamp(timeStamp: string) {
  const date = new Date(timeStamp);
  return date.toLocaleTimeString();
}
