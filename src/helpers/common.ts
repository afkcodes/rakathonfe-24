import { MediaTrack } from 'audio_x';

/* eslint-disable @typescript-eslint/no-explicit-any */
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

export const isValidFunction = (fun: any) => typeof fun === 'function';
export const isValidArray = (arr: any[]) => arr && Array.isArray(arr) && arr.length > 0;
export const isValidWindow = window instanceof Window && typeof window !== 'undefined';
export const isValidObject = (obj: any): boolean =>
  obj !== null && typeof obj === 'object' && !Array.isArray(obj);

export const isEmptyObject = (obj: any): boolean =>
  obj !== null &&
  typeof obj === 'object' &&
  !Array.isArray(obj) &&
  Object.keys(obj).length > 0;

type ArtistsInput = any[] | string;

export function getArtistNames(data: ArtistsInput): string {
  if (typeof data === 'string') {
    // If the input is already a string, return it as is
    return data;
  }

  if (Array.isArray(data)) {
    // If it's an array of artist objects, extract and join the names
    const names = data.map((artist) => artist.name.trim());
    return names.join(', ');
  }

  // If it's neither a string nor an array, return an empty string or handle the error as needed
  return '';
}

export function decodeHtmlEntities(text: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, 'text/html');
  return doc.documentElement.textContent || '';
}

export const createMediaTrack = (data: any, mediaQuality: any): MediaTrack => {
  // Find the media URL with the specified quality
  const selectedMediaUrl = data?.mediaUrls
    ? data.mediaUrls.find((url: any) => url.quality === mediaQuality) ||
      data.mediaUrls[data.mediaUrls.length - 1]
    : '';

  // Extract artist names and join them with a comma, ensuring uniqueness
  const artistNames = [...new Set(data.artists.map((artist: any) => artist.name))].join(
    ', '
  );

  // Convert to MediaTrack format
  const track: any = {
    id: data.id,
    artwork: [
      {
        src: isValidArray(data.images) ? data?.images[2]?.link : data.images,
        name: data.title,
        sizes: '500x500',
      },
      {
        src: isValidArray(data.images) ? data?.images[1]?.link : data.images,
        name: data.title,
        sizes: '150x150',
      },
      {
        src: isValidArray(data.images) ? data?.images[0]?.link : data.images,
        name: data.title,
        sizes: '50x50',
      },
    ],
    source: selectedMediaUrl?.link || '',
    title: decodeHtmlEntities(data.title),
    album: decodeHtmlEntities(data.album),
    artist: data.music ? decodeHtmlEntities(data.music) : artistNames,
    comment: '',
    duration: parseInt(data.duration),
    genre: '', // Assuming genre is not provided in the given data
    year: parseInt(data.year),
  };

  return track;
};
