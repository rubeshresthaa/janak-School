import { Suspense } from "react";
import UsersList from "./components/UserList";
import { HeroSection } from "@/components/others/HeroSection";
import Blogs from "./Features/Blog";
import AboutPage from "./Features/About_us";

export default function HomePage() {
  return (
    <Suspense>
      <section>
        <HeroSection />
        <AboutPage />
        <UsersList />
        <Blogs />
      </section>
    </Suspense>
  );
}
