import type { UpdateHeaderProps, UpdateFeatureProps } from '@store/types.js'
import { canonicalUrl } from '@store/utils.js'


export const load = ({route}) => {
    const headerProps: UpdateHeaderProps = {
        title: 'Convert youTube video to MP3, MP4, whatever you want and download',
        url: canonicalUrl(route.id),
        description: 'Convert youTube videos to MP3, MP4, or any other format of your choice and download them.',
        keywords: 'youTube to MP3, youTube to MP4, youTube to WAV, youTube to AAC, youTube to M4A, youTube to OGG, youTube to OPUS, youTube to VORBIS, youTube to FLAC, youTube to ALAC, youTube to FLV, youTube to 3GP, youTube to WEBM'
    };
    const featureProps: UpdateFeatureProps = {
        head1: 'The best YouTube to MP3 Converter & Downloader',
        head2: 
          'Download MP3 files from YouTube videos and save them on your computer'
        ,
        description: 'The faster YouTube to MP3 video downloader ever created!',
        subHead: [
          'Fast YouTube to MP3 conversion',
          'Free video downloader',
          'Download YouTube videos without software',
          'Select a YouTube video',
          'Paste the YouTube URL link',
          'Download YouTube video to MP3'
        ],
        subDescription: [
          'Filekit.co is by far the fastest online video converter in the world.',
          'This YouTube to MP3 video downloader is free for everyone and forever.',
          'You can convert a YouTube video to MP3 anonymously, we are not collecting your personal data.',
          "Visit YouTube website, find and play the video you want to download and copy it's URL link.",
          'Paste the YouTube video URL link in the above search field to start MP3 conversion.',
          'Click the save button to download the Youtube video in MP3'
        ]
      };
    return {headerProps, featureProps}
}