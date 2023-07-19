interface Page {
    href: string;
}

export const pages: Page[] = [
    {href: ''},
    {href: 'youtube'},
    {href: 'tiktok'},
    {href: 'youtube-to-mp3'},
    {href: 'youtube-to-mp4'},
    {href: 'youtube-to-wav'},
    {href: 'youtube-to-aac'},
    {href: 'youtube-to-m4a'},
    {href: 'youtube-to-ogg'},
    {href: 'youtube-to-opus'},
    {href: 'youtube-to-vorbis'},
    {href: 'youtube-to-flac'},
    {href: 'youtube-to-alac'},
    {href: 'youtube-to-flv'},
    {href: 'youtube-to-3gp'},
    {href: 'youtube-to-webm'},

    {href: 'tiktok-to-mp3'},
    {href: 'tiktok-to-mp4'},
    {href: 'tiktok-to-wav'},
    {href: 'tiktok-to-aac'},
    {href: 'tiktok-to-m4a'},
    {href: 'tiktok-to-ogg'},
    {href: 'tiktok-to-opus'},
    {href: 'tiktok-to-vorbis'},
    {href: 'tiktok-to-flac'},
    {href: 'tiktok-to-alac'},
    {href: 'tiktok-to-flv'},
    {href: 'tiktok-to-3gp'},
    {href: 'tiktok-to-webm'},
]

const extractedHrefs = pages.map((item) => item.href);
export const allHrefs = extractedHrefs;

