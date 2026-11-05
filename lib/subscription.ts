// App Store prices and introductory offers are configured separately by Apple.
export const annualSubscription = {
  amount: 5,
  currency: "USD",
}

export const webAppUrl = "https://dmcl.arborm.co"
export const appStoreUrl =
  "https://apps.apple.com/app/%E7%8D%A8%E6%9C%A8%E6%88%90%E6%9E%97/id6760972773"

export function refundPolicyUrl(lang: "zh" | "en") {
  return `/refund?lang=${lang === "zh" ? "zh-Hant" : "en"}`
}
