import {
  IconBrandTwitter,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandReddit,
  IconBrandPinterest,
  IconCalendarEvent,
  IconClock,
  IconArrowUpRight,
} from '@tabler/icons';


const Sharing = ({title, pageUrl}) => {

  return (
    <div className='col-lg-2 post-share-block order-1 order-lg-0 mt-5 mt-lg-0'>
    <div className='position-sticky' style={{ top: 150 + 'px' }}>
      <span className='d-inline-block mb-3 small'>SHARE THIS</span>
      <ul className='social-share icon-box'>
        <li className='d-inline-block d-lg-block me-2 mb-2'>
          <a
            href={`https://twitter.com/intent/tweet?text=${title}&url=${pageUrl}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i>
              <IconBrandTwitter size={18} />
            </i>
          </a>
        </li>
        <li className='d-inline-block d-lg-block me-2 mb-2'>
          <a
            href={`https://www.facebook.com/sharer.php?u=${pageUrl}&quote=${title}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i>
              <IconBrandFacebook size={18} />
            </i>
          </a>
        </li>
        <li className='d-inline-block d-lg-block me-2 mb-2'>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i>
              <IconBrandLinkedin size={18} />
            </i>
          </a>
        </li>
        <li className='d-inline-block d-lg-block me-2 mb-2'>
          <a
            href={`https://www.reddit.com/submit?url=${pageUrl}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i>
              <IconBrandReddit size={18} />
            </i>
          </a>
        </li>
        <li className='d-inline-block d-lg-block me-2 mb-2'>
          <a
            href={`https://www.pinterest.com/pin/create/button/?&text=${title}&url=${pageUrl}&description=${title}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i>
              <IconBrandPinterest size={18} />
            </i>
          </a>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Sharing;