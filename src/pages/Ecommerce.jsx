import Section from "../components/Section";
import Heading from "../components/Heading";
import PricingList from "../components/PricingList";
import { LeftLine, RightLine } from "../components/design/Pricing";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ButtonGradient from "../assets/svg/ButtonGradient";

import homeimg1 from "../assets/images/ecom-1.jpg"
import homeimg2 from "../assets/images/ecom-2.jpg"

const Ecommerce = () => {
  return (
    <>
    <div>
        <Header />
    </div>
    <Section className="section section-sm position-relative">
    <div class="container">
          <div class="row row-30">
            <div class="col-lg-6">
              <div class="block-decorate-img wow fadeInLeft" data-wow-delay=".2s"><img src={homeimg1} alt="" width="570" height="351"/>
              </div>
            </div>
            <div class="col-lg-6 col-12">
              <div class="block-sm offset-top-45">
                <div class="section-name wow fadeInRight" data-wow-delay=".2s">WordPress eCommerce Store Development Services</div>
                <h3 class="wow fadeInLeft text-capitalize devider-bottom" data-wow-delay=".3s">What We<span class="text-primary"> Do</span></h3>
                <p class="offset-xl-40 wow fadeInUp" data-wow-delay=".4s">Take your business online with a scalable, feature-rich eCommerce store built on the world’s most popular content management system—WordPress. Our WordPress eCommerce store development services are designed to provide you with everything you need to sell your products seamlessly. Whether you’re starting from scratch or upgrading an existing store, we ensure a smooth and efficient process that results in a stunning, user-friendly online store that drives sales and boosts customer satisfaction.</p>
                <p class="default-letter-spacing font-weight-bold text-primary wow fadeInUp" data-wow-delay=".4s">Build a Powerful eCommerce Store on WordPress with Our Expert Solutions</p>
              </div>
            </div>
          </div>
        </div>
        <div class="decor-text decor-text-1">ECOMM</div>
    </Section>

    <Section className="section my-15 mb-32 custom-section position-relative section-md" >
  
        <div class="container">
          <div class="row">
            <div class="col-xl-7 col-lg-7 col-12">
              <div class="section-name wow fadeInRight">Features of Our WordPress eCommerce Store Development Services</div>
              <h3 class="text-capitalize devider-left wow fadeInLeft text-4xl p-3" data-wow-delay=".2s">Why Businesses<span class="text-primary"> Choose us</span></h3>
              <p>With over decade of experience in business consulting, we have a lot to offer to our clients. Here are some reasons why companies worldwide choose us.</p>
              <div class="row row-15">
                <div class="col-xl-6 wow fadeInUp" data-wow-delay=".2s">
                  <div class="box-default">
                    <div class="box-default-title"> WooCommerce Integration</div>
                    <p class="box-default-description">Seamless integration of WooCommerce, the most popular WordPress plugin for building eCommerce stores.</p><span class="box-default-icon novi-icon icon-lg mercury-icon-lightbulb-gears"></span>
                  </div>
                </div>
                <div class="col-xl-6 wow fadeInUp" data-wow-delay=".3s">
                  <div class="box-default">
                    <div class="box-default-title">Custom Store Design & Development</div>
                    <p class="box-default-description">Fully responsive, mobile-friendly store designs to enhance the shopping experience across all devices.</p><span class="box-default-icon novi-icon icon-lg mercury-icon-target-2"></span>
                  </div>
                </div>
                <div class="col-xl-6 wow fadeInUp" data-wow-delay=".4s">
                  <div class="box-default">
                    <div class="box-default-title">Inventory Management</div>
                    <p class="box-default-description">Automated stock notifications to alert you when inventory is low.
                    </p><span class="box-default-icon novi-icon icon-lg mercury-icon-user"></span>
                  </div>
                </div>
                <div class="col-xl-6 wow fadeInUp" data-wow-delay=".5s">
                  <div class="box-default">
                    <div class="box-default-title"> Secure Checkout & Payment Solutions</div>
                    <p class="box-default-description">Flexible payment options including credit cards, e-wallets, and bank transfers.</p><span class="box-default-icon novi-icon icon-lg mercury-icon-partners"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="image-left-side wow slideInRight" data-wow-delay=".5s"><img src={homeimg2} alt="" width="636" height="240"/>
        </div>
        
      
    </Section>
    {/* <Section className="overflow-hidden" id="seo">
      <div className="container relative z-2">
        
        <Heading
          tag="Get started with Brainwave"
          title="Pay once, use forever"
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="/pricing"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section> */}
    <div>
        <Footer />
    </div>
    <ButtonGradient />
    </>
  );
};

export default Ecommerce;
