import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import AboutUs from "./pages/about/AboutUs";
import Contact from "./pages/contact/Contact";
import Services from "./pages/services/Services";
import { createContext, useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Products from "./pages/products/Products";
import Completion from "./components/completion/Completion";
import Cart from "./pages/cart/Cart";
import CourseModal from "./components/modal/display-course/CourseModal";
import Admin from "./pages/admin/dashboard/Admin";
import EditCourse from "./pages/admin/course-edit/EditCourse";
import {
  AdminPrivateRoute,
  PrivateRoute,
} from "./components/private/privateRoute";
import BuyedCourses from "./pages/my-course/BuyedCourses";
import VideoBrief from "./pages/admin/show-video/VideoBrief";
import ShowCourse from "./pages/course-detail/ShowCourse";
import VideoPlayer from "./pages/video player/VideoPlayer";
import Search from "./pages/search/Search";
import Congrats from "./components/congrats-card/Congrats";
import ReactConfetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import CourseRating from "./components/rating/CourseRating";
import Temp from "./components/Temp";
import Workshop from "./pages/workshop/Workshop";
import AtalTinkering from "./pages/tinkering-school/AtalTinkering";
import WonderLab from "./pages/wonder-lab/WonderLab";
import MakerLab from "./pages/maker-lab/MakerLab";
import FabLab from "./pages/fab-lab/FabLab";
import School from "./pages/school-ai-lab/School";
import Videos from "./pages/media/videos/Videos";
import Gallery from "./pages/media/gallery/Gallery";
import Courses from "./pages/courses/Courses";
import CategoryCourse from "./pages/category-course/CategoryCourse";

export const SidebarContext = createContext(null);
export const CourseModalContext = createContext(null);
export const CongratsModal = createContext(null);
export const RatingModal = createContext(null);
export const Authentication = createContext(null);

const App = () => {
  const { width, height } = useWindowSize();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isCourseModalOpen, setCourseModalOpen] = useState(false);
  const [isCongratsModalOpen, setCongratsModalOpen] = useState(false);
  const [isRatingModalOpen, setRatingModalOpen] = useState(false);
  const [isAuthenticated, setAuthentication] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [User, setUser] = useState();
  const [courseModalData, setCourseModalData] = useState();
  return (
    <div className="App">
      <SidebarContext.Provider value={{ isSidebarOpen, setSidebarOpen }}>
        <CongratsModal.Provider value={{ setCongratsModalOpen }}>
          <RatingModal.Provider value={{ setRatingModalOpen }}>
            <CourseModalContext.Provider
              value={{
                isCourseModalOpen,
                setCourseModalOpen,
                courseModalData,
                setCourseModalData,
              }}
            >
              <Authentication.Provider
                value={{
                  isAuthenticated,
                  setAuthentication,
                  isLoading,
                  setLoading,
                  User,
                  setUser,
                }}
              >
                <Router>
                  {isSidebarOpen && <Sidebar />}
                  {isCourseModalOpen && <CourseModal />}
                  {isCongratsModalOpen && (
                    <Congrats
                      setClose={setCongratsModalOpen}
                      open={isCongratsModalOpen}
                    />
                  )}
                  {isCongratsModalOpen && (
                    <ReactConfetti width={width} height={height} />
                  )}
                  {isRatingModalOpen && (
                    <CourseRating
                      setClose={setRatingModalOpen}
                      open={isRatingModalOpen}
                    />
                  )}
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/contactus" element={<Contact />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/workshop&camps" element={<Workshop />} />
                    <Route
                      path="/atal-tinkering-school"
                      element={<AtalTinkering />}
                    />
                    <Route path="/wonder-lab" element={<WonderLab />} />
                    <Route path="/maker-lab" element={<MakerLab />} />
                    <Route path="/fab-lab" element={<FabLab />} />
                    <Route path="/school-ai-lab" element={<School />} />
                    <Route path="/media/images" element={<Gallery />} />
                    <Route path="/media/videos" element={<Videos />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route
                      path="/courses/:category"
                      element={<CategoryCourse />}
                    />
                    <Route
                      path="/course/:id/video/:vidname"
                      element={<VideoPlayer />}
                    />

                    <Route
                      element={
                        <PrivateRoute
                          isLoading={isLoading}
                          redirectOn={"/"}
                          authenticated={isAuthenticated}
                        />
                      }
                    >
                      <Route path="/course/:id" element={<ShowCourse />} />
                      <Route path="/temp" element={<Temp />} />
                      <Route path="/search" element={<Search />} />
                      <Route path="/complete" element={<Completion />} />
                      <Route path="/cart" element={<Cart />} />
                      <Route path="/my-courses" element={<BuyedCourses />} />
                    </Route>
                    {/* <Route element={<AdminPrivateRoute isLoading={isLoading} redirectOn={'/'} authenticated={isAuthenticated} user={User} onlyFor={"User"}/>}> */}
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/admin/edit" element={<EditCourse />} />
                    <Route
                      path="/admin/course/:id/video/"
                      element={<VideoBrief />}
                    />
                    {/* </Route> */}
                  </Routes>
                </Router>
              </Authentication.Provider>
            </CourseModalContext.Provider>
          </RatingModal.Provider>
        </CongratsModal.Provider>
      </SidebarContext.Provider>
    </div>
  );
};

export default App;
