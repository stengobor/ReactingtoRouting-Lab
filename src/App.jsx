import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Films from "./pages/Films";
import FilmsDetails from "./pages/FilmsDetails";
import People from "./pages/People";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <main className="container mt-5">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Films" element={<Films />} />
          <Route path="/FilmsDetail" element={<FilmsDetails />} />
          <Route path="/People" element={<People />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;

//   let [loadFilms, setLoadFilms] = useState(false);
//   let [loadPeople, setLoadPeople] = useState(false);

//   let showFilms = () => {
//     setLoadPeople(false);
//     setLoadFilms(true);
//   };

//   let showPeople = () => {
//     setLoadFilms(false);
//     setLoadPeople(true);
//   };

//   if (loadFilms == true) {
//     return (
//       <>
//         <nav className="topnav">
//           <img id="logo" src={StudioGhiblilogo} />
//           <button className="active">Home</button>
//           <button id="navbtn" onClick={showFilms}>
//             Films
//           </button>
//           <button id="navbtn" onClick={showPeople}>
//             People
//           </button>
//         </nav>
//         <Films />
//       </>
//     );
//   } else if (loadPeople == true) {
//     return (
//       <>
//         <nav className="topnav">
//           <img id="logo" src={StudioGhiblilogo} />
//           <button id="navbtn">Home</button>
//           <button id="navbtn" onClick={showFilms}>
//             Films
//           </button>
//           <button id="navbtn" onClick={showPeople}>
//             People
//           </button>
//         </nav>
//         <People></People>
//       </>
//     );
//   } else {
// return (
//   <>
//     <nav className="topnav">
//       <img id="logo" src={StudioGhiblilogo} />
//       <button className="active">Home</button>
//       <button id="navbtn" onClick={showFilms}>
//         Films
//       </button>
//       <button id="navbtn" onClick={showPeople}>
//         People
//       </button>
//     </nav>

//     <div id="bio" class="card text-center">
//       <div class="card-body">
//         <h5 class="card-header">Studio Ghibli</h5>
//         <p class="card-text">
//           Studio Ghibli was founded in 1985 by animated film directors Isao
//           Takahata and Hayao Miyazaki, and has produced twenty-two
//           feature-length films. Most Studio Ghibli films ranked number one
//           at the box office in Japan in the year in which they were
//           released. SPIRITED AWAY, directed by Hayao Miyazaki and released
//           in 2001, is the all-time highest grossing film in Japan, earning
//           over 30 billion yen at the box office. Studio Ghibli films have
//           garnered numerous awards and critical acclaim from film critics
//           and animation specialists around the world. SPIRITED AWAY was
//           awarded the Golden Bear as the Best Feature Film at the 2002
//           Berlin International Film Festival and won the 2002 Academy Award
//           for Best Animated Feature Film. In October 2001, Studio Ghibli, in
//           conjunction with The Tokuma Memorial Cultural Foundation for
//           Animation, founded the Ghibli Museum, Mitaka, designed by Hayao
//           Miyazaki. THE WIND RISES (2013), THE TALE OF THE PRINCESS KAGUYA
//           (2013), WHEN MARNIE WAS THERE (2014) and THE RED TURTLE (2016),
//           the last four films released by Studio Ghibli, have earned the
//           studio four consecutive Academy Award nominations for Best
//           Animated Feature Film. The studio is currently working on a new
//           production.
//         </p>
//       </div>
//     </div>
//   </>
// );
//   }
