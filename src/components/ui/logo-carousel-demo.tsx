"use client";

import { LogoCarousel } from "@/components/ui/logo-carousel";
import { Card, CardContent } from "@/components/ui/card";

const demoLogos = [
    {
        id: 2,
        name: "GeeksforGeeks RBU",
        src: "/assets/chapters/gfg.jpeg",
    },
    {
        id: 1,
        name: "Google Developers Group RBU",
        src: "/assets/chapters/gdg.jpeg",
    },
    {
        id: 3,
        name: "Blockchain RBU Chapter",
        src: "/assets/chapters/brc.jpeg",
    },
    {
        id: 4,
        name: "ACM RBU Chapter",
        src: "/assets/chapters/acm.jpeg",
    },

];

function LogoCarouselBasic() {
    return (
        <Card className="border-2 border-zinc-950 bg-card">
            <CardContent className="pt-6">
                <LogoCarousel logos={demoLogos} />
            </CardContent>
        </Card>
    );
}

export { LogoCarouselBasic };
