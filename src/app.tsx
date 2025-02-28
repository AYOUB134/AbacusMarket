import TopNav from "./components/navigation/top-nav"
import SubHeader from "./components/navigation/sub-header"
import GameCategories from "./components/navigation/game-categories"
import Sidebar from "./components/sidebar/sidebar"
import GameGrid from "./components/games/game-grid"

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <TopNav />
      <SubHeader />
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          <GameCategories />
          <GameGrid />
        </main>
      </div>
      {/* Chat widget - position fixed */}
      <div className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full cursor-pointer">
        <div className="text-sm">We're Online!</div>
        <div className="text-xs">How may I help you today?</div>
      </div>
    </div>
  )
}

