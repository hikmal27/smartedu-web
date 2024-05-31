import Label1 from "@/public/img/Group2554.svg"
import Label2 from "@/public/img/Group2555.svg"
import Label3 from "@/public/img/Group2556.svg"
import Image from "next/image";

const Benefit = () => {

    const items = [
        {
            id: 1,
            image: Label1,
            title: "Grup Konsultan",
            description: "Terdapat grup konsultan yang berguna jika kamu ingin menanyakan suatu pertanyaan dan kamu juga bisa membuka diskusi baru"
        },
        {
            id: 2,
            image: Label2,
            title: "Belajar Lebih Terarah",
            description: "Kursus menyediakan kursus dari level dasar hingga expert sehingga semua  bisa belajar dengan  layanan yang kami sediakan"
        },
        {
            id: 3,
            image: Label3,
            title: "Instruktur Berpengalaman",
            description: "Kami mempunyai instruktur berpengalaman yang diambil dari dunia industri yang tak diragukan lagi pengalamannya"
        }
    ]

    return (
        <>
            <section className="container px-20 py-10 mt-10 space-y-20">
                <div className="text-center text-3xl font-semibold">
                    <p>Keuntungan Bergabung Dengan</p>
                    <p>E-Learning Smart Education</p>
                </div>
                <div className="grid grid-cols-3 gap-x-10">
                    {items.map((item) => (
                        <div key={item.id} className="p-10 space-y-5 bg-[#F4F6FC]">
                            <div>
                                <Image src={item.image} alt="Label1" />
                            </div>
                            <p className="text-xl font-medium">{item.title}</p>
                            <p className="text-[#28293870]">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Benefit;