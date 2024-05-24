
import { BaseLinkOPtions } from "@/lib/definitions";
import Link from "next/link";

const BaseLink = ({ href, label }: BaseLinkOPtions) => {

    return (
        <Link href={href ?? "/"}>
            <div className="bg-[#FCD980] px-5 py-2 rounded-md">
                <p className="text-center font-semibold">{label}</p>
            </div>
        </Link>
    );
}

export default BaseLink;