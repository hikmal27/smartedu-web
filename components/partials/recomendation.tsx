'use client'

import * as React from "react"
import { title } from "process";
import BaseLink from "../commons/base-link";
import BaseThumbnail from "../commons/base-thumbnail";
import { IconChevronDown } from "@tabler/icons-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { User } from "lucide-react";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps['checked']

const Recomendation = () => {
    const [checked, setChecked] = React.useState<Checked>(false);

    const dataThumbs = [
        {
            title: "Dasar Pemrograman WEB",
            description: "Materi pembelajarn mengenai pembuatan website tingkat pemula",
            url: "/",
            duration: "4,5 Jam",
            video: 20,
            users: "1.900",
            img: "/img/img-recomendation1.png"
        },
        {
            title: "Digital Marketing 101",
            description: "Materi mengenai strategi dan konsep marketing  pemula",
            url: "/",
            duration: "6,2 Jam",
            video: 32,
            users: "930",
            img: "/img/img-recomendation2.png"
        },
        {
            title: "Data Science Dasar",
            description: "Materi pembelajaran mengenai dasar-dasar data science",
            url: "/",
            duration: "8 Jam",
            video: 46,
            users: "1.200",
            img: "/img/img-recomendation3.png"
        },
    ]

    return (
        <>
            <section className="container px-20 py-10 mt-10 space-y-20">
                <div className="flex justify-between items-center border-b-2 border-collapse border-[#ECECF1] py-5">
                    <div className="text-3xl font-semibold">
                        <p>Rekomendasi Kursus</p>
                        <p>Untuk Kamu</p>
                    </div>
                    <div className="flex space-x-5">
                        <div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" className="border-0 space-x-5 focus-visible:ring-0 focus-visible:ring-offset-0">
                                        <p>Category</p>
                                        <IconChevronDown />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-32">
                                    <DropdownMenuCheckboxItem checked={checked} onCheckedChange={setChecked}>IT</DropdownMenuCheckboxItem>
                                    <DropdownMenuCheckboxItem>Marketing</DropdownMenuCheckboxItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            {/* <Select>
                                <SelectTrigger className="border-0 w-32">
                                    <SelectValue placeholder="Category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="IT">IT</SelectItem>
                                    <SelectItem value="Marketing">Marketing</SelectItem>
                                    <SelectItem value="Collection">Collection</SelectItem>
                                </SelectContent>
                            </Select> */}
                        </div>
                        <div>
                            <BaseLink href="/" label="Show All" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-x-10">
                    {dataThumbs.map((item) => (
                        <div key={item.title}>
                            <BaseThumbnail {...item} />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Recomendation;