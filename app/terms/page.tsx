"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, FileText, AlertTriangle, Users, Shield, Camera, Stethoscope, Phone, Ban } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

export default function TermsPage() {
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
            <h1 className="text-2xl md:text-3xl font-bold text-blue-900">利用規約</h1>
            <p className="text-gray-600 mt-2">太郎坊チャレンジ2025 ボランティア参加に関する利用規約</p>
          </div>

          <div className="space-y-8">
            {/* 総則 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-900 flex items-center">
                  <FileText className="mr-2" />
                  第1条（総則）
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    本利用規約（以下「本規約」といいます）は、太郎坊チャレンジ実行委員会（以下「当実行委員会」といいます）が
                    主催する「太郎坊チャレンジ2025」（以下「本大会」といいます）におけるボランティア活動に関して、
                    ボランティア参加者（以下「参加者」といいます）と当実行委員会との間の権利義務関係を定めるものです。
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">適用範囲</h4>
                    <ul className="text-sm space-y-1">
                      <li>• 本大会のボランティア活動に参加するすべての方</li>
                      <li>• 当実行委員会が提供するサービス・情報の利用者</li>
                      <li>• 本大会に関連するすべての活動</li>
                    </ul>
                  </div>
                  <p className="text-gray-700">
                    参加者は、本規約に同意した上で、ボランティア活動に参加するものとします。
                    本規約に同意できない場合は、ボランティア活動への参加をお断りさせていただきます。
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* ボランティア活動の内容 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-900 flex items-center">
                  <Users className="mr-2" />
                  第2条（ボランティア活動の内容）
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">参加者は、当実行委員会の指示に従い、以下の活動を行うものとします。</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">運営業務</h4>
                      <ul className="text-sm space-y-1">
                        <li>• 参加者受付業務</li>
                        <li>• 競技エリアでの安全管理・誘導</li>
                        <li>• 計測補助・記録業務</li>
                        <li>• 給水所運営</li>
                        <li>• 表彰式運営補助</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">設営・その他</h4>
                      <ul className="text-sm space-y-1">
                        <li>• 会場設営・撤去作業</li>
                        <li>• 観客案内・誘導</li>
                        <li>• 駐車場整理</li>
                        <li>• 救護所補助</li>
                        <li>• その他運営に必要な業務</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">活動内容の変更</h4>
                    <p className="text-sm text-yellow-700">
                      当実行委員会は、大会運営上の必要性に応じて、事前の通知なく活動内容を変更する場合があります。
                      参加者は、当日の状況に応じて、担当者の指示に従って活動していただくことがあります。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 参加者の義務 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-900 flex items-center">
                  <Shield className="mr-2" />
                  第3条（参加者の義務）
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">参加者は、以下の事項を遵守するものとします。</p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">1. 基本的な義務</h4>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• 当実行委員会の指示に従い、誠実にボランティア活動を行うこと</li>
                        <li>• 活動中は安全に十分注意し、事故防止に努めること</li>
                        <li>• 他の参加者、大会参加者、観客等に対して礼儀正しく接すること</li>
                        <li>• 活動に適した服装・装備で参加すること</li>
                        <li>• 健康状態に問題がある場合は事前に申告すること</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">2. 禁止事項</h4>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• 法令に違反する行為</li>
                        <li>• 他者に迷惑をかける行為</li>
                        <li>• 大会の運営を妨害する行為</li>
                        <li>• 政治的・宗教的活動</li>
                        <li>• 営利目的の活動</li>
                        <li>• 飲酒・喫煙（指定場所以外）</li>
                        <li>• SNS等での不適切な情報発信</li>
                        <li>• 機密情報の漏洩</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">3. 申告義務</h4>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• 活動に支障をきたす可能性のある疾病・既往症</li>
                        <li>• アレルギー等の健康上の配慮が必要な事項</li>
                        <li>• 緊急時の連絡先</li>
                        <li>• その他、活動に影響を与える可能性のある事項</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 参加の取消・辞退 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">第4条（参加の取消・辞退）</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">1. 参加の取消</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      当実行委員会は、以下の場合、参加者のボランティア参加を取り消すことがあります。
                    </p>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• 本規約に違反した場合</li>
                      <li>• 申込内容に虚偽の記載があった場合</li>
                      <li>• 健康上の理由により活動が困難と判断された場合</li>
                      <li>• その他、当実行委員会が参加不適当と判断した場合</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">2. 参加の辞退</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      参加者がボランティア参加を辞退する場合は、速やかに当実行委員会に連絡するものとします。
                      大会直前（7日前以降）の辞退は、運営に支障をきたす可能性があるため、
                      やむを得ない事情がある場合を除き、できるだけお控えください。
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">辞退時の個人情報の取扱い</h4>
                    <p className="text-sm text-blue-700">
                      参加辞退後の個人情報は、
                      <Link href="/privacy" className="text-blue-600 hover:underline">
                        個人情報保護方針
                      </Link>
                      に基づき、適切に管理・削除いたします。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 責任・安全配慮 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-900 flex items-center">
                  <AlertTriangle className="mr-2" />
                  第5条（責任・安全配慮）
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">1. 当実行委員会の責任</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      当実行委員会は、参加者が安全にボランティア活動を行えるよう、
                      必要な情報提供、安全対策、環境整備等の安全配慮義務を果たします。
                      当実行委員会の故意または重過失により参加者に損害が生じた場合は、
                      適切な範囲で損害賠償責任を負います。
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">2. 参加者の責任</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      参加者は、ボランティア活動に伴う一般的なリスクを理解した上で参加するものとします。
                      参加者の故意または重過失により当実行委員会または第三者に損害を与えた場合は、
                      参加者がその責任を負うものとします。
                    </p>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">保険について</h4>
                    <p className="text-sm text-yellow-700">
                      当実行委員会では、ボランティア活動保険に加入しており、活動中の事故等による
                      怪我や損害について一定の補償を行います。ただし、補償内容・金額には限りがあります。
                      必要に応じて、個人での保険加入をお勧めいたします。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 緊急時対応 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-900 flex items-center">
                  <Phone className="mr-2" />
                  第6条（緊急時対応）
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">1. 緊急連絡体制</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      当実行委員会は、活動中の緊急事態に備え、適切な連絡体制を整備します。
                      参加者には活動当日、緊急連絡先リストと対応マニュアルを配布します。
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">2. 医療措置への同意</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      参加者は、活動中に負傷・疾病等が発生し、緊急の医療措置が必要となった場合、
                      当実行委員会が医療機関への搬送、応急処置等の必要な措置を講じることに同意するものとします。
                      この場合、当実行委員会は速やかに参加者の緊急連絡先に連絡します。
                    </p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">緊急時の指揮命令系統</h4>
                    <p className="text-sm text-red-700">
                      緊急事態発生時は、各エリアの責任者の指示に従ってください。 全体統括責任者の指示が最優先されます。
                      自己判断での行動は、二次災害の原因となる可能性がありますので、避けてください。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 健康・医療情報 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-900 flex items-center">
                  <Stethoscope className="mr-2" />
                  第7条（健康・医療情報）
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">1. 健康状態の申告</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      参加者は、活動に支障をきたす可能性のある疾病・既往症、アレルギー等の健康上の問題がある場合、
                      事前に当実行委員会に申告するものとします。申告がない場合、適切な対応ができない可能性があります。
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">2. 健康管理の責任</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      参加者は、活動当日の体調管理に努め、体調不良の場合は無理をせず、
                      担当者に申し出るものとします。熱中症予防等の健康管理にも十分注意してください。
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">医療情報の取扱い</h4>
                    <p className="text-sm text-green-700">
                      参加者から提供された健康・医療情報は、安全配慮のためにのみ利用し、
                      厳重に管理します。緊急時を除き、第三者への提供は行いません。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 肖像権・知的財産権 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-900 flex items-center">
                  <Camera className="mr-2" />
                  第8条（肖像権・知的財産権）
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">1. 肖像権の利用許諾</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      参加者は、本大会中に撮影された自身の写真・動画等について、
                      当実行委員会が広報活動、記録作成、次回大会の案内等の目的で、
                      Webサイト、SNS、印刷物等で利用することを許諾するものとします。
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">2. 利用の制限</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      当実行委員会は、参加者の肖像を利用する際、参加者の名誉・尊厳を損なうような
                      利用は行いません。また、商業利用を目的とした第三者への提供は、
                      事前に参加者の同意を得るものとします。
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">肖像利用の拒否</h4>
                    <p className="text-sm text-blue-700">
                      肖像の利用を希望しない参加者は、事前に当実行委員会に申し出ることができます。
                      その場合、可能な限り当該参加者の肖像が特定できる形での利用は控えます。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 個人情報 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">第9条（個人情報の取扱い）</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    当実行委員会は、参加者の個人情報を適切に管理し、
                    <Link href="/privacy" className="text-blue-600 hover:underline">
                      個人情報保護方針
                    </Link>
                    に従って取り扱います。
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">利用目的</h4>
                    <ul className="text-sm space-y-1">
                      <li>• ボランティア活動の運営・管理</li>
                      <li>• 安全管理・緊急時対応</li>
                      <li>• 活動証明書の発行</li>
                      <li>• 次回大会の案内（希望者のみ）</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">第三者提供</h4>
                    <p className="text-sm text-yellow-700">
                      当実行委員会は、以下の場合を除き、参加者の個人情報を第三者に提供しません。
                    </p>
                    <ul className="text-sm space-y-1 mt-2">
                      <li>• 法令に基づく場合</li>
                      <li>• 人の生命・身体・財産の保護のために必要がある場合</li>
                      <li>• 公衆衛生の向上または児童の健全育成のために特に必要がある場合</li>
                      <li>• 国の機関・地方公共団体等への協力が必要な場合</li>
                      <li>• 業務委託先への提供（適切な監督を行います）</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 反社会的勢力の排除 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-900 flex items-center">
                  <Ban className="mr-2" />
                  第10条（反社会的勢力の排除）
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    参加者は、自らが暴力団、暴力団員、暴力団準構成員、暴力団関係企業、総会屋等の反社会的勢力に
                    該当しないことを表明し、将来にわたっても該当しないことを確約するものとします。
                  </p>
                  <p className="text-gray-700">
                    当実行委員会は、参加者が反社会的勢力に該当すると判明した場合、
                    何らの催告なく参加資格を取り消すことができるものとします。
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 変更・中止 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">第11条（大会の変更・中止）</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    当実行委員会は、以下の事由により、大会の内容変更、延期、中止を行う場合があります。
                  </p>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">不可抗力事由</h4>
                    <ul className="text-sm space-y-1">
                      <li>• 天候不良（台風、豪雨、雷等）</li>
                      <li>• 地震、津波、火山噴火等の自然災害</li>
                      <li>• 感染症の流行（パンデミック）</li>
                      <li>• テロ、戦争、内乱、暴動</li>
                      <li>• 行政機関による命令・指示</li>
                      <li>• 会場の損壊・使用不能</li>
                      <li>• その他、当実行委員会の責によらない事由</li>
                    </ul>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-800 mb-2">中止の場合</h4>
                      <ul className="text-sm space-y-1">
                        <li>• 前日までに決定した場合は事前連絡</li>
                        <li>• 当日の場合は現地で判断・連絡</li>
                        <li>• 交通費等の補償は行いません</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-800 mb-2">変更の場合</h4>
                      <ul className="text-sm space-y-1">
                        <li>• 可能な限り事前に連絡</li>
                        <li>• 活動内容の変更あり</li>
                        <li>• 参加継続が困難な場合は辞退可能</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 規約の変更 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">第12条（規約の変更）</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    当実行委員会は、必要に応じて本規約を変更することができます。
                    変更後の規約は、当サイトに掲載した時点で効力を生じるものとします。
                  </p>
                  <p className="text-gray-700">
                    重要な変更がある場合は、登録されたメールアドレス宛に通知します。
                    変更後も継続して参加される場合は、変更後の規約に同意したものとみなします。
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 準拠法・管轄 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">第13条（準拠法・管轄裁判所）</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-gray-700">本規約は、日本法に準拠し、日本法に従って解釈されるものとします。</p>
                  <p className="text-gray-700">
                    本規約に関して紛争が生じた場合は、大津地方裁判所を第一審の専属的合意管轄裁判所とします。
                  </p>
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
