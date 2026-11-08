import Link from "next/link"

interface PrivacyContent {
  title: string
  lastUpdated: string
  sections: {
    title: string
    content: string
  }[]
  copyright: string
  backText: string
  langSwitch: string
}

const content: Record<string, PrivacyContent> = {
  zh: {
    title: "隱私政策",
    lastUpdated: "最後更新：2026-10-13",
    sections: [
      {
        title: "一、我們收集的資訊",
        content:
          "為提供服務，我們可能收集以下資訊：您的註冊資訊（電子郵箱）、個人資料（暱稱、頭像）、內容瀏覽與收藏記錄，以及設備基本資訊（作業系統版本、螢幕解析度）。",
      },
      {
        title: "二、資訊使用目的",
        content:
          "我們收集的資訊僅用於：提供和改善服務、維護帳號安全、發送服務相關通知。我們不會將您的資訊用於與本應用無關的商業推廣。",
      },
      {
        title: "三、資訊存儲與保護",
        content:
          "您的帳號及需要同步的資料存儲在雲端伺服器上，傳輸過程使用 TLS/SSL 加密；卡片快取和應用設定也會存儲在您的裝置上。為讓 iOS 小工具顯示與帳號一致的卡片，本應用及其小工具會透過系統提供的共用儲存區，讀寫目前帳號的識別資訊、小工具專用存取憑證、卡片內容與排程、圖片快取及語言偏好。小工具也會透過加密連線向我們的後端讀取卡片更新。這項本機共用僅限本應用及其小工具，不向其他公司的應用開放。我們採取合理的技術和管理措施保護您的個人資訊安全。",
      },
      {
        title: "四、第三方共享",
        content:
          "我們不會出售、出租您的個人資訊。僅在以下情況下可能共享：提供核心服務所必需的基礎設施服務商（如 Supabase 身份驗證和資料存儲）；法律法規要求的情況。",
      },
      {
        title: "五、未成年人資訊保護",
        content:
          "本應用不面向未滿 13 周歲的兒童。我們不會主動收集未滿 13 周歲兒童的個人資訊。若您是未滿 13 周歲兒童的監護人，發現我們可能收集了您孩子的資訊，請聯繫我們，我們將盡快刪除。",
      },
      {
        title: "六、資料保留與刪除",
        content:
          "我們僅在為您提供服務所必要的期限內保留您的個人資訊。帳號註銷後，我們將在 15 個工作日內刪除您的個人資訊，法律法規另有規定的除外。",
      },
      {
        title: "七、您的權利",
        content:
          "您有權訪問、更正和刪除您的個人資訊。您可以通過應用設置修改個人資料，或聯繫我們請求刪除帳號及相關資料。",
      },
      {
        title: "八、隱私政策更新",
        content:
          "我們可能會不時更新本隱私政策。更新後的政策將在應用內公佈，建議您定期查閱。",
      },
      {
        title: "九、聯繫我們",
        content:
          "如您對本隱私政策有任何疑問，請通過 hello@arborm.com 聯繫我們。",
      },
    ],
    copyright: "© 2026 合肥阿博木科技有限公司 版權所有",
    backText: "返回首頁",
    langSwitch: "English",
  },
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last Updated: October 13, 2026",
    sections: [
      {
        title: "1. Information We Collect",
        content:
          "To provide our services, we may collect the following information: your registration information (email address), profile data (nickname, avatar), content browsing and collection records, and basic device information (operating system version, screen resolution).",
      },
      {
        title: "2. Purpose of Information Use",
        content:
          "The information we collect is only used for: providing and improving services, maintaining account security, and sending service-related notifications. We will not use your information for commercial promotion unrelated to this application.",
      },
      {
        title: "3. Information Storage and Protection",
        content:
          "Your account data and information that needs to be synchronized are stored on cloud servers and encrypted in transit using TLS/SSL. Card caches and app settings are also stored on your device. To display cards associated with your account, the iOS app and its widgets use shared storage provided by the operating system for the current account identifier, a widget-specific access credential, card content and schedules, cached images, and language preferences. Widgets also retrieve card updates from our backend over encrypted connections. This local shared storage is limited to our app and its widgets and is not made available to other companies' apps. We take reasonable technical and administrative measures to protect your personal information.",
      },
      {
        title: "4. Third-Party Sharing",
        content:
          "We will not sell or rent your personal information. Sharing may only occur in the following situations: infrastructure service providers necessary for core services (such as Supabase for authentication and data storage); when required by laws and regulations.",
      },
      {
        title: "5. Protection of Minors' Information",
        content:
          "This application is not intended for children under 13 years of age. We do not actively collect personal information from children under 13. If you are a guardian of a child under 13 and believe we may have collected your child's information, please contact us and we will delete it as soon as possible.",
      },
      {
        title: "6. Data Retention and Deletion",
        content:
          "We only retain your personal information for the period necessary to provide services to you. After account cancellation, we will delete your personal information within 15 business days, unless otherwise required by laws and regulations.",
      },
      {
        title: "7. Your Rights",
        content:
          "You have the right to access, correct, and delete your personal information. You can modify your profile through the app settings, or contact us to request deletion of your account and related data.",
      },
      {
        title: "8. Privacy Policy Updates",
        content:
          "We may update this privacy policy from time to time. The updated policy will be published within the application, and we recommend you review it regularly.",
      },
      {
        title: "9. Contact Us",
        content:
          "If you have any questions about this privacy policy, please contact us at hello@arborm.com.",
      },
    ],
    copyright: "© 2026 Hefei ArborM Technology Co., Ltd. All rights reserved",
    backText: "Back to Home",
    langSwitch: "中文",
  },
}

export default async function PrivacyPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const params = await searchParams
  const lang = params.lang === "en" ? "en" : "zh"
  const c = content[lang]
  const targetLang = lang === "zh" ? "en" : "zh"

  return (
    <main className="min-h-screen bg-[#0C0C0E] py-20 px-6">
      {/* Language switcher */}
      <Link
        href={`/privacy?lang=${targetLang}`}
        className="fixed top-6 right-6 z-50 px-4 py-2 bg-[rgba(20,20,22,0.8)] backdrop-blur-sm border border-[rgba(245,242,236,0.15)] rounded-full text-[#F5F2EC] font-sans text-sm hover:border-[#81C784] hover:text-[#81C784] transition-colors"
      >
        {c.langSwitch}
      </Link>

      <div className="max-w-3xl mx-auto">
        <Link
          href={`/?lang=${lang}`}
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
