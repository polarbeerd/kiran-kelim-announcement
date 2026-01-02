import { Content, ContactDetails } from './types';

// Replace this URL with the actual path to the image in your public folder or a hosted URL.
// Since I cannot access the uploaded file directly in the code generation, 
// I am using a placeholder that represents a high-end carpet gallery vibe.
// RECOMMENDATION: Put your 'orhan.jpg' in the public folder and change this to '/orhan.jpg'
export const HERO_IMAGE_URL = "https://images.unsplash.com/photo-1600166898405-da9535204843?q=80&w=1000&auto=format&fit=crop"; 

export const CONTACT_DETAILS: ContactDetails = {
  name: "Orhan Kiranoglu",
  phone: "+491737073444",
  phoneDisplay: "+49 173 7073444",
  email: "mail@kirankilim.com",
  locationName: "Living Berlin",
  address: {
    street: "Kantstraße 17",
    zipCity: "10623 Berlin",
    country: "Germany"
  }
};

export const CONTENT_DE: Content = {
  title: "Wichtige Mitteilung an unsere geschätzten Kunden",
  salutation: "Liebe Freunde und Kunden,",
  p1: "Seit über 40 Jahren ist es mir ein Privileg, die feinste Auswahl an Teppichen und Kunst mit Ihnen zu teilen. Ich schreibe Ihnen, um Ihnen mitzuteilen, dass Kiran Kelim Teppich & Kunst derzeit seine digitale Präsenz aktualisiert.",
  p2: "Bitte beachten Sie, dass ich, Orhan Kiranoglu, nicht mehr mit der Domain kelim.de oder der E-Mail-Adresse mail@kelim.de in Verbindung stehe. Jegliche Kommunikation, die an diese Adressen gesendet wird, erreicht mich nicht.",
  p3: "Während sich unsere neue Website im Aufbau befindet, bediene ich Sie weiterhin mit derselben Hingabe und Expertise in unserem Showroom im Living Berlin. Vielen Dank für Ihr anhaltendes Vertrauen und Ihre Treue.",
  signoff: "Herzlichst,",
  role: "Inhaber",
  contactLabel: "Kontaktinformationen",
  newWebsiteLabel: "Neue Website im Aufbau",
};

export const CONTENT_EN: Content = {
  title: "Important Notice to Our Valued Clients",
  salutation: "Dear Friends and Customers,",
  p1: "For over 40 years, it has been my privilege to share the finest selection of carpets and art with you. I am writing to inform you that Kiran Kelim Teppich & Kunst is currently updating its digital presence.",
  p2: "Please be advised that I, Orhan Kiranoglu, am no longer associated with the domain kelim.de or the email address mail@kelim.de. Any communication sent to those addresses will not reach me.",
  p3: "While our new website is under construction, I continue to serve you with the same dedication and expertise at our showroom in Living Berlin. Thank you for your continued trust and loyalty.",
  signoff: "Sincerely,",
  role: "Owner",
  contactLabel: "Contact Information",
  newWebsiteLabel: "New Website Under Construction",
};