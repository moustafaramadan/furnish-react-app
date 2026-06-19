# Furnish - Modern Furniture eCommerce React Application

تم تحويل المشروع بالكامل إلى React.js مع بنية منظمة لكل مكون مع CSS خاص به.

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── home/
│   │   ├── HeroSlider.jsx
│   │   ├── HeroSlider.css
│   │   ├── ProductsSection.jsx
│   │   ├── ProductsSection.css
│   │   ├── TestimonialSection.jsx
│   │   ├── TestimonialSection.css
│   │   ├── NewsletterSection.jsx
│   │   └── NewsletterSection.css
│   └── shared/
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── About.css
│   ├── Products.jsx
│   ├── Products.css
│   ├── Testimonials.jsx
│   ├── Testimonials.css
│   ├── Contact.jsx
│   └── Contact.css
├── assets/
│   ├── images/
│   ├── js/
│   └── scss/
├── App.jsx
├── App.css
├── main.jsx
├── index.css
└── index.html
```

## 🎯 Component Breakdown

### Layout Components

- **Navbar**: قائمة التنقل الرئيسية مع روابط React Router
- **Footer**: تذييل الصفحة مع معلومات الاتصال والروابط الاجتماعية

### Home Page Components

- **HeroSlider**: منزلق الصور الرئيسي باستخدام Swiper
- **ProductsSection**: عرض المنتجات مع منزلق Swiper
- **TestimonialSection**: شهادات العملاء
- **NewsletterSection**: نموذج الاشتراك في النشرة الإخبارية

### Pages

- **Home**: الصفحة الرئيسية
- **About**: صفحة حول المتجر مع المهمة والقيم والفريق
- **Products**: صفحة المنتجات مع فلاتر التصنيف والسعر
- **Testimonials**: صفحة شهادات العملاء
- **Contact**: نموذج الاتصال مع معلومات التواصل

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## 📦 Dependencies

- **React 18.2.0**: مكتبة React الأساسية
- **React DOM 18.2.0**: React DOM للعمل مع الـ DOM
- **React Router DOM 6.20.0**: توجيه الصفحات
- **Bootstrap 5.3.8**: أنماط Bootstrap
- **Bootstrap Icons 1.13.1**: مكتبة الرموز
- **Swiper 12.0.3**: مكتبة المنزلقات
- **Sass 1.77.6**: معالج CSS

## 🎨 Styling Approach

كل مكون له ملف CSS خاص به:

- استخدام CSS Modules (أو CSS عادي مع Class Names)
- أنماط Bootstrap للتخطيط الأساسي
- تصاميم مخصصة مع متغيرات الألوان:
  - اللون الأساسي: #000 (أسود)
  - اللون الثانوي: #d47f31 (برتقالي)
  - اللون الفاتح: #f6f5f4 (رمادي فاتح جداً)

## 🔄 Routing

تم إعداد React Router للتنقل بين الصفحات:

- `/` - الصفحة الرئيسية
- `/about` - صفحة حول المتجر
- `/products` - صفحة المنتجات
- `/testimonials` - صفحة الشهادات
- `/contact` - صفحة الاتصال

## 📱 Responsive Design

جميع المكونات مستجيبة وتعمل على:

- Desktop
- Tablet
- Mobile

## 🎯 Features

✅ منزلقات ديناميكية مع Swiper
✅ فلاتر المنتجات (التصنيف والسعر)
✅ نماذج تفاعلية (نشرة إخبارية وتواصل)
✅ ملاحة سلسة مع React Router
✅ تصميم مستجيب تماماً
✅ أيقونات Bootstrap

## 🛠️ Customization

يمكنك تخصيص الألوان والأنماط بسهولة:

- عدّل متغيرات الألوان في ملفات CSS
- أضف منتجات جديدة في مصفوفات البيانات
- قم بتوسيع المكونات بإضافة وظائف جديدة

## 📄 License

ISC
