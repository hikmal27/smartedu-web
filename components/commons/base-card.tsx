import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { BaseCardOptions } from "@/lib/definitions";
import BaseLink from "./base-link";

const BaseCard: React.FC<BaseCardOptions> = ({ title, description, path, width, children }) => {
    return (
        <Card className="bg-[#F4F6FC] rounded-3xl !border-0 mx-a" style={{ width: width }}>
            <CardHeader>
                <div>
                    {children}
                    <p className="font-semibold text-center text-lg">{title}</p>
                </div>
            </CardHeader>
            <CardContent>
                <div>
                    <p className="text-center">{description}</p>
                </div>
            </CardContent>
            <CardFooter>
                <div className="w-full flex justify-center ">
                    <BaseLink href={path} label="Read More >>" />
                    {/* <Link href={path ?? "/"}>
                        <div className="bg-[#FCD980] px-5 py-2 rounded-md">
                            <p className="text-center font-semibold">Read More {">>"}</p>
                        </div>
                    </Link> */}
                </div>
            </CardFooter>
        </Card>
    );
};

export default BaseCard;