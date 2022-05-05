import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import useScripts from '@/components/Scripts';
import siteConfig from '@/config/site.config.json';
import Document from './Document';

export default function Layout({
  metaTitle,
  metaDescription,
  metaAuthor,
  metaKeyword,
  ogImage,
  children,
}) {
  return (
    <>
      <Document metaTitle={metaTitle} metaDescription={metaDescription} metaAuthor={metaAuthor} metaKeyword={metaKeyword} ogImage={ogImage} />
      <Header />
      {children}
      <Footer />
    </>
  );
}

Layout.defaultProps = {
  metaTitle: siteConfig.metaData.title,
  metaDescription: siteConfig.metaData.description,
  metaAuthor: siteConfig.metaData.author,
  metaKeyword: siteConfig.metaData.keyword,
  ogImage: siteConfig.metaData.ogImage,
};
