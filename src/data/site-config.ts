export const siteConfig = {
  companyName: 'Newark Quality Roofing',

  phone: {
    display:
      process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? '(973) 555-0123',
    tel: process.env.NEXT_PUBLIC_PHONE_TEL ?? '+19735550123',
  },

  address: {
    street: '123 Main Street',
    city: 'Newark',
    state: 'NJ',
    zip: '07102',
  },

  email: 'info@newarkqualityroofing.com',

  businessHours: [
    { day: 'Mon-Fri', hours: '7:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 2:00 PM' },
    { day: 'Sunday', hours: 'Emergency Only' },
  ],

  trustStats: [
    {
      label: 'Roofs Completed',
      value: '500+',
      numericValue: 500,
      suffix: '+',
      prefix: '',
      icon: 'checkmark' as const,
    },
    {
      label: 'Years Experience',
      value: '15+',
      numericValue: 15,
      suffix: '+',
      prefix: '',
      icon: 'clock' as const,
    },
    {
      label: 'Star Rating',
      value: '5.0',
      numericValue: 5,
      suffix: '.0',
      prefix: '',
      icon: 'certificate' as const,
    },
    {
      label: 'Licensed & Insured',
      value: 'Yes',
      numericValue: null,
      suffix: '',
      prefix: '',
      icon: 'shield' as const,
    },
  ],
} as const;
