import { Suspense } from "react";
import UsersList from "./components/UserList";
import { HeroSection } from "@/components/others/HeroSection";

export default function HomePage() {
  return (
    <Suspense>
      <section>
        <HeroSection />
        <UsersList />
      </section>
    </Suspense>
  );
}
