'use client'

import * as React from "react"
import Link from "next/link";
import { DropdownMenuCheckboxItem, DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { IconChevronDown, IconFilter } from "@tabler/icons-react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IconSearch } from "@tabler/icons-react";
import { SelectScrollUpButton } from "@/components/ui/select";
import BaseButton from "@/components/commons/base-button";
import BaseThumbnail from "@/components/commons/base-thumbnail";

type Checked = DropdownMenuCheckboxItemProps['checked']

const CoursePage = () => {
    const [checked, setChecked] = React.useState<Checked>(false);

    const categories = [
        { id: 1, label: 'Semua' },
        { id: 2, label: 'UI Design' },
        { id: 3, label: 'Programming' },
        { id: 4, label: 'Marketing' },
        { id: 5, label: 'Soft Skill' },
        { id: 6, label: 'Network' },
        { id: 7, label: 'Data Analyst' },
    ]

    const dataCourses = [
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
        {
            title: "Public Speaking Dasar",
            description: "Pelajari tentang konsep dan teori dasar public speaking ",
            url: "/",
            duration: "8 Jam",
            video: 20,
            users: "1.900",
            img: "/img/img-recomendation4.png"
        },
        {
            title: "Jaringan Dasar",
            description: "Pemebelajaran jaringan komputer dasar untuk semua kalangan",
            url: "/",
            duration: "6,2 Jam",
            video: 32,
            users: "930",
            img: "/img/img-recomendation5.png"
        },
        {
            title: "UI/UX Pemula",
            description: "Dasar-dasar teori dan praktik tentang dunia ui/ux design",
            url: "/",
            duration: "8 Jam",
            video: 46,
            users: "1.200",
            img: "/img/img-recomendation6.png"
        },
        {
            title: "Bahasa Inggris Dasar",
            description: "Mudah dalam berbicara dengan bahasa inggris dengan menguasai grammar",
            url: "/",
            duration: "4,5 Jam",
            video: 20,
            users: "1.900",
            img: "/img/img-recomendation7.png"
        },
        {
            title: "Teknologi Cocok Tanaman",
            description: "Teknik penanaman dengan bantuan teknologi yang terbukti",
            url: "/",
            duration: "6,2 Jam",
            video: 32,
            users: "930",
            img: "/img/img-recomendation8.png"
        },
        {
            title: "Machine Learning 101",
            description: "Pelajari konsep dasar tentang mechine learning",
            url: "/",
            duration: "8 Jam",
            video: 46,
            users: "1.200",
            img: "/img/img-recomendation9.png"
        },
    ]

    return (
        <>
            <section className="min-h-screen container">
                <div className="bg-[#EEF4FA] w-full h-[86px]"></div>
                <div className="w-[50%] flex justify-between mx-auto space-x-5 px-5 py-2 bg-white rounded-lg shadow-lg mt-[-30px]">
                    <div className="w-full flex items-center">
                        <Label htmlFor="search">
                            <IconSearch />
                        </Label>
                        <Input placeholder="Search..." id="search" className="border-0 w-full focus-visible:ring-0 focus-visible:ring-offset-0" />
                    </div>
                    <div className="border-r-2 border-[#D1D5DB]"></div>
                    <div>
                        <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" className="border-0 space-x-5">
                                        <p>Kursus</p>
                                        <IconChevronDown />
                                    </Button>
                                </DropdownMenuTrigger>
                        </DropdownMenu>
                    </div>
                </div>
                <div className="bg-white px-20 py-10 mt-10">
                    <div className="flex justify-between space-x-5">
                        <div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" className="space-x-5">
                                        <p>Popular</p>
                                        <IconChevronDown />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-32">
                                    <DropdownMenuCheckboxItem checked={checked} onCheckedChange={setChecked}>IT</DropdownMenuCheckboxItem>
                                    <DropdownMenuCheckboxItem>Marketing</DropdownMenuCheckboxItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <div className="flex items-center">
                            <ul className="flex justify-between space-x-10">
                                {categories.map((item, index) => (
                                    <li key={index}>
                                        <Link href={""}>{item.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <BaseButton label="Filters">
                                <IconFilter />
                            </BaseButton>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-5 mt-16">
                        {dataCourses.map((item, index) => (
                            <BaseThumbnail key={index} {...item} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default CoursePage;