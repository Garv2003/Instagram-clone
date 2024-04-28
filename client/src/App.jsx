import { useState, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { TailSpin } from "react-loader-spinner";
import logo from "./assets/logo.png";
import { Login, SignUp } from "./pages";
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

  const LoadingPage = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img
            src={logo}
            alt="Instagram"
            style={{
              width: "100px",
              height: "100px",
            }}
          />
          <TailSpin
            visible={true}
            height="30"
            width="30"
            color="#afafaf"
            ariaLabel="tail-spin-loading"
            radius="1"
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <LoadingBar
        color="#27c4f5 linear-gradient(to right,#27c4f5,#a307ba,#fd8d32,#70c050,#27c4f5)"
        progress={progress}
        height={3}
      />
      <Routes>
        <Route
          exact
          path="/login"
          element={
            <Suspense fallback={<LoadingPage />}>
              <Login setProgress={setProgress} />
            </Suspense>
          }
        />
        <Route
          path="/signup"
          element={
            <Suspense fallback={<LoadingPage />}>
              <SignUp setProgress={setProgress} />
            </Suspense>
          }
        />
        <Route element={<ProtectedRoute />}>
          <Route
            exact
            index
            element={
              <Suspense fallback={<LoadingPage />}>
                <Home setProgress={setProgress} />
              </Suspense>
            }
          />
          <Route
            path="/profile"
            element={
              <Suspense fallback={<LoadingPage />}>
                <ProfileLayout setProgress={setProgress} />
              </Suspense>
            }
          >
            <Route index element={<Profile />} />
            <Route
              path="saved"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <ProfileSaved />
                </Suspense>
              }
            />
            <Route
              path="reels"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <ProfileReels />
                </Suspense>
              }
            />
          </Route>

          <Route
            path="/explore"
            element={
              <Suspense fallback={<LoadingPage />}>
                <Explore setProgress={setProgress} />
              </Suspense>
            }
          />
          <Route
            path="/reels"
            element={
              <Suspense fallback={<LoadingPage />}>
                <Reels setProgress={setProgress} />
              </Suspense>
            }
          />
          <Route
            path="/p/:id/"
            element={
              <Suspense fallback={<LoadingPage />}>
                <Showpost setProgress={setProgress} />
              </Suspense>
            }
          />
          <Route
            path="/create"
            element={
              <Suspense fallback={<LoadingPage />}>
                <Create setProgress={setProgress} />
              </Suspense>
            }
          />
          <Route
            path="/message"
            element={
              <Suspense fallback={<LoadingPage />}>
                <Messages setProgress={setProgress} />
              </Suspense>
            }
          />
          <Route
            path="/archive/stories/"
            element={
              <Suspense fallback={<LoadingPage />}>
                <Archive setProgress={setProgress} />
              </Suspense>
            }
          />
          <Route
            path="/accounts/edit"
            element={
              <Suspense fallback={<LoadingPage />}>
                <Setting setProgress={setProgress} />
              </Suspense>
            }
          />
          <Route path="/updatepost" />
          <Route
            path="/notifications"
            element={
              <Suspense fallback={<LoadingPage />}>
                <Notifications setProgress={setProgress} />
              </Suspense>
            }
          />
          <Route
            path="/search"
            element={
              <Suspense fallback={<LoadingPage />}>
                <Search setProgress={setProgress} />
              </Suspense>
            }
          />
          <Route
            path="/sp/:id/*"
            element={
              <Suspense fallback={<LoadingPage />}>
                <Showprofile setProgress={setProgress} />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
