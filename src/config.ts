// Everything that changes when the product moves to its real domain or when data arrives.
export const SITE = {
  name: 'Amplify Direct',
  url: 'https://direct.amplifygrowthstudio.com', // TO CONFIRM: final subdomain
  /** false = noindex. Set to true on launch day. */
  live: false,
};
export const APPS = { admin: 'https://amplify-admin.pages.dev', marketing: 'https://amplifygrowthstudio2.pages.dev' };
export const CONTACT = { whatsapp: '212660353741' };
export const waLink = (text: string) => `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
