import { getPageGQL } from "@/actions/getPageGQL";
import { homePageQuery } from "@/actions/queries";
import About from "@/components/homepage/about";
import CustomerSection from "@/components/homepage/customerSection";
import Hero from "@/components/homepage/hero";
import MapPage from "@/components/homepage/IndiaMap";
import Testimonials from "@/components/homepage/testimonials";
import WhyConsultation from "@/components/homepage/whyConsultation";
import WhyRE from "@/components/homepage/whyRE";
import { HomePage } from "@/types/homepage";

export default async function Home() {
  const homepageData:HomePage = await getPageGQL(homePageQuery);

  return (
    <div className="flex flex-col gap-20">
      <Hero
        heroButtonText={homepageData.heroButtonText}
        heroImage={homepageData.heroImage}
        heroSubtitle={homepageData.heroSubtitle}
        heroSubtitle2={homepageData.heroSubtitle2}
        heroTitle={homepageData.heroTitle}
      />
      <About {...{ ...homepageData.ourNumbers, ourNumbersTitleList: homepageData.ourNumbersTitleList }} />
      <WhyRE {...homepageData.whyRe}/>
      <WhyConsultation {...homepageData.whyConsultation}/>
      {/* <WhyInfiniaSolar {...homepageData.whyInfiniaSolar}/> */}
      <Testimonials {...homepageData.testimonials}/>
      <CustomerSection {...homepageData.customerSection}/>
      <MapPage {...homepageData.mapSection}/>
    </div>
  );
}
