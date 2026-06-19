# Task TODO - Sanity Ecommerce Dashboard

## Plan Summary

- إنشاء Sanity Studio داخل المشروع.
- تعريف schemas لِـ Products + Testimonials + (اختياري) hero data.
- إعداد Sanity client داخل React.
- استبدال البيانات hardcoded/bundled بـ fetch من Sanity.

## Steps

1. إنشاء مجلد `sanity/` وتشغيل `npm create sanity@latest`.
2. اختيار dataset/projectId وضبط studio config.
3. إنشاء schemas:
   - `product` (slug/name/image/prices/description/details/delivery)
   - `testimonial` (quote/author/title/backgroundImage)
   - `siteSettings` أو `heroSlide` لو هيتعرض من dashboard.
4. إضافة `.env` لـ React بالمتغيرات اللازمة (VITE_SANITY_PROJECT_ID, VITE_SANITY_DATASET).
5. تثبيت packages لازم في root (مثل `@sanity/client` / `next-sanity` حسب ما يناسب).
6. إنشاء `src/lib/sanityClient.js`.
7. تعديل:
   - `src/components/home/ProductsSection.jsx` لعرض منتجات من Sanity.
   - `src/pages/ProductDetails.jsx` لعرض تفاصيل المنتج من Sanity.
   - `src/components/home/TestimonialSection.jsx` لعرض testimonials من Sanity.
   - (اختياري) `src/components/home/HeroSlider.jsx` لعرض hero slides.
8. تشغيل المشروع والتأكد من صفحات Home و ProductDetails و Testimonial تظهر بشكل صحيح.
9. اختبار fetch + التعامل مع حالة Loading/Empty.
