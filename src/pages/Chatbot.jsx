import Section from "../components/Section";
import Heading from "../components/Heading";
import PricingList from "../components/PricingList";
import { LeftLine, RightLine } from "../components/design/Pricing";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ButtonGradient from "../assets/svg/ButtonGradient";


import homeimg1 from "../assets/images/chatbot.jpg"
import homeimg2 from "../assets/images/seo-2.jpg"

const Chatbot = () => {
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
                <div class="section-name wow fadeInRight" data-wow-delay=".2s">Seamless AI Chatbot Integration for Your Platform</div>
                <h3 class="wow fadeInLeft text-capitalize devider-bottom" data-wow-delay=".3s">What We<span class="text-primary"> Do</span></h3>
                <p class="offset-xl-40 wow fadeInUp" data-wow-delay=".4s">Enhance your customer service, streamline operations, and provide 24/7 support with our cutting-edge AI chatbot integration services. Our AI-powered chatbots deliver instant, human-like responses to your customers, enabling efficient communication, solving customer queries, and boosting engagement. From e-commerce platforms to customer support portals, our AI chatbots are built to adapt to your unique business needs, helping you improve customer satisfaction while saving time and resources.</p>
                <p class="default-letter-spacing font-weight-bold text-gray-dark wow fadeInUp" data-wow-delay=".4s">Boost Your Online Presence with Professional SEO Services</p>
              </div>
            </div>
          </div>
        </div>
        <div class="decor-text decor-text-1">.SEO.</div>
    </Section>

    <Section className="section my-15 mb-32 custom-section position-relative section-md" >
  
  <div class="container">
    <div class="row">
      <div class="col-xl-7 col-lg-7 col-12">
        <div class="section-name wow fadeInRight">Features of Our SEO Services</div>
        <h3 class="text-capitalize devider-left wow fadeInLeft text-4xl p-3" data-wow-delay=".2s">Why Businesses<span class="text-primary"> Choose us</span></h3>
        <p>With over decade of experience in business consulting, we have a lot to offer to our clients. Here are some reasons why companies worldwide choose us.</p>
        <div class="row row-15">
          <div class="col-xl-6 wow fadeInUp" data-wow-delay=".2s">
            <div class="box-default">
              <div class="box-default-title">24/7 Automated Customer Support</div>
              <p class="box-default-description">Provide round-the-clock assistance without the need for human intervention.</p><span class="box-default-icon novi-icon icon-lg mercury-icon-lightbulb-gears"></span>
            </div>
          </div>
          <div class="col-xl-6 wow fadeInUp" data-wow-delay=".3s">
            <div class="box-default">
              <div class="box-default-title">E-Commerce Chatbot Features</div>
              <p class="box-default-description">Product recommendations based on user preferences and browsing history.</p><span class="box-default-icon novi-icon icon-lg mercury-icon-target-2"></span>
            </div>
          </div>
          <div class="col-xl-6 wow fadeInUp" data-wow-delay=".4s">
            <div class="box-default">
              <div class="box-default-title">Data-Driven Insights & Analytics</div>
              <p class="box-default-description">Real-time reporting and analytics on chatbot performance, user behavior, and engagement metrics.</p><span class="box-default-icon novi-icon icon-lg mercury-icon-user"></span>
            </div>
          </div>
          <div class="col-xl-6 wow fadeInUp" data-wow-delay=".5s">
            <div class="box-default">
              <div class="box-default-title">Seamless CRM Integration</div>
              <p class="box-default-description">Capture leads and automate follow-ups, enriching your sales pipeline.</p><span class="box-default-icon novi-icon icon-lg mercury-icon-partners"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="image-left-side wow slideInRight" data-wow-delay=".5s"><img src={homeimg2} alt="" width="636" height="240"/>
  </div>
  <div class="decor-text decor-text-2 wow fadeInUp" data-wow-delay=".3s">features</div>

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

        
      </div>
    </Section> */}
    <div>
        <Footer />
    </div>
    <ButtonGradient />
    </>
  );
};

export default Chatbot;
