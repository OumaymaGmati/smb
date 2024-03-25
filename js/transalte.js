const translations={
    en:{
        welcome:"We are currently workingon a new super awesome website.",
        welcomtosbm:"Welcome to SMB International Sport",
        title2:"We are SMB. We make awesome stuff.",
        start:"Start A Conversation ",
        visit:"Visit Our Office",
        find:"Find Us On",
        txt:"SMB International is an international agency passionate about high-level sports, based in Dubaï.",
        Launching :"Launching In " ,
        days:"Days",
        h:"H",
        m:"M",
        s:"S"
    },
    ar:{
        welcome:"نحن نعمل حاليا على موقع إلكتروني جديد فائق الروعة.",
        welcomtosbm:"  مرحبًا بكم في سمب الرياضة الدولية ",
        title2:"نحن سمب نقوم بصنع أشياء رائعة",
        start:"بدء المحادثة",
        visit:"زيارة مكتبنا",
        find:"العثور علينا",
        txt:" سمب الدولية هي وكالة دولية متخصصة في الرياضة عالية المستوى، مقرها في دبي",
        Launching :"الإطلاق في " ,
        days:"أيام",
        h:"س",
        m:"د",
        s:"ث"
    },
    fr:{
        welcome:"Nous travaillons actuellement sur un nouveau site web , super et génial.",
        welcomtosbm:"Bienvenue chez SMB International Sport",
        title2:"Nous sommes SMB. Nous créons des choses géniales.",
        start:"Commencez une conversation",
        visit:" Visitez notre bureau",
        find:"Trouvez-nous sur",
        txt:"SMB International est une agence internationale passionnée par le sport de haut niveau, basée à Dubaï.",
        Launching :"Lancement en " ,
        days:"Jours",
        h:"H",
        m:"M",
        s:"S"
    },
    de:{
        welcome:"Wir arbeiten derzeit auf einem neuen supergeilen Webseite.",
        welcomtosbm:"Willkommen bei SMB International Sport",
        title2:"Wir sind SMB. Wir machen großartige Sachen.",
        start:"Beginnen Sie ein Gespräch ",
        visit:"Besuchen Sie unser Büro",
        find:" Finden Sie uns auf",
        txt:"SMB International ist eine internationale Agentur, die sich leidenschaftlich für den Hochleistungssport engagiert und ihren Sitz in Dubai hat."
  ,
        Launching :"Start in" ,
         days:"Tage",
        h:"H",
        m:"M",
        s:"S"
    },
    
    
    es:{
        welcome:"Actualmente estamos trabajando en un nuevo super impresionante sitio web.",
        welcomtosbm:"Bienvenido a SMB International Sport",
        title2:" Somos SMB. Creamos cosas increíbles. ",
        start:"Iniciar una conversación",
        visit:"Visitar nuestra oficina",
        find:"Encontrarnos en",
        txt:" SMB International es una agencia internacional apasionada por el deporte de alto nivel, con sede en Dubái.",
        Launching :"Lanzamiento en" , 
        days:"Días",
        h:"H",
        m:"M",
        s:"S"
    },

}


const languageSelectop=document.querySelector("select");
let welcome=document.getElementById('welcome')
let welcomtosbm=document.getElementById('welcomtosbm')
let title2=document.getElementById('title2')
let start=document.getElementById('start')
let find=document.getElementById('find')
let visit=document.getElementById('visit')
let txt=document.getElementById('txt')
let Launching=document.getElementById('Launching')
let days=document.getElementById('days')
let h=document.getElementById('h')
let m=document.getElementById('m')
let s=document.getElementById('s')

languageSelectop.addEventListener( "change", (event)=>{
setLanguage(event.target.value);
})

const setLanguage=(lang)=> {
    if(lang=="ar"){  
        welcome.innerText=translations.ar.welcome;
        welcomtosbm.innerHTML = translations.ar.welcomtosbm;
        title2.innerText= translations.ar.title2;
        start.innerText= translations.ar.start; 
        visit.innerText= translations.ar.visit;
       find.innerText=translations.ar.find;
       txt.innerText=translations.ar.txt;
       Launching.innerText=translations.ar.Launching;
       days.innerText=translations.ar.days;
       h.innerText=translations.ar.h;
       m.innerText=translations.ar.m;
       s.innerText=translations.ar.s;
      
    }else if(lang=="en"){  
        welcome.innerText=translations.en.welcome; 
        welcomtosbm.innerHTML = translations.en.welcomtosbm;
         title2.innerText= translations.en.title2;
         start.innerText= translations.en.start; 
         visit.innerText= translations.en.visit;
        find.innerText=translations.en.find;
        txt.innerText=translations.en.txt;
        Launching.innerText=translations.en.Launching;
        days.innerText=translations.en.days;
       h.innerText=translations.en.h;
       m.innerText=translations.en.m;
       s.innerText=translations.en.s;
      
    }else if(lang=="fr"){
        welcome.innerText=translations.fr.welcome; 
        welcomtosbm.innerHTML = translations.fr.welcomtosbm; title2.innerText= translations.fr.title2;
        start.innerText= translations.fr.start; 
        visit.innerText= translations.fr.visit;
       find.innerText=translations.fr.find;
       txt.innerText=translations.fr.txt;
       Launching.innerText=translations.fr.Launching;
       days.innerText=translations.fr.days;
       h.innerText=translations.fr.h;
       m.innerText=translations.fr.m;
       s.innerText=translations.fr.s;
    }else if(lang=="de"){
        welcome.innerText=translations.de.welcome;
         welcomtosbm.innerHTML = translations.de.welcomtosbm;
         title2.innerText= translations.de.title2;start.innerText= translations.de.start; 
         visit.innerText= translations.de.visit;
        find.innerText=translations.de.find;
        txt.innerText=translations.de.txt;
        Launching.innerText=translations.de.Launching;
        days.innerText=translations.de.days;
       h.innerText=translations.de.h;
       m.innerText=translations.de.m;
       s.innerText=translations.de.s;
    }
    else if(lang=="es"){
        welcome.innerText=translations.es.welcome;
         welcomtosbm.innerHTML = translations.es.welcomtosbm;
         title2.innerText= translations.es.title2;start.innerText= translations.es.start; 
         visit.innerText= translations.es.visit;
        find.innerText=translations.es.find;
        txt.innerText=translations.es.txt;
        Launching.innerText=translations.es.Launching;
        days.innerText=translations.es.days;
       h.innerText=translations.es.h;
       m.innerText=translations.es.m;
       s.innerText=translations.es.s;
    }

}