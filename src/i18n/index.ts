import {GecutI18N} from '@gecut/i18n';

export const i18n = new GecutI18N({
  sourceLanguage: {
    dir: 'ltr',
    formatters: {
      date: {},
      number: {},
      dateTime: {},
      time: {},
    },
    localName: 'English',
    name: 'en-US',
    translations: {
      one_years_ago: 'last year',
      one_months_ago: 'last month',
      one_days_ago: 'last day',
      one_hours_ago: 'last hour',
      one_minutes_ago: 'last minute',
      one_seconds_ago: 'last second',

      other_years_ago: '{0} years ago',
      other_months_ago: '{0} months ago',
      other_days_ago: '{0} days ago',
      other_hours_ago: '{0} hours ago',
      other_minutes_ago: '{0} minutes ago',
      other_seconds_ago: '{0} seconds ago',

      one_years: 'last year and',
      one_months: 'last month and',
      one_days: 'last day and',
      one_hours: 'last hour and',
      one_minutes: 'last minute and',
      one_seconds: 'last second and',

      other_years: '{0} years',
      other_months: '{0} months',
      other_days: '{0} days',
      other_hours: '{0} hours',
      other_minutes: '{0} minutes',
      other_seconds: '{0} seconds',

      and: 'and',

      just_now: 'Just Now',

      $summary:
        'Experienced Chief Information Officer with a proven track record of leading development teams and implementing innovative IT solutions. Possesses strong skills in project management, system architecture, and software development. Seeking a challenging opportunity to leverage my abilities in a forward-thinking organization.',

      $we1: 'Led development teams in designing and implementing a cutting-edge e-commerce platform, resulting in a significant increase in online sales.',
      $we2: 'Spearheaded the migration of legacy systems to a cloud-based architecture, improving performance and reducing operational costs.',
      $we3: 'Researched and implemented microservices and microfrontends architectures to enhance system flexibility and scalability.',
      $we4: 'Collaborated with cross-functional teams to develop and launch a successful mobile app with over 100,000 downloads in the first month.',

      $skl1: 'Technical team leadership',
      $skl2: 'Project management',
      $skl3: 'System architecture',
      $skl4: 'Software development',
      $skl5: 'E-commerce',
      $skl6: 'Cloud technologies',
      $skl7: 'Micro-Services and Micro-Frontend',
      $skl8: 'Mobile app development',
    },
  },
  targetLanguages: [
    {
      dir: 'rtl',
      formatters: {
        date: {
          dateStyle: 'full',
          timeStyle: undefined,
        },
        number: {},
        dateTime: {
          dateStyle: 'full',
          timeStyle: 'full',
          timeZone: 'Asia/Tehran',
        },
        time: {
          timeStyle: 'full',
          timeZone: 'Asia/Tehran',
        },
      },
      localName: 'فارسی',
      name: 'fa-IR',
      translations: {
        one_years_ago: 'یک سال پیش',
        one_months_ago: 'یک ماه پیش',
        one_days_ago: 'یک روز پیش',
        one_hours_ago: 'یک ساعت پیش',
        one_minutes_ago: 'یک دقیقه پیش',
        one_seconds_ago: 'یک ثانیه پیش',

        other_years_ago: '{0} سال پیش',
        other_months_ago: '{0} ماه پیش',
        other_days_ago: '{0} روز پیش',
        other_hours_ago: '{0} ساعت پیش',
        other_minutes_ago: '{0} دقیقه پیش',
        other_seconds_ago: '{0} ثانیه پیش',

        one_years: 'یک سال',
        one_months: 'یک ماه',
        one_days: 'یک روز',
        one_hours: 'یک ساعت',
        one_minutes: 'یک دقیقه',
        one_seconds: 'یک ثانیه',

        other_years: '{0} سال',
        other_months: '{0} ماه',
        other_days: '{0} روز',
        other_hours: '{0} ساعت',
        other_minutes: '{0} دقیقه',
        other_seconds: '{0} ثانیه',

        and: 'و',

        just_now: 'همین الان',

        profile: 'پروفایل',
        work_experience: 'تجارب کاری',

        $name: 'سید محمدمهدی زمانیان',
        $job: 'مدیر تکنولوژی و هم بنیانگذار جیکات',
        $location: 'ایران٬ خراسان رضوی٬ مشهد مقدس',

        $summary:
          'مدیر ارشد فناوری اطلاعات با سابقه‌ای اثبات شده در هدایت تیم‌های توسعه و پیاده‌سازی راهکارهای نوآورانه در حوزه فناوری اطلاعات. دارای مهارت‌های قوی در مدیریت پروژه، معماری سیستم، و توسعه نرم‌افزار. به دنبال فرصتی چالش‌برانگیز برای به کارگیری توانمندی‌های خود در یک سازمان پیشرو.',

        $we1: 'رهبری تیم‌های توسعه در طراحی و پیاده‌سازی یک پلتفرم تجارت الکترونیکی پیشرفته، منجر به افزایش قابل توجه فروش آنلاین.',
        $we2: 'هدایت مهاجرت سیستم‌های قدیمی به معماری مبتنی بر ابر، بهبود کارایی و کاهش هزینه‌های عملیاتی.',
        $we3: 'تحقیق و توسعه و استفاده از معماری‌های میکروسرویس و میکروفرانت‌اند برای افزایش انعطاف‌پذیری و مقیاس‌پذیری سیستم.',
        $we4: 'همکاری با تیم‌های بین‌رشته‌ای در توسعه و راه‌اندازی یک اپلیکیشن موبایل موفق با بیش از 100 هزار دانلود در ماه اول.',

        $skl1: 'رهبری تیم‌های فنی',
        $skl2: 'مدیریت پروژه',
        $skl3: 'معماری سیستم',
        $skl4: 'توسعه نرم‌افزار',
        $skl5: 'تجارت الکترونیک',
        $skl6: 'فناوری‌های ابری',
        $skl7: 'میکروسرویس و میکروفرانت‌اند',
        $skl8: 'توسعه اپلیکیشن موبایل',

        About: 'درباره من',
        Projects: 'پروژه های من',
      },
    },
  ],
});

i18n.setLocale('fa-IR');
