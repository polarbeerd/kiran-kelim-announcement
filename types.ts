export type Language = 'de' | 'en';

export interface Content {
  title: string;
  salutation: string;
  p1: string;
  p2: string;
  p3: string;
  signoff: string;
  role: string;
  contactLabel: string;
  newWebsiteLabel: string;
}

export interface ContactDetails {
  name: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  address: {
    street: string;
    zipCity: string;
    country: string;
  };
  locationName: string;
}