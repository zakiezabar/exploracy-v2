import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";

type Props = {
    title: string;
};

export const Header = ({
    title,
}: Props) => {
    return (
        <div className="sticky top-0 pb-3 lg:pt-[28px] flex items-center justify-between border-b-2 mb-5 text-secondary-900 lg:z-50">
            <Link href="/">
                <Button variant="ghost" size="sm">
                    <ArrowLeft className="h-5 w-5 stroke-2 text-secondary-900" />
                </Button>
            </Link>
            <h1 className="font-bold text-lg">
                {title}
            </h1>
            <div />
        </div>
    );
}