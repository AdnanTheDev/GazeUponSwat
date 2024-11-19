let menu = document.querySelector('.right-nav');
let menuBtn = document.querySelector('#menu');
let sun = document.querySelector('.ri-sun-line');
let moon = document.querySelector('.ri-moon-fill');
let body = document.querySelector('body');
let page1 = document.querySelector('#page1');
let page2 = document.querySelector('#page2');
let page4 = document.querySelector('#page4');
let openMenuBtn = document.querySelector('.ri-menu-3-line');
let nav = document.querySelector('nav');
let links = document.querySelectorAll('.links');
let lowerLinks = document.querySelectorAll('.lower-links');
let upperNav = document.querySelector('.upper-nav');
let websiteName = document.querySelector('.name');
let page2Para = document.querySelector('.page2-para');
let seeAllLinks = document.querySelector('.see-all-link');
let hiddenLakeContainer = document.querySelector('#hidden-lakes');
let placeCard  = document.querySelectorAll(".place");
let footer = document.querySelector("footer");
let teamMemberCard = document.querySelectorAll(".team-member-card");
let knowMoreLink = document.querySelectorAll(".know-more");
isMenuOpen = false;
isLakeContainerHidden = true;


gsap.from("body", {
  x: 2000,
  duration: 2
});

function toggle() {
  moon.addEventListener('click', () => {
    moon.style.display = 'none';
    sun.style.display = 'block';
    menuBtn.style.color = 'white';
    page1.style.backgroundImage = 'url(./Images/Swat-River-Night.jpg)';
    page1.style.backgroundPosition = '50% 100%';
    page1.style.transition = "0.5s";
    body.style.backgroundColor = '#222';
    websiteName.style.color = 'white';
    upperNav.style.backgroundColor = 'black';
    upperNav.style.boxShadow = '10px 10px 20px lightseagreen';
    menu.style.backgroundColor = 'rgba(0, 0, 0, 0.842)';
    links.forEach((element) => {
      element.style.color = 'white';
    });   
    lowerLinks.forEach((element) => {
      element.style.color = 'white';
    });
    sun.style.color = 'white';
    page1.style.boxShadow = '15px 15px 40px lightseagreen';
    page2Para.style.color = 'white';
    footer.style.backgroundColor = "#000";
    placeCard.forEach(element => {
      element.style.boxShadow = "5px 5px 20px lightseagreen";
      element.style.backgroundColor = "#000";
    });
    teamMemberCard.forEach(element => {
      element.style.backgroundColor = "#000";
      element.style.boxShadow = "10px 10px 20px lightseagreen";
    });
    knowMoreLink.forEach(element => {
      element.style.backgroundColor = "lightseagreen";
      element.style.border = "none";
    });
    page4.style.backgroundColor = "#000";
    page4.style.boxShadow = "10px 10px 25px lightseagreen"
  });
  
  sun.addEventListener('click', () => {
    moon.style.display = 'block';
    sun.style.display = 'none';
    menuBtn.style.color = 'black';
    page1.style.backgroundImage = 'url(./Images/Swat-River.jpg)';
    page1.style.backgroundPosition = '50% 20%';
    body.style.backgroundColor = 'white';
    websiteName.style.color = 'white';
    menu.style.backgroundColor = 'lightseagreen';
    upperNav.style.backgroundColor = 'lightseagreen';
    upperNav.style.boxShadow = '10px 10px 20px #999';
    links.forEach((element) => {
      element.style.color = 'white';
    });
    lowerLinks.forEach((element) => {
      element.style.color = 'black';
    });
    sun.style.color = 'black';
    page1.style.boxShadow = 'none';
    page2Para.style.color = 'black';
    page1.style.boxShadow = '15px 15px 40px black';
    footer.style.backgroundColor = "lightseagreen";
    placeCard.forEach(element => {
      element.style.boxShadow = "none";
      element.style.backgroundColor = "lightseagreen";
    });
    teamMemberCard.forEach(element => {
      element.style.backgroundColor = "lightseagreen";
      element.style.boxShadow = "10px 10px 20px #999";
    });
    knowMoreLink.forEach(element => {
      element.style.backgroundColor = "transparent";
      element.style.border = "none";
    });
    page4.style.backgroundColor = "lightseagreen";
    page4.style.boxShadow = "10px 10px 25px lightseagreen"
  });
} 
toggle();

openMenuBtn.addEventListener('click', () => {
  if (isMenuOpen === false) {
    menu.style.top = '80px';
    isMenuOpen = true;
  } else {
    menu.style.top = '-1000px';
    isMenuOpen = false;
  }
});

page1.addEventListener('click', () => {
  if (isMenuOpen) {
    isMenuOpen = false;
    menu.style.top = '-1000px';
  }
});





































// The Creator of everything is :  Allah  "  الله  "  ,  and He created us to worship Him alone, and in order to teach us how to worship Him, He sent prophets like " Noah, Abraham Moses, Jesus, "  peace be upon them, and the last of the Messengers is Muhammad, may الله prayers and peace be upon him. Therefore, to enter Paradise and to survive punishment , must follow the last of the Prophets and Messengers, mohammed ﷺ ..We also believe in all the heavenly books such as :  The Bible , the torah , the zabor ... Which " ALLAH الله "  revealed to his prophets and messengers ، But  it has changed and distorted. Therefore, " الله "  sent Muhammad ﷺ  with the   "  Qur’an “ God’s Preserved Words” to restore the previous religions to the truth.There is a lot of evidence that indicates that the Qur’an is a miracle ... We mention for example: its rhetorical and linguistic miracle, its scientific miracle, as it talked about scientific facts that have been discovered now only after technological development, just as the Qur’an talked about historical facts that they will happen and have already occurred Most of the current discoveries, in all fields, are present and mentioned in the Qur’an 14 centuries ago .The biggest sin in Islam is "shirk "  polytheism For example, to worship Jesus This is a shirk Whoever worships other than God "Allah  الله " is in the hell .We love and believe  in all the prophets and messengers ,  but worship is only for " ALLAH الله " Like prayer and asking for forgiveness and mercy are only for " Allah  الله " .whoever become Muslim all sins are forgiven by  " ALLAH الله"He is like a new page, so he should be keen on doing good deeds Because heaven is the abode of bliss , pleasure , And everything your soul desires and what " الله ALLAH" has prepared for its people is beyond imagination The five pillars of Islam: Shahada, establish prayer, Zakat, fasting Ramadan, and Hajj.The Pillars of Faith: It is the belief in God "Allah الله " , His angels, His books, His messengers, the Last Day, and  Predestination " Qadar " .A free person is a Muslim , by his servitude to " الله ALLAH ", is liberated from everythingTo become a Muslim, the first thing to do is to say  the " shahada " testimony :" I bear witness that there is no god for worship except " ALLAH الله " and I bear witness that Muhammad is His servant and His  Messenger "Learn about " Islam " to know the true purpose of your existence in this life , and you know how to worship the one who created your heart , any question about Islam I can help you " insha allah "  . Especially at the present time, you can download an application with the prayer call " adhan "   that reminds you of the 5 prayers times And give you the direction of the qiblah   this after saying testimony " shahada  " And learn purity ( how to make ghusl and ablution )  _ Share this with others to know the truth