import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IconHome } from "@tabler/icons";

export default function PageHeaderTaxo({ title }) {
  const convertBreadcrumb = (string) => {
    return (
      string
        .replace(/-/g, " ")
        .replace(/oe/g, "ö")
        .replace(/ae/g, "ä")
        .replace(/ue/g, "ü")
        .charAt(0)
        .toUpperCase() + string.slice(1).replace(/-/g, ' ')
    );
  };

  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState(null);

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split("/");
      linkPath.shift();

      const pathArray = linkPath.slice(0, 2).map((path, i) => {
        return {
          breadcrumb: path,
          href: "/" + linkPath.slice(0, i + 1).join("/"),
        };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <>
      <section className="section-sm">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <p className="mb-2">Showing posts from</p>
              <h1 className="section-title h2 mb-3">
                <span>{convertBreadcrumb(title)}</span>
              </h1>

              <ul className="list-inline breadcrumb-menu mb-4">
                <li className="list-inline-item">
                  <Link href="/">
                    <a>
                      <i
                        className="d-inline-block text-dark"
                        style={{ transform: "translateY(-" + 2 + "px)" }}
                      >
                        <IconHome size={16} />
                      </i>
                      <span className="ms-2 me-1">Home</span>
                    </a>
                  </Link>
                </li>
                {breadcrumbs.map((breadcrumb, i) => {
                  return (
                    <li key={i} className="list-inline-item">
                      <Link href={breadcrumb.href}>
                        <a>
                          • &nbsp;{" "}
                          <span>
                            {convertBreadcrumb(breadcrumb.breadcrumb)}
                          </span>
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
