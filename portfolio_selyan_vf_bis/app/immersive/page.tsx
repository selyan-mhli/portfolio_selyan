import type { Metadata } from "next";
import ImmersiveShell from "@/components/ImmersiveShell";

export const metadata: Metadata = {
  title: "Mode immersif | Selyan Mouhali",
  description:
    "Version immersive du portfolio de Selyan Mouhali. Retour possible vers la version orientée recrutement.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ImmersivePage() {
  return <ImmersiveShell />;
}
