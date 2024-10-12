import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, GameLessons, LearnShapes, ShapeRace, GamePage } from "./pages";
import HomeLayout from "./layout/HomeLayout";
import AllGames from "./pages/allGames/AllGames";
import LessonPage from "./pages/LessonPage";

/**
 * Documentation for React Router Setup
 *
 * Overview:
 * This application uses react-router-dom for routing. The main layout is 
 * wrapped around various pages, including Home, Game Lessons, and specific 
 * games like Shape Race Game.
 *
 * Structure:
 * - HomeLayout: The layout component that wraps the main content of the application.
 * - Home: The landing page of the application.
 * - GameLessons: Displays a list of available game lessons.
 * - AllGames: Displays all games under a specific lesson.
 * - ShapeRaceGame: A specific game component that focuses on shape recognition.


 * Route Definitions:
 * 1. Root Route (`/`):
 *    - Element: HomeLayout
 *    - The main layout for the application that wraps all child routes.
 *
 * 2. Home Page (`/`):
 *    - Element: Home
 *    - The default page that loads when the application starts.
 *
 * 3. Game Lessons (`/game-lessons`):
 *    - Element: GameLessons
 *    - Displays a list of available game lessons.
 *
 * 4. Specific Game Lessons (`/game-lessons/games/:id`):
 *    - Element: AllGames
 *    - Displays all games related to a specific lesson identified by `:id`.
 *
 */

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "game-lessons",
        element: <GameLessons />,
      },
      {
        path: "game-lessons/games/:id",
        element: <AllGames />,
      },
      {
        path: '/game-lessons/game-lesson/:id',
        element: <LessonPage />,
      },
    ],

  },
  {
    path: '/game-lessons/games/shapes/:id',
    element: <ShapeRace />,
  },
  {
    path: '/game-lessons/games/counting/:id',
    element: <GamePage />,
    // element: <CountAndMatchGame />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
