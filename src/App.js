// import { LocomotiveScrollProvider } from "react-locomotive-scroll";
// import "./App.css";
// import { useRef } from "react";

// function App() {
//   const ref = useRef(null);

//   const options = {
//     smooth: true,
//     multiplier: 9,
//   };

//   return (
//     <LocomotiveScrollProvider options={options} containerRef={ref}>
//       <main data-scroll-container ref={ref}>
//         <section
//           className="intro"
//           data-scroll
//           data-scroll-speed="5"
//           data-scroll-section
//         >
//           <h1>This is the Introduction section</h1>
//         </section>

//         <section className="contents" data-scroll-section>
//           <h1
//             data-scroll
//             data-scroll-direction="horizontal"
//             data-scroll-speed="9"
//           >
//             I Love React
//           </h1>
//           <h1
//             data-scroll
//             data-scroll-direction="vertical"
//             data-scroll-speed="9"
//           >
//             That's why i code everyday
//           </h1>
//         </section>

//         <section id="stick" data-scroll-section>
//           <h1
//             data-scroll
//             data-scroll-speed="5"
//             data-scroll-sticky
//             data-scroll-target="#stick"
//           >
//             Hey I'm Sticky
//           </h1>
//           <p>other contents</p>
//           <p>other contents</p>
//           <p>other contents</p>
//           <p>other contents</p>
//           <p>other contents</p>
//           <p>other contents</p>
//           <p>other contents</p>
//           <p>other contents</p>
//         </section>

//         <section className="footer" data-scroll-section>
//           <h1
//             className=" op-class"
//             data-scroll
//             data-scroll-repeat="true"
//             data-scroll-class="fadeIn"
//             data-scroll-speed="5"
//           >
//             Let's end the application with this Footer
//           </h1>
//         </section>
//       </main>
//     </LocomotiveScrollProvider>
//   );
// }

// export default App;

import Introduction from "./components/intro/Introduction";
import Work from "./components/work/Work";
import Message from "./components/message/Message";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "./App.css";
// import { useLocation } from "react-router-dom";

function App() {
  const ref = useRef(null);
  // const { pathname } = useLocation();

  const options = {
    smooth: true,
    multiplier: 3,
    smartphone: {
      smooth: true,
    },
  };

  return (
    <LocomotiveScrollProvider
      options={options}
      containerRef={ref}
      // location={pathname}
      // onLocationChange={(scroll) =>
      //   scroll.scrollTo(0, { duration: 0, disableLerp: true })
      // } // If you want to reset the scroll position to 0 for example
      // onUpdate={() => console.log("Updated, but not on location change!")}
    >
      <main data-scroll-container ref={ref}>
        <Introduction />
        <Work />
        <Message />
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
