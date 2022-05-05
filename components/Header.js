import { AppContext } from '@/components/UseContext';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Menu from '@/config/menus.json';
import Search from '@/components/Search';
import siteConfig from '@/config/site.config.json';
import { IconMenu2, IconX } from '@tabler/icons';

export default function Header() {
  const { toggleSearch } = useContext(AppContext);
  const [searchOpen, setSearchOpen] = toggleSearch;
  const router = useRouter();

  useEffect(() => {
    // search close using Escape key
    document.addEventListener('keydown', (e) => {
      e.key === 'Escape' && setSearchOpen(false);
    });

    // sticky header
    let nav = document.querySelector('.header-nav');
    var lastKnownScrollY = 0;
    var currentScrollY = 0;
    const classes = {
      pinned: 'header-nav-pinned',
      unpinned: 'header-nav-unpinned',
    };
    let stickyNavigation = () => {
      if (window.scrollY >= 150) {
        nav.classList.add('header-sticky-top');
      } else {
        nav.classList.remove('header-sticky-top');
      }
    };
    let navbarPinUnpin = () => {
      currentScrollY = window.pageYOffset;
      if (currentScrollY < lastKnownScrollY) {
        pin();
      } else if (currentScrollY > lastKnownScrollY) {
        if (window.scrollY >= 400) {
          unpin();
        }
      }
      lastKnownScrollY = currentScrollY;
    };
    let pin = () => {
      if (nav.classList.contains(classes.unpinned)) {
        nav.classList.remove(classes.unpinned);
        nav.classList.add(classes.pinned);
      }
    };
    let unpin = () => {
      if (
        nav.classList.contains(classes.pinned) ||
        !nav.classList.contains(classes.unpinned)
      ) {
        nav.classList.remove(classes.pinned);
        nav.classList.add(classes.unpinned);
      }
    };
    // navbar interactions
    window.onscroll = () => {
      navbarPinUnpin();
      stickyNavigation();
    };
  }, []);

  return (
    <>
      <div className="header-height-fix"></div>
      <header className="header-nav">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-lg navbar-light p-0">
                <Link href="/">
                  <a className="navbar-brand font-weight-bold d-flex mb-0">
                    <Image
                      className="img-fluid"
                      width={110}
                      height={35}
                      src={siteConfig.logo}
                      alt={siteConfig.logoText}
                      layout="fixed"
                      placeholder="blur"
                      blurDataURL={siteConfig.logo}
                    />
                  </a>
                </Link>

                <button
                  className="search-toggle d-inline-block d-lg-none ms-auto me-1 me-sm-3"
                  data-toggle="search"
                  aria-label="Search Toggle"
                  onClick={() => setSearchOpen(!searchOpen)}
                >
                  <span>Search</span>
                  <svg
                    width="22"
                    height="22"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5 15.5L19 19"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 11C5 14.3137 7.68629 17 11 17C12.6597 17 14.1621 16.3261 15.2483 15.237C16.3308 14.1517 17 12.654 17 11C17 7.68629 14.3137 5 11 5C7.68629 5 5 7.68629 5 11Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navHeader"
                  aria-controls="navHeader"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="d-inline">
                    <IconMenu2 size={38} />
                  </i>
                  <i className="d-none">
                    <IconX size={38} />
                  </i>
                </button>

                <div className="collapse navbar-collapse" id="navHeader">
                  <ul className="navbar-nav mx-auto">
                    {Menu.mainMenu.map((n, i) =>
                      n.submenu ? (
                        <li
                          key={i}
                          className={`nav-item dropdown
                          ${n.submenu
                            .map((n) =>
                              router.pathname == `${n.link}` ? `active` : ''
                            )
                            .join('')}
                        `}
                        >
                          <a
                            className="nav-link dropdown-toggle"
                            href={n.link}
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            {n.name}
                          </a>
                          <ul className="dropdown-menu">
                            {n.submenu.map((n, i) => (
                              <li key={i}>
                                <Link href={n.link}>
                                  <a
                                    className={`dropdown-item ${
                                      router.pathname == `${n.link}`
                                        ? `active`
                                        : ''
                                    }`}
                                  >
                                    {n.name}
                                  </a>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ) : (
                        <li
                          key={i}
                          className={`nav-item ${
                            router.pathname == `${n.link}` ? `active` : ''
                          }`}
                        >
                          <Link href={n.link}>
                            <a className="nav-link">{n.name}</a>
                          </Link>
                        </li>
                      )
                    )}
                  </ul>

                  <div className="navbar-right d-none d-lg-inline-block">
                    <ul className="list-unstyled list-inline mb-0">
                      <li className="list-inline-item d-none d-lg-inline-block">
                        <button
                          className="search-toggle"
                          data-toggle="search"
                          aria-label="Search Toggle"
                          onClick={() => setSearchOpen(!searchOpen)}
                        >
                          <span>Search</span>
                          <svg
                            width="22"
                            height="22"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.5 15.5L19 19"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M5 11C5 14.3137 7.68629 17 11 17C12.6597 17 14.1621 16.3261 15.2483 15.237C16.3308 14.1517 17 12.654 17 11C17 7.68629 14.3137 5 11 5C7.68629 5 5 7.68629 5 11Z"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <Search />
    </>
  );
}
