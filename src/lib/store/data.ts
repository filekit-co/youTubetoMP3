import {writable} from 'svelte/store'

export const youTubeURL = writable('')
export const fileFormat = writable('')
export const loading = writable(false)

export const dummyData = {
  "title": "BEENZINO - TRAIN(feat.C JAMM)",
  "thumbUrl": "https://i.ytimg.com/vi/XwZpvOhEdOs/maxresdefault.jpg",
  "url": "https://www.youtube.com/watch?v=XwZpvOhEdOs",
  "site": "youtube.com"
}

export const FORMATS = [
    { value: "best", name: "BEST" },
    { value: "3gp", name: "3GP" },
    { value: "aac", name: "ACC" },
    { value: "flv", name: "FLV" },
    { value: "m4a", name: "M4A" },

    { value: "mp3", name: "MP3" },
    { value: "mp4", name: "MP4" },
    { value: "ogg", name: "OGG" },
    { value: "wav", name: "WAV" },
    { value: "webm", name: "WEBM" },
];