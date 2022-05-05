import Link from "next/link";
import Layout from "@/components/Layout";

export default function PageNotFound() {
  return (
    <Layout metaTitle={"Page Not Found"}>
      <section className="section-sm pb-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h1 className="page-not-found-title">404</h1>
                <p className="mb-4">
                  Oops. The page you&apos;re looking for doesn&apos;t exist.
                </p>
                <Link href="/">
                  <a className="btn btn-primary">Back to home</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
