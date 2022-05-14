import HeadSvg from './HeadSvg'

export default function BannerBlock({ banner: { frontMatter } }) {
  return (
    <section className="section overflow-hidden banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-11 mx-auto text-center position-relative">
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
