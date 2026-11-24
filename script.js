const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const AVATARS = ["🧑‍🎓","👨‍💻","👩‍🏫","🧠","🚀","🦉","🏆","🎯","⚡","👑"];
const GAMES = [
{ id:1,age:"16-20",icon:"🧠",title:"Matematik zakovat",desc:"Foizlar, tenglamalar va mantiqiy hisoblash.",difficulty:"O‘rta",category:"Matematika",questions:[
["200 ning 15 foizi nechaga teng?",["15","20","30","35"],2,"200 × 0,15 = 30."],
["3x + 5 = 20 bo‘lsa, x nechaga teng?",["3","5","7","10"],1,"3x = 15, demak x = 5."],
["Ketma-ketlikni davom ettiring: 2, 4, 8, 16, ...",["18","24","30","32"],3,"Har safar son 2 ga ko‘paymoqda."],
["Bir sonning yarmi 18. Sonni toping.",["9","18","36","42"],2,"18 × 2 = 36."],
["12 × 8 − 16 = ?",["64","72","80","96"],0,"96 − 16 = 80 emas? 12×8=96, 96−16=80."],
["Agar a=4 va b=3 bo‘lsa, a²+b² nechaga teng?",["14","25","49","12"],1,"16 + 9 = 25."],
["1/4 + 1/2 = ?",["1/2","2/3","3/4","1"],2,"1/4 + 2/4 = 3/4."],
["Kvadratning tomoni 6 sm. Perimetri?",["12 sm","18 sm","24 sm","36 sm"],2,"4 × 6 = 24 sm."],
["80 ning 25 foizi nechaga teng?",["10","15","20","25"],2,"80 ning choragi 20."],
["5 ta daftar 25 000 so‘m. 8 tasi qancha?",["30 000","35 000","40 000","45 000"],2,"Bir daftar 5 000 so‘m, 8 tasi 40 000 so‘m."]]},
{ id:2,age:"16-20",icon:"📚",title:"Ona tili va adabiyot",desc:"Imlo, grammatika va o‘zbek adabiyoti.",difficulty:"O‘rta",category:"Ona tili",questions:[
["Qaysi so‘z sifat turkumiga kiradi?",["Yugurmoq","Go‘zal","Kitob","Tezda"],1,"Go‘zal predmetning belgisini bildiradi."],
["O‘zbek tilida nechta kelishik bor?",["4","5","6","7"],2,"O‘zbek tilida 6 ta kelishik mavjud."],
["Alisher Navoiyning 'Xamsa'si nechta dostondan iborat?",["3","4","5","6"],2,"Xamsa besh dostondan tuzilgan."],
["'Men kitob o‘qidim' gapida kesim qaysi?",["Men","Kitob","O‘qidim","Gapda yo‘q"],2,"O‘qidim — kesim."],
["Qaysi biri ravish?",["Chiroyli","Bugun","O‘quvchi","Yozmoq"],1,"Bugun payt ravishi."],
["'O‘tkan kunlar' romanining muallifi kim?",["Cho‘lpon","Oybek","Abdulla Qodiriy","Fitrat"],2,"Roman Abdulla Qodiriy qalamiga mansub."],
["Qaysi qatorda antonimlar berilgan?",["Go‘zal–chiroyli","Katta–ulkan","Oq–qora","Yuz–bet"],2,"Oq va qora qarama-qarshi ma’noli so‘zlar."],
["Ot qanday so‘roqlarga javob bo‘ladi?",["Qanday? qanaqa?","Kim? nima?","Nima qildi?","Qachon? qayerda?"],1,"Ot kim? yoki nima? so‘roqlariga javob bo‘ladi."],
["'Mehnatning tagi rohat' qanday birlik?",["Maqol","Topishmoq","Tez aytish","Ibora"],0,"Bu xalq maqoli."],
["Cho‘lponning mashhur romani qaysi?",["Kecha va kunduz","Qutlug‘ qon","Navoiy","Sarob"],0,"'Kecha va kunduz' — Cho‘lpon romani."]]},
{ id:3,age:"16-20",icon:"🌍",title:"Geografiya bilimdoni",desc:"Davlatlar, poytaxtlar va O‘zbekiston tabiati.",difficulty:"Oson",category:"Geografiya",questions:[
["O‘zbekiston poytaxti qaysi shahar?",["Samarqand","Buxoro","Toshkent","Andijon"],2,"O‘zbekiston poytaxti — Toshkent."],
["Dunyodagi eng katta okean qaysi?",["Atlantika","Hind","Tinch","Shimoliy Muz"],2,"Tinch okeani eng katta okean."],
["Fransiyaning poytaxti?",["Lion","Parij","Marsel","Nitsa"],1,"Fransiya poytaxti — Parij."],
["O‘zbekiston qaysi materikda joylashgan?",["Afrika","Yevrosiyo","Avstraliya","Janubiy Amerika"],1,"O‘zbekiston Yevrosiyo materigida."],
["Dunyodagi eng baland tog‘ cho‘qqisi?",["K2","Everest","Elbrus","Kilimanjaro"],1,"Everest balandligi taxminan 8849 metr."],
["Amudaryo qaysi dengiz havzasiga quyilgan?",["Qora dengiz","Orol dengizi","Kaspiy dengizi","Boltiq dengizi"],1,"Amudaryo tarixan Orol dengiziga quyilgan."],
["Yaponiya poytaxti qaysi?",["Osaka","Kioto","Tokio","Nagoya"],2,"Yaponiya poytaxti — Tokio."],
["Yer yuzidagi eng katta materik?",["Afrika","Shimoliy Amerika","Antarktida","Yevrosiyo"],3,"Yevrosiyo eng katta materik."],
["O‘zbekiston nechta davlat bilan chegaradosh?",["4","5","6","7"],1,"O‘zbekiston 5 davlat bilan chegaradosh."],
["Nil daryosi asosan qaysi qit’ada oqadi?",["Osiyo","Afrika","Yevropa","Avstraliya"],1,"Nil Afrikadagi yirik daryodir."]]},
{ id:4,age:"16-20",icon:"🏛",title:"Tarix sirlari",desc:"O‘zbekiston va jahon tarixidagi muhim voqealar.",difficulty:"O‘rta",category:"Tarix",questions:[
["Amir Temur qachon tug‘ilgan?",["1336-yil","1405-yil","1394-yil","1301-yil"],0,"Amir Temur 1336-yil 9-aprelda tug‘ilgan."],
["O‘zbekiston mustaqilligi qachon e’lon qilingan?",["31-avgust 1991","1-sentabr 1991","8-dekabr 1992","21-mart 1990"],0,"Mustaqillik 1991-yil 31-avgustda e’lon qilingan."],
["Qadimgi Misr yozuvi nima deb ataladi?",["Mixxat","Iyeroglif","Lotin","Kirill"],1,"Misrda iyeroglif yozuvi ishlatilgan."],
["Buyuk ipak yo‘li nimani bog‘lagan?",["Faqat Yevropani","Sharq va G‘arbni","Afrika va Amerikani","Faqat Hindistonni"],1,"Savdo yo‘li Sharq va G‘arb hududlarini bog‘lagan."],
["Jadidchilik harakatining asosiy maqsadlaridan biri?",["Ma’rifat va islohot","Feodal tartibni kuchaytirish","Savdoni taqiqlash","Yozuvni bekor qilish"],0,"Jadidlar ta’lim va jamiyatni isloh qilishni ko‘zlagan."],
["Rim imperiyasining mashhur shahri?",["Afina","Rim","Sparta","Bobil"],1,"Rim qadimgi Rim imperiyasining markazi bo‘lgan."],
["Mirzo Ulug‘bek kim sifatida mashhur?",["Shoir va rassom","Astronom va hukmdor","Dengizchi","Me’mor"],1,"Ulug‘bek astronomiya rivojiga katta hissa qo‘shgan."],
["Birinchi jahon urushi qaysi yillarda bo‘lgan?",["1914–1918","1939–1945","1905–1907","1870–1871"],0,"Birinchi jahon urushi 1914–1918-yillarda davom etgan."],
["Zahiriddin Muhammad Bobur qaysi sulolaga asos solgan?",["Usmoniylar","Boburiylar","Safaviylar","Qoraxoniylar"],1,"Bobur Hindistonda Boburiylar sulolasiga asos solgan."],
["O‘zbekiston Respublikasi Konstitutsiyasi ilk bor qachon qabul qilingan?",["1991-yil","1992-yil 8-dekabr","1993-yil","1995-yil"],1,"Konstitutsiya 1992-yil 8-dekabrda qabul qilingan."]]},
{ id:5,age:"16-20",icon:"🔬",title:"Biologiya olami",desc:"Hujayra, organizmlar va inson anatomiyasi.",difficulty:"Oson",category:"Biologiya",questions:[
["Hujayraning boshqaruv markazi qaysi?",["Mitoxondriya","Yadro","Ribosoma","Membrana"],1,"Yadro irsiy axborotni saqlaydi va hujayrani boshqaradi."],
["Fotosintez qaysi organoidda kechadi?",["Xloroplast","Lizosoma","Yadro","Vakuola"],0,"Xloroplastda xlorofill mavjud."],
["Inson yuragi nechta kameradan iborat?",["2","3","4","5"],2,"Yurak ikki bo‘lmacha va ikki qorinchadan iborat."],
["Qonning qizil rangini nima beradi?",["Insulin","Gemoglobin","Keratin","Melanin"],1,"Gemoglobin tarkibidagi temir qon rangini belgilaydi."],
["O‘simlik ildizining asosiy vazifasi?",["Fotosintez","Suv va mineral moddalarni shimish","Urug‘ hosil qilish","Changlatish"],1,"Ildiz tuproqdan suv va mineral moddalarni oladi."],
["DNKning asosiy vazifasi nima?",["Energiya ishlab chiqarish","Irsiy axborotni saqlash","Ovqat hazm qilish","Harakatlanish"],1,"DNK genetik axborotni saqlaydi."],
["Odam nafas olganda qaysi gazni qabul qiladi?",["Azot","Kislorod","Karbonat angidrid","Vodorod"],1,"Nafas olishda organizm kisloroddan foydalanadi."],
["Sutemizuvchilar bolalarini nima bilan oziqlantiradi?",["Barg","Sut","Don","Hasharot"],1,"Sut bezlari sut ishlab chiqaradi."],
["Qaysi qon hujayralari immun himoyada qatnashadi?",["Eritrotsitlar","Leykotsitlar","Trombotsitlar","Neyronlar"],1,"Leykotsitlar organizmni infeksiyalardan himoya qiladi."],
["Ekotizim nimadan tashkil topadi?",["Faqat hayvonlardan","Tirik organizmlar va muhitdan","Faqat o‘simliklardan","Faqat suvdan"],1,"Ekotizim biotik va abiotik qismlarni qamrab oladi."]]},
{ id:6,age:"16-20",icon:"⚗️",title:"Kimyo bilimdoni",desc:"Elementlar, formulalar va kimyoviy jarayonlar.",difficulty:"O‘rta",category:"Kimyo",questions:[
["Suvning kimyoviy formulasi?",["CO₂","H₂O","O₂","NaCl"],1,"Suv ikki vodorod va bir kislorod atomidan tuzilgan."],
["Kislorodning kimyoviy belgisi?",["K","O","C","N"],1,"Kislorod belgisi O."],
["Osh tuzining formulasi?",["NaCl","HCl","KOH","CaCO₃"],0,"Osh tuzi — natriy xlorid."],
["Davriy jadvalni kim yaratgan?",["Nyuton","Mendeleyev","Lavuazye","Dalton"],1,"Dmitriy Mendeleyev davriy qonunni shakllantirgan."],
["pH qiymati 7 dan kichik eritma qanday?",["Ishqoriy","Neytral","Kislotali","Metall"],2,"pH<7 muhit kislotali hisoblanadi."],
["Karbonat angidrid formulasi?",["CO","CO₂","CH₄","CaO"],1,"Karbonat angidrid bir uglerod va ikki kislorod atomidan iborat."],
["Atom yadrosida nimalar bo‘ladi?",["Elektron va foton","Proton va neytron","Faqat elektron","Molekulalar"],1,"Yadro proton va neytronlardan tashkil topadi."],
["Temirning kimyoviy belgisi?",["Te","Ir","Fe","F"],2,"Temirning lotincha nomi ferrum, belgisi Fe."],
["Kimyoviy reaksiyada massa saqlanish qonuni kim nomi bilan bog‘liq?",["Lomonosov va Lavuazye","Faradey","Avogadro","Boyl"],0,"Massa saqlanish qonuni Lomonosov va Lavuazye ishlari bilan asoslangan."],
["Metallarning ko‘pchiligi qanday xususiyatga ega?",["Elektrni o‘tkazadi","Mo‘rt gaz","Suvda doim eriydi","Rangsiz"],0,"Metallar odatda elektr va issiqlikni yaxshi o‘tkazadi."]]},
{ id:7,age:"16-20",icon:"⚡",title:"Fizika challenge",desc:"Harakat, kuch, energiya va elektr hodisalari.",difficulty:"O‘rta",category:"Fizika",questions:[
["Kuchning SI tizimidagi birligi?",["Joul","Nyuton","Vatt","Paskal"],1,"Kuch nyuton (N) bilan o‘lchanadi."],
["Tezlik formulasi qaysi?",["v=s/t","F=ma","P=A/t","ρ=m/V"],0,"Tezlik yo‘lning vaqtga nisbatidir."],
["Elektr toki kuchi birligi?",["Volt","Om","Amper","Vatt"],2,"Tok kuchi amperda o‘lchanadi."],
["Yer jismlarni qaysi kuch bilan tortadi?",["Ishqalanish","Gravitatsiya","Elastiklik","Magnit"],1,"Yerning tortish kuchi gravitatsiyadir."],
["Energiya SI birligi?",["Joul","Nyuton","Amper","Kelvin"],0,"Energiya joul bilan o‘lchanadi."],
["Yorug‘lik vakuumda taxminan qanday tezlikda tarqaladi?",["300 km/s","3 000 km/s","300 000 km/s","30 000 km/s"],2,"Yorug‘lik tezligi taxminan 300 000 km/s."],
["Zichlik formulasi?",["ρ=m/V","v=s/t","F=ma","A=Fs"],0,"Zichlik massa va hajm nisbatiga teng."],
["Kuchlanish birligi?",["Amper","Volt","Om","Tesla"],1,"Elektr kuchlanishi volt bilan o‘lchanadi."],
["Suv normal atmosfera bosimida necha °C da qaynaydi?",["0","50","100","120"],2,"Normal bosimda suv 100 °C da qaynaydi."],
["Ish formulasi (kuch yo‘nalishi siljish bilan bir xil bo‘lsa)?",["A=F·s","P=F/S","m=ρV","Q=cm"],0,"Mexanik ish kuch va siljish ko‘paytmasiga teng."]]},
{ id:8,age:"16-20",icon:"🇬🇧",title:"Ingliz tili challenge",desc:"Grammar, vocabulary va to‘g‘ri gap tuzish.",difficulty:"O‘rta",category:"Ingliz tili",questions:[
["Choose the correct form: She ___ to school every day.",["go","goes","going","gone"],1,"Present Simple: she bilan fe’lga -s qo‘shiladi."],
["What is the opposite of 'ancient'?",["old","modern","historic","early"],1,"Ancient — qadimiy; modern — zamonaviy."],
["Choose: They ___ football now.",["play","plays","are playing","played"],2,"Now hozirgi davomiy zamonni bildiradi."],
["Past form of 'buy'?",["buyed","bought","buys","buying"],1,"Buy fe’lining o‘tgan zamon shakli bought."],
["Translate 'knowledge'.",["Bilim","Do‘stlik","Sayohat","Muvaffaqiyat"],0,"Knowledge — bilim."],
["Choose the article: ___ apple a day...",["A","An","The","No article"],1,"Apple unli tovush bilan boshlanadi: an apple."],
["Plural of 'child'?",["childs","childes","children","childrens"],2,"Child so‘zining ko‘pligi children."],
["Choose the correct sentence.",["He don't like tea.","He doesn't likes tea.","He doesn't like tea.","He not like tea."],2,"Doesn't dan keyin fe’lning asosiy shakli ishlatiladi."],
["What does 'improve' mean?",["Yomonlashmoq","Yaxshilamoq","Unutmoq","Kutmoq"],1,"Improve — yaxshilamoq."],
["Complete: If it rains, we ___ at home.",["stay","stayed","will stay","staying"],2,"First conditional: if + present, will + verb."]]},
{ id:9,age:"16-20",icon:"🧩",title:"Mantiqiy fikrlash",desc:"Ketma-ketliklar, topishmoqlar va tafakkur.",difficulty:"Qiyin",category:"Mantiq",questions:[
["Ketma-ketlik: 1, 1, 2, 3, 5, 8, ...",["11","12","13","15"],2,"Fibonachchi ketma-ketligi: oldingi ikki son yig‘indisi."],
["Barcha atirgullar gul. Ayrim gullar tez so‘ladi. Qaysi xulosa aniq?",["Barcha atirgullar tez so‘ladi","Ayrim atirgullar so‘ladi","Atirgullar gul hisoblanadi","Hech bir gul so‘lmaydi"],2,"Faqat birinchi berilgan hukm barcha atirgullar gul ekanini kafolatlaydi."],
["Soat 3:00 da strelkalar orasidagi kichik burchak?",["45°","60°","90°","180°"],2,"Soat strelkalari orasida 90° burchak bor."],
["Qaysi son ortiqcha: 2, 3, 5, 9, 11?",["2","3","9","11"],2,"9 tub son emas, qolganlari tub son."],
["Bir oilada 2 ota va 2 o‘g‘il bor, jami kamida nechta kishi?",["2","3","4","5"],1,"Bobo, ota va o‘g‘il — jami 3 kishi."],
["Agar bugun seshanba bo‘lsa, 10 kundan keyin qaysi kun?",["Payshanba","Juma","Shanba","Yakshanba"],1,"10 kun = 7+3; seshanbadan 3 kun keyin juma."],
["Ketma-ketlik: 100, 90, 81, 73, ...",["64","65","66","67"],2,"Ayirmalar 10, 9, 8; keyingi ayirma 7, natija 66."],
["5 ta mashina 5 daqiqada 5 buyum yasasa, 100 ta mashina 100 buyumni necha daqiqada yasaydi?",["5","20","100","500"],0,"Har bir mashina 5 daqiqada bittadan tayyorlaydi."],
["Qaysi shaklning barcha tomonlari teng va burchaklari 90°?",["Romb","Kvadrat","Trapetsiya","Uchburchak"],1,"Kvadratning tomonlari teng va burchaklari to‘g‘ri."],
["Bir kilogramm paxta va bir kilogramm temirning qaysi biri og‘ir?",["Paxta","Temir","Teng","Aniqlab bo‘lmaydi"],2,"Ikkalasi ham bir kilogramm."]]},
{ id:10,age:"16-20",icon:"💻",title:"Informatika olami",desc:"Kompyuter savodxonligi va veb asoslari.",difficulty:"O‘rta",category:"Informatika",questions:[
["HTML nimaning qisqartmasi?",["HyperText Markup Language","High Transfer Machine Language","Hyper Tool Multi Language","Home Text Making Language"],0,"HTML — HyperText Markup Language."],
["CSS asosan nima uchun ishlatiladi?",["Ma’lumot saqlash","Sahifa dizaynini bezash","Server yaratish","Hisoblash"],1,"CSS veb sahifaning ko‘rinishi va joylashuvini belgilaydi."],
["JavaScript qanday til?",["Faqat belgilash tili","Dasturlash tili","Ma’lumotlar bazasi","Operatsion tizim"],1,"JavaScript veb sahifalarga interaktivlik beradi."],
["Kompyuterning 'miyasi' deb qaysi qurilma ataladi?",["Monitor","CPU","Klaviatura","Printer"],1,"CPU — markaziy protsessor."],
["URL nimani anglatadi?",["Veb manzil","Operativ xotira","Fayl turi","Protsessor tezligi"],0,"URL resursning yagona manzilidir."],
["Ikkilik sanoq sistemasida qaysi raqamlar ishlatiladi?",["0 va 1","1 va 2","0 dan 9 gacha","A va B"],0,"Binary tizim faqat 0 va 1 dan foydalanadi."],
["HTML havola tegi qaysi?",["<p>","<a>","<img>","<h1>"],1,"a tegi havola yaratadi."],
["RAM qanday xotira?",["Doimiy","Tezkor","Optik","Tashqi"],1,"RAM — tezkor va vaqtinchalik xotira."],
["Algoritm nima?",["Kompyuter markasi","Muammoni yechish bo‘yicha ketma-ket ko‘rsatmalar","Rasm formati","Internet tarmog‘i"],1,"Algoritm amallarni tartibli bajarish yo‘riqnomasidir."],
["Git ko‘pincha nima uchun ishlatiladi?",["Versiyalarni boshqarish","Video montaj","Rasm chizish","Audio yozish"],0,"Git koddagi o‘zgarishlar tarixini boshqaradi."]]},
{ id:11,age:"20-25",icon:"🧠",title:"Murakkab matematika",desc:"Ehtimollar, statistika va matematik mantiq.",difficulty:"Qiyin",category:"Matematika",questions:[
["Adolatli kubik tashlanganda juft son tushish ehtimoli?",["1/6","1/3","1/2","2/3"],2,"2, 4, 6 — oltita natijadan uchtasi."],
["O‘rtacha arifmetik: 4, 6, 8, 10?",["6","7","8","9"],1,"Yig‘indi 28; 28/4=7."],
["x²−5x+6=0 tenglamaning ildizlari?",["1 va 6","2 va 3","−2 va −3","0 va 6"],1,"(x−2)(x−3)=0."],
["Agar korrelyatsiya r=−1 bo‘lsa, bu nimani anglatadi?",["Mukammal musbat bog‘lanish","Chiziqli bog‘lanish yo‘q","Mukammal manfiy chiziqli bog‘lanish","Sabab-oqibat isbotlangan"],2,"r=−1 mukammal manfiy chiziqli korrelyatsiyani bildiradi."],
["5! qiymati nechaga teng?",["25","60","100","120"],3,"5×4×3×2×1=120."],
["A va B mustaqil hodisalar. P(A)=0.5, P(B)=0.4. P(A∩B)?",["0.1","0.2","0.4","0.9"],1,"Mustaqil hodisalarda ehtimollar ko‘paytiriladi."],
["Matritsa determinanti nol bo‘lsa, matritsa qanday?",["Teskari matritsaga ega","Singulyar","Birlik","Diagonal"],1,"Determinanti nol matritsa singulyar bo‘ladi."],
["Geometrik progressiyada b₁=3, q=2. b₅ nechaga teng?",["24","36","48","64"],2,"b₅=3×2⁴=48."],
["Standart normal taqsimotning o‘rtachasi va dispersiyasi?",["0 va 1","1 va 0","0 va 0","1 va 1"],0,"Standart normal taqsimot N(0,1)."],
["Integral ∫₂x dx nimaga teng?",["x²+C","2x²+C","x+C","x³+C"],0,"2x ning boshlang‘ich funksiyasi x²+C."]]},
{ id:12,age:"20-25",icon:"🎓",title:"Pedagogika bilimdoni",desc:"Ta’lim nazariyasi, metodlar va pedagogik texnologiyalar.",difficulty:"Ekspert",category:"Pedagogika",questions:[
["Pedagogikaning asosiy tadqiqot obyekti nima?",["Tabiat hodisalari","Ta’lim-tarbiya jarayoni","Iqtisodiy bozor","Til tizimi"],1,"Pedagogika ta’lim, tarbiya va shaxs kamolotini o‘rganadi."],
["Formativ baholashning asosiy vazifasi?",["Faqat yakuniy baho qo‘yish","O‘qish jarayonida qayta aloqa berish","Talabalarni saralash","Davomatni hisoblash"],1,"Formativ baholash o‘qishni yaxshilash uchun muntazam feedback beradi."],
["Konstruktivistik yondashuvda bilim qanday shakllanadi?",["Faqat yodlash orqali","O‘quvchining faol tajriba va talqini orqali","Faqat ma’ruza orqali","Tayyor holda uzatiladi"],1,"O‘rganuvchi bilimni faol ravishda quradi."],
["Differensial ta’lim nimani nazarda tutadi?",["Hamma uchun bir xil yo‘l","O‘quvchi ehtiyoj va imkoniyatlariga moslashtirish","Faqat guruhli ish","Faqat test"],1,"Ta’lim mazmuni va usullari o‘quvchilar farqiga moslanadi."],
["Bloom taksonomiyasining yuqori darajalaridan biri?",["Eslab qolish","Tushunish","Yaratish","Tanib olish"],2,"Yaratish Bloom taksonomiyasining yuqori kognitiv darajasidir."],
["Pedagogik diagnostika nima uchun kerak?",["Faqat jazolash","Ta’lim holati va rivojlanishni aniqlash","Darsni bekor qilish","Faqat reyting tuzish"],1,"Diagnostika ehtiyoj va natijalarni aniqlashga xizmat qiladi."],
["Interfaol metodning muhim belgisi?",["Bir tomonlama bayon","O‘quvchilarning faol hamkorligi","Faqat ko‘chirish","Sukut saqlash"],1,"Interfaol metod muloqot va hamkorlikka tayanadi."],
["Yaqin rivojlanish zonasi tushunchasi kim bilan bog‘liq?",["J. Piaget","L. Vygotskiy","B. Skinner","A. Maslow"],1,"Bu tushuncha Lev Vygotskiy nazariyasiga mansub."],
["Andragogika asosan kimlarni o‘qitishni o‘rganadi?",["Maktabgacha yoshdagilar","Kattalar","Faqat boshlang‘ich sinf","Faqat o‘smirlar"],1,"Andragogika kattalar ta’limi nazariyasidir."],
["Refleksiya ta’lim jarayonida nimaga xizmat qiladi?",["O‘z faoliyatini tahlil qilishga","Faqat baho olishga","Dars vaqtini uzaytirishga","Nazoratni bekor qilishga"],0,"Refleksiya o‘rganuvchiga o‘z faoliyati va natijasini tahlil qilishga yordam beradi."]]},
{ id:13,age:"20-25",icon:"🧑‍🏫",title:"Psixologiya olami",desc:"Xotira, shaxs, motivatsiya va umumiy psixologiya.",difficulty:"Qiyin",category:"Psixologiya",questions:[
["Klassik shartli reflekslar tadqiqoti kim bilan bog‘liq?",["Pavlov","Freyd","Piaget","Maslow"],0,"Ivan Pavlov shartli reflekslarni tadqiq qilgan."],
["Ishchi xotira modeli kimlar bilan bog‘liq?",["Baddeley va Hitch","Watson va Crick","Darwin va Wallace","Skinner va Thorndike"],0,"Baddeley va Hitch ishchi xotira modelini taklif qilgan."],
["Ichki motivatsiya nimaga asoslanadi?",["Faqat mukofotga","Faoliyatning o‘zidan qoniqishga","Jazolanishdan qo‘rqishga","Tashqi bosimga"],1,"Ichki motivatsiyada faoliyatning o‘zi qiziqish va qoniqish manbai."],
["Klassik psixoanaliz asoschisi kim?",["Carl Rogers","Sigmund Freud","Jean Piaget","Albert Bandura"],1,"Psixoanalitik yondashuv Freud nomi bilan bog‘liq."],
["Kognitiv dissonans nazariyasi kim tomonidan taklif qilingan?",["Leon Festinger","Abraham Maslow","Erik Erikson","John Bowlby"],0,"Kognitiv dissonans nazariyasi Leon Festingerga tegishli."],
["Operant shartlanish qaysi olim bilan bog‘liq?",["B. F. Skinner","I. Pavlov","W. James","K. Jung"],0,"Skinner xulq oqibatlari orqali o‘rganishni tadqiq qilgan."],
["Empatiya nima?",["Boshqaning hissiyotini tushunish","Xotirani yo‘qotish","Tez hisoblash","O‘zini baholash"],0,"Empatiya boshqa insonning hissiy holatini anglash qobiliyatidir."],
["Maslow ehtiyojlar ierarxiyasida eng yuqori ehtiyoj?",["Xavfsizlik","Fiziologik ehtiyoj","O‘zini ro‘yobga chiqarish","Tegishlilik"],2,"Klassik modelda yuqori pog‘ona self-actualization."],
["Longitudinal tadqiqot qanday olib boriladi?",["Bir martalik kuzatuv","Bir guruhni vaqt davomida takroriy o‘rganish","Faqat laboratoriyada","Faqat hujjat tahlili"],1,"Longitudinal tadqiqot vaqt davomida o‘zgarishlarni kuzatadi."],
["Metakognitsiya nima?",["Fikr haqida fikrlash","Faqat eslab qolish","Jismoniy idrok","Hissiy javob"],0,"Metakognitsiya — o‘z bilish jarayonlarini anglash va boshqarish."]]},
{ id:14,age:"20-25",icon:"📖",title:"Falsafa va tafakkur",desc:"Falsafiy tushunchalar, mantiq va Sharq tafakkuri.",difficulty:"Ekspert",category:"Falsafa",questions:[
["'Falsafa' atamasi odatda qanday ma’noni anglatadi?",["Donolikni sevish","Tabiatni o‘lchash","Hokimiyatni sevish","San’at yaratish"],0,"Yunoncha philosophia — donolikni sevish."],
["Dialektikada qarama-qarshiliklar qanday talqin qilinadi?",["Rivojlanish manbalaridan biri","Har doim xato","Mavjud emas","Faqat til hodisasi"],0,"Dialektik yondashuv ziddiyatlarni rivojlanish manbai sifatida ko‘radi."],
["Deduksiya nima?",["Xususiydan umumiyga","Umumiydan xususiyga xulosa chiqarish","Tasodifiy taxmin","Tajriba o‘tkazish"],1,"Deduksiya umumiy qoidadan xususiy xulosaga boradi."],
["'Men fikrlayapman, demak mavjudman' iborasi kimga tegishli?",["Platon","Rene Dekart","Aristotel","Kant"],1,"Bu mashhur tezis Rene Dekart bilan bog‘liq."],
["Sharq peripatetizmi bilan bog‘liq mutafakkir?",["Forobiy","Makiavelli","Hobbes","Nietzsche"],0,"Abu Nasr Forobiy Sharq peripatetizmining yirik vakili."],
["Etika nimani o‘rganadi?",["Axloq va qadriyatlarni","Tovushlarni","Yulduzlarni","Moddalar tarkibini"],0,"Etika axloqiy me’yor va qadriyatlarni o‘rganadi."],
["Epistemologiya qaysi masalani o‘rganadi?",["Bilish nazariyasi","Davlat boshqaruvi","San’at tarixi","Til grammatikasi"],0,"Epistemologiya — bilish va bilim haqidagi falsafiy ta’limot."],
["Aristotelning mantiqqa oid asarlari majmuasi qanday nom bilan mashhur?",["Organon","Respublika","Metafizika","Iliada"],0,"Organon Aristotelning mantiqiy asarlari majmuasidir."],
["Utilitarizmda axloqiy mezon nimaga urg‘u beradi?",["Eng katta umumiy foyda","Faqat niyat","An’anaga so‘zsiz itoat","Shaxsiy shuhrat"],0,"Utilitarizm oqibat va umumiy farovonlikka urg‘u beradi."],
["Ontologiya nimani o‘rganadi?",["Borliqni","Bilish usullarini","Axloqni","San’atni"],0,"Ontologiya borliq haqidagi ta’limot."]]},
{ id:15,age:"20-25",icon:"🌐",title:"Jahon tarixi",desc:"Sivilizatsiyalar, tarixiy davrlar va islohotlar.",difficulty:"Qiyin",category:"Tarix",questions:[
["Uyg‘onish davri dastlab qaysi hududda keng rivojlandi?",["Italiya","Skandinaviya","Markaziy Amerika","Avstraliya"],0,"Yevropa Uyg‘onish davri dastlab Italiyada kuchaydi."],
["Magna Carta qachon imzolangan?",["1066","1215","1492","1789"],1,"Magna Carta 1215-yilda Angliyada tasdiqlangan."],
["Konstantinopol 1453-yilda kimlar tomonidan egallangan?",["Salibchilar","Usmonlilar","Mo‘g‘ullar","Rimliklar"],1,"Shahar Mehmed II boshchiligidagi Usmonlilar tomonidan olingan."],
["Fransuz inqilobi qachon boshlangan?",["1688","1776","1789","1848"],2,"Fransuz inqilobi 1789-yilda boshlangan."],
["Sanoat inqilobi dastlab qaysi mamlakatda boshlandi?",["Fransiya","Buyuk Britaniya","Germaniya","AQSh"],1,"Sanoat inqilobi XVIII asrda Buyuk Britaniyada boshlandi."],
["BMT qachon tashkil topgan?",["1919","1945","1955","1961"],1,"BMT 1945-yilda tashkil topgan."],
["Qadimgi Mesopotamiya qaysi daryolar oralig‘ida joylashgan?",["Nil va Kongo","Dajla va Frot","Hind va Gang","Amudaryo va Sirdaryo"],1,"Mesopotamiya Dajla va Frot oralig‘ida."],
["Berlin devori qachon qulagan?",["1961","1975","1989","1991"],2,"Berlin devori 1989-yil noyabrda ochilgan va qulagan."],
["Qadimgi Afina qaysi boshqaruv shakli bilan mashhur?",["Demokratiya","Mutlaq monarxiya","Teokratiya","Imperiya"],0,"Afina demokratiyaning qadimgi shakli bilan tanilgan."],
["Buyuk geografik kashfiyotlar davrida Amerikaga 1492-yilda yetib borgan sayyoh?",["Vasko da Gama","Xristofor Kolumb","Magellan","Kuk"],1,"Kolumb 1492-yilda Karib hududiga yetib borgan."]]},
{ id:16,age:"20-25",icon:"💻",title:"Dasturlash challenge",desc:"HTML, CSS, JavaScript va algoritmlash.",difficulty:"Ekspert",category:"Dasturlash",questions:[
["JavaScript’da o‘zgarmas binding e’lon qilish kalit so‘zi?",["var","let","const","static"],2,"const qayta tayinlashni taqiqlaydi."],
["Array oxiriga element qo‘shuvchi metod?",["shift()","push()","pop()","slice()"],1,"push() massiv oxiriga element qo‘shadi."],
["CSS’da class selektori qaysi belgi bilan boshlanadi?",["#",".","@","*"],1,"Class selektori nuqta bilan yoziladi."],
["HTML5 semantik navigatsiya tegi?",["<nav>","<span>","<b>","<br>"],0,"nav navigatsiya havolalari bo‘limini bildiradi."],
["JavaScript’da qat’iy tenglik operatori?",["=","==","===","!="],2,"=== tur va qiymatni konversiyasiz solishtiradi."],
["Binary search qaysi shartda samarali ishlaydi?",["Massiv tartiblangan bo‘lsa","Massiv bo‘sh bo‘lsa","Faqat matnda","Faqat takroriy qiymatlarda"],0,"Binary search tartiblangan ma’lumotda qidiradi."],
["Big-O O(n) nimani bildiradi?",["Doimiy vaqt","Chiziqli o‘sish","Kvadratik o‘sish","Logarifmik o‘sish"],1,"Amallar soni kirish hajmiga chiziqli bog‘liq."],
["DOM nimaning qisqartmasi?",["Document Object Model","Data Output Mode","Digital Order Map","Document Oriented Memory"],0,"DOM HTML hujjatini obyektlar daraxti sifatida ifodalaydi."],
["Promise holatlaridan biri qaysi?",["Pending","Looping","Compiling","Rendering"],0,"Promise pending, fulfilled yoki rejected holatida bo‘ladi."],
["HTTP 404 status kodi nimani bildiradi?",["Muvaffaqiyat","Ruxsat yo‘q","Resurs topilmadi","Server xatosi"],2,"404 — Not Found."]]},
{ id:17,age:"20-25",icon:"🇬🇧",title:"Professional English",desc:"Advanced grammar va academic vocabulary.",difficulty:"Ekspert",category:"Ingliz tili",questions:[
["Choose the correct inversion: Rarely ___ such dedication.",["I have seen","have I seen","I saw","seen I have"],1,"Negative adverbial rarely boshida kelsa subject-auxiliary inversion bo‘ladi."],
["Closest meaning of 'ubiquitous'?",["Rare","Present everywhere","Temporary","Unclear"],1,"Ubiquitous — hamma joyda mavjud."],
["Choose: Had I known, I ___ earlier.",["will leave","would have left","left","would leave"],1,"Third conditional inversion: would have + V3."],
["Which is a nominalisation of 'decide'?",["decisive","decision","decided","decidingly"],1,"Decision — ot shakli."],
["Choose the correct collocation.",["Make research","Do a research","Conduct research","Build research"],2,"Conduct research — tabiiy akademik birikma."],
["'Mitigate' most nearly means:",["Worsen","Reduce severity","Ignore","Predict"],1,"Mitigate — salbiy ta’sir yoki og‘irlikni kamaytirmoq."],
["Choose the correct form: The data ___ inconclusive.",["is","are","be","was being"],1,"Formal academic usage often treats data as plural."],
["Which connector signals concession?",["Furthermore","Nevertheless","Therefore","For instance"],1,"Nevertheless qarama-qarshilik yoki yon berishni bildiradi."],
["Complete: No sooner ___ than the lecture began.",["we arrived","had we arrived","we had arrive","did we arrived"],1,"No sooner bilan inversion va past perfect ishlatiladi."],
["What does 'ambiguous' mean?",["Clear and direct","Having more than one possible meaning","Scientifically proven","Very brief"],1,"Ambiguous — bir nechta talqinga ega, noaniq."]]},
{ id:18,age:"20-25",icon:"🔍",title:"Ilmiy dunyo",desc:"Kashfiyotlar, texnologiyalar va ilmiy tafakkur.",difficulty:"Qiyin",category:"Fan",questions:[
["CRISPR-Cas9 texnologiyasi asosan nima uchun qo‘llanadi?",["Genomni tahrirlash","Kosmik aloqa","Suvni tuzsizlantirish","Yadro sintezi"],0,"CRISPR-Cas9 genetik materialni maqsadli tahrirlash vositasi."],
["Higgs bozoni qaysi zarrachalar fizikasi modeli bilan bog‘liq?",["Standart model","Klassik mexanika","Galiley nisbiyligi","Atomning Tomson modeli"],0,"Higgs bozoni Standart modeldagi zarracha."],
["mRNA vaksinalari hujayraga nimani yetkazadi?",["Antitana tayyor holda","Antigen oqsilini ishlab chiqarish bo‘yicha ko‘rsatma","Butun virus","Antibiotik"],1,"mRNA hujayraga ma’lum oqsilni ishlab chiqarish ko‘rsatmasini beradi."],
["James Webb kosmik teleskopi asosan qaysi diapazonda kuzatadi?",["Infraqizil","Rentgen","Radio","Ultrabinafsha"],0,"JWST infraqizil kuzatuvlarga mo‘ljallangan."],
["CRISPR tizimining tabiiy vazifasi bakteriyalarda nima?",["Fotosintez","Viruslarga qarshi himoya","Oqsil hazmi","Harakat"],1,"CRISPR bakteriyalarning moslashuvchan immun himoyasida qatnashadi."],
["Grafen qanday tuzilishga ega?",["Bir atom qalinlikdagi uglerod qatlami","Temir oksidi","Silikon kristali","Polimer tolasi"],0,"Grafen uglerod atomlarining bir qatlamli panjarasidir."],
["Fotosintezda yorug‘lik energiyasi nimaga aylantiriladi?",["Kimyoviy energiyaga","Tovushga","Magnit energiyaga","Yadro energiyasiga"],0,"Yorug‘lik energiyasi organik moddalardagi kimyoviy energiyaga aylanadi."],
["Gravitatsion to‘lqinlar bevosita ilk bor qachon qayd etilgan?",["1998","2015","2020","2024"],1,"LIGO 2015-yilda gravitatsion to‘lqin signalini qayd etdi."],
["Antibiotiklar asosan nimaga qarshi ishlatiladi?",["Viruslarga","Bakteriyalarga","Allergenlarga","Zamburug‘larning barchasiga"],1,"Antibiotiklar bakterial infeksiyalarga qarshi qo‘llanadi."],
["Ilmiy gipoteza qanday bo‘lishi kerak?",["Tekshirib bo‘lmaydigan","Sinovdan o‘tkaziladigan","Faqat fikrga asoslangan","O‘zgarmas"],1,"Ilmiy gipoteza tekshirilishi va dalillar bilan baholanishi mumkin."]]},
{ id:19,age:"20-25",icon:"⚖️",title:"Huquq va jamiyat",desc:"Konstitutsiya, fuqarolik huquqlari va huquqiy savodxonlik.",difficulty:"Qiyin",category:"Huquq",questions:[
["O‘zbekiston Respublikasi Konstitutsiyasining yangi tahriri referendumda qachon qabul qilingan?",["2021-yil 1-sentabr","2023-yil 30-aprel","2022-yil 8-dekabr","2024-yil 1-yanvar"],1,"Yangi tahrir 2023-yil 30-apreldagi referendumda qabul qilingan."],
["Huquqiy davlatning muhim tamoyili?",["Qonun ustuvorligi","Shaxsiy hokimiyat","Sud mustaqilligini cheklash","Qonunsiz boshqaruv"],0,"Huquqiy davlatda qonun ustuvorligi asosiy tamoyildir."],
["Fuqarolik huquqi asosan qaysi munosabatlarni tartibga soladi?",["Mulkiy va shaxsiy nomulkiy","Faqat jinoyat","Faqat harbiy","Faqat diplomatik"],0,"Fuqarolik huquqi mulkiy va shaxsiy nomulkiy munosabatlarni tartibga soladi."],
["Aybsizlik prezumpsiyasi nimani anglatadi?",["Shaxs aybini o‘zi isbotlaydi","Aybi qonuniy tartibda isbotlanmaguncha aybsiz hisoblanadi","Har kim aybdor","Sud dalilsiz hukm qiladi"],1,"Aybsizlik prezumpsiyasi shaxs huquqlarining muhim kafolatidir."],
["Davlat hokimiyati bo‘linishi odatda qaysi tarmoqlarni qamrab oladi?",["Qonun chiqaruvchi, ijro etuvchi, sud","Markaziy va mahalliy","Davlat va xususiy","Ichki va tashqi"],0,"Klassik prinsip uch hokimiyat tarmog‘ini ajratadi."],
["Shartnoma kuchga kirishi uchun eng muhim asos?",["Tomonlarning qonuniy roziligi","Faqat og‘zaki mish-mish","Bir tomonning yashirin niyati","Ijtimoiy tarmoq posti"],0,"Shartnoma tomonlarning qonuniy va erkin kelishuviga tayanadi."],
["Ombudsman instituti asosan nima bilan shug‘ullanadi?",["Inson huquqlari himoyasi","Soliq yig‘ish","Pul emissiyasi","Sport musobaqalari"],0,"Ombudsman inson huquq va erkinliklariga oid murojaatlarni ko‘rib chiqadi."],
["Mehnat shartnomasi taraflari kimlar?",["Ish beruvchi va xodim","Sudya va prokuror","Sotuvchi va xaridor har doim","Davlat va saylovchi"],0,"Mehnat munosabati ish beruvchi va xodim o‘rtasida yuzaga keladi."],
["Normativ-huquqiy hujjat nima?",["Umummajburiy huquqiy qoidalarni belgilovchi rasmiy hujjat","Shaxsiy kundalik","Reklama matni","Og‘zaki maslahat"],0,"Normativ-huquqiy hujjat huquq normalarini belgilaydi."],
["Mediatsiyaning maqsadi nima?",["Tomonlarga nizoni kelishuv orqali hal qilishda ko‘maklashish","Jazo tayinlash","Sud qarorini bekor qilish","Dalillarni yashirish"],0,"Mediatsiya neytral mediator yordamida kelishuvga erishishga qaratilgan."]]},
{ id:20,age:"20-25",icon:"🏆",title:"IQ Master — Super Challenge",desc:"Murakkab mantiq, tezkor fikrlash va umumiy bilim.",difficulty:"Ekspert",category:"IQ",questions:[
["Uchta kalit va boshqa xonadagi uchta chiroq bor. Xonaga bir marta kirish mumkin. Qaysi usul bilan kalitlarni aniqlash mumkin?",["Barcha kalitni yoqib kirish","Birini yoqib kutish, o‘chirib ikkinchisini yoqish; yorug‘lik va issiqlikni tekshirish","Tasodifiy tanlash","Buni aniqlab bo‘lmaydi"],1,"Yongan chiroq, o‘chiq-issiq chiroq va o‘chiq-sovuq chiroq uch holatni beradi."],
["Agar 2→6, 3→12, 4→20 bo‘lsa, 5→?",["25","30","35","40"],1,"n → n(n+1): 5×6=30."],
["Bir son 20% oshirilib, so‘ng 20% kamaytirildi. Yakuniy qiymat boshlang‘ichga nisbatan?",["O‘zgarmaydi","4% kam","4% ko‘p","20% kam"],1,"1.2×0.8=0.96, ya’ni 4% kam."],
["Barcha A — B, barcha B — C. Qaysi xulosa to‘g‘ri?",["Barcha C — A","Barcha A — C","Hech bir A — C emas","A va C aloqasiz"],1,"Tranzitivlikka ko‘ra barcha A lar C tarkibiga kiradi."],
["Soat 6:30 da soat va minut strelkalari orasidagi kichik burchak?",["0°","15°","30°","45°"],1,"Minut 180°, soat 195°; farq 15°."],
["1 dan 100 gacha bo‘lgan sonlarda 9 raqami necha marta uchraydi?",["10","19","20","21"],2,"Birliklar xonasida 10, o‘nliklar xonasida 10 marta — jami 20."],
["Uchta ketma-ket butun son yig‘indisi 72. O‘rtadagi son?",["23","24","25","26"],1,"Uchta ketma-ket sonning o‘rtachasi 72/3=24."],
["Agar barcha Zorlar Mip va hech bir Mip Lat bo‘lmasa, Zorlar Lat bo‘lishi mumkinmi?",["Ha, albatta","Yo‘q","Faqat bittasi","Ma’lumot yetarli emas"],1,"Zorlar Mip ichida, Mip esa Lat bilan kesishmaydi."],
["Qutida 3 qizil, 2 ko‘k shar bor. Qaytarmasdan ikki shar olinganda ikkalasi qizil ehtimoli?",["1/5","3/10","2/5","1/2"],1,"(3/5)×(2/4)=6/20=3/10."],
["Bir poyezd 60 km/soat tezlikda 30 daqiqa yurdi. Qancha masofa bosdi?",["15 km","20 km","30 km","60 km"],2,"30 daqiqa = 0,5 soat; 60×0,5=30 km."]]}
];

let profile = JSON.parse(localStorage.getItem("adpiProfile") || "null");
let records = JSON.parse(localStorage.getItem("adpiRecords") || "[]");
let selectedAvatar = AVATARS[0], selectedGroup = "", currentGame = null, quizQuestions = [], currentIndex = 0, score = 0, correctCount = 0, wrongCount = 0, timer = null, timeLeft = 15, gameStart = 0, answersLog = [], activeUsername = "", rankGroup = "all", soundOn = false;
const save = () => { localStorage.setItem("adpiRecords", JSON.stringify(records)); if(profile) localStorage.setItem("adpiProfile", JSON.stringify(profile)); };
function showToast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2400)}
function showScreen(id){["welcome","register","dashboard","gameScreen"].forEach(x=>$("#"+x).classList.toggle("hidden",x!==id));}
function groupForAge(age){return age===20?(selectedGroup||"16-20"):(age<20?"16-20":"20-25")}
function fillAvatars(){ $("#avatarGrid").innerHTML=AVATARS.map(a=>`<button class="avatar-option ${a===selectedAvatar?"selected":""}" type="button" data-avatar="${a}">${a}</button>`).join(""); $$(".avatar-option").forEach(b=>b.onclick=()=>{selectedAvatar=b.dataset.avatar;fillAvatars()})}
function initRegister(){const s=$("#playerAge");s.innerHTML='<option value="">Yoshni tanlang</option>'+Array.from({length:10},(_,i)=>`<option value="${16+i}">${16+i} yosh</option>`).join("");fillAvatars()}
$("#playerAge").addEventListener("change",e=>{$("#groupChoice").classList.toggle("hidden",+e.target.value!==20);if(+e.target.value!==20)selectedGroup="";});
$$(".group-btn").forEach(b=>b.onclick=()=>{$$(".group-btn").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");selectedGroup=b.dataset.group});
$("#welcomeStart").onclick=()=>{if(profile){renderDashboard();showScreen("dashboard")}else showScreen("register")};
$("#continueBtn").onclick=()=>{const name=$("#playerName").value.trim(),age=+$("#playerAge").value;if(name.length<2||!age){$("#registerError").textContent="Ismni va yoshingizni to‘g‘ri kiriting.";return}if(age===20&&!selectedGroup){$("#registerError").textContent="20 yosh uchun guruhni tanlang.";return}profile={name,age,group:groupForAge(age),avatar:selectedAvatar};save();renderDashboard();showScreen("dashboard")};
function stats(){const mine=records.filter(r=>r.name===profile.name);return {points:mine.reduce((a,r)=>a+r.score,0),games:mine.length,correct:mine.reduce((a,r)=>a+r.correct,0),best:Math.max(0,...mine.map(r=>r.score))}}
function renderDashboard(){if(!profile)return;$("#navAvatar").textContent=profile.avatar;$("#navName").textContent=profile.name;$("#helloTitle").textContent=`Assalomu alaykum, ${profile.name}!`;$("#groupPill").textContent=profile.group==="16-20"?"16–20 yosh":"20–25 yosh";const s=stats();$("#statPoints").textContent=s.points.toLocaleString("uz-UZ");$("#statGames").textContent=s.games;$("#statCorrect").textContent=s.correct;$("#statBest").textContent=s.best;$("#dailyCount").textContent=(records.some(r=>r.name===profile.name&&r.date===new Date().toLocaleDateString("uz-UZ"))?"1":"0")+"/1";renderGames("#featuredGames",GAMES.filter(g=>g.age===profile.group).slice(0,3));}
function gameCard(g){return `<article class="game-card"><div class="game-card-top"><div class="game-icon">${g.icon}</div><span class="difficulty">${g.difficulty}</span></div><h3>${g.title}</h3><p>${g.desc}</p><div class="game-card-meta"><span>❓ ${g.questions.length} ta savol</span><span>${g.age==="16-20"?"16–20 yosh":"20–25 yosh"}</span></div><button class="btn btn-primary" data-play="${g.id}">O‘ynash →</button></article>`}
function renderGames(target,list){$(target).innerHTML=list.map(gameCard).join("")||'<p class="muted">Bu mezon bo‘yicha o‘yin topilmadi.</p>';$$(`${target} [data-play]`).forEach(b=>b.onclick=()=>openGame(+b.dataset.play))}
function renderAllGames(){const q=$("#gameSearch").value.toLowerCase(),cat=$("#categoryFilter").value,diff=$("#difficultyFilter").value;let list=GAMES.filter(g=>(cat==="all"||g.age===cat)&&(diff==="all"||g.difficulty===diff)&&(g.title.toLowerCase().includes(q)||g.desc.toLowerCase().includes(q)||g.category.toLowerCase().includes(q)));renderGames("#allGames",list)}
function navigate(page){$$(".page").forEach(p=>p.classList.add("hidden"));$("#page-"+page).classList.remove("hidden");$$(".nav-link").forEach(b=>b.classList.toggle("active",b.dataset.page===page));$("#mainNav").classList.remove("open");if(page==="home")renderDashboard();if(page==="games")renderAllGames();if(page==="ranking")renderRanking();if(page==="results")renderHistory()}
$$("[data-page]").forEach(b=>b.onclick=e=>{e.preventDefault();navigate(b.dataset.page)});$$("[data-goto]").forEach(b=>b.onclick=()=>navigate(b.dataset.goto));$("#mobileMenu").onclick=()=>$("#mainNav").classList.toggle("open");
$("#gameSearch").addEventListener("input",renderAllGames);$("#categoryFilter").onchange=renderAllGames;$("#difficultyFilter").onchange=renderAllGames;
function openGame(id){currentGame=GAMES.find(g=>g.id===id);if(!currentGame)return;$("#introIcon").textContent=currentGame.icon;$("#introTitle").textContent=currentGame.title;$("#introDescription").textContent=currentGame.desc;$("#usernameInput").value=localStorage.getItem("adpiUsername")||"";$("#gameUsername").textContent=profile.name;$("#gameAvatar").textContent=profile.avatar;$("#gameIntro").classList.remove("hidden");$("#quizArea").classList.add("hidden");$("#resultArea").classList.add("hidden");showScreen("gameScreen")}
$("#startGameBtn").onclick=()=>{const u=$("#usernameInput").value.trim();if(!/^[\p{L}\p{N}_]{3,20}$/u.test(u)){$("#usernameError").textContent="Username 3–20 belgidan iborat bo‘lsin (harf, raqam, _).";return}activeUsername=u;localStorage.setItem("adpiUsername",u);startQuiz()};
function startQuiz(){quizQuestions=[...currentGame.questions].sort(()=>Math.random()-.5).slice(0,10);currentIndex=0;score=0;correctCount=0;wrongCount=0;answersLog=[];gameStart=Date.now();$("#gameIntro").classList.add("hidden");$("#resultArea").classList.add("hidden");$("#quizArea").classList.remove("hidden");renderQuestion()}
function renderQuestion(){clearInterval(timer);const q=quizQuestions[currentIndex];timeLeft=15;$("#questionCounter").textContent=`SAVOL ${currentIndex+1} / ${quizQuestions.length}`;$("#questionProgress").style.width=`${(currentIndex/quizQuestions.length)*100}%`;$("#liveScore").textContent=score;$("#timerText").textContent=timeLeft;$("#timerBar").style.width="100%";$("#questionCategory").textContent=currentGame.category.toUpperCase();$("#questionText").textContent=q[0];$("#feedback").className="feedback hidden";$("#nextQuestionBtn").classList.add("hidden");$("#answersGrid").innerHTML=q[1].map((a,i)=>`<button class="answer-btn" data-answer="${i}"><span class="answer-letter">${["A","B","C","D"][i]}</span>${a}</button>`).join("");$$("[data-answer]").forEach(b=>b.onclick=()=>chooseAnswer(+b.dataset.answer,false));timer=setInterval(()=>{timeLeft--;$("#timerText").textContent=timeLeft;$("#timerBar").style.width=(timeLeft/15*100)+"%";if(timeLeft<=0){clearInterval(timer);chooseAnswer(-1,true)}},1000)}
function chooseAnswer(index,timedOut){if($("#nextQuestionBtn").classList.contains("hidden")===false)return;clearInterval(timer);const q=quizQuestions[currentIndex],isCorrect=index===q[2],bonus=isCorrect?Math.round(timeLeft/15*50):0,earned=isCorrect?100+bonus:0;score+=earned;if(isCorrect)correctCount++;else wrongCount++;answersLog.push({question:q[0],options:q[1],chosen:index,correct:q[2],explanation:q[3],earned});$$("[data-answer]").forEach((b,i)=>{b.disabled=true;if(i===q[2])b.classList.add("correct");if(i===index&&!isCorrect)b.classList.add("wrong")});const fb=$("#feedback");fb.classList.remove("hidden");fb.classList.toggle("bad",!isCorrect);fb.innerHTML=isCorrect?`✓ Barakalla, ${activeUsername}! +${earned} ball. ${q[3]}`:`${timedOut?"⏰ Vaqt tugadi!":"✕ Bu safar to‘g‘ri emas."} To‘g‘ri javob: <b>${q[1][q[2]]}</b>. ${q[3]}`;$("#liveScore").textContent=score;$("#nextQuestionBtn").textContent=currentIndex===quizQuestions.length-1?"Natijani ko‘rish →":"Keyingi savol →";$("#nextQuestionBtn").classList.remove("hidden");}
$("#nextQuestionBtn").onclick=()=>{currentIndex++;if(currentIndex>=quizQuestions.length)finishGame();else renderQuestion()};
function finishGame(){clearInterval(timer);const elapsed=Math.round((Date.now()-gameStart)/1000),accuracy=Math.round(correctCount/quizQuestions.length*100);const record={name:profile.name,username:activeUsername,avatar:profile.avatar,age:profile.age,group:profile.group,gameId:currentGame.id,game:currentGame.title,icon:currentGame.icon,score,correct:correctCount,wrong:wrongCount,accuracy,time:elapsed,date:new Date().toLocaleDateString("uz-UZ"),timestamp:Date.now()};records.push(record);save();$("#quizArea").classList.add("hidden");$("#resultArea").classList.remove("hidden");$("#resultPoints").textContent=score;$("#resultCorrect").textContent=correctCount;$("#resultWrong").textContent=wrongCount;$("#resultAccuracy").textContent=accuracy+"%";$("#resultTime").textContent=elapsed+"s";$("#resultSubtitle").textContent=`${activeUsername}, ${currentGame.title} o‘yinini yakunladingiz.`;let title,medal;if(accuracy>=90){title="AFSONAVIY BILIMDON!";medal="🏆"}else if(accuracy>=70){title="AJOYIB NATIJA!";medal="🥇"}else if(accuracy>=50){title="YAXSHI HARAKAT!";medal="🥈"}else{title="TASLIM BO‘LMANG!";medal="💪"}$("#resultTitle").textContent=title;$("#resultMedal").textContent=medal;$("#reviewList").classList.add("hidden");$("#reviewList").innerHTML=answersLog.map((a,i)=>`<div class="review-item"><strong>${i+1}. ${a.question}</strong><span class="${a.chosen===a.correct?"right":"wrong"}">${a.chosen===a.correct?"To‘g‘ri":"Sizning javobingiz: "+(a.chosen<0?"Javob berilmadi":a.options[a.chosen])}</span><br>To‘g‘ri javob: <b>${a.options[a.correct]}</b><br><span class="muted">${a.explanation}</span></div>`).join("");renderDashboard()}
$("#reviewBtn").onclick=()=>$("#reviewList").classList.toggle("hidden");$("#replayBtn").onclick=()=>openGame(currentGame.id);$("#homeBtn").onclick=()=>{showScreen("dashboard");navigate("home")};$("#exitGame").onclick=()=>{clearInterval(timer);showScreen("dashboard");navigate("games")};
function renderRanking(){let people={};records.filter(r=>rankGroup==="all"||r.group===rankGroup).forEach(r=>{const k=r.username+"|"+r.group;if(!people[k])people[k]={...r,score:0,games:0};people[k].score+=r.score;people[k].games++});const sorted=Object.values(people).sort((a,b)=>b.score-a.score);$("#rankingRows").innerHTML=sorted.length?sorted.map((p,i)=>`<div class="rank-row"><div class="rank-medal">${["🥇","🥈","🥉"][i]||`#${i+1}`}</div><div class="rank-person"><span class="rank-avatar">${p.avatar}</span><div><b>${escapeHtml(p.username)}</b><small>${escapeHtml(p.name)} · ${p.group==="16-20"?"16–20":"20–25"} yosh</small></div></div><span>${p.games}</span><b>${p.score.toLocaleString("uz-UZ")} ⭐</b></div>`).join(""):'<div class="rank-row"><span class="muted">Hozircha natijalar yo‘q. Birinchi bo‘lib o‘ynang!</span></div>'}
$$(".rank-tab").forEach(b=>b.onclick=()=>{$$(".rank-tab").forEach(x=>x.classList.remove("active"));b.classList.add("active");rankGroup=b.dataset.rank;renderRanking()});
function renderHistory(){const mine=records.filter(r=>r.name===profile.name).sort((a,b)=>b.timestamp-a.timestamp);$("#historyList").innerHTML=mine.length?mine.map(r=>`<article class="history-item"><div class="history-icon">${r.icon}</div><div><h3>${escapeHtml(r.game)}</h3><p>${r.date} · ${r.correct}/10 to‘g‘ri · ${r.accuracy}% aniqlik</p></div><div class="history-score">+${r.score} ⭐</div></article>`).join(""):'<p class="muted">Hozircha o‘yinlar tarixi bo‘sh. Birinchi o‘yiningizni boshlang!</p>'}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
$("#themeToggle").onclick=()=>{document.body.classList.toggle("light-mode");localStorage.setItem("adpiTheme",document.body.classList.contains("light-mode")?"light":"dark")};
if(localStorage.getItem("adpiTheme")==="light")document.body.classList.add("light-mode");
$("#profileBtn").onclick=()=>{$("#editName").value=profile.name;$("#editAvatar").value=profile.avatar;$("#profileModal").classList.remove("hidden")};$("#closeProfile").onclick=()=>$("#profileModal").classList.add("hidden");$("#saveProfile").onclick=()=>{const n=$("#editName").value.trim();if(n.length<2){showToast("Ism kamida 2 ta belgidan iborat bo‘lsin.");return}profile.name=n;profile.avatar=$("#editAvatar").value;save();$("#profileModal").classList.add("hidden");renderDashboard();showToast("Profil yangilandi.")};
$("#logoutBtn").onclick=()=>{if(confirm("Profilingizdan chiqishni xohlaysizmi?")){profile=null;localStorage.removeItem("adpiProfile");showScreen("welcome")}};
initRegister();
setTimeout(()=>{$("#loader").classList.add("hidden");if(profile){renderDashboard();showScreen("dashboard")}else showScreen("welcome")},700);
