import { Header } from "./Header"
import { ProfileCard, SectionHeader, ContentCard, ListItem, Divider, StatCard, ToggleSwitch } from "./core"
import { Bell, Lock, Route, Timer, Flame, User } from "lucide-react"

export default function ProfileScreen() {
  return (
    <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
      <Header title="User Profile" />
      <main className="flex-1 min-h-0 overflow-y-auto px-4 py-4">
        <div className="space-y-6">
  <ProfileCard
    avatar="/runner.jpg"
    name="Jordan Lee"
    username="@jlee.run"
    bio="Chasing sunrise miles and steady progress."
    stats={[
      { label: "Runs", value: "128" },
      { label: "Distance", value: "512 mi" },
      { label: "PR 5K", value: "22:18" }
    ]}
    primaryAction={{ label: "Edit Profile", onClick: () => {} }}
    secondaryAction={{ label: "Share", onClick: () => {} }}
  />

  <SectionHeader title="Stats" />
  <div className="grid grid-cols-2 gap-3">
    <StatCard label="Avg Pace" value="8'42\"" trend="up" trendValue="-0:08" icon={<Timer />} iconBg="bg-yellow-100" />
    <StatCard label="Total Distance" value="512 mi" trend="up" trendValue="+24" icon={<Route />} iconBg="bg-blue-100" />
    <StatCard label="Calories" value="32.4K" trend="up" trendValue="+1.1K" icon={<Flame />} iconBg="bg-red-100" />
    <StatCard label="Longest Run" value="12.4 mi" trend="neutral" trendValue="This month" icon={<Route />} iconBg="bg-green-100" />
  </div>

  <SectionHeader title="Preferences" />
  <ContentCard noPadding>
    <ListItem icon={<Bell />} title="Run Reminders" rightElement="switch" switchChecked={true} onSwitchChange={() => {}} />
    <Divider />
    <ListItem icon={<Lock />} title="Private Activity" subtitle="Hide runs from followers" rightElement="switch" switchChecked={false} onSwitchChange={() => {}} />
    <Divider />
    <ListItem icon={<User />} title="Profile Visibility" rightElement="value" rightValue="Friends" />
  </ContentCard>
</div>
      </main>
    </div>
  )
}
