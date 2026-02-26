import { Header } from "./Header"
import { SectionHeader, ContentCard, ListItem, Divider, AmountInput, ActionButton, Chip, QuickAction } from "./core"
import { Route, Timer, MapPin, Target, Play } from "lucide-react"

interface StartRunScreenProps {
  onBack?: () => void
}

export default function StartRunScreen({ onBack }: StartRunScreenProps) {
  return (
    <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
      <Header title="Start New Run" showBack onBack={onBack} />
      <main className="flex-1 min-h-0 overflow-y-auto px-4 py-4">
        <div className="space-y-6">
  <ContentCard title="Quick Start" subtitle="Tap to begin immediately">
    <ActionButton fullWidth icon={<Play />}>Start Run</ActionButton>
  </ContentCard>

  <SectionHeader title="Set Goal" />
  <div className="space-y-4">
    <AmountInput value="5" onChange={() => {}} label="Distance" currency="MI" currencySymbol="" />
    <AmountInput value="45" onChange={() => {}} label="Time" currency="MIN" currencySymbol="" />
  </div>

  <SectionHeader title="Route Options" />
  <ContentCard noPadding>
    <ListItem icon={<Route />} title="Lakeside Path" subtitle="4.1 mi · Flat" rightElement="chevron" onClick={() => {}} />
    <Divider />
    <ListItem icon={<MapPin />} title="Create New Route" subtitle="Plan with map" rightElement="chevron" onClick={() => {}} />
    <Divider />
    <ListItem icon={<Timer />} title="Intervals" subtitle="Warm-up + 6x400m" rightElement="chevron" onClick={() => {}} />
  </ContentCard>

  <SectionHeader title="Focus" />
  <div className="flex gap-2 flex-wrap">
    <Chip selected onClick={() => {}}>Easy</Chip>
    <Chip onClick={() => {}}>Tempo</Chip>
    <Chip onClick={() => {}}>Hills</Chip>
    <Chip onClick={() => {}}>Recovery</Chip>
  </div>
</div>
      </main>
    </div>
  )
}
