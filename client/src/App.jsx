import { useState, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { Login, SignUp, LoadingPage } from "./pages";
const Home = lazy(() => import("./pages/Home"));
const Profile = lazy(() => import("./pages/Profile"));
const Explore = lazy(() => import("./pages/Explore"));
const Reels = lazy(() => import("./pages/Reels"));
const Showpost = lazy(() => import("./pages/Showpost"));
const Create = lazy(() => import("./pages/Create"));
const Messages = lazy(() => import("./pages/Messages"));
const Archive = lazy(() => import("./pages/Archive"));
const Setting = lazy(() => import("./pages/Setting"));
const Notifications = lazy(() => import("./pages/Notifications"));
const Search = lazy(() => import("./pages/Search"));
const Showprofile = lazy(() => import("./pages/Showprofile"));
const ProfileSaved = lazy(() => import("./pages/ProfileSaved"));
const ProfileReels = lazy(() => import("./pages/ProfileReels"));
const ProfileLayout = lazy(() => import("./layout/ProfileLayout"));
import ProtectedRoute from "./layout/ProtectedRoute";

const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <>
      <LoadingBar
        color="#27c4f5 linear-gradient(to right,#27c4f5,#a307ba,#fd8d32,#70c050,#27c4f5)"
        progress={progress}
        height={3}
      />
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route
            exact
            path="/login"
            element={<Login setProgress={setProgress} />}
          />
          <Route
            path="/signup"
            element={<SignUp setProgress={setProgress} />}
          />
          <Route element={<ProtectedRoute />}>
            <Route exact index element={<Home setProgress={setProgress} />} />
            <Route
              path="/profile"
              element={<ProfileLayout setProgress={setProgress} />}
            >
              <Route index element={<Profile />} />
              <Route path="saved" element={<ProfileSaved />} />
              <Route path="reels" element={<ProfileReels />} />
            </Route>

            <Route
              path="/explore"
              element={<Explore setProgress={setProgress} />}
            />
            <Route
              path="/reels"
              element={<Reels setProgress={setProgress} />}
            />
            <Route
              path="/p/:id/"
              element={<Showpost setProgress={setProgress} />}
            />
            <Route
              path="/create"
              element={<Create setProgress={setProgress} />}
            />
            <Route
              path="/message"
              element={<Messages setProgress={setProgress} />}
            />
            <Route
              path="/archive/stories/"
              element={<Archive setProgress={setProgress} />}
            />
            <Route
              path="/accounts/edit"
              element={<Setting setProgress={setProgress} />}
            />
            <Route path="/updatepost" />
            <Route
              path="/notifications"
              element={<Notifications setProgress={setProgress} />}
            />
            <Route
              path="/search"
              element={<Search setProgress={setProgress} />}
            />
            <Route
              path="/sp/:id/*"
              element={<Showprofile setProgress={setProgress} />}
            />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
