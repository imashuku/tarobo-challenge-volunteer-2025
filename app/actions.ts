"use server"

interface ContactFormData {
  lastName: string
  firstName: string
  email: string
  phone: string
  category: string
  subject: string
  message: string
}

interface VolunteerFormData {
  lastName: string
  firstName: string
  lastNameKana: string
  firstNameKana: string
  birthYear: string
  birthMonth: string
  birthDay: string
  gender: string
  email: string
  emailConfirm: string
  phone: string
  postalCode: string
  prefecture: string
  city: string
  address: string
  schedules: string[]
  roles: string[]
  experience: string
  skills: string[]
  message: string
  termsAgreed: boolean
}

export async function submitContactForm(formData: ContactFormData) {
  try {
    // 実際の実装では、ここでメール送信処理を行います
    // 例：nodemailer、SendGrid、Resend等を使用

    const emailContent = `
件名: ${formData.subject}

【お問い合わせ内容】
お名前: ${formData.lastName} ${formData.firstName}
メールアドレス: ${formData.email}
電話番号: ${formData.phone}
お問い合わせ種別: ${formData.category}

お問い合わせ内容:
${formData.message}

送信日時: ${new Date().toLocaleString("ja-JP")}
    `

    // メール送信処理のシミュレーション
    console.log("メール送信:", emailContent)

    // 実際の実装例（コメントアウト）:
    /*
    await sendEmail({
      to: 'information@step-out.jp',
      subject: formData.subject,
      text: emailContent,
      from: formData.email
    })
    */

    return { success: true, message: "お問い合わせを送信いたしました。" }
  } catch (error) {
    console.error("送信エラー:", error)
    return { success: false, message: "送信に失敗しました。しばらく時間をおいて再度お試しください。" }
  }
}

export async function submitVolunteerForm(formData: VolunteerFormData) {
  try {
    const emailContent = `
太郎坊チャレンジ2025 ボランティア応募

【基本情報】
お名前: ${formData.lastName} ${formData.firstName}
お名前（カナ）: ${formData.lastNameKana} ${formData.firstNameKana}
生年月日: ${formData.birthYear}年${formData.birthMonth}月${formData.birthDay}日
性別: ${formData.gender}

【連絡先情報】
メールアドレス: ${formData.email}
電話番号: ${formData.phone}
住所: 〒${formData.postalCode} ${formData.prefecture}${formData.city}${formData.address}

【参加希望】
参加希望日程: ${formData.schedules.join(", ")}
希望する活動内容: ${formData.roles.join(", ")}
ボランティア経験: ${formData.experience}
特技・資格: ${formData.skills.join(", ")}

【その他】
${formData.message}

個人情報取扱い同意: ${formData.termsAgreed ? "同意する" : "同意しない"}

送信日時: ${new Date().toLocaleString("ja-JP")}
    `

    // メール送信処理のシミュレーション
    console.log("ボランティア応募メール送信:", emailContent)

    // 実際の実装例（コメントアウト）:
    /*
    await sendEmail({
      to: 'information@step-out.jp',
      subject: 'ボランティア応募 - ' + formData.lastName + formData.firstName,
      text: emailContent,
      from: formData.email
    })
    */

    return { success: true, message: "ボランティア応募を送信いたしました。" }
  } catch (error) {
    console.error("送信エラー:", error)
    return { success: false, message: "送信に失敗しました。しばらく時間をおいて再度お試しください。" }
  }
}
