export const header = {
  id: 1,
  authorName: 'Abdullah Gezikhanov',
  authorDevelop: 'Интерактивный Front-end Developer',
  work: 'Работы',
  workHref: '#latest_works',
  btn: [
    {
      id: 1,
      btnText: 'Обо мне',
      btnSvg:
        `<svg class="buttonIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 476.213 476.213">
           <path d="M405.606 167.5l-21.212 21.213 34.393 34.393H0v30h418.787L384.394 287.5l21.212 21.213 70.607-70.607"></path>
         </svg>`,
      btnHref: '#',
      btnComplited: false,
    },
  ],
  headNav: {
    id: 1,
    logoname:
      `<svg  xmlns="http://www.w3.org/2000/svg" id="my-svg" width="100%" height="100%" viewBox="0 0 256 256">
            <path fill="#FFF" d="M53.2 145.1l81.9-71.7h-34.3L19 145.1l102.8 90h34.3l-102.9-90"></path>
            <g fill="#FFF">
              <path
                 d="M145.3 145.1l36-31.6s.8-.7 1.1-1l2.4-2.4c8.5-10.3 13.3-23.3 13.3-36.7 0-31.8-25.8-57.7-57.6-57.7l-111.1.1L7.2 38.6l111.4-.1h21.9c19.2 0 34.8 15.6 34.8 34.8 0 8.2-2.7 15.8-8 22.2-1 1.3-8.3 7.3-8.3 7.3l-12.4 10.6-35.6 31.7 102.9 90h34.3l-102.9-90zm33.4-31.7h.2-.2z"></path>
              <path
                 d="M252.8 236.9h-39.6l-.5-.4-104.4-91.3 37.1-33 12.5-10.6c3.5-2.9 7.5-6.3 8.1-7 5-6 7.6-13.3 7.6-21.1 0-18.2-14.8-33.1-33.1-33.1H3L28.6 14h115.8l-.1.1c31 2 55.6 27.8 55.6 59.3 0 13.6-4.9 27.1-13.7 37.8-.5.6-2.2 2.3-2.6 2.6-.3.3-1.2 1-1.2 1l-.5.4-34 29.8 104.9 91.9zm-38.3-3.5h29l-100.9-88.3 34.1-29.9h-2.2l3.6-3.5h1v1.5l1.6-1.4c.2-.2.4-.4.6-.5.4-.3 1.9-1.9 2.2-2.2 8.3-10.1 12.9-22.8 12.9-35.6 0-30.8-25.1-55.9-55.9-55.9h-3.9l-106.5-.1-18.8 19.4 109-.1h20.1c20.2 0 36.6 16.4 36.6 36.6 0 8.6-2.9 16.6-8.4 23.3-1 1.3-7.3 6.5-8.5 7.5l-12.4 10.6-34.1 30.3 100.9 88.3z"></path>
              <g>
                <path
                   d="M249.3 235.5h-35.5l-.1-.1-103.2-90.3.3-.3 35.6-31.7 12.4-10.6c2.5-2.1 7.5-6.2 8.3-7.2 5.1-6.2 7.9-13.8 7.9-21.9 0-19-15.4-34.4-34.4-34.4H6.2l23-23.7h.2l112.1-.1c31.6.5 57.1 26.4 57.1 58.1 0 13.3-4.8 26.5-13.4 37-.4.5-2.1 2.2-2.4 2.5-.3.3-1.1 1-1.1 1l-.1.1-35.5 31.2 103.2 90.4zm-35.3-.8h33l-102.4-89.6 36.4-32c.2-.2.7-.6 1-.9.3-.3 2-1.9 2.4-2.4 8.5-10.3 13.2-23.3 13.2-36.4 0-31.5-25.7-57.2-57.2-57.3h-1l-110 .1L8 38.2l111-.1h21.5c19.4 0 35.2 15.8 35.2 35.2 0 8.3-2.8 16-8 22.4-1 1.3-8.1 7.1-8.4 7.3l-12.4 10.6-35.2 31.4L214 234.7zm-35-120.9h-1.4l1-.8h.4V113.8z"></path>
                <path
                   d="M253.9 237.3H213l-.5-.4-104.8-91.7 1.8-1.6 35.6-31.7 12.5-10.6c4-3.3 7.5-6.4 8-7 4.9-5.9 7.5-13.1 7.5-20.8 0-18-14.7-32.7-32.7-32.7H2l26.4-27.2 117.2-.1-.2.2c30.6 2.6 54.8 28.5 54.8 59.6 0 13.7-4.9 27.3-13.8 38.1-.5.6-2.3 2.4-2.6 2.7-.3.3-1.2 1-1.2 1l-.5.4-33.6 29.5 105.4 92.3zm-39.2-4.3h27.7L142 145.1l33.6-29.5h-3.1l4.7-3.8.1-2.6 1.8 2 1.4.1c.2-.1.3-.3.4-.4.4-.3 1.9-1.9 2.2-2.2 8.3-10 12.8-22.6 12.8-35.3 0-30.6-24.9-55.5-55.5-55.5H30.3l-18 18.5 108.4-.1h19.7c20.4 0 37 16.6 37 37 0 8.7-2.9 16.8-8.4 23.5-.7.9-3.5 3.4-8.5 7.5L148 115.1l-33.7 30L214.7 233z"></path>
              </g>
             </g>
        </svg>`,
    mobileBar: `<i class="fas fa-bars"></i>`,
    nav: [
      {
        id: 1,
        link: 'Моё портфолио'
      },
      {
        id: 2,
        link: 'Обо мне/Связаться'
      },
      {
        id: 3,
        link: 'Эксперементы'
      },
    ],
    iconTheme: `<i class="fas fa-adjust"></i>`
  },
  socialIcon: [
    {
      id: 1,
      social:
        `<i class="fab fa-github"></i>`,
      socialHref: 'https://github.com/Wokh-Dada?tab=repositories'
    },
    {
      id: 2,
      social:
        `<i class="fas fa-phone"></i>`,
      socialHref: 'tel:79389059767'
    },
    {
      id: 3,
      social:
        `<i class="fab fa-whatsapp"></i>`,
      socialHref: 'https://wa.me/79640731348'
    },
    {
      id: 4,
      social:
        `<i class="fab fa-instagram"></i>`,
      socialHref: 'https://www.instagram.com/gezikhanov.a/'
    }
  ],
  formAboutMe: {
    aboutMe: [
      {
        id: 1,
        gigaText: 'About',
        aboutMeTitle: 'Обо мне',
        aboutMeSubtitle: 'Интерактивный Front-end Developer',
        aboutMeInfo: `
                Меня зовут Абдуллах Гезиханов 24-х летний начинающий
                <br/>
                <strong>junior frontend-разработчик.</strong>
                Мой опыт работы с верстки и JavaScript начался с
                начала 2020 года Совместно с нативным JavaScript
                изучаю <strong>Angular, React, Stencil.</strong>
                Мне нравится разьираться с новыми технологиями и
                повышать опыт и навыки каждый день решая дизайнерские
                задачи и создавая умный пользовательский интерфейс в
                разработки вэб приложений.
                <br/>
                Работа с кодом и изучения нового мое хобби и моя цель
                поэтому я не только работаю, но также и наслаждаюсь процессом.`,
        icons: [
          {
            id: 1,
            icon: `
                <i class="fab fa-angular"></i>`,
          },
          {
            id: 2,
            icon: `
                <i class="fab fa-react"></i>`,
          },
          {
            id: 3,
            icon: `
                <i class="fab fa-css3-alt"></i>`,
          },
          {
            id: 4,
            icon: `
                <i class="fab fa-js"></i>`,
          },
        ]
      },
    ],
    contactForm: [
      {
        id: 1,
        gigaText: 'Contact',
        contactFormTitle: 'Данные для связи',
        contactFormSubtitle: 'Новый проект, интересная вакансия или даже обсуждения чего-либо за кофе с интересным человеком',
        name: 'Ваше Имя',
        email: 'E-mail',
        message: 'Суть обращения',
        btn: [
          {
            id: 1,
            btnText: 'Отправить',
            btnSvg:
              ``,
            btnHref: '#',
          },
        ],
      }
    ],

  },
}

export const latestWork = {
  id: 1,
  subtitle: 'CASE STUDIES',
  title: 'Последние работы',
  latestWorksBlock: [
    {
      id: 1,
      number: '01',
      img: 'https://cdn.dribbble.com/users/124454/screenshots/10138254/media/395662e68da36da89a1c966fea881332.png',
      title: 'Project Wibbitz',
      subtitle: 'Wibbitz - Ре сурсный Центр',
      btn: [
        {
          btnText: 'К проекту',
          btnHref: 'https://wokh-dada.github.io/wibbitzInAngular/',
          btnSvg:
            `<svg class="buttonIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 476.213 476.213">
               <path d="M405.606 167.5l-21.212 21.213 34.393 34.393H0v30h418.787L384.394 287.5l21.212 21.213 70.607-70.607"></path>
             </svg>`,
          btnComplited: true,
        }
      ],

    },
    {
      id: 2,
      number: '02',
      img: 'https://cloclo20.cloud.mail.ru/inline/company%20cards.png?etag=32CBD0A231AA8237347C5B6BFF5A66C59247CCAC&x-email=a.gezikhanov%40mail.ru',
      title: 'Company Cards',
      subtitle: 'Revolut Business',
      btn: [
        {
          btnHref: 'https://wokh-dada.github.io/companyCardsInAngular/',
          btnText: 'К проекту',
          btnSvg:
            `<svg class="buttonIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 476.213 476.213">
               <path d="M405.606 167.5l-21.212 21.213 34.393 34.393H0v30h418.787L384.394 287.5l21.212 21.213 70.607-70.607"></path>
             </svg>`,
          btnComplited: true,
        }
      ],
    },
    {
      id: 3,
      number: '03',
      img: 'https://cloclo20.cloud.mail.ru/inline/%D1%85%D0%BE%D1%87%D1%83-%D0%B1%D0%BE%D1%82%D0%B0.png?etag=8F668D2A7F78D2CD9E808A77FBD63CEE985747FD&x-email=a.gezikhanov%40mail.ru',
      title: 'Хочу бота',
      subtitle: 'Разработать чат-бот',
      btn: [
        {
          btnText: 'К проекту',
          btnHref: 'https://wokh-dada.github.io/botDevelAppInAngular/',
          btnSvg:
            `<svg class="buttonIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 476.213 476.213">
               <path d="M405.606 167.5l-21.212 21.213 34.393 34.393H0v30h418.787L384.394 287.5l21.212 21.213 70.607-70.607"></path>
             </svg>`,
          btnComplited: true,
        }
      ],
    },
  ]
}

export const experiments = {
  id: 1,
  subtitle: 'ЭКСПЕРИМЕНТЫ И ОТКРЫТЫЙ ИСТОЧНИК',
  title: 'Веб это весело.',
  experimentsBlock: [
    {
      id: 1,
      img: '',
      title: 'TITLE',
      subtitle: '3D-cards',
    },
    {
      id: 2,
      img: '',
      title: 'TITLE',
      subtitle: '3D-cards',
    },
    {
      id: 3,
      img: '',
      title: 'TITLE',
      subtitle: '3D-cards',
    },
    {
      id: 4,
      img: '',
      title: 'TITLE',
      subtitle: '3D-cards',
    },
  ]
}

export const footer = {
  id: 1,
  logoname:
    `<svg xmlns="http://www.w3.org/2000/svg" id="my-svg" width="100%" height="100%" viewBox="0 0 256 256">
            <path fill="#FFF" d="M53.2 145.1l81.9-71.7h-34.3L19 145.1l102.8 90h34.3l-102.9-90"></path>
            <g fill="#FFF">
              <path
                 d="M145.3 145.1l36-31.6s.8-.7 1.1-1l2.4-2.4c8.5-10.3 13.3-23.3 13.3-36.7 0-31.8-25.8-57.7-57.6-57.7l-111.1.1L7.2 38.6l111.4-.1h21.9c19.2 0 34.8 15.6 34.8 34.8 0 8.2-2.7 15.8-8 22.2-1 1.3-8.3 7.3-8.3 7.3l-12.4 10.6-35.6 31.7 102.9 90h34.3l-102.9-90zm33.4-31.7h.2-.2z"></path>
              <path
                 d="M252.8 236.9h-39.6l-.5-.4-104.4-91.3 37.1-33 12.5-10.6c3.5-2.9 7.5-6.3 8.1-7 5-6 7.6-13.3 7.6-21.1 0-18.2-14.8-33.1-33.1-33.1H3L28.6 14h115.8l-.1.1c31 2 55.6 27.8 55.6 59.3 0 13.6-4.9 27.1-13.7 37.8-.5.6-2.2 2.3-2.6 2.6-.3.3-1.2 1-1.2 1l-.5.4-34 29.8 104.9 91.9zm-38.3-3.5h29l-100.9-88.3 34.1-29.9h-2.2l3.6-3.5h1v1.5l1.6-1.4c.2-.2.4-.4.6-.5.4-.3 1.9-1.9 2.2-2.2 8.3-10.1 12.9-22.8 12.9-35.6 0-30.8-25.1-55.9-55.9-55.9h-3.9l-106.5-.1-18.8 19.4 109-.1h20.1c20.2 0 36.6 16.4 36.6 36.6 0 8.6-2.9 16.6-8.4 23.3-1 1.3-7.3 6.5-8.5 7.5l-12.4 10.6-34.1 30.3 100.9 88.3z"></path>
              <g>
                <path
                   d="M249.3 235.5h-35.5l-.1-.1-103.2-90.3.3-.3 35.6-31.7 12.4-10.6c2.5-2.1 7.5-6.2 8.3-7.2 5.1-6.2 7.9-13.8 7.9-21.9 0-19-15.4-34.4-34.4-34.4H6.2l23-23.7h.2l112.1-.1c31.6.5 57.1 26.4 57.1 58.1 0 13.3-4.8 26.5-13.4 37-.4.5-2.1 2.2-2.4 2.5-.3.3-1.1 1-1.1 1l-.1.1-35.5 31.2 103.2 90.4zm-35.3-.8h33l-102.4-89.6 36.4-32c.2-.2.7-.6 1-.9.3-.3 2-1.9 2.4-2.4 8.5-10.3 13.2-23.3 13.2-36.4 0-31.5-25.7-57.2-57.2-57.3h-1l-110 .1L8 38.2l111-.1h21.5c19.4 0 35.2 15.8 35.2 35.2 0 8.3-2.8 16-8 22.4-1 1.3-8.1 7.1-8.4 7.3l-12.4 10.6-35.2 31.4L214 234.7zm-35-120.9h-1.4l1-.8h.4V113.8z"></path>
                <path
                   d="M253.9 237.3H213l-.5-.4-104.8-91.7 1.8-1.6 35.6-31.7 12.5-10.6c4-3.3 7.5-6.4 8-7 4.9-5.9 7.5-13.1 7.5-20.8 0-18-14.7-32.7-32.7-32.7H2l26.4-27.2 117.2-.1-.2.2c30.6 2.6 54.8 28.5 54.8 59.6 0 13.7-4.9 27.3-13.8 38.1-.5.6-2.3 2.4-2.6 2.7-.3.3-1.2 1-1.2 1l-.5.4-33.6 29.5 105.4 92.3zm-39.2-4.3h27.7L142 145.1l33.6-29.5h-3.1l4.7-3.8.1-2.6 1.8 2 1.4.1c.2-.1.3-.3.4-.4.4-.3 1.9-1.9 2.2-2.2 8.3-10 12.8-22.6 12.8-35.3 0-30.6-24.9-55.5-55.5-55.5H30.3l-18 18.5 108.4-.1h19.7c20.4 0 37 16.6 37 37 0 8.7-2.9 16.8-8.4 23.5-.7.9-3.5 3.4-8.5 7.5L148 115.1l-33.7 30L214.7 233z"></path>
              </g>
             </g>
        </svg>`,
  copyright: '@ 2020 Gezikhanov Abdullakh',
  nav: [
    {
      id: 1,
      social: 'github',
      socialHref: 'https://github.com/Wokh-Dada?tab=repositories'
    },
    {
      id: 2,
      social: 'Позвонить',
      socialHref: 'tel:79389059767'
    },
    {
      id: 3,
      social: 'WhatsApp',
      socialHref: 'https://wa.me/79640731348'
    },
    {
      id: 4,
      social: 'Instagram',
      socialHref: 'https://www.instagram.com/gezikhanov.a/'
    }
  ],
  iconTheme: `<i class="fas fa-adjust"></i>`
}

