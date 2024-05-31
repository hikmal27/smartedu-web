import { BaseImageOPtions } from "@/lib/definitions";
import Image from "next/image";

const BaseImage = ({ src, alt, width, height, style }: BaseImageOPtions) => {
    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={style}
        />
    );
}

export default BaseImage;