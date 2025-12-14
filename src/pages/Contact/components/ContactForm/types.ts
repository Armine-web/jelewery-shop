type PreferredContact = 'phone' | 'telegram' | 'email';
type Topic = 'general' | 'booking' | 'repair' | 'custom';

export type ContactRequest = {
  fullName: string;
  phone: string;
  email?: string;
  preferredContact: PreferredContact;
  telegram?: string;
  topic: Topic;
  message: string;
  consent: boolean;
};
