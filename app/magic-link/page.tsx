import { MagicLinkForm } from "@/components/form/magic-link"
import { Navbar } from "@/components/navigation/Navbar"

export default function JWTPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container space-y-4 px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Magic Link
          </h1>
          <div className="max-w-[60%] rounded-lg border p-6">
            <MagicLinkForm />
          </div>
        </div>
      </main>
    </div>
  )
}
