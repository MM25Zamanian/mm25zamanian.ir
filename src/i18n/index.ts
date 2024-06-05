import { GecutI18N } from '@gecut/i18n';

export const i18n = new GecutI18N({
  sourceLanguage: {
    dir: 'ltr',
    formatters: {
      date: {},
      number: {},
      dateTime: {},
      time: {}
    },
    localName: 'English',
    name: 'en-US',
    translations: {
      one_years: 'last year',
      one_months: 'last month',
      one_days: 'last day',
      one_hours: 'last hour',
      one_minutes: 'last minute',
      one_seconds: 'last second',
      other_years: '{0} years ago',
      other_months: '{0} months ago',
      other_days: '{0} days ago',
      other_hours: '{0} hours ago',
      other_minutes: '{0} minutes ago',
      other_seconds: '{0} seconds ago',
      just_now: 'Just Now'
    }
  },
  targetLanguages: [
    {
      dir: 'rtl',
      formatters: {
        date: {
          dateStyle: 'full',
          timeStyle: undefined
        },
        number: {},
        dateTime: {
          dateStyle: 'full',
          timeStyle: 'full',
          timeZone: 'Asia/Tehran'
        },
        time: {
          timeStyle: 'full',
          timeZone: 'Asia/Tehran'
        }
      },
      localName: 'فارسی',
      name: 'fa-IR',
      translations: {
        one_years: 'یک سال پیش',
        one_months: 'یک ماه پیش',
        one_days: 'یک روز پیش',
        one_hours: 'یک ساعت پیش',
        one_minutes: 'یک دقیقه پیش',
        one_seconds: 'یک ثانیه پیش',
        other_years: '{0} سال پیش',
        other_months: '{0} ماه پیش',
        other_days: '{0} روز پیش',
        other_hours: '{0} ساعت پیش',
        other_minutes: '{0} دقیقه پیش',
        other_seconds: '{0} ثانیه پیش',
        just_now: 'همین الان',
      }
    }
  ]
});

i18n.setLocale('en-US');
