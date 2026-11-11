"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const INTERVAL_MS = 4000
const FADE_MS = 1000

const artworkImages = [
  "/images/pricing-tree-lantern.jpg",
  "/images/pricing-tree-lake-morning.jpg",
  "/images/pricing-tree-sunset-reflection.jpg",
  "/images/pricing-tree-snow.jpg",
  "/images/pricing-tree-sunset-birds.jpg",
]

export function PricingArtworkSlideshow({ alt }: { alt: string }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [previousIndex, setPreviousIndex] = useState<number | null>(null)
  const previousRef = useRef(0)

  useEffect(() => {
    if (artworkImages.length < 2) return

    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    let interval: number | undefined

    const stop = () => {
      if (interval !== undefined) {
        window.clearInterval(interval)
        interval = undefined
      }
    }

    const start = () => {
      stop()
      interval = window.setInterval(() => {
        setActiveIndex((current) => (current + 1) % artworkImages.length)
      }, INTERVAL_MS)
    }

    const apply = () => {
      if (media.matches) stop()
      else start()
    }

    apply()
    media.addEventListener("change", apply)

    return () => {
      stop()
      media.removeEventListener("change", apply)
    }
  }, [])

  useEffect(() => {
    if (activeIndex === previousRef.current) return

    const outgoing = previousRef.current
    previousRef.current = activeIndex
    setPreviousIndex(outgoing)

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPreviousIndex(null)
      return
    }

    const timeout = window.setTimeout(() => {
      setPreviousIndex((current) => (current === outgoing ? null : current))
    }, FADE_MS)

    return () => window.clearTimeout(timeout)
  }, [activeIndex])

  return (
    <div className="absolute inset-0">
      {artworkImages.map((src, index) => {
        const isActive = index === activeIndex
        const isPrevious = index === previousIndex

        return (
          <div
            key={src}
            className={`absolute inset-0 motion-reduce:transition-none motion-safe:transition-opacity motion-safe:duration-1000 motion-safe:ease-in-out ${
              isActive || isPrevious ? "opacity-100" : "opacity-0"
            }`}
            style={{ zIndex: isActive ? 1 : 0 }}
            aria-hidden={isActive ? undefined : true}
          >
            <Image
              src={src}
              alt={isActive && index === 0 ? alt : ""}
              fill
              priority={index === 0}
              loading="eager"
              sizes="(min-width: 1024px) 440px, (min-width: 640px) 440px, calc(100vw - 72px)"
              className="object-cover"
            />
          </div>
        )
      })}
    </div>
  )
}
