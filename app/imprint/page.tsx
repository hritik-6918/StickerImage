import { ArrowLeft } from "@/components/Icons"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  metadataBase: new URL("https://stickerimage.com"),
  title: "Imprint - StickerImage",
  description: "Imprint for stickerimage.com",
  openGraph: {
    images: "/images/stickerimage-og.jpg",
  },
  robots: "noindex",
}

export default function Imprint() {
  return (
    <main className="w-full min-h-screen flex items-start pt-[12vw] justify-center overflow-x-hidden px-4">
      <div className="mx-auto md:max-w-sm pb-4">
        <Link
          href="/"
          className="mb-6 font-medium hover:underline underline-offset-2 flex items-center"
        >
          <ArrowLeft size={20} className="inline-block mr-3" />
          Back to Home
        </Link>
        <h2 className="font-semibold mb-4">
          Information
        </h2>
        <p className="mb-4">
          Hritik Kumar<br />
          Kolkata <br />
          India <br />
        </p>
        <p className="text-zinc-500 mb-12">
          Please only contact me via{" "}
          <Link
            href="mailto:hritikkumar09grd@gmail.com"
            className="text-black font-medium underline underline-offset-2 hover:no-underline"
          >
            hritikkumar09grd@gmail.com
          </Link>
          .
        </p>
      
      </div>
    </main>
  )
}
