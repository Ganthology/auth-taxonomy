"use client"

import Link from "next/link"

import { InfoCard } from "@/components/InfoCard"
import { Navbar } from "@/components/navigation/Navbar"

const AuthInfoOptions = [
  {
    title: "JWT (JSON Web Token)",
    description: "Implement JSON Web Tokens for stateless, secure exchanges.",
    destination: "/jwt",
  },
  {
    title: "Magic Link",
    description: "Use Magic Link for passwordless and secure authentication.",
    disabled: true,
  },
  {
    title: "Session-Based",
    description: "Utilize session IDs for a simple, time-tested solution.",
    disabled: true,
  },
  {
    title: "NextAuth",
    description:
      "Implement NextAuth for easy integration with Next.js applications.",
    disabled: true,
  },
  {
    title: "Clerk.dev",
    description:
      "Use Clerk.dev for user management and authentication for modern applications.",
    disabled: true,
  },
  {
    title: "Supabase",
    description: "Use Supabase for a comprehensive and scalable auth solution.",
    disabled: true,
  },
  {
    title: "Auth0",
    description:
      "Use Auth0 for a flexible, drop-in solution to add authentication and authorization services to your applications.",
    disabled: true,
  },
]

export default function Homepage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Explore Authentication Solutions
          </h1>
          <p className="mt-4 max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I am building a Next.js app integrating different auth-solutions,
            just to build and learn the differences between them. Start by
            clicking on one of the cards below.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {AuthInfoOptions.map((option) => (
              <InfoCard
                key={option.title}
                title={option.title}
                description={option.description}
                destination={option.destination}
                disabled={option.disabled}
              />
            ))}
          </div>

          <div className="mt-12 md:mt-24 lg:mt-32">
            <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl/none">
              Proudly Open Source
            </h2>
            <p className="mt-4 max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Auth Taxonomy is open source and powered by open source software.
              The code is available on{" "}
              <Link
                href="https://github.com/Ganthology/auth-taxonomy"
                className="underline underline-offset-4"
              >
                Github
              </Link>
              .
            </p>
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
