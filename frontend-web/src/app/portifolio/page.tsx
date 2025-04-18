import { FlexContainerRoot } from "@/components/layout-root/flex/flex-container.root";
import ContentAbount from "@/components/protfolio/portfolio-content/content-about";
import ContentContact from "@/components/protfolio/portfolio-content/content-contact";
import ContentGallery from "@/components/protfolio/portfolio-content/content-gallery";
import ContentMotto from "@/components/protfolio/portfolio-content/content-motto";
import ContentNews from "@/components/protfolio/portfolio-content/content-news";
import ContentPortfolio from "@/components/protfolio/portfolio-content/content-portfolio";
import ContentServices from "@/components/protfolio/portfolio-content/content-services";
import ContentSkills from "@/components/protfolio/portfolio-content/content-skills";
import ContentTestimonials from "@/components/protfolio/portfolio-content/content-testimonials";
import FooterForm from "@/components/protfolio/portfolio-footer/footer-form";
import PortfolioHeader from "@/components/protfolio/portfolio-header/portfolio-header";

export default function PortfolioPage() {
  return (
    <FlexContainerRoot className="bg-primary">
      <PortfolioHeader />
      <main>
        {/* <!-- *-*-*-*-*-*-*-*-*-*-*-*-* Motto --> */}
        <ContentMotto />

        {/* <!-- *-*-*-*-*-*-*-*-*-*-*-*-* About me --> */}
        <ContentAbount />

        {/* <!-- *-*-*-*-*-*-*-*-*-*-*-*-* Gallery --> */}
        <ContentGallery />

        {/* <!-- *-*-*-*-*-*-*-*-*-*-*-*-* Skills --> */}
        <ContentSkills />

        {/* <!-- *-*-*-*-*-*-*-*-*-*-*-*-* Portfolio --> */}
        <ContentPortfolio />

        {/* <!-- *-*-*-*-*-*-*-*-*-*-*-*-* Services --> */}
        <ContentServices />

        {/* <!-- *-*-*-*-*-*-*-*-*-*-*-*-* Testimonials --> */}
        <ContentTestimonials />

        {/* <!-- *-*-*-*-*-*-*-*-*-*-*-*-* News --> */}
        <ContentNews />

        {/* <!-- *-*-*-*-*-*-*-*-*-*-*-*-* Contact --> */}
        <ContentContact />
      </main>

      {/* <!-- *-*-*-*-*-*-*-*-*-*-*-*-* Contact Form --> */}
      <FooterForm />
    </FlexContainerRoot>
  );
}
