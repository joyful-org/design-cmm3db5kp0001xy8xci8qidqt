import { Header } from "./Header"
import { SectionHeader, SearchBar, Chip, ContentCard, TransactionItem, Divider } from "./core"
import { Route, Calendar, MapPin, Timer } from "lucide-react"

export default function ActivityScreen() {
  return (
    <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
      <Header title="Activity Log" />
      <main className="flex-1 min-h-0 overflow-y-auto px-4 py-4">
        <div className="space-y-6">
  <SearchBar value="" onChange={() => {}} placeholder="Search runs" showFilter onFilterClick={() => {}} />

  <div className="flex gap-2 flex-wrap">
    <Chip selected onClick={() => {}}>All</Chip>
    <Chip onClick={() => {}}>This Week</Chip>
    <Chip onClick={() => {}}>5K+</Chip>
    <Chip onClick={() => {}}>Intervals</Chip>
  </div>

  <SectionHeader title="February 2026" action={{ label: "Filter", onClick: () => {} }} />
  <ContentCard noPadding>
    <TransactionItem icon={<Route />} iconBg="bg-blue-100" title="River Loop" subtitle="Thu, 7:12 AM · 4.2 mi · 8'41\"/mi" amount="36:28" amountType="neutral" status="completed" />
    <Divider />
    <TransactionItem icon={<Route />} iconBg="bg-green-100" title="Park Intervals" subtitle="Tue, 6:40 AM · 3.0 mi · 8'03\"/mi" amount="24:10" amountType="neutral" status="completed" />
    <Divider />
    <TransactionItem icon={<Route />} iconBg="bg-yellow-100" title="Easy Recovery" subtitle="Sun, 5:52 PM · 2.1 mi · 9'18\"/mi" amount="19:34" amountType="neutral" status="completed" />
  </ContentCard>

  <ContentCard title="Route Highlights" subtitle="Your most frequent trails">
    <div className="space-y-2">
      <TransactionItem icon={<MapPin />} iconBg="bg-blue-100" title="Lakeside Path" subtitle="8 runs · Avg 4.1 mi" amount="34:52" amountType="neutral" />
      <TransactionItem icon={<MapPin />} iconBg="bg-green-100" title="Downtown Loop" subtitle="5 runs · Avg 3.2 mi" amount="27:10" amountType="neutral" />
      <TransactionItem icon={<Timer />} iconBg="bg-yellow-100" title="Speed Track" subtitle="3 runs · Avg pace 7'55\"" amount="22:08" amountType="neutral" />
    </div>
  </ContentCard>
</div>
      </main>
    </div>
  )
}
