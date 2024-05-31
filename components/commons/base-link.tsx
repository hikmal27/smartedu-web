
import { BaseLinkOPtions } from "@/lib/definitions";
import Link from "next/link";

const BaseLink = ({ href, label }: BaseLinkOPtions) => {

    return (
        <Link href={href ?? "/"}>
            <div className="bg-[#FCD980] px-10 py-2 rounded-md max-w-max">
                <p className="text-center font-medium">{label}</p>
            </div>
        </Link>
    );
}

export default BaseLink;