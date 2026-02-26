import { ScreenHeader, FormField, ActionButton, Divider, ContentCard } from "./core"
import { Mail, Lock, UserPlus } from "lucide-react"

export default function LoginScreen() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col h-full">
  <ScreenHeader title="Welcome Back" subtitle="Log in to continue" transparent centered />
  <div className="flex-1 overflow-y-auto p-4">
    <div className="space-y-6">
      <ContentCard>
        <div className="space-y-4">
          <FormField label="Email" required>
            <div className="flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2">
              <Mail className="text-muted-foreground" />
              <input type="email" placeholder="you@email.com" className="w-full bg-transparent text-foreground outline-none" />
            </div>
          </FormField>
          <FormField label="Password" required>
            <div className="flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2">
              <Lock className="text-muted-foreground" />
              <input type="password" placeholder="••••••••" className="w-full bg-transparent text-foreground outline-none" />
            </div>
          </FormField>
          <ActionButton fullWidth>Log In</ActionButton>
          <ActionButton fullWidth variant="ghost">Forgot Password</ActionButton>
        </div>
      </ContentCard>

      <Divider label="OR" />

      <ActionButton fullWidth variant="secondary" icon={<UserPlus />}>Create New Account</ActionButton>
    </div>
  </div>
</div>
    </div>
  )
}
