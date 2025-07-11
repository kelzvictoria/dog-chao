import type { Route } from "./+types/home";
import { Landing } from "../landing";
import {
  FeatureSection,
  NutritionStatsSection,
  GastrointestinalSection,
  PrebioticsSection,
} from "~/components";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "DogChao" },
    { name: "description", content: "Welcome to DogChao!" },
  ];
}

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <FeatureSection />
      <NutritionStatsSection />
      <GastrointestinalSection />
      <PrebioticsSection />
    </main>
  );
}
