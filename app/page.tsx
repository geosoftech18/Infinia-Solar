import { homePageQuery } from "@/actions/queries";
import { getPageGQL } from "@/actions/getPageGQL";
import About from "@/components/homepage/about";
import Hero from "@/components/homepage/hero";
import WhyRE from "@/components/homepage/whyRE";
import { HomePage } from "@/types/homepage";

export default async function Home() {
  const homepageData:HomePage = await getPageGQL(homePageQuery);

  return (
    <div>
      <Hero
        heroButtonText={homepageData.heroButtonText}
        heroImage={homepageData.heroImage}
        heroSubtitle={homepageData.heroSubtitle}
        heroSubtitle2={homepageData.heroSubtitle2}
        heroTitle={homepageData.heroTitle}
      />
      <About {...{ ...homepageData.ourNumbers, ourNumbersTitleList: homepageData.ourNumbersTitleList }} />
      <WhyRE {...homepageData.whyRe}/>
    </div>
  );
}
