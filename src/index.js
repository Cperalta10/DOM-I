const siteContent = {
  // DO NOT CHANGE THIS OBJECT
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2021",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

// Fixing Header
const headerLinks = document.querySelectorAll("header nav a");
//console.log(headerLinks.length);
for (let i = 0; i < headerLinks.length; i++) {
  headerLinks[i].classList.add("italic");
  headerLinks[i].textContent = siteContent["nav"][`nav-item-${i + 1}`];
}
// headerLinks[0].textContent = "Services"; // I'm such a dummy I forgot we have the data at the top :(
// headerLinks[1].textContent = "Product";
// headerLinks[2].textContent = "Vision";
// headerLinks[3].textContent = "Features";
// headerLinks[4].textContent = "About";
// headerLinks[5].textContent = "Contact";

const headerImg = document.querySelector("#logo-img");
//console.log(headerImg);
// headerImg.src = siteContent.images["logo-img"]; // same code as bottom
headerImg.setAttribute("src", siteContent.images["logo-img"]);

// CTA Section Fix
const ctaSection = document.querySelector(".cta-text");
//console.log(ctaSection.children[1]);
ctaSection.children[0].textContent = siteContent.cta.h1;
ctaSection.children[1].textContent = siteContent.cta.button;
const ctaImg = document.querySelector("#cta-img");
//console.log(ctaImg);
ctaImg.src = siteContent.images["cta-img"];

// Main Content Fix
const contentText = document.querySelectorAll(".text-content");
const contentImg = document.querySelector(".middle-img");
//console.log(contentText[0].children[0]);
//console.log(contentImg);

// FEATURES
contentText[0].children[0].textContent =
  siteContent["main-content"]["features-h4"];
contentText[0].children[1].textContent =
  siteContent["main-content"]["features-content"];

// ABOUT
contentText[1].children[0].textContent =
  siteContent["main-content"]["about-h4"];
contentText[1].children[1].textContent =
  siteContent["main-content"]["about-content"];

// IMG
contentImg.src = siteContent.images["accent-img"];

// SERVICES
contentText[2].children[0].textContent =
  siteContent["main-content"]["services-h4"];
contentText[2].children[1].textContent =
  siteContent["main-content"]["services-content"];

// PRODUCT
contentText[3].children[0].textContent =
  siteContent["main-content"]["product-h4"];
contentText[3].children[1].textContent =
  siteContent["main-content"]["product-content"];

// VISION
contentText[4].children[0].textContent =
  siteContent["main-content"]["vision-h4"];
contentText[4].children[1].textContent =
  siteContent["main-content"]["vision-content"];

// CONTACT SECTION FIX
const contactSection = document.querySelector(".contact");
//console.log(contactSection.children);
contactSection.children[0].textContent = siteContent.contact["contact-h4"];
contactSection.children[1].textContent = siteContent.contact.address;
contactSection.children[2].textContent = siteContent.contact.phone;
contactSection.children[3].textContent = siteContent.contact.email;

// FOOTER FIX
const footerLink = document.querySelector("footer a");
//console.log(footerLink);
footerLink.textContent = siteContent.footer.copyright;
footerLink.classList.add("bold");
