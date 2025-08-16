"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Users, Building, Award, Target } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

export default function OrganizationPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* ヘッダー */}
      <header className="bg-blue-900 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <span className="text-lg font-semibold">
                太郎坊チャレンジ2025
                <br />
                ボランティア募集 特別サイト
              </span>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/volunteer-form" className="hover:text-blue-200 transition-colors">
                ボランティアに参加したい！
              </Link>
              <Link href="/contact" className="hover:text-blue-200 transition-colors">
                お問い合わせ
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* 戻るリンク */}
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
              <ArrowLeft className="mr-2 h-4 w-4" />
              トップページに戻る
            </Link>
          </div>

          {/* タイトル */}
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-900">運営組織</h1>
            <p className="text-gray-600 mt-2">太郎坊チャレンジ2025を支える運営組織についてご紹介いたします。</p>
          </div>

          <div className="space-y-8">
            {/* 主催者 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-900 flex items-center">
                  <Building className="mr-2" />
                  主催者
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-800">太郎坊チャレンジ実行委員会</h3>
                    <p className="text-gray-700 mt-2">
                      滋賀県東近江市の太郎坊宮で開催されるステアクライミング競技大会「太郎坊チャレンジ」の企画・運営を行う実行委員会です。
                      地域の活性化とスポーツ文化の振興を目的として、2024年に設立されました。
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">設立目的</h4>
                    <ul className="text-sm space-y-1">
                      <li>• 太郎坊宮の歴史と文化を活かしたスポーツイベントの開催</li>
                      <li>• 地域コミュニティの活性化と交流促進</li>
                      <li>• ステアクライミング競技の普及と発展</li>
                      <li>• 健康増進とスポーツ文化の振興</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 運営体制 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-900 flex items-center">
                  <Users className="mr-2" />
                  運営体制
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-3">実行委員会</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium">名誉会長</p>
                        <p className="text-sm text-gray-600">小椋正清（滋賀県東近江市 市長）</p>
                      </div>
                      <div>
                        <p className="font-medium">大会長</p>
                        <p className="text-sm text-gray-600">二橋省之（八日市商工会議所 会頭）</p>
                      </div>
                      <div>
                        <p className="font-medium">実行委員長</p>
                        <p className="text-sm text-gray-600">奥田素之（太郎坊宮・阿賀神社 宮司）</p>
                      </div>
                      <div>
                        <p className="font-medium">副委員長</p>
                        <p className="text-sm text-gray-600">今宿裕昭（ステップアウトマーケティング 代表）</p>
                      </div>
                      <div>
                        <p className="font-medium">運営部長</p>
                        <p className="text-sm text-gray-600">奥野晋一郎（一般社団法人階段推進普及協会 理事長）</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-3">専門部会</h4>
                    <ul className="text-sm space-y-2">
                      <li>• 競技運営部会</li>
                      <li>• 安全管理部会</li>
                      <li>• 広報・メディア部会</li>
                      <li>• ボランティア部会</li>
                      <li>• 地域連携部会</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 協力団体 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-900 flex items-center">
                  <Award className="mr-2" />
                  協力団体・パートナー
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-3">運営協力</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-medium">株式会社ミーティング</h5>
                        <p className="text-sm text-gray-600 mt-1">
                          国際大会レベルの専門的な競技運営ノウハウを提供。 大会の企画・運営全般をサポート。
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-medium">一般社団法人階段推進普及協会</h5>
                        <p className="text-sm text-gray-600 mt-1">
                          ステアクライミング競技の技術指導と安全管理。 競技ルールの策定と審判業務。
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-800 mb-3">地域協力</h4>
                    <ul className="text-sm space-y-2">
                      <li>• 太郎坊・阿賀神社（会場提供・運営協力）</li>
                      <li>• 東近江市（後援・地域連携）</li>
                      <li>• 近江鉄道株式会社（交通アクセス協力）</li>
                      <li>• 八日市商工会議所（地域振興協力）</li>
                      <li>• 東近江市商工会（地域振興協力）</li>
                      <li>• 東近江市観光協会（観光振興協力）</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-800 mb-3">メディアパートナー</h4>
                    <ul className="text-sm space-y-2">
                      <li>• 滋賀報知新聞社（広報・取材協力）</li>
                      <li>• 東近江ケーブルネットワーク（映像制作・配信協力）</li>
                      <li>• その他地域メディア各社（広報・取材協力）</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ミッション・ビジョン */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-900 flex items-center">
                  <Target className="mr-2" />
                  ミッション・ビジョン
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">ミッション</h4>
                    <p className="text-gray-700">
                      1400年の歴史を誇る太郎坊宮の神聖な石段を舞台に、参加者が自分の限界に挑戦し、
                      感動と成長を体験できる特別なスポーツイベントを提供します。
                      地域の文化と伝統を大切にしながら、新しいスポーツ文化を創造し、
                      地域コミュニティの絆を深めることを使命としています。
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">ビジョン</h4>
                    <p className="text-gray-700">
                      太郎坊チャレンジを関西圏を代表するステアクライミング競技大会として発展させ、
                      国内外から多くの参加者が集まる国際的なスポーツイベントに成長させることを目指します。
                      また、この大会を通じて東近江市の魅力を全国に発信し、 地域の持続可能な発展に貢献していきます。
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">価値観</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <h5 className="font-medium text-blue-900">挑戦</h5>
                        <p className="text-sm text-gray-600 mt-1">参加者一人ひとりの挑戦を全力でサポート</p>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <h5 className="font-medium text-green-900">共生</h5>
                        <p className="text-sm text-gray-600 mt-1">地域と参加者が共に成長する場の提供</p>
                      </div>
                      <div className="text-center p-4 bg-yellow-50 rounded-lg">
                        <h5 className="font-medium text-yellow-900">継承</h5>
                        <p className="text-sm text-gray-600 mt-1">歴史と文化を次世代に継承</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">太郎坊チャレンジ実行委員会</h3>
              <p className="text-sm text-gray-300">
                滋賀県東近江市
                <br />
                ステアクライミング競技大会
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">リンク</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/organization" className="text-gray-300 hover:text-white">
                    運営組織
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-300 hover:text-white">
                    個人情報保護方針
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-300 hover:text-white">
                    利用規約
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">主催</h3>
              <p className="text-sm text-gray-300">太郎坊チャレンジ実行委員会</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-4 text-center">
            <p className="text-sm text-gray-400">COPYRIGHTS© 太郎坊チャレンジ実行委員会</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
