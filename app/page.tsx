import { FeedWrapper } from "@/components/feed-wrapper";
import { UserProgress } from "@/components/user-progress";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Header } from "@/components/header";
import LoaderAnimation from "@/components/loader";

const Home = () => {
  return ( 
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          badgeIcon={"badgeIcon"}
          badgeName={"badgeName"}
          points={100}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title="Welcome to Exploracy" />
        <LoaderAnimation loop autoplay/>
      </FeedWrapper>
    </div>
   );
}
 
export default Home;