import { Suspense } from "react";
import UsersList from "./components/UserList";
import { HeroSection } from "@/components/others/HeroSection";
import Blogs from "./Features/Blog";

export default function HomePage() {
  return (
    <Suspense>
      <section>
        <HeroSection />
        <UsersList />
        <Blogs />
      </section>
    </Suspense>
  );
}
