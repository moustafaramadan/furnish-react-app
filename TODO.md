# Task TODO - Sanity Ecommerce Dashboard (Editable + Seed)

## Goal

جعل كل أجزاء الموقع قابلة للـ edit من Sanity، مع سكربت Seed يرفع المحتوى تلقائيًا.

---

## Plan Summary

- توسيع schemas للنصوص/الـ labels اللي مازالت Hardcoded (Products page, Testimonials page, ProductDetails page).
- تعديل React pages لتقرأ نصوصها من Sanity.
- إضافة/تجهيز seed script داخل `sanity/` يملأ البيانات تلقائيًا.

---

## Steps

1. تحديث schemas:
   - إضافة `productDetailsPage` document لتجهيز labels صفحة المنتج.
   - توسيع `productsPage` ليشمل كل نصوص/labels header + filters + buttons + empty state.
   - توسيع `testimonialsPage` ليشمل كل نصوص/labels header + CTA.

2. تحديث `sanity/schemas/index.js` لضم schema الجديد.

3. تحديث `src/lib/sanityClient.js`:
   - إضافة fetch: `fetchProductDetailsPage()` (و/أو تحديث fetchProductsPage/fetchTestimonialsPage إن لزم).

4. تعديل pages:
   - `src/pages/Products.jsx` لعرض نصوصها وlabels من `fetchProductsPage()`.
   - `src/pages/Testimonials.jsx` لعرض نصوصها من `fetchTestimonialsPage()`.
   - `src/pages/ProductDetails.jsx` لعرض labels من `fetchProductDetailsPage()`.

5. Seed:
   - إنشاء `sanity/seed/seed.js` لرفع:
     - `siteSettings` + صفحات copy docs (productsPage/testimonialsPage/productDetailsPage)
     - `heroSlide` + `products` + `testimonials`

6. إضافة أمر npm:
   - تحديث `sanity/package.json` لإضافة script `seed`.

7. اختبار:
   - `npm run studio` ثم `npm run seed` ثم `npm run dev`.

8. التحقق النهائي:
   - التأكد أن تغيير النصوص من Sanity ينعكس على كل الصفحات بدون hardcoded.
