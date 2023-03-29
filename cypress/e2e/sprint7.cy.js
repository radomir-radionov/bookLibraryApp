/// <reference types="cypress" />

const USER_FULL_DATA = {
  id: 123,
  username: 'MockUser',
  email: 'mock@gmail.com',
  confirmed: true,
  blocked: false,
  createdAt: '2023-01-15T11:14:55.686Z',
  updatedAt: '2023-03-08T08:29:25.197Z',
  firstName: 'Имя',
  lastName: 'Фамилия',
  phone: '+375 (33) 535-35-35',
  role: {
    id: 1,
    name: 'User',
    description: 'Default role given to authenticated user.',
    type: 'authenticated',
  },
  comments: [
    {
      id: 189,
      rating: 3,
      text: 'test text comment',
      bookId: 94,
    },
  ],
  avatar: '/uploads/294928_original_748468a52a.jpg',
  booking: {
    id: 185,
    order: true,
    dateOrder: '2023-03-30T00:00:00.000Z',
    book: {
      id: 25,
      title: 'Жажда',
      issueYear: '2018',
      authors: ['Игорь Рыбаков'],
      image: null,
    },
  },
  delivery: {
    id: 460,
    handed: true,
    dateHandedFrom: '2023-03-06T18:44:05.903Z',
    dateHandedTo: '2023-03-30T18:44:05.903Z',
    book: {
      id: 71,
      title: 'Нескучная детская психология. Как общаться с ребенком, чтобы он вас слушался, и слышал',
      issueYear: '2020',
      authors: ['Сатья Дас'],
      image: null,
    },
  },
  history: {
    id: 81,
    books: [
      {
        id: 34,
        title: 'Джедайские техники. Как воспитать свою обезьяну, опустошить инбокс и сберечь мыслетопливо',
        issueYear: '2020',
        authors: ['Максим Дорофеев'],
        image: null,
      },
      {
        id: 52,
        title: '15 секретов управления временем. Как успешные люди успевают всё',
        issueYear: '2019',
        authors: ['Кевин Круз'],
        image: null,
      },
      {
        id: 94,
        title: 'Так говорили мудрецы. Афоризмы',
        issueYear: '2016',
        authors: ['С. Барсов'],
        image: null,
      },
      {
        id: 11,
        title: '101 способ раскрутки личного бренда. Как сделать себе имя',
        issueYear: '2019',
        authors: ['Вячеслав Семенчук'],
        image: null,
      },
    ],
  },
};

const BOOK_34 = {
  id: 34,
  title: 'Джедайские техники. Как воспитать свою обезьяну, опустошить инбокс и сберечь мыслетопливо',
  rating: null,
  issueYear: '2020',
  description:
    'Практичные, проверенные и обоснованные приемы, которые помогут очистить папку "Входящие", сберечь самый важный ресурс - мыслетопливо, сделать список задач реально работающим и гарантированно добиваться результатов.',
  publish: 'Манн, Иванов и Фербер',
  pages: '368',
  cover: 'Твердый переплет',
  weight: '520',
  format: '60х90/16',
  ISBN: '978-5-00146-752-6',
  producer: 'АО «Первая образцовая типография» ',
  authors: ['Максим Дорофеев'],
  images: [
    {
      url: '/uploads/10584051_0_Dzhedayskie_tehniki_Kak_vospitat_svoyu_obezyanu_opustoshit_inboks_i_sberech_misletoplivo_Maksim_Dorofeev_0805fefdb1.jpg',
    },
  ],
  categories: ['Бизнес'],
  comments: null,
  booking: null,
  delivery: null,
  histories: [
    {
      id: 81,
      userId: 22,
    },
  ],
};
const BOOK_94 = {
  id: 94,
  title: 'Так говорили мудрецы. Афоризмы',
  rating: 1,
  issueYear: '2016',
  description:
    'В книгу включены афоризмы и крылатые выражения выдающихся людей - писателей, политиков, ученых, поэтов с древнейших времен до наших дней. \nДанное издание пригодится в работе журналистам, филологам, философам, студентам-гуманитариям и всем, кто хочет научиться ярко, кратко и убедительно формулировать свои мысли.',
  publish: 'Центрполиграф',
  pages: '416',
  cover: 'Твердый переплет',
  weight: '470',
  format: '80x100/32',
  ISBN: '5-9524-2139-3',
  producer: 'ЗАО "Центрполиграф"',
  authors: ['С. Барсов'],
  images: [
    {
      url: '/uploads/Tak_govorili_mudretsy_Aforizmy_061dc9816a.jpeg',
    },
  ],
  categories: ['Нон-фикшн'],
  comments: [
    {
      id: 349,
      rating: 1,
      text: 'profile page test text',
      createdAt: '2023-03-15T12:07:28.047Z',
      user: {
        commentUserId: 123,
        firstName: 'Igor',
        lastName: 'Shidlovsky',
        avatarUrl: '/uploads/thumbnail_cypress_d83da60230.jpg',
      },
    },
  ],
  booking: null,
  delivery: null,
  histories: [
    {
      id: 81,
      userId: 22,
    },
  ],
};
const BOOK_2 = {
  id: 94,
  title: 'Так говорили мудрецы. Афоризмы',
  rating: 1,
  issueYear: '2016',
  description:
    'В книгу включены афоризмы и крылатые выражения выдающихся людей - писателей, политиков, ученых, поэтов с древнейших времен до наших дней. \nДанное издание пригодится в работе журналистам, филологам, философам, студентам-гуманитариям и всем, кто хочет научиться ярко, кратко и убедительно формулировать свои мысли.',
  publish: 'Центрполиграф',
  pages: '416',
  cover: 'Твердый переплет',
  weight: '470',
  format: '80x100/32',
  ISBN: '5-9524-2139-3',
  producer: 'ЗАО "Центрполиграф"',
  authors: ['С. Барсов'],
  images: [
    {
      url: '/uploads/Tak_govorili_mudretsy_Aforizmy_061dc9816a.jpeg',
    },
  ],
  categories: ['Нон-фикшн'],
  comments: [
    {
      id: 2,
      rating: 1,
      text: 'profile page test text',
      createdAt: '2023-03-15T12:07:28.047Z',
      user: {
        commentUserId: 123,
        firstName: 'Igor',
        lastName: 'Shidlovsky',
        avatarUrl: '/uploads/thumbnail_cypress_d83da60230.jpg',
      },
    },
  ],
  booking: null,
  delivery: null,
  histories: [
    {
      id: 81,
      userId: 22,
    },
  ],
};
const USER_NO_BOOKING = {
  id: 123,
  username: 'MockUser',
  email: 'mock@gmail.com',
  confirmed: true,
  blocked: false,
  createdAt: '2023-01-15T11:14:55.686Z',
  updatedAt: '2023-03-08T08:29:25.197Z',
  firstName: 'Имя',
  lastName: 'Фамилия',
  phone: '+375 (33) 535-35-35',
  role: {
    id: 1,
    name: 'User',
    description: 'Default role given to authenticated user.',
    type: 'authenticated',
  },
  comments: [
    {
      id: 23,
      rating: 4,
      text: 'Читабельно',
      bookId: 71,
    },
    {
      id: 24,
      rating: 3,
      text: 'дядя Алех',
      bookId: 38,
    },
    {
      id: 27,
      rating: 3,
      text: 'Отзыв',
      bookId: 94,
    },
  ],
  avatar: '/uploads/cypress_a55ead3e6e.jpg',
  booking: {
    id: null,
    order: null,
    dateOrder: null,
    book: null,
  },
  delivery: {
    id: 460,
    handed: true,
    dateHandedFrom: '2023-03-06T18:44:05.903Z',
    dateHandedTo: '2023-03-20T18:44:05.903Z',
    book: {
      id: 71,
      title: 'Нескучная детская психология. Как общаться с ребенком, чтобы он вас слушался, и слышал',
      issueYear: '2020',
      authors: ['Сатья Дас'],
      image: null,
    },
  },
  history: {
    id: 81,
    books: [
      {
        id: 34,
        title: 'Джедайские техники. Как воспитать свою обезьяну, опустошить инбокс и сберечь мыслетопливо',
        issueYear: '2020',
        authors: ['Максим Дорофеев'],
        image: null,
      },
      {
        id: 52,
        title: '15 секретов управления временем. Как успешные люди успевают всё',
        issueYear: '2019',
        authors: ['Кевин Круз'],
        image: null,
      },
    ],
  },
};
const USER_NO_DELIVERY = {
  id: 123,
  username: 'MockUser',
  email: 'mock@gmail.com',
  confirmed: true,
  blocked: false,
  createdAt: '2023-01-15T11:14:55.686Z',
  updatedAt: '2023-03-08T08:29:25.197Z',
  firstName: 'Имя',
  lastName: 'Фамилия',
  phone: '+375 (33) 535-35-35',
  role: {
    id: 1,
    name: 'User',
    description: 'Default role given to authenticated user.',
    type: 'authenticated',
  },
  comments: [
    {
      id: 23,
      rating: 4,
      text: 'Читабельно',
      bookId: 71,
    },
    {
      id: 24,
      rating: 3,
      text: 'дядя Алех',
      bookId: 38,
    },
    {
      id: 27,
      rating: 3,
      text: 'Отзыв',
      bookId: 94,
    },
  ],
  avatar: '/uploads/cypress_a55ead3e6e.jpg',
  booking: {
    id: 185,
    order: true,
    dateOrder: '2023-03-13T00:00:00.000Z',
    book: {
      id: 25,
      title: 'Жажда',
      issueYear: '2018',
      authors: ['Игорь Рыбаков'],
      image: null,
    },
  },
  delivery: {
    id: null,
    order: null,
    dateOrder: null,
    book: null,
  },
  history: {
    id: 81,
    books: [
      {
        id: 34,
        title: 'Джедайские техники. Как воспитать свою обезьяну, опустошить инбокс и сберечь мыслетопливо',
        issueYear: '2020',
        authors: ['Максим Дорофеев'],
        image: null,
      },
      {
        id: 52,
        title: '15 секретов управления временем. Как успешные люди успевают всё',
        issueYear: '2019',
        authors: ['Кевин Круз'],
        image: null,
      },
    ],
  },
};
const USER_NO_HISTORY = {
  id: 123,
  username: 'MockUser',
  email: 'mock@gmail.com',
  confirmed: true,
  blocked: false,
  createdAt: '2023-01-15T11:14:55.686Z',
  updatedAt: '2023-03-08T08:29:25.197Z',
  firstName: 'Имя',
  lastName: 'Фамилия',
  phone: '+375 (33) 535-35-35',
  role: {
    id: 1,
    name: 'User',
    description: 'Default role given to authenticated user.',
    type: 'authenticated',
  },
  comments: [
    {
      id: 23,
      rating: 4,
      text: 'Читабельно',
      bookId: 71,
    },
    {
      id: 24,
      rating: 3,
      text: 'дядя Алех',
      bookId: 38,
    },
    {
      id: 27,
      rating: 3,
      text: 'Отзыв',
      bookId: 94,
    },
  ],
  avatar: '/uploads/cypress_a55ead3e6e.jpg',
  booking: {
    id: 185,
    order: true,
    dateOrder: '2023-03-13T00:00:00.000Z',
    book: {
      id: 25,
      title: 'Жажда',
      issueYear: '2018',
      authors: ['Игорь Рыбаков'],
      image: null,
    },
  },
  delivery: {
    id: 460,
    handed: true,
    dateHandedFrom: '2023-03-06T18:44:05.903Z',
    dateHandedTo: '2023-03-20T18:44:05.903Z',
    book: {
      id: 71,
      title: 'Нескучная детская психология. Как общаться с ребенком, чтобы он вас слушался, и слышал',
      issueYear: '2020',
      authors: ['Сатья Дас'],
      image: null,
    },
  },
  history: {
    id: null,
    books: null,
  },
};
const USER_EXPIRED_BOOKING = {
  id: 123,
  username: 'MockUser',
  email: 'mock@gmail.com',
  confirmed: true,
  blocked: false,
  createdAt: '2023-01-15T11:14:55.686Z',
  updatedAt: '2023-03-08T08:29:25.197Z',
  firstName: 'Имя',
  lastName: 'Фамилия',
  phone: '+375 (33) 535-35-35',
  role: {
    id: 1,
    name: 'User',
    description: 'Default role given to authenticated user.',
    type: 'authenticated',
  },
  comments: [
    {
      id: 23,
      rating: 4,
      text: 'Читабельно',
      bookId: 71,
    },
    {
      id: 24,
      rating: 3,
      text: 'дядя Алех',
      bookId: 38,
    },
    {
      id: 27,
      rating: 3,
      text: 'Отзыв',
      bookId: 94,
    },
  ],
  avatar: '/uploads/cypress_a55ead3e6e.jpg',
  booking: {
    id: 185,
    order: true,
    dateOrder: '2023-03-13T00:00:00.000Z',
    book: {
      id: 25,
      title: 'Жажда',
      issueYear: '2018',
      authors: ['Игорь Рыбаков'],
      image: null,
    },
  },
  delivery: {
    id: 460,
    handed: true,
    dateHandedFrom: '2023-03-06T18:44:05.903Z',
    dateHandedTo: '2023-03-30T18:44:05.903Z',
    book: {
      id: 71,
      title: 'Нескучная детская психология. Как общаться с ребенком, чтобы он вас слушался, и слышал',
      issueYear: '2020',
      authors: ['Сатья Дас'],
      image: null,
    },
  },
  history: {
    id: 81,
    books: [
      {
        id: 34,
        title: 'Джедайские техники. Как воспитать свою обезьяну, опустошить инбокс и сберечь мыслетопливо',
        issueYear: '2020',
        authors: ['Максим Дорофеев'],
        image: null,
      },
      {
        id: 52,
        title: '15 секретов управления временем. Как успешные люди успевают всё',
        issueYear: '2019',
        authors: ['Кевин Круз'],
        image: null,
      },
    ],
  },
};
const USER_EXPIRED_HANDED = {
  id: 123,
  username: 'MockUser',
  email: 'mock@gmail.com',
  confirmed: true,
  blocked: false,
  createdAt: '2023-01-15T11:14:55.686Z',
  updatedAt: '2023-03-08T08:29:25.197Z',
  firstName: 'Имя',
  lastName: 'Фамилия',
  phone: '+375 (33) 535-35-35',
  role: {
    id: 1,
    name: 'User',
    description: 'Default role given to authenticated user.',
    type: 'authenticated',
  },
  comments: [
    {
      id: 23,
      rating: 4,
      text: 'Читабельно',
      bookId: 71,
    },
    {
      id: 24,
      rating: 3,
      text: 'дядя Алех',
      bookId: 38,
    },
    {
      id: 27,
      rating: 3,
      text: 'Отзыв',
      bookId: 94,
    },
  ],
  avatar: '/uploads/cypress_a55ead3e6e.jpg',
  booking: {
    id: 185,
    order: true,
    dateOrder: '2023-12-13T00:00:00.000Z',
    book: {
      id: 25,
      title: 'Жажда',
      issueYear: '2018',
      authors: ['Игорь Рыбаков'],
      image: null,
    },
  },
  delivery: {
    id: 460,
    handed: true,
    dateHandedFrom: '2023-03-06T18:44:05.903Z',
    dateHandedTo: '2023-03-13T18:44:05.903Z',
    book: {
      id: 71,
      title: 'Нескучная детская психология. Как общаться с ребенком, чтобы он вас слушался, и слышал',
      issueYear: '2020',
      authors: ['Сатья Дас'],
      image: null,
    },
  },
  history: {
    id: 81,
    books: [
      {
        id: 34,
        title: 'Джедайские техники. Как воспитать свою обезьяну, опустошить инбокс и сберечь мыслетопливо',
        issueYear: '2020',
        authors: ['Максим Дорофеев'],
        image: null,
      },
      {
        id: 52,
        title: '15 секретов управления временем. Как успешные люди успевают всё',
        issueYear: '2019',
        authors: ['Кевин Круз'],
        image: null,
      },
    ],
  },
};
const BOOKS = [
  {
    issueYear: '2019',
    rating: 3.33,
    title: 'Построение бизнес-моделей: Настольная книга стратега и новатора',
    authors: ['Александр Остервальдер'],
    image: {
      url: '/uploads/10209755_0_Postroenie_biznes_modeley_Nastolnaya_kniga_stratega_i_novatora_Aleksandr_Ostervalder_Iv_Pine_931aabe20f.jpg',
    },
    categories: ['Бизнес'],
    id: 2,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2018',
    rating: 3.25,
    title: 'Разработка ценностных предложений: Как создавать товары и услуги, которые захотят купить потребители',
    authors: ['Александр Остервальдер'],
    image: {
      url: '/uploads/10442229_0_5d1c5827e4.jpg',
    },
    categories: ['Бизнес'],
    id: 3,
    booking: null,
    delivery: null,
    histories: [
      {
        id: 78,
        userId: 5,
      },
    ],
  },
  {
    issueYear: '2019',
    rating: 3.25,
    title: 'Хулиномика 3.0: хулиганская экономика. Еще толще. Еще длиннее',
    authors: ['Алексей Марков'],
    image: {
      url: '/uploads/10849349_0_89b742cffa.jpg',
    },
    categories: ['Бизнес'],
    id: 4,
    booking: null,
    delivery: null,
    histories: [
      {
        id: 40,
        userId: 6,
      },
    ],
  },
  {
    issueYear: '2020',
    rating: null,
    title: 'Жлобология. Откуда берутся деньги и почему не у меня',
    authors: ['Алексей Марков'],
    image: {
      url: '/uploads/10827932_0_b1fc6336fa.jpg',
    },
    categories: ['Бизнес'],
    id: 5,
    booking: null,
    delivery: null,
    histories: [
      {
        id: 3,
        userId: 1,
      },
    ],
  },
  {
    issueYear: '2018',
    rating: 1,
    title: 'Разумный инвестор: Полное руководство по стоимостному инвестированию',
    authors: ['Бенджамин Грэм'],
    image: {
      url: '/uploads/1027828_0_93fce05fab.jpg',
    },
    categories: ['Бизнес'],
    id: 6,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2018',
    rating: 3,
    title: 'Мастер времени',
    authors: ['Брайан Трейси'],
    image: {
      url: '/uploads/10689720_0_Master_vremeni_Brayan_Treysi_e841bace3e.jpg',
    },
    categories: ['Бизнес'],
    id: 7,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2019',
    rating: null,
    title: 'Дожим клиента: 28 способов продавать день в день',
    authors: ['Владимир Якуба'],
    image: {
      url: '/uploads/e912cd09078d6995ed49cececff66be7_e52b9aa044.jpg',
    },
    categories: ['Бизнес'],
    id: 8,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2020',
    rating: 4,
    title: 'Продажник на всю голову: Крутые стратегии профессионала',
    authors: ['Владимир Якуба'],
    image: {
      url: '/uploads/10782569_0_3cdfa87016.jpg',
    },
    categories: ['Бизнес'],
    id: 9,
    booking: {
      id: 298,
      order: true,
      dateOrder: '2023-03-14T21:00:00.000Z',
      customerId: 24,
      customerFirstName: 'test',
      customerLastName: 'user',
    },
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2020',
    rating: 3.4,
    title: 'Продажник идет в сеть. Как продавать через мессенджеры и соцсети',
    authors: ['Владмир Якуба'],
    image: {
      url: '/uploads/10903761_0_dd519b2e4c.jpg',
    },
    categories: ['Бизнес'],
    id: 10,
    booking: null,
    delivery: null,
    histories: [
      {
        id: 9,
        userId: 2,
      },
    ],
  },
  {
    issueYear: '2019',
    rating: 1.67,
    title: '101 способ раскрутки личного бренда. Как сделать себе имя',
    authors: ['Вячеслав Семенчук'],
    image: {
      url: '/uploads/10859003_0_134ef8a55d.jpg',
    },
    categories: ['Бизнес'],
    id: 11,
    booking: null,
    delivery: null,
    histories: [
      {
        id: 7,
        userId: 4,
      },
      {
        id: 59,
        userId: 11,
      },
      {
        id: 81,
        userId: 22,
      },
    ],
  },
  {
    issueYear: '2020',
    rating: 2.8,
    title: 'Сам себе бренд: Искусство самопрезентации',
    authors: ['Гарри Беквит'],
    image: {
      url: '/uploads/10858981_0_Sam_sebe_brend_Iskusstvo_samoprezentacii_m_Rarri_Bekvit_Kristin_Bekvit_36345dbe51.jpg',
    },
    categories: ['Бизнес'],
    id: 12,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2019',
    rating: 2,
    title: 'Продавая незримое: Руководство по современному маркетингу услуг',
    authors: ['Гарри Беквит'],
    image: {
      url: '/uploads/10791050_0_a50d785fac.jpg',
    },
    categories: ['Бизнес'],
    id: 13,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2020',
    rating: 2.5,
    title: 'Дело не в кофе: Корпоративная культура Sturbucks',
    authors: ['Говард Бехард'],
    image: {
      url: '/uploads/1047625_0_bf65328c95.jpg',
    },
    categories: ['Бизнес'],
    id: 14,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2020',
    rating: null,
    title: 'Корпоративная культура Toyota: Уроки для других компаний',
    authors: ['Джеффри Лайкер'],
    image: {
      url: '/uploads/10152616_0_a027f27f41.jpg',
    },
    categories: ['Бизнес'],
    id: 15,
    booking: null,
    delivery: {
      id: 461,
      handed: true,
      dateHandedFrom: '2023-03-12T21:00:00.000Z',
      dateHandedTo: '2023-03-26T21:00:00.000Z',
      recipientId: 1,
      recipientFirstName: 'Aliaksei',
      recipientLastName: 'Valadzko',
    },
    histories: null,
  },
  {
    issueYear: '2020',
    rating: null,
    title: 'От хорошего к великому. Почему одни компании совершают прорыв, а другие нет...',
    authors: ['Джим Коллинз'],
    image: {
      url: '/uploads/10604070_0_fdde108c97.jpg',
    },
    categories: ['Бизнес'],
    id: 16,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2020',
    rating: null,
    title: 'Деньги делают деньги: От зарплаты до финансовой свободы',
    authors: ['Дмитрий Лебедев'],
    image: {
      url: '/uploads/10926443_0_Dengi_delayut_dengi_Dmitriy_Lebedev_fe1c25beb7.jpg',
    },
    categories: ['Бизнес'],
    id: 17,
    booking: null,
    delivery: null,
    histories: [
      {
        id: 3,
        userId: 1,
      },
    ],
  },
  {
    issueYear: '2018',
    rating: null,
    title: 'Как привести дела в порядок. Искусство продуктивности без стресса',
    authors: ['Дэвид Аллен'],
    image: {
      url: '/uploads/1030681_0_Kak_privesti_dela_v_poryadok_iskusstvo_produktivnosti_bez_stressa_Devid_Allen_ed426c115e.jpg',
    },
    categories: ['Бизнес'],
    id: 18,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2019',
    rating: null,
    title: 'Жесткий менеджмент. Заставьте людей работать на результат',
    authors: ['Дэн Кеннеди'],
    image: {
      url: '/uploads/10408083_0_Zhestkiy_menedzhment_Zastavte_lyudey_rabotat_na_rezultat_Den_Kennedi_7020239fe7.jpg',
    },
    categories: ['Бизнес'],
    id: 19,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2020',
    rating: null,
    title: 'ВкусВилл: Как совершить революцию в ритейле, делая все не так',
    authors: ['Евгений Щепин'],
    image: {
      url: '/uploads/10777060_0_8debcb706d.jpg',
    },
    categories: ['Бизнес'],
    id: 20,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2021',
    rating: null,
    title: 'Энергия клиента: Как окупается клиентский (человеческий) подход в бизнесе',
    authors: ['Евгений Щепин'],
    image: {
      url: '/uploads/10965486_0_9ec35a4c2c.jpg',
    },
    categories: ['Бизнес'],
    id: 21,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2020',
    rating: null,
    title: 'Big Money: принципы первых. Откровенно о бизнесе и жизни успешных предпринимателей',
    authors: ['Евгений Черняк'],
    image: {
      url: '/uploads/10861429_0_b4e5a2c768.jpg',
    },
    categories: ['Бизнес'],
    id: 22,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2019',
    rating: 2.5,
    title: 'Точки контакта. Простые идеи для улучшения вашего маркетинга',
    authors: ['Игорь Манн'],
    image: {
      url: '/uploads/10252955_0_Tochki_kontakta_Prostie_idei_dlya_uluchsheniya_vashego_marketinga_Igor_Mann_Dmitriy_Turusin_ac8ddffebc.jpg',
    },
    categories: ['Бизнес'],
    id: 23,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2018',
    rating: 3.4,
    title: 'Номер 1. Как стать лучшим в том, что ты делаешь',
    authors: ['Игорь Манн'],
    image: {
      url: '/uploads/10355756_0_1babae347a.jpg',
    },
    categories: ['Бизнес'],
    id: 24,
    booking: null,
    delivery: null,
    histories: [
      {
        id: 3,
        userId: 1,
      },
    ],
  },
  {
    issueYear: '2018',
    rating: null,
    title: 'Жажда',
    authors: ['Игорь Рыбаков'],
    image: {
      url: '/uploads/Igor_Rybakov_Zhazhda_03e6027493.jpeg',
    },
    categories: ['Бизнес'],
    id: 25,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2019',
    rating: 3.5,
    title: 'Действуй! 10 заповедей успеха',
    authors: ['Ицхак Пинтосевич'],
    image: {
      url: '/uploads/10217872_0_ae066e6b54.jpg',
    },
    categories: ['Бизнес'],
    id: 26,
    booking: {
      id: 404,
      order: true,
      dateOrder: '2023-03-16T00:00:00.000Z',
      customerId: 406,
      customerFirstName: 'Andrew',
      customerLastName: 'Kirichenko',
    },
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2014',
    rating: 3,
    title: 'Клиенты на всю жизнь',
    authors: ['Карл Сьюэлл'],
    image: {
      url: '/uploads/1017697_0_Klienti_na_vsyu_zhizn_Karl_Syuell_Pol_Braun_b1e187d02c.jpg',
    },
    categories: ['Бизнес'],
    id: 27,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2019',
    rating: null,
    title: 'Гиперфокус: Как я научился делать больше, тратя меньше времени',
    authors: ['Крис Бэйли'],
    image: {
      url: '/uploads/Kris_Bejli_Giperfokus_Kak_ya_nauchilsya_delat_bolshe_tratya_menshe_vremeni_57ded37b41.jpeg',
    },
    categories: ['Бизнес'],
    id: 28,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2019',
    rating: null,
    title: 'Финансы для нефинансистов',
    authors: ['Людмила Ярухина'],
    image: {
      url: '/uploads/10613523_0_3d0607073f.jpg',
    },
    categories: ['Бизнес'],
    id: 29,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2019',
    rating: 3.4,
    title: 'Тонкое искусство пофигизма: Парадоксальный способ жить счастливо',
    authors: ['Марк Мэнсон'],
    image: {
      url: '/uploads/10614134_0_1e5d8cd9e0.jpg',
    },
    categories: ['Бизнес'],
    id: 30,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2018',
    rating: null,
    title: '45 татуировок менеджера. Правила российского руководителя',
    authors: ['Максим Батырев (Комбат)'],
    image: {
      url: '/uploads/10327034_0_9ad72be374.jpg',
    },
    categories: ['Бизнес'],
    id: 31,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2019',
    rating: null,
    title: '45 татуировок личности. Правила моей жизни',
    authors: ['Максим Батырев (Комбат)'],
    image: {
      url: '/uploads/10761206_0_9e2b334fb5.jpg',
    },
    categories: ['Бизнес'],
    id: 32,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2020',
    rating: null,
    title: 'Путь джедая. Поиск собственной методики продуктивности',
    authors: ['Максим Дорофеев'],
    image: {
      url: '/uploads/10902363_0_Put_dzhedaya_Poisk_sobstvennoy_metodiki_produktivnosti_Maksim_Dorofeev_74dfef5bd5.jpg',
    },
    categories: ['Бизнес'],
    id: 33,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2020',
    rating: 2,
    title: 'Джедайские техники. Как воспитать свою обезьяну, опустошить инбокс и сберечь мыслетопливо',
    authors: ['Максим Дорофеев'],
    image: {
      url: '/uploads/10584051_0_Dzhedayskie_tehniki_Kak_vospitat_svoyu_obezyanu_opustoshit_inboks_i_sberech_misletoplivo_Maksim_Dorofeev_0805fefdb1.jpg',
    },
    categories: ['Бизнес'],
    id: 34,
    booking: null,
    delivery: null,
    histories: [
      {
        id: 81,
        userId: 22,
      },
    ],
  },
  {
    issueYear: '2019',
    rating: null,
    title: 'Пиши, сокращай: Как создавать сильный текст',
    authors: ['Максим Ильяхов'],
    image: {
      url: '/uploads/10534756_0_e30262d68c.jpg',
    },
    categories: ['Бизнес'],
    id: 35,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2021',
    rating: null,
    title: 'Ясно, понятно. Как доносить мысли и убеждать людей с помощью слов',
    authors: ['Максим Ильяхов'],
    image: {
      url: '/uploads/10962043_0_f5936c92f7.jpg',
    },
    categories: ['Бизнес'],
    id: 36,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2020',
    rating: null,
    title: 'Рискуя собственной шкурой: Скрытая асимметрия повседневной жизни',
    authors: ['Нассим Талеб'],
    image: {
      url: '/uploads/10734923_0_3735db09cc.jpg',
    },
    categories: ['Бизнес'],
    id: 37,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2012',
    rating: 2.75,
    title: 'Как стать бизнесменом',
    authors: ['Олег Тиньков'],
    image: {
      url: '/uploads/10204302_0_c3bb9afbeb.jpg',
    },
    categories: ['Бизнес'],
    id: 38,
    booking: null,
    delivery: null,
    histories: [
      {
        id: 3,
        userId: 1,
      },
      {
        id: 81,
        userId: 22,
      },
    ],
  },
  {
    issueYear: '2019',
    rating: null,
    title: 'Дизайн-мышление. Все инструметы в одной книге',
    authors: ['Оливер Кемпкенс'],
    image: {
      url: '/uploads/10885498_0_27f9e6e81b.jpg',
    },
    categories: ['Бизнес'],
    id: 39,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2020',
    rating: null,
    title: 'От нуля к единице. Как создать стартап, который изменит будущее',
    authors: ['Питер Тиль'],
    image: {
      url: '/uploads/10394145_0_47ee8ad494.jpg',
    },
    categories: ['Бизнес'],
    id: 40,
    booking: null,
    delivery: null,
    histories: [
      {
        id: 3,
        userId: 1,
      },
    ],
  },
  {
    issueYear: '2020',
    rating: null,
    title: 'Спроси маму',
    authors: ['Роб Фитцпатрик'],
    image: {
      url: '/uploads/10968986_0_34ca8465ed.jpg',
    },
    categories: ['Бизнес'],
    id: 41,
    booking: null,
    delivery: null,
    histories: [
      {
        id: 3,
        userId: 1,
      },
    ],
  },
  {
    issueYear: '2019',
    rating: null,
    title: 'Клуб "5 часов утра". Секрет личной эффективности от монаха, который продал свой "феррари".',
    authors: ['Робин Шарма'],
    image: {
      url: '/uploads/10877173_0_c2e206cb40.jpg',
    },
    categories: ['Бизнес'],
    id: 42,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2019',
    rating: null,
    title: 'Семь навыков высокоэффективных людей',
    authors: ['Стивен Р. Кови'],
    image: {
      url: '/uploads/1018520_0_101ab285cf.jpg',
    },
    categories: ['Бизнес'],
    id: 43,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2020',
    rating: null,
    title: 'Как я создал Walmart',
    authors: ['Сэм Уолтон'],
    image: {
      url: '/uploads/10549180_0_7676bfd021.jpg',
    },
    categories: ['Бизнес'],
    id: 44,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2017',
    rating: null,
    title: 'Huawei: Лидерство, корпоративная культура, открытость',
    authors: ['Тао Тань'],
    image: {
      url: '/uploads/3be5f977_ab60_48ff_9276_1308637d2131_d47b4a05d8.jpg',
    },
    categories: ['Бизнес'],
    id: 45,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2020',
    rating: null,
    title: 'Бизнес без MBA: самые важные знания о бизнесе для тех, кто начинает собственное дело',
    authors: ['Тинькофф'],
    image: {
      url: '/uploads/10802802_0_83f597a859.jpg',
    },
    categories: ['Бизнес'],
    id: 46,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2019',
    rating: null,
    title: 'Интеллект-карты. Полное руководство по мощному инструменту мышления',
    authors: ['Тони Бьюзен'],
    image: {
      url: '/uploads/10760776_0_52d5bd6da6.jpg',
    },
    categories: ['Бизнес'],
    id: 47,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2020',
    rating: null,
    title: 'Продавец обуви. Как я создал Nike',
    authors: ['Фил Найт'],
    image: {
      url: '/uploads/10911315_0_Prodavec_obuvi_Kak_ya_sozdal_Nike_Versiya_dlya_detey_i_podrostkov_Fil_Nayt_f6efe6fb47.jpg',
    },
    categories: ['Бизнес'],
    id: 48,
    booking: null,
    delivery: null,
    histories: [
      {
        id: 81,
        userId: 22,
      },
    ],
  },
  {
    issueYear: '2019',
    rating: null,
    title: 'Додо Книга',
    authors: ['Максим Котин'],
    image: {
      url: '/uploads/Dodo_kniga_702e2a4239.jpeg',
    },
    categories: ['Бизнес'],
    id: 49,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2020',
    rating: null,
    title: 'Big Money: принципы первых. Откровенно о бизнесе и жизни успешных предпринимательниц. Книга 2',
    authors: ['Евгений Черняк'],
    image: {
      url: '/uploads/b364bc3c_04d7_11e7_80c5_000c29ae1566_9b7bd3ec_f676_11ea_813d_000c29ae1566_1382b318df.jpg',
    },
    categories: ['Бизнес'],
    id: 50,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2015',
    rating: null,
    title: 'Суперпамять',
    authors: ['Тони Бьюзен'],
    image: {
      url: '/uploads/1014568_0_4744f1508e.jpg',
    },
    categories: ['Бизнес'],
    id: 51,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2019',
    rating: null,
    title: '15 секретов управления временем. Как успешные люди успевают всё',
    authors: ['Кевин Круз'],
    image: {
      url: '/uploads/1032391714_c835ddfc0c.webp',
    },
    categories: ['Бизнес'],
    id: 52,
    booking: null,
    delivery: null,
    histories: [
      {
        id: 81,
        userId: 22,
      },
    ],
  },
  {
    issueYear: '2019',
    rating: null,
    title: 'Черный лебедь',
    authors: ['Нассим Николас Талеб'],
    image: {
      url: '/uploads/e04f4b0fb7c03ae0401996fc1028c782_25886b37d5.webp',
    },
    categories: ['Бизнес'],
    id: 53,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2018',
    rating: null,
    title: 'Майнд-менеджмент. Решение бизнес-задач с помощью интеллект-карт',
    authors: ['Сергей Бехтерев'],
    image: {
      url: '/uploads/10792059_0_44b87ba445.jpg',
    },
    categories: ['Бизнес'],
    id: 54,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2021',
    rating: null,
    title: 'Нейромаркетинг. Как влиять на подсознание потребителя',
    authors: ['Роджер Дули'],
    image: {
      url: '/uploads/1021955469_81c91256ea.webp',
    },
    categories: ['Бизнес'],
    id: 55,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2018',
    rating: null,
    title: 'Принципы',
    authors: ['Рэй Далио'],
    image: {
      url: '/uploads/6020019394_43b89b7ee9.webp',
    },
    categories: ['Бизнес'],
    id: 56,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2018',
    rating: null,
    title: 'Новые правила деловой переписки',
    authors: ['Максим Ильяхов'],
    image: {
      url: '/uploads/1037902535_00bde23ac1.webp',
    },
    categories: ['Бизнес'],
    id: 57,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2021',
    rating: null,
    title: 'Маркетинговые войны',
    authors: ['Джек Траут', 'Эл Райс'],
    image: {
      url: '/uploads/1030904156_711e68d181.webp',
    },
    categories: ['Бизнес'],
    id: 58,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2020',
    rating: null,
    title: 'Сделай это завтра и другие секреты тайм-менеджмента',
    authors: ['Марки Форстер'],
    image: {
      url: '/uploads/6066960809_1c3e8bf8f9.webp',
    },
    categories: ['Бизнес'],
    id: 59,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2021',
    rating: null,
    title:
      'Новая поведенческая экономика. Почему люди нарушают правила традиционной экономики и как на этом заработать',
    authors: ['Ричард Талер'],
    image: {
      url: '/uploads/6065900304_975e5c1634.webp',
    },
    categories: ['Бизнес'],
    id: 60,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2020',
    rating: null,
    title: 'Карьера менеджера',
    authors: ['Ли Якокка'],
    image: {
      url: '/uploads/1009079162_8a69bcb3f9.webp',
    },
    categories: ['Бизнес'],
    id: 61,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2021',
    rating: null,
    title: 'Тестирование бизнес-идей',
    authors: ['Дэвид Блэнд', 'Алекс Остервальдер'],
    image: {
      url: '/uploads/6084791398_dba0a3b1fc.webp',
    },
    categories: ['Бизнес'],
    id: 62,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2021',
    rating: null,
    title: 'Непобедимая компания: Как непрерывно обновлять бизнес-модель вашей организации, вдохновляясь опытом лучших',
    authors: ['Алекс Остервальдер', 'Ив Пинье', 'Фред Этьембль', 'Алан Смит'],
    image: {
      url: '/uploads/6061593167_01f052bf69.webp',
    },
    categories: ['Бизнес'],
    id: 63,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2019',
    rating: null,
    title: 'Счастливый ребенок. Универсальные правила',
    authors: ['Андрей Курпатов'],
    image: {
      url: '/uploads/6060732985_6d5f8bb332.webp',
    },
    categories: ['Психология', 'Родителям'],
    id: 64,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2015',
    rating: 3.86,
    title: 'Практический курс счастья',
    authors: ['Джон Кехо'],
    image: {
      url: '/uploads/1012371255_a3c279632b.webp',
    },
    categories: ['Психология'],
    id: 65,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2020',
    rating: null,
    title: 'Подсознание может все!',
    authors: ['Джон Кехо'],
    image: {
      url: '/uploads/1027833789_d26d341cc1.webp',
    },
    categories: ['Психология'],
    id: 66,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2017',
    rating: null,
    title: 'Мой продуктивный год: Как я проверил самые известные методики личной эффективности',
    authors: ['Крис Бэйли'],
    image: {
      url: '/uploads/10571472_0_b89c0f6a0d.jpg',
    },
    categories: ['Психология'],
    id: 67,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2017',
    rating: null,
    title: 'Женское достоинство - сила притяжения мужчин',
    authors: ['Мила Левчук'],
    image: {
      url: '/uploads/10648955_0_1db6c2472e.jpg',
    },
    categories: ['Психология'],
    id: 68,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2020',
    rating: 3.86,
    title: 'Хочу и буду',
    authors: ['Михаил Лабковский'],
    image: {
      url: '/uploads/10582784_0_6ba1f42ade.jpg',
    },
    categories: ['Психология'],
    id: 69,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2018',
    rating: null,
    title: 'Поток: Психология оптимального переживания',
    authors: ['Михай Чиксентмихайи'],
    image: {
      url: '/uploads/10274442_0_2cf1ad9ecf.jpg',
    },
    categories: ['Психология'],
    id: 70,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2020',
    rating: null,
    title: 'Нескучная детская психология. Как общаться с ребенком, чтобы он вас слушался, и слышал',
    authors: ['Сатья Дас'],
    image: {
      url: '/uploads/10949964_0_Neskuchnaya_detskaya_psihologiya_Kak_obschatsya_s_rebenkom_chtobi_on_vas_i_slushalsya_i_slishal_Satya_Das_28c77fde4b.jpg',
    },
    categories: ['Психология', 'Родителям'],
    id: 71,
    booking: null,
    delivery: {
      id: 460,
      handed: true,
      dateHandedFrom: '2023-03-06T18:44:05.903Z',
      dateHandedTo: '2023-03-20T18:44:05.903Z',
      recipientId: 22,
      recipientFirstName: 'Igor',
      recipientLastName: 'Shidlovsky',
    },
    histories: null,
  },
  {
    issueYear: '2019',
    rating: null,
    title: 'Выгорание. Новый подход к избавлению от стресса',
    authors: ['Эмили Нагоски '],
    image: {
      url: '/uploads/10909446_0_88340ab92c.jpg',
    },
    categories: ['Психология'],
    id: 72,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2017',
    rating: null,
    title: 'Медитация и  осознанность: 10 минут в день, которые приведут ваши мысли в порядок',
    authors: ['Энди Паддикомб'],
    image: {
      url: '/uploads/10385271_0_7a930430ca.jpg',
    },
    categories: ['Психология'],
    id: 73,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2019',
    rating: null,
    title: 'Игры, в корторые играют люди',
    authors: ['Эрик Берн'],
    image: {
      url: '/uploads/10565611_0_Igri_v_kotorie_igrayut_lyudi_m_Erik_Bern_001fda3be0.jpg',
    },
    categories: ['Психология'],
    id: 74,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2019',
    rating: null,
    title: 'Люди, которые играют в игры',
    authors: ['Эрик Берн'],
    image: {
      url: '/uploads/ljudi_kotorie_igrajut_v_igri_800x800_d1c05e670f.jpg',
    },
    categories: ['Психология'],
    id: 75,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2020',
    rating: null,
    title: 'Сила воли. Как развить и укрепить',
    authors: ['Келли Макгонигал'],
    image: {
      url: '/uploads/6053518200_478b4a0254.webp',
    },
    categories: ['Психология'],
    id: 76,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2019',
    rating: null,
    title: 'Уверенность. Внятное руководство по избавлению от страхов, комплексов и тревог',
    authors: ['Кэролайн Форен'],
    image: {
      url: '/uploads/41821787_kerolayn_foren_uverennost_9014e969b5.jpg',
    },
    categories: ['Психология'],
    id: 77,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2018',
    rating: null,
    title: 'Красная таблетка (книга №1)',
    authors: ['Андрей Курпатов'],
    image: {
      url: '/uploads/10689132_0_cabcde68c0.jpg',
    },
    categories: ['Психология'],
    id: 78,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2019',
    rating: null,
    title: 'Красная таблетка-2. Вся правда об успехе',
    authors: ['Андрей Курпатов'],
    image: {
      url: '/uploads/10909152_0_cc5f53fcd4.jpg',
    },
    categories: ['Психология'],
    id: 79,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2018',
    rating: null,
    title: 'Чертоги разума',
    authors: ['Андрей Курпатов'],
    image: {
      url: '/uploads/10718454_0_eba76b8c65.jpg',
    },
    categories: ['Психология'],
    id: 80,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2020',
    rating: null,
    title: 'Нанопривычки. Маленькие шаги, которые приведут к большим переменам',
    authors: ['Би Джей Фогг'],
    image: {
      url: '/uploads/10952394_0_4090195633.jpg',
    },
    categories: ['Психология'],
    id: 81,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2021',
    rating: null,
    title: 'Осознанное счастье',
    authors: ['Пакчок Ринпоче', 'Эррик Соломон'],
    image: {
      url: '/uploads/101020558_0_1414393932.jpg',
    },
    categories: ['Психология'],
    id: 82,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2017',
    rating: null,
    title: 'Секреты спокойствия "ленивой мамы"',
    authors: ['Анна Быкова'],
    image: {
      url: '/uploads/10626944_0_Sekreti_spokoystviya_lenivoy_mami_Anna_Bikova_61672f37fd.jpg',
    },
    categories: ['Родителям'],
    id: 83,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2016',
    rating: null,
    title: 'Самостоятельный ребенок, или Как стать "ленивой мамой"',
    authors: ['Анна Быкова'],
    image: {
      url: '/uploads/10507071_0_448402ad71.jpg',
    },
    categories: ['Родителям'],
    id: 84,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2016',
    rating: null,
    title: 'Развивающие занятия "ленивой мамы"',
    authors: ['Анна Быкова'],
    image: {
      url: '/uploads/10538154_0_f08240b913.jpg',
    },
    categories: ['Родителям'],
    id: 85,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2013',
    rating: null,
    title: 'Ваш ребенок от 0 до 3. Книга для молодых родителей',
    authors: ['Елена Смирнова'],
    image: {
      url: '/uploads/2389005_detail_c289579b34.jpg',
    },
    categories: ['Родителям'],
    id: 86,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2016',
    rating: null,
    title: 'Если с ребенком трудно',
    authors: ['Людмила Петрановская'],
    image: {
      url: '/uploads/6953094_1_fb4c5afd73.jpg',
    },
    categories: ['Родителям'],
    id: 87,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2010',
    rating: null,
    title: 'Методика раннего развития. От 6месяцев до 6 лет',
    authors: ['Мария Монтессори'],
    image: {
      url: '/uploads/1052205_0_Metodika_rannego_razvitiya_Marii_Montessori_Ot_6_mesyacev_do_6_let_Viktoriya_Dmitrieva_c299bc93fd.jpg',
    },
    categories: ['Родителям'],
    id: 88,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2021',
    rating: null,
    title: 'Мани, или Азбука денег',
    authors: ['Бодо Шефер'],
    image: {
      url: '/uploads/1000351843_5be4c2c9fb.webp',
    },
    categories: ['Бизнес', 'Родителям'],
    id: 89,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2021',
    rating: null,
    title: 'Воспитывая счастливых людей… Как не лишить ребенка детства в погоне за званием "идеальный родитель"',
    authors: ['Любвь Сурудо'],
    image: {
      url: '/uploads/4389878_af7a651f38.jpg',
    },
    categories: ['Родителям'],
    id: 90,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2019',
    rating: null,
    title: 'Зачем мы спим.Новая наука о сне и сноведениях',
    authors: ['Мэттью Уолкер'],
    image: {
      url: '/uploads/10747771_0_418ede3589.jpg',
    },
    categories: ['Нон-фикшн'],
    id: 91,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2018',
    rating: 5,
    title: 'Homo Deus. Краткая история будущего',
    authors: ['Юваль Ной Харари'],
    image: {
      url: '/uploads/10673454_0_Homo_Deus_Kratkaya_istoriya_buduschego_Yuval_Harari_3d5bdcbd1f.jpg',
    },
    categories: ['Нон-фикшн'],
    id: 92,
    booking: {
      id: 425,
      order: true,
      dateOrder: '2023-03-16T00:00:00.000Z',
      customerId: 451,
      customerFirstName: 'adA9',
      customerLastName: 'adA9',
    },
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2020',
    rating: null,
    title: '21 урок для XXI века',
    authors: ['Юваль Ной Харари'],
    image: {
      url: '/uploads/10919897_0_2c9b74c1ff.jpg',
    },
    categories: ['Нон-фикшн'],
    id: 93,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2016',
    rating: 1,
    title: 'Так говорили мудрецы. Афоризмы',
    authors: ['С. Барсов'],
    image: {
      url: '/uploads/Tak_govorili_mudretsy_Aforizmy_061dc9816a.jpeg',
    },
    categories: ['Нон-фикшн'],
    id: 94,
    booking: null,
    delivery: null,
    histories: [
      {
        id: 81,
        userId: 22,
      },
    ],
  },
  {
    issueYear: '2021',
    rating: null,
    title: 'Как быть стоиком',
    authors: ['Массимо Пильюччи'],
    image: {
      url: '/uploads/6059543389_ea1dbc93a6.webp',
    },
    categories: ['Нон-фикшн'],
    id: 95,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2021',
    rating: 4,
    title: 'Говори  красиво и уверенно. Постановка голоса и речи',
    authors: ['Евгения Шестакова'],
    image: {
      url: '/uploads/1005691015_7064cebb9c.webp',
    },
    categories: ['Нон-фикшн'],
    id: 96,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2018',
    rating: 4,
    title: 'Краткая история почти всего на свете',
    authors: ['Билл Брайсон'],
    image: {
      url: '/uploads/kratkaya_istoriya_pochti_vsego_na_svete_5792ee1da1.jpg',
    },
    categories: ['Нон-фикшн'],
    id: 97,
    booking: {
      id: 424,
      order: true,
      dateOrder: '2023-03-15T21:00:00.000Z',
      customerId: 358,
      customerFirstName: 'Dmitry',
      customerLastName: 'Dmitry',
    },
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2018',
    rating: 3,
    title: 'Атлант расправил плечи. Часть первая. Непротиворечие',
    authors: ['Айн Рэнд'],
    image: {
      url: '/uploads/6049001435_e5b5774cb1.webp',
    },
    categories: ['Художественная литература'],
    id: 98,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2018',
    rating: 3.17,
    title: 'Атлант расправил плечи. Часть вторая. Или-или',
    authors: ['Айн Рэнд'],
    image: {
      url: '/uploads/6049001426_da8eb22c3b.webp',
    },
    categories: ['Художественная литература'],
    id: 99,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2018',
    rating: 3,
    title: 'Атлант расправил плечи. Часть третья. А есть А',
    authors: ['Айн Рэнд'],
    image: {
      url: '/uploads/6049001431_06f4e779f2.webp',
    },
    categories: ['Художественная литература'],
    id: 100,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2018',
    rating: 1,
    title: 'Маленький принц',
    authors: ['Антуан де Сент-Экзюпери'],
    image: {
      url: '/uploads/cover_a6724f3043.webp',
    },
    categories: ['Художественная литература'],
    id: 101,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2010',
    rating: null,
    title: 'Понедельник начинается в субботу',
    authors: ['Аркадий и Борис Стругацкие'],
    image: {
      url: '/uploads/31671_eb7f1b6d7d.jpg',
    },
    categories: ['Художественная литература'],
    id: 102,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2012',
    rating: null,
    title: 'Москва-Петушки',
    authors: ['Венедикт Ерофеев'],
    image: {
      url: '/uploads/1035586_0_e948159aa3.jpg',
    },
    categories: ['Художественная литература'],
    id: 103,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2011',
    rating: 2.33,
    title: 'Записки о Шерлоке Холмсе',
    authors: ['Артур Конан Дойл'],
    image: {
      url: '/uploads/10191824_0_Zapiski_o_Sherloke_Holmse_Ser_Artur_Konan_Doyl_55742abb3f.jpg',
    },
    categories: ['Художественная литература'],
    id: 104,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2018',
    rating: 1,
    title: 'Сто лет одиночества',
    authors: ['Габриэль Гарсия Маркес'],
    image: {
      url: '/uploads/10609309_0_6a3fca8133.jpg',
    },
    categories: ['Художественная литература'],
    id: 105,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2018',
    rating: 1,
    title: 'Полковнику никто не пишет',
    authors: ['Габриэль Гарсия Маркес'],
    image: {
      url: '/uploads/10348653_0_369c9c1da5.jpg',
    },
    categories: ['Художественная литература'],
    id: 106,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2017',
    rating: null,
    title: 'Вызовите акушерку. Тени Ист-Энда',
    authors: ['Дженифер Уорф'],
    image: {
      url: '/uploads/10659753_0_de555cef7f.jpg',
    },
    categories: ['Художественная литература'],
    id: 107,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2018',
    rating: null,
    title: 'Вызовите акушерку. Прощание с Ист-Эндом',
    authors: ['Дженифер Уорф'],
    image: {
      url: '/uploads/10680603_0_08dfd7eeb0.jpg',
    },
    categories: ['Художественная литература'],
    id: 108,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2016',
    rating: null,
    title: 'Сильмариллион',
    authors: ['Джон Р.Р. Толкин'],
    image: {
      url: '/uploads/10492145_0_82521e341f.jpg',
    },
    categories: ['Художественная литература'],
    id: 109,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2017',
    rating: null,
    title: 'Таинственная история Билли Миллигана',
    authors: ['Дэниел Киз'],
    image: {
      url: '/uploads/1037906861_b5adeceb25.webp',
    },
    categories: ['Художественная литература'],
    id: 110,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2012',
    rating: null,
    title: 'Титаник',
    authors: ['Милош Губачек'],
    image: {
      url: '/uploads/1015870_0_bcc252d7e3.jpg',
    },
    categories: ['Художественная литература'],
    id: 111,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2016',
    rating: 1,
    title: 'Кодекс порядочных людей, или о способах не попасться на удочку мошенника',
    authors: ['Оноре де Бальзак'],
    image: {
      url: '/uploads/Onore_de_Balzak_Kodeks_poryadochnyh_lyudej_462b084835.jpeg',
    },
    categories: ['Художественная литература'],
    id: 112,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2016',
    rating: null,
    title: 'Летнее утро, летняя ночь',
    authors: ['Рэй Бредбери'],
    image: {
      url: '/uploads/6016428258_19dfc630df.webp',
    },
    categories: ['Художественная литература'],
    id: 113,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2018',
    rating: null,
    title: 'Здесь была Бритт-Мари',
    authors: ['Фредерик Бакман'],
    image: {
      url: '/uploads/10673471_0_636c0df653.jpg',
    },
    categories: ['Художественная литература'],
    id: 114,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2019',
    rating: 1,
    title: 'Люди, которые всегда со мной',
    authors: ['Наринэ Абгарян'],
    image: {
      url: '/uploads/Narine_Abgaryan_Lyudi_kotorye_vsegda_so_mnoj_9aae66ae54.jpeg',
    },
    categories: ['Художественная литература'],
    id: 115,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2014',
    rating: null,
    title: 'От полудня до полуночи',
    authors: ['Эрих Мария Ремарк'],
    image: {
      url: '/uploads/Erih_Mariya_Remark_Ot_poludnya_do_polunochi_sbornik_0ac31a5be6.jpeg',
    },
    categories: ['Художественная литература'],
    id: 116,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2017',
    rating: null,
    title: 'Все мои женщины. Пробуждение',
    authors: ['Януш Леон Вишневский'],
    image: {
      url: '/uploads/10650207_0_55eef08c8b.jpg',
    },
    categories: ['Художественная литература'],
    id: 117,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2019',
    rating: 1,
    title: 'Маленькие женщины',
    authors: ['Луиза Мэй Олкотт'],
    image: {
      url: '/uploads/B08_JH_5_T9_J6_01_SCLZZZZZZZ_SX_500_a9e8d4d2f9.jpg',
    },
    categories: ['Художественная литература'],
    id: 118,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2019',
    rating: 4,
    title: 'Гарри Поттер и проклятое дитя',
    authors: ['Дж. К. Роулинг '],
    image: {
      url: '/uploads/10679903_0_7bbab522e0.jpg',
    },
    categories: ['Художественная литература'],
    id: 119,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2017',
    rating: null,
    title: "Harry Potter and the Philosopher's Stone",
    authors: ['J. K. Rowling'],
    image: {
      url: '/uploads/51_Pc_U_Ahn15_L_2d1e67f1ea.jpg',
    },
    categories: ['Художественная литература'],
    id: 120,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2020',
    rating: null,
    title: 'Цветы для Элджернона',
    authors: ['Дэниел Киз'],
    image: {
      url: '/uploads/6053509628_653f992e84.webp',
    },
    categories: ['Художественная литература'],
    id: 121,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2016',
    rating: null,
    title: 'Дом в котором...Том 1. Курильщик',
    authors: ['Мариам Петросян'],
    image: {
      url: '/uploads/38078_90f4a2d616.jpg',
    },
    categories: ['Художественная литература'],
    id: 122,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2016',
    rating: null,
    title: 'Дом в котором...Том 2. Шакалиный восьмидневник',
    authors: ['Мариам Петросян'],
    image: {
      url: '/uploads/38082_0e54508629.jpg',
    },
    categories: ['Художественная литература'],
    id: 123,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2016',
    rating: null,
    title: 'Дом в котором...Том 3. Пустые гнезда',
    authors: ['Мариам Петросян'],
    image: {
      url: '/uploads/38088_48b123ff43.jpg',
    },
    categories: ['Художественная литература'],
    id: 124,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2016',
    rating: null,
    title: 'Дневник домового',
    authors: ['Евгений ЧеширКо'],
    image: {
      url: '/uploads/6008888071_1200fc05f9.webp',
    },
    categories: ['Художественная литература'],
    id: 125,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2014',
    rating: null,
    title: 'The Picture  of Dorian Gray',
    authors: ['Wilde Oscar'],
    image: {
      url: '/uploads/81f_RD_4_Ez_Go_L_15c4048a79.jpg',
    },
    categories: ['Художественная литература'],
    id: 126,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2010',
    rating: 3.29,
    title: 'Чистый код: создание, анализ и рефакторинг. Библиотека прогаммиста',
    authors: ['Роберт Мартин '],
    image: {
      url: '/uploads/1001563239_b0cf866a9f.webp',
    },
    categories: ['Программирование'],
    id: 127,
    booking: null,
    delivery: null,
    histories: [
      {
        id: 79,
        userId: 14,
      },
    ],
  },
  {
    issueYear: '2014',
    rating: 2.75,
    title: 'Java. Объектно-ориентированное программирование',
    authors: ['Алексей Николаевич'],
    image: {
      url: '/uploads/6012958582_79835de350.webp',
    },
    categories: ['Программирование'],
    id: 128,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2020',
    rating: 2,
    title: 'Теоретический минимум по Computer Science. Все, что нужно знать программисту и разработчику',
    authors: ['Владсон Феррейра Фило'],
    image: {
      url: '/uploads/1022639997_0f1c06f920.webp',
    },
    categories: ['Программирование'],
    id: 129,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2019',
    rating: 2.67,
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих',
    authors: ['Адитья Бхаргава'],
    image: {
      url: '/uploads/image_book_c27c1aaf74.jpg',
    },
    categories: ['Программирование'],
    id: 130,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2016',
    rating: 3.5,
    title: 'Вино. Практический путеводитель',
    authors: ['Мадлен Пакетт'],
    image: {
      url: '/uploads/10516002_0_58deebd77f.jpg',
    },
    categories: ['Хобби'],
    id: 131,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2019',
    rating: 2,
    title: 'Дизайн. Книга для недизайнеров',
    authors: ['Робин Уильямс'],
    image: {
      url: '/uploads/1025027525_a2e92c2a7b.webp',
    },
    categories: ['Дизайн'],
    id: 132,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2019',
    rating: 2,
    title: 'Школа дизайна. Шрифт',
    authors: ['Ричард Пулин'],
    image: {
      url: '/uploads/10907435_0_3937c2d1d6.jpg',
    },
    categories: ['Дизайн'],
    id: 133,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2019',
    rating: 2.33,
    title: 'Школа дизайна. Макет',
    authors: ['Ричард Пулин'],
    image: {
      url: '/uploads/10905898_0_e15299a48e.jpg',
    },
    categories: ['Дизайн'],
    id: 134,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2020',
    rating: 3,
    title: 'Как быть счастливым?',
    authors: ['Андрей Курпатов'],
    image: null,
    categories: ['Детские'],
    id: 135,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2020',
    rating: 4,
    title: 'Как научиться дружить?',
    authors: ['Андрей Курпатов'],
    image: {
      url: '/uploads/ph_001_4a638f1923.webp',
    },
    categories: ['Детские'],
    id: 136,
    booking: {
      id: 319,
      order: true,
      dateOrder: '2023-03-15T21:00:00.000Z',
      customerId: 289,
      customerFirstName: 'Котик',
      customerLastName: 'Бурко',
    },
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2019',
    rating: 3.25,
    title: 'Как устроен мозг?',
    authors: ['Андрей Курпатов'],
    image: {
      url: '/uploads/cover1_a4e57025a3.webp',
    },
    categories: ['Детские'],
    id: 137,
    booking: null,
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2019',
    rating: 2,
    title: 'Как исполняются мечты?',
    authors: ['Андрей Курпатов'],
    image: {
      url: '/uploads/cover2_aa0efc07fa.webp',
    },
    categories: ['Детские'],
    id: 138,
    booking: {
      id: 308,
      order: true,
      dateOrder: '2023-03-14T00:00:00.000Z',
      customerId: 22,
      customerFirstName: 'Igor',
      customerLastName: 'Shidlovsky',
    },
    delivery: null,
    histories: null,
  },
  {
    issueYear: '2018',
    rating: null,
    title: 'Harry Potter and the Chamber of Secrets',
    authors: ['J. K. Rowling'],
    image: {
      url: '/uploads/6016615311_edce0c111d.webp',
    },
    categories: ['Художественная литература'],
    id: 139,
    booking: null,
    delivery: null,
    histories: null,
  },
];

const CATEGORIES = [
  {
    name: 'Бизнес',
    path: 'business',
    id: 1,
  },
  {
    name: 'Психология',
    path: 'psychology',
    id: 2,
  },
  {
    name: 'Родителям',
    path: 'parents',
    id: 3,
  },
  {
    name: 'Нон-фикшн',
    path: 'non-fiction',
    id: 4,
  },
  {
    name: 'Художественная литература',
    path: 'fiction',
    id: 5,
  },
  {
    name: 'Программирование',
    path: 'programming',
    id: 6,
  },
  {
    name: 'Хобби',
    path: 'hobby',
    id: 7,
  },
  {
    name: 'Дизайн',
    path: 'design',
    id: 8,
  },
  {
    name: 'Детские',
    path: 'childish',
    id: 9,
  },
  {
    name: 'Другое',
    path: 'other',
    id: 10,
  },
];

const login = 'TestUser1';
const pass = 'Qwerty123';

const USER_AUTH = {
  jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNjY2NTQ0MzI5LCJleHAiOjE2NjkxMzYzMjl9.erLicGJGH5wttjAF6xDWMcxDJOIJvEnFLFzuMVzUkSU',
  user: {
    id: 123,
    username: 'MockUser',
    email: 'mock@gmail.com',
    confirmed: true,
    blocked: false,
    createdAt: '2023-01-15T11:14:55.686Z',
    updatedAt: '2023-03-08T08:29:25.197Z',
    firstName: 'Имя',
    lastName: 'Фамилия',
    phone: '+375 (33) 535-35-35',
    role: {
      id: 1,
      name: 'User',
      description: 'Default role given to authenticated user.',
      type: 'authenticated',
    },
    comments: [
      {
        id: 189,
        rating: 3,
        text: 'test text comment',
        bookId: 94,
      },
    ],
    avatar: '/uploads/294928_original_748468a52a.jpg',
    booking: {
      id: 185,
      order: true,
      dateOrder: '2023-03-30T00:00:00.000Z',
      book: {
        id: 25,
        title: 'Жажда',
        issueYear: '2018',
        authors: ['Игорь Рыбаков'],
        image: null,
      },
    },
    delivery: {
      id: 460,
      handed: true,
      dateHandedFrom: '2023-03-06T18:44:05.903Z',
      dateHandedTo: '2023-03-30T18:44:05.903Z',
      book: {
        id: 71,
        title: 'Нескучная детская психология. Как общаться с ребенком, чтобы он вас слушался, и слышал',
        issueYear: '2020',
        authors: ['Сатья Дас'],
        image: null,
      },
    },
    history: {
      id: 81,
      books: [
        {
          id: 34,
          title: 'Джедайские техники. Как воспитать свою обезьяну, опустошить инбокс и сберечь мыслетопливо',
          issueYear: '2020',
          authors: ['Максим Дорофеев'],
          image: null,
        },
        {
          id: 52,
          title: '15 секретов управления временем. Как успешные люди успевают всё',
          issueYear: '2019',
          authors: ['Кевин Круз'],
          image: null,
        },
        {
          id: 94,
          title: 'Так говорили мудрецы. Афоризмы',
          issueYear: '2016',
          authors: ['С. Барсов'],
          image: null,
        },
        {
          id: 11,
          title: '101 способ раскрутки личного бренда. Как сделать себе имя',
          issueYear: '2019',
          authors: ['Вячеслав Семенчук'],
          image: null,
        },
      ],
    },
  },
};

const UPLOAD = [
  {
    id: 375,
    name: '294928_original.jpg',
    alternativeText: null,
    caption: null,
    width: 607,
    height: 430,
    formats: {
      thumbnail: {
        name: 'thumbnail_294928_original.jpg',
        hash: 'thumbnail_294928_original_748468a52a',
        ext: '.jpg',
        mime: 'image/jpeg',
        path: null,
        width: 220,
        height: 156,
        size: 9.38,
        url: '/uploads/thumbnail_294928_original_748468a52a.jpg',
      },
      small: {
        name: 'small_294928_original.jpg',
        hash: 'small_294928_original_748468a52a',
        ext: '.jpg',
        mime: 'image/jpeg',
        path: null,
        width: 500,
        height: 354,
        size: 33.6,
        url: '/uploads/small_294928_original_748468a52a.jpg',
      },
    },
    hash: '294928_original_748468a52a',
    ext: '.jpg',
    mime: 'image/jpeg',
    size: 33.06,
    url: '/uploads/294928_original_748468a52a.jpg',
    previewUrl: null,
    provider: 'local',
    provider_metadata: null,
    createdAt: '2023-03-16T07:45:13.308Z',
    updatedAt: '2023-03-16T07:45:13.308Z',
  },
];

const USER_AVATAR_CHANGED = {
  id: 123,
  username: 'MockUser',
  email: 'mock@gmail.com',
  confirmed: true,
  blocked: false,
  createdAt: '2023-01-15T11:14:55.686Z',
  updatedAt: '2023-03-08T08:29:25.197Z',
  firstName: 'Имя',
  lastName: 'Фамилия',
  phone: '+375 (33) 535-35-35',
  role: {
    id: 1,
    name: 'User',
    description: 'Default role given to authenticated user.',
    type: 'authenticated',
  },
  comments: [
    {
      id: 189,
      rating: 3,
      text: 'test text comment',
      bookId: 94,
    },
  ],
  avatar: '/uploads/cypress_7b02fbc92d.jpg',
  booking: {
    id: 185,
    order: true,
    dateOrder: '2023-03-30T00:00:00.000Z',
    book: {
      id: 25,
      title: 'Жажда',
      issueYear: '2018',
      authors: ['Игорь Рыбаков'],
      image: null,
    },
  },
  delivery: {
    id: 460,
    handed: true,
    dateHandedFrom: '2023-03-06T18:44:05.903Z',
    dateHandedTo: '2023-03-30T18:44:05.903Z',
    book: {
      id: 71,
      title: 'Нескучная детская психология. Как общаться с ребенком, чтобы он вас слушался, и слышал',
      issueYear: '2020',
      authors: ['Сатья Дас'],
      image: null,
    },
  },
  history: {
    id: 81,
    books: [
      {
        id: 34,
        title: 'Джедайские техники. Как воспитать свою обезьяну, опустошить инбокс и сберечь мыслетопливо',
        issueYear: '2020',
        authors: ['Максим Дорофеев'],
        image: null,
      },
      {
        id: 52,
        title: '15 секретов управления временем. Как успешные люди успевают всё',
        issueYear: '2019',
        authors: ['Кевин Круз'],
        image: null,
      },
      {
        id: 94,
        title: 'Так говорили мудрецы. Афоризмы',
        issueYear: '2016',
        authors: ['С. Барсов'],
        image: null,
      },
      {
        id: 11,
        title: '101 способ раскрутки личного бренда. Как сделать себе имя',
        issueYear: '2019',
        authors: ['Вячеслав Семенчук'],
        image: null,
      },
    ],
  },
};

const requests = () => {
  cy.intercept('GET', /books/, BOOKS).as('books');
  cy.intercept('GET', /categories/, CATEGORIES).as('categories');
  cy.intercept('GET', /users\/me/, USER_AUTH).as('me');
  cy.visit(`http://localhost:3000/`);
  cy.wait(['@books', '@categories', '@me']);
};
const getFullData = (sprint2) => {
  cy.intercept('GET', /books/, sprint2 ? BOOKS.filter((_, index) => index < 20) : BOOKS).as('books');
  cy.intercept('GET', /categories/, CATEGORIES).as('categories');
  cy.intercept('GET', /users\/me/, USER_FULL_DATA).as('me');
};
const getContent = () => {
  cy.intercept('GET', /books/, BOOKS).as('books');
  cy.intercept('GET', /categories/, CATEGORIES).as('categories');
};

describe('Sprint 2', () => {
  const BOOK_NO_IMAGES = {
    id: 11,
    title: 'Сам себе бренд: Искусство самопрезентации',
    rating: null,
    issueYear: '2020',
    description:
      'Каждый, кому приходилось работать в сфере продаж, подсознательно чувствует, что продает он вовсе не товар. Он продает себя.\n\nЛюбые взаимоотношения, деловые и не только, предполагают сделку. Как подчеркнуть свои достоинства? Как выделиться из толпы? Как вызвать к себе интерес, добиться расположения, завоевать доверие окружающих, покорить вершину и удержаться на ней? В этой энциклопедии «интуитивного маркетинга» собраны советы, подсказки, инструкции, как продать себя подороже.',
    publish: 'Альпина Паблишер',
    pages: '263',
    cover: 'Мягкая обложка',
    weight: '185',
    format: '70x100/32',
    ISBN: '978-0-446-57821-9',
    producer: 'Полиграфическо-издательский комплекс «Идел-Пресс» филиал АО «ТАТМЕДИА»',
    authors: ['Гарри Беквит'],
    images: null,
    categories: ['Бизнес'],
    comments: null,
    booking: null,
    delivery: null,
    histories: null,
  };
  const BOOK_ONE_IMAGE = {
    id: 11,
    title: 'Сам себе бренд: Искусство самопрезентации',
    rating: null,
    issueYear: '2020',
    description:
      'Каждый, кому приходилось работать в сфере продаж, подсознательно чувствует, что продает он вовсе не товар. Он продает себя.\n\nЛюбые взаимоотношения, деловые и не только, предполагают сделку. Как подчеркнуть свои достоинства? Как выделиться из толпы? Как вызвать к себе интерес, добиться расположения, завоевать доверие окружающих, покорить вершину и удержаться на ней? В этой энциклопедии «интуитивного маркетинга» собраны советы, подсказки, инструкции, как продать себя подороже.',
    publish: 'Альпина Паблишер',
    pages: '263',
    cover: 'Мягкая обложка',
    weight: '185',
    format: '70x100/32',
    ISBN: '978-0-446-57821-9',
    producer: 'Полиграфическо-издательский комплекс «Идел-Пресс» филиал АО «ТАТМЕДИА»',
    authors: ['Гарри Беквит'],
    images: [
      {
        url: '/uploads/10858981_0_Sam_sebe_brend_Iskusstvo_samoprezentacii_m_Rarri_Bekvit_Kristin_Bekvit_36345dbe51.jpg',
      },
    ],
    categories: ['Бизнес'],
    comments: null,
    booking: null,
    delivery: null,
    histories: null,
  };
  const BOOK_MORETWO_IMAGE = {
    id: 11,
    title: 'Сам себе бренд: Искусство самопрезентации',
    rating: null,
    issueYear: '2020',
    description:
      'Каждый, кому приходилось работать в сфере продаж, подсознательно чувствует, что продает он вовсе не товар. Он продает себя.\n\nЛюбые взаимоотношения, деловые и не только, предполагают сделку. Как подчеркнуть свои достоинства? Как выделиться из толпы? Как вызвать к себе интерес, добиться расположения, завоевать доверие окружающих, покорить вершину и удержаться на ней? В этой энциклопедии «интуитивного маркетинга» собраны советы, подсказки, инструкции, как продать себя подороже.',
    publish: 'Альпина Паблишер',
    pages: '263',
    cover: 'Мягкая обложка',
    weight: '185',
    format: '70x100/32',
    ISBN: '978-0-446-57821-9',
    producer: 'Полиграфическо-издательский комплекс «Идел-Пресс» филиал АО «ТАТМЕДИА»',
    authors: ['Гарри Беквит'],
    images: [
      {
        url: '/uploads/10858981_0_Sam_sebe_brend_Iskusstvo_samoprezentacii_m_Rarri_Bekvit_Kristin_Bekvit_36345dbe51.jpg',
      },
      {
        url: '/uploads/10442229_0_5d1c5827e4.jpg',
      },
      {
        url: '/uploads/1027828_0_93fce05fab.jpg',
      },
    ],
    categories: ['Бизнес'],
    comments: [
      {
        id: 842,
        rating: 5,
        text: 'Тест',
        createdAt: '2023-03-18T16:06:31.615Z',
        user: {
          commentUserId: 960,
          firstName: 'Докторская',
          lastName: 'Колбаса',
          avatarUrl: null,
        },
      },
      {
        id: 843,
        rating: 5,
        text: 'Тест[копия]',
        createdAt: '2023-03-18T16:07:20.646Z',
        user: {
          commentUserId: 959,
          firstName: 'Имя',
          lastName: 'Фамилия',
          avatarUrl: null,
        },
      },
      {
        id: 844,
        rating: 3,
        text: '',
        createdAt: '2023-03-18T16:10:31.608Z',
        user: {
          commentUserId: 974,
          firstName: 'Vit',
          lastName: 'Vit7',
          avatarUrl: null,
        },
      },
      {
        id: 858,
        rating: 3,
        text: '1212',
        createdAt: '2023-03-18T16:58:04.568Z',
        user: {
          commentUserId: 995,
          firstName: 'Toster123',
          lastName: 'Toster123',
          avatarUrl: null,
        },
      },
    ],
    booking: null,
    delivery: null,
    histories: null,
  };

  const getBook = (book) => {
    cy.intercept('GET', /books\/11/, book).as('book');
  };

  const sliderTests = (width, height) => {
    it('test not foto', () => {
      cy.viewport(width, height);
      getFullData(true);
      getBook(BOOK_NO_IMAGES);
      cy.visit('http://localhost:3000');
      cy.wait(['@books', '@categories', '@me']);
      cy.visit('http://localhost:3000/#/books/all/11');
      cy.wait('@book');
      if (width !== 768) {
        cy.get('[data-test-id=app]').screenshot(`1-slider-no-photo-${width}px`, {
          clip: { x: 0, y: 0, width: width, height: 950 },
        });
      }
    });

    it('slider one foto', () => {
      cy.viewport(width, height);
      getFullData(true);
      getBook(BOOK_ONE_IMAGE);
      cy.visit('http://localhost:3000');
      cy.wait(['@books', '@categories', '@me']);
      cy.visit('http://localhost:3000/#/books/all/11');
      cy.wait('@book');
      if (width !== 320) {
        cy.get('[data-test-id=app]').screenshot(`2-slider-one-photo-${width}px`, {
          clip: { x: 0, y: 0, width: width, height },
        });
      }
    });

    it('slider more two foto', () => {
      cy.viewport(width, height);
      getFullData(true);
      getBook(BOOK_MORETWO_IMAGE);
      cy.visit('http://localhost:3000');
      cy.wait(['@books', '@categories', '@me']);
      cy.visit('http://localhost:3000/#/books/all/11');
      cy.wait('@book');
      if (width !== 320) {
        cy.get('[data-test-id=app]').screenshot(`3-slider-more-two-photo-${width}px`, {
          clip: { x: 0, y: 0, width: width, height },
        });
      }
      cy.get('[data-test-id=slide-big]').screenshot(`4-slider-before-${width}px`);
      if (width !== 1440) {
        cy.get('.swiper-pagination-bullet').eq(1).should('be.exist').click();
      } else {
        cy.get('[data-test-id=slide-mini]').get('.swiper-slide-visible').eq(1).should('be.exist').click();
        cy.get('[data-test-id=slide-big]').screenshot(`5-slider-after-${width}px`);
      }
    });
  };

  describe('slider tests', () => {
    const login = 'Wally123';
    const pass = 'GarrusWally123';

    beforeEach(() => {
      cy.session([login, pass], () => {
        cy.intercept('POST', /local/, USER_AUTH).as('authorize');
        cy.visit('http://localhost:3000/#/auth');
        cy.get('[data-test-id=auth-form] input[name=identifier]').should('be.visible').type(login);
        cy.get('[data-test-id=auth-form] input[name=password]').should('be.visible').type(pass);
        cy.get('[type=submit]').should('be.exist').click();
        cy.wait('@authorize');
        cy.get('[data-test-id=main-page]').should('be.visible');
      });
    });

    it('test layout burger-menu', () => {
      cy.viewport(1440, 900);
      getFullData(true);
      cy.visit('http://localhost:3000');
      cy.wait(['@books', '@categories', '@me']);
      cy.get('[data-test-id=button-burger]').should('not.be.visible');
      cy.get('[data-test-id=app]').screenshot('6-app-1440', {
        clip: { x: 0, y: 0, width: 1440, height: 900 },
      });
    });

    sliderTests(1440, 900);

    it('test navigation view', () => {
      cy.viewport(1440, 900);
      getFullData(true);
      cy.visit('http://localhost:3000');
      cy.wait(['@books', '@categories', '@me']);
      cy.get('[data-test-id=navigation-showcase]').should('be.exist').click();
      cy.get('[data-test-id=navigation-books]').should('not.be.visible');
      cy.get('[data-test-id=navigation-showcase]').click();
      cy.get('[data-test-id=navigation-books]').should('be.visible').should('be.exist');
      cy.get('[data-test-id=navigation-terms]').should('be.exist').click();
      cy.get('[data-test-id=navigation-books]').should('not.be.visible');
    });

    it('test burger-menu', () => {
      cy.viewport(768, 800);
      getFullData(true);
      cy.visit('http://localhost:3000');
      cy.wait(['@books', '@categories', '@me']);
      cy.get('[data-test-id=button-burger]').should('be.visible');
      cy.get('[data-test-id=app]').screenshot('7-app-768px', {
        clip: { x: 0, y: 0, width: 768, height: 1000 },
      });
      cy.get('[data-test-id=button-burger]').should('be.exist').click();
      cy.get('[data-test-id=app]').screenshot('8-app-burger-menu-open-768px', {
        clip: { x: 0, y: 0, width: 768, height: 1000 },
      });
      cy.get('[data-test-id=button-burger]').click();
      cy.get('[data-test-id=app]').screenshot('9-app -burger-menu-close-768px', {
        clip: { x: 0, y: 0, width: 768, height: 1000 },
      });
      cy.get('[data-test-id=button-burger]').click();
      cy.get('[data-test-id=app]').click('right', { force: true });
      cy.get('[data-test-id=app]').screenshot('10-app-burger-menu-close-click-not-burger-menu-768px', {
        clip: { x: 0, y: 0, width: 1440, height: 1000 },
      });
    });

    sliderTests(768, 800);

    it('test navigation view', () => {
      cy.viewport(768, 800);
      getFullData(true);
      cy.visit('http://localhost:3000');
      cy.wait(['@books', '@categories', '@me']);
      cy.get('[data-test-id=button-burger]').click();
      cy.get('[data-test-id=burger-showcase]').should('be.exist').click();
      cy.get('[data-test-id=burger-books]').should('not.be.visible');
      cy.get('[data-test-id=burger-showcase]').click();
      cy.get('[data-test-id=burger-books]').should('be.visible').should('be.exist');
      cy.get('[data-test-id=burger-terms]').should('be.exist').click();
      cy.get('[data-test-id=burger-books]').should('not.be.visible');
    });

    it('test layout burger-menu', () => {
      cy.viewport(320, 600);
      getFullData(true);
      cy.visit('http://localhost:3000');
      cy.wait(['@books', '@categories', '@me']);
      cy.get('[data-test-id=button-burger]').should('be.visible');
      cy.get('[data-test-id=app]').screenshot('11-app-320px', {
        clip: { x: 0, y: 0, width: 320, height: 600 },
      });
      cy.get('[data-test-id=button-burger]').click();
      cy.get('[data-test-id=app]').screenshot('12-app-burger-menu-open-320px', {
        clip: { x: 0, y: 0, width: 320, height: 600 },
      });
      cy.get('[data-test-id=button-burger]').click();
      cy.get('[data-test-id=app]').screenshot('13-app-burger-menu-close-320px', {
        clip: { x: 0, y: 0, width: 320, height: 600 },
      });
      cy.get('[data-test-id=button-burger]').click();
      cy.get('[data-test-id=app]').click('right', { force: true });
      cy.get('[data-test-id=app]').screenshot('14-app-burger-menu-close-click-not-burger-menu-320px', {
        clip: { x: 0, y: 0, width: 320, height: 600 },
      });
    });

    sliderTests(320, 600);

    it('test search', () => {
      cy.viewport(320, 600);
      getFullData();
      cy.visit('http://localhost:3000');
      cy.wait(['@books', '@categories', '@me']);
      cy.get('[data-test-id=input-search]').should('not.be.visible');
      cy.get('[data-test-id=button-search-open]').should('be.exist').click();
      cy.get('[data-test-id=input-search]').should('be.visible');
      cy.get('[data-test-id=button-search-close]').should('be.exist').click();
      cy.get('[data-test-id=input-search]').should('not.be.visible');
    });
  });
});

describe('Sprint 3', () => {
  describe('Get books test', () => {
    const login = 'Wally123';
    const pass = 'GarrusWally123';

    beforeEach(() => {
      cy.session([login, pass], () => {
        cy.intercept('POST', /local/, USER_AUTH).as('authorize');
        cy.visit('http://localhost:3000/#/auth');
        cy.get('[data-test-id=auth-form] input[name=identifier]').should('be.visible').type(login);
        cy.get('[data-test-id=auth-form] input[name=password]').should('be.visible').type(pass);
        cy.get('[type=submit]').should('be.exist').click();
        cy.wait('@authorize');
        cy.get('[data-test-id=main-page]').should('be.visible');
      });
    });
    describe('getCategoriesAndBooks', () => {
      beforeEach(() => {
        getFullData();

        cy.viewport('macbook-16');
      });

      it('categories-loading', () => {
        cy.visit(`http://localhost:3000`);
        cy.get('[data-test-id=loader]').should('be.exist');
        cy.wait(['@books', '@categories', '@me']);
        cy.get('[data-test-id=card]').eq(137).should('be.exist');
      });
    });

    describe('getSuccessBookId', () => {
      beforeEach(() => {
        getFullData();
        cy.intercept('https://strapi.cleverland.by/api/books/2', BOOK_2).as('get-books-success-id');
        cy.viewport('macbook-16');
      });

      it('bookId-success', () => {
        cy.visit(`http://localhost:3000/#/books/all/2`);
        cy.get('[data-test-id=loader]').should('be.exist');
        cy.wait('@get-books-success-id');
        cy.get('[data-test-id=app]').contains('Так говорили мудрецы. Афоризмы');
      });
    });

    describe('ErrorMain', () => {
      beforeEach(() => {
        cy.intercept(/users\/me/, USER_FULL_DATA).as('me');
        cy.intercept('https://strapi.cleverland.by/api/categories', {
          statusCode: 404,
        }).as('get-categories-error');
        cy.intercept('https://strapi.cleverland.by/api/books', {
          statusCode: 404,
        }).as('get-books-error');
        cy.viewport('macbook-16');
      });

      it('main-error', () => {
        cy.visit(`http://localhost:3000`);
        cy.wait(['@get-categories-error', '@get-books-error', '@me']);
        cy.get('[data-test-id=error]').should('be.exist');
      });
    });

    describe('ErrorBookId', () => {
      beforeEach(() => {
        getFullData();
        cy.intercept('https://strapi.cleverland.by/api/books/2', {
          statusCode: 404,
        }).as('get-bookId-error');
        cy.viewport('macbook-16');
      });

      it('bookId-error', () => {
        cy.visit(`http://localhost:3000/#/books/all/2`);
        cy.wait(['@categories', '@me']);
        cy.wait('@get-bookId-error');
        cy.get('[data-test-id=error]').should('be.exist');
      });
    });
  });
});

describe('Sprint 4', () => {
  describe('search and sort', () => {
    const login = 'Wally123';
    const pass = 'GarrusWally123';

    beforeEach(() => {
      cy.session([login, pass], () => {
        cy.intercept('POST', /local/, USER_AUTH).as('authorize');
        cy.visit('http://localhost:3000/#/auth');
        cy.get('[data-test-id=auth-form] input[name=identifier]').should('be.visible').type(login);
        cy.get('[data-test-id=auth-form] input[name=password]').should('be.visible').type(pass);
        cy.get('[type=submit]').should('be.exist').click();
        cy.wait('@authorize');
        cy.get('[data-test-id=main-page]').should('be.visible');
      });
    });

    describe('search', () => {
      beforeEach(() => {
        cy.viewport(1440, 900);
        getFullData();
        cy.visit('http://localhost:3000');
        cy.wait(['@categories', '@books', '@me']);
      });
      it('caret color should be rgb(248, 54, 0)', () => {
        cy.get('[data-test-id=input-search]').focus().should('have.css', 'caret-color', 'rgb(248, 54, 0)');
      });

      it('placeholder value should be "Поиск книги или автора…"', () => {
        cy.get('[data-test-id=input-search]')
          .invoke('attr', 'placeholder')
          .should('contain', 'Поиск книги или автора…');
      });

      it('find book', () => {
        cy.get('[data-test-id=input-search]').type('грокаем аЛгОрИ').should('have.value', 'грокаем аЛгОрИ');
        cy.get('[data-test-id=card]').should('have.length', 1);
        cy.get('[data-test-id=highlight-matches]').should('have.text', 'Грокаем алгори');
        cy.get('[data-test-id=highlight-matches]').should('have.css', 'color', 'rgb(255, 82, 83)');
      });

      it('find books', () => {
        cy.get('[data-test-id=input-search]').clear().should('have.value', '');
        cy.get('[data-test-id=input-search]').type('сТрАтЕг').should('have.value', 'сТрАтЕг');
        cy.get('[data-test-id=card]').should('have.length', 2);
        cy.get('[data-test-id=highlight-matches]').each((item) => {
          expect(item.text()).equal('стратег');
        });
        cy.get('[data-test-id=highlight-matches]').each((item) => {
          expect(item).to.have.css('color', 'rgb(255, 82, 83)');
        });
      });

      it('search result not found', () => {
        cy.get('[data-test-id=input-search]').clear().should('have.value', '');
        cy.get('[data-test-id=input-search]').type('ggdsbsdbd').should('have.value', 'ggdsbsdbd');
        cy.get('[data-test-id=search-result-not-found]').should('have.text', 'По запросу ничего не найдено');
      });

      it('clearing search input', () => {
        cy.get('[data-test-id=input-search]').clear().should('have.value', '');
        cy.get('[data-test-id=card]').should('have.length', 138);
      });
    });

    describe('sort', () => {
      beforeEach(() => {
        cy.viewport(1440, 900);
        getFullData();
        cy.visit('http://localhost:3000');
        cy.wait(['@categories', '@books', '@me']);
      });

      it('sort should be desc', () => {
        cy.get('[data-test-id=card]').first().should('include.text', 'Homo Deus');
      });

      it('sort should be asc', () => {
        cy.get('[data-test-id=sort-rating-button]').should('include.text', 'По рейтингу').click();
        cy.get('[data-test-id=card]').last().should('include.text', 'Homo Deus');
      });
    });

    describe('category change', () => {
      beforeEach(() => {
        cy.viewport(1440, 900);
        getFullData();
        cy.visit('http://localhost:3000');
        cy.wait(['@categories', '@books', '@me']);
      });
      it('active category should be programming', () => {
        cy.get('[data-test-id=navigation-programming]').should('have.text', 'Программирование').click();
        cy.hash().should('match', /programming/);
        cy.get('[data-test-id=navigation-book-count-for-programming]')
          .invoke('text')
          .then(parseFloat)
          .then((item) => {
            cy.get('[data-test-id=card]').should('have.length', item);
          });
      });

      it('active category should be design', () => {
        cy.get('[data-test-id=navigation-design]').should('have.text', 'Дизайн').click();
        cy.hash().should('match', /design/);
        cy.get('[data-test-id=navigation-book-count-for-design]')
          .invoke('text')
          .then(parseFloat)
          .then((item) => {
            cy.get('[data-test-id=card]').should('have.length', item);
          });
      });

      it('active category is empty', () => {
        cy.get('[data-test-id=navigation-other]').should('have.text', 'Другое').click();
        cy.get('[data-test-id=navigation-book-count-for-other]').invoke('text').then(parseFloat).should('eq', 0);
        cy.get('[data-test-id=empty-category]')
          .should('be.visible')
          .should('have.text', 'В этой категории книг ещё нет');
      });
    });

    describe('search on mobile', () => {
      beforeEach(() => {
        cy.viewport(320, 600);
        getFullData();
        cy.visit('http://localhost:3000');
        cy.wait(['@categories', '@books', '@me']);
      });

      it('open/close input', () => {
        cy.get('[data-test-id=button-search-open]').click();
        cy.get('[data-test-id=input-search]').type('грокаем аЛгОрИт').should('have.value', 'грокаем аЛгОрИт');
        cy.get('[data-test-id=button-search-close]').click();
        cy.get('[data-test-id=input-search]').should('have.value', 'грокаем аЛгОрИт');
        cy.get('[data-test-id=card]').should('have.length', 1);
        cy.get('[data-test-id=highlight-matches]').should('have.text', 'Грокаем алгорит');
        cy.get('[data-test-id=highlight-matches]').should('have.css', 'color', 'rgb(255, 82, 83)');
        cy.get('[data-test-id=button-search-open]').click();
        cy.get('[data-test-id=input-search]').clear().should('have.value', '');
        cy.get('[data-test-id=card]').should('have.length', 138);
        cy.get('[data-test-id=input-search]').type('ggdsbsdbd').should('have.value', 'ggdsbsdbd');
        cy.get('[data-test-id=search-result-not-found]').should('have.text', 'По запросу ничего не найдено');
      });
    });

    describe('bread crumbs', () => {
      describe('desktop', () => {
        beforeEach(() => {
          getFullData();
          cy.intercept('/api/books/127').as('bookId127');
          cy.intercept('/api/books/92').as('bookId92');
          cy.visit('http://localhost:3000');
          cy.wait(['@categories', '@books', '@me']);
          cy.viewport(1440, 900);
        });

        it('transfer from programming category to book page', () => {
          cy.get('[data-test-id=navigation-programming]').should('have.text', 'Программирование').click();
          cy.get('[data-test-id=card]').first().click();
          cy.wait('@bookId127');
          cy.hash().should('match', /programming\/127/);
          cy.get('[data-test-id=breadcrumbs-link]').should('have.text', 'Программирование');
          cy.get('[data-test-id=book-name]')
            .invoke('text')
            .then((bookName) => {
              cy.get('[data-test-id=book-title]').should('have.text', bookName);
            });
          cy.get('[data-test-id=breadcrumbs-link]').click();
          cy.wait('@books');
          cy.hash().should('match', /programming/);
          cy.get('[data-test-id=navigation-book-count-for-programming]')
            .invoke('text')
            .then(parseFloat)
            .then((item) => {
              cy.get('[data-test-id=card]').should('have.length', item);
            });
        });

        it('transfer from all books category to book page', () => {
          cy.get('[data-test-id=navigation-books]').should('have.text', 'Все книги').click();
          cy.get('[data-test-id=card]').first().click();
          cy.wait('@bookId92');
          cy.hash().should('match', /all\/92/);
          cy.get('[data-test-id=breadcrumbs-link]').should('have.text', 'Все книги');
          cy.get('[data-test-id=book-name]')
            .invoke('text')
            .then((bookName) => {
              cy.get('[data-test-id=book-title]').should('have.text', bookName);
            });
          cy.get('[data-test-id=breadcrumbs-link]').click();
          cy.wait('@books');
          cy.hash().should('match', /all/);
          cy.get('[data-test-id=card]').should('have.length', 138);
        });
      });

      describe('tablet', () => {
        beforeEach(() => {
          getFullData();
          cy.intercept('/api/books/127').as('bookId127');
          cy.intercept('/api/books/92').as('bookId92');
          cy.visit('http://localhost:3000');
          cy.wait(['@categories', '@books', '@me']);
          cy.viewport(768, 800);
        });

        it('transfer from programming category to book page', () => {
          cy.get('[data-test-id=button-burger]').should('be.exist').click();
          cy.get('[data-test-id=burger-programming]').should('have.text', 'Программирование').click();
          cy.get('[data-test-id=card]').first().click();
          cy.wait('@bookId127');
          cy.get('[data-test-id=breadcrumbs-link]').should('have.text', 'Программирование');
          cy.get('[data-test-id=book-name]')
            .invoke('text')
            .then((bookName) => {
              cy.get('[data-test-id=book-title]').should('have.text', bookName);
            });
          cy.get('[data-test-id=breadcrumbs-link]').click();
          cy.wait('@books');
          cy.get('[data-test-id=button-burger]').should('be.exist').click().should('be.visible');
          cy.get('[data-test-id=burger-book-count-for-programming]')
            .invoke('text')
            .then(parseFloat)
            .then((item) => {
              cy.get('[data-test-id=card]').should('have.length', item);
            });
        });

        it('transfer from all books category to book page', () => {
          cy.get('[data-test-id=button-burger]').should('be.exist').click();
          cy.get('[data-test-id=burger-books]').should('have.text', 'Все книги').click();
          cy.get('[data-test-id=card]').first().click();
          cy.wait('@bookId92');
          cy.get('[data-test-id=breadcrumbs-link]').should('have.text', 'Все книги');
          cy.get('[data-test-id=book-name]')
            .invoke('text')
            .then((bookName) => {
              cy.get('[data-test-id=book-title]').should('have.text', bookName);
            });
          cy.get('[data-test-id=breadcrumbs-link]').click();
          cy.wait('@books');
          cy.get('[data-test-id=button-burger]').should('be.exist').click().should('be.visible');
          cy.get('[data-test-id=card]').should('have.length', 138);
        });
      });
    });
  });
});

describe('Sprint 5', () => {
  describe('authorization and registartion', () => {
    beforeEach(() => {
      cy.viewport(1024, 768);
    });

    describe('authorization', () => {
      beforeEach(() => {
        getContent();
        cy.intercept('/api/auth/local').as('authorize');
        cy.visit('http://localhost:3000');
      });
      it('check first loaded page', () => {
        cy.url().should('contain', '/auth');
        cy.contains('Забыли логин или пароль?', { matchCase: false }).click();
        cy.url().should('contain', '/forgot-pass');
        cy.go('back');
        cy.url().should('contain', '/auth');
        cy.visit('http://localhost:3000/#/books/all');
        cy.url().should('contain', '/auth');
      });
      it('success authorization', () => {
        cy.viewport(360, 600);
        let token;
        cy.get('[data-test-id=auth-form] input[name=identifier]').type('Wally123');
        cy.get('[data-test-id=eye-closed]').should('not.be.exist');
        cy.get('[data-test-id=auth-form] input[name=password]').type('GarrusWally123');
        cy.get('[data-test-id=eye-closed]').should('be.exist').click();
        cy.get('[data-test-id=eye-closed]').should('not.be.exist');
        cy.get('[data-test-id=eye-opened]').should('be.exist');
        cy.get('[data-test-id=auth-form]').contains('вход', { matchCase: false }).should('be.enabled').click();
        cy.get('[data-test-id=loader]').should('be.exist');
        cy.wait('@authorize').should(({ request, response }) => {
          token = response.body.jwt;
          assert.deepEqual(request.body, {
            identifier: 'Wally123',
            password: 'GarrusWally123',
          });
        });
        cy.url().should('contain', '/books');
        cy.get('[data-test-id=loader]').should('be.exist');
        cy.wait('@categories').should(({ request }) => {
          expect(request.headers, 'request headers').to.include({
            authorization: `Bearer ${token}`,
          });
        });
        cy.wait('@books').should(({ request }) => {
          expect(request.headers, 'request headers').to.include({
            authorization: `Bearer ${token}`,
          });
        });
        cy.get('[data-test-id=button-burger]').click();
        cy.get('[data-test-id=exit-button]').scrollIntoView().click();
        cy.url().should('contain', '/auth');
      });
      it('redirect authorization', () => {
        cy.get('[data-test-id=auth-form] input[name=identifier]').type('Wally123');
        cy.get('[data-test-id=auth-form] input[name=password]').type('GarrusWally123');
        cy.get('button').contains('вход', { matchCase: false }).should('be.enabled').click();
        cy.wait('@authorize');
        cy.visit('http://localhost:3000/#/auth');
        cy.url().should('contain', '/books/all');
        cy.visit('http://localhost:3000/#/registration');
        cy.url().should('contain', '/books/all');
        cy.visit('http://localhost:3000/#/forgot-pass');
        cy.url().should('contain', '/books/all');
      });
      it('server error authorization', () => {
        cy.intercept('/api/auth/local', {
          delay: 1000,
          statusCode: 500,
        }).as('authorizeError');
        cy.get('[data-test-id=auth-form] input[name=identifier]').type('TestUser1');
        cy.get('[data-test-id=auth-form] input[name=password]').type('Qwerty123');
        cy.get('button').contains('вход', { matchCase: false }).should('be.enabled').click();
        cy.get('[data-test-id=loader]').should('be.exist');
        cy.wait('@authorizeError');
        cy.get('[data-test-id=status-block]:contains("Вход не выполнен")').should('be.visible');
      });
      it('incorrect login or password error', () => {
        cy.intercept('/api/auth/local', {
          delay: 1000,
          statusCode: 400,
        }).as('incorrectLoginOrPasswordError');
        cy.get('[data-test-id=auth-form] input[name=identifier]').type('TestUser1');
        cy.get('[data-test-id=auth-form] input[name=password]').type('Qwerty123');
        cy.get('button').contains('вход', { matchCase: false }).should('be.enabled').click();
        cy.get('[data-test-id=loader]').should('be.exist');
        cy.wait('@incorrectLoginOrPasswordError');
        cy.get('[data-test-id=hint]:contains("Неверный логин или пароль!")')
          .should('be.visible')
          .and('have.css', 'color', 'rgb(244, 44, 79)');
      });
      it('validation', () => {
        cy.get('[data-test-id=auth-form] input[name=identifier]').focus();
        cy.get('[data-test-id=auth-form] input[name=identifier]').blur();
        cy.get('[data-test-id=hint]:contains("Поле не может быть пустым")')
          .should('be.visible')
          .should('have.css', 'color', 'rgb(244, 44, 79)');
        cy.get('[data-test-id=auth-form] input[name=password]').focus();
        cy.get('[data-test-id=auth-form] input[name=password]').blur();
        cy.get('[data-test-id=hint]:contains("Поле не может быть пустым")').should('have.length', 2);
        cy.get('[data-test-id=auth-form] input[name=identifier]').type('TestUser1');
        cy.get('[data-test-id=hint]:contains("Поле не может быть пустым")').should('have.length', 1);
        cy.get('[data-test-id=auth-form] input[name=password]').type('Qwerty123');
        cy.get('[data-test-id=hint]:contains("Поле не может быть пустым")').should('not.exist');
      });
    });
    describe('registration', () => {
      beforeEach(() => {
        cy.visit('http://localhost:3000');
      });
      it('enter to registartion page', () => {
        cy.url().should('contain', '/auth');
        cy.contains('регистрация', { matchCase: false }).click();
        cy.url().should('contain', '/registration');
      });
      it('success registartion', () => {
        cy.intercept('/api/auth/local/register', {
          delay: 1000,
          statusCode: 200,
        }).as('successRegistration');
        cy.url().should('contain', '/auth');
        cy.contains('регистрация', { matchCase: false }).click();
        cy.url().should('contain', '/registration');
        cy.get('[data-test-id=register-form] input[name=username]').type('Test1');
        cy.get('[data-test-id=register-form] input[name=password]').type('Qwerty12');
        cy.contains('следующий шаг', { matchCase: false }).should('be.enabled').click();
        cy.get('[data-test-id=register-form] input[name=firstName]').type('firstName');
        cy.get('[data-test-id=register-form] input[name=lastName]').type('lastName');
        cy.contains('последний шаг', { matchCase: false }).should('be.enabled').click();
        cy.get('[data-test-id=register-form] input[name=phone]').type('441234567');
        cy.get('[data-test-id=register-form] input[name=email]').type('test@gmail.com');
        cy.contains('зарегистрироваться', { matchCase: false }).should('be.enabled').click();
        cy.get('[data-test-id=loader]').should('be.exist');
        cy.wait('@successRegistration');
        cy.get('[data-test-id=status-block]:contains("Регистрация успешна")').should('be.visible');
        cy.get('button').contains('вход', { matchCase: false }).click();
        cy.url().should('contain', '/auth');
      });
      it('already used error registartion', () => {
        cy.intercept('/api/auth/local/register', {
          delay: 1000,
          statusCode: 400,
        }).as('failedRegistration');
        cy.url().should('contain', '/auth');
        cy.contains('регистрация', { matchCase: false }).click();
        cy.url().should('contain', '/registration');
        cy.get('[data-test-id=register-form] input[name=username]').type('Test1');
        cy.get('[data-test-id=register-form] input[name=password]').type('Qwerty12');
        cy.contains('следующий шаг', { matchCase: false }).should('be.enabled').click();
        cy.get('[data-test-id=register-form] input[name=firstName]').type('firstName');
        cy.get('[data-test-id=register-form] input[name=lastName]').type('lastName');
        cy.contains('последний шаг', { matchCase: false }).should('be.enabled').click();
        cy.get('[data-test-id=register-form] input[name=phone]').type('441234567');
        cy.get('[data-test-id=register-form] input[name=email]').type('test@gmail.com');
        cy.contains('зарегистрироваться', { matchCase: false }).should('be.enabled').click();
        cy.get('[data-test-id=loader]').should('be.exist');
        cy.wait('@failedRegistration');
        cy.get(
          '[data-test-id=status-block]:contains("Такой логин или e-mail уже записан в системе. Попробуйте зарегистрироваться по другому логину или e-mail")'
        ).should('be.visible');
        cy.contains('назад к регистрации', { matchCase: false }).click();
        cy.url().should('contain', '/registration');
      });
      it('error registartion', () => {
        cy.intercept('/api/auth/local/register', {
          delay: 1000,
          statusCode: 500,
          body: {
            data: null,
            error: {
              status: 500,
              name: 'ApplicationError',
              message: 'error',
              details: {},
            },
          },
        }).as('failedRegistration');
        cy.url().should('contain', '/auth');
        cy.contains('регистрация', { matchCase: false }).click();
        cy.url().should('contain', '/registration');
        cy.get('[data-test-id=register-form] input[name=username]').type('Test1');
        cy.get('[data-test-id=register-form] input[name=password]').type('Qwerty12');
        cy.contains('следующий шаг', { matchCase: false }).should('be.enabled').click();
        cy.get('[data-test-id=register-form] input[name=firstName]').type('firstName');
        cy.get('[data-test-id=register-form] input[name=lastName]').type('lastName');
        cy.contains('последний шаг', { matchCase: false }).should('be.enabled').click();
        cy.get('[data-test-id=register-form] input[name=phone]').type('441234567');
        cy.get('[data-test-id=register-form] input[name=email]').type('test@gmail.com');
        cy.contains('зарегистрироваться', { matchCase: false }).should('be.enabled').click();
        cy.get('[data-test-id=loader]').should('be.exist');
        cy.wait('@failedRegistration');
        cy.get(
          '[data-test-id=status-block]:contains("Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз")'
        ).should('be.visible');
        cy.contains('повторить', { matchCase: false }).click();
        cy.url().should('contain', '/registration');
      });
      it('validation first step', () => {
        //login
        cy.url().should('contain', '/auth');
        cy.contains('регистрация', { matchCase: false }).click();
        cy.url().should('contain', '/registration');
        cy.get('[data-test-id=checkmark]').should('not.be.exist');
        cy.get('[data-test-id=register-form] input[name=username]').focus();
        cy.get('[data-test-id=register-form] input[name=username]').blur();
        cy.get('[data-test-id=hint]:contains("Поле не может быть пустым")')
          .should('be.visible')
          .and('have.css', 'color', 'rgb(244, 44, 79)');
        cy.get('[data-test-id=register-form] input[name=username]').type('й');
        cy.get('[data-test-id=hint] span:contains("латинский алфавит")')
          .get('[data-test-id=hint] span:contains("цифры")')
          .should('be.visible')
          .and('have.css', 'color', 'rgb(244, 44, 79)');
        cy.get('[data-test-id=register-form] input[name=username]').type('1');
        cy.get('[data-test-id=hint] span:contains("цифры")')
          .should('be.visible')
          .and('have.css', 'color', 'rgb(167, 167, 167)');
        cy.get('[data-test-id=register-form] input[name=username]').blur();
        cy.contains('следующий шаг', { matchCase: false }).should('be.disabled');
        cy.get('[data-test-id=hint]:contains("Используйте для логина латинский алфавит и цифры")')
          .should('be.visible')
          .and('have.css', 'color', 'rgb(244, 44, 79)');
        cy.get('[data-test-id=register-form] input[name=username]').type('{backspace}');
        cy.get('[data-test-id=hint] span:contains("латинский алфавит")')
          .get('[data-test-id=hint] span:contains("цифры")')
          .should('be.visible')
          .and('have.css', 'color', 'rgb(244, 44, 79)');
        cy.get('[data-test-id=register-form] input[name=username]').type('{backspace}');
        cy.get('[data-test-id=hint]:contains("Используйте для логина латинский алфавит и цифры")')
          .should('be.visible')
          .and('have.css', 'color', 'rgb(167, 167, 167)');
        cy.get('[data-test-id=register-form] input[name=username]').type('TestUser1');
        cy.get('[data-test-id=hint]:contains("Используйте для логина латинский алфавит и цифры")')
          .should('be.visible')
          .and('have.css', 'color', 'rgb(167, 167, 167)');
        //password
        cy.get('[data-test-id=register-form] input[name=password]').focus();
        cy.get('[data-test-id=register-form] input[name=password]').blur();
        cy.contains('следующий шаг', { matchCase: false }).should('be.disabled');
        cy.get('[data-test-id=hint]:contains("Поле не может быть пустым")')
          .should('be.visible')
          .should('have.css', 'color', 'rgb(244, 44, 79)');
        cy.get('[data-test-id=register-form] input[name=password]').type('q');
        cy.get('[data-test-id=hint] span:contains("не менее 8 символов")')
          .get('[data-test-id=hint] span:contains("заглавной буквой")')
          .get('[data-test-id=hint] span:contains("цифрой")')
          .should('be.visible')
          .and('have.css', 'color', 'rgb(244, 44, 79)');
        cy.get('[data-test-id=register-form] input[name=password]').type('{backspace}');
        cy.get('[data-test-id=hint]:contains("Используйте для логина латинский алфавит и цифры")')
          .should('be.visible')
          .and('have.css', 'color', 'rgb(167, 167, 167)');
        cy.get('[data-test-id=register-form] input[name=password]').type('Q');
        cy.get('[data-test-id=hint] span:contains("не менее 8 символов")')
          .get('[data-test-id=hint] span:contains("цифрой")')
          .should('be.visible')
          .and('have.css', 'color', 'rgb(244, 44, 79)');
        cy.get('[data-test-id=hint] span:contains("заглавной буквой")')
          .should('be.visible')
          .should('have.css', 'color', 'rgb(167, 167, 167)');
        cy.get('[data-test-id=register-form] input[name=password]').type('werty1');
        cy.get('[data-test-id=hint] span:contains("не менее 8 символов")')
          .should('be.visible')
          .and('have.css', 'color', 'rgb(244, 44, 79)');
        cy.get('[data-test-id=hint] span:contains("заглавной буквой")')
          .get('[data-test-id=hint] span:contains("цифрой")')
          .should('be.visible')
          .should('have.css', 'color', 'rgb(167, 167, 167)');
        cy.get('[data-test-id=register-form] input[name=password]').type('2');
        cy.get('[data-test-id=hint]:contains("Пароль не менее 8 символов, с заглавной буквой и цифрой")')
          .should('be.visible')
          .and('have.css', 'color', 'rgb(167, 167, 167)');
        cy.get('[data-test-id=checkmark]').should('be.exist');
        cy.get('[data-test-id=register-form] input[name=password]').blur();
        cy.contains('следующий шаг', { matchCase: false }).should('be.enabled').click();
      });
      it('validation second step', () => {
        cy.url().should('contain', '/auth');
        cy.contains('регистрация', { matchCase: false }).click();
        cy.url().should('contain', '/registration');
        cy.get('[data-test-id=register-form] input[name=username]').type('Test1');
        cy.get('[data-test-id=register-form] input[name=password]').type('Qwerty12');
        cy.contains('следующий шаг', { matchCase: false }).should('be.enabled').click();
        cy.get('[data-test-id=register-form] input[name=firstName]').focus();
        cy.get('[data-test-id=register-form] input[name=firstName]').blur();
        cy.get('[data-test-id=hint]:contains("Поле не может быть пустым")')
          .should('be.visible')
          .and('have.css', 'color', 'rgb(244, 44, 79)');
        cy.contains('последний шаг', { matchCase: false }).should('be.disabled');
        cy.get('[data-test-id=register-form] input[name=firstName]').type('firstName');
        cy.get('[data-test-id=hint]:contains("Поле не может быть пустым")').should('not.be.exist');
        cy.get('[data-test-id=register-form] input[name=lastName]').focus();
        cy.get('[data-test-id=register-form] input[name=lastName]').blur();
        cy.get('[data-test-id=hint]:contains("Поле не может быть пустым")')
          .should('be.visible')
          .and('have.css', 'color', 'rgb(244, 44, 79)');
        cy.get('[data-test-id=register-form] input[name=lastName]').type('lastName');
        cy.get('[data-test-id=hint]:contains("Поле не может быть пустым")').should('not.be.exist');
        cy.contains('последний шаг', { matchCase: false }).should('be.enabled').click();
      });
      it('validation third step', () => {
        cy.url().should('contain', '/auth');
        cy.contains('регистрация', { matchCase: false }).click();
        cy.url().should('contain', '/registration');
        cy.get('[data-test-id=register-form] input[name=username]').type('Test1');
        cy.get('[data-test-id=register-form] input[name=password]').type('Qwerty12');
        cy.contains('следующий шаг', { matchCase: false }).should('be.enabled').click();
        cy.get('[data-test-id=register-form] input[name=firstName]').type('firstName');
        cy.get('[data-test-id=register-form] input[name=lastName]').type('lastName');
        cy.contains('последний шаг', { matchCase: false }).should('be.enabled').click();
        cy.get('[data-test-id=register-form] input[name=phone]').focus();
        cy.get('[data-test-id=register-form] input[name=phone]').blur();
        cy.get('[data-test-id=hint]:contains("Поле не может быть пустым")')
          .should('be.visible')
          .and('have.css', 'color', 'rgb(244, 44, 79)');
        cy.contains('зарегистрироваться', { matchCase: false }).should('be.disabled');
        cy.get('[data-test-id=register-form] input[name=phone]').type('44');
        cy.get('[data-test-id=register-form] input[name=phone]').should('have.value', '+375 (44) xxx-xx-xx');
        cy.get('[data-test-id=register-form] input[name=phone]').blur();
        cy.get('[data-test-id=hint]:contains("В формате +375 (xx) xxx-xx-xx")')
          .should('be.visible')
          .and('have.css', 'color', 'rgb(244, 44, 79)');
        cy.get('[data-test-id=register-form] input[name=phone]').type('ма Ю><.!kjm|-+*jhQ');
        cy.get('[data-test-id=register-form] input[name=phone]').should('have.value', '+375 (44) xxx-xx-xx');
        cy.get('[data-test-id=register-form] input[name=phone]').blur();
        cy.get('[data-test-id=hint]:contains("В формате +375 (xx) xxx-xx-xx")')
          .should('be.visible')
          .and('have.css', 'color', 'rgb(244, 44, 79)');
        cy.get('[data-test-id=register-form] input[name=phone]').clear().type('440000000');
        cy.get('[data-test-id=register-form] input[name=phone]').should('have.value', '+375 (44) 000-00-00');
        cy.get('[data-test-id=hint]:contains("В формате +375 (xx) xxx-xx-xx")').should(
          'have.css',
          'color',
          'rgb(167, 167, 167)'
        );
        cy.get('[data-test-id=register-form] input[name=phone]').type('0000000');
        cy.get('[data-test-id=register-form] input[name=phone]').should('have.value', '+375 (44) 000-00-00');
        cy.get('[data-test-id=hint]:contains("В формате +375 (xx) xxx-xx-xx")').should(
          'have.css',
          'color',
          'rgb(167, 167, 167)'
        );
        cy.get('[data-test-id=register-form] input[name=email]').focus();
        cy.get('[data-test-id=register-form] input[name=email]').blur();
        cy.get('[data-test-id=hint]:contains("Поле не может быть пустым")')
          .should('be.visible')
          .and('have.css', 'color', 'rgb(244, 44, 79)');
        cy.contains('зарегистрироваться', { matchCase: false }).should('be.disabled');
        cy.get('[data-test-id=register-form] input[name=email]').type('йцс');
        cy.get('[data-test-id=register-form] input[name=email]').blur();
        cy.get('[data-test-id=hint]:contains("Введите корректный e-mail")')
          .should('be.visible')
          .and('have.css', 'color', 'rgb(244, 44, 79)');
        cy.get('[data-test-id=register-form] input[name=email]').type('testgmail.co,');
        cy.get('[data-test-id=register-form] input[name=email]').blur();
        cy.get('[data-test-id=hint]:contains("Введите корректный e-mail")')
          .should('be.visible')
          .and('have.css', 'color', 'rgb(244, 44, 79)');
        cy.get('[data-test-id=register-form] input[name=email]').clear().type('test@gmail.com');
        cy.get('[data-test-id=register-form] input[name=email]').blur();
        cy.contains('зарегистрироваться', { matchCase: false }).should('be.enabled');
      });
    });
    describe('password recovery', () => {
      beforeEach(() => {
        cy.visit('http://localhost:3000');
      });
      it('go to recovery page', () => {
        cy.url().should('contain', '/auth');
        cy.contains('забыли логин или пароль', { matchCase: false }).click();
        cy.url().should('contain', '/forgot-pass');
      });
      it('success forgot password', () => {
        cy.visit('http://localhost:3000/#/forgot-pass');
        cy.intercept('/api/auth/forgot-password', {
          delay: 1000,
          statusCode: 200,
        }).as('successSendEmail');
        cy.get('[data-test-id=send-email-form] input[name=email]').type('test@gmail.com');
        cy.contains('восстановить', { matchCase: false }).should('be.enabled').click();
        cy.get('[data-test-id=loader]').should('be.exist');
        cy.wait('@successSendEmail');
        cy.get('[data-test-id=status-block]:contains("Письмо выслано")').should('be.visible');
      });
      it('error forgot password', () => {
        cy.visit('http://localhost:3000/#/forgot-pass');
        cy.intercept('/api/auth/forgot-password', {
          delay: 1000,
          statusCode: 500,
          body: {
            data: null,
            error: {
              status: 500,
              name: 'ApplicationError',
              message: 'error',
              details: {},
            },
          },
        }).as('errorSendEmail');
        cy.get('[data-test-id=send-email-form] input[name=email]').type('test@gmail.com');
        cy.contains('восстановить', { matchCase: false }).should('be.enabled').click();
        cy.get('[data-test-id=loader]').should('be.exist');
        cy.wait('@errorSendEmail');
        cy.get('[data-test-id=hint]:contains("error")')
          .should('be.visible')
          .and('have.css', 'color', 'rgb(244, 44, 79)');
      });
      it('forgot password validation', () => {
        cy.visit('http://localhost:3000/#/forgot-pass');
        cy.get('[data-test-id=send-email-form] input[name=email]').focus();
        cy.get('[data-test-id=send-email-form] input[name=email]').blur();
        cy.get('[data-test-id=hint]:contains("Поле не может быть пустым")')
          .should('be.visible')
          .and('have.css', 'color', 'rgb(244, 44, 79)');
        cy.get('[data-test-id=send-email-form] input[name=email]').type('йцс');
        cy.get('[data-test-id=send-email-form] input[name=email]').blur();
        cy.get('[data-test-id=hint]:contains("Введите корректный e-mail")')
          .should('be.visible')
          .and('have.css', 'color', 'rgb(244, 44, 79)');
        cy.get('[data-test-id=send-email-form] input[name=email]').type('testgmail.co,');
        cy.get('[data-test-id=send-email-form] input[name=email]').blur();
        cy.get('[data-test-id=hint]:contains("Введите корректный e-mail")')
          .should('be.visible')
          .and('have.css', 'color', 'rgb(244, 44, 79)');
        cy.get('[data-test-id=send-email-form] input[name=email]').clear().type('test@gmail.com');
        cy.get('[data-test-id=send-email-form] input[name=email]').blur();
      });
      it('success reset password', () => {
        cy.intercept('/api/auth/reset-password', {
          delay: 1000,
          statusCode: 200,
        }).as('successReset');
        cy.visit('http://localhost:3000/#/forgot-pass?code=somecode');
        cy.get('[data-test-id=reset-password-form] input[name=password]').type('Qwerty123');
        cy.get('[data-test-id=reset-password-form] input[name=passwordConfirmation]').type('Qwerty123');
        cy.contains('сохранить изменения', { matchCase: false }).click();
        cy.get('[data-test-id=loader]').should('be.exist');
        cy.wait('@successReset');
        cy.get('[data-test-id=status-block]:contains("Новые данные сохранены")').should('be.visible');
        cy.get('button').contains('вход', { matchCase: false }).click();
        cy.url().should('contain', '/auth');
      });
      it('error reset password', () => {
        cy.intercept('/api/auth/reset-password', {
          delay: 1000,
          statusCode: 500,
          body: {
            data: null,
            error: {
              status: 500,
              name: 'ApplicationError',
              message: 'error',
              details: {},
            },
          },
        }).as('errorReset');
        cy.visit('http://localhost:3000/#/forgot-pass?code=somecode');
        cy.get('[data-test-id=reset-password-form] input[name=password]').type('Qwerty123');
        cy.get('[data-test-id=reset-password-form] input[name=passwordConfirmation]').type('Qwerty123');
        cy.contains('сохранить изменения', { matchCase: false }).click();
        cy.get('[data-test-id=loader]').should('be.exist');
        cy.wait('@errorReset');
        cy.get('[data-test-id=status-block]:contains("Данные не сохранились")').should('be.visible');
      });
      it('reset password validation', () => {
        cy.visit('http://localhost:3000/#/forgot-pass?code=somecode');
        cy.get('[data-test-id=checkmark]').should('not.be.exist');
        cy.get('[data-test-id=reset-password-form] input[name=password]').focus();
        cy.get('[data-test-id=reset-password-form] input[name=password]').blur();
        cy.get('[data-test-id=hint]:contains("Поле не может быть пустым")')
          .should('be.visible')
          .should('have.css', 'color', 'rgb(244, 44, 79)');
        cy.get('[data-test-id=reset-password-form] input[name=password]').type('q');
        cy.get('[data-test-id=hint] span:contains("не менее 8 символов")')
          .get('[data-test-id=hint] span:contains("заглавной буквой")')
          .get('[data-test-id=hint] span:contains("цифрой")')
          .should('be.visible')
          .and('have.css', 'color', 'rgb(244, 44, 79)');
        cy.get('[data-test-id=reset-password-form] input[name=password]').type('{backspace}');
        cy.get('[data-test-id=hint]:contains("Пароль не менее 8 символов, с заглавной буквой и цифрой")')
          .should('be.visible')
          .and('have.css', 'color', 'rgb(167, 167, 167)');
        cy.get('[data-test-id=reset-password-form] input[name=password]').type('Q');
        cy.get('[data-test-id=hint] span:contains("не менее 8 символов")')
          .get('[data-test-id=hint] span:contains("цифрой")')
          .should('be.visible')
          .and('have.css', 'color', 'rgb(244, 44, 79)');
        cy.get('[data-test-id=hint] span:contains("заглавной буквой")')
          .should('be.visible')
          .should('have.css', 'color', 'rgb(167, 167, 167)');
        cy.get('[data-test-id=reset-password-form] input[name=password]').type('werty1');
        cy.get('[data-test-id=hint] span:contains("не менее 8 символов")')
          .should('be.visible')
          .and('have.css', 'color', 'rgb(244, 44, 79)');
        cy.get('[data-test-id=hint] span:contains("заглавной буквой")')
          .get('[data-test-id=hint] span:contains("цифрой")')
          .should('be.visible')
          .should('have.css', 'color', 'rgb(167, 167, 167)');
        cy.get('[data-test-id=reset-password-form] input[name=password]').type('2');
        cy.get('[data-test-id=hint]:contains("Пароль не менее 8 символов, с заглавной буквой и цифрой")')
          .should('be.visible')
          .and('have.css', 'color', 'rgb(167, 167, 167)');
        cy.get('[data-test-id=checkmark]').should('be.exist');
        cy.get('[data-test-id=reset-password-form] input[name=password]').blur();
        cy.get('[data-test-id=hint]:contains("Пароль не менее 8 символов, с заглавной буквой и цифрой")')
          .should('be.visible')
          .and('have.css', 'color', 'rgb(167, 167, 167)');
        cy.get('[data-test-id=reset-password-form] input[name=passwordConfirmation]').focus();
        cy.get('[data-test-id=reset-password-form] input[name=passwordConfirmation]').blur();
        cy.get('[data-test-id=hint]:contains("Поле не может быть пустым")')
          .should('be.visible')
          .should('have.css', 'color', 'rgb(244, 44, 79)');
        cy.get('[data-test-id=reset-password-form] input[name=passwordConfirmation]').type('Qwerty');
        cy.get('[data-test-id=reset-password-form] input[name=passwordConfirmation]').blur();
        cy.get('[data-test-id=hint]:contains("Пароли не совпадают")')
          .should('be.visible')
          .should('have.css', 'color', 'rgb(244, 44, 79)');
        cy.contains('сохранить изменения', { matchCase: false }).should('be.disabled');
        cy.get('[data-test-id=reset-password-form] input[name=passwordConfirmation]').type('123');
        cy.get('[data-test-id=hint]:contains("Пароли не совпадают")').should('not.be.exist');
        cy.contains('сохранить изменения', { matchCase: false }).should('be.enabled');
        cy.get('[data-test-id=checkmark]').should('have.length', 1);
      });
    });
  });
});

describe('Sprint 6', () => {
  const myId = 8;
  const myName = 'Фёдор';
  const myLastName = 'Сумкин';
  const myBooking = {
    id: 7,
    order: true,
    dateOrder: '2023-01-19T00:00:00.000Z',
    customerId: myId,
    customerFirstName: myName,
    customerLastName: myLastName,
  };
  const myCommentText = 'Новый коммент выше...';

  const CATEGORIES = [
    {
      name: 'Зарубежная литература',
      path: 'business',
      id: 1,
    },
    {
      name: 'Компьютерная литература',
      path: 'business2',
      id: 2,
    },
  ];

  const USER = {
    jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNjY2NTQ0MzI5LCJleHAiOjE2NjkxMzYzMjl9.erLicGJGH5wttjAF6xDWMcxDJOIJvEnFLFzuMVzUkSU',
    user: {
      id: myId,
      username: 'pihoozzz',
      email: 'psioozzz@tut.by',
      provider: 'local',
      confirmed: true,
      blocked: false,
      createdAt: '2022-10-23T16:58:49.851Z',
      updatedAt: '2022-10-23T16:58:49.851Z',
      firstName: myName,
      lastName: myLastName,
      phone: '+375 (33) 333-33-33',
    },
  };

  const USER_ME = {
    id: myId,
    username: 'pihoozzz',
    email: 'psioozzz@tut.by',
    provider: 'local',
    confirmed: true,
    blocked: false,
    createdAt: '2022-10-23T16:58:49.851Z',
    updatedAt: '2022-10-23T16:58:49.851Z',
    firstName: myName,
    lastName: myLastName,
    phone: '+375 (33) 333-33-33',
  };

  const BOOK_INFO_ITEM = {
    id: 1,
    title: 'Книга 1',
    rating: 2,
    issueYear: '2019',
    description:
      'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?\nОткройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.',
    publish: 'Питер',
    pages: '288',
    cover: 'Мягкая обложка',
    weight: '370',
    format: '70х100',
    ISBN: '978-5-4461-0923-4',
    producer: 'ООО «Питер Мейл». РФ, 198206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29',
    authors: ['Адитья Бхаргава'],
    images: null,
    categories: ['Зарубежная литература', 'Компьютерная литература'],
    comments: [
      {
        id: 1,
        rating: 2,
        text: '... Старый коммент ниже',
        createdAt: '2022-10-23T12:23:13.012Z',
        user: {
          commentUserId: 6,
          firstName: 'Агент',
          lastName: 'Смит',
          avatarUrl: null,
        },
      },
    ],
    booking: {
      id: 7,
      order: true,
      dateOrder: '2022-10-24T00:00:00.000Z',
      customerId: 6,
      customerFirstName: 'Агент',
      customerLastName: 'Смит',
    },
    delivery: null,
    histories: [
      {
        id: 1,
        userId: 7,
      },
    ],
  };

  const BASE_BOOKS_ITEM = {
    issueYear: '2019',
    rating: 2,
    title: 'Книга 1',
    authors: ['Адитья Бхаргава'],
    image: null,
    categories: ['Зарубежная литература', 'Компьютерная литература'],
    id: 1,
    booking: {
      id: 7,
      order: true,
      dateOrder: '2022-10-24T00:00:00.000Z',
      customerId: 6,
      customerFirstName: 'Агент',
      customerLastName: 'Смит',
    },
    delivery: null,
    histories: [
      {
        id: 1,
        userId: 7,
      },
    ],
  };

  const BOOK_INFO_PAGES = [
    { ...BOOK_INFO_ITEM, booking: null },
    { ...BOOK_INFO_ITEM, id: 2, title: 'Книга 2' },
    { ...BOOK_INFO_ITEM, id: 3, title: 'Книга 3', booking: myBooking, delivery: null },
    {
      ...BOOK_INFO_ITEM,
      id: 4,
      title: 'Книга 4',
      booking: null,
      delivery: {
        id: 7,
        handed: true,
        dateHandedFrom: '2023-01-24T00:00:00.000Z',
        dateHandedTo: '2023-01-28T00:00:00.000Z',
        recipientId: 6,
        recipientFirstName: 'Агент',
        recipientLastName: 'Смит',
      },
    },
  ];

  const BOOKS_LIST_BASE = [
    { ...BASE_BOOKS_ITEM, booking: null },
    { ...BASE_BOOKS_ITEM, id: 2, title: 'Книга 2' },
    {
      ...BASE_BOOKS_ITEM,
      id: 3,
      booking: myBooking,
      delivery: null,
      title: 'Книга 3',
    },
    {
      ...BASE_BOOKS_ITEM,
      id: 4,
      title: 'Книга 4',
      booking: null,
      delivery: {
        id: 7,
        handed: true,
        dateHandedFrom: '2023-01-24T00:00:00.000Z',
        dateHandedTo: '2023-01-28T00:00:00.000Z',
        recipientId: 6,
        recipientFirstName: 'Агент',
        recipientLastName: 'Смит',
      },
    },
  ];

  const BOOKS_LIST_AFTER_BOOKING = BOOKS_LIST_BASE.map((item, ind) =>
    ind === 0 ? { ...BOOKS_LIST_BASE[0], booking: myBooking } : item
  );

  const BOOKS_LIST_AFTER_EDIT_BOOKING = BOOKS_LIST_BASE.map((item, ind) =>
    ind === 2
      ? {
          ...BOOKS_LIST_BASE[2],
          booking: { ...myBooking, dateOrder: '2023-01-20T00:00:00.000Z' },
        }
      : item
  );

  const BOOKS_LIST_AFTER_DELETE_BOOKING = BOOKS_LIST_BASE.map((item, ind) =>
    ind === 2
      ? {
          ...BOOKS_LIST_BASE[2],
          booking: null,
        }
      : item
  );

  const BOOK_INFO_PAGE_AFTER_COMMENT = {
    ...BOOK_INFO_ITEM,
    booking: null,
    rating: 3,
    comments: [
      ...BOOK_INFO_ITEM.comments,
      {
        id: 2,
        rating: 4,
        text: myCommentText,
        createdAt: '2023-01-19T00:00:00.000Z',
        user: {
          commentUserId: myId,
          firstName: myName,
          lastName: myLastName,
          avatarUrl: null,
        },
      },
    ],
  };

  const BOOKING_RESPONSE = {
    id: 5,
    attributes: {
      order: true,
      dateOrder: '2023-01-19T00:00:00.000Z',
      book: '1',
      customer: myId,
    },
  };

  const BOOKING_UPDATE_RESPONSE = {
    data: {
      id: 7,
      attributes: {
        order: true,
        createdAt: '2023-01-19T00:00:00.000Z',
        updatedAt: '2023-01-20T00:00:00.000Z',
        publishedAt: '2023-01-20T00:00:00.000Z',
        dateOrder: '2023-01-20T00:00:00.000Z',
      },
    },
    meta: {},
  };

  const BOOK_RATE_RESPONSE = {
    data: {
      id: 9,
      attributes: {
        rating: 4,
        text: myCommentText,
        createdAt: '2023-01-19T00:00:00.000Z',
        updatedAt: '2023-01-19T00:00:00.000Z',
        publishedAt: '2023-01-19T00:00:00.000Z',
      },
    },
    meta: {},
  };

  const BOOKING_DELETE_RESPONSE = { ...BOOKING_UPDATE_RESPONSE };

  const dayDisabledColor = 'rgb(167, 167, 167)';
  const dayColor = 'rgb(54, 54, 54)';
  const todayColor = 'rgb(248, 54, 0)';
  const transparent = 'rgba(0, 0, 0, 0)';
  const weekendBg = 'rgb(254, 235, 234)';
  const dayActive = 'rgb(255, 255, 255)';
  const successColor = 'rgb(235, 249, 241)';
  const orangeGradient = 'linear-gradient(231.58deg, rgb(248, 54, 0) -53.35%, rgb(249, 212, 35) 297.76%)';

  const getContentnBooking = () => {
    cy.intercept('/api/categories', CATEGORIES).as('categories');
    cy.intercept('/api/books', BOOKS_LIST_BASE).as('books');
    cy.intercept('GET', /users\/me/, USER_ME).as('me');
  };

  const authorize = () => {
    cy.viewport('macbook-16');
    cy.intercept('/api/auth/local', USER).as('authorize');
    const login = 'TestUser1';
    const pass = 'Qwerty123';

    cy.session([login, pass], () => {
      cy.visit('http://localhost:3000/#/auth');
      cy.get('[data-test-id=auth-form] input[name=identifier]').should('be.visible').type(login);
      cy.get('[data-test-id=auth-form] input[name=password]').should('be.visible').type(pass);
      cy.get('[type=submit]').should('be.exist').click();
      cy.get('[data-test-id=main-page]').should('be.visible');
      cy.wait('@authorize');
    });
  };

  const openBookPage = (bookName) => {
    cy.contains('[data-test-id=card]', bookName).click();
  };

  const checkBookingCardButton = (
    bookName = '',
    isDisabled = false,
    btnText = '',
    colorText = 'rgb(255, 255, 255)'
  ) => {
    cy.contains('[data-test-id=card]', bookName)
      .find('[data-test-id=booking-button]')
      .should(isDisabled ? 'be.disabled' : 'be.enabled')
      .contains(btnText, { matchCase: false })
      .and('have.css', 'color', colorText);
  };

  const checkBookingButton = (bookId, isDisabled = false, btnText = '', colorText = 'rgb(255, 255, 255)') => {
    cy.intercept(`https://strapi.cleverland.by/api/books/${bookId}`, {
      body: BOOK_INFO_PAGES[bookId - 1],
      statusCode: 200,
    }).as(`book${bookId}`);
    cy.visit(`http://localhost:3000/#/books/all/${bookId}`);
    cy.get('[data-test-id=booking-button]')
      .should(isDisabled ? 'be.disabled' : 'be.enabled')
      .contains(btnText, { matchCase: false })
      .and('have.css', 'color', colorText);
  };

  const openBookingModal = (isEdit = false) =>
    cy
      .contains('[data-test-id=card]', isEdit ? 'Книга 3' : 'Книга 1', { matchCase: false })
      .find('[data-test-id=booking-button]')
      .click();

  const openRateModal = () => {
    cy.get('[data-test-id=button-rate-book]').click();
  };

  const closeModal = () => cy.get('[data-test-id=modal-outer]').find('[data-test-id=modal-close-button]').click();

  const setDate = (year, month, day) => cy.clock().invoke('setSystemTime', new Date(year, month, day));

  const checkCalendarDayColor = (dayNum, expectColor, expectBackground, isGradient) => {
    cy.get('[data-test-id=booking-modal]')
      .find('[data-test-id=day-button]')
      .contains(dayNum)
      .as('day')
      .should('have.css', 'color')
      .and('eq', expectColor);
    if (expectBackground) {
      cy.get('@day')
        .should('have.css', isGradient ? 'background-image' : 'background-color')
        .and('eq', expectBackground);
    }
  };
  const clickDay = (dayNum, isForce) =>
    cy
      .get('[data-test-id=booking-modal]')
      .find('[data-test-id=day-button]')
      .contains(dayNum)
      .click(isForce && { force: true });

  const checkModalElements = (isEdit = false, isRateModal = false) => {
    cy.get('[data-test-id=modal-outer]').as('outer');
    cy.get(`[data-test-id=${isRateModal ? 'modal-rate-book' : 'booking-modal'}]`)
      .as('modal')
      .should('exist');
    cy.get('@modal').find('[data-test-id=modal-close-button]').as('close');
    cy.get('@modal')
      .find('[data-test-id=modal-title]')
      .as('title')
      .contains(isRateModal ? 'оцените книгу' : isEdit ? 'Изменение даты бронирования' : 'выбор даты бронирования', {
        matchCase: false,
      });

    if (isRateModal) {
      cy.get('@modal').find('[data-test-id=rating]').as('rating').should('exist');
      cy.get('@rating').find('[data-test-id=star]').should('have.length', 5);
      cy.get('@modal').find('[data-test-id=comment]').should('exist');
      cy.get('@modal')
        .find('[data-test-id=button-comment]')
        .should('be.enabled')
        .contains('оценить', { matchCase: false });
    } else {
      cy.get('@modal').find('[data-test-id=calendar]');
      cy.get('@modal').find('[data-test-id=booking-button]').should('be.disabled');
      if (isEdit) {
        cy.get('@modal').find('[data-test-id=booking-cancel-button]').should('be.enabled');
      }
    }

    cy.get('@title').click();
    cy.get('@outer').should('exist');
    cy.viewport(400, 600);
    cy.get('@outer');
    cy.get('@close').click();
    cy.get('@outer').should('not.exist');
    cy.viewport('macbook-16');
    if (isRateModal) {
      openRateModal();
    } else {
      openBookingModal(isEdit);
    }
    cy.get('@outer').click('topLeft');
    cy.get('@outer').should('not.exist');
  };

  const checkAlert = (text, isSuccess) => {
    cy.get('[data-test-id=error]').should('be.exist').contains(text, { matchCase: false });
    cy.get('[data-test-id=error]')
      .should('have.css', 'background-color')
      .and('eq', isSuccess ? successColor : weekendBg);
  };

  const checkCloseAlert = (isByTimeOut = false) => {
    if (isByTimeOut) {
      cy.tick(5000);
      cy.get('[data-test-id=error]').should('not.exist');
    } else {
      cy.get('[data-test-id=error] [data-test-id=alert-close]').should('be.visible').click({ force: true });
      cy.get('[data-test-id=error]').should('not.exist');
    }
  };

  const checkBookingRequest = (isSuccess, isEdit, doScreenshot = true) => {
    cy.intercept(isEdit ? '/api/bookings/*' : '/api/bookings', {
      method: isEdit ? 'PUT' : 'POST',
      statusCode: isSuccess ? 200 : 400,
      body: isSuccess ? (isEdit ? BOOKING_UPDATE_RESPONSE : BOOKING_RESPONSE) : null,
      delay: 2000,
    }).as('sendBooking');
    // if change data by req
    if (!isSuccess) {
      cy.intercept('/api/books', BOOKS_LIST_BASE).as('booksOld');
    } else {
      if (isEdit) {
        cy.intercept('/api/books', BOOKS_LIST_AFTER_EDIT_BOOKING);
      } else {
        cy.intercept('/api/books', BOOKS_LIST_AFTER_BOOKING);
      }
    }

    cy.get('[data-test-id=booking-modal]').find('[data-test-id=booking-button]').should('be.enabled').click();
    cy.get('[data-test-id=loader]').should('be.exist');
    cy.wait('@sendBooking')
      .its('request.body')
      .should('have.property', 'data')
      .then((data) => {
        expect(data.book.toString()).eq(isEdit ? '3' : '1');
        expect(data.customer.toString()).eq(`${myId}`);
        expect(data.dateOrder.toString()).to.include('2023-01-20T');
        expect(data.order.toString()).eq(`true`);
      });

    if (doScreenshot) {
      cy.wait(2500);
    }

    if (isEdit) {
      if (isSuccess) {
        checkAlert('Изменения успешно сохранены!', isSuccess);
      } else {
        checkAlert('Изменения не были сохранены. Попробуйте позже!', isSuccess);
      }
    } else {
      if (isSuccess) {
        checkAlert('Книга забронирована. Подробности можно посмотреть на странице Профиль', isSuccess);
      } else {
        checkAlert('Что-то пошло не так, книга не забронирована. Попробуйте позже!', isSuccess);
      }
    }
    cy.get('[data-test-id=error]')
      .should('have.css', 'background-color')
      .and('eq', isSuccess ? successColor : weekendBg);
    cy.get('[data-test-id=booking-modal]').should('not.exist');
    if (!isEdit && isSuccess) {
      checkBookingCardButton('Книга 1', false, 'забронирована', dayColor);
    }
    checkCloseAlert(true);
  };

  const checkCancelBookingRequest = (isSuccess) => {
    cy.intercept('/api/bookings/*', {
      method: 'DELETE',
      statusCode: isSuccess ? 200 : 400,
      body: isSuccess ? BOOKING_DELETE_RESPONSE : null,
      delay: 2000,
    }).as('sendBookingCancel');
    // if req for update
    if (isSuccess) {
      cy.intercept('/api/books', BOOKS_LIST_AFTER_DELETE_BOOKING);
    } else {
      cy.intercept('/api/books', BOOKS_LIST_BASE);
    }

    cy.get('[data-test-id=booking-cancel-button]')
      .should('be.enabled')
      .contains('отменить бронь', { matchCase: false })
      .click();

    if (isSuccess) {
      checkAlert('Бронирование книги успешно отменено!', isSuccess);
    } else {
      checkAlert('Не удалось снять бронирование книги. Попробуйте позже!', isSuccess);
    }
    checkCloseAlert();
    if (isSuccess) {
      checkBookingCardButton('Книга 3', false, 'забронировать', dayActive);
    }
  };

  const checkRateBookRequest = (isSuccess) => {
    cy.intercept('/api/comments', {
      method: 'POST',
      statusCode: isSuccess ? 200 : 400,
      body: isSuccess ? BOOK_RATE_RESPONSE : null,
      delay: 2000,
    }).as('sendRating');
    // if change data by req
    if (isSuccess) {
      cy.intercept('api/books/*', BOOK_INFO_PAGE_AFTER_COMMENT);
      cy.intercept('api/books*', BOOK_INFO_PAGE_AFTER_COMMENT);
    } else {
      cy.intercept('api/books/*', BOOK_INFO_PAGES[0]);
    }
    cy.get('[data-test-id=comment]').type(myCommentText);
    if (isSuccess) {
      cy.get('[data-test-id=modal-rate-book]');
    }
    cy.get('[data-test-id=button-comment]').should('be.enabled').click();
    cy.get('[data-test-id=loader]').should('be.exist');
    cy.wait('@sendRating')
      .its('request.body')
      .should('have.property', 'data')
      .then((data) => {
        expect(data.book.toString()).eq('1');
        expect(data.rating.toString()).eq('4');
        expect(data.user.toString()).eq(`${myId}`);
        expect(data.text).eq(myCommentText);
      });
    checkCloseAlert();
  };

  const checkStarsRating = (parentDataId, expectStars, nthParent = 0) => {
    cy.get(`[data-test-id=${parentDataId}]`).eq(nthParent).find('[data-test-id=rating]').as('rating');
    cy.get('@rating').find('[data-test-id=star-active]').should('have.length', expectStars);
  };

  const selectStarsRate = (starNumSelect, doScreenshot) => {
    cy.get(`[data-test-id=modal-rate-book]`).find('[data-test-id=rating]').as('rating');
    cy.get('@rating')
      .find('[data-test-id=star]')
      .eq(starNumSelect - 1)
      .click();
    checkStarsRating('modal-rate-book', starNumSelect);
    if (doScreenshot) {
      cy.get(`[data-test-id=modal-rate-book]`);
    }
  };

  describe('booking and book rate', () => {
    describe('booking buttons view', () => {
      beforeEach(() => {
        authorize();
        getContentnBooking();
        cy.visit('http://localhost:3000/#/books/all');
      });
      it('check buttons on book info pages', () => {
        checkBookingButton(1, false, 'забронировать', 'rgb(255, 255, 255)');
        checkBookingButton(2, true, 'забронирована', 'rgb(167, 167, 167)');
        checkBookingButton(3, false, 'забронирована', 'rgb(54, 54, 54)');
        checkBookingButton(4, true, 'занята до 28.01', 'rgb(167, 167, 167)');
      });
      it('check booking button active (no user)', () => {
        cy.wait(['@me', '@categories', '@books']);
        checkBookingCardButton('Книга 1', false, 'забронировать', 'rgb(255, 255, 255)');
      });
      it('check booking edit button active (booked by current user)', () => {
        cy.wait(['@me', '@categories', '@books']);
        checkBookingCardButton('Книга 3', false, 'забронирована', 'rgb(54, 54, 54)');
      });
      it('check booking button disabled (already booked)', () => {
        cy.wait(['@me', '@categories', '@books']);
        checkBookingCardButton('Книга 2', true, 'забронирована', 'rgb(167, 167, 167)');
      });
      it('check booking button disabled (on delivery)', () => {
        cy.wait(['@me', '@categories', '@books']);
        checkBookingCardButton('Книга 4', true, 'занята до 28.01', 'rgb(167, 167, 167)');
        cy.get('[data-test-id=content]');
      });
    });

    describe('booking modal', () => {
      beforeEach(() => {
        const testDate = new Date(2023, 0, 19).getTime();
        cy.clock(testDate);
        authorize();
        getContentnBooking();
        setDate(2023, 0, 19);
        cy.visit('http://localhost:3000/#/books/all');
      });
      it('check booking modal elements', () => {
        cy.wait(['@me', '@categories', '@books']);
        openBookingModal();
        checkModalElements();
      });
      it('check calendar header', () => {
        cy.wait(['@me', '@categories', '@books']);
        openBookingModal();
        cy.get('[data-test-id=booking-modal]').as('modal').should('exist');
        cy.get('@modal').find('[data-test-id=calendar]').as('calendar');
        cy.get('[data-test-id=month-select]');
        cy.get('@calendar').find('[data-test-id=button-prev-month]').click();
        cy.get('[data-test-id="day-button"]').should('have.length', 35).and('have.css', 'color', dayDisabledColor);
        cy.get('@calendar').find('[data-test-id=button-next-month]').click().click();
        cy.get('@calendar').find('[data-test-id=button-prev-month]').click();
      });
      it('check calendar days', () => {
        cy.wait(['@me', '@categories', '@books']);
        openBookingModal();
        checkCalendarDayColor('18', dayDisabledColor, transparent);
        checkCalendarDayColor('19', todayColor, transparent);
        checkCalendarDayColor('20', dayColor, transparent);
        checkCalendarDayColor('21', dayDisabledColor, weekendBg);
        checkCalendarDayColor('15', dayDisabledColor, weekendBg);
      });
      it('check calendar days (on friday)', () => {
        cy.wait(['@me', '@categories', '@books']);
        openBookingModal();
        closeModal();
        setDate(2023, 0, 20);
        openBookingModal();
        checkCalendarDayColor('20', todayColor, transparent);
        checkCalendarDayColor('21', dayDisabledColor, weekendBg);
        checkCalendarDayColor('23', dayColor, transparent);
        cy.get('[data-test-id=calendar]');
      });
      it('check calendar days (on saturday)', () => {
        cy.wait(['@me', '@categories', '@books']);
        openBookingModal();
        closeModal();
        setDate(2023, 0, 21);
        openBookingModal();
        checkCalendarDayColor('20', dayDisabledColor, transparent);
        checkCalendarDayColor('21', todayColor, weekendBg);
        checkCalendarDayColor('23', dayColor, transparent);
        cy.get('[data-test-id=calendar]');
      });
      it('check calendar days (on sunday)', () => {
        cy.wait(['@me', '@categories', '@books']);
        openBookingModal();
        closeModal();
        setDate(2023, 0, 22);
        openBookingModal();
        checkCalendarDayColor('20', dayDisabledColor, transparent);
        checkCalendarDayColor('21', dayDisabledColor, weekendBg);
        checkCalendarDayColor('22', todayColor, weekendBg);
        checkCalendarDayColor('23', dayColor, transparent);
        cy.get('[data-test-id=calendar]');
      });
      it('check calendar days (select day)', () => {
        cy.wait(['@me', '@categories', '@books']);
        openBookingModal();
        closeModal();
        setDate(2023, 0, 20);
        openBookingModal();
        clickDay('21', true);
        checkCalendarDayColor('21', dayDisabledColor, weekendBg);
        cy.get('[data-test-id=booking-button]').should('be.disabled');
        clickDay('20');
        checkCalendarDayColor('20', dayActive, orangeGradient, true);
        cy.get('[data-test-id=booking-button]').should('be.enabled');
        cy.get('[data-test-id=booking-modal]');
        checkBookingRequest(false, false);
      });

      it('check booking request success', () => {
        openBookingModal();
        clickDay('20');
        checkBookingRequest(true, false);
      });
    });

    describe('booking edit modal', () => {
      beforeEach(() => {
        const testDate = new Date(2023, 0, 19).getTime();
        cy.clock(testDate);
        authorize();
        getContentnBooking();
        setDate(2023, 0, 19);
        cy.visit('http://localhost:3000/#/books/all');
      });
      it('check booking edit elements', () => {
        cy.wait(['@me', '@books', '@categories']);
        openBookingModal(true);
        checkModalElements(true);
      });
      it('check booking edit modal calendar days', () => {
        cy.wait(['@me', '@books', '@categories']);
        openBookingModal(true);
        checkCalendarDayColor('19', dayActive, orangeGradient, true);
        clickDay('17', true);
        checkCalendarDayColor('17', dayDisabledColor, transparent);
        clickDay('22', true);
        checkCalendarDayColor('22', dayDisabledColor, weekendBg);
        cy.get('[data-test-id=booking-modal]')
          .find('[data-test-id=booking-button]')
          .as('submitEdit')
          .should('be.disabled')
          .contains('забронировать', { matchCase: false });
        clickDay('20');
        checkCalendarDayColor('20', dayActive, orangeGradient, true);
        checkCalendarDayColor('19', todayColor, transparent);
        cy.get('@submitEdit').should('be.enabled');
        cy.get('[data-test-id=modal-outer]').wait(200);
        checkBookingRequest(false, true, false);
      });

      it('check edit booking request success', () => {
        cy.wait(['@me', '@books', '@categories']);
        openBookingModal(true);
        clickDay('20');
        checkBookingRequest(true, true, false);
        openBookingModal(true);
        checkCalendarDayColor('20', dayActive, orangeGradient, true);
        cy.get('[data-test-id=booking-modal]').find('[data-test-id=booking-button]').should('be.disabled');
        checkCancelBookingRequest(false);
      });
      it('check cancel booking success', () => {
        cy.wait(['@me', '@books', '@categories']);
        openBookingModal(true);
        checkCancelBookingRequest(true);
      });
    });

    describe('books rating', () => {
      beforeEach(() => {
        getContentnBooking();
        authorize();
      });
      it('check rate modal elements', () => {
        cy.intercept(`https://strapi.cleverland.by/api/books/1`, {
          body: BOOK_INFO_PAGES[0],
          statusCode: 200,
        }).as(`book1`);
        cy.visit('http://localhost:3000/#/books/all');
        cy.wait(['@me', '@categories', '@books']);
        openBookPage('Книга 1');
        openRateModal();
        checkModalElements(false, true);
        openRateModal();
        selectStarsRate(2);
        selectStarsRate(1);
        selectStarsRate(3);
        selectStarsRate(5);
        selectStarsRate(4);
        selectStarsRate(4);

        checkRateBookRequest(false);

        openRateModal();
        selectStarsRate(4);
        checkRateBookRequest(true);

        cy.get('[data-test-id=comment-wrapper]').eq(0).as('comment');
        cy.get('@comment').find('[data-test-id=comment-author]').contains(`${myName} ${myLastName}`);
        cy.get('@comment').find('[data-test-id=comment-date]').contains('19 января 2023');
        checkStarsRating('comment-wrapper', 4);
        cy.get('[data-test-id=reviews]');
      });
    });
  });
});

describe('Sprint 7', () => {
  const login = 'Wally13';
  const pass = 'GarrusWally13';

  describe('profile page', () => {
    it('screenshots', () => {
      cy.intercept('POST', /local/).as('authorize');
      cy.intercept('GET', /books/).as('books');
      cy.intercept('GET', /categories/).as('categories');
      cy.intercept('GET', /me/).as('me');
      cy.visit('http://localhost:3000/#/auth');
      cy.get('[data-test-id=auth-form] input[name=identifier]').should('be.visible').type('Wally123');
      cy.get('[data-test-id=auth-form] input[name=password]').should('be.visible').type('GarrusWally123');
      cy.get('[data-test-id=auth-form] [type=submit]').should('be.exist').click();
      cy.wait(['@books', '@me', '@categories', '@authorize'], { responseTimeout: 30000 });
      cy.get('[data-test-id=main-page]').should('be.visible');
      cy.get('[data-test-id=profile-button]').should('be.exist').invoke('show').click({ force: true });
      cy.viewport(1440, 900);
      cy.wait(5000);
      cy.get('[data-test-id=app]').screenshot('15-1440-profile-page');

      cy.viewport(768, 576);
      cy.get('[data-test-id=app]').screenshot('16-768-profile-page');

      cy.viewport(320, 240);
      cy.get('[data-test-id=app]').screenshot('17-320-profile-page');
    });
  });

  describe('Profile functions tests', () => {
    beforeEach(() => {
      cy.session([login, pass], () => {
        cy.intercept('POST', /local/, USER_AUTH).as('authorize');
        cy.visit('http://localhost:3000/#/auth');
        cy.get('[data-test-id=auth-form] input[name=identifier]').should('be.visible').type(login);
        cy.get('[data-test-id=auth-form] input[name=password]').should('be.visible').type(pass);
        cy.get('[type=submit]').should('be.exist').click();
        cy.wait('@authorize');
        cy.get('[data-test-id=main-page]').should('be.visible');
      });
      cy.viewport(1440, 900);
    });

    describe('profile avatar tests', () => {
      it('screenshots', () => {
        cy.intercept('GET', /books/, BOOKS).as('books');
        cy.intercept('GET', /categories/, CATEGORIES).as('categories');
        cy.intercept('GET', /me/, USER_FULL_DATA).as('me');
        cy.visit('http://localhost:3000/#/profile');
        cy.wait(['@books', '@categories', '@me']);

        cy.get('[data-test-id=profile-avatar]')
          .contains('Фамилия', { matchCase: false })
          .should('have.css', 'font-size', '52px')
          .should('have.css', 'font-weight', '500');
        cy.get('[data-test-id=profile-avatar]')
          .contains('Имя', { matchCase: false })
          .should('have.css', 'font-size', '52px')
          .should('have.css', 'font-weight', '500');
        cy.viewport(768, 900);
        cy.get('[data-test-id=profile-avatar]')
          .contains('Фамилия', { matchCase: false })
          .should('have.css', 'font-size', '52px')
          .should('have.css', 'font-weight', '500');
        cy.get('[data-test-id=profile-avatar]')
          .contains('Имя', { matchCase: false })
          .should('have.css', 'font-size', '52px')
          .should('have.css', 'font-weight', '500');
        cy.viewport(320, 800);
        cy.get('[data-test-id=profile-avatar]')
          .contains('Фамилия', { matchCase: false })
          .should('have.css', 'font-size', '26px')
          .should('have.css', 'font-weight', '500');
        cy.get('[data-test-id=profile-avatar]')
          .contains('Имя', { matchCase: false })
          .should('have.css', 'font-size', '26px')
          .should('have.css', 'font-weight', '500');
      });
    });

    describe('avatar upload tests', () => {
      it('upload success', () => {
        getFullData();
        cy.intercept('POST', /upload/, UPLOAD).as('upload');
        cy.intercept('PUT', /users/, USER_AVATAR_CHANGED).as('user');
        cy.visit('http://localhost:3000/#/profile');
        cy.wait(['@books', '@me', '@categories']);
        cy.get('[data-test-id=profile-avatar]').screenshot('18-profile-avatar-before');
        cy.get('[data-test-id=profile-avatar]')
          .find('input[type=file]')
          .should('be.exist')
          .selectFile('cypress/fixtures/cypress.jpg', { force: true });
        cy.wait(['@user', '@upload']);
        cy.get('[data-test-id=error]').should('be.visible').contains('Фото успешно сохранено!', { matchCase: false });
        cy.wait(10000);
        cy.get('[data-test-id=profile-avatar]').screenshot('19-profile-avatar-after');
      });

      it('user fail', () => {
        getFullData();
        cy.intercept('POST', /upload/, UPLOAD).as('upload');
        cy.intercept('PUT', /users/, { statusCode: 400 }).as('user');
        cy.visit('http://localhost:3000/#/profile');
        cy.wait(['@books', '@me', '@categories']);
        cy.get('[type=file]').should('be.exist').selectFile('cypress/fixtures/cypress.jpg', { force: true });
        cy.wait(['@user', '@upload']);
        cy.get('[data-test-id=error]')
          .should('be.exist')
          .contains('Что-то пошло не так, фото не сохранилось. Попробуйте позже!', {
            matchCase: false,
          });
      });

      it('upload fail', () => {
        getFullData();
        cy.intercept('POST', /upload/, { statusCode: 400 }).as('upload');
        cy.visit('http://localhost:3000/#/profile');
        cy.wait(['@books', '@me', '@categories']);
        cy.get('[type=file]').should('be.exist').selectFile('cypress/fixtures/cypress.jpg', { force: true });
        cy.wait('@upload');
        cy.get('[data-test-id=error]')
          .should('be.exist')
          .contains('Что-то пошло не так, фото не сохранилось. Попробуйте позже!', {
            matchCase: false,
          });
      });
    });

    const formTest = (width, heigth) => {
      cy.viewport(width, heigth);
      cy.get('[data-test-id=profile-form] input[name=login]').should('be.visible').should('be.disabled');
      cy.get('[data-test-id=profile-form] input[name=firstName]').should('be.visible').should('be.disabled');
      cy.get('[data-test-id=profile-form] input[name=lastName]').should('be.visible').should('be.disabled');
      cy.get('[data-test-id=profile-form] input[name=password]').should('be.visible').should('be.disabled');
      cy.get('[data-test-id=profile-form] input[name=phone]').should('be.visible').should('be.disabled');
      cy.get('[data-test-id=profile-form] input[name=email]').should('be.visible').should('be.disabled');
      cy.get('[data-test-id=save-button]')
        .should('be.visible')
        .should('be.disabled')
        .should('have.css', 'border-radius', '30px')
        .should('have.css', 'background-color', 'rgb(235, 235, 235)')
        .contains('Сохранить изменения', { matchCase: false })
        .should('have.css', 'text-transform', 'uppercase');

      cy.get('[data-test-id=edit-button]')
        .should('be.visible')
        .should('be.enabled')
        .should('have.css', 'border', '1px solid rgb(191, 196, 201)')
        .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        .contains('Редактировать', { matchCase: false })
        .should('have.css', 'text-transform', 'uppercase')
        .click();

      cy.get('[data-test-id=profile-form] input[name=login]').should('be.visible').should('be.enabled');
      cy.get('[data-test-id=profile-form] input[name=firstName]').should('be.visible').should('be.enabled');
      cy.get('[data-test-id=profile-form] input[name=lastName]').should('be.visible').should('be.enabled');
      cy.get('[data-test-id=profile-form] input[name=password]').should('be.visible').should('be.enabled');
      cy.get('[data-test-id=profile-form] input[name=phone]').should('be.visible').should('be.enabled');
      cy.get('[data-test-id=profile-form] input[name=email]').should('be.visible').should('be.enabled');
      cy.get('[data-test-id=save-button]')
        .should('be.visible')
        .should('be.enabled')
        .should('have.css', 'border-radius', '30px')
        .contains('Сохранить изменения', { matchCase: false })
        .should('have.css', 'text-transform', 'uppercase');

      cy.get('[data-test-id=edit-button]')
        .should('be.visible')
        .should('be.enabled')
        .should('have.css', 'border', '1px solid rgb(191, 196, 201)')
        .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        .contains('Редактировать')
        .should('have.css', 'text-transform', 'uppercase')
        .click();

      cy.get('[data-test-id=profile-form] input[name=login]').should('be.visible').should('be.disabled');
      cy.get('[data-test-id=profile-form] input[name=firstName]').should('be.visible').should('be.disabled');
      cy.get('[data-test-id=profile-form] input[name=lastName]').should('be.visible').should('be.disabled');
      cy.get('[data-test-id=profile-form] input[name=password]').should('be.visible').should('be.disabled');
      cy.get('[data-test-id=profile-form] input[name=phone]').should('be.visible').should('be.disabled');
      cy.get('[data-test-id=profile-form] input[name=email]').should('be.visible').should('be.disabled');
      cy.get('[data-test-id=save-button]')
        .should('be.visible')
        .should('be.disabled')
        .should('have.css', 'border-radius', '30px')
        .should('have.css', 'background-color', 'rgb(235, 235, 235)')
        .contains('Сохранить изменения', { matchCase: false })
        .should('have.css', 'text-transform', 'uppercase');

      cy.get('[data-test-id=edit-button]')
        .should('be.visible')
        .should('be.enabled')
        .should('have.css', 'border-radius', '30px')
        .should('have.css', 'border', '1px solid rgb(191, 196, 201)')
        .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        .contains('Редактировать')
        .should('have.css', 'text-transform', 'uppercase', { matchCase: false })
        .click();

      cy.get('[data-test-id=profile-form] input[name=login]').clear().blur();
      cy.get('[data-test-id=hint]')
        .eq(0)
        .should('be.visible')
        .contains('Поле не может быть пустым', { matchCase: false })
        .should('have.css', 'color', 'rgb(244, 44, 79)')
        .should('have.css', 'font-weight', '500')
        .should('have.css', 'font-size', '12px')
        .should('have.css', 'letter-spacing', '0.2px');
      cy.get('[data-test-id=profile-form] input[name=firstName]').clear().blur();
      cy.get('[data-test-id=profile-form] input[name=lastName]').clear().blur();
      cy.get('[data-test-id=profile-form] input[name=password]').clear().blur();
      cy.get('[data-test-id=hint]')
        .should('be.visible')
        .eq(1)
        .should('be.visible')
        .contains('Поле не может быть пустым', { matchCase: false })
        .should('have.css', 'color', 'rgb(244, 44, 79)')
        .should('have.css', 'font-weight', '500')
        .should('have.css', 'font-size', '12px')
        .should('have.css', 'letter-spacing', '0.2px');
      cy.get('[data-test-id=profile-form] input[name=phone]').clear().blur();
      cy.get('[data-test-id=profile-form] input[name=email]').clear().blur();
      cy.get('[data-test-id=hint]')
        .should('be.visible')
        .eq(5)
        .should('be.visible')
        .contains('Поле не может быть пустым', { matchCase: false })
        .should('have.css', 'color', 'rgb(244, 44, 79)')
        .should('have.css', 'font-weight', '500')
        .should('have.css', 'font-size', '12px')
        .should('have.css', 'letter-spacing', '0.2px');
      cy.get('[data-test-id=profile-form] input[name=login]').clear().type('Кириллица').blur();
      cy.get('[data-test-id=hint]')
        .should('be.visible')
        .eq(0)
        .should('be.visible')
        .contains('Используйте для логина латинский алфавит и цифры', { matchCase: false })
        .should('have.css', 'color', 'rgb(244, 44, 79)')
        .should('have.css', 'font-weight', '500')
        .should('have.css', 'font-size', '12px')
        .should('have.css', 'letter-spacing', '0.2px');
      cy.get('[data-test-id=profile-form] input[name=password]')
        .clear()
        .type('не правильный пароль', { matchCase: false })
        .blur();
      cy.get('[data-test-id=hint]')
        .should('be.visible')
        .eq(1)
        .should('be.visible')
        .contains('Пароль не менее 8 символов, с заглавной буквой и цифрой', {
          matchCase: false,
        })
        .should('have.css', 'font-weight', '500')
        .should('have.css', 'font-size', '12px')
        .should('have.css', 'letter-spacing', '0.2px')
        .should('have.css', 'color', 'rgb(244, 44, 79)');
      cy.get('[data-test-id=profile-form] input[name=phone]').clear().type('+').blur();
      cy.get('[data-test-id=profile-form] input[name=phone]').should('have.value', '+375 (xx) xxx-xx-xx');
      cy.get('[data-test-id=profile-form] input[name=phone]').clear().type('+335353').blur();
      cy.get('[data-test-id=profile-form] input[name=phone]').should('have.value', '+375 (33) 535-3x-xx');
      cy.get('[data-test-id=hint]')
        .should('be.visible')
        .eq(4)
        .should('be.visible')
        .contains('В формате +375 (xx) xxx-xx-xx', { matchCase: false })
        .should('have.css', 'font-weight', '500')
        .should('have.css', 'font-size', '12px')
        .should('have.css', 'letter-spacing', '0.2px')
        .should('have.css', 'color', 'rgb(244, 44, 79)');
      cy.get('[data-test-id=profile-form] input[name=email]').clear().type('incorrectmail.ru').blur();
      cy.get('[data-test-id=hint]')
        .should('be.visible')
        .eq(5)
        .should('be.visible')
        .contains('Введите корректный e-mail', { matchCase: false })
        .should('have.css', 'font-weight', '500')
        .should('have.css', 'font-size', '12px')
        .should('have.css', 'letter-spacing', '0.2px')
        .should('have.css', 'color', 'rgb(244, 44, 79)');

      cy.get('[data-test-id=profile-form] input[name=login]').clear().type('ValidateName123').blur();
      cy.get('[data-test-id=profile-form] input[name=firstName]').clear().type('Igor').blur();
      cy.get('[data-test-id=profile-form] input[name=lastName]').clear().type('Shidlovsky').blur();
      cy.get('[data-test-id=profile-form] input[name=password]').clear().type('ValidatePassword123').blur();
      cy.get('[data-test-id=profile-form] input[name=phone]').clear().type('+335353535').blur();
      cy.get('[data-test-id=profile-form] input[name=email]').clear().type('validate@mail.ru').blur();
    };

    const formTestWorker = () => {
      cy.get('[data-test-id=edit-button]').should('be.visible').should('be.enabled').click();

      cy.get('[data-test-id=profile-form] input[name=login]').clear().type(login).blur();
      cy.get('[data-test-id=profile-form] input[name=firstName]').clear().type('Sprint7TestUserName').blur();
      cy.get('[data-test-id=profile-form] input[name=lastName]').clear().type('Sprint7TestUserLastName').blur();
      cy.get('[data-test-id=profile-form] input[name=password]').clear().type(pass).blur();
      cy.get('[data-test-id=profile-form] input[name=phone]').clear().type('+335353535').blur();
      cy.get('[data-test-id=profile-form] input[name=email]').clear().type('correct@gmail.com').blur();

      cy.get('[data-test-id=save-button]').should('be.visible').should('be.enabled').click();
    };

    const formSendData = (isSuccess) => {
      if (isSuccess) {
        cy.intercept(/users/, { statusCode: 200 }).as('user');
        getFullData();
        cy.visit('http://localhost:3000/#/profile');
        cy.wait(['@books', '@me', '@categories']);

        formTestWorker();

        cy.wait('@user');
        cy.get('[data-test-id=error]')
          .should('be.visible')
          .contains('Изменения успешно сохранены!', { matchCase: false });
      } else {
        cy.intercept('PUT', /users/, { statusCode: 400 }).as('userFail');
        getFullData();
        cy.visit('http://localhost:3000/#/profile');
        cy.wait(['@books', '@me', '@categories']);

        formTestWorker();

        cy.wait('@userFail');
        cy.get('[data-test-id=error]').should('be.visible').contains('Изменения не были сохранены. Попробуйте позже!');
      }
    };

    describe('profile form tests', () => {
      beforeEach(() => {
        getFullData();
        cy.visit('http://localhost:3000/#/profile');
        cy.wait(['@books', '@me', '@categories']);
      });
      it('1440, 900', () => formTest(1440, 900));
      it('768, 576', () => formTest(768, 576));
      it('320, 240', () => formTest(320, 240));
    });

    describe('profile form send tests', () => {
      it('send test success', () => formSendData(true));
      it('send test fail', () => formSendData(false));
    });

    describe('empty-cards', () => {
      it('empty-booking', () => {
        getContent();
        cy.intercept('GET', /me/, USER_NO_BOOKING).as('me');
        cy.visit('http://localhost:3000/#/profile');
        cy.wait(['@books', '@me', '@categories']);
        cy.wait(5000);
        cy.get('[data-test-id=empty-blue-card]')
          .should('be.visible')
          .screenshot('20-1440-profile-empty-card')
          .contains('Забронируйте книгу и она отобразится', { matchCase: false });
        cy.get('[data-test-id=empty-blue-card]').should('have.css', 'background-color').and('eq', 'rgb(110, 118, 241)');
      });
      it('empty-handed', () => {
        getContent();
        cy.intercept('GET', /me/, USER_NO_DELIVERY).as('me');
        cy.visit('http://localhost:3000/#/profile');
        cy.wait(['@books', '@me', '@categories']);
        cy.wait(5000);
        cy.get('[data-test-id=empty-blue-card]')
          .should('be.visible')
          .screenshot('21-1440-profile-empty-card')
          .contains('Прочитав книгу, она отобразится в истории', { matchCase: false });
        cy.get('[data-test-id=empty-blue-card]').should('have.css', 'background-color').and('eq', 'rgb(110, 118, 241)');
      });
      it('empty-history', () => {
        getContent();
        cy.intercept('GET', /me/, USER_NO_HISTORY).as('me');
        cy.visit('http://localhost:3000/#/profile');
        cy.wait(['@books', '@me', '@categories']);
        cy.wait(5000);
        cy.get('[data-test-id=empty-blue-card]')
          .should('be.visible')
          .screenshot('22-1440-profile-empty-card')
          .contains('Вы не читали книг из нашей библиотеки', { matchCase: false });
        cy.get('[data-test-id=empty-blue-card]').should('have.css', 'background-color').and('eq', 'rgb(110, 118, 241)');
      });
    });

    describe('expired', () => {
      it('expired-booking', () => {
        getContent();
        cy.intercept('GET', /me/, USER_EXPIRED_BOOKING).as('me');
        cy.visit('http://localhost:3000/#/profile');
        cy.wait(['@books', '@me', '@categories']);
        cy.get('[data-test-id=expired]')
          .should('be.visible')
          .screenshot('23-1440-profile-expider-card')
          .contains('Дата бронирования книги истекла', { matchCase: false });
        cy.get('[data-test-id=expired]')
          .should('be.visible')
          .contains('Через 24 часа книга будет доступна всем', { matchCase: false });
        cy.get('[data-test-id=expired]').should('have.css', 'background-color').and('eq', 'rgba(255, 82, 83, 0.7)');
      });
      it('expired-handed', () => {
        getContent();
        cy.intercept('GET', /me/, USER_EXPIRED_HANDED).as('me');
        cy.visit('http://localhost:3000/#/profile');
        cy.wait(['@books', '@me', '@categories']);
        cy.get('[data-test-id=expired]')
          .should('be.visible')
          .screenshot('24-1440-profile-empty-card')
          .contains('Вышел срок пользования книги', { matchCase: false });
        cy.get('[data-test-id=expired]')
          .should('be.visible')
          .contains('Верните книгу, пожалуйста', { matchCase: false });
        cy.get('[data-test-id=expired]').should('have.css', 'background-color').and('eq', 'rgba(255, 82, 83, 0.7)');
      });
    });

    describe('cancel-booking', () => {
      it('success', () => {
        cy.intercept('GET', /books/, BOOKS).as('books');
        cy.intercept('GET', /me/, USER_FULL_DATA).as('me');
        cy.intercept('DELETE', /bookings/, { statusCode: 200 }).as('bookings');
        cy.visit('http://localhost:3000/#/profile');
        cy.wait(['@books', '@me']);
        cy.get('[data-test-id=card]').eq(0).should('be.visible');
        cy.get('[data-test-id=cancel-booking-button]').should('be.visible').click({ force: true });
        cy.wait('@bookings');
        cy.get('[data-test-id=error]')
          .should('be.visible')
          .contains('Бронирование книги успешно отменено!', { matchCase: false });
      });
      it('fail', () => {
        cy.intercept('GET', /books/, BOOKS).as('books');
        cy.intercept('GET', /me/, USER_FULL_DATA).as('me');
        cy.intercept('DELETE', /bookings/, { statusCode: 400 }).as('bookings');
        cy.visit('http://localhost:3000/#/profile');
        cy.wait(['@books', '@me']);
        cy.get('[data-test-id=card]').eq(0).should('be.visible');
        cy.get('[data-test-id=cancel-booking-button]').should('be.visible').click({ force: true });
        cy.wait('@bookings');
        cy.get('[data-test-id=error]')
          .should('be.visible')
          .contains('Не удалось снять бронирование книги. Попробуйте позже!');
      });
    });

    describe('delivery-book-test', () => {
      it('has-back-date', () => {
        cy.intercept('GET', /books/, BOOKS).as('books');
        cy.intercept('GET', /me/, USER_FULL_DATA).as('me');
        cy.visit('http://localhost:3000/#/profile');
        cy.wait(['@books', '@me']);
        cy.get('[data-test-id=card]')
          .eq(1)
          .should('be.visible')
          .contains('Возврат 30.03', { matchCase: false })
          .should('have.css', 'color', 'rgb(255, 82, 83)');
      });
    });

    describe('history-tests', () => {
      describe('exist-and-visible', () => {
        it('test', () => {
          getFullData();
          cy.visit('http://localhost:3000/#/profile');
          cy.wait(['@books', '@me', '@categories']);
          cy.get('[data-test-id=history]')
            .should('be.visible')
            .contains('История')
            .should('have.css', 'font-weight', '700')
            .should('have.css', 'font-size', '24px')
            .should('have.css', 'color', 'rgb(54, 54, 54)');
          cy.get('[data-test-id=history]')
            .contains('Список прочитанных книг', { matchCase: false })
            .should('have.css', 'font-weight', '400')
            .should('have.css', 'font-size', '16px')
            .should('have.css', 'color', 'rgb(167, 167, 167)');
          cy.get('[data-test-id=card]').should('be.visible');
          cy.wait(5000);
          cy.get('[data-test-id=history]').screenshot('25-1440-history', {
            clip: { x: 0, y: 0, width: 1440, height: 600 },
          });
        });
      });
      const addReview = (isSuccess) => {
        getFullData();
        cy.intercept('GET', 'https://strapi.cleverland.by/api/books/**', BOOK_34).as('book');
        cy.intercept('POST', /comments/, { statusCode: isSuccess ? 200 : 400 }).as('comment');
        cy.visit('http://localhost:3000/#/profile');
        cy.wait(['@books', '@me', '@categories']);
        cy.get('[data-test-id=history-slide]')
          .eq(0)
          .find('[data-test-id=history-review-button]')
          .contains('Оставить отзыв', { matchCase: false })
          .click();
        cy.wait('@book');
        cy.get('[data-test-id=modal-rate-book]')
          .should('be.visible')
          .find('[data-test-id=rating]')
          .should('be.visible')
          .find('[data-test-id=star]')
          .eq(1)
          .should('be.visible')
          .click();
        cy.get('[data-test-id=modal-rate-book]')
          .find('[data-test-id=comment]')
          .should('be.visible')
          .type('profile page test text');
        cy.get('[data-test-id=modal-rate-book]')
          .find('[data-test-id=button-comment]')
          .should('be.visible')
          .should('be.enabled')
          .click();
        cy.wait('@comment');
        if (isSuccess) {
          cy.get('[data-test-id=error]')
            .should('be.visible')
            .contains('Спасибо, что нашли время оценить книгу!', { matchCase: false });
        } else {
          cy.get('[data-test-id=error]').should('be.visible').contains('Оценка не была отправлена. Попробуйте позже!', {
            matchCase: false,
          });
        }
      };

      describe('add-review', () => {
        it('success', () => addReview(true));
        it('fail', () => addReview(false));
      });

      const updateReview = (isSuccess) => {
        getFullData();
        cy.intercept('GET', 'https://strapi.cleverland.by/api/books/**', {
          statusCode: 200,
          body: BOOK_94,
        }).as('book');
        cy.intercept('PUT', /comments/, { statusCode: isSuccess ? 200 : 400 }).as('comment');
        cy.visit('http://localhost:3000/#/profile');
        cy.wait(['@books', '@me', '@categories']);
        cy.get('[data-test-id=history-slide]')
          .eq(2)
          .find('[data-test-id=history-review-button]')
          .contains('Изменить оценку', { matchCase: false })
          .click();
        cy.wait('@book');
        cy.get('[data-test-id=modal-rate-book]')
          .should('be.visible')
          .find('[data-test-id=rating]')
          .should('be.visible')
          .find('[data-test-id=star]')
          .eq(0)
          .should('be.visible')
          .click();
        cy.get('[data-test-id=modal-rate-book]')
          .find('[data-test-id=comment]')
          .should('be.visible')
          .type('profile page test text');
        cy.get('[data-test-id=modal-rate-book]')
          .find('[data-test-id=button-comment]')
          .should('be.visible')
          .should('be.enabled')
          .click();
        cy.wait('@comment');
        if (isSuccess) {
          cy.get('[data-test-id=error]').should('be.visible').contains('Спасибо, что нашли время изменить оценку!', {
            matchCase: false,
          });
        } else {
          cy.get('[data-test-id=error]')
            .should('be.visible')
            .contains('Изменения не были сохранены. Попробуйте позже!', {
              matchCase: false,
            });
        }
      };

      describe('update-review', () => {
        it('success', () => updateReview(true));
        it('fail', () => updateReview(false));
      });
    });

    const updateReviewOnBookPage = (number, book) => {
      getFullData();
      cy.intercept('GET', 'https://strapi.cleverland.by/api/books/**', book).as('book');
      cy.visit('http://localhost:3000/#/profile');
      cy.wait(['@books', '@me', '@categories']);
      cy.get('[data-test-id=history-slide]').eq(number).click();
      cy.wait('@book');
      cy.url().should('contain', `${book.id}`);
      if (book.id === 94) {
        cy.get('[data-test-id=button-rate-book]')
          .should('be.visible')
          .should('be.enabled')
          .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
          .should('have.css', 'border', '1px solid rgb(191, 196, 201)')
          .should('have.css', 'border-radius', '30px')
          .contains('изменить оценку', { matchCase: false })
          .should('have.css', 'color', 'rgb(54, 54, 54)')
          .should('have.css', 'font-weight', '600')
          .should('have.css', 'font-size', '16px')
          .should('have.css', 'letter-spacing', '0.2px')
          .should('have.css', 'text-transform', 'uppercase');
      }
      if (book.id === 34) {
        cy.get('[data-test-id=button-rate-book]')
          .should('be.visible')
          .should('be.enabled')
          .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
          .should('have.css', 'border-radius', '30px')
          .contains('оценить книгу', { matchCase: false })
          .should('have.css', 'color', 'rgb(255, 255, 255)')
          .should('have.css', 'font-weight', '600')
          .should('have.css', 'font-size', '16px')
          .should('have.css', 'letter-spacing', '0.2px')
          .should('have.css', 'text-transform', 'uppercase');
      }
    };

    describe('update-review-book-page', () => {
      it('update-button-name', () => updateReviewOnBookPage(2, BOOK_94));
      it('crate-button-name', () => updateReviewOnBookPage(0, BOOK_34));
    });
  });
});
