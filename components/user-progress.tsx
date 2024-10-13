import Image from "next/image";

type Props = {
    badgeIcon: string;
    badgeName: string;
    points: number;
};

export const UserProgress = ({ badgeIcon, badgeName, points }: Props ) => {
    return (
        <div className="flex items-center justify-between gap-x-2 w-full">
            <div className="flex items-center gap-x-2">
                <Image
                    src="/exploracy-icon-main.svg"
                    alt="logo"
                    className="rounded-md border" 
                    width={24}
                    height={24}
                />
            <div>
                    <p className="font-bold text-lg">{badgeName}</p>
                    <p className="text-mono-400 text-sm">Points: {points}</p>
            </div>
            User Progress
            </div>
        </div>
    )
};