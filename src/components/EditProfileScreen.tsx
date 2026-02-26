import { Header } from "./Header"
import { ContentCard, FormField, TextArea, ActionButton, SectionHeader, Avatar } from "./core"
import { Camera } from "lucide-react"

interface EditProfileScreenProps {
  onBack?: () => void
}

export default function EditProfileScreen({ onBack }: EditProfileScreenProps) {
  return (
    <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
      <Header title="Edit Profile" showBack onBack={onBack} />
      <main className="flex-1 min-h-0 overflow-y-auto px-4 py-4">
        <div className="space-y-6">
  <ContentCard title="Profile Photo" subtitle="Tap to update">
    <div className="flex items-center gap-4">
      <Avatar src="/runner.jpg" alt="Jordan Lee" size="xl" />
      <ActionButton icon={<Camera />} variant="secondary">Change Photo</ActionButton>
    </div>
  </ContentCard>

  <ContentCard title="Basic Info">
    <div className="space-y-4">
      <FormField label="Full Name" required>
        <input type="text" defaultValue="Jordan Lee" className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground" />
      </FormField>
      <FormField label="Username">
        <input type="text" defaultValue="@jlee.run" className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground" />
      </FormField>
      <TextArea label="Bio" placeholder="Tell us about your running goals" rows={3} />
    </div>
  </ContentCard>

  <SectionHeader title="Goals" />
  <ContentCard>
    <div className="space-y-4">
      <FormField label="Weekly Distance">
        <input type="text" defaultValue="30 mi" className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground" />
      </FormField>
      <FormField label="Target Pace">
        <input type="text" defaultValue="8'30\" / mi" className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground" />
      </FormField>
    </div>
  </ContentCard>

  <ActionButton fullWidth>Save Changes</ActionButton>
</div>
      </main>
    </div>
  )
}
