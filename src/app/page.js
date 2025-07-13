import BannerCards from "@/components/homeComponents/BannerCards";
import Gallery from "@/components/homeComponents/gallery";
import ResearchPaper from "@/components/homeComponents/ResearchPaper";
import Testimonial from "@/components/homeComponents/Testimonials";

export default function Home() {
  return (
    <div>
      <section>
        <BannerCards/>
      </section>

      <section>
        <Gallery/>
      </section>

      <section>
        <ResearchPaper/>
      </section>

      <section>
        <Testimonial/>
      </section>
    </div>

  );
}
