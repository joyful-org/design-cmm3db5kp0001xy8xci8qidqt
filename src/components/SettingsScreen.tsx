import { Header } from "./Header"
import { SectionHeader, ContentCard, ListItem, Divider, ToggleSwitch, ActionCard } from "./core"
import { Bell, MapPin, Shield, BatteryCharging, Smartphone } from "lucide-react"

export default function SettingsScreen() {
  return (
    <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
      <Header title="Settings" />
      <main className="flex-1 min-h-0 overflow-y-auto px-4 py-4">
        <div className="space-y-6">
  <SectionHeader title="App Preferences" />
  <ContentCard noPadding>
    <ListItem icon={<Bell />} title="Push Notifications" rightElement="switch" switchChecked={true} onSwitchChange={() => {}} />
    <Divider />
    <ListItem icon={<MapPin />} title="Location Services" subtitle="Required for tracking" rightElement="value" rightValue="Always" />
    <Divider />
    <ListItem icon={<BatteryCharging />} title="Low Power Mode" rightElement="switch" switchChecked={false} onSwitchChange={() => {}} />
  </ContentCard>

  <SectionHeader title="Privacy" />
  <ContentCard noPadding>
    <ListItem icon={<Shield />} title="Data Sharing" rightElement="value" rightValue="Limited" />
    <Divider />
    <ListItem icon={<Smartphone />} title="Connected Devices" rightElement="chevron" onClick={() => {}} />
  </ContentCard>

  <ActionCard
    icon={<Bell />}
    iconBg="bg-purple-100"
    title="Weekly Summary"
    description="Get a digest of your miles and milestones every Monday."
    primaryAction={{ label: "Enable", onClick: () => {} }}
    secondaryAction={{ label: "Not Now", onClick: () => {} }}
  />
</div>
      </main>
    </div>
  )
}
