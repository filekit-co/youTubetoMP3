export type UpdateHeaderProps = Partial<HeaderProps>
export type UpdateFeatureProps = Partial<FeatureProps>

export interface HeaderProps {
    title: string;
    author: string;
    keywords: string;
    siteName: string;
    url: string;
    image: string;
    description: string;
}

export interface FeatureProps {
    head1: string;
    head2: string;
    description: string;
    subHead: string[];
    subImage: any[];
    subDescription: string[];
}

export type ConversionProps = {
  headerProps: UpdateHeaderProps;
  exts: [string, string]
}

export interface VideoType {
  id: number;
  url: string;
}