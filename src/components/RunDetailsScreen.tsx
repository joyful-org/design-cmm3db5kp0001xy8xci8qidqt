import { Header } from "./Header"
import { ContentCard, SectionHeader, StatCard, ProgressBar, ActionButton, TransactionItem } from "./core"
import { Route, Timer, Flame, TrendingUp, MapPin, Share2 } from "lucide-react"

interface RunDetailsScreenProps {
  onBack?: () => void
}

export default function RunDetailsScreen({ onBack }: RunDetailsScreenProps) {
  return (
    <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
      <Header title="Run Details" showBack onBack={onBack} />
      <main className="flex-1 min-h-0 overflow-y-auto px-4 py-4">
        <div className="space-y-6">
  <ContentCard title="Run Summary" subtitle="River Loop · Today, 7:12 AM">
    <div className="grid grid-cols-2 gap-3">
      <StatCard label="Distance" value="4.2 mi" trend="up" trendValue="+0.3" icon={<Route />} iconBg="bg-blue-100" />
      <StatCard label="Time" value="36:28" trend="neutral" trendValue="" icon={<Timer />} iconBg="bg-yellow-100" />
      <StatCard label="Avg Pace" value="8'41\"" trend="up" trendValue="-0:12" icon={<TrendingUp />} iconBg="bg-green-100" />
      <StatCard label="Calories" value="384" trend="neutral" trendValue="" icon={<Flame />} iconBg="bg-red-100" />
    </div>
  </ContentCard>

  <ContentCard title="Effort" subtitle="Heart rate zones">
    <div className="space-y-3">
      <ProgressBar value={62} max={100} label="Zone 2" showValue />
      <ProgressBar value={28} max={100} label="Zone 3" showValue variant="warning" />
      <ProgressBar value={10} max={100} label="Zone 4" showValue variant="destructive" />
    </div>
  </ContentCard>

  <SectionHeader title="Route Highlights" />
  <div className="space-y-1">
    <TransactionItem icon={<MapPin />} iconBg="bg-blue-100" title="Best Split" subtitle="Mile 3" amount="8:12" amountType="neutral" />
    <TransactionItem icon={<MapPin />} iconBg="bg-green-100" title="Elevation Gain" subtitle="Total" amount="148 ft" amountType="neutral" />
  </div>

  <div className="grid grid-cols-2 gap-3">
    <ActionButton fullWidth icon={<Share2 />} variant="secondary">Share</ActionButton>
    <ActionButton fullWidth>Save Run</ActionButton>
  </div>
</div>
      </main>
    </div>
  )
}
