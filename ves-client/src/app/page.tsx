import PageLayout from "./components/layout/PageLayout";
import { Banner } from "./components/Banner";
import AboutUs from "./components/AboutUs";
import Benefits from "./components/Benefits";
import Reviews from "./components/Reviews";

export default function Home() {
  return (
    <PageLayout>
    
      <div className="relative p-8 pb-0.5 w-full lg:px-16">
        <Banner />
      </div>

      <Benefits />

      <AboutUs />

      <Reviews />
      
    </PageLayout>
  );
}
