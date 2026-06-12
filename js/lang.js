const LANG = {
    id: {
        portfolio: "Portofolio",
        dark_mode: "Mode Gelap",
        language: "Bahasa",
        welcome: "Selamat Datang",
        before_login: "Sebelum masuk, silakan masukkan nama Anda",
        please_enter_name: "Masukkan nama Anda untuk pengalaman yang lebih personal",
        enter_name: "Masukkan nama",
        login: "Masuk Portofolio",
        my_portfolio: "Portofolio Saya",
        about: "Tentang",
        skills: "Keahlian",
        education: "Pendidikan",
        project: "Project",
        certificates: "Sertifikat",
        contact: "Kontak",
        hero_title: "Halo, Saya ",
        hero_desc: "Mahasiswa Informatika yang fokus pada Web Development, UI/UX Design, dan Pengembangan Sistem Informasi.",
        btn_project: "Lihat Project",
        btn_cv: "Download CV",
        about_me: "Tentang saya",
        about_me_desc: "Saya adalah mahasiswa yang memiliki minat dalam pengembangan website, pemrograman, dan teknologi informasi. Saya senang mempelajari teknologi baru serta membangun aplikasi yang bermanfaat.",
        informatics: "Informatika",
        informatics_desc: "Mempelajari pengembangan web, basis data, JavaScript, PHP, dan UI/UX Design.",
        science: "Ilmu Pengetahuan Alam",
        science_desc: "Mempelajari matematika, fisika, kimia, dan biologi.",
        certificates_priview: "Lihat Sertifikat",
        gpa: "| IPK (3.86/4.0)",
        thesis: "Skripsi:",
        thesis_title: "Membangun Aplikasi Android Adminsitrasi Laundry Menggunakan Model Prototype (Studi Kasus:Bunda Laundry)",
        see_more_certificates: "Lihat Lebih Banyak Sertifikat",
        see_details: "Lihat Detail",
        about_project: "Tentang Project",
        feature: "Fitur",
        documentation: "Dokumentasi",


        app_bunda: "Aplikasi Bunda Laundry",
        app_bunda_summary: "Aplikasi manajemen laundry berbasis Android yang dikembangkan menggunakan Kotlin dan terintegrasi dengan Firebase untuk pengelolaan data secara real-time.",
        app_bunda_desc: "Bunda Laundry Application adalah aplikasi berbasis Android yang dikembangkan untuk membantu proses administrasi dan pengelolaan layanan laundry pada usaha Bunda Laundry. Aplikasi ini dirancang untuk menggantikan sistem pencatatan manual menjadi sistem digital yang lebih efisien, terstruktur, dan mudah digunakan. \n\nSelain sebagai solusi digital bagi usaha laundry, aplikasi ini juga dikembangkan sebagai salah satu syarat penyelesaian Skripsi Program Studi Informatika dengan judul 'Membangun Aplikasi Administrasi Laundry Berbasis Android Menggunakan Model Prototype (Studi Kasus: Bunda Laundry)'",
        feature_bunda: [
            {
                title: "Pencatatan Data Pesanan Digital",
                desc: "Memungkinkan admin untuk mencatat, menyimpan, dan mengelola data pesanan laundry secara digital sehingga proses administrasi menjadi lebih cepat, rapi, dan terorganisir."
            },
            {
                title: "Pengelolaan Status Laundry",
                desc: "Memungkinkan admin memperbarui status pesanan laundry, seperti proses, selesai, atau diantar, sehingga setiap tahapan pekerjaan dapat dipantau dengan mudah."
            },
            {
                title: "Notifikasi dan Informasi Real-Time",
                desc: "Memberikan informasi dan notifikasi kepada pelanggan secara langsung ketika terjadi perubahan status pesanan, sehingga pelanggan selalu mendapatkan pembaruan terkini."
            },
            {
                title: "Integrasi Firebase Realtime Database",
                desc: "Menggunakan Firebase Realtime Database sebagai media penyimpanan data berbasis cloud yang memungkinkan sinkronisasi data secara real-time antara pengguna dan admin."
            },
            {
                title: "Integrasi Google Sheets",
                desc: "Menghubungkan sistem dengan Google Sheets untuk menghasilkan laporan keuangan harian maupun bulanan secara otomatis berdasarkan data transaksi yang tersimpan."
            },
            {
                title: "Pemesanan dan Pemantauan Status",
                desc: "Memudahkan pelanggan untuk melakukan pemesanan layanan laundry serta melihat status cucian mereka secara langsung melalui aplikasi."
            },
            {
                title: "Manajemen Operasional Admin",
                desc: "Memungkinkan admin untuk mengelola data barang, mengedit data pesanan, mencatat pengeluaran, melihat laporan keuangan, mengelola stok bahan baku, serta menambah dan menghapus akun pegawai."
            }
        ],

        app_denting: "Aplikasi DENTING",
        app_denting_summary: "Aplikasi Deteksi Stunting untuk membantu orang tua dalam mendeteksi risiko stunting pada anak.",
        app_denting_desc: "Aplikasi Deteksi Stunting merupakan aplikasi kesehatan berbasis mobile yang dirancang untuk membantu orang tua memantau pertumbuhan dan perkembangan anak serta mendeteksi risiko stunting sejak dini.\n\nDengan memanfaatkan teknologi digital, aplikasi ini memberikan informasi yang mudah dipahami mengenai status gizi dan pertumbuhan anak sehingga orang tua dapat mengambil langkah pencegahan yang tepat. Selain itu, aplikasi juga berfungsi sebagai media edukasi yang membantu meningkatkan kesadaran masyarakat tentang pentingnya pemenuhan gizi seimbang dan pemantauan tumbuh kembang anak untuk mencegah terjadinya stunting.",
        feature_stunting: [
            {
                title: "Deteksi Risiko Stunting",
                desc: "Membantu orang tua mengidentifikasi risiko stunting pada anak berdasarkan data usia, tinggi badan, berat badan, dan indikator pertumbuhan lainnya sehingga dapat dilakukan tindakan pencegahan sejak dini."
            },
            {
                title: "Deteksi Nutrisi Makanan",
                desc: "Menganalisis kandungan nutrisi pada makanan yang dikonsumsi anak untuk memastikan kebutuhan gizi harian terpenuhi sesuai dengan tahap pertumbuhan dan perkembangan."
            },
            {
                title: "Artikel Edukasi Kesehatan",
                desc: "Menyediakan berbagai artikel informatif mengenai stunting, pola makan sehat, nutrisi anak, serta tips menjaga kesehatan keluarga yang mudah dipahami oleh pengguna."
            },
            {
                title: "Kalkulator BMI",
                desc: "Memungkinkan pengguna menghitung Body Mass Index (BMI) secara cepat untuk mengetahui status berat badan dan mendapatkan rekomendasi kesehatan yang sesuai."
            },
            {
                title: "Temukan Rumah Sakit",
                desc: "Membantu pengguna menemukan rumah sakit terdekat yang menyediakan layanan kesehatan anak, pemeriksaan gizi, maupun konsultasi terkait pertumbuhan dan perkembangan."
            },
            {
                title: "Temukan Ahli Gizi",
                desc: "Memudahkan pengguna mencari dan terhubung dengan ahli gizi profesional untuk mendapatkan konsultasi, rekomendasi pola makan, serta pendampingan nutrisi yang tepat."
            }
        ]

    },

    en: {
        portfolio: "Portfolio",
        dark_mode: "Dark Mode",
        language: "Language",
        welcome: "Welcome",
        before_login: "Before logging in, please enter your name",
        please_enter_name: "Please enter your name for a more personalized experience",
        enter_name: "Enter your name",
        login: "Enter Portfolio",
        my_portfolio: "My Portfolio",
        about: "About",
        skills: "Skills",
        education: "Education",
        project: "Project",
        certificates: "Certificates",
        contact: "Contact",
        hero_title: "Hello, I'm ",
        hero_desc: "Informatics student focused on Web Development, UI/UX Design, and Information Systems Development.",
        btn_project: "View Projects",
        btn_cv: "Download CV",
        about_me: "About me",
        about_me_desc: "I am a student with interests in web development, programming, and information technology. I enjoy learning new technologies and building useful applications.",
        informatics: "Informatics",
        informatics_desc: "Studying web development, databases, JavaScript, PHP, and UI/UX Design.",
        science: "Sciences",
        science_desc: "Studying mathematics, physics, chemistry, and biology.",
        certificates_priview: "View Certificates",
        gpa: "| GPA (3.86/4.0)",
        thesis: "Thesis:",
        thesis_title: "Building an Android Application for Laundry Administration Using the Prototype Model (Case Study: Bunda Laundry)",
        see_more_certificates: "See More Certificates",
        see_details: "See Details",
        about_project: "About Project",
        feature: "Feature",
        documentation: "Documentation",


        app_bunda: "Bunda Laundry Application",
        app_bunda_summary: "An Android-based laundry management app developed using Kotlin and integrated with Firebase for real-time data management.",
        app_bunda_desc: "Bunda Laundry Application is an Android-based application developed to assist the administration and management of laundry services at Bunda Laundry business. This application is designed to replace the manual recording system with a more efficient, structured, and easy-to-use digital system. \n\nIn addition to being a digital solution for laundry businesses, this application is also developed as one of the requirements for completing a Thesis in the Informatics Study Program with the title 'Building an Android-Based Laundry Administration Application Using the Prototype Model (Case Study: Bunda Laundry)'",
        feature_bunda: [
            {
                title: "Digital Order Recording",
                desc: "Allows administrators to record, store, and manage laundry orders digitally, making administrative processes faster, more organized, and easier to manage."
            },
            {
                title: "Laundry Status Management",
                desc: "Enables administrators to update the status of laundry orders, such as Processing, Completed, or Delivered, allowing each stage of the service process to be monitored efficiently."
            },
            {
                title: "Real-Time Notifications and Information",
                desc: "Provides customers with real-time notifications and updates whenever the status of their laundry changes, ensuring they are always informed about the progress of their orders."
            },
            {
                title: "Firebase Realtime Database Integration",
                desc: "Utilizes Firebase Realtime Database as a cloud-based storage solution, enabling real-time data synchronization between customers and administrators."
            },
            {
                title: "Google Sheets Integration for Financial Reports",
                desc: "Connects the system to Google Sheets to automatically generate daily and monthly financial reports based on recorded transaction data."
            },
            {
                title: "Customer Ordering and Status Tracking",
                desc: "Allows customers to place laundry service orders and monitor the status of their laundry directly through the application."
            },
            {
                title: "Administrative Management Features",
                desc: "Provides administrators with tools to manage item data, edit order information, record expenses, view financial reports, manage raw material inventory, and create or remove employee accounts."
            }
        ],

        app_denting: "DENTING Application",
        app_denting_summary: "A stunting detection application designed to help parents identify the risk of stunting in children.",
        app_denting_desc: "The Stunting Detection Application is a mobile health application designed to help parents monitor their children's growth and development while identifying potential stunting risks at an early stage.\n\nBy leveraging digital technology, the application provides easy-to-understand information about nutritional status and child growth, enabling parents to take appropriate preventive actions. In addition, the application serves as an educational platform that raises awareness about the importance of balanced nutrition and regular growth monitoring to prevent stunting.",
        feature_stunting: [
            {
                title: "Stunting Risk Detection",
                desc: "Helps parents identify the risk of stunting in children based on age, height, weight, and other growth indicators, allowing early preventive measures to be taken."
            },
            {
                title: "Food Nutrition Detection",
                desc: "Analyzes the nutritional content of foods consumed by children to ensure their daily dietary needs are met according to their growth and developmental stages."
            },
            {
                title: "Health Education Articles",
                desc: "Provides informative articles about stunting, healthy eating habits, child nutrition, and family health tips in an easy-to-understand format."
            },
            {
                title: "BMI Calculator",
                desc: "Allows users to quickly calculate their Body Mass Index (BMI) to determine their weight status and receive appropriate health recommendations."
            },
            {
                title: "Find Hospitals",
                desc: "Helps users locate nearby hospitals that offer child healthcare services, nutritional assessments, and growth and development consultations."
            },
            {
                title: "Find Nutritionists",
                desc: "Makes it easier for users to connect with professional nutritionists for consultations, dietary recommendations, and personalized nutritional guidance."
            }
        ]
    },
};

let currentLang = localStorage.getItem("lang") || "en";

function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);

    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");

        if (el.tagName === "INPUT") {
            el.placeholder = LANG[lang][key];
        } else {
            el.innerText = LANG[lang][key];
        }
    });

    if (typeof renderFeatures === "function") {
        renderFeatures(
            lang,
            document.body.dataset.feature
        );
    }
}

// tombol switch
document.addEventListener("DOMContentLoaded", () => {
    applyLang(currentLang);

    const btnID = document.getElementById("lang-id");
    const btnEN = document.getElementById("lang-en");

    if (btnID) btnID.addEventListener("click", () => applyLang("id"));
    if (btnEN) btnEN.addEventListener("click", () => applyLang("en"));
});