import Link from "next/link"

type RefundLang = "zh-Hans" | "zh-Hant" | "en"

interface RefundContent {
  title: string
  lastUpdated: string
  sections: {
    title: string
    content: string
  }[]
  copyright: string
  backText: string
}

const content: Record<RefundLang, RefundContent> = {
  "zh-Hans": {
    title: "退款政策",
    lastUpdated: "最后更新：2026-11-06",
    sections: [
      {
        title: "一、适用范围",
        content:
          "本退款政策适用于独木成林（BanyanDay）付费会员及相关订阅服务，由合肥阿博木科技有限公司提供。购买渠道包括 Apple App Store 应用内购买，以及未来通过网页或第三方支付服务商（如 Paddle、Lemon Squeezy 等）完成的订阅。",
      },
      {
        title: "二、App Store 购买",
        content:
          "通过 Apple App Store 完成的订阅（含年度会员等）由 Apple 作为销售方处理取消与退款。您可在 Apple ID → 订阅 中取消自动续订。退款请通过 Apple 的退款流程申请（例如 reportaproblem.apple.com 或设备上的「报告问题」）。删除独木成林账号不会自动取消订阅，也不会产生退款；取消订阅与退款须分别通过 Apple 办理。",
      },
      {
        title: "三、网页 / 第三方结账（Paddle、Lemon Squeezy 等）",
        content:
          "若您通过网页或第三方商户记录方（Merchant of Record，如 Paddle、Lemon Squeezy 等）购买订阅，可登录该服务商的客户门户取消续订，或发送邮件至 hello@arborm.com 申请协助。在购买后 14 日内，若会员权益尚未被实质使用，您可申请退款，具体以适用法律及该支付服务商的买家保护政策为准。退款可能由该服务商作为商户记录方直接处理。",
      },
      {
        title: "四、部分期限与续订",
        content:
          "取消订阅通常仅停止未来自动续订，已开始的计费周期一般不按未使用天数按比例退款，除非适用法律或支付服务商政策另有要求。",
      },
      {
        title: "五、如何联系我们",
        content:
          "如需协助，请发送邮件至 hello@arborm.com，并尽可能提供订单号、购买邮箱，以及 Apple 交易号或其他支付凭证，以便我们尽快处理。",
      },
      {
        title: "六、政策更新",
        content:
          "我们可能适时更新本退款政策。更新版本将在本页面公布，并注明最后更新日期。继续购买或使用付费会员即视为知悉更新后的政策。",
      },
      {
        title: "七、适用法律",
        content:
          "本政策的订立、执行和解释适用中华人民共和国法律。因本政策产生的争议，双方应友好协商；协商不成的，可向合肥阿博木科技有限公司所在地有管辖权的人民法院提起诉讼。您亦可能享有所在地强制性消费者保护法赋予的权利，该等权利不受本政策限制。",
      },
    ],
    copyright: "© 2026 合肥阿博木科技有限公司 版权所有",
    backText: "返回首页",
  },
  "zh-Hant": {
    title: "退款政策",
    lastUpdated: "最後更新：2026-11-06",
    sections: [
      {
        title: "一、適用範圍",
        content:
          "本退款政策適用於獨木成林（BanyanDay）付費會員及相關訂閱服務，由合肥阿博木科技有限公司提供。購買管道包括 Apple App Store 應用內購買，以及未來透過網頁或第三方支付服務商（如 Paddle、Lemon Squeezy 等）完成的訂閱。",
      },
      {
        title: "二、App Store 購買",
        content:
          "透過 Apple App Store 完成的訂閱（含年度會員等）由 Apple 作為銷售方處理取消與退款。您可在 Apple ID → 訂閱 中取消自動續訂。退款請透過 Apple 的退款流程申請（例如 reportaproblem.apple.com 或裝置上的「回報問題」）。刪除獨木成林帳號不會自動取消訂閱，也不會產生退款；取消訂閱與退款須分別透過 Apple 辦理。",
      },
      {
        title: "三、網頁 / 第三方結帳（Paddle、Lemon Squeezy 等）",
        content:
          "若您透過網頁或第三方商戶記錄方（Merchant of Record，如 Paddle、Lemon Squeezy 等）購買訂閱，可登入該服務商的客戶入口取消續訂，或發送郵件至 hello@arborm.com 申請協助。在購買後 14 日內，若會員權益尚未被實質使用，您可申請退款，具體以適用法律及該支付服務商的買家保護政策為準。退款可能由該服務商作為商戶記錄方直接處理。",
      },
      {
        title: "四、部分期限與續訂",
        content:
          "取消訂閱通常僅停止未來自動續訂，已開始的計費週期一般不按未使用天數按比例退款，除非適用法律或支付服務商政策另有要求。",
      },
      {
        title: "五、如何聯繫我們",
        content:
          "如需協助，請發送郵件至 hello@arborm.com，並盡可能提供訂單號、購買郵箱，以及 Apple 交易號或其他支付憑證，以便我們盡快處理。",
      },
      {
        title: "六、政策更新",
        content:
          "我們可能適時更新本退款政策。更新版本將在本頁面公佈，並註明最後更新日期。繼續購買或使用付費會員即視為知悉更新後的政策。",
      },
      {
        title: "七、適用法律",
        content:
          "本政策的訂立、執行和解釋適用中華人民共和國法律。因本政策產生的爭議，雙方應友好協商；協商不成的，可向合肥阿博木科技有限公司所在地有管轄權的人民法院提起訴訟。您亦可能享有所在地強制性消費者保護法賦予的權利，該等權利不受本政策限制。",
      },
    ],
    copyright: "© 2026 合肥阿博木科技有限公司 版權所有",
    backText: "返回首頁",
  },
  en: {
    title: "Refund Policy",
    lastUpdated: "Last Updated: November 6, 2026",
    sections: [
      {
        title: "1. Scope",
        content:
          'This Refund Policy applies to paid membership and related subscriptions for BanyanDay (独木成林), provided by Hefei ArborM Technology Co., Ltd. Purchase channels include Apple App Store in-app purchases and, when available, web or third-party checkout providers (such as Paddle, Lemon Squeezy, and similar).',
      },
      {
        title: "2. App Store Purchases",
        content:
          "Subscriptions purchased through the Apple App Store (including yearly membership) are sold by Apple. Cancel auto-renewal in Apple ID → Subscriptions. Request refunds through Apple’s process (for example reportaproblem.apple.com or “Report a Problem” on your device). Deleting your BanyanDay account does not cancel a subscription or issue a refund; cancellation and refunds must be handled with Apple separately.",
      },
      {
        title: "3. Web / Third-Party Checkout (Paddle, Lemon Squeezy, etc.)",
        content:
          "If you purchase via the web or a third-party Merchant of Record (such as Paddle or Lemon Squeezy), cancel renewal through that provider’s customer portal, or email hello@arborm.com for help. Within 14 days of purchase, if membership benefits have not been substantially used, you may request a refund, subject to applicable law and the payment provider’s buyer-protection policies. The provider may process the refund as Merchant of Record.",
      },
      {
        title: "4. Partial Periods and Renewals",
        content:
          "Canceling a subscription generally stops future renewals only. We do not typically issue pro-rata refunds for unused time in an already-started billing period, unless required by law or the payment provider’s policy.",
      },
      {
        title: "5. How to Contact Us",
        content:
          "For assistance, email hello@arborm.com and include your order ID, purchase email, and Apple transaction ID or other payment proof when available so we can help promptly.",
      },
      {
        title: "6. Policy Updates",
        content:
          "We may update this Refund Policy from time to time. The updated version will be posted on this page with a revised last-updated date. Continued purchase or use of paid membership constitutes notice of the updated policy.",
      },
      {
        title: "7. Governing Law",
        content:
          "This policy is governed by the laws of the People’s Republic of China. Disputes should first be resolved amicably; if negotiation fails, either party may bring a claim before a court of competent jurisdiction where Hefei ArborM Technology Co., Ltd. is located. You may also have mandatory consumer-protection rights under the laws of your place of residence, which this policy does not limit.",
      },
    ],
    copyright: "© 2026 Hefei ArborM Technology Co., Ltd. All rights reserved",
    backText: "Back to Home",
  },
}

const LANGS: { key: RefundLang; label: string }[] = [
  { key: "zh-Hans", label: "简体" },
  { key: "zh-Hant", label: "繁體" },
  { key: "en", label: "EN" },
]

function resolveLang(raw?: string): RefundLang {
  if (raw === "zh-Hant" || raw === "zh" || raw === "zh-TW" || raw === "zh-HK") {
    return "zh-Hant"
  }
  if (raw === "en") return "en"
  return "zh-Hans"
}

export default async function RefundPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const params = await searchParams
  const lang = resolveLang(params.lang)
  const c = content[lang]
  const homeLang = lang === "en" ? "en" : "zh"

  return (
    <main className="min-h-screen bg-[#0C0C0E] py-20 px-6">
      {/* Language switcher — three options for Paddle/Lemon review */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-1 px-2 py-1.5 bg-[rgba(20,20,22,0.8)] backdrop-blur-sm border border-[rgba(245,242,236,0.15)] rounded-full">
        {LANGS.map((item, i) => (
          <span key={item.key} className="flex items-center gap-1">
            {i > 0 && (
              <span className="text-[rgba(245,242,236,0.25)] text-xs px-0.5">/</span>
            )}
            <Link
              href={`/refund?lang=${item.key}`}
              className={`px-2.5 py-1 rounded-full font-sans text-sm transition-colors ${
                lang === item.key
                  ? "text-[#81C784] bg-[rgba(129,199,132,0.12)]"
                  : "text-[#F5F2EC] hover:text-[#81C784]"
              }`}
            >
              {item.label}
            </Link>
          </span>
        ))}
      </div>

      <div className="max-w-3xl mx-auto">
        <Link
          href={`/?lang=${homeLang}`}
          className="inline-flex items-center gap-2 text-[#81C784] font-sans text-sm mb-12 hover:opacity-80 transition-opacity"
        >
          <span>←</span>
          <span>{c.backText}</span>
        </Link>

        <h1 className="font-serif text-3xl md:text-4xl text-[#F5F2EC] mb-4">
          {c.title}
        </h1>
        <p className="text-[rgba(245,242,236,0.5)] font-sans text-sm mb-12">
          {c.lastUpdated}
        </p>

        <div className="space-y-10">
          {c.sections.map((section, index) => (
            <section key={index}>
              <h2 className="font-serif text-xl text-[#F5F2EC] mb-4">
                {section.title}
              </h2>
              <p className="text-[rgba(245,242,236,0.7)] font-serif leading-relaxed">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[rgba(245,242,236,0.1)]">
          <div className="flex flex-col items-center gap-3 text-[rgba(245,242,236,0.4)] font-sans text-xs">
            <p className="text-center">{c.copyright}</p>
          </div>
        </div>
      </div>
    </main>
  )
}
