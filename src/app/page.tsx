import { Suspense } from "react";
import UsersList from "./components/UserList";
import { HeroSection } from "@/components/others/HeroSection";
import PrincipalMessage from "@/components/others/PrincipalMessage";
import StudentMessage from "@/components/others/StudentMessage";

export default function HomePage() {
  return (
    <Suspense>
      <div className="flex flex-col">
        <HeroSection />
        <UsersList />
        <PrincipalMessage />
        <StudentMessage />
      </div>
    </Suspense>
  );
}
