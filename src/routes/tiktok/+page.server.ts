import type { UpdateHeaderProps, UpdateFeatureProps } from '@store/types.js'
import { canonicalUrl } from '@store/utils.js'


export const load = ({route}) => {
    const headerProps: UpdateHeaderProps = {
        title: 'Convert TikTok video to MP3, MP4, whatever you want and download',
        url: canonicalUrl(route.id),
        description: 'Convert TikTok videos to MP3, MP4, or any other format of your choice and download them.',
        keywords: 'TikTok to MP3, TikTok to MP4, TikTok to WAV, TikTok to AAC, TikTok to M4A, TikTok to OGG, TikTok to OPUS, TikTok to VORBIS, TikTok to FLAC, TikTok to ALAC, TikTok to FLV, TikTok to 3GP, TikTok to WEBM'
    };
    const featureProps: UpdateFeatureProps = {
        head1: 'The best TikTok to MP3 Converter & Downloader',
        head2: 
          'Download MP3 files from TikTok videos and save them on your computer'
        ,
        description: 'The faster TikTok to MP3 video downloader ever created!',
        subHead: [
          'Fast TikTok to MP3 conversion',
          'Free video downloader',
          'Download TikTok videos without software',
          'Select a TikTok video',
          'Paste the TikTok URL link',
          'Download TikTok video to MP3'
        ],
        subDescription: [
          'Filekit.co is by far the fastest online video converter in the world.',
          'This TikTok to MP3 video downloader is free for everyone and forever.',
          'You can convert a TikTok video to MP3 anonymously, we are not collecting your personal data.',
          "Visit TikTok website, find and play the video you want to download and copy it's URL link.",
          'Paste the TikTok video URL link in the above search field to start MP3 conversion.',
          'Click the save button to download the TikTok video in MP3'
        ]
      };
    return {headerProps, featureProps}
}