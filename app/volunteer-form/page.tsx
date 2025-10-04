"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Calendar, Clock, Info, CheckCircle, AlertCircle, Car } from "lucide-react"
import Link from "next/link"

export default function VolunteerApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // handleSubmit関数の前に郵便番号検索関数を追加
  const handlePostalCodeSearch = async () => {
    const postalCodeInput = document.getElementById("postalCode") as HTMLInputElement
    const postalCode = postalCodeInput?.value.replace(/[^0-9]/g, "")

    if (!postalCode || postalCode.length !== 7) {
      alert("正しい郵便番号を入力してください（例：1234567）")
      return
    }

    try {
      const response = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${postalCode}`)
      const data = await response.json()

      if (data.results && data.results.length > 0) {
        const result = data.results[0]

        // 都道府県を設定
        const prefectureSelect = document.querySelector('select[name="都道府県"]') as HTMLSelectElement
        if (prefectureSelect) {
          prefectureSelect.value = result.address1
        }

        // 市区町村を設定
        const cityInput = document.getElementById("city") as HTMLInputElement
        if (cityInput) {
          cityInput.value = result.address2 + result.address3
        }
      } else {
        alert("該当する住所が見つかりませんでした")
      }
    } catch (error) {
      alert("住所検索に失敗しました。手動で入力してください。")
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // 募集終了のため、フォーム送信をブロック
    setSubmitResult({
      success: false,
      message: "申し訳ございません。10月4日をもちまして、新規のボランティア募集を締め切りました。多数のご応募ありがとうございました。",
    })
    window.scrollTo({ top: 0, behavior: "smooth" })
    return

    const form = e.currentTarget
    const formData = new FormData(form)

    // デバッグ用：送信データを確認
    console.log("送信データ:")
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`)
    }

    // 必須フィールドのチェック
    const requiredFields = ["姓", "名", "email", "電話番号", "郵便番号", "都道府県", "市区町村", "番地・建物名"]
    const missingFields = requiredFields.filter((field) => !formData.get(field))

    if (missingFields.length > 0) {
      setSubmitResult({
        success: false,
        message: `以下の必須項目が入力されていません: ${missingFields.join(", ")}`,
      })
      setIsSubmitting(false)
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    // 参加希望日程のチェック
    const schedules = formData.getAll("参加希望日程")
    if (schedules.length === 0) {
      setSubmitResult({
        success: false,
        message: "参加希望日程を選択してください。",
      })
      setIsSubmitting(false)
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    // 個人情報取扱い同意のチェック
    const termsAgreed = formData.get("個人情報取扱い同意")
    if (!termsAgreed) {
      setSubmitResult({
        success: false,
        message: "個人情報の取扱いについて同意してください。",
      })
      setIsSubmitting(false)
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    try {
      // Formspreeに送信
      const response = await fetch("https://formspree.io/f/xgvyeaak", {
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
            "ボランティア応募を送信いたしました。ご応募いただきありがとうございます。担当者より折り返しご連絡いたします。",
        })
        form.reset()
        // 送信成功時にページトップにスクロール
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else {
        const data = await response.json()
        console.error("Formspree error:", data)
        throw new Error(data.error || "送信に失敗しました")
      }
    } catch (error) {
      console.error("送信エラー:", error)
      setSubmitResult({
        success: false,
        message:
          "送信に失敗しました。しばらく時間をおいて再度お試しいただくか、直接 information@step-out.jp までご連絡ください。",
      })
      // 送信失敗時もページトップにスクロール
      window.scrollTo({ top: 0, behavior: "smooth" })
    } finally {
      setIsSubmitting(false)
    }
  }

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
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* 戻るリンク */}
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
              <ArrowLeft className="mr-2 h-4 w-4" />
              募集ページに戻る
            </Link>
          </div>

          {/* タイトル */}
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-900">
              太郎坊チャレンジ2025
              <br />
              ボランティア応募フォーム
            </h1>
            <p className="text-gray-600 mt-2">必要事項をご記入の上、「応募を送信する」ボタンをクリックしてください。</p>
          </div>

          {/* 募集終了のお知らせ */}
          <div className="mb-8 p-6 bg-red-50 border-2 border-red-200 rounded-lg">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-6 w-6 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg text-red-800 mb-2">募集を締め切りました</h3>
                <p className="text-red-700">
                  10月4日（土）をもちまして、新規のボランティア募集を終了いたしました。<br />
                  たくさんのご応募をいただき、誠にありがとうございました。<br />
                  お問い合わせは<Link href="/contact" className="text-blue-600 underline hover:text-blue-800">お問い合わせフォーム</Link>よりお願いいたします。
                </p>
              </div>
            </div>
          </div>

          {/* 送信結果メッセージ */}
          {submitResult && (
            <div
              className={`mb-6 p-6 rounded-lg border-2 shadow-lg ${
                submitResult.success
                  ? "bg-green-50 border-green-300 text-green-800"
                  : "bg-red-50 border-red-300 text-red-800"
              }`}
            >
              <div className="flex items-start space-x-3">
                {submitResult.success ? (
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="h-6 w-6 text-red-600 mt-0.5 flex-shrink-0" />
                )}
                <div>
                  <h3
                    className={`font-semibold text-lg mb-2 ${submitResult.success ? "text-green-800" : "text-red-800"}`}
                  >
                    {submitResult.success ? "送信完了" : "送信エラー"}
                  </h3>
                  <p className="text-sm leading-relaxed">{submitResult.message}</p>
                </div>
              </div>
            </div>
          )}

          {/* フォーム */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Formspree用の隠しフィールド */}
            <input type="hidden" name="_subject" value="太郎坊チャレンジ2025 ボランティア応募" />

            {/* 基本情報 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">基本情報</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
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

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="lastNameKana">
                      姓（カナ） <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="lastNameKana"
                      name="姓（カナ）"
                      placeholder="例：ヤマダ"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="firstNameKana">
                      名（カナ） <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="firstNameKana"
                      name="名（カナ）"
                      placeholder="例：タロウ"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="birthdate">
                    生年月日 <span className="text-red-500">*</span>
                  </Label>
                  <div className="grid grid-cols-3 gap-2">
                    <Select name="生年月日（年）" disabled={isSubmitting} required>
                      <SelectTrigger>
                        <SelectValue placeholder="年" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 100 }, (_, i) => (
                          <SelectItem key={i} value={`${2025 - i}`}>
                            {2025 - i}年
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select name="生年月日（月）" disabled={isSubmitting} required>
                      <SelectTrigger>
                        <SelectValue placeholder="月" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 12 }, (_, i) => (
                          <SelectItem key={i} value={`${i + 1}`}>
                            {i + 1}月
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select name="生年月日（日）" disabled={isSubmitting} required>
                      <SelectTrigger>
                        <SelectValue placeholder="日" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 31 }, (_, i) => (
                          <SelectItem key={i} value={`${i + 1}`}>
                            {i + 1}日
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gender">
                    性別 <span className="text-red-500">*</span>
                  </Label>
                  <RadioGroup name="性別" className="flex space-x-4" disabled={isSubmitting} required>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="男性" id="male" />
                      <Label htmlFor="male">男性</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="女性" id="female" />
                      <Label htmlFor="female">女性</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="その他" id="other" />
                      <Label htmlFor="other">その他</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="affiliation">所属</Label>
                  <Input id="affiliation" name="所属" placeholder="例：○○高等学校、○○大学" disabled={isSubmitting} />
                  <p className="text-xs text-gray-500">※ 高校名、大学名を記載してください（任意項目）</p>
                </div>
              </CardContent>
            </Card>

            {/* 連絡先情報 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">連絡先情報</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
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
                  <Label htmlFor="emailConfirm">
                    メールアドレス（確認用） <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="emailConfirm"
                    name="メールアドレス（確認用）"
                    type="email"
                    placeholder="例：example@email.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">
                    電話番号 <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="電話番号"
                    type="tel"
                    placeholder="例：090-1234-5678"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="postalCode">
                    郵便番号 <span className="text-red-500">*</span>
                  </Label>
                  <div className="flex space-x-2">
                    <Input
                      id="postalCode"
                      name="郵便番号"
                      placeholder="例：123-4567"
                      required
                      className="max-w-[200px]"
                      disabled={isSubmitting}
                    />
                    <Button type="button" variant="outline" onClick={handlePostalCodeSearch} disabled={isSubmitting}>
                      住所検索
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="prefecture">
                    都道府県 <span className="text-red-500">*</span>
                  </Label>
                  <Select name="都道府県" disabled={isSubmitting} required>
                    <SelectTrigger>
                      <SelectValue placeholder="選択してください" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="滋賀県">滋賀県</SelectItem>
                      <SelectItem value="京都府">京都府</SelectItem>
                      <SelectItem value="大阪府">大阪府</SelectItem>
                      <SelectItem value="兵庫県">兵庫県</SelectItem>
                      <SelectItem value="奈良県">奈良県</SelectItem>
                      <SelectItem value="和歌山県">和歌山県</SelectItem>
                      <SelectItem value="三重県">三重県</SelectItem>
                      <SelectItem value="愛知県">愛知県</SelectItem>
                      <SelectItem value="岐阜県">岐阜県</SelectItem>
                      <SelectItem value="福井県">福井県</SelectItem>
                      <SelectItem value="石川県">石川県</SelectItem>
                      <SelectItem value="富山県">富山県</SelectItem>
                      <SelectItem value="その他">その他</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city">
                    市区町村 <span className="text-red-500">*</span>
                  </Label>
                  <Input id="city" name="市区町村" placeholder="例：東近江市" required disabled={isSubmitting} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">
                    番地・建物名 <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="address"
                    name="番地・建物名"
                    placeholder="例：小脇町2247"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </CardContent>
            </Card>

            {/* 参加希望 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">参加希望</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label className="text-base font-medium">
                      参加希望日程 <span className="text-red-500">*</span>
                    </Label>
                    <p className="text-sm text-gray-600 mt-1 mb-3">
                      前半のみ、後半のみ、または通し（前半・後半両方）での参加が可能です。ご希望に合わせて選択してください。
                    </p>
                  </div>

                  {/* 既存のカード部分はそのまま */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="border-2 hover:border-blue-500 cursor-pointer transition-all">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-2">
                          <Checkbox
                            id="schedule1"
                            name="参加希望日程"
                            value="前半（7:00〜13:00）"
                            className="mt-1"
                            disabled={isSubmitting}
                          />
                          <div className="space-y-1">
                            <Label htmlFor="schedule1" className="font-medium">
                              前半（7:00〜13:00）
                            </Label>
                            <div className="text-sm text-gray-500 flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>2025年10月12日（日）</span>
                            </div>
                            <div className="text-sm text-gray-500 flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>集合時間：7:00</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-2 hover:border-blue-500 cursor-pointer transition-all">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-2">
                          <Checkbox
                            id="schedule2"
                            name="参加希望日程"
                            value="後半（11:00〜17:00）"
                            className="mt-1"
                            disabled={isSubmitting}
                          />
                          <div className="space-y-1">
                            <Label htmlFor="schedule2" className="font-medium">
                              後半（11:00〜17:00）
                            </Label>
                            <div className="text-sm text-gray-500 flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>2025年10月12日（日）</span>
                            </div>
                            <div className="text-sm text-gray-500 flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>集合時間：11:00</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* 通し参加のオプションを追加 */}
                  <Card className="border-2 hover:border-green-500 cursor-pointer transition-all bg-green-50">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="schedule3"
                          name="参加希望日程"
                          value="通し（7:00〜17:00）"
                          className="mt-1"
                          disabled={isSubmitting}
                        />
                        <div className="space-y-1">
                          <Label htmlFor="schedule3" className="font-medium text-green-800">
                            通し（7:00〜17:00）
                          </Label>
                          <div className="text-sm text-green-600 flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>2025年10月12日（日）</span>
                          </div>
                          <div className="text-sm text-green-600 flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>前半・後半を通して参加</span>
                          </div>
                          <p className="text-xs text-green-700">※ 昼食時間（13:00〜14:00）は休憩となります</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preferredRole">希望する活動内容（複数選択可）</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {[
                      "参加者受付業務",
                      "競技エリアでの安全管理・誘導",
                      "計測補助・記録業務",
                      "給水所運営",
                      "表彰式運営補助",
                      "会場設営・撤去作業",
                      "観客案内・誘導",
                      "どの業務でも可",
                    ].map((role, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Checkbox
                          id={`role${index + 1}`}
                          name="希望する活動内容"
                          value={role}
                          disabled={isSubmitting}
                        />
                        <Label htmlFor={`role${index + 1}`}>{role}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">ボランティア経験</Label>
                  <RadioGroup name="ボランティア経験" disabled={isSubmitting}>
                    {["経験なし", "少しある（1〜2回）", "ある（3〜5回）", "多数（6回以上）"].map((exp, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <RadioGroupItem value={exp} id={`exp-${index}`} />
                        <Label htmlFor={`exp-${index}`}>{exp}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="skills">特技・資格（該当するものがあれば）</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {["救急救命の知識・資格", "英語対応可能", "その他外国語対応可能", "スポーツイベント運営経験"].map(
                      (skill, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Checkbox id={`skill${index + 1}`} name="特技・資格" value={skill} disabled={isSubmitting} />
                          <Label htmlFor={`skill${index + 1}`}>{skill}</Label>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                    <Car className="mr-2 h-4 w-4" />
                    交通手段について
                  </h4>
                  <p className="text-sm text-green-700">
                    ボランティアの皆様には専用駐車場をご用意しております。
                    お車でお越しの方は、応募確定後に駐車場の詳細をご案内いたします。
                    公共交通機関でお越しの方には、最寄り駅からのシャトルバスもご利用いただけます。
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="transportation">
                    交通手段 <span className="text-red-500">*</span>
                  </Label>
                  <RadioGroup name="交通手段" disabled={isSubmitting} required>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="自家用車（ボランティア専用駐車場利用）" id="car" />
                      <Label htmlFor="car">自家用車（ボランティア専用駐車場利用）</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="公共交通機関（近江鉄道・シャトルバス）" id="public" />
                      <Label htmlFor="public">公共交通機関（近江鉄道・シャトルバス）</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="徒歩・自転車" id="walk" />
                      <Label htmlFor="walk">徒歩・自転車</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="その他" id="other-transport" />
                      <Label htmlFor="other-transport">その他</Label>
                    </div>
                  </RadioGroup>
                  <p className="text-xs text-gray-500">
                    ※ 自家用車をご選択の方には、応募確定後に駐車場の詳細をご案内いたします
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">その他、伝えておきたいこと（アレルギー・健康上の配慮など）</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="例：食物アレルギー（卵）があります。"
                    className="min-h-[100px]"
                    disabled={isSubmitting}
                  />
                </div>
              </CardContent>
            </Card>

            {/* 個人情報の取り扱い */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-900 flex items-center">
                  <Info className="mr-2 h-5 w-5" />
                  個人情報の取扱いについて
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                  <div>
                    <h4 className="font-semibold">利用目的</h4>
                    <p className="text-sm text-gray-700">
                      取得した個人情報は、当該イベントのボランティアの運営のためのみに利用し、
                      他イベントのボランティアの募集・運営を含め目的外に利用いたしません。
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">適正管理</h4>
                    <p className="text-sm text-gray-700">
                      個人情報の管理については、紛失・漏洩を防止するため、適切な対策を実施します。
                      またイベント終了後速やかに廃棄致します。
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" name="個人情報取扱い同意" value="同意する" required disabled={isSubmitting} />
                  <Label htmlFor="terms" className="text-sm font-medium">
                    上記個人情報の取扱いについて同意の上、ボランティアに応募します。
                    <span className="text-red-500">*</span>
                  </Label>
                </div>
              </CardContent>
            </Card>

            {/* 送信ボタン */}
            <div className="flex justify-center pt-8">
              <Button
                type="submit"
                className="bg-gray-400 text-white px-8 py-6 text-lg font-semibold shadow-lg opacity-50 cursor-not-allowed"
                disabled={true}
              >
                募集を締め切りました
              </Button>
            </div>
          </form>
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
