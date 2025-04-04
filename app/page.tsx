import { homePageQuery } from "@/actions/queries";
import { getPageGQL } from "@/actions/getPageGQL";
import About from "@/components/homepage/about";
import Hero from "@/components/homepage/hero";
import WhyRE from "@/components/homepage/whyRE";
import { HomePage } from "@/types/homepage";
import WhyConsultation from "@/components/homepage/whyConsultation";
import WhyInfiniaSolar from "@/components/homepage/whyInfiniaSolar";
import Testimonials from "@/components/homepage/testimonials";
import CustomerSection from "@/components/homepage/customerSection";

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
      <WhyInfiniaSolar {...homepageData.whyInfiniaSolar}/>
      <Testimonials {...homepageData.testimonials}/>
      <CustomerSection {...homepageData.customerSection}/>
    </div>
  );
}
