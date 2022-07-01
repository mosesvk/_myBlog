import HeadSvg from './HeadSvg'

export default function BannerBlock({ banner: { frontMatter } }) {
  return (
    <section className="my-28 sm:my-22 banner">
      <div className="container">
        <div className="row">
          <div className=" mx-auto text-center position-relative">
            <h1 className="h1 text-dark mb-0">{frontMatter.title}</h1>
            <p className='h4'>{frontMatter.par1}</p>
            <p className='h4'>{frontMatter.par2}</p>
            <HeadSvg />
          </div>
        </div>
      </div>
    </section>
  );
}
