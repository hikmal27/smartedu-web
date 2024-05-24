import BaseImage from "../ui/web/BaseImage";
import BaseCard from "../ui/web/BaseCard";

const VideoCategoriesPage = ({ title }: { title: string }) => {
    const cardItems = [
        { title: 'Corporate', description: 'Informasi tentang perusahaan smart multi finance', image: '/img/Strategic1.png' },
        { title: 'Education', description: 'Informasi tentang bisnis proses di smart multi finance', image: '/img/Strategic2.png' },
        { title: 'Socialization', description: 'Informasi terkait sosialisasi di smart muti finance', image: '/img/Strategic3.png' },
        { title: 'News', description: 'Informasi  berita terbaru di smart multi finance', image: '/img/Strategic4.png' }
    ]

    return (
        <section className="px-12 py-5">
            <div>
                <p className="text-center text-2xl font-semibold">{title}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 mt-5 w-full">
                    {cardItems.map((item, index) => (
                        <BaseCard key={index} title={item.title} description={item.description}>
                            <BaseImage src={item.image} alt={item.title} width={120} height={50} style="mx-auto" />
                        </BaseCard>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default VideoCategoriesPage;