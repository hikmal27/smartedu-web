import { IconArrowNarrowRight } from "@tabler/icons-react";
import Link from "next/link";
import NewsThumbnail from "../commons/news-thumbnail";

const BlogSection = () => {
    const dataBlog = [
        {
            title: "Cara Mudah Untuk Memulai Belajar Programming - EDUFREE ",
            description: "Menjadi seorang programmer saat ini sudah sangat mudah untuk dipelajari oleh siapapun ...",
            url: "/",
            img: "/img/img-blog-1.png",
            publishDate: "19 Jan 2022"
        },
        {
            title: "Tips Membuat Website Landing Page Bussines - EDUFREE",
            description: "Pentingnya website dalam menumbuhkan rasa kepercayaan terhadap bisnis, membuat ...",
            url: "/",
            img: "/img/img-blog-2.png",
            publishDate: "19 Jan 2022"
        },
        {
            title: "Cara Installasi Wordpress Untuk Pemula -EDUFREE",
            description: "Membuat website saat ini sudah bisa tanpa codingan, kini kamu bisa membuatnya dengan ...",
            url: "/",
            img: "/img/img-blog-3.png",
            publishDate: "19 Jan 2022"
        },
    ]
    return (
        <>
            <section className="container px-20 py-10 mt-10 space-y-10">
                <div className="flex justify-between items-center py-5">
                    <div className="text-3xl font-semibold">
                        <p>Blog dan Berita</p>
                    </div>
                    <div>
                        <Link href="/">
                            <div className="flex space-x-5">
                                <p>Lihat Semua</p>
                                <IconArrowNarrowRight />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-x-10">
                    {dataBlog.map((item) => (
                        <NewsThumbnail key={item.title} {...item} />
                    ))}
                </div>
            </section>
        </>
    );
}

export default BlogSection;