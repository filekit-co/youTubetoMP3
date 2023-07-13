import type { ConversionProps, UpdateFeatureProps, UpdateHeaderProps } from "@store/types";
import { canonicalUrl } from "@store/utils";

export const load = ({route}) => {
    const [from, to] = ['YouTube', 'MP4']
    const title = `Convert ${from} to ${to} online for free`;
    const description = `${from} to ${to} converter - filekit.co is a free and fast online file conversion service`

    const headerProps: UpdateHeaderProps = {
        title,
        url: canonicalUrl(route.id),
        description,
        keywords: `${from} to ${to}, convert ${from}, convert ${to}, change, ${to} file, ${from} file`
    }

    const featureProps: UpdateFeatureProps = {
        head1: `Convert ${from} to ${to} online for free`,
        head2: `Best onlie converter ${from} to ${to}`,
        description: `${from} to ${to} converter - filekit.co is a free and fast online file conversion service`,
    }

    return {
        headerProps, 
        featureProps,
        exts: [from, to]

    } as ConversionProps;
}