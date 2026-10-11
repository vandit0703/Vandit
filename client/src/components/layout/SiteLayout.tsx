import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Seo } from "@/components/Seo";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export function SiteLayout({
  path,
  children,
}: {
  path: string;
  children: ReactNode;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <Seo path={path} />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <motion.div
          key={path}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          {children}
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
