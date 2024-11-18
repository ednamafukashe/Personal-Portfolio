const AIRTABLE_DATA = {
  projects: [
    {
      id: 1,
      title: 'Animated Landing Page',
      stack: 'Others',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800477/yodkwtf.com/projects/Screenshot_4_-min_e9runx.jpg',
      url: 'https://landingpageanimations-dk.netlify.app/',
      github:
        'https://github.com/yodkwtf/random-cool-projects/tree/main/02-smooth-page-transiitons',
    },
    {
      id: 2,
      title: 'Budget Logger',
      stack: 'Others',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800478/yodkwtf.com/projects/Screenshot_2_-min_my526g.jpg',
      url: 'https://financelogger-dk.netlify.app/',
      github:
        'https://github.com/yodkwtf/typescript-projects/tree/main/01-finance-logger',
    },
    {
      id: 3,
      title: 'chat application',
      stack: 'nodejs',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800480/yodkwtf.com/projects/newwwwww_dxihfk.webp',
      url: 'https://chat-app-dk.onrender.com/',
      github: 'https://github.com/yodkwtf/nodejs-chat-app',
    },
  ],

  featuredProjects: [
    {
      id: 1,
      title: '1. Gateway Stream- Hotel Booking Platform',
      desc: 'Gateway is a comprehensive hotel booking platform designed to cater to the African hospitality market, offering functionality similar to Booking.com. The platform enables users to effortlessly search, book, modify stay dates, and pay for accommodations at over 5,000 hotels. It is integrated with the HyperGuest API, ensuaring real-time availability and pricing, providing users with a seamless booking experience.',
      imgUrl:
        'https://res.cloudinary.com/de525o0ei/image/upload/v1731923597/gateway.png',
      isClientWork: true,
      stack: ['Svelte','NodeJS', 'TailwindCSS', 'Vercel', 'Supabase'],
      url: 'https://www.gatewaystream.com/',
    },
    {
      id: 2,
      title: '2. Weather App | Freelance Project',
      desc: 'This weather app is a dynamic application built with HTML and JavaScript, integrated with a weather API to provide real-time weather updates. The app features a sleek and intuitive design, offering users a seamless experience in checking current conditions, forecasts, and temperature trends.This project highlights my ability to work with APIs, implement responsive designs, and deliver user-friendly web applications..',
      imgUrl:
        'https://res.cloudinary.com/de525o0ei/image/upload/v1731927139/weather.png',
      isClientWork: false,
      stack: [
        'Javascript',
        'CSS',
        'Axios'
      ],
      url: 'https://she-code-weather-app.netlify.app/',
      github: 'https://github.com/ednamafukashe/Weather-App',
    },
    {
      id: 3,
      title: '3. Fauxica - Clothing Store',
      desc: 'Fauxica is a frontend-only website designed for a fictional clothing store. The platform showcases a sleek, modern interface tailored to highlight the brand diverse range of clothing items. The project emphasizes responsive design, interactive user experience, and clean, maintainable code.This project demonstrates my ability to create visually appealing and functional frontend solutions, focusing on user engagement and brand representation.',
      imgUrl:
        'https://res.cloudinary.com/de525o0ei/image/upload/v1731925779/fauxica.png',
      isClientWork: false,
      stack: [
        'Javascript',
        'Tailwind CSS',
        'HTML'
      ],
      github: 'https://github.com/ednamafukashe/Fauxica-Website',
    },
  ],

  resources: [
    {
      id: 1,
      text: 'resume/cv',
      order: 0,
      iconUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711798741/yodkwtf.com/resources/res_zmaixq.png',
      title: 'Download My Resume',
      url: 'https://rxresu.me/yodkwtf/full-stack-developer',
      isLatest: true,
      hideField: false,
    },
    {
      id: 2,
      text: 'latest client work',
      order: 0,
      iconUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711798739/yodkwtf.com/resources/tttt_lsduby.png',
      title: 'My Latest Freelance Project',
      url: 'https://devbysid.com/',
      isLatest: false,
      hideField: false,
    },
    {
      id: 3,
      text: 'Latest Project',
      order: 1,
      iconUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711798735/yodkwtf.com/resources/icons8-code-48_o0k76k.png',
      title: 'Latest Personal Project',
      url: 'https://cinematica-mern.vercel.app/',
      isLatest: true,
      hideField: false,
    },
    {
      id: 4,
      text: 'my website',
      order: 2,
      iconUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711798734/yodkwtf.com/resources/icons8-website-48_kpx5cc.png',
      title: 'yodkwtf.com | My Portfolio',
      url: 'https://drive.google.com/file/d/1FPYiX-m3Mq6FXva-M0LTAkjkb7biIoOc/view?usp=share_link',
      isLatest: false,
      hideField: true,
    },
    {
      id: 5,
      text: 'Java Cheatsheet',
      order: 2,
      iconUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711798733/yodkwtf.com/resources/java_jcjbfc.png',
      title: 'Java Fundamentals - Cheatsheeet (PDF)',
      url: 'https://drive.google.com/file/d/1FPYiX-m3Mq6FXva-M0LTAkjkb7biIoOc/view?usp=share_link',
      isLatest: false,
      hideField: true,
    },
    {
      id: 6,
      text: 'Angular Cheatsheet',
      order: 3,
      iconUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711798732/yodkwtf.com/resources/icons8-angular_kuenja.svg',
      title: 'A Basic Guide to Angular',
      url: 'https://drive.google.com/file/d/1Pwv-O9mkwrszYUyrnOonjwcWROd5RXPw/view?usp=drive_link',
      isLatest: false,
      hideField: true,
    },
    {
      id: 7,
      text: 'Docker Guide',
      order: 3,
      iconUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711798742/yodkwtf.com/resources/icons8-docker-48_pnmbc5.png',
      title: 'The Complete Introduction to Docker',
      url: 'https://drive.google.com/file/d/1QnHtPVg7yn-eGyuPYhayhujBYWu-gulV/view?usp=drive_link',
      isLatest: true,
      hideField: false,
    },
    {
      id: 8,
      text: 'vscode tutorial series',
      order: 4,
      iconUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711798731/yodkwtf.com/resources/icons8-visual-studio-code-2019_sdncij.svg',
      title: 'My VSCode Crash Course on YouTube',
      url: 'https://youtube.com/playlist?list=PLG9-T0wrWJ8BUFxog71QQW-NnAHrPWZ4o',
      isLatest: false,
      hideField: false,
    },
    {
      id: 9,
      text: 'git commands cheatsheet',
      order: 5,
      iconUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711798730/yodkwtf.com/resources/icons8-git-48_ru710h.png',
      title: 'Git Commands - Cheatsheet',
      url: 'https://drive.google.com/file/d/1Hr2bzduRZXtDO5jiYDcBeyqIa8xgjefI/view?usp=sharing',
      isLatest: false,
      hideField: false,
    },
    {
      id: 10,
      text: 'youtube channel',
      order: 6,
      iconUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711798728/yodkwtf.com/resources/youtube_jcgssn.png',
      title: 'Yodkwtf Academy | My YouTube Channel',
      url: 'https://youtube.com/c/yodkwtf',
      isLatest: false,
      hideField: true,
    },
    {
      id: 11,
      text: 'my typescript cheatsheet',
      order: 7,
      iconUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711798728/yodkwtf.com/resources/ts_uvmei4.png',
      title: 'TypeScript Cheatsheet - PDF',
      url: 'https://drive.google.com/file/d/1H-Sn67-XpCIWr-nGPQpk7lm0JAuXrRBB/view?usp=sharing',
      isLatest: false,
      hideField: true,
    },
    {
      id: 12,
      text: 'download my python cheatsheet',
      order: 8,
      iconUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711798728/yodkwtf.com/resources/python_rd8slp.png',
      title: 'Python Fundamentals - Cheatsheet (PDF)',
      url: 'https://drive.google.com/file/d/1KSPASGV9Nz1rZuVT4wXIfEcPkClNuu1s/view',
      isLatest: false,
      hideField: false,
    },
  ],
};

export default AIRTABLE_DATA;
