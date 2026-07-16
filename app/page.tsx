"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useSearchParams } from "next/navigation"
import { Suspense, useEffect, useState } from "react"
import { Sun, Coffee, Moon, Mail } from "lucide-react"

// i18n content
const i18n = {
  zh: {
    nav: [
      { label: "特色", href: "#what" },
      { label: "每日相遇", href: "#slot" },
      { label: "閱讀模式", href: "#mode" },
      { label: "年輪", href: "#rings" },
      { label: "小組件", href: "#widget" },
      { label: "節奏", href: "#rhythm" },
    ],
    hero: {
      title: "獨木成林",
      subtitle: "讓每一天都值得記錄",
      tagline: "願我們每個人都能成為更豐富的自己。",
      download: "ios 下载",
      login: "Web/Android",
    },
    what: {
      cards: [
        {
          title: "視覺，重新觀看世界",
          description: "我們偏愛那些先打動你、再被你理解的作品 ——觸動，比任何流派定義都先抵達。",
        },
        {
          title: "文字，拓寬認知邊界",
          description: "一段歌曲、一首譯詩、一個答案—— 未來的某個傍晚你也許會忽然記起。",
        },
        {
          title: "時間，人在世間為客",
          description: "世界各地曾經發生過的 —— 那些閃閃發光的日子，和閃閃發光的人。",
        },
      ],
    },
    slot: {
      title: "微風吹來的四片葉子",
      slots: [
        { label: "A", title: "感性", subtitle: "Sensory", description: "一幅畫、一段音樂，先於解釋而抵達。" },
        { label: "B", title: "文化", subtitle: "Culture", description: "一部電影，一首詩歌，點綴你的今天。" },
        { label: "C", title: "知識", subtitle: "Knowledge", description: "一個不必背誦、卻願意記住的小事。" },
        { label: "D", title: "驚喜", subtitle: "Serendipity", description: "一個你不會主動尋找、卻恰好遇見的Hi。" },
      ],
    },
    mode: {
      title: "沉浸，\n或退後一步。",
      subtitle: "沉浸於畫作之中，或以畫廊視角品味",
      immersive: "沉浸模式",
      canvas: "畫廊模式",
    },
    rings: {
      title: "堅持，是一種被看見的耐心",
      description:
        "一年 365 天，樹木也會多一圈。年輪是時間留下的溫柔印記，見證你與自己相處的耐心。",
      note: "年輪勳章——刻錄生長的痕跡。",
    },
    widget: {
      title: "在鎖屏遇見今天",
      subtitle: "三種尺寸的小組件，讓藝術自然融入你的日常",
    },
    rhythm: {
      title: "與你的節奏同步",
      subtitle: "三個時段，三次輕盈的相遇",
      slots: [
        { en: "MORNING", zh: "早晨" },
        { en: "NOON", zh: "午間" },
        { en: "EVENING", zh: "夜晚" },
      ],
    },
    footer: {
      privacy: "隱私政策",
      terms: "服務條款",
      copyright: "© {year} 合肥阿博木科技有限公司 版權所有",
    },
    langSwitch: "EN",
  },
  en: {
    nav: [
      { label: "Features", href: "#what" },
      { label: "Daily", href: "#slot" },
      { label: "Modes", href: "#mode" },
      { label: "Rings", href: "#rings" },
      { label: "Widget", href: "#widget" },
      { label: "Rhythm", href: "#rhythm" },
    ],
    hero: {
      title: "Banyan Forest",
      subtitle: "Make every day worth remembering",
      tagline: "May each of us become a richer self.",
      download: "iOS Download",
      login: "Web/Android",
    },
    what: {
      cards: [
        {
          title: "Vision, see the world anew",
          description:
            "We favor works that move you first, and are understood later — the touch arrives before any genre definition.",
        },
        {
          title: "Words, expand the boundaries of thought",
          description:
            "A song, a translated poem, an answer — on some future evening, you may suddenly remember.",
        },
        {
          title: "Time, a guest in this world",
          description:
            "What once happened across the world — those luminous days, and luminous people.",
        },
      ],
    },
    slot: {
      title: "Four leaves carried in by the breeze",
      slots: [
        { label: "A", title: "Sensory", subtitle: "感性", description: "A painting, a piece of music — arriving before explanation." },
        { label: "B", title: "Culture", subtitle: "文化", description: "A film, a poem — adorning your today." },
        { label: "C", title: "Knowledge", subtitle: "知識", description: "A small thing you don't need to memorize, yet are willing to remember." },
        { label: "D", title: "Serendipity", subtitle: "驚喜", description: "A Hi you wouldn't have sought, yet happen to meet." },
      ],
    },
    mode: {
      title: "Immerse,\nor step back.",
      subtitle: "Lose yourself in the work, or savor it from a gallery's distance.",
      immersive: "Immersive Mode",
      canvas: "Canvas Mode",
    },
    rings: {
      title: "Persistence is patience made visible",
      description:
        "365 days a year, a tree gains another ring. The rings are time's gentle imprint, witnessing the patience of being with yourself.",
      note: "Annual Ring Badge — engraving the traces of growth.",
    },
    widget: {
      title: "Meet today on your lock screen",
      subtitle: "Three widget sizes, letting art naturally blend into your daily life",
    },
    rhythm: {
      title: "In sync with your rhythm",
      subtitle: "Three moments, three light encounters",
      slots: [
        { en: "MORNING", zh: "Morning" },
        { en: "NOON", zh: "Noon" },
        { en: "EVENING", zh: "Evening" },
      ],
    },
    footer: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      copyright: "© {year} Hefei Arbormu Technology Co., Ltd. All rights reserved.",
    },
    langSwitch: "中文",
  },
}

type Lang = "zh" | "en"

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// Breathing animation for sprout
const breathe = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
}

// Header Component (sticky top nav)
function Header({ lang }: { lang: Lang }) {
  const t = i18n[lang]
  const targetLang = lang === "zh" ? "en" : "zh"
  const brandName = lang === "zh" ? "獨木成林" : "Banyan Forest"

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(12,12,14,0.7)] backdrop-blur-md border-b border-[rgba(245,242,236,0.06)]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        {/* Brand */}
        <a href="#top" className="flex items-center gap-3 shrink-0 group">
          <Image
            src="/images/icon-1024.png"
            alt=""
            width={28}
            height={28}
            className="w-7 h-7 rounded-lg"
          />
          <span className="font-sans text-base font-medium text-[#F5F2EC] group-hover:text-[#81C784] transition-colors">
            {brandName}
          </span>
        </a>

        {/* Nav links (hidden on small screens) */}
        <nav className="hidden md:flex items-center gap-7">
          {t.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[rgba(245,242,236,0.65)] font-sans text-sm hover:text-[#81C784] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Language switcher */}
        <Link
          href={`/?lang=${targetLang}`}
          className="shrink-0 px-3.5 py-1.5 border border-[rgba(245,242,236,0.15)] rounded-full text-[#F5F2EC] font-sans text-xs hover:border-[#81C784] hover:text-[#81C784] transition-colors"
        >
          {t.langSwitch}
        </Link>
      </div>
    </header>
  )
}

// Hero Section
function HeroSection({ lang }: { lang: Lang }) {
  const t = i18n[lang].hero
  const loginHref = "https://dmcl.arborm.co"

  return (
    <section id="top" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-16">
      {/* App Icon */}
      <motion.div animate={breathe} className="mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/icon-1024.png"
            alt="獨木成林"
            width={160}
            height={160}
            className="w-32 h-32 md:w-40 md:h-40 rounded-[28px] shadow-lg"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="font-serif text-4xl md:text-6xl tracking-wider mb-4 text-center text-balance"
      >
        {t.title}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-[rgba(245,242,236,0.8)] text-lg md:text-xl mb-4 text-center font-serif"
      >
        {t.subtitle}
      </motion.p>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-[rgba(245,242,236,0.5)] text-base md:text-lg mb-12 text-center font-serif"
      >
        {t.tagline}
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-3"
      >
        <a
          href="/download"
          className="w-[170px] px-6 py-3 bg-[#81C784] text-[#0C0C0E] rounded-[16px] font-sans text-sm font-medium hover:bg-[#9CCC9F] transition-colors duration-300 text-center inline-block"
        >
          {t.download}
        </a>
        <a
          href={loginHref}
          className="w-[170px] px-6 py-3 bg-[#E09088] text-[#0C0C0E] rounded-[16px] font-sans text-sm font-medium hover:bg-[#E89F97] transition-colors duration-300 text-center inline-block"
        >
          {t.login}
        </a>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-[rgba(245,242,236,0.4)]"
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  )
}

// What Section
function WhatSection({ lang }: { lang: Lang }) {
  const t = i18n[lang].what
  const images = [
    "/images/what-visual-screenshot.png",
    "/images/what-text-screenshot.png",
    "/images/what-time-screenshot.png",
  ]

  return (
    <section id="what" className="py-32 px-6 bg-[#1A1A1D] scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          {t.cards.map((card, index) => (
            <motion.div key={index} variants={fadeInUp} transition={{ duration: 0.8 }} className="group">
              <div className="relative mx-auto mb-8 w-[240px] aspect-[1206/2622] bg-[#0C0C0E] rounded-[36px] p-2 shadow-2xl transition-transform duration-500 group-hover:-translate-y-1">
                <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-[#1A1A1D]">
                  <Image
                    src={images[index]}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="240px"
                  />
                </div>
              </div>
              <h3 className="font-serif text-xl mb-4 text-[#F5F2EC]">{card.title}</h3>
              <p className="text-[rgba(245,242,236,0.6)] font-serif leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Slot Grid Section
function SlotSection({ lang }: { lang: Lang }) {
  const t = i18n[lang].slot
  const images = [
    "/images/slot-sensory-monet-low-tide.jpg",
    "/images/slot-culture-daisy-lantern.jpg",
    "/images/slot-knowledge-deep-space.jpg",
    "/images/slot-surprise-flamenco.jpg",
  ]

  return (
    <section id="slot" className="py-32 px-6 bg-[#161619] scroll-mt-16">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-3xl md:text-4xl text-center mb-16 text-balance"
        >
          {t.title}
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {t.slots.map((slot, index) => (
            <motion.div
              key={slot.label}
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(129, 199, 132, 0.15)" }}
              className="relative bg-[#1A1A1D] rounded-[16px] p-6 overflow-hidden group cursor-default"
            >
              {/* Background image */}
              <div className="absolute inset-0 opacity-75 group-hover:opacity-90 transition-opacity duration-500">
                <Image src={images[index]} alt="" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
              </div>
              <div className="absolute inset-y-0 left-0 w-[82%] bg-gradient-to-r from-[rgba(12,12,14,0.82)] via-[rgba(12,12,14,0.56)] to-transparent" />

              {/* Content */}
              <div className="relative z-10">
                <span className="inline-block px-2 py-1 bg-[rgba(129,199,132,0.2)] text-[#81C784] text-xs font-sans rounded mb-4">
                  {slot.label}
                </span>
                <h3 className="font-serif text-2xl mb-1 text-[#F5F2EC]">{slot.title}</h3>
                <p className="text-[rgba(245,242,236,0.5)] text-sm font-sans mb-3">{slot.subtitle}</p>
                <p className="text-[rgba(245,242,236,0.7)] font-serif text-sm">{slot.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Mode Comparison Section
function ModeSection({ lang }: { lang: Lang }) {
  const t = i18n[lang].mode
  const modeSlides = [
    {
      immersive: "/images/mode-immersive-screenshot.png",
      gallery: "/images/mode-gallery-screenshot.png",
    },
    {
      immersive: "/images/mode-immersive-window.png",
      gallery: "/images/mode-gallery-window.png",
    },
    {
      immersive: "/images/mode-immersive-lotus.png",
      gallery: "/images/mode-gallery-lotus.png",
    },
  ]
  const [activeMode, setActiveMode] = useState(0)
  const modeSlide = modeSlides[activeMode]

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveMode((current) => (current + 1) % modeSlides.length)
    }, 2000)

    return () => window.clearInterval(interval)
  }, [modeSlides.length])

  return (
    <section id="mode" className="py-32 px-6 bg-[#1A1A1D] scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-3xl md:text-4xl text-center mb-6 text-balance whitespace-pre-line"
        >
          {t.title}
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[rgba(245,242,236,0.6)] text-center font-serif mb-16 max-w-xl mx-auto"
        >
          {t.subtitle}
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
        >
          {/* Immersive Mode */}
          <motion.div variants={fadeInUp} transition={{ duration: 0.8 }} className="flex flex-col items-center">
            <div className="relative w-[280px] h-[590px] bg-[#0C0C0E] rounded-[40px] p-2 shadow-2xl mb-8">
              <div className="relative w-full h-full rounded-[32px] overflow-hidden">
                <motion.div
                  key={`immersive-${modeSlide.immersive}`}
                  initial={{ opacity: 0, scale: 1.01 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={modeSlide.immersive}
                    alt={t.immersive}
                    fill
                    className="object-cover"
                    sizes="280px"
                  />
                </motion.div>
              </div>
            </div>
            <h3 className="font-serif text-xl mb-2 text-[#F5F2EC]">{t.immersive}</h3>
            <p className="text-[rgba(245,242,236,0.5)] text-sm font-sans">Immersive</p>
          </motion.div>

          {/* Canvas Mode */}
          <motion.div variants={fadeInUp} transition={{ duration: 0.8 }} className="flex flex-col items-center">
            <div className="relative w-[280px] h-[590px] bg-[#0C0C0E] rounded-[40px] p-2 shadow-2xl mb-8">
              <div className="relative w-full h-full rounded-[32px] overflow-hidden">
                <motion.div
                  key={`gallery-${modeSlide.gallery}`}
                  initial={{ opacity: 0, scale: 1.01 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={modeSlide.gallery}
                    alt={t.canvas}
                    fill
                    className="object-cover"
                    sizes="280px"
                  />
                </motion.div>
              </div>
            </div>
            <h3 className="font-serif text-xl mb-2 text-[#F5F2EC]">{t.canvas}</h3>
            <p className="text-[rgba(245,242,236,0.5)] text-sm font-sans">Canvas</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Annual Rings Section
function RingsSection({ lang }: { lang: Lang }) {
  const t = i18n[lang].rings
  const [ringCount, setRingCount] = useState(1)

  useEffect(() => {
    let frame = 0
    let startedAt = performance.now()
    const duration = 5200
    const loopDuration = 6000

    const tick = (now: number) => {
      const elapsed = (now - startedAt) % loopDuration
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)

      setRingCount(Math.max(1, Math.round(1 + eased * 364)))

      if (elapsed + 16 >= loopDuration) {
        startedAt = now
      }

      frame = window.requestAnimationFrame(tick)
    }

    frame = window.requestAnimationFrame(tick)

    return () => window.cancelAnimationFrame(frame)
  }, [])

  return (
    <section id="rings" className="py-32 px-6 bg-[#161619] scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* SVG Rings */}
          <motion.div variants={fadeInUp} transition={{ duration: 0.8 }} className="flex justify-center">
            <svg
              className="w-64 h-64 md:w-80 md:h-80"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {[1, 2, 3, 4, 5, 6].map((ring, index) => {
                const radius = 20 + index * 14
                const appearAt = [0.04, 0.22, 0.4, 0.52, 0.64, 0.76][index]
                return (
                  <motion.circle
                    key={ring}
                    cx="100"
                    cy="100"
                    r={radius}
                    stroke="rgba(245, 242, 236, 0.15)"
                    strokeWidth={1}
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: [0, 0, 1, 1, 0],
                      opacity: [0, 0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 6,
                      times: [0, appearAt, Math.min(appearAt + 0.12, 0.86), 0.88, 1],
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )
              })}
              {/* Center "365" text */}
              <motion.text
                x="100"
                y="100"
                textAnchor="middle"
                dominantBaseline="central"
                fill="#81C784"
                fontSize="16"
                fontFamily="var(--font-display), serif"
                fontWeight="500"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 0.92] }}
                transition={{ duration: 6, times: [0, 0.25, 0.88, 1], repeat: Infinity, ease: "easeInOut" }}
                style={{ filter: "drop-shadow(0 0 8px rgba(129, 199, 132, 0.4))" }}
              >
                {ringCount}
              </motion.text>
            </svg>
          </motion.div>

          {/* Text content */}
          <motion.div variants={fadeInUp} transition={{ duration: 0.8, delay: 0.2 }}>
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-[#F5F2EC] text-balance">{t.title}</h2>
            <p className="text-[rgba(245,242,236,0.7)] font-serif leading-relaxed mb-6">{t.description}</p>
            <p className="text-[rgba(245,242,236,0.5)] font-serif text-sm">{t.note}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Widget Section
function WidgetSection({ lang }: { lang: Lang }) {
  const t = i18n[lang].widget
  const widgetSlides = [
    {
      src: "/images/widget-egyptian-boat.jpg",
      mediumText: {
        zh: "纸草与河流环绕亡者",
        en: "Papyrus and water encircle the departed",
      },
      largeText: {
        zh: "古埃及墓室中的船、树和水，像一张静默的地图。",
        en: "Boats, trees, and water form a quiet map from an ancient Egyptian tomb.",
      },
      smallPosition: "object-[50%_50%]",
      mediumPosition: "object-[50%_50%]",
      largePosition: "object-[50%_50%]",
    },
    {
      src: "/images/widget-japanese-robe.jpg",
      mediumText: {
        zh: "镜中一瞬，衣袍如水",
        en: "A mirrored pause, a robe like water",
      },
      largeText: {
        zh: "蓝色织物、镜面和凝视，安静地把时间留住。",
        en: "Blue fabric, reflection, and gaze quietly hold time in place.",
      },
      smallPosition: "object-[50%_42%]",
      mediumPosition: "object-[48%_36%]",
      largePosition: "object-[50%_40%]",
    },
    {
      src: "/images/widget-crater-slopes.jpg",
      mediumText: {
        zh: "山坡重复着风的痕迹",
        en: "Slopes repeat the traces of wind",
      },
      largeText: {
        zh: "从另一颗星球望见纹理、坡面和时间的力量。",
        en: "Texture, slope, and the force of time seen from another world.",
      },
      smallPosition: "object-[45%_50%]",
      mediumPosition: "object-[44%_52%]",
      largePosition: "object-[45%_50%]",
    },
    {
      src: "/images/widget-curtain-light.jpg",
      mediumText: {
        zh: "窗帘收住一束下午",
        en: "A curtain catches the afternoon",
      },
      largeText: {
        zh: "光穿过纱帘，房间在一瞬间变得柔软。",
        en: "Light passes through lace, and the room softens for a moment.",
      },
      smallPosition: "object-[42%_50%]",
      mediumPosition: "object-[42%_52%]",
      largePosition: "object-[43%_50%]",
    },
  ]
  const [activeWidget, setActiveWidget] = useState(0)
  const widget = widgetSlides[activeWidget]

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveWidget((current) => (current + 1) % widgetSlides.length)
    }, 1800)

    return () => window.clearInterval(interval)
  }, [widgetSlides.length])

  return (
    <section id="widget" className="py-32 px-6 bg-[#1A1A1D] scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-3xl md:text-4xl text-center mb-6 text-balance"
        >
          {t.title}
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[rgba(245,242,236,0.6)] text-center font-serif mb-16 max-w-xl mx-auto"
        >
          {t.subtitle}
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row justify-center items-end gap-8"
        >
          {/* Small widget */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -4 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-[155px] h-[155px] rounded-[24px] overflow-hidden shadow-lg mb-4 border border-[rgba(245,242,236,0.08)]">
              <motion.div
                key={`small-${widget.src}`}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45 }}
                className="absolute inset-0"
              >
                <Image
                  src={widget.src}
                  alt="Small Widget"
                  fill
                  className={`object-cover ${widget.smallPosition}`}
                />
              </motion.div>
            </div>
            <span className="text-[rgba(245,242,236,0.5)] text-sm font-sans">Small</span>
          </motion.div>

          {/* Medium widget */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -4 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-[329px] h-[155px] rounded-[24px] overflow-hidden shadow-lg mb-4 border border-[rgba(245,242,236,0.08)]">
              <motion.div
                key={`medium-${widget.src}`}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45 }}
                className="absolute inset-0"
              >
                <Image
                  src={widget.src}
                  alt="Medium Widget"
                  fill
                  className={`object-cover ${widget.mediumPosition}`}
                />
              </motion.div>
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[rgba(12,12,14,0.78)] via-[rgba(12,12,14,0.32)] to-transparent" />
              <div className="absolute inset-x-5 bottom-4 text-center">
                <p className="font-sans text-[11px] leading-relaxed text-[rgba(245,242,236,0.74)]">
                  {widget.mediumText[lang]}
                </p>
              </div>
            </div>
            <span className="text-[rgba(245,242,236,0.5)] text-sm font-sans">Medium</span>
          </motion.div>

          {/* Large widget */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -4 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-[329px] h-[345px] rounded-[24px] overflow-hidden shadow-lg mb-4 border border-[rgba(245,242,236,0.08)]">
              <motion.div
                key={`large-${widget.src}`}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45 }}
                className="absolute inset-0"
              >
                <Image
                  src={widget.src}
                  alt="Large Widget"
                  fill
                  className={`object-cover ${widget.largePosition}`}
                />
              </motion.div>
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[rgba(12,12,14,0.84)] via-[rgba(12,12,14,0.48)] to-transparent" />
              <div className="absolute left-5 right-5 bottom-5">
                <p className="font-sans text-xs leading-relaxed text-[rgba(245,242,236,0.68)]">
                  {widget.largeText[lang]}
                </p>
              </div>
            </div>
            <span className="text-[rgba(245,242,236,0.5)] text-sm font-sans">Large</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Daily Rhythm Section
function RhythmSection({ lang }: { lang: Lang }) {
  const t = i18n[lang].rhythm
  const Icons = [Sun, Coffee, Moon]

  return (
    <section id="rhythm" className="py-32 px-6 bg-[#161619] scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-3xl md:text-4xl text-center mb-6 text-balance"
        >
          {t.title}
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[rgba(245,242,236,0.6)] text-center font-serif mb-20 max-w-xl mx-auto"
        >
          {t.subtitle}
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute top-2 left-[16.66%] right-[16.66%] h-px bg-[rgba(245,242,236,0.1)]" />

          <div className="grid grid-cols-3 relative">
            {t.slots.map((slot, index) => {
              const Icon = Icons[index]
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  {/* Dot */}
                  <div className="w-4 h-4 rounded-full bg-[#81C784] mb-12 shadow-[0_0_12px_rgba(129,199,132,0.5)]" />

                  {/* Icon */}
                  <Icon className="w-7 h-7 text-[#81C784] mb-6" strokeWidth={1.5} />

                  {/* English label */}
                  <span className="text-[rgba(245,242,236,0.4)] font-sans text-xs tracking-[0.2em] mb-3">
                    {slot.en}
                  </span>

                  {/* Chinese / primary label */}
                  <span className="text-[#F5F2EC] font-serif text-2xl">{slot.zh}</span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Footer Section (two parts: content footer + compliance bar)
function Footer({ lang }: { lang: Lang }) {
  const t = i18n[lang]
  const f = t.footer
  const brandName = lang === "zh" ? "獨木成林" : "Banyan Forest"
  const brandTagline =
    lang === "zh" ? "讓每一天都值得記錄。" : "Make every day worth remembering."
  const connectLabel = lang === "zh" ? "聯繫" : "Connect"
  const legalLabel = lang === "zh" ? "條款" : "Legal"

  return (
    <footer className="bg-[#161619] border-t border-[rgba(245,242,236,0.1)]">
      {/* Content footer */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/images/icon-1024.png"
              alt=""
              width={32}
              height={32}
              className="w-8 h-8 rounded-lg"
            />
            <span className="font-sans text-lg font-medium text-[#F5F2EC]">{brandName}</span>
          </div>
          <p className="text-[rgba(245,242,236,0.5)] font-sans text-sm leading-relaxed max-w-xs">
            {brandTagline}
          </p>
        </div>

        {/* Connect */}
        <div>
          <h4 className="text-[rgba(245,242,236,0.4)] font-sans text-xs tracking-[0.18em] uppercase mb-4">
            {connectLabel}
          </h4>
          <a
            href="mailto:support@arborm.com"
            className="inline-flex items-center gap-2 text-[rgba(245,242,236,0.65)] font-sans text-sm hover:text-[#81C784] transition-colors"
          >
            <Mail
              aria-hidden="true"
              className="w-4 h-4 shrink-0 text-[#81C784]"
              strokeWidth={1.5}
            />
            support@arborm.com
          </a>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-[rgba(245,242,236,0.4)] font-sans text-xs tracking-[0.18em] uppercase mb-4">
            {legalLabel}
          </h4>
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                href={`/privacy?lang=${lang}`}
                className="text-[rgba(245,242,236,0.65)] font-sans text-sm hover:text-[#81C784] transition-colors"
              >
                {f.privacy}
              </Link>
            </li>
            <li>
              <Link
                href={`/terms?lang=${lang}`}
                className="text-[rgba(245,242,236,0.65)] font-sans text-sm hover:text-[#81C784] transition-colors"
              >
                {f.terms}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Compliance bar — China-mandated info */}
      <div className="border-t border-[rgba(245,242,236,0.08)] bg-[#0C0C0E]">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[rgba(245,242,236,0.45)] font-sans text-xs">
          <div className="text-center md:text-left">
            {f.copyright.replace("{year}", new Date().getFullYear().toString())}
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5">
            <span>皖ICP备2026007885号</span>
            <a
              href="https://beian.mps.gov.cn/#/query/webSearch?code=34011102003969"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#81C784] transition-colors"
            >
              <Image
                src="/images/beian-icon.png"
                alt=""
                width={14}
                height={14}
                className="w-3.5 h-3.5"
              />
              <span>皖公网安备34011102003969号</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main Content Component
function HomeContent() {
  const searchParams = useSearchParams()
  const lang: Lang = searchParams.get("lang") === "en" ? "en" : "zh"

  return (
    <main className="min-h-screen bg-[#161619]">
      <Header lang={lang} />
      <HeroSection lang={lang} />
      <WhatSection lang={lang} />
      <SlotSection lang={lang} />
      <ModeSection lang={lang} />
      <RingsSection lang={lang} />
      <WidgetSection lang={lang} />
      <RhythmSection lang={lang} />
      <Footer lang={lang} />
    </main>
  )
}

// Main Page with Suspense
export default function Home() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#161619] flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#81C784] border-t-transparent rounded-full animate-spin" />
        </main>
      }
    >
      <HomeContent />
    </Suspense>
  )
}
