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
        head1: 'Embrace the future of TikTok conversion with our unparalleled technology.',
        head2: 'Effortless efficiency, audio, video-perfect quality, and enhanced compatibility merge to offer you the best TikTok video conversion and download',
        description: 'Downlaod TikTok video into any format today and join the ranks of our satisfied users who have already experienced the power of our top-tier conversion technology.',
        subHead: [
            'Seamlessly converted TikTok to Audio and Video',
            'Audio, Video - Perfect Quality',
            "Effortless Efficiency",
            'Enhanced File Compatibility',
            'Lightning-Fast Performance',
            'Trusted Reliability'
        ],
        subDescription: [
            "With our advanced conversion technology, TikTok videos are automatically optimized to selected format without any manual intervention. Say goodbye to bulky documents and enjoy the seamless experience of handling efficiently convert videos.",
            'Our conversion algorithm is designed to preserve every single detail of your videos. Enjoy crystal-clear audios and videos, as our technology guarantees lossless conversion, ensuring the highest quality even after conversion.',
            "Our service takes care of everything behind the scenes, so you don't have to worry about selecting conversion options. Experience effortless efficiency as our technology automatically applies the best conversion techniques for you.",
            "Our conversion technology goes the extra mile by automatically expanding audios and videos for better compatibility with various applications. Rest assured that your TikTok videos will be flawlessly displayed across different platforms and devices.",
            "You'll be amazed at the lightning-fast performance of our service. Super fast video convert means TikTok to any format, downloads, saving you valuable time and increasing overall productivity.",
            "Our conversion technology is not only cutting-edge but also trusted and proven to deliver consistent and reliable results. Countless satisfied users have experienced the benefits of our converson service, making it the go-to choice for all your TikTok URL management needs."
        ]
    }
    return {headerProps, featureProps}
}