import { Header } from "./Header"
import { ContentCard, SectionHeader, AmountInput, ToggleSwitch, ActionButton, ProgressBar, Chip } from "./core"
import { Target, Timer, Route } from "lucide-react"

interface GoalSettingsScreenProps {
  onBack?: () => void
}

export default function GoalSettingsScreen({ onBack }: GoalSettingsScreenProps) {
  return (
    <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
      <Header title="Running Goals" showBack onBack={onBack} />
      <main className="flex-1 min-h-0 overflow-y-auto px-4 py-4">
        <div className="space-y-6">
  <ContentCard title="Weekly Targets" subtitle="Set your running goals">
    <div className="space-y-4">
      <AmountInput value="30" onChange={() => {}} label="Distance" currency="MI" currencySymbol="" />
      <AmountInput value="150" onChange={() => {}} label="Duration" currency="MIN" currencySymbol="" />
    </div>
  </ContentCard>

  <ContentCard title="Goal Style">
    <div className="flex gap-2 flex-wrap">
      <Chip selected onClick={() => {}}>Consistency</Chip>
      <Chip onClick={() => {}}>Speed</Chip>
      <Chip onClick={() => {}}>Endurance</Chip>
      <Chip onClick={() => {}}>Recovery</Chip>
    </div>
  </ContentCard>

  <ContentCard title="Current Progress" subtitle="This week so far">
    <div className="space-y-3">
      <ProgressBar value={24.6} max={30} label="Distance" showValue />
      <ProgressBar value={96} max={150} label="Duration" showValue variant="success" />
    </div>
  </ContentCard>

  <SectionHeader title="Smart Goals" />
  <ContentCard noPadding>
    <ToggleSwitch checked={true} onCheckedChange={() => {}} label="Auto-adjust goals" description="Increase targets when you consistently hit them" />
  </ContentCard>

  <ActionButton fullWidth icon={<Target />}>Update Goals</ActionButton>
</div>
      </main>
    </div>
  )
}
