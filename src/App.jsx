import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ReferralProcess from "./components/ReferralProcess";
import ReferralBenefits from "./components/ReferralBenifits";
import Footer from "./components/Footer";
import PopupForm from "./components/PopupForm";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const showPopupForm = () => {
    setIsOpen(true);
  };

  const hidePopup = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <Navbar />
      <Hero showPopupForm={showPopupForm} />
      <ReferralProcess showPopupForm={showPopupForm} />
      <ReferralBenefits showPopupForm={showPopupForm} />
      <Footer />
      <PopupForm isOpen={isOpen} hidePopup={hidePopup} />
    </div>
  );
}

export default App;
