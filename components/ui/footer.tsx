import Link from "next/link"
import { Phone, Mail, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-white section-spacing">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-heading font-bold text-xl mb-4">太郎坊チャレンジ実行委員会</h3>
            <p className="text-gray-300 mb-4">
              滋賀県東近江市の霊峰・太郎坊宮で開催される
              <br />
              関西屈指のステアクライミング競技大会
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/tarobo_challenge"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="公式Twitter"
              >
                <Twitter className="w-5 h-5" strokeWidth={2} />
              </a>
              <a
                href="https://instagram.com/tarobo_challenge"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="公式Instagram"
              >
                <Instagram className="w-5 h-5" strokeWidth={2} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">リンク</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/organization" className="text-gray-300 hover:text-white transition-colors">
                  運営組織
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  個人情報保護方針
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                  利用規約
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">お問い合わせ</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-accent" strokeWidth={2} />
                <span>080-3204-0317</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-accent" strokeWidth={2} />
                <span>information@step-out.jp</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-400">© 2025 太郎坊チャレンジ実行委員会. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
