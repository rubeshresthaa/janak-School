import { Suspense } from "react";
import UsersList from "./components/UserList";
import { HeroSection } from "@/components/others/HeroSection";
import ContactUs from "./Features/ContactUs";
import AboutPage from "./Features/About_us";
import Blogs from "./Features/Blog";
import PrincipalMessage from "@/components/others/PrincipalMessage";
import StudentMessage from "@/components/others/StudentMessage";
export default function HomePage() {
  return (
    <Suspense>
      <div className="flex flex-col">
        <HeroSection />
        <AboutPage />
        <UsersList />
        <Blogs />
        <PrincipalMessage />
        <StudentMessage />

        <ContactUs />
      </div>
    </Suspense>
  );
}
