# Qo'shko'pir tumani ixtisoslashtirilgan maktab-internati (IMI) — Rasmiy Veb-sayti va AdminLTE Boshqaruv Paneli

Ushbu loyiha `urganchimi.uz` va Ixtisoslashtirilgan ta'lim muassasalari agentligi standartlari asosida **Qo'shko'pir tumani ixtisoslashtirilgan maktab-internati** uchun maxsus ishlab chiqilgan. Loyiha to'liq statik arxitekturaga ega bo'lib, **GitHub Pages** yoki har qanday hostingda to'g'ridan-to'g'ri ishlaydi.

## Loyiha tarkibi
- `index.html` — Rasmiy veb-sayt (Frontend: Bootstrap 5, zamonaviy dizayn, yangiliklar filtri, dars jadvali, pedagoglar, onlayn qabul formasi).
- `admin.html` — **Native AdminLTE v3.2** boshqaruv paneli (Login ekran, Dashboard, Yangiliklar, Pedagoglar, Dars jadvali, Qabul arizalari, Maktab pasporti sozlamalari va JSON Eksport/Import).
- `css/style.css` — Maxsus dizayn stillari.
- `js/app.js` — Ma'lumotlar bazasi va sinxronizatsiya logikasi (`LocalStorage` + JSON zaxiralash).

## Ishga tushirish va GitHub Pages-ga joylash
1. Arxivdagi barcha fayllarni GitHub repozitoriyangizga yuklang.
2. Repozitoriy sozlamalaridan **Settings -> Pages** bo'limiga o'ting va `main` (yoki `master`) tarmog'ini tanlab **Save** tugmasini bosing.
3. **Admin panelga kirish:**
   - Manzil: `https://sizning-domeningiz/admin.html`
   - Standart parol: `admin123`
