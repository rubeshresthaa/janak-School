import { Suspense } from "react";
import UsersList from "./components/UserList";
import { HeroSection } from "@/components/others/HeroSection";
import ContactUs from "./Features/ContactUs";
import AboutPage from "./Features/About_us";
export default function HomePage() {
  return (
    <Suspense>
      <div className="flex flex-col">
        <HeroSection />
        <AboutPage />
        <UsersList />
        <ContactUs />
      </div>
    </Suspense>
  );
}
