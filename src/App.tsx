import { useState } from "react"
import { Home, Clock, User, Settings } from "lucide-react"
import { BottomTabs } from "./components/BottomTabs"
import HomeScreen from "./components/HomeScreen"
import ActivityScreen from "./components/ActivityScreen"
import ProfileScreen from "./components/ProfileScreen"
import SettingsScreen from "./components/SettingsScreen"
import StartRunScreen from "./components/StartRunScreen"
import RunDetailsScreen from "./components/RunDetailsScreen"
import EditProfileScreen from "./components/EditProfileScreen"
import GoalSettingsScreen from "./components/GoalSettingsScreen"
import LoginScreen from "./components/LoginScreen"
import SplashScreen from "./components/SplashScreen"

const tabs = [
  { id: "homeScreen", label: "Home", icon: Home },
  { id: "activityScreen", label: "Activity", icon: Clock },
  { id: "profileScreen", label: "Profile", icon: User },
  { id: "settingsScreen", label: "Settings", icon: Settings },
]

const tabScreenIds = ["homeScreen", "activityScreen", "profileScreen", "settingsScreen"]

export default function App() {
  const [activeScreen, setActiveScreen] = useState("homeScreen")
  const [screenHistory, setScreenHistory] = useState<string[]>([])

  // Navigate to a new screen (pushes to history)
  const navigateTo = (screenId: string) => {
    setScreenHistory(prev => [...prev, activeScreen])
    setActiveScreen(screenId)
  }

  // Go back to previous screen
  const goBack = () => {
    if (screenHistory.length > 0) {
      const newHistory = [...screenHistory]
      const previousScreen = newHistory.pop()!
      setScreenHistory(newHistory)
      setActiveScreen(previousScreen)
    }
  }

  // Handle tab changes (clears history since tabs are top-level)
  const handleTabChange = (screenId: string) => {
    setScreenHistory([])
    setActiveScreen(screenId)
  }

  return (
    <div className="h-full flex flex-col bg-background overflow-hidden" style={{ maxHeight: '700px' }}>
      {activeScreen === "homeScreen" && <HomeScreen />}
      {activeScreen === "activityScreen" && <ActivityScreen />}
      {activeScreen === "profileScreen" && <ProfileScreen />}
      {activeScreen === "settingsScreen" && <SettingsScreen />}
      {activeScreen === "startRunScreen" && <StartRunScreen onBack={goBack} />}
      {activeScreen === "runDetailsScreen" && <RunDetailsScreen onBack={goBack} />}
      {activeScreen === "editProfileScreen" && <EditProfileScreen onBack={goBack} />}
      {activeScreen === "goalSettingsScreen" && <GoalSettingsScreen onBack={goBack} />}
      {activeScreen === "loginScreen" && <LoginScreen />}
      {activeScreen === "splashScreen" && <SplashScreen />}
      {tabScreenIds.includes(activeScreen) && (
        <BottomTabs tabs={tabs} activeTab={activeScreen} onTabChange={handleTabChange} />
      )}
    </div>
  )
}
