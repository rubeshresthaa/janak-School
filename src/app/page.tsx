import { Suspense } from "react";
import UsersList from "./components/UserList";
import { HeroSection } from "@/components/others/HeroSection";
import PrincipalMessage from "@/components/others/PrincipalMessage";

export default function HomePage() {
  return (
    <Suspense>
      <div className="flex flex-col gap-2">
        <HeroSection />
        <UsersList />
        <PrincipalMessage />
      </div>
    </Suspense>
  );
}
