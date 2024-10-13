import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { PanelRight } from "lucide-react";
import { Sidebar } from "@/components/sidebar";

export const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <PanelRight className="text-mono-200 hover:text-primary-200" />
            </SheetTrigger>
            <SheetContent className="p-0 z-[100]" side="left">
                <Sidebar />
            </SheetContent>
        </Sheet>
    );
}