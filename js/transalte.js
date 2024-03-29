const translations={
    en:{
        welcome:"We are currently working on a new version of our website to make your searches easier.",
        welcomtosbm:"Welcome to SMB International Sport",
        title2:"Discover SMB International: Your Partner in the Sports World.",
        start:"Start A Conversation ",
        visit:"Visit Our Office",
        find:"Find Us On",
        txt:" SMB is an international agency passionate about high-level sports,",
        dubai:"based in Dubaï.",
        Launching :"Launching In " ,
        days:"Days",
        h:"H",
        m:"M",
        s:"S"
    },
    ar:{
        welcome:" نحن حاليًا نعمل على نسخة جديدة من موقعنا على الويب لتسهيل بحثك ",
        welcomtosbm:"  مرحبًا بكم في سمب الرياضة الدولية ",
        title2:" اكتشف SMB International: شريكك في عالم الرياضة.",
        start:"بدء المحادثة",
        visit:"زيارة مكتبنا",
        find:"العثور علينا",
        txt:"  SMB هي وكالة دولية متخصصة في الرياضة على مستوى عالمي،  " ,
        dubai:"مقرها في دبي",
        Launching :"الإطلاق في " ,
        days:"أيام",
        h:"س",
        m:"د",
        s:"ث"
    },
    fr:{
        welcome:"Nous travaillons actuellement sur une nouvelle version de notre site web afin de faciliter vos recherches.",
        welcomtosbm:"Bienvenue chez SMB International Sport",
        title2:"Découvrez SMB International Votre Partenaire dans le Monde Sportif",
        start:"Commencez une conversation",
        visit:" Visitez notre bureau",
        find:"Trouvez-nous sur",
        txt:"SMB est une agence internationale passionnée par les sports de haut niveau,",
        dubai:"basée à Dubaï.",
        Launching :"LANCEMENT DANS" ,
        days:"Jours",
        h:"H",
        m:"M",
        s:"S"
    },
    de:{
        welcome:"Wir arbeiten derzeit an einer neuen Version unserer Website, um Ihre Suche zu erleichtern.",
        welcomtosbm:"Willkommen bei SMB International Sport",
        title2:"Entdecken Sie SMB International - Ihr Partner in der Sportwelt.",
        start:"Beginnen Sie ein Gespräch ",
        visit:"Besuchen Sie unser Büro",
        find:" Finden Sie uns auf",
        txt:"SMB ist eine internationale Agentur, die sich leidenschaftlich für Spitzensport begeistert und ihren Sitz ",
        dubai:"in Dubai hat.",
        Launching :"STARTET IN" ,
         days:"Tage",
        h:"H",
        m:"M",
        s:"S"
    },
    
    
    es:{
        welcome:"Actualmente estamos trabajando en una nueva versión de nuestro sitio web para facilitar sus búsquedas.",
        welcomtosbm:"Bienvenido a SMB International Sport",
        title2:"Descubre SMB International - Tu socio en el mundo deportivo. ",
        start:"Iniciar una conversación",
        visit:"Visitar nuestra oficina",
        find:"Encontrarnos en",
        txt:"SMB es una agencia internacional apasionada por el deporte de alto nivel, ",
        dubai:"con sede en Dubái.",
        Launching :"LANZAMIENTO EN" , 
        days:"Días",
        h:"H",
        m:"M",
        s:"S"
    },
    ru:{
        welcome: "Мы в настоящее время работаем над новой версией нашего веб-сайта, чтобы облегчить ваши поиски.",
        welcomtosbm: "Добро пожаловать в SMB International Sport",
        title2: "Познакомьтесь с компанией SMB International - вашим партнером в спортивном мире.",
        start: "Начать разговор",
        visit: "Посетите наш офис",
        find: "Найдите нас по адресу",
        txt: "SMB - это международное агентство, страстно увлеченное высоким уровнем спорта,",
        dubai:" с базой в Дубае.",
        Launching: "ЗАПУСК В",
        days: "Дней",
        h: "Ч",
        m: "М",
        s: "С"
    },

}

$(document).ready(function () {
    $('#selectpicker').on('change', function () {
        const lang = $(this).val();
        if (lang == "ar") {
            $('#welcome').text(translations.ar.welcome);
            $('#welcome').css('direction', 'rtl');
            $('#welcomtosbm').html(translations.ar.welcomtosbm);
            $('#title2').text(translations.ar.title2);
            $('#title2').css('direction', 'rtl');
            $('#start').text(translations.ar.start);
            $('#visit').text(translations.ar.visit);
            $('#find').text(translations.ar.find);
            $('#txt').text(translations.ar.txt);
            $('.txt2').css('direction', 'rtl');
            $('#Launching').text(translations.ar.Launching);
            $('#days').text(translations.ar.days);
            $('#h').text(translations.ar.h);
            $('#m').text(translations.ar.m);
            $('#s').text(translations.ar.s);
            $('#dubai').text(translations.ar.dubai);
            $('.dubaicss').css('direction', 'rtl');
        } else if (lang == "en") {
            $('#welcome').text(translations.en.welcome);
            $('#welcome').css('direction', '');
            $('#welcomtosbm').html(translations.en.welcomtosbm);
            $('#title2').text(translations.en.title2);
            $('#title2').css('direction', '');
            $('#start').text(translations.en.start);
            $('#visit').text(translations.en.visit);
            $('#find').text(translations.en.find);
            $('#txt').text(translations.en.txt);
            $('.txt2').css('direction', '');
            $('#Launching').text(translations.en.Launching);
            $('#days').text(translations.en.days);
            $('#h').text(translations.en.h);
            $('#m').text(translations.en.m);
            $('#s').text(translations.en.s);   
             $('#dubai').text(translations.en.dubai);
            $('.dubaicss').css('direction', '');
        } else if (lang == "fr") {
            $('#welcome').text(translations.fr.welcome);
              $('#welcome').css('direction', '');
            $('#welcomtosbm').html(translations.fr.welcomtosbm);
            $('#title2').text(translations.fr.title2);
            $('#title2').css('direction', '');
            $('#start').text(translations.fr.start);
            $('#visit').text(translations.fr.visit);
            $('#find').text(translations.fr.find);
            $('#txt').text(translations.fr.txt);
            $('.txt2').css('direction', '');
            $('#Launching').text(translations.fr.Launching);
            $('#days').text(translations.fr.days);
            $('#h').text(translations.fr.h);
            $('#m').text(translations.fr.m);
            $('#s').text(translations.fr.s);    
             $('#dubai').text(translations.fr.dubai);
               $('.dubaicss').css('direction', '');
        } else if (lang == "de") {
            $('#welcome').text(translations.de.welcome);
            $('#welcome').css('direction', '');
            $('#welcomtosbm').html(translations.de.welcomtosbm);
            $('#title2').text(translations.de.title2);
            $('#title2').css('direction', '');
            $('#start').text(translations.de.start);
            $('#visit').text(translations.de.visit);
            $('#find').text(translations.de.find);
            $('#txt').text(translations.de.txt);
            $('.txt2').css('direction', '');
            $('#Launching').text(translations.de.Launching);
            $('#days').text(translations.de.days);
            $('#h').text(translations.de.h);
            $('#m').text(translations.de.m);
            $('#s').text(translations.de.s);
            $('#dubai').text(translations.de.dubai);
            $('.dubaicss').css('direction', '');
        }
        else if (lang == "es") {
            $('#welcome').text(translations.es.welcome);
            $('#welcome').css('direction', '');
            $('#welcomtosbm').html(translations.es.welcomtosbm);
            $('#title2').text(translations.es.title2);
            $('#title2').css('direction', '');
            $('#start').text(translations.es.start);
            $('#visit').text(translations.es.visit);
            $('#find').text(translations.es.find);
            $('#txt').text(translations.es.txt);
            $('.txt2').css('direction', '');
            $('#Launching').text(translations.es.Launching);
            $('#days').text(translations.es.days);
            $('#h').text(translations.es.h);
            $('#m').text(translations.es.m);
            $('#s').text(translations.es.s);
            $('#dubai').text(translations.es.dubai);
            $('.dubaicss').css('direction', '');
        } else if (lang == "ru") {
            $('#welcome').text(translations.ru.welcome);
            $('#welcome').css('direction', '');
            $('#welcomtosbm').html(translations.ru.welcomtosbm);
            $('#title2').text(translations.ru.title2);
            $('#title2').css('direction', '');
            $('#start').text(translations.ru.start);
            $('#visit').text(translations.ru.visit);
            $('#find').text(translations.ru.find);
            $('#txt').text(translations.ru.txt);
            $('.txt2').css('direction', '');
            $('#Launching').text(translations.ru.Launching);
            $('#days').text(translations.ru.days);
            $('#h').text(translations.ru.h);
            $('#m').text(translations.ru.m);
            $('#s').text(translations.ru.s);
            $('#dubai').text(translations.ru.dubai);
            $('.dubaicss').css('direction', '');
        }



    });
});


