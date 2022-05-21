import Head from 'next/head'
import siteConfig from '@/config/site.config.json';

const Document = ({
  metaTitle,
  metaDescription,
  metaAuthor,
  metaKeyword,
  ogImage,
}) => {
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, maximum-scale=5'
      />
      <title>{metaTitle}</title>

      <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
      <meta name='keyword' content={metaKeyword} />
      <meta name='author' content={metaAuthor} />
      <meta name='description' content={metaDescription} />

      <meta property='og:title' content={metaTitle} />
      <meta property='og:description' content={metaDescription} />
      <meta property='og:image' content={ogImage} />
      <meta property='og:image:height' content='630' />
      <meta property='og:image:width' content='1200' />
      <meta name='twitter:title' content={metaTitle} />
      <meta name='twitter:image' content={ogImage} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:description' content={metaDescription} />

      <meta name="p:domain_verify" content="6b48be967209ce4b442ce9fa24e1171e"/>
    </Head>
  );
};

export default Document;
