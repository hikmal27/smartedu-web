import BaseCard from "../ui/web/BaseCard";
import BaseImage from "../ui/web/BaseImage";

const CourseCategoriesPage = ({ title }: { title: string }) => {
    const cardItems = [
        { title: 'Smart Profile', description: 'Informasi tentang perusahaan smart multi finance', image: '/img/categories1.png' },
        { title: 'Collection', description: 'Informasi tentang courses Department Collection', image: '/img/categories2.png' },
        { title: 'Operation', description: 'Informasi tentang courses Department Operation', image: '/img/categories3.png' },
    ]

    return (
        <section className="px-12 py-5">
            <div>
                <p className="text-center text-2xl font-semibold">{title}</p>
                <div className="flex flex-col lg:flex-row justify-center space-x-5 items-center mt-5">
                    {cardItems.map((item, index) => (
                        <BaseCard key={index} title={item.title} description={item.description}>
                            <BaseImage src={item.image} alt={item.title} width={1000} height={50} style="mx-auto w-full" />
                        </BaseCard>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CourseCategoriesPage;