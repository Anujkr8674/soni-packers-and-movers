import HeroSlider from "./HeroSlider";
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";
import Process from "./Process";
import Testimonials from "./Testimonials";
import FAQSection from "./FAQSection";
import CallToAction from "./CallToAction";

export default function HomeSections() {
  return (
    <>
      <HeroSlider />
      <Services />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <FAQSection />
      <CallToAction />
    </>
  );
}
