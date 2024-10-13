import Link from "next/link";
import Image from "next/image";
import { Loader } from "lucide-react";

import { cn } from "@/lib/utils";

import { SidebarItem } from "@/components/sidebar-item";

type Props = {
    className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <div className={cn(
        "flex bg-secondary-900 text-mono-400 h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 flex-col border-transparent",
        className,
    )}>
        <Link href="/">
            <div className="p-4">
                <Image src="/exploracy-full-main.svg" alt="Exploracy" width={200} height={200} />
            </div>
        </Link>
      <div className="pt-4 flex flex-col gap-y-2 flex-1">
        <SidebarItem
            label="Homme"
            href="/"
        />
        <SidebarItem
            label="Buttons"
            href="/buttons"
        />
         <SidebarItem
            label="Reservation"
            href="/reservation"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center">
            <Loader className="text-primary-400 animate-spin" size={24} />
            <p className="ml-2">Account</p>
        </div>
      </div>
    </div>
  );
};