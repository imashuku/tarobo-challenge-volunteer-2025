"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Shield, Eye, Lock, FileText, Globe, Users, Cookie } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

export default function PrivacyPage() {
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
            <h1 className="text-2xl md:text-3xl font-bold text-blue-900">個人情報保護方針</h1>
            <p className="text-gray-600 mt-2">太郎坊チャレンジ実行委員会における個人情報の取扱いについて</p>
          </div>

          <div className="space-y-8">
            {/* 基本方針 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-900 flex items-center">
                  <Shield className="mr-2" />
                  基本方針
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  太郎坊チャレンジ実行委員会（以下「当実行委員会」といいます）は、
                  個人情報の重要性を認識し、個人情報の保護に関する法律及び関連法令等を遵守し、
                  以下の方針に基づいて個人情報を適切に取り扱います。
                </p>
              </CardContent>
            </Card>

            {/* 個人情報の定義 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-900 flex items-center">
                  <FileText className="mr-2" />
                  個人情報の定義・取得する情報
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 mb-4">
                    本方針において「個人情報」とは、個人情報の保護に関する法律に定める個人情報をいい、
                    生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により
                    特定の個人を識別することができるもの（他の情報と容易に照合することができ、
                    それにより特定の個人を識別することができることとなるものを含みます）をいいます。
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">直接取得する個人情報</h4>
                      <ul className="text-sm space-y-1">
                        <li>• 氏名、住所、電話番号、メールアドレス</li>
                        <li>• 生年月日、性別</li>
                        <li>• ボランティア活動に関する情報</li>
                        <li>• お問い合わせ内容</li>
                        <li>• その他フォーム入力情報</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">自動取得する情報</h4>
                      <ul className="text-sm space-y-1">
                        <li>• IPアドレス</li>
                        <li>• ブラウザ情報、OS情報</li>
                        <li>• アクセス日時、参照ページ</li>
                        <li>• Cookie情報</li>
                        <li>• アクセスログ</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cookie・トラッキング技術 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-900 flex items-center">
                  <Cookie className="mr-2" />
                  Cookie・トラッキング技術について
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    当サイトでは、サービス向上のためCookieやその他のトラッキング技術を使用しています。
                  </p>

                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">使用するCookie・サービス</h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-medium">必須Cookie</p>
                        <p className="text-yellow-700">
                          サイトの基本機能に必要なCookie（セッション管理、セキュリティ等）
                        </p>
                      </div>
                      <div>
                        <p className="font-medium">分析Cookie</p>
                        <p className="text-yellow-700">Google Analytics等によるアクセス解析（匿名化処理済み）</p>
                      </div>
                      <div>
                        <p className="font-medium">機能Cookie</p>
                        <p className="text-yellow-700">フォーム入力補助、言語設定等のユーザー体験向上</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Cookie の無効化</h4>
                    <p className="text-sm text-gray-700">
                      ブラウザの設定によりCookieを無効化することができますが、
                      一部機能が正常に動作しない場合があります。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 利用目的 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-900 flex items-center">
                  <Eye className="mr-2" />
                  個人情報の利用目的
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">当実行委員会は、個人情報を以下の目的で利用いたします。</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">ボランティア関連</h4>
                      <ul className="text-sm space-y-1">
                        <li>• ボランティア募集・選考・連絡</li>
                        <li>• 活動内容の説明・指導</li>
                        <li>• 安全管理・緊急時対応</li>
                        <li>• 活動証明書の発行</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">大会運営関連</h4>
                      <ul className="text-sm space-y-1">
                        <li>• 大会の企画・運営</li>
                        <li>• 参加者・関係者との連絡</li>
                        <li>• 統計資料の作成</li>
                        <li>• 次回大会の案内</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Webサイト運営関連</h4>
                    <ul className="text-sm space-y-1">
                      <li>• サイトの利用状況分析・改善</li>
                      <li>• セキュリティ対策・不正アクセス防止</li>
                      <li>• お問い合わせへの回答</li>
                      <li>• 法令に基づく対応</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 第三者提供・業務委託 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-900 flex items-center">
                  <Lock className="mr-2" />
                  個人情報の第三者提供・業務委託
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">第三者提供について</h4>
                    <p className="text-gray-700 mb-3">
                      当実行委員会は、以下の場合を除き、あらかじめご本人の同意を得ることなく、
                      個人情報を第三者に提供することはありません。
                    </p>
                    <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                      <h5 className="font-semibold text-yellow-800 mb-2">第三者提供を行う場合</h5>
                      <ul className="text-sm space-y-1">
                        <li>• 法令に基づく場合</li>
                        <li>• 人の生命、身体または財産の保護のために必要がある場合</li>
                        <li>• 公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
                        <li>
                          •
                          国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">業務委託について</h4>
                    <p className="text-gray-700 mb-3">
                      当実行委員会は、個人情報の取扱いの全部または一部を外部に委託する場合があります。
                      その際は、委託先に対して適切な監督を行います。
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-900 mb-2">主な委託先</h5>
                      <ul className="text-sm space-y-1">
                        <li>• Webサイト運営・保守業者</li>
                        <li>• メール配信サービス提供者</li>
                        <li>• クラウドサービス提供者</li>
                        <li>• 印刷・発送業者</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* データの保管・国外移転 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-900 flex items-center">
                  <Globe className="mr-2" />
                  データの保管・国外移転について
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">データの保管場所</h4>
                    <p className="text-gray-700 mb-3">
                      当サイトで取得した個人情報は、以下のサービスを利用して保管・処理されます。
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">使用するクラウドサービス</h5>
                      <ul className="text-sm space-y-2">
                        <li>
                          • <strong>Vercel</strong>: Webサイトホスティング（米国・その他の国）
                        </li>
                        <li>
                          • <strong>Formspree</strong>: フォーム処理サービス（米国）
                        </li>
                        <li>
                          • <strong>Google Analytics</strong>: アクセス解析（米国・その他の国）
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">国外移転時の適切性確保措置</h4>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <ul className="text-sm space-y-1">
                        <li>• 十分性認定国または適切性認定を受けた事業者の利用</li>
                        <li>• 国際的なセキュリティ基準（SOC 2、ISO 27001等）への準拠確認</li>
                        <li>• データ処理契約における適切な保護措置の確保</li>
                        <li>• 定期的なセキュリティ監査の実施</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 未成年者の個人情報 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-900 flex items-center">
                  <Users className="mr-2" />
                  未成年者の個人情報について
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    18歳未満の方がボランティア応募やお問い合わせを行う場合は、 保護者の同意が必要です。
                  </p>

                  <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">未成年者の参加について</h4>
                    <ul className="text-sm space-y-1 text-orange-700">
                      <li>• 高校生以下の方は保護者の同意書が必要です</li>
                      <li>• 応募時に保護者の連絡先をご記入ください</li>
                      <li>• 必要に応じて保護者の方に直接確認をさせていただきます</li>
                      <li>• 活動当日は保護者の方の緊急連絡先が必要です</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">年齢確認の方法</h4>
                    <p className="text-sm text-gray-700">
                      応募フォームの生年月日入力により年齢確認を行います。
                      18歳未満と判明した場合は、別途保護者同意の手続きをご案内いたします。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 安全管理措置 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">安全管理措置</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    当実行委員会は、個人情報の漏洩、滅失または毀損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">技術的安全管理措置</h4>
                      <ul className="text-sm space-y-1">
                        <li>• SSL/TLS暗号化通信の実施</li>
                        <li>• アクセス制御の実施</li>
                        <li>• 不正アクセス対策</li>
                        <li>• 情報システムの監視</li>
                        <li>• 定期的なセキュリティ更新</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">物理的・組織的安全管理措置</h4>
                      <ul className="text-sm space-y-1">
                        <li>• 管理区域の設定</li>
                        <li>• 機器・媒体等の盗難防止</li>
                        <li>• 書類の適切な保管・廃棄</li>
                        <li>• 従事者への教育・研修</li>
                        <li>• 委託先の適切な選定・監督</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 保存期間 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">個人情報の保存期間</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    当実行委員会は、個人情報を利用目的の達成に必要な期間に限り保存し、
                    保存期間経過後は速やかに削除または廃棄いたします。
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">標準的な保存期間</h4>
                    <ul className="text-sm space-y-1">
                      <li>• ボランティア関連情報：大会終了後1年間</li>
                      <li>• お問い合わせ情報：回答完了後1年間</li>
                      <li>• アクセスログ：取得後6ヶ月間</li>
                      <li>• Cookie情報：設定に応じて最大2年間</li>
                      <li>• その他：利用目的達成後速やかに削除</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 開示・訂正等 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">個人情報の開示・訂正等</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    ご本人から個人情報の開示、訂正、追加、削除、利用停止等の請求があった場合には、
                    法令に従い、合理的な期間内に対応いたします。
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">請求方法</h4>
                    <p className="text-sm">
                      個人情報に関するお問い合わせは、下記連絡先までご連絡ください。
                      <br />
                      本人確認を行った上で、適切に対応いたします。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 方針の改定・通知 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">本方針の改定・通知</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    当実行委員会は、法令の改正や事業内容の変更等に伴い、本方針を改定することがあります。
                  </p>

                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">改定時の通知方法</h4>
                    <ul className="text-sm space-y-1 text-yellow-700">
                      <li>• 当サイトでの掲載による通知</li>
                      <li>• 重要な変更の場合は、メールによる個別通知</li>
                      <li>• 必要に応じて、再同意の取得</li>
                    </ul>
                  </div>

                  <p className="text-sm text-gray-600">
                    改定された方針は、当サイトに掲載した日から効力を生じます。
                    継続してサービスをご利用いただく場合は、改定後の方針に同意いただいたものとみなします。
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* お問い合わせ先 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">お問い合わせ先</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">太郎坊チャレンジ実行委員会</h4>
                  <div className="space-y-1 text-sm">
                    <p>個人情報保護責任者：今宿裕昭</p>
                    <p>電話：080-3204-0317</p>
                    <p>メール：information@step-out.jp</p>
                    <p>受付時間：平日 9:00-18:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 附則 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">附則</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>制定日：2024年4月1日</p>
                  <p>最終更新日：2025年6月12日</p>
                  <p>施行日：2025年6月12日</p>
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
