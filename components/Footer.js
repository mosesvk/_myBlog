import { IconUserPlus } from '@tabler/icons';
import siteConfig from '@/config/site.config.json';
import subscription from '@/config/subscription.json';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="section">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="newsletter-block">
                <h2 className="section-title text-center mb-4">
                  {subscription.title}
                </h2>

                <div id="mc_embed_signup">
                  <form
                    action={subscription.mailChimpFormAction}
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate"
                    target="_blank"
                  >
                    <div
                      id="mc_embed_signup_scroll"
                      className="input-group flex-column flex-sm-row flex-nowrap flex-sm-nowrap"
                    >
                      <input
                        type="email"
                        name="EMAIL"
                        className="form-control required email w-auto text-center text-sm-start"
                        id="mce-EMAIL"
                        placeholder={subscription.formPlaceholder}
                        aria-label="Subscription"
                        autoComplete="new-email"
                        required
                      />
                      <div id="mce-responses" className="clear">
                        <div
                          className="response"
                          id="mce-error-response"
                          style={{ display: 'none' }}
                        ></div>
                        <div
                          className="response"
                          id="mce-success-response"
                          style={{ display: 'none' }}
                        ></div>
                      </div>
                      <div
                        style={{ position: 'absolute', left: -5000 + 'px' }}
                        aria-hidden="true"
                      >
                        <input
                          type="text"
                          name={subscription.mailChimpFormName}
                          tabIndex="-1"
                        />
                      </div>
                      <div className="input-group-append d-flex d-sm-inline-block mt-2 mt-sm-0 ms-0 w-auto">
                        <button
                          type="submit"
                          name="subscribe"
                          id="mc-embedded-subscribe"
                          className="input-group-text w-100 justify-content-center"
                          aria-label="Subscription Button"
                        >
                          <i className="me-2">
                            <IconUserPlus size={16} />
                          </i>
                          {subscription.formButtonLabel}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-5">
          <div className="row">
            <div className="col-lg-12 text-center">
              <p className="mb-0 copyright-text content">
                {siteConfig.copyright}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
