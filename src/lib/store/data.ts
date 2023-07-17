import {writable} from 'svelte/store'

export const youTubeURL = writable('')
export const fileFormat = writable('')

export const global_selectedData = writable(
    {
        url: '',
        thumbUrl: '',
        title: '',
    }
)

export const FORMATS = [
    { value: "best", name: "BEST" },
    { value: "mp3", name: "MP3" },
    { value: "wav", name: "WAV" },
    { value: "aac", name: "ACC" },
    { value: "m4a", name: "M4A" },
    { value: "ogg", name: "OGG" },

    { value: "mp4", name: "MP4" },
    { value: "flv", name: "FLV" },
    { value: "3gp", name: "3GP" },
    { value: "webm", name: "WEBM" },

];