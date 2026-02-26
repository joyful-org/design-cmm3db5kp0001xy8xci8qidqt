import { ScreenHeader, LoadingState, ActionButton } from "./core"
import { Route } from "lucide-react"

export default function SplashScreen() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col h-full">
  <ScreenHeader title="RunTracker" subtitle="Track every mile" transparent centered />
  <div className="flex-1 flex flex-col items-center justify-center gap-6 p-4">
    <div className="flex items-center justify-center h-24 w-24 rounded-2xl bg-muted">
      <Route className="h-10 w-10 text-foreground" />
    </div>
    <div className="text-center">
      <div className="text-xl font-semibold text-foreground">Welcome to RunTracker</div>
      <div className="text-sm text-muted-foreground">Find your pace and keep your streak alive</div>
    </div>
    <LoadingState variant="dots" />
    <ActionButton fullWidth>Get Started</ActionButton>
  </div>
</div>
    </div>
  )
}
