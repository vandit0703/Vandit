import { Link } from "wouter";
import { SiteLayout } from "@/components/layout/SiteLayout";

export default function NotFound() {
  return (
    <SiteLayout path={window.location.pathname}>
      <section className="page-frame not-found">
        <div>
          <span className="eyebrow">That page isn’t here</span>
          <h1>404</h1>
          <p className="section-copy">
            The page may have moved, or the address may be mistyped.
          </p>
          <Link href="/" className="action-button" style={{ marginTop: 20 }}>
            Back to the home page <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
