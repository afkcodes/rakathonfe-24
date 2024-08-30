export function timeToReadable(seconds: number) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  if (hrs > 0) {
    return `${hrs}:${mins.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`;
  } else if (mins > 0) {
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  } else {
    return `0:${secs.toString().padStart(2, '0')}`;
  }
}
