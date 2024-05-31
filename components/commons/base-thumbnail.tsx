'use client'

import Image from "next/image";
import Link from "next/link";
import { IconClock, IconUsers, IconBrandYoutube } from "@tabler/icons-react"

interface BaseThumbnailOPtions {
    img: string,
    title: string,
    description: string,
    url: string,
    duration: string,
    video: number,
    users: string
}

const BaseThumbnail = ({ img, title, description, url, duration, video, users }: BaseThumbnailOPtions) => {
    return (
        <>
            <div className="w-full mx-auto">
                <div className="bg-white rounded-lg mb-5">
                    <Link href={url}>
                        <Image className="rounded-t-lg" src={img} alt="" width={400} height={100} />
                    </Link>
                    <div className="p-3 space-y-5">
                        <Link href={url}>
                            <h5 className="text-gray-900 font-semibold text-2xl tracking-tight mb-2">{title}</h5>
                        </Link>
                        <p className="font-normal text-[#28293860] mb-3">{description}</p>
                        <div className="flex justify-between text-[#282938]">
                            <div className="flex items-center space-x-2">
                                <IconClock />
                                <p>{duration} Jam</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <IconBrandYoutube />
                                <p>{video} Video</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <IconUsers />
                                <p>{users} Siswa</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BaseThumbnail;