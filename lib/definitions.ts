// Props settings BaseImage
export type BaseImageOPtions = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    style?: string;
};

// Props settings BaseLink
export type BaseLinkOPtions = {
    href?: string;
    label: string;
};

// Props settings BaseCard
export type BaseCardOptions = {
    title: string;
    description: string;
    path?: string;
    width?: string;
    children: React.ReactNode
};


