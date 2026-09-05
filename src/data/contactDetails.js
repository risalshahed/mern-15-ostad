import EmailSvg from "../components/svg/Contact/EmailSvg";
import LocationSvg from "../components/svg/Contact/LocationSvg";

export const contactDetails = [
  {
    id: crypto.randomUUID(),
    icon: LocationSvg,
    title: 'Our Location',
    address: [
      '401 Broadway, 24th Floor, Orchard Cloud View, London'
    ]
  },
  {
    id: crypto.randomUUID(),
    icon: EmailSvg,
    title: 'How Can We Help?',
    address: [
      'info@yourdomain.com',
      'contact@yourdomain.com'
    ]
  }
]

export const contactInputs = [
  {
    id: crypto.randomUUID(),
    identifier: 'fullName',
    label: 'Full Name*',
    inputType: 'text',
    placeholder: 'Adam Gelius'
  },
  {
    id: crypto.randomUUID(),
    identifier: 'email',
    label: 'Email*',
    inputType: 'email',
    placeholder: 'example@yourmail.com'
  },
  {
    id: crypto.randomUUID(),
    identifier: 'phone',
    label: 'Phone*',
    inputType: 'text',
    placeholder: '+885 1254 5211 552'
  },
]