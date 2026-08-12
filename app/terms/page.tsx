import Link from "next/link"
import Image from "next/image"

interface TermsContent {
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

const content: Record<string, TermsContent> = {
  zh: {
    title: "服務條款",
    lastUpdated: "最後更新：2026-04-03",
    sections: [
      {
        title: "一、服務說明",
        content:
          "獨木成林（以下簡稱「本應用」）是一款由合肥阿博木科技有限公司開發和運營的內容瀏覽與收藏應用。本協議適用於您使用本應用的所有服務。註冊或使用本應用即表示您同意本協議的全部條款。",
      },
      {
        title: "二、帳號註冊與管理",
        content:
          "您需提供有效的電子郵箱地址進行註冊。您有責任妥善保管帳號資訊，因帳號保管不善導致的損失由您自行承擔。",
      },
      {
        title: "三、用戶行為規範",
        content:
          "您不得利用本應用從事違反法律法規的行為，不得干擾本應用的正常運行，不得未經授權獲取其他用戶的資訊。",
      },
      {
        title: "四、知識產權",
        content:
          "本應用中展示的所有內容（包括但不限於文字、圖片、音頻、視頻）的知識產權歸原作者或相關權利人所有。未經授權，您不得複製、傳播或用於商業目的。",
      },
      {
        title: "五、未成年人保護",
        content:
          "本應用不面向未滿 14 周歲的兒童。若您未滿 14 周歲，請在監護人的陪同和同意下使用本應用。若我們發現在未經監護人同意的情況下收集了兒童的個人資訊，將盡快刪除相關資料。",
      },
      {
        title: "六、帳號註銷",
        content:
          "您有權隨時申請註銷您的帳號。您可以通過應用內「設置」中的註銷功能自行操作，或發送郵件至 support@arborm.com 申請註銷。帳號註銷後，我們將在 15 個工作日內刪除您的個人資訊，法律法規另有規定的除外。",
      },
      {
        title: "七、服務終止",
        content:
          "如您違反本協議的任何條款，我們有權暫停或終止向您提供服務，並不承擔由此產生的任何責任。您也可以隨時停止使用本應用並註銷帳號。",
      },
      {
        title: "八、免責聲明",
        content:
          "本應用按「現狀」提供服務，不對服務的及時性、安全性或無錯誤做出任何保證。因不可抗力或第三方原因導致的服務中斷，本應用不承擔責任。",
      },
      {
        title: "九、協議修改",
        content:
          "本應用保留隨時修改本協議的權利。修改後的協議將在應用內公佈，繼續使用本應用即視為同意修改後的條款。",
      },
      {
        title: "十、適用法律與爭議解決",
        content:
          "本協議的訂立、執行和解釋均適用中華人民共和國法律。因本協議產生的任何爭議，雙方應友好協商解決；協商不成的，任何一方均可向合肥阿博木科技有限公司所在地有管轄權的人民法院提起訴訟。",
      },
    ],
    copyright: "© 2026 合肥阿博木科技有限公司 版權所有",
    backText: "返回首頁",
    langSwitch: "English",
  },
  en: {
    title: "Terms of Service",
    lastUpdated: "Last Updated: April 3, 2026",
    sections: [
      {
        title: "1. Service Description",
        content:
          'BanyanDay (hereinafter referred to as "this application") is a content browsing and collection application developed and operated by Hefei Arbormu Technology Co., Ltd. This agreement applies to all services you use in this application. By registering or using this application, you agree to all terms of this agreement.',
      },
      {
        title: "2. Account Registration and Management",
        content:
          "You need to provide a valid email address for registration. You are responsible for properly safeguarding your account information, and any losses caused by improper account management shall be borne by yourself.",
      },
      {
        title: "3. User Code of Conduct",
        content:
          "You shall not use this application to engage in activities that violate laws and regulations, interfere with the normal operation of this application, or obtain other users' information without authorization.",
      },
      {
        title: "4. Intellectual Property",
        content:
          "The intellectual property rights of all content displayed in this application (including but not limited to text, images, audio, and video) belong to the original authors or relevant rights holders. Without authorization, you may not copy, distribute, or use for commercial purposes.",
      },
      {
        title: "5. Protection of Minors",
        content:
          "This application is not intended for children under 14 years of age. If you are under 14 years old, please use this application with the accompaniment and consent of a guardian. If we discover that we have collected personal information of children without guardian consent, we will delete the relevant data as soon as possible.",
      },
      {
        title: "6. Account Cancellation",
        content:
          'You have the right to apply for account cancellation at any time. You can do this through the cancellation function in "Settings" within the app, or send an email to support@arborm.com to apply for cancellation. After account cancellation, we will delete your personal information within 15 business days, unless otherwise required by laws and regulations.',
      },
      {
        title: "7. Service Termination",
        content:
          "If you violate any terms of this agreement, we have the right to suspend or terminate services to you without assuming any responsibility arising therefrom. You may also stop using this application and cancel your account at any time.",
      },
      {
        title: "8. Disclaimer",
        content:
          'This application provides services "as is" and makes no guarantees regarding the timeliness, security, or error-free nature of services. This application shall not be liable for service interruptions caused by force majeure or third-party reasons.',
      },
      {
        title: "9. Agreement Modification",
        content:
          "This application reserves the right to modify this agreement at any time. The modified agreement will be published within the application, and continued use of this application shall be deemed as consent to the modified terms.",
      },
      {
        title: "10. Applicable Law and Dispute Resolution",
        content:
          "The conclusion, execution, and interpretation of this agreement shall be governed by the laws of the People's Republic of China. Any disputes arising from this agreement shall be resolved through friendly negotiation; if negotiation fails, either party may file a lawsuit with the people's court with jurisdiction in the location of Hefei Arbormu Technology Co., Ltd.",
      },
    ],
    copyright: "© 2026 Hefei Arbormu Technology Co., Ltd. All rights reserved",
    backText: "Back to Home",
    langSwitch: "中文",
  },
}

export default async function TermsPage({
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
        href={`/terms?lang=${targetLang}`}
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
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
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
      </div>
    </main>
  )
}
