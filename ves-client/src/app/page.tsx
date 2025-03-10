import Image from "next/image";
import PageLayout from "./components/layout/PageLayout";
import { Banner } from "./components/Banner";
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <PageLayout>
      <div className="relative p-8 pb-0.5 w-full lg:px-16">
        <Banner />
      </div>

    <AboutUs />
    </PageLayout>
  );
}
