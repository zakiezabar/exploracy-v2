import { MobileSidebar } from "@/components/mobile-sidebar";

export const MobileHeader = () => {
    return (
        <nav className="lg:hidden px-6 h-[50px] flex items-center bg-secondary-900 border-b fixed top-0 w-full z-50 text-mono-200">
            <MobileSidebar />
        </nav>
    );
};