# Sanity e-commerce Dashboard Setup

تم تجهيز Sanity Studio باسم `e-commerce` داخل مجلد `sanity/`.

Studio hostname: `e-commerce-terz7sp5`

## 1. اربط المشروع بحساب Sanity

من حسابك في Sanity أنشئ Project جديد باسم `e-commerce`، أو استخدم Project موجود، ثم انسخ `projectId`.

## 2. أضف متغيرات البيئة

انسخ `.env.example` إلى `.env` في جذر المشروع:

```bash
VITE_SANITY_PROJECT_ID=terz7sp5
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2024-06-01
```

وانسخ `sanity/.env.example` إلى `sanity/.env`:

```bash
SANITY_STUDIO_PROJECT_ID=terz7sp5
SANITY_STUDIO_DATASET=production
```

## 3. شغل الداشبورد

```bash
npm run studio
```

بعدها افتح الرابط الذي يظهر في التيرمنال، وسجل دخولك بحساب Sanity.

## 4. شغل الموقع

```bash
npm run dev
```

الموقع سيقرأ من Sanity عند وجود `projectId`. لو البيانات لسه فاضية، هيستخدم بيانات fallback الحالية عشان الموقع يفضل شغال.

## 5. CORS

من Sanity Manage أضف Origins للموقع:

- `http://localhost:5173`
- رابط Vercel/الدومين النهائي عند النشر

## Schemas المتاحة

- Products
- Testimonials
- Hero Slides
