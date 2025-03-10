import Image from "next/image";
import PageLayout from "./components/layout/PageLayout";
import { Banner } from "./components/Banner";
import AboutUs from "./components/AboutUs";
import Benefits from "./components/Benefits";

export default function Home() {
  return (
    <PageLayout>
    
      <div className="relative p-8 pb-0.5 w-full lg:px-16">
        <Banner />
      </div>

      <Benefits />

      <AboutUs />
      
    </PageLayout>
  );
}
