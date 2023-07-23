import type { UpdateHeaderProps, UpdateFeatureProps } from '@store/types.js'
import { getRuntimeFromLocals } from '@inlang/sdk-js/adapter-sveltekit/server';


export const load = ({url, locals}) => {
  const {i} = getRuntimeFromLocals(locals);

  const headerProps: UpdateHeaderProps = {
      title: i('Convert YouTube video to MP3, MP4 and download'),
      description: i('Convert YouTube videos to MP3, MP4, or any other format of your choice and download them.'),
      keywords: i('YouTube to MP3, youTube to MP4, youTube to WAV, youTube to AAC, youTube to M4A, youTube to OGG, youTube to OPUS, youTube to VORBIS, youTube to FLAC, youTube to ALAC, youTube to FLV, youTube to 3GP, youTube to WEBM')
  };
  const featureProps: UpdateFeatureProps = {
      head1: i('The best YouTube to MP3 Converter & Downloader'),
      head2: 
        i('Download MP3 files from YouTube videos and save them on your computer')
      ,
      description: i('The faster YouTube to MP3 video downloader ever created!'),
      subHead: [
        i('Fast YouTube to MP3 conversion'),
        i('Free video downloader'),
        i('Download YouTube videos without software'),
        i('Select a YouTube video'),
        i('Paste the YouTube URL link'),
        i('Download YouTube video to MP3')
      ],
      subDescription: [
        i('Filekit.co is by far the fastest online video converter in the world.'),
        i('This YouTube to MP3 video downloader is free for everyone and forever.'),
        i('You can convert a YouTube video to MP3 anonymously, we are not collecting your personal data.'),
        i("Visit YouTube website, find and play the video you want to download and copy it's URL link."),
        i('Paste the YouTube video URL link in the above search field to start MP3 conversion.'),
        i('Click the save button to download the Youtube video in MP3')
      ]
    };
    return {headerProps, featureProps}
}