import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/sections/Footer";
import { contact } from "@/lib/data";

const UPDATED_ON = "22 septembre 2026";

export const metadata: Metadata = {
  title: "Confidentialité",
  description:
    "Politique de confidentialité de selyanmouhali.fr : formulaire de contact, absence de traceurs et outil interne d'analyse de mes propres sites.",
  alternates: { canonical: "/confidentialite" },
  // Legal page: reachable for Google OAuth review, kept out of search results.
  robots: { index: false, follow: true },
};

function Section({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-white/10 pt-10">
      <div className="mono-label mb-4">{label}</div>
      <h2 className="serif-display text-2xl md:text-3xl mb-5">{title}</h2>
      <div className="space-y-4 text-white/70 leading-relaxed">{children}</div>
    </section>
  );
}

export default function ConfidentialitePage() {
  return (
    <>
      <main className="px-6 md:px-12 lg:px-20 pt-32 pb-24">
        <div className="max-w-3xl">
          <Link href="/" className="mono-label hover:text-accent transition-colors">
            ← Retour au portfolio
          </Link>
          <h1 className="serif-display text-4xl md:text-6xl mt-8 mb-6">Confidentialité</h1>
          <p className="text-white/70 leading-relaxed mb-16">
            Cette page explique quelles données sont traitées sur selyanmouhali.fr et par les outils
            que j&apos;utilise pour suivre mes propres sites. Dernière mise à jour : {UPDATED_ON}.
          </p>

          <div className="space-y-14">
            <Section label="01 / Responsable" title="Qui traite les données">
              <p>
                Selyan Mouhali, joignable à{" "}
                <a href={`mailto:${contact.email}`} className="text-accent hover:underline">
                  {contact.email}
                </a>
                .
              </p>
            </Section>

            <Section label="02 / Ce site" title="Aucun traceur, aucune publicité">
              <p>
                selyanmouhali.fr ne dépose aucun cookie publicitaire ou de mesure d&apos;audience et
                n&apos;intègre aucun outil de suivi. Le site est hébergé sur un serveur dans l&apos;Union
                européenne et servi via le réseau de Cloudflare, qui traite techniquement les adresses IP
                pour acheminer les pages et protéger le site.
              </p>
            </Section>

            <Section label="03 / Contact" title="Formulaire de contact">
              <p>
                Les informations saisies dans le formulaire (nom, adresse e-mail, message) me sont
                transmises par e-mail via le service Web3Forms. Elles servent uniquement à vous répondre,
                ne sont jamais revendues ni partagées, et restent dans ma messagerie le temps de
                l&apos;échange. Pour y accéder ou les faire supprimer, écrivez-moi à{" "}
                <a href={`mailto:${contact.email}`} className="text-accent hover:underline">
                  {contact.email}
                </a>
                .
              </p>
            </Section>

            <Section label="04 / Search Console" title="Suivi de mes propres sites">
              <p>
                Un outil personnel consulte en lecture seule les statistiques Google Search Console de
                mes sites, uniquement pour les améliorer. Ces données ne sont jamais partagées, et leur
                usage respecte les{" "}
                <a
                  href="https://developers.google.com/terms/api-services-user-data-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  règles des API Google ↗
                </a>
                .
              </p>
            </Section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
