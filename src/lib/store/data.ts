import {writable} from 'svelte/store'

export const youTubeURL = writable('')

export const dummyVideo = writable([
    { tag: "MP4 auto quility", data: "MB" },
    { tag: "1080p(.mp4)", data: "212.3MB" },
    { tag: "720p(.mp4)", data: "83.9MB" },
    { tag: "480p(.mp4)", data: "55.4MB" },
    { tag: "360p(.mp4)", data: "MB" },
    { tag: "240p(.mp4)", data: "28.4MB" },
    { tag: "144p(.mp4)", data: "22.3MB" },
    { tag: "144p(.3gp)", data: "MB" },
  ]);

export const dummyAudio = writable([{ tag: "MP3 - 128kbps", data: "16.7MB" }]);

export const dummyData: Object[] = writable([
  {
      key: "Video",
      value: [
        { tag: "MP4 auto quility", data: "MB" },
        { tag: "1080p(.mp4)", data: "212.3MB" },
        { tag: "720p(.mp4)", data: "83.9MB" },
        { tag: "480p(.mp4)", data: "55.4MB" },
        { tag: "360p(.mp4)", data: "MB" },
        { tag: "240p(.mp4)", data: "28.4MB" },
        { tag: "144p(.mp4)", data: "22.3MB" },
        { tag: "144p(.3gp)", data: "MB" },
      ],
    },
    {
      key: "Audio",
      value: [{ tag: "MP3 - 128kbps", data: "16.7MB" }],
    },
]);

export const FORMATS = [
    { value: "mp4", name: "MP4" },
    { value: "avi", name: "AVI" },
    { value: "mov", name: "MOV" },
    { value: "wmv", name: "WMV" },
    { value: "flv", name: "FLV" },

    { value: "mp3", name: "MP3" },
    { value: "wav", name: "WAV" },
    { value: "aac", name: "AAC" },
    { value: "flac", name: "FLAC" },
    { value: "ogg", name: "OGG" },
];