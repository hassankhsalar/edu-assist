import BannerCards from "@/components/homeComponents/BannerCards";
import Gallery from "@/components/homeComponents/gallery";
import ResearchPaper from "@/components/homeComponents/ResearchPaper";
import Testimonial from "@/components/homeComponents/Testimonials";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Home() {

  const session = await getServerSession(authOptions);
  
  // if (!session) {
  //   redirect("/login");
  // }

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
