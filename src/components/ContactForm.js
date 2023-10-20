import React from "react";
import "../Styles/contactform.css"
import CV from '../assets/Duolingo.pdf';
const ContactForm = () => {
    return (
        <div class="contact_us_green">
        <div class="responsive-container-block big-container">
          <div class="responsive-container-block container">
            <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-7 wk-ipadp-10 line" id="i69b-2">
              <form class="form-box">
                <div class="container-block form-wrapper">
                  <div class="head-text-box">
                    <p class="text-blk contactus-head">
                      Contact us
                    </p>
                    <p class="text-blk contactus-subhead">
                    Reach out to Dewashish Ranade, the UX wizard, product orchestrator, and engineer, to transform your ideas into seamless user experiences. With a unique blend of creativity and technical prowess, Dewashish crafts innovative solutions that captivate and delight users. Reach out today for an exceptional product development journey.
                    </p>
                  </div>
                  <div class="responsive-container-block">
                    <div class="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt-6">
                      <p class="text-blk input-title">
                        YOUR NAME
                      </p>
                      <input class="input" id="ijowk-6" name="FirstName"/>
                    </div>
                    {/* <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                      <p class="text-blk input-title">
                        LAST NAME
                      </p>
                      <input class="input" id="indfi-4" name="Last Name" placeholder="Surname"/>
                    </div> */}
                    <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                      <p class="text-blk input-title">
                        EMAIL
                      </p>
                      <input class="input" id="ipmgh-6" name="Email"/>
                    </div>
                    <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                      <p class="text-blk input-title">
                        PHONE NUMBER
                      </p>
                      <input class="input" id="imgis-5" name="PhoneNumber" placeholder="(+  ) | xxxxx xxxxx" />
                    </div>
                    <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i-6">
                      <p class="text-blk input-title">
                        WHAT DO YOU HAVE IN MIND
                      </p>
                      <textarea class="textinput" id="i5vyy-6" placeholder="Hey Dewashish! How are you? I was wondering..."></textarea>
                    </div>
                  </div>
                  <div class="btn-wrapper">
                    <button class="submit-btn">
                      Submit
                    </button>

                    <button class="submit-btn" download=" " href={CV}>
                      Download CV
                    </button>
                    
                  </div>
                </div>
              </form>
            </div>
            <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-5 wk-ipadp-10" id="ifgi">
              <div class="container-box">
                <div class="text-content">
                  <p class="text-blk contactus-head">
                    Contact Dewa!
                  </p>
                  <p class="text-blk contactus-subhead">
                  Reach out to Dewashish Ranade, the UX wizard, product orchestrator, and engineer, to transform your ideas into seamless user experiences. With a unique blend of creativity and technical prowess, Dewashish crafts innovative solutions that captivate and delight users. Reach out today for an exceptional product development journey.
                  </p>
                </div>
                <div class="workik-contact-bigbox">
                  <div class="workik-contact-box">
                    <div class="phone text-box">
                      <img class="contact-svg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET21.jpg"/>
                      <p class="contact-text">
                        +91 95529 57258
                      </p>
                    </div>
                    <div class="address text-box">
                      <img class="contact-svg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET22.jpg"/>
                      <p class="contact-text">
                        dewaranade@gmail.com
                      </p>
                    </div>
                    <div class="mail text-box">
                      <img class="contact-svg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET23.jpg"/>
                      <p class="contact-text">
                        Pune
                      </p>
                    </div>
                  </div>
                  <div class="social-media-links">
                    <a href="">
                      <img class="social-svg" id="is9ym" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg"/>
                    </a>
                    <a href="">
                      <img class="social-svg" id="i706n" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg"/>
                    </a>
                    <a href="">
                      <img class="social-svg" id="ib9ve" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg"/>
                    </a>
                    <a href="">
                      <img class="social-svg" id="ie9fx" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) 
}

export default ContactForm;