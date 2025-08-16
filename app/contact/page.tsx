"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitResult(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      // Formspreeに送信
      const response = await fetch("https://formspree.io/f/xeokqaae", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setSubmitResult({
          success: true,
          message:
            "お問い合わせを送信いたしました。ご連絡いただきありがとうございます。担当者より折り返しご連絡いたします。",
        })
        form.reset()
      } else {
        const data = await response.json()
        throw new Error(data.error || "送信に失敗しました")
      }
    } catch (error) {
      setSubmitResult({
        success: false,
        message:
          "送信に失敗しました。しばらく時間をおいて再度お試しいただくか、直接 information@step-out.jp までご連絡ください。",
      })
    } finally {
      // 送信完了後、結果に関わらずページトップにスムーズスクロール
      window.scrollTo({ top: 0, behavior: "smooth" })
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted to-white">
      {/* ヘッダー */}
      <header className="bg-secondary text-white py-4">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <span className="text-lg font-semibold">
                太郎坊チャレンジ2025
                <br />
                ボランティア募集 特別サイト
              </span>
            </Link>
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
              <Link href="/volunteer-form" className="px-4 py-2 text-white/80 hover:text-white transition-colors">
                ボランティア
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 text-accent font-medium hover:text-white transition-colors relative"
              >
                お問い合わせ
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"></span>
              </Link>
              <Link href="/organization" className="px-4 py-2 text-white/80 hover:text-white transition-colors">
                運営組織
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="container-custom py-8">
        <div className="max-w-4xl mx-auto">
          {/* 戻るリンク */}
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center text-primary hover:text-primary-hover">
              <ArrowLeft className="mr-2 h-4 w-4" />
              トップページに戻る
            </Link>
          </div>

          {/* タイトル */}
          <div className="text-center mb-8">
            <h1 className="text-h1 text-secondary">お問い合わせ</h1>
            <p className="text-gray-600 mt-2">
              太郎坊チャレンジ2025に関するご質問・ご相談はこちらからお気軽にお問い合わせください。
            </p>
          </div>

          {/* 送信結果メッセージ */}
          {submitResult && (
            <div
              className={`mb-6 p-6 rounded-xl border-2 shadow-lg flex items-start space-x-3 ${
                submitResult.success
                  ? "bg-green-50 border-green-300 text-green-800"
                  : "bg-red-50 border-red-300 text-red-800"
              }`}
            >
              {submitResult.success ? (
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              ) : (
                <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
              )}
              <div>
                <h3 className="font-semibold text-lg mb-2">{submitResult.success ? "送信完了" : "送信エラー"}</h3>
                <p className="text-sm leading-relaxed">{submitResult.message}</p>
              </div>
            </div>
          )}

          <div className="grid lg:grid-cols-3 gap-8">
            {/* 左カラム - お問い合わせフォーム */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-secondary">お問い合わせフォーム</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Formspree用の隠しフィールド */}
                    <input type="hidden" name="_subject" value="太郎坊チャレンジ2025 お問い合わせ" />

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="lastName">
                          姓 <span className="text-red-500">*</span>
                        </Label>
                        <Input id="lastName" name="姓" placeholder="例：山田" required disabled={isSubmitting} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="firstName">
                          名 <span className="text-red-500">*</span>
                        </Label>
                        <Input id="firstName" name="名" placeholder="例：太郎" required disabled={isSubmitting} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">
                        メールアドレス <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="例：example@email.com"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">電話番号</Label>
                      <Input
                        id="phone"
                        name="電話番号"
                        type="tel"
                        placeholder="例：090-1234-5678"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">
                        お問い合わせ種別 <span className="text-red-500">*</span>
                      </Label>
                      <Select name="お問い合わせ種別" disabled={isSubmitting} required>
                        <SelectTrigger>
                          <SelectValue placeholder="選択してください" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ボランティアについて">ボランティアについて</SelectItem>
                          <SelectItem value="大会について">大会について</SelectItem>
                          <SelectItem value="アクセスについて">アクセスについて</SelectItem>
                          <SelectItem value="メディア・取材について">メディア・取材について</SelectItem>
                          <SelectItem value="スポンサーについて">スポンサーについて</SelectItem>
                          <SelectItem value="その他">その他</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">
                        件名 <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="subject"
                        name="件名"
                        placeholder="例：ボランティア応募について"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        お問い合わせ内容 <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="お問い合わせ内容をできるだけ詳しくご記入ください。"
                        className="min-h-[150px]"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <strong>個人情報の取扱いについて</strong>
                        <br />
                        お預かりした個人情報は、お問い合わせへの回答のためのみに使用し、
                        適切に管理いたします。第三者への提供は行いません。
                      </p>
                    </div>

                    <Button type="submit" className="btn-primary w-full py-3 text-lg" disabled={isSubmitting}>
                      <div className="flex items-center justify-center space-x-2">
                        {isSubmitting && (
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                        )}
                        <span>{isSubmitting ? "送信中..." : "お問い合わせを送信する"}</span>
                      </div>
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* 右カラム - 連絡先情報 */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-secondary">連絡先</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">太郎坊チャレンジ実行委員会</h4>
                    <p className="text-sm text-gray-600 mb-3">担当者：今宿裕昭</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Phone className="text-primary mt-1 flex-shrink-0" size={18} />
                      <div>
                        <p className="font-medium">電話</p>
                        <p className="text-sm">080-3204-0317</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Mail className="text-primary mt-1 flex-shrink-0" size={18} />
                      <div>
                        <p className="font-medium">メール</p>
                        <p className="text-sm">information@step-out.jp</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="text-primary mt-1 flex-shrink-0" size={18} />
                      <div>
                        <p className="font-medium">受付時間</p>
                        <p className="text-sm">
                          平日 9:00-18:00
                          <br />
                          ※土日祝日は対応できない場合があります
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                      <div>
                        <p className="font-medium">大会会場</p>
                        <p className="text-sm">
                          太郎坊・阿賀神社
                          <br />
                          〒527-0091
                          <br />
                          滋賀県東近江市小脇町2247
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-secondary">よくあるご質問</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h5 className="font-medium text-sm">Q. ボランティア経験がなくても参加できますか？</h5>
                    <p className="text-xs text-gray-600 mt-1">
                      A. はい、経験は問いません。当日に詳しく説明いたします。
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-sm">Q. 雨天の場合はどうなりますか？</h5>
                    <p className="text-xs text-gray-600 mt-1">
                      A. 小雨決行、荒天中止です。中止の場合は前日までにご連絡いたします。
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-sm">Q. ボランティアは駐車場を利用できますか？</h5>
                    <p className="text-xs text-gray-600 mt-1">
                      A. はい、ボランティア専用駐車場をご用意しております。詳細は応募後にご案内いたします。
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
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
