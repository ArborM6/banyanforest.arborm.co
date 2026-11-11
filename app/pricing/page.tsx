import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowLeft, ArrowUpRight, Check, ChevronDown, Droplets, Leaf, Mail, Sprout } from "lucide-react"
import { annualSubscription, appStoreUrl, refundPolicyUrl, webAppUrl } from "@/lib/subscription"
import { PricingArtworkSlideshow } from "./artwork-slideshow"
import { pricingContent } from "./content"

type PageProps = { searchParams: Promise<{ lang?: string }> }

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const { lang } = await searchParams
  const t = pricingContent[lang === "en" ? "en" : "zh"]

  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: {
      canonical: "https://banyanforest.arborm.co/pricing",
      languages: {
        "zh-Hant": "https://banyanforest.arborm.co/pricing",
        en: "https://banyanforest.arborm.co/pricing?lang=en",
      },
    },
  }
}

const focusStyle = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#81C784]"
const mutedLink = `text-sm text-[#B5B3B0] transition-colors hover:text-[#81C784] ${focusStyle}`

export default async function PricingPage({ searchParams }: PageProps) {
  const params = await searchParams
  const lang = params.lang === "en" ? "en" : "zh"
  const t = pricingContent[lang]
  const homeHref = `/?lang=${lang}`
  const refundHref = refundPolicyUrl(lang)
  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: annualSubscription.currency,
    maximumFractionDigits: 0,
  }).format(annualSubscription.amount)

  return (
    <div lang={lang === "en" ? "en" : "zh-Hant"} className="min-h-screen bg-[#161619]">
      {lang === "zh" && (
        <style>{`
          @font-face {
            font-family: "Mainland Punctuation";
            src: url("/fonts/noto-sans-sc-punctuation.ttf") format("truetype");
            font-weight: 100 900;
            font-style: normal;
            font-display: swap;
            unicode-range: U+3002, U+FF0C;
          }
          .mainland-punctuation {
            font-family: "Mainland Punctuation", "PingFang SC", "Noto Sans SC", "Microsoft YaHei", sans-serif;
            font-feature-settings: "halt" 0, "vhal" 0, "halt" off, "vhal" off;
          }
        `}</style>
      )}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#0C0C0E]/80 backdrop-blur-md">
        <nav aria-label={t.pageTitle} className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
          <Link href={homeHref} className={`flex shrink-0 items-center gap-3 ${focusStyle}`}>
            <Image src="/images/icon-1024.png" alt="" width={28} height={28} className="size-7 rounded-lg" />
            <span className="text-base font-medium">{t.brand}</span>
          </Link>
          <div className="flex items-center gap-5 sm:gap-8">
            <Link href={homeHref} className={`${mutedLink} hidden items-center gap-2 sm:inline-flex`}>
              <ArrowLeft aria-hidden="true" className="size-3.5" />
              {t.home}
            </Link>
            <span aria-current="page" className="text-xs text-[#81C784] sm:text-sm">{t.pageTitle}</span>
            <Link
              href={`/pricing?lang=${lang === "zh" ? "en" : "zh"}`}
              hrefLang={lang === "zh" ? "en" : "zh-Hant"}
              className={`rounded-full border border-white/15 px-3.5 py-1.5 text-xs transition-colors hover:border-[#81C784] hover:text-[#81C784] ${focusStyle}`}
            >
              {t.language}
            </Link>
          </div>
        </nav>
      </header>

      <main id="main-content">
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-32 sm:pb-20 sm:pt-40 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div>
            <p className="mb-6 flex items-center gap-3 text-[11px] tracking-[0.25em] text-[#81C784]">
              <span aria-hidden="true" className="h-px w-8 bg-[#81C784]/60" />
              {t.eyebrow}
            </p>
            <h1 className="text-4xl leading-[1.4] tracking-tight sm:text-5xl lg:text-[52px]">
              {t.heading[0]}
              <br />
              <span className="text-[#A7CBA4]">{t.heading[1]}</span>
            </h1>
            <p className="mt-6 max-w-md text-[15px] leading-8 text-[#B5B3B0]">{t.introduction}</p>
            <a href="#plans" className={`mt-8 inline-flex items-center gap-3 text-sm text-[#81C784] ${focusStyle}`}>
              {t.explore}
              <ArrowDown aria-hidden="true" className="size-4" />
            </a>
          </div>
          <figure className="relative mx-auto w-full max-w-[440px] rounded-t-[180px] rounded-b-2xl border border-white/10 bg-[#202322] p-2.5">
            <div className="relative aspect-[1.1] overflow-hidden rounded-t-[172px] rounded-b-lg">
              <PricingArtworkSlideshow
                alt={lang === "zh" ? "夜空下掛滿燈籠的樹木" : "A tree filled with lanterns under a night sky"}
              />
              <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-[#121A19]/90 via-transparent to-transparent" />
              <p className="absolute inset-x-5 bottom-6 text-center text-sm leading-7 text-[#F5F2EC] sm:text-base">{t.artworkNote}</p>
            </div>
            <figcaption className="px-3 py-3 text-center text-[9px] leading-5 tracking-[0.1em] text-[#B5B3B0]">{t.artwork}</figcaption>
          </figure>
        </section>

        <section id="plans" aria-labelledby="plans-title" className="scroll-mt-24 px-6 pb-20 sm:pb-28">
          <div className="mx-auto max-w-4xl">
            <div className="mb-9 text-center">
              <h2 id="plans-title" className="text-2xl sm:text-3xl">{t.plansTitle}</h2>
              <p className="mt-4 text-sm leading-7 text-[#B5B3B0]">{t.plansDescription.map((line) => <span key={line} className="block">{line}</span>)}</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <article className="flex flex-col rounded-2xl border border-white/10 bg-[#1C1C1F] p-7 sm:p-9">
                <Leaf aria-hidden="true" strokeWidth={1.4} className="mb-6 size-7 text-[#B5B3B0]" />
                <p className="mb-3 text-[10px] tracking-[0.2em] text-[#B5B3B0]">{t.free.eyebrow}</p>
                <h3 className="text-2xl">{t.free.title}</h3>
                <p className="mt-3 min-h-12 text-sm leading-6 text-[#B5B3B0]">{t.free.description}</p>
                <div className="mt-5 flex min-h-14 items-baseline gap-3">
                  <p className="text-4xl font-medium tracking-tight">{t.free.price}</p>
                  <span className="text-xs text-[#B5B3B0]">{t.free.period}</span>
                </div>
                <p className="mt-1 text-xs leading-6 text-[#B5B3B0]">{t.free.priceNote}</p>
                <div className="my-6 border-t border-white/10" />
                <ul className="mb-8 flex-1 space-y-4">
                  {t.free.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-[#D0CECA]">
                      <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-[#81C784]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href={webAppUrl} className={`flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 px-4 py-3 text-center text-sm transition-colors hover:border-[#81C784] hover:text-[#81C784] ${focusStyle}`}>
                  {t.free.cta}
                  <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
                </a>
                <p className="mt-4 text-xs leading-6 text-[#A5A49F]">{t.free.note}</p>
              </article>

              <article className="relative flex flex-col rounded-2xl border border-[#81C784]/50 bg-[#1C2520] p-7 sm:p-9">
                <span className="absolute right-7 top-8 rounded-full bg-[#81C784]/10 px-3 py-1 text-[11px] text-[#A7D6A5] sm:right-9 sm:top-10">{t.annual.badge}</span>
                <Sprout aria-hidden="true" strokeWidth={1.4} className="mb-6 size-7 text-[#81C784]" />
                <p className="mb-3 text-[10px] tracking-[0.2em] text-[#A7D6A5]">{t.annual.eyebrow}</p>
                <h3 className="text-2xl">{t.annual.title}</h3>
                <p className="mt-3 min-h-12 text-sm leading-6 text-[#BEC8BD]">{t.annual.description}</p>
                <div className="mt-5 flex min-h-14 flex-wrap items-baseline gap-2">
                  <p className="text-5xl font-medium tracking-tight">{price}</p>
                  <span className="text-xs text-[#BEC8BD]">{annualSubscription.currency} {t.annual.period}</span>
                </div>
                <p className="mt-1 text-xs leading-6 text-[#BEC8BD]">{t.annual.priceNote}</p>
                <div className="my-6 border-t border-[#81C784]/15" />
                <ul className="mb-8 flex-1 space-y-4">
                  {t.annual.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-[#E3E9DF]">
                      <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-[#81C784]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="mb-4 text-xs leading-6 text-[#BEC8BD]">{t.annual.billingNote}</p>
                <a href={webAppUrl} className={`flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#81C784] px-4 py-3 text-center text-sm font-medium text-[#0C0C0E] transition-colors hover:bg-[#9CCC9F] ${focusStyle}`}>
                  {t.annual.cta}
                  <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
                </a>
                <p className="mt-3 text-center text-xs text-[#BEC8BD]">{t.annual.availability}</p>
                <p className="mt-4 text-xs leading-6 text-[#BEC8BD]">{t.annual.note}</p>
                <a href={appStoreUrl} className={`mt-2 inline-flex items-center gap-1.5 text-xs text-[#A7D6A5] underline decoration-[#81C784]/30 underline-offset-4 ${focusStyle}`}>
                  {t.annual.ios}
                  <ArrowUpRight aria-hidden="true" className="size-3" />
                </a>
              </article>
            </div>
            <aside className="mt-6 flex gap-4 rounded-xl border border-white/[0.07] px-5 py-5 sm:px-7">
              <Droplets aria-hidden="true" strokeWidth={1.5} className="mt-1 size-5 shrink-0 text-[#81C784]" />
              <div>
                <h3 className="text-sm text-[#E0DED8]">{t.trialTitle}</h3>
                <p className="mt-2 text-xs leading-6 text-[#B5B3B0]">{t.trialDescription}</p>
              </div>
            </aside>
          </div>
        </section>

        <section aria-labelledby="comparison-title" className="border-y border-white/[0.06] bg-[#1A1A1D] px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl">
            <h2 id="comparison-title" className="mb-10 text-2xl sm:text-3xl">{t.compareTitle}</h2>
            <table className="w-full table-fixed text-left text-xs leading-6 sm:text-sm">
              <caption className="sr-only">{t.compareCaption}</caption>
              <thead>
                <tr className="border-b border-white/15">
                  <th scope="col" className="w-[34%] pb-5 pr-3 font-normal text-[#B5B3B0]">{t.feature}</th>
                  <th scope="col" className="pb-5 pr-3 font-medium">{t.free.title}</th>
                  <th scope="col" className="pb-5 font-medium text-[#A7D6A5]">{t.annual.title}</th>
                </tr>
              </thead>
              <tbody>
                {t.compareRows.map((row) => (
                  <tr key={row.label} className="border-b border-white/[0.07]">
                    <th scope="row" className="py-5 pr-3 font-normal text-[#D0CECA]">{row.label}</th>
                    <td className="py-5 pr-3 text-[#B5B3B0]">{row.free}</td>
                    <td className="py-5 text-[#A7D6A5]">{row.annual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-5 max-w-2xl text-xs leading-6 text-[#E09088] mainland-punctuation">{t.historyNote}</p>
          </div>
        </section>

        <section aria-labelledby="billing-title" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <h2 id="billing-title" className="text-2xl leading-snug sm:text-3xl">{t.billingTitle}</h2>
          <div className="mt-10 grid gap-9 md:grid-cols-3 md:gap-10">
            {t.billing.map((item, index) => (
              <article key={item.title} className="border-t border-white/15 pt-5">
                <span aria-hidden="true" className="text-xs tracking-widest text-[#81C784]">0{index + 1}</span>
                <h3 className="mt-5 text-lg">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#B5B3B0]">{item.description}</p>
                {index === 2 && (
                  <Link href={refundHref} className={`mt-4 inline-flex items-center gap-2 text-sm text-[#81C784] ${focusStyle}`}>
                    {t.refundLink}
                    <ArrowUpRight aria-hidden="true" className="size-3.5" />
                  </Link>
                )}
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="faq-title" className="border-t border-white/[0.06] px-6 py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_2fr] md:gap-16">
            <h2 id="faq-title" className="text-2xl sm:text-3xl">{t.faqTitle}</h2>
            <div>
              {t.faqs.map((faq) => (
                <details key={faq.question} className="group border-b border-white/10 first:border-t">
                  <summary className={`flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-sm leading-7 [&::-webkit-details-marker]:hidden ${focusStyle}`}>
                    {faq.question}
                    <ChevronDown aria-hidden="true" className="size-4 shrink-0 text-[#81C784] motion-safe:transition-transform group-open:rotate-180" />
                  </summary>
                  <p className={`pb-6 pr-6 text-sm leading-7 text-[#B5B3B0] mainland-punctuation`}>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20 pt-4">
          <div className="flex flex-col justify-between gap-6 rounded-2xl border border-[#81C784]/15 bg-[#1C2520] px-7 py-8 sm:flex-row sm:items-center sm:px-10">
            <div>
              <h2 className="text-lg">{t.contactTitle}</h2>
              <p className="mt-2 text-sm leading-7 text-[#BEC8BD]">{t.contactDescription}</p>
            </div>
            <a href="mailto:hello@arborm.com" className={`inline-flex shrink-0 items-center gap-2 text-sm text-[#A7D6A5] ${focusStyle}`}>
              <Mail aria-hidden="true" className="size-4" />
              hello@arborm.com
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#0C0C0E] px-6 py-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <Link href={homeHref} className={`inline-flex items-center gap-2 text-sm ${focusStyle}`}>
              <Image src="/images/icon-1024.png" alt="" width={24} height={24} className="size-6 rounded-md" />
              {t.brand}
            </Link>
            <nav aria-label={lang === "zh" ? "政策與條款" : "Policies and terms"} className="flex flex-wrap gap-x-6 gap-y-3">
              <Link href={`/privacy?lang=${lang}`} className={mutedLink}>{t.privacy}</Link>
              <Link href={`/terms?lang=${lang}`} className={mutedLink}>{t.terms}</Link>
              <Link href={refundHref} className={mutedLink}>{t.refund}</Link>
            </nav>
          </div>
          <div className="mt-7 flex flex-col justify-between gap-4 border-t border-white/[0.07] pt-6 text-xs leading-6 text-[#A5A49F] md:flex-row">
            <p>© {new Date().getFullYear()} {t.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
