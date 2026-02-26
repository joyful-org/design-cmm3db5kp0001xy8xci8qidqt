import { Header } from "./Header"
import { BalanceCard, SectionHeader, StatCard, QuickAction, TransactionItem, ContentCard, ProgressBar } from "./core"
import { Play, Route, Timer, Flame, TrendingUp, MapPin } from "lucide-react"

export default function HomeScreen() {
  return (
    <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
      <Header title="Dashboard" />
      <main className="flex-1 min-h-0 overflow-y-auto px-4 py-4">
        <div className="space-y-6">
  <BalanceCard
    label="Weekly Distance"
    amount="24.6"
    currency="mi"
    change="+12% vs last week"
    changeType="positive"
    actions={[{ icon: <Play />, label: "Start Run", onClick: () => {} }]}
  />

  <div className="grid grid-cols-4 gap-2">
    <QuickAction icon={<Play />} label="Run" onClick={() => {}} variant="primary" />
    <QuickAction icon={<Route />} label="Routes" onClick={() => {}} />
    <QuickAction icon={<Timer />} label="Intervals" onClick={() => {}} />
    <QuickAction icon={<MapPin />} label="Nearby" onClick={() => {}} />
  </div>

  <div className="grid grid-cols-2 gap-3">
    <StatCard label="Total Distance" value="128.4 mi" trend="up" trendValue="+6.2%" icon={<Route />} iconBg="bg-blue-100" />
    <StatCard label="Active Days" value="4" trend="neutral" trendValue="This week" icon={<TrendingUp />} iconBg="bg-green-100" />
    <StatCard label="Avg Pace" value="8'42\"" trend="down" trendValue="-0:10" icon={<Timer />} iconBg="bg-yellow-100" />
    <StatCard label="Calories" value="2,140" trend="up" trendValue="+180" icon={<Flame />} iconBg="bg-red-100" />
  </div>

  <ContentCard title="Weekly Goal" subtitle="30 mi target">
    <div className="space-y-3">
      <ProgressBar value={82} max={100} label="24.6 of 30 mi" showValue variant="success" />
      <div className="text-sm text-muted-foreground">2 more runs to hit your goal</div>
    </div>
  </ContentCard>

  <SectionHeader title="Recent Runs" action={{ label: "See All", onClick: () => {} }} />
  <div className="space-y-1">
    <TransactionItem icon={<Route />} iconBg="bg-blue-100" title="River Loop" subtitle="Today, 7:12 AM · 4.2 mi" amount="36:28" amountType="neutral" status="completed" />
    <TransactionItem icon={<Route />} iconBg="bg-green-100" title="Park Intervals" subtitle="Tue, 6:40 AM · 3.0 mi" amount="24:10" amountType="neutral" status="completed" />
    <TransactionItem icon={<Route />} iconBg="bg-yellow-100" title="Easy Recovery" subtitle="Sun, 5:52 PM · 2.1 mi" amount="19:34" amountType="neutral" status="completed" />
  </div>
</div>
      </main>
    </div>
  )
}
