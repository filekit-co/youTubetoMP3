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
// audio x is types of ('best', 'mp3', 'aac', 'm4a', 'opus', 'vorbis', 'flac', 'alac', 'wav')


export const FORMATS = [
    { value: "mp3", name: "MP3" },
    { value: "mp4", name: "MP4" },
    { value: "wav", name: "WAV" },
    { value: "aac", name: "ACC" },
    { value: "m4a", name: "M4A" },
    { value: "ogg", name: "OGG" },
    { value: 'opus', name: 'OPUS'},
    { value: 'vorbis', name: 'VORBIS'},
    { vlaue: 'flac', name: 'FLAC'},
    { value: 'alac', name: 'ALAC'},

    { value: "flv", name: "FLV" },
    { value: "3gp", name: "3GP" },
    { value: "webm", name: "WEBM" },

];