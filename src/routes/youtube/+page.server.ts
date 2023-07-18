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
        head1: 'Embrace the future of youTube conversion with our unparalleled technology.',
        head2: 'Effortless efficiency, audio, video-perfect quality, and enhanced compatibility merge to offer you the best youTube video conversion and download',
        description: 'Downlaod youTube video into any format today and join the ranks of our satisfied users who have already experienced the power of our top-tier conversion technology.',
        subHead: [
            'Seamlessly converted youTube to Audio and Video',
            'Audio, Video - Perfect Quality',
            "Effortless Efficiency",
            'Enhanced File Compatibility',
            'Lightning-Fast Performance',
            'Trusted Reliability'
        ],
        subDescription: [
            "With our advanced conversion technology, youTube videos are automatically optimized to selected format without any manual intervention. Say goodbye to bulky documents and enjoy the seamless experience of handling efficiently convert videos.",
            'Our conversion algorithm is designed to preserve every single detail of your videos. Enjoy crystal-clear audios and videos, as our technology guarantees lossless conversion, ensuring the highest quality even after conversion.',
            "Our service takes care of everything behind the scenes, so you don't have to worry about selecting conversion options. Experience effortless efficiency as our technology automatically applies the best conversion techniques for you.",
            "Our conversion technology goes the extra mile by automatically expanding audios and videos for better compatibility with various applications. Rest assured that your youTube videos will be flawlessly displayed across different platforms and devices.",
            "You'll be amazed at the lightning-fast performance of our service. Super fast video convert means youTube to any format, downloads, saving you valuable time and increasing overall productivity.",
            "Our conversion technology is not only cutting-edge but also trusted and proven to deliver consistent and reliable results. Countless satisfied users have experienced the benefits of our converson service, making it the go-to choice for all your youTube URL management needs."
        ]
    }
    return {headerProps, featureProps}
}