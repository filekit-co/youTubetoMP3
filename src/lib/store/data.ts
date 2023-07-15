import {writable} from 'svelte/store'

export const youTubeURL = writable('')
export const fileFormat = writable('')

export const global_selectedVideoId = writable(0)
export const global_selectedVideoImg = writable('')
export const global_selectedVideoUrl = writable('')
export const global_selectedAudio = writable(
    {
        id: 0,
        url: '',
        thumbUrl: '',
        title: '',
    }
)

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