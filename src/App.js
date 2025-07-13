// import React, { useRef, useState } from "react";
// import Header from "./components/Header";
// import PropertyList from "./components/PropertyList";
// import ContactForm from "./components/ContactForm";
// import Footer from "./components/Footer";
// import About from "./components/About";
// import "./App.css";

// function App() {
//   const [page, setPage] = useState("home");

//   const propertyRef = useRef(null); // For scroll reference

//   const renderPage = () => {
//     switch (page) {
//       case "home":
//         return (
//           <>
//             <Header onExploreClick={() => propertyRef.current?.scrollIntoView({ behavior: "smooth" })} />
//             <div ref={propertyRef}>
//               <PropertyList />
//             </div>
//           </>
//         );
//       case "properties":
//         return <PropertyList />;
//       case "about":
//         return <About />;
//       case "contact":
//         return <ContactForm />;
//       default:
//         return <Header />;
//     }
//   };

//   return (
//     <div>
//       <nav className="navbar">
//         <div className="logo" onClick={() => setPage("home")}>
//           <img src="/assets/NextGen Reality-logo-transparent.png" alt="NextGen" className="logo-img" />
//         </div>
//         <ul>
//           <li onClick={() => setPage("home")}>Home</li>
//           <li onClick={() => setPage("properties")}>Properties</li>
//           <li onClick={() => setPage("about")}>About Us</li>
//           <li onClick={() => setPage("contact")}>Contact</li>
//         </ul>
//       </nav>
//       {renderPage()}
//       <Footer />
//     </div>
//   );
// }

// export default App;
////////////////////////////////////////////////

import React, { useRef, useState } from "react";
import Header from "./components/Header";
import PropertyList from "./components/PropertyList";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import About from "./components/About";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [showNavbar, setShowNavbar] = useState(true); // new state
  const propertyRef = useRef(null);

  const handleNavClick = (targetPage) => {
    setPage(targetPage);
    setShowNavbar(false); // hide navbar on link click
  };

  const renderPage = () => {
    switch (page) {
      case "home":
        return (
          <>
            <Header
              onExploreClick={() =>
                propertyRef.current?.scrollIntoView({ behavior: "smooth" })
              }
            />
            <div ref={propertyRef}>
              <PropertyList />
            </div>
          </>
        );
      case "properties":
        return <PropertyList />;
      case "about":
        return <About />;
      case "contact":
        return <ContactForm />;
      default:
        return <Header />;
    }
  };

  return (
    <div>
      {showNavbar && (
        <nav className="navbar">
          <div className="logo" onClick={() => handleNavClick("home")}>
            <img src="/assets/NextGen Reality-logo-transparent.png" alt="NextGen" className="logo-img" />
          </div>
          <div className="nav1">
          <ul>
            <li onClick={() => handleNavClick("home")}>Home</li>
            <li onClick={() => handleNavClick("properties")}>Properties</li>
            <li onClick={() => handleNavClick("about")}>About Us</li>
            <li onClick={() => handleNavClick("contact")}>Contact</li>
          </ul>
          </div>
         <div className="enquiry-box">
  Enquiry Now: <a href="tel:7046564456">7046564456</a>
</div>

        </nav>
      )}

      {renderPage()}

      <Footer />
    </div>
  );
}

export default App;

