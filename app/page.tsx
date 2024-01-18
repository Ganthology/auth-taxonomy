import Link from "next/link"
import { Key } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-16 items-center border-b px-4 md:px-6">
        <Link
          className="mr-4 flex items-center gap-2 text-lg font-semibold sm:text-base"
          href="#"
        >
          <Key className="size-6" strokeWidth={3} />
          <span>Auth Taxonomy</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#"
          >
            Documentation
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#"
          >
            Register
          </Link>
        </nav>
      </header>
      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Explore Authentication Solutions
          </h1>
          <p className="mt-4 max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I am building a Next.js app integrating with different
            auth-solutions just to build and learn the differences between them.
            Start by clicking on of the cards below.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Traditional JWT</CardTitle>
              </CardHeader>
              <CardContent>
                Implement JSON Web Tokens for stateless, secure exchanges.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Magic Link</CardTitle>
              </CardHeader>
              <CardContent>
                Use Magic Link for passwordless and secure authentication.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Session</CardTitle>
              </CardHeader>
              <CardContent>
                Utilize session IDs for a simple, time-tested solution.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Supabase</CardTitle>
              </CardHeader>
              <CardContent>
                Use Supabase for a comprehensive and scalable auth solution.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>NextAuth</CardTitle>
              </CardHeader>
              <CardContent>
                Implement NextAuth for easy integration with Next.js
                applications.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Auth0</CardTitle>
              </CardHeader>
              <CardContent>
                Use Auth0 for a flexible, drop-in solution to add authentication
                and authorization services to your applications.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Clerk.dev</CardTitle>
              </CardHeader>
              <CardContent>
                Use Clerk.dev for user management and authentication for modern
                applications.
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <footer className="flex h-16 items-center border-t px-4 md:px-6">
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#"
          >
            Privacy Policy
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#"
          >
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  )
}
