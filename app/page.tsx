import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Logo } from "@/components/ui/logo"
import { Footer } from "@/components/ui/footer"
import {
  MapPin,
  Calendar,
  Users,
  Clock,
  Phone,
  Mail,
  Car,
  Train,
  Target,
  CheckCircle,
  ArrowRight,
  CalendarCheck,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TaroboVolunteerRecruitment() {
  return (
    <div className="min-h-screen bg-white">
      {/* ① 共通ヘッダー */}
      <header className="bg-secondary text-white py-4 sticky top-0 z-50 shadow-md">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <Logo href="/" />
            <nav className="hidden md:flex items-center space-x-1">
              <Link
                href="https://tarobo-challenge.com/"
                className="px-4 py-2 text-white/80 hover:text-white transition-colors"
              >
                大会概要
              </Link>
              <Link
                href="https://v0-rj-ten.vercel.app/"
                className="px-4 py-2 text-white/80 hover:text-white transition-colors"
              >
                協賛募集
              </Link>
              <Link
                href="https://tarobo-challenge-kids-clean.vercel.app/"
                className="px-4 py-2 text-white/80 hover:text-white transition-colors"
              >
                こども未来
              </Link>
              <Link
                href="https://v0-16-gamma.vercel.app/"
                className="px-4 py-2 text-white/80 hover:text-white transition-colors"
              >
                ふるさと納税
              </Link>
              <Link
                href="/volunteer-form"
                className="px-4 py-2 text-accent font-medium hover:text-white transition-colors relative"
              >
                ボランティア
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"></span>
              </Link>
              <Link href="/contact" className="px-4 py-2 text-white/80 hover:text-white transition-colors">
                お問い合わせ
              </Link>
              <Link href="/organization" className="px-4 py-2 text-white/80 hover:text-white transition-colors">
                運営組織
              </Link>
            </nav>
            <div className="md:hidden">
              {/* モバイルメニューボタン */}
              <button className="p-2 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ヒーローセクション */}
      <section className="bg-gradient-to-b from-muted to-white section-spacing">
        <div className="container-custom">
          <div className="text-center mb-8">
            <Badge className="mb-6 bg-primary text-white hover:bg-primary/90 text-lg px-6 py-2">
              ボランティア募集中
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 max-w-4xl mx-auto leading-tight">
              今年は2回目！国際レベルのステアクライミング大会
              <br />
              <span className="text-primary">ボランティア募集</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              滋賀県東近江市の霊峰・太郎坊宮で開催される、関西屈指のステアクライミング競技大会でボランティアとして参加しませんか？
            </p>
          </div>

          {/* ③ メイン画像 - 16:9アスペクト比 */}
          <div className="mb-8">
            <div className="image-overlay max-w-4xl mx-auto rounded-xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%A4%AA%E9%83%8E%E5%9D%8A%E3%83%81%E3%83%A3%E3%83%AC%E3%83%B3%E3%82%B7%E3%82%99%20%E5%86%99%E7%9C%9F%E7%B4%A0%E6%9D%90.JPG-FzyAvTfqZyCsb0ppWMje22dFmoQoBJ.jpeg"
                alt="太郎坊チャレンジ - ランナーがスタートポーズを取る大会会場の様子"
                width={1600}
                height={900}
                className="w-full h-auto object-cover brightness-110 contrast-105"
                style={{ aspectRatio: "16/9" }}
                priority
              />
            </div>
          </div>

          {/* ④ ヒーロー下のCTAボタン */}
          <div className="text-center mt-8 mb-12">
            <Link href="/volunteer-form">
              <Button className="btn-primary text-lg px-10 py-3">
                ボランティアに応募する
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* ⑤ 活動日・時間のカレンダーカード */}
          <div className="max-w-3xl mx-auto mb-12">
            <Card className="border-2 border-primary/20 bg-gradient-to-b from-primary/5 to-white shadow-md">
              <CardHeader className="bg-primary/10 border-b border-primary/20">
                <CardTitle className="text-xl text-secondary flex items-center">
                  <CalendarCheck className="mr-2 text-primary" strokeWidth={2} />
                  活動日程
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="table-auto w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="py-2 px-4 text-left text-primary">日程</th>
                        <th className="py-2 px-4 text-left text-primary">時間</th>
                        <th className="py-2 px-4 text-left text-primary">内容</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <Calendar className="mr-2 h-4 w-4 text-primary" />
                            <span>2025年10月12日（日）</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <Clock className="mr-2 h-4 w-4 text-primary" />
                            <span>7:00〜13:00</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">前半シフト（受付・競技運営）</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <Calendar className="mr-2 h-4 w-4 text-primary" />
                            <span>2025年10月12日（日）</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <Clock className="mr-2 h-4 w-4 text-primary" />
                            <span>11:00〜17:00</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">後半シフト（競技運営・撤収）</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <Calendar className="mr-2 h-4 w-4 text-accent" />
                            <span>2025年10月12日（日）</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <Clock className="mr-2 h-4 w-4 text-accent" />
                            <span>7:00〜17:00</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">通しシフト（昼休憩あり）</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* メインコンテンツ */}
      <main className="container-custom">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* 左カラム - 基本情報 */}
          <div className="lg:col-span-2 space-y-12">
            {/* 大会概要 */}
            <Card className="border-2 border-gray-100">
              <CardHeader>
                <CardTitle className="text-3xl text-secondary flex items-center">
                  <Target className="mr-3 text-primary" strokeWidth={2} />
                  大会概要
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  滋賀県東近江市の霊峰・太郎坊宮で開催される、関西屈指のステアクライミング（階段駆け上がり）競技大会です。
                  約1400年の歴史を誇る勝運の神様として親しまれる太郎坊宮の神聖な石段379段を舞台に、
                  参加者が己の限界に挑戦する感動的なスポーツイベントです。
                </p>

                {/* ② 箇条書きをCheckCircleアイコン＋3列カードに再構成 */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card className="border border-primary/20 bg-primary/5 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm">1400年の歴史を持つ太郎坊宮の石段379段</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border border-primary/20 bg-primary/5 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm">国際大会レベルの専門運営</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border border-primary/20 bg-primary/5 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm">小学生からシニア、ドッグ・ペア部門まで</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border border-primary/20 bg-primary/5 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm">世界チャンピオン渡辺良治選手出場</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border border-primary/20 bg-primary/5 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm">タレント森脇健児さんゲスト参加（予定）</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border border-primary/20 bg-primary/5 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm">地元特産品が当たる抽選会も実施</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-xl font-bold text-secondary mt-8 mb-4">ボランティアの価値</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card className="border border-accent/30 bg-accent/5 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <p className="text-sm">国際レベルの運営ノウハウ習得</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border border-accent/30 bg-accent/5 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <p className="text-sm">感動の瞬間を間近で支える体験</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border border-accent/30 bg-accent/5 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <p className="text-sm">神聖な場での特別な奉仕活動</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border border-accent/30 bg-accent/5 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <p className="text-sm">多様な参加者との温かい交流</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border border-accent/30 bg-accent/5 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <p className="text-sm">将来に活かせる実践的スキル</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border border-accent/30 bg-accent/5 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <p className="text-sm">活動証明書の発行（就活に活用可）</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            {/* ボランティアの様子 */}
            <Card className="border-2 border-gray-100">
              <CardHeader>
                <CardTitle className="text-3xl text-secondary">昨年のボランティアの皆さん</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* ③ 画像を4:3アスペクト比に */}
                  <div className="image-overlay rounded-xl overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC_8119.JPG-GjdusPe0cNHAoL36NOKnrCXBZxot5r.jpeg"
                      alt="太郎坊チャレンジ2024 ボランティアスタッフ集合写真"
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover brightness-110"
                      style={{ aspectRatio: "4/3" }}
                    />
                  </div>
                  <div className="bg-accent/10 p-6 rounded-xl border border-accent/30">
                    <h4 className="font-bold text-secondary mb-3">昨年の実績</h4>
                    <p className="text-gray-700 leading-relaxed">
                      2024年大会では60名弱のボランティアスタッフが参加し、大会を大成功に導きました。
                      参加者からは「スタッフの皆さんの温かいサポートのおかげで最高の体験ができた」との声を多数いただいています。
                      今年もこの素晴らしいチームの一員として、一緒に感動を創り上げませんか？
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 活動内容 */}
            <Card className="border-2 border-gray-100">
              <CardHeader>
                <CardTitle className="text-3xl text-secondary">主な活動内容</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-bold text-primary mb-4">運営業務</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  <Card className="border border-primary/20 bg-primary/5 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm">参加者受付業務</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border border-primary/20 bg-primary/5 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm">競技エリアでの安全管理・誘導業務</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border border-primary/20 bg-primary/5 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm">計測補助・記録業務</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border border-primary/20 bg-primary/5 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm">給水所運営</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border border-primary/20 bg-primary/5 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm">表彰式運営補助</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-xl font-bold text-accent mb-4">設営・その他</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card className="border border-accent/30 bg-accent/5 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <p className="text-sm">会場設営・撤去作業</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border border-accent/30 bg-accent/5 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <p className="text-sm">観客案内・誘導</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border border-accent/30 bg-accent/5 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <p className="text-sm">駐車場整理</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border border-accent/30 bg-accent/5 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <p className="text-sm">救護所補助</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 p-6 bg-accent/10 rounded-xl border border-accent/30">
                  <h4 className="font-bold text-secondary mb-3">特別な体験</h4>
                  <p className="text-gray-700 leading-relaxed">
                    株式会社ミーティング・一般社団法人階段推進普及協会スタッフからの直接指導により、
                    国際大会レベルの運営マニュアルを学べます。世界チャンピオンや著名人との交流機会もあります。
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 交通アクセス */}
            <Card className="border-2 border-gray-100">
              <CardHeader>
                <CardTitle className="text-3xl text-secondary flex items-center">
                  <Train className="mr-3 text-primary" strokeWidth={2} />
                  交通アクセス
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Train className="text-primary mt-1 flex-shrink-0" size={24} strokeWidth={2} />
                    <div>
                      <h4 className="font-bold text-lg mb-2">近江鉄道本線「太郎坊宮前駅」徒歩10分</h4>
                      <p className="text-gray-600">
                        イベント当日は、駅から会場までシャトルジャンボタクシーの運行あり
                        <br />
                        ガチャフェスと同日開催（近江鉄道が100円で乗り放題）
                      </p>
                    </div>
                  </div>

                  <div className="bg-accent/10 border border-accent/30 p-6 rounded-xl">
                    <div className="flex items-start space-x-4">
                      <Car className="text-accent mt-1 flex-shrink-0" size={24} strokeWidth={2} />
                      <div>
                        <h4 className="font-bold text-secondary text-lg mb-2">ボランティアの皆様へ</h4>
                        <p className="text-gray-700 leading-relaxed">
                          <strong>ボランティア専用駐車場をご用意しております。</strong>
                          <br />
                          お車でお越しの際は、事前にお知らせする駐車場をご利用ください。安心してお越しください。
                          <br />
                          ※一般参加者の方は公共交通機関をご利用ください。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 右カラム - 募集要項 */}
          <div className="space-y-8">
            {/* 大会ポスター */}
            <Card className="border-2 border-gray-100">
              <CardHeader>
                <CardTitle className="text-xl text-secondary">太郎坊チャレンジ2025</CardTitle>
              </CardHeader>
              <CardContent>
                {/* ③ 画像を4:3アスペクト比に */}
                <div className="image-overlay rounded-xl overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%A4%AA%E9%83%8E%E5%9D%8A%E3%83%81%E3%83%A3%E3%83%AC%E3%83%B3%E3%82%B7%E3%82%99%20%E5%8F%82%E5%8A%A0%E8%80%85%E5%8B%9F%E9%9B%86.jpg-7q08v05OO6CHHqd0RNgbi13G7hofUG.jpeg"
                    alt="太郎坊チャレンジ2025 大会ポスター"
                    width={400}
                    height={300}
                    className="w-full h-auto object-contain brightness-110"
                    style={{ aspectRatio: "4/3" }}
                  />
                </div>
              </CardContent>
            </Card>

            {/* 募集要項カード */}
            <Card className="sticky top-20 border-2 border-primary/20 bg-gradient-to-b from-primary/5 to-white">
              <CardHeader className="bg-primary text-white rounded-t-lg">
                <CardTitle className="text-xl font-bold">募集要項</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Calendar className="text-primary mt-1 flex-shrink-0" size={20} strokeWidth={2} />
                    <div>
                      <h4 className="font-bold">開催日</h4>
                      <p className="text-sm">2025年10月12日（日）</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="text-primary mt-1 flex-shrink-0" size={20} strokeWidth={2} />
                    <div>
                      <h4 className="font-bold">活動時間</h4>
                      <div className="text-sm space-y-1">
                        <p>
                          <strong>前半：</strong>7:00〜13:00
                        </p>
                        <p>
                          <strong>後半：</strong>11:00〜17:00
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="text-primary mt-1 flex-shrink-0" size={20} strokeWidth={2} />
                    <div>
                      <h4 className="font-bold">会場</h4>
                      <p className="text-sm">
                        太郎坊・阿賀神社
                        <br />
                        （滋賀県東近江市）
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Users className="text-primary mt-1 flex-shrink-0" size={20} strokeWidth={2} />
                    <div>
                      <h4 className="font-bold">募集人数</h4>
                      <p className="text-sm">60名</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-bold mb-3">募集対象</h4>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm">高校生以上（高校生は保護者の同意が必要）</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm">スポーツイベントに興味のある方</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm">体力に自信のある方</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm">責任感を持って活動できる方</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-bold mb-3">特典</h4>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm">お弁当・飲み物提供</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm">特製Tシャツ（非売品）</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm">ボランティア活動証明書発行可能</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm">著名人との交流機会</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-bold mb-3">交通費</h4>
                  <p className="text-sm">支給なし（各自負担）</p>
                </div>

                <div className="pt-4">
                  <Link href="/volunteer-form">
                    <Button className="btn-primary w-full text-lg py-4">
                      ボランティアに応募する
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>

                <p className="text-xs text-gray-500 text-center">募集期間：2025年6月3日〜9月19日</p>
              </CardContent>
            </Card>

            {/* お問い合わせ */}
            <Card className="border-2 border-gray-100">
              <CardHeader>
                <CardTitle className="text-xl text-secondary">お問い合わせ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-bold">太郎坊チャレンジ実行委員会</h4>
                  <p className="text-sm text-gray-600">担当者：今宿裕昭</p>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-primary" strokeWidth={2} />
                  <span className="text-sm">080-3204-0317</span>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-primary" strokeWidth={2} />
                  <span className="text-sm">information@step-out.jp</span>
                </div>

                <p className="text-xs text-gray-500">
                  受付時間：平日9:00-18:00
                  <br />
                  ※土日祝日は対応できない場合があります
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA セクション */}
        <section className="section-spacing text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-secondary mb-6">一緒に感動を創り上げませんか？</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              太郎坊チャレンジ2025で、参加者の挑戦を支え、
              <br />
              特別な体験を共有しましょう。
            </p>
            <Link href="/volunteer-form">
              <Button className="btn-primary text-xl px-12 py-4">
                今すぐ応募する
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* フッター */}
      <Footer />

      {/* ④ モバイル用スティッキーCTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
        <Link href="/volunteer-form">
          <Button className="btn-primary w-full py-3">
            ボランティアに応募する
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
