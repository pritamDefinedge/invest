import React from 'react';

const BrokerageRewardsSection: React.FC = () => {
  return (
    <section className="w-full relative overflow-hidden py-16 bg-white min-h-[400px]">
      <div className="absolute top-0 right-0 w-full h-full bg-no-repeat bg-contain bg-right z-10 opacity-90"
        style={{ backgroundImage: "url('./assets/img/diwali-images/diwali-design-4.png')" }}></div>
      
      <div className="container mx-auto relative z-50 py-8">
        <div className="max-w-3xl mx-auto text-center">
          <h5 className="text-xl font-medium text-gray-800 mb-6">
            You also get brokerage rewards with our Referral Program
          </h5>
          
          <div className="mb-8">
            <img
              src="./assets/img/diwali-images/diwali-Referral.png"
              alt="Referral Program"
              className="max-w-full h-auto mx-auto animate-[bounce_8s_ease-in-out_infinite_alternate-reverse]"
            />
          </div>
          
          <a
            href="https://www.definedgesecurities.com/referral-incentive-scheme-policy/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-3 px-8 bg-primary text-white font-medium rounded-full hover:bg-blue-600 transition duration-300"
          >
            Explore our Referral Program
          </a>
        </div>
      </div>
    </section>
  );
};

export default BrokerageRewardsSection; 