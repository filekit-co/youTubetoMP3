import type { UpdateHeaderProps, UpdateFeatureProps } from '@store/types.js'
import { getRuntimeFromLocals } from '@inlang/sdk-js/adapter-sveltekit/server';


export const load = ({url, locals}) => {
  const {i} = getRuntimeFromLocals(locals);

  const headerProps: UpdateHeaderProps = {
      title: i('Convert TikTok video to MP3, MP4 and download'),
      description: i('Convert TikTok videos to MP3, MP4, or any other format of your choice and download them.'),
      keywords: i('TikTok to MP3, TikTok to MP4, TikTok to WAV, TikTok to AAC, TikTok to M4A, TikTok to OGG, TikTok to OPUS, TikTok to VORBIS, TikTok to FLAC, TikTok to ALAC, TikTok to FLV, TikTok to 3GP, TikTok to WEBM')
  };
  const featureProps: UpdateFeatureProps = {
      head1: i('The best TikTok to MP3 Converter & Downloader'),
      head2: 
        i('Download MP3 files from TikTok videos and save them on your computer')
      ,
      description: i('The faster TikTok to MP3 video downloader ever created!'),
      subHead: [
        i('Fast TikTok to MP3 conversion'),
        i('Free video downloader'),
        i('Download TikTok videos without software'),
        i('Select a TikTok video'),
        i('Paste the TikTok URL link'),
        i('Download TikTok video to MP3')
      ],
      subDescription: [
        i('Filekit.co is by far the fastest online video converter in the world.'),
        i('This TikTok to MP3 video downloader is free for everyone and forever.'),
        i('You can convert a TikTok video to MP3 anonymously, we are not collecting your personal data.'),
        i("Visit TikTok website, find and play the video you want to download and copy it's URL link."),
        i('Paste the TikTok video URL link in the above search field to start MP3 conversion.'),
        i('Click the save button to download the TikTok video in MP3')
      ]
    };
    return {headerProps, featureProps}
}