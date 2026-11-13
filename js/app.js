// Qo'shko'pir tumani IMI - Asosiy Ma'lumotlar Bazasi va Boshqaruv Tizimi (LocalStorage + JSON Export/Import)
const STORAGE_KEY = 'qoshkopir_imi_db_v1';

const defaultData = {
    schoolInfo: {
        name: "Qo'shko'pir tumani ixtisoslashtirilgan maktab-internati",
        shortName: "Qo'shko'pir tumani IMI",
        agency: "O'zbekiston Respublikasi Maktabgacha va maktab ta'limi vazirligi huzuridagi Ixtisoslashtirilgan ta'lim muassasalari agentligi",
        director: "Sattarov Nodirbek",
        receptionDays: "Dushanba - Juma (09:00 - 17:00)",
        phone: "+998 (62) 325-10-00",
        email: "info@qoshkopir-imi.uz",
        telegram: "https://t.me/qoshkopir_imi",
        address: "Xorazm viloyati, Qo'shko'pir tumani, Mustaqillik ko'chasi, 15-uy",
        studentsCount: 504,
        teachersCount: 48,
        olympiadWinners: 34,
        grantRate: "96%",
        dormitoryCapacity: 250,
        classroomsCount: 24
    },
    news: [
        {
            id: 1,
            title: "Qo'shko'pir tumani IMI o'quvchilari fan olimpiadasining viloyat bosqichida mutlaq g'olib bo'lishdi",
            date: "2026-11-12",
            category: "Yutuqlar",
            views: 342,
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
            content: "Matematika, fizika, kimyo va informatika fanlaridan o'tkazilgan asosiy fan olimpiadasining Xorazm viloyati bosqichida maktab-internatimizning 14 nafar o'quvchisi faxrli 1-, 2- va 3-o'rinlarni qo'lga kiritib, Respublika bosqichiga yo'llanma oldilar."
        },
        {
            id: 2,
            title: "Maktab-internatimizda zamonaviy Robototexnika va AI laboratoriyasi ishga tushirildi",
            date: "2026-11-08",
            category: "Yangiliklar",
            views: 285,
            image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
            content: "O'quvchilarning dasturlash, sun'iy intellekt va muhandislik ko'nikmalarini rivojlantirish maqsadida Arduino, Raspberry Pi to'plamlari va 3D printerlar bilan jihozlangan yangi STEM laboratoriya foydalanishga topshirildi."
        },
        {
            id: 3,
            title: "2026-2027 o'quv yili uchun to'garaklar va qo'shimcha darslar jadvali tasdiqlandi",
            date: "2026-11-01",
            category: "E'lon",
            views: 410,
            image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
            content: "Barcha 5-11 sinf o'quvchilari uchun darsdan so'ng IELTS, SAT, Olimpiada matematikasi hamda Python dasturlash tili bo'yicha bepul chuqurlashtirilgan to'garaklar faoliyati yo'lga qo'yildi."
        }
    ],
    teachers: [
        {
            id: 1,
            name: "Karimov Jamshid Otabekovich",
            subject: "Matematika fani o'qituvchisi",
            qualification: "Oliy toifali, Xalq ta'limi a'lochisi",
            experience: "16 yil",
            photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
        },
        {
            id: 2,
            name: "Matyoqubova Dilnoza Rustamovna",
            subject: "Ingliz tili fani o'qituvchisi",
            qualification: "Oliy toifa, IELTS 8.0 (C1)",
            experience: "11 yil",
            photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
        },
        {
            id: 3,
            name: "Rajabov Otabekbek Shavkatovich",
            subject: "Informatika va AT o'qituvchisi",
            qualification: "Oliy toifa, IC3 & Python Expert",
            experience: "12 yil",
            photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
        },
        {
            id: 4,
            name: "Quryozov Sardorbek Bahromovich",
            subject: "Fizika va Astronomiya o'qituvchisi",
            qualification: "Oliy toifa, Milliy sertifikat (A+)",
            experience: "14 yil",
            photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
        }
    ],
    schedule: [
        { id: 1, grade: "5-A sinf (Aniq fanlar)", shift: "1-smena (08:30)", room: "201-xona", curator: "Matyoqubova D.", link: "#" },
        { id: 2, grade: "6-A sinf (Aniq fanlar)", shift: "1-smena (08:30)", room: "204-xona", curator: "Karimov J.", link: "#" },
        { id: 3, grade: "7-A sinf (Tabiiy fanlar)", shift: "1-smena (08:30)", room: "302-xona", curator: "Quryozov S.", link: "#" },
        { id: 4, grade: "10-A sinf (IT va Matematika)", shift: "1-smena (08:30)", room: "305-xona (AKT)", curator: "Rajabov O.", link: "#" }
    ],
    applications: [
        {
            id: 101,
            studentName: "Sapayev Azizbek Ulug'bek o'g'li",
            grade: "5-sinf (Aniq fanlar yo'nalishi)",
            school: "Qo'shko'pir tumani 17-son maktab",
            phone: "+998 99 555-12-34",
            status: "Yangi",
            date: "2026-11-12"
        },
        {
            id: 102,
            studentName: "Ro'zmetova Shahzoda Farhod qizi",
            grade: "7-sinf (Tabiiy fanlar yo'nalishi)",
            school: "Qo'shko'pir tumani 1-son maktab",
            phone: "+998 91 432-56-78",
            status: "Ko'rib chiqilmoqda",
            date: "2026-11-13"
        }
    ]
};

function getAppData() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (!saved) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData));
            return defaultData;
        }
        return JSON.parse(saved);
    } catch (e) {
        console.error("LocalStorage error:", e);
        return defaultData;
    }
}

function saveAppData(data) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
        console.error("Save error:", e);
    }
}

function resetToDefaultData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData));
    return defaultData;
}
