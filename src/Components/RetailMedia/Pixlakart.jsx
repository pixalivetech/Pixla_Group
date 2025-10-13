import Women from './../../assets/RetailMedia/Women.png'
import Mobile from './../../assets/RetailMedia/mobile.png'
import Logo from './../../assets/RetailMedia/Kartlogo.png' 


const PixlakartSection = () => {
  return (
    <section className="bg-[#f2f2f2] p-6 px-6 md:px-24 py-16">

      {/* Title */}
      <h3 className="text-gray-500 text-sm md:text-base underline underline-offset-4 mb-4">
        4. Pixlakart – E-commerce Aggregator Platform
      </h3>

      {/* Top Row */}
      <div className="grid md:grid-cols-2 gap-6">
        
        {/* Description */}
        <p className="text-sm md:text-base font-semibold text-gray-700 leading-relaxed">
          A centralized platform that unites brands and retailers to enable seamless product discovery,
          sales, and digital-first retail strategies.
        </p>

        {/* Right Image */}
        <div>
          <img 
            src={Women} 
            alt="Shopping Visual" 
            className="w-full h-70   object-cover"
          />
        </div>
      </div>

      {/* Phone Showcase */}
      <div className="flex justify-center gap-4 my-8">
        <img src={Mobile} alt="Phone Mockup 1" className="w-full  h-80 object-cover" />
       
      </div>

      {/* Bottom Info Row */}
      <div className="grid md:grid-cols-2 bg-[#f6f6f6] gap-6 p-8 shadow-amber-50  items-center">

        {/* Logo & Name */}
        <div className="flex items-center  gap-4">
          <div className="bg-black p-4 ">
            <img src={Logo} alt="Pixlakart Logo" className="w-30 h-30 object-contain" />
          </div>
       
        </div>

        {/* Impact Text */}
        <div className="text-sm text-gray-700 leading-relaxed">
          <strong>Impact:</strong><br />
          +140% monthly sales in 3 months.<br />
          Improved brand visibility and repeat customers.
        </div>
   <div>
            <p className="font-medium text-lg">Pixlakart</p>
            <p className="text-gray-600 text-sm">(E-commerce Platform)</p>
          </div>
      </div>
    </section>
  );
};

export default PixlakartSection;
