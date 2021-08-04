function ViewModel() {
    //Genel tanımlamalar
    const dateOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const formatter = new Intl.DateTimeFormat('tr', dateOptions);
    //Ana bilgiler
    this.firstName = ko.observable('Soner');
    this.lastName = ko.observable('Çelik');
    this.fullName = ko.computed(() => {
        return this.firstName() + ' ' + this.lastName();
    });

    //Hakkımda bilgileri
    this.birthDay = ko.observable(new Date('1997-07-14'));
    this.birthDayFormatted = ko.observable(formatter.format(this.birthDay()));
    this.phoneNumber = ko.observable("+90 (530) 492 01 39");
    this.city = ko.observable("Sinop/Gerze, İstanbul/Kadıköy");
    this.age = ko.computed(() => {
        return ~~((new Date() - this.birthDay()) / 31557600000)
    });
    this.jobTitle = ko.observable("Yazılım Mühendisi");
    this.degree = ko.observable('Lisans');
    this.mail = ko.observable('somercelik@yahoo.com');
    this.businessMail = ko.observable('soner.celik@appsakademi.com');

    this.twitterUrl = ko.observable('https://www.twitter.com/somercelik');
    this.facebookUrl = ko.observable('https://www.facebook.com/somercelik');
    this.instagramUrl = ko.observable('https://www.instagram.com/somercelik');
    this.telegramUrl = ko.observable('https://t.me/somercelik');
    this.linkedInUrl = ko.observable('https://www.linkedin.com/in/somercelik/');


    //Yetenekler
    this.skills = [
        {
            name: "Javascript",
            rate: 70
        },
        {
            name: "HTML",
            rate: 90
        },
        {
            name: "CSS",
            rate: 60
        },
        {
            name: "REST/SOAP Web Servisler",
            rate: 90
        },
        {
            name: "SQL, PQ/SQL (Oracle Dialect)",
            rate: 90
        },
        {
            name: "Bulut Uygulamaları",
            rate: 85
        },
        {
            name: "Veri Entegrasyonu",
            rate: 90
        },
        {
            name: "Veritabanı Tasarım Standartları",
            rate: 80
        }
    ];


    this.titleArray = ko.observableArray(["Yazılımcıyım", "Bilim Meraklısıyım", "Bulut Geliştiricisiyim", "Hayvanseverim", ]);

    this.aboutText = "";

    this.aboutSubText = "Ben Soner. Taşrada bir ilçede dünyaya geldim, 15 yaşıma kadar Karadeniz'in en sessiz ve en yalnız köylerinden birinde yaşadım." +
                        "Bu süreçte kendimle vakit geçirip kendimi gerçekten tanımak için oldukça fazla vaktim oldu. İlgi alanlarım: Astronomi, Bilim, Bilgisayar " +
                        "Bilimleri, Rock Müzik (Yabancı Ağırlıklı)...";

    this.summaryText = 'Küçüklüğümden beri bir şeyleri önce parçalamayı, ardından geri birleştirmeyi sevmişimdir. Bu durum artık yazılım projeleri için de geçerli.';


    //Özgeçmiş
    this.resumeTitle = "Daha detaylı bilgi için herhangi bir iletişim kanalından bana ulaşabilirsiniz.";

    this.educationHistory = [
        {
            schoolName: "Süleyman Demirel Üniversitesi, Isparta",
            department: "BİLGİSAYAR MÜHENDİSLİĞİ (Bachelor's Degree)",
            startEndDates: "2015 - 2020",
            title: "Sektörün fiziksel katmanına inmek ve öğrenme metodolojimi belirlemek için bir araç olarak üniversite kurumunu kullandım, düşünce yapısı açısından katkısı olduğunu düşünüyorum. Java temelli eğitim aldık ancak eğitimimin ardından bir daha Java'nın yüzüne nadiren baktım. 🙃"
        },
        {
            schoolName: "Şehit Nurullah Saraç Anadolu Lisesi, Gerze/Sinop",
            department: "MATEMATİK-FEN-İNGİLİZCE Ağırlıklı (Anadolu Lisesi)",
            startEndDates: "2011 - 2015",
            title: "Devlet okulunda görev yapmalarına rağmen bilimi seven ve bu sevgiyi aşılayan değerli öğretmenlerim sayesinde son derece verimli bir lise hayatı geçirdim."
        }
    ];

    this.professionalWorkHistory = [
        {
            jobTitle: "Software Development Specialist / Technical Consultant",
            startEndDates: "2020 - Halen",
            company: "Apps Akademi, Kadıköy, İstanbul",
            children: [
                {
                    text: "Oracle ekosisteminde çalışan bulut uygulamaları geliştirmekteyiz."
                },
                {
                    text: "KFC, Acun Medya, Perfektüp Ambalaj gibi Türkiye'nin ve dünyanın önde gelen firmalarına hizmet veriyoruz."
                },
                {
                    text: "Ön-Uç'tan arka uca kadar tüm yazılım geliştirme süreçlerinde bizzat rol oynuyorum."
                },
                {
                    text: "Kalifiye ve öğrenmeye son derece istekli bir ekip ile çalışmaktayım."
                }
            ]
        }
    ];

    //Portfolyo

    this.portfolioTitle = "Bugüne kadar katkıda bulunmuş olduğum birkaç projeyi aşağıdan inceleyebilirsiniz. Detaylar için iletişime geçmekten çekinmeyin.";

    this.contactText = "Gece yarısı olmadığı sürece muhtemelen size dönüş yapabilirim. 🙂"

    this.portfolioArray = [
        {
            class: "col-lg-4 col-md-6 portfolio-item filter-business",
            imageSource: "assets/img/portfolio/kfc.jpg",
            title: "KFC Türkiye Finansal Yönetim"
        },
        {
            class: "col-lg-4 col-md-6 portfolio-item filter-business",
            imageSource: "assets/img/portfolio/kfc.jpg",
            title: "KFC Türkiye Restoran Envanter Entegrasyonu"
        }
    ];

    typed_strings = this.titleArray();
    new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    });
}


ko.applyBindings(new ViewModel());
