import { Suspense } from "react";
import UsersList from "./components/UserList";
import { HeroSection } from "@/components/others/HeroSection";
import ContactUs from "./Features/ContactUs";
export default function HomePage() {
  return (
    <Suspense>
      <section>
        <HeroSection />
        <UsersList />
        <ContactUs />
      </section>
    </Suspense>
  );
}
