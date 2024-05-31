'use client'

import Image from "next/image";
import Link from "next/link";
import { IconArrowNarrowRight } from "@tabler/icons-react"

interface NewsThumbnailOpt {
    img: string,
    title: string,
    description: string,
    url: string,
    publishDate: string
}

const NewsThumbnail = ({ img, title, description, url, publishDate }: NewsThumbnailOpt) => {
    return (
        <>
            <div className="w-full mx-auto">
                <div className="bg-white rounded-lg mb-5">
                    <Link href={url}>
                        <Image className="rounded-t-lg" src={img} alt="" width={400} height={100} />
                    </Link>
                    <div className="p-3 space-y-5">
                        <p className="text-[#28293870]">{publishDate}</p>
                        <div>
                            <Link href={url}>
                                <h5 className="text-gray-900 font-semibold text-2xl tracking-tight mb-2">{title}</h5>
                            </Link>
                        </div>
                        <p className="font-normal text-[#28293860] mb-3">{description}</p>
                        <div>
                            <Link href={url}>
                                <div className="flex space-x-3">
                                    <p>Selengkapnya</p>
                                    <IconArrowNarrowRight />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NewsThumbnail;