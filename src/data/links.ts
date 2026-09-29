export const COMMUNITY_URL = 'https://chat.whatsapp.com/CXzl5uB7Jz23AFsAYkwUFE?s=cl&p=a&mlu=4&ilr=4';
export const CONTACT_URL = 'https://wa.me/2348110607341';
export const courseEnquiry = (title: string) => `${CONTACT_URL}?text=${encodeURIComponent(`Hi David, I'd like to learn more about the ${title} track at Niuxverse.`)}`;
