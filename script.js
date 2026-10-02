const STORAGE_KEYS = {
  cart: 'seamarket_cart',
  favorites: 'seamarket_favorites',
  orders: 'seamarket_orders',
  reviews: 'seamarket_reviews',
  reviewSubmitted: 'seamarket_review_submitted',
};

const categories = [
  { id: 'fish', name: 'Рыба', image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80' },
  { id: 'seafood', name: 'Морепродукты', image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=900&q=80' },
  { id: 'caviar', name: 'Икра', image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=900&q=80' },
  { id: 'ready', name: 'Готовая еда', image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80' },
  { id: 'accessories', name: 'Аксессуары', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80' },
  { id: 'fishing', name: 'Рыбалка', image: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=900&q=80' },
  { id: 'theme', name: 'Морская тематика', image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80' },
];

const products = [
  {
    id: 'salmon',
    name: 'Лосось свежий',
    category: 'fish',
    price: 4200,
    oldPrice: 5000,
    weight: '1 кг',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80',
    description: 'Нежное филе с мягким вкусом и красивой текстурой.',
    rating: 4.9,
    reviews: 124,
    badge: 'Новинка',
    inventory: 18,
    features: ['Дикая рыба', 'Без консервантов', 'Отборная партия'],
  },
  {
    id: 'shrimp',
    name: 'Креветки тигровые',
    category: 'seafood',
    price: 3600,
    oldPrice: 4200,
    weight: '500 г',
    image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=900&q=80',
    description: 'Сладкие и сочные креветки для жарки, запекания и салатов.',
    rating: 4.8,
    reviews: 96,
    badge: 'Популярное',
    inventory: 25,
    features: ['Охлажденные', 'Средний размер', 'Быстрая готовка'],
  },
  {
    id: 'caviar-red',
    name: 'Икра лососевая',
    category: 'caviar',
    price: 5800,
    oldPrice: 6500,
    weight: '250 г',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=900&q=80',
    description: 'Классическая икра для тостов, закусок и праздничного стола.',
    rating: 4.9,
    reviews: 89,
    badge: '−10%',
    inventory: 12,
    features: ['Премиум класс', 'Натуральный продукт', 'Праздничный набор'],
  },
  {
    id: 'platter',
    name: 'Морской набор «Завтрак»',
    category: 'ready',
    price: 4800,
    oldPrice: 5600,
    weight: '700 г',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
    description: 'Готовый набор из рыбы, креветок и соусов для быстрого ужина.',
    rating: 4.7,
    reviews: 71,
    badge: 'Рекомендуем',
    inventory: 30,
    features: ['Готов к подаче', '20 минут на приготовление', 'Семейный набор'],
  },
  {
    id: 'sauce',
    name: 'Соус лимонно-укропный',
    category: 'accessories',
    price: 980,
    oldPrice: 1200,
    weight: '180 мл',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
    description: 'Небольшой, но яркий соус для приготовления блюда с рыбой.',
    rating: 4.6,
    reviews: 45,
    badge: 'Новинка',
    inventory: 41,
    features: ['Итальянский стиль', 'Свежее сырье', 'Для маринада'],
  },
  {
    id: 'seasoning',
    name: 'Специи для гриля',
    category: 'accessories',
    price: 640,
    oldPrice: 820,
    weight: '120 г',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
    description: 'Смесь специй для яркого и ароматного вкуса на гриле.',
    rating: 4.7,
    reviews: 36,
    badge: 'Рекомендуем',
    inventory: 52,
    features: ['Натуральные травы', 'Для рыбы и морепродуктов', 'Без усилителей вкуса'],
  },
  {
    id: 'container',
    name: 'Контейнер для подачи',
    category: 'accessories',
    price: 520,
    oldPrice: 700,
    weight: '1 шт',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=80',
    description: 'Практичный контейнер для сервировки и хранения готовой еды.',
    rating: 4.5,
    reviews: 28,
    badge: 'Новинка',
    inventory: 60,
    features: ['Термостойкий', 'Удобная форма', 'Подходит для хранения'],
  },
  {
    id: 'rod',
    name: 'Удочка премиум',
    category: 'fishing',
    price: 7600,
    oldPrice: 9200,
    weight: '1 шт',
    image: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=900&q=80',
    description: 'Лёгкая и прочная удочка для рыбалки в любой сезон.',
    rating: 4.8,
    reviews: 58,
    badge: 'Популярное',
    inventory: 14,
    features: ['Лёгкая рукоять', 'Надёжный бланк', 'Подходит для ловли'],
  },
  {
    id: 'mussels',
    name: 'Мидии в раковине',
    category: 'seafood',
    price: 2900,
    oldPrice: 3400,
    weight: '1 кг',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80',
    description: 'Мидии для супов, пасты и вкусных блюд с морским акцентом.',
    rating: 4.7,
    reviews: 64,
    badge: 'Рекомендуем',
    inventory: 17,
    features: ['Свежие', 'Питательный продукт', 'Удобная упаковка'],
  },
  {
    id: 'decor',
    name: 'Морская свеча',
    category: 'theme',
    price: 1200,
    oldPrice: 1500,
    weight: '1 шт',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80',
    description: 'Лёгкая морская атмосфера для кухни или ванной комнаты.',
    rating: 4.5,
    reviews: 41,
    badge: 'Новинка',
    inventory: 39,
    features: ['Сезонный декор', 'Натуральные ароматы', 'Уютный дизайн'],
  },
  {
    id: 'trout',
    name: 'Форель сибирская',
    category: 'fish',
    price: 3900,
    oldPrice: 4600,
    weight: '900 г',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=80',
    description: 'Мягкая жирная рыба для духовки, гриля и пикантных маринадов.',
    rating: 4.8,
    reviews: 76,
    badge: 'Популярное',
    inventory: 20,
    features: ['Сладковатый вкус', 'Высокое качество', 'Подходит для ужина'],
  },
  {
    id: 'bento',
    name: 'Набор «Морской ужин»',
    category: 'ready',
    price: 5400,
    oldPrice: 6200,
    weight: '800 г',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80',
    description: 'Набор из рыбы, креветок и овощей с фирменным соусом.',
    rating: 4.9,
    reviews: 113,
    badge: 'Рекомендуем',
    inventory: 16,
    features: ['Комплект на 2 персоны', 'Сервировка', 'Нарезка готова'],
  },
  {
    id: 'tuna',
    name: 'Тунец охлаждённый',
    category: 'fish',
    price: 6200,
    oldPrice: 7100,
    weight: '1 кг',
    image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&w=600&q=80',
    description: 'Плотное красное филе тунца для стейков, гриля и поке.',
    rating: 4.8,
    reviews: 32,
    badge: 'Новинка',
    inventory: 15,
    features: ['Охлаждённый', 'Для стейков', 'Богатый вкус'],
  },
  {
    id: 'dorado',
    name: 'Дорадо',
    category: 'fish',
    price: 4900,
    oldPrice: 5600,
    weight: '1 кг',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80',
    description: 'Нежная морская рыба, отлично подходит для запекания целиком.',
    rating: 4.7,
    reviews: 27,
    badge: 'Популярное',
    inventory: 18,
    features: ['Морская рыба', 'Нежное мясо', 'Для запекания'],
  },
  {
    id: 'seabass',
    name: 'Сибас',
    category: 'fish',
    price: 5200,
    oldPrice: 5900,
    weight: '1 кг',
    image: 'https://images.unsplash.com/photo-1576330383200-2bf325cfec52?auto=format&fit=crop&w=600&q=80',
    description: 'Мягкий вкус и сочное филе для духовки или угольного гриля.',
    rating: 4.8,
    reviews: 29,
    badge: 'Новинка',
    inventory: 13,
    features: ['Свежая поставка', 'Мало мелких костей', 'Для гриля'],
  },
  {
    id: 'halibut',
    name: 'Палтус филе',
    category: 'fish',
    price: 6800,
    oldPrice: 7600,
    weight: '1 кг',
    image: 'https://images.unsplash.com/photo-1584267814800-c9de7a2cfeac?auto=format&fit=crop&w=600&q=80',
    description: 'Нежное белое филе палтуса для запекания и рыбных блюд.',
    rating: 4.9,
    reviews: 24,
    badge: 'Премиум',
    inventory: 11,
    features: ['Филе без костей', 'Нежная текстура', 'Быстро готовится'],
  },
  {
    id: 'cod',
    name: 'Треска филе',
    category: 'fish',
    price: 3700,
    oldPrice: 4300,
    weight: '1 кг',
    image: 'https://images.unsplash.com/photo-1756688691284-4f0184d399c8?auto=format&fit=crop&w=600&q=80',
    description: 'Постное белое филе с деликатным вкусом для обеда и ужина.',
    rating: 4.6,
    reviews: 35,
    badge: 'Рекомендуем',
    inventory: 22,
    features: ['Филе без кожи', 'Нежный вкус', 'Удобно готовить'],
  },
  {
    id: 'mackerel',
    name: 'Скумбрия свежая',
    category: 'fish',
    price: 2400,
    oldPrice: 2900,
    weight: '1 кг',
    image: 'https://images.unsplash.com/photo-1554071407-1fb7259a9118?auto=format&fit=crop&w=600&q=80',
    description: 'Сочная жирная рыба для запекания, копчения и приготовления на гриле.',
    rating: 4.7,
    reviews: 31,
    badge: 'Популярное',
    inventory: 26,
    features: ['Свежая', 'Насыщенный вкус', 'Для гриля и духовки'],
  },
  {
    id: 'atlantic-shrimp',
    name: 'Креветки атлантические',
    category: 'seafood',
    price: 2800,
    oldPrice: 3300,
    weight: '500 г',
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80',
    description: 'Сладковатые атлантические креветки для салатов и пасты.',
    rating: 4.6,
    reviews: 38,
    badge: 'Новинка',
    inventory: 24,
    features: ['Атлантический вылов', 'Очищаются легко', 'Для салатов и пасты'],
  },
  {
    id: 'squid',
    name: 'Кальмары очищенные',
    category: 'seafood',
    price: 2600,
    oldPrice: 3100,
    weight: '700 г',
    image: 'https://images.unsplash.com/photo-1762305195844-94479ea6aca4?auto=format&fit=crop&w=600&q=80',
    description: 'Подготовленные тушки кальмара для салата, жарки и фаршировки.',
    rating: 4.5,
    reviews: 26,
    badge: 'Рекомендуем',
    inventory: 20,
    features: ['Очищенные', 'Быстро готовятся', 'Универсальный продукт'],
  },
  {
    id: 'octopus',
    name: 'Осьминог',
    category: 'seafood',
    price: 7900,
    oldPrice: 8900,
    weight: '1 кг',
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80',
    description: 'Морской деликатес для салатов, пасты и блюд средиземноморской кухни.',
    rating: 4.8,
    reviews: 18,
    badge: 'Премиум',
    inventory: 9,
    features: ['Морской деликатес', 'Для салатов и пасты', 'Замороженный'],
  },
  {
    id: 'scallops',
    name: 'Гребешки морские',
    category: 'seafood',
    price: 9200,
    oldPrice: 10500,
    weight: '500 г',
    image: 'https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=600&q=80',
    description: 'Нежные морские гребешки для быстрой обжарки и изысканной подачи.',
    rating: 4.9,
    reviews: 21,
    badge: 'Премиум',
    inventory: 10,
    features: ['Нежная текстура', 'Готовятся за минуты', 'Для особого случая'],
  },
  {
    id: 'lobster',
    name: 'Омар',
    category: 'seafood',
    price: 18500,
    oldPrice: 21000,
    weight: '1 шт',
    image: 'https://images.unsplash.com/photo-1519351635902-7c60d09cb2ed?auto=format&fit=crop&w=600&q=80',
    description: 'Праздничный морской деликатес для запекания и эффектной подачи.',
    rating: 4.9,
    reviews: 14,
    badge: 'Премиум',
    inventory: 6,
    features: ['Морской деликатес', 'Праздничная подача', 'Замороженный'],
  },
  {
    id: 'black-caviar',
    name: 'Икра чёрная осетровая',
    category: 'caviar',
    price: 48000,
    oldPrice: 54000,
    weight: '100 г',
    image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=600&q=80',
    description: 'Осетровая икра с деликатным вкусом для праздничного стола.',
    rating: 5.0,
    reviews: 12,
    badge: 'Премиум',
    inventory: 5,
    features: ['Осетровая', 'Премиальная подача', 'Охлаждённая'],
  },
  {
    id: 'pollock-roe',
    name: 'Икра минтая',
    category: 'caviar',
    price: 1450,
    oldPrice: 1750,
    weight: '200 г',
    image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=600&q=80',
    description: 'Нежная солёная икра минтая для бутербродов и лёгких закусок.',
    rating: 4.4,
    reviews: 33,
    badge: 'Новинка',
    inventory: 28,
    features: ['Натуральная икра', 'Удобная банка', 'Для закусок'],
  },
  {
    id: 'pike-roe',
    name: 'Икра щуки',
    category: 'caviar',
    price: 5900,
    oldPrice: 6700,
    weight: '100 г',
    image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=600&q=80',
    description: 'Зернистая икра щуки с выразительным вкусом для холодных закусок.',
    rating: 4.7,
    reviews: 19,
    badge: 'Рекомендуем',
    inventory: 12,
    features: ['Зернистая', 'Натуральный продукт', 'Для праздничных закусок'],
  },
  {
    id: 'fishing-reel',
    name: 'Катушка безынерционная',
    category: 'fishing',
    price: 8900,
    oldPrice: 10200,
    weight: '1 шт',
    image: 'https://images.unsplash.com/photo-1593442998882-7cb49031174b?auto=format&fit=crop&w=600&q=80',
    description: 'Универсальная катушка с плавным ходом для комфортной рыбалки.',
    rating: 4.7,
    reviews: 22,
    badge: 'Новинка',
    inventory: 16,
    features: ['Плавный ход', 'Прочный корпус', 'Для спиннинга'],
  },
  {
    id: 'fishing-lures',
    name: 'Набор рыболовных приманок',
    category: 'fishing',
    price: 2300,
    oldPrice: 2800,
    weight: '12 шт',
    image: 'https://images.unsplash.com/photo-1714880003292-17685b9999b6?auto=format&fit=crop&w=600&q=80',
    description: 'Набор приманок разных форм для ловли хищной рыбы.',
    rating: 4.6,
    reviews: 25,
    badge: 'Популярное',
    inventory: 32,
    features: ['Разные виды приманок', 'Для хищной рыбы', 'Компактный набор'],
  },
  {
    id: 'fishing-line',
    name: 'Леска монофильная',
    category: 'fishing',
    price: 1600,
    oldPrice: 1950,
    weight: '100 м',
    image: 'https://images.unsplash.com/photo-1684495598276-453d74f4d96f?auto=format&fit=crop&w=600&q=80',
    description: 'Прочная леска для повседневной рыбалки на разных водоёмах.',
    rating: 4.5,
    reviews: 31,
    badge: 'Рекомендуем',
    inventory: 40,
    features: ['Длина 100 м', 'Устойчива к нагрузке', 'Универсальная'],
  },
  {
    id: 'keepnet',
    name: 'Садок рыболовный',
    category: 'fishing',
    price: 4700,
    oldPrice: 5500,
    weight: '1 шт',
    image: 'https://images.unsplash.com/photo-1507124441518-c9584b9dc520?auto=format&fit=crop&w=600&q=80',
    description: 'Складной садок для бережного хранения улова у воды.',
    rating: 4.6,
    reviews: 17,
    badge: 'Новинка',
    inventory: 13,
    features: ['Складная конструкция', 'Прочная сетка', 'Удобно перевозить'],
  },
  {
    id: 'fish-knife',
    name: 'Нож для рыбы',
    category: 'accessories',
    price: 5800,
    oldPrice: 6800,
    weight: '1 шт',
    image: 'https://images.unsplash.com/photo-1556406561-046be8d32d06?auto=format&fit=crop&w=600&q=80',
    description: 'Удобный кухонный нож для разделки и аккуратного филе рыбы.',
    rating: 4.8,
    reviews: 20,
    badge: 'Новинка',
    inventory: 14,
    features: ['Для разделки рыбы', 'Удобная рукоять', 'Острое лезвие'],
  },
  {
    id: 'cutting-board',
    name: 'Разделочная доска',
    category: 'accessories',
    price: 3900,
    oldPrice: 4600,
    weight: '1 шт',
    image: 'https://images.unsplash.com/photo-1633244092077-74e981cc3fc4?auto=format&fit=crop&w=600&q=80',
    description: 'Прочная кухонная доска для подготовки рыбы и морепродуктов.',
    rating: 4.6,
    reviews: 23,
    badge: 'Рекомендуем',
    inventory: 19,
    features: ['Устойчивая поверхность', 'Легко мыть', 'Для рыбы и морепродуктов'],
  },
  {
    id: 'kitchen-tongs',
    name: 'Щипцы кухонные',
    category: 'accessories',
    price: 2100,
    oldPrice: 2600,
    weight: '1 шт',
    image: 'https://images.unsplash.com/photo-1508615263227-c5d58c1e5821?auto=format&fit=crop&w=600&q=80',
    description: 'Кухонные щипцы для переворачивания рыбы и морепродуктов на гриле.',
    rating: 4.5,
    reviews: 16,
    badge: 'Новинка',
    inventory: 25,
    features: ['Для гриля и кухни', 'Удобный захват', 'Легко очищаются'],
  },
  {
    id: 'dinner-for-two',
    name: 'Набор «Ужин на двоих»',
    category: 'ready',
    price: 9800,
    oldPrice: 11200,
    weight: '1,2 кг',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600&q=80',
    description: 'Рыба, креветки и соус для полноценного морского ужина на двоих.',
    rating: 4.9,
    reviews: 28,
    badge: 'Набор',
    inventory: 12,
    features: ['На 2 персоны', 'Рыба и морепродукты', 'Соус в комплекте'],
  },
  {
    id: 'seafood-assortment',
    name: 'Набор «Морское ассорти»',
    category: 'ready',
    price: 12400,
    oldPrice: 13900,
    weight: '1 кг',
    image: 'https://images.unsplash.com/photo-1572776082973-1cb8d1790872?auto=format&fit=crop&w=600&q=80',
    description: 'Ассорти из морепродуктов для праздничной подачи и дегустации.',
    rating: 4.8,
    reviews: 26,
    badge: 'Популярное',
    inventory: 10,
    features: ['Разные морепродукты', 'Готово к подаче', 'Для компании'],
  },
  {
    id: 'fishing-luck-set',
    name: 'Набор «Рыбацкая удача»',
    category: 'fishing',
    price: 7600,
    oldPrice: 8900,
    weight: '1 набор',
    image: 'https://images.unsplash.com/photo-1665923141036-effd3f504813?auto=format&fit=crop&w=600&q=80',
    description: 'Практичный комплект рыболовных мелочей для удачного выезда на водоём.',
    rating: 4.7,
    reviews: 19,
    badge: 'Набор',
    inventory: 15,
    features: ['Приманки и оснастка', 'Для выезда на рыбалку', 'Хороший подарок'],
  },
];

const bundleScenarios = [
  {
    id: 'shrimp',
    name: 'Креветки',
    items: [
      { name: 'Креветки тигровые', productId: 'shrimp', qty: 1 },
      { name: 'Соус лимонно-укропный', productId: 'sauce', qty: 1 },
      { name: 'Специи для гриля', productId: 'seasoning', qty: 1 },
      { name: 'Контейнер для подачи', productId: 'container', qty: 1 },
    ],
  },
  {
    id: 'grill',
    name: 'Рыба на гриле',
    items: [
      { name: 'Лосось свежий', productId: 'salmon', qty: 1 },
      { name: 'Соус лимонно-укропный', productId: 'sauce', qty: 1 },
      { name: 'Специи для гриля', productId: 'seasoning', qty: 1 },
      { name: 'Контейнер для подачи', productId: 'container', qty: 1 },
    ],
  },
  {
    id: 'dinner',
    name: 'Морской ужин',
    items: [
      { name: 'Морской набор «Завтрак»', productId: 'platter', qty: 1 },
      { name: 'Мидии в раковине', productId: 'mussels', qty: 1 },
      { name: 'Соус лимонно-укропный', productId: 'sauce', qty: 1 },
      { name: 'Контейнер для подачи', productId: 'container', qty: 1 },
    ],
  },
  {
    id: 'quick',
    name: 'Быстрый ужин',
    items: [
      { name: 'Набор «Морской ужин»', productId: 'bento', qty: 1 },
      { name: 'Соус лимонно-укропный', productId: 'sauce', qty: 1 },
      { name: 'Специи для гриля', productId: 'seasoning', qty: 1 },
      { name: 'Морская свеча', productId: 'decor', qty: 1 },
    ],
  },
];

const promoCodes = {
  SEA10: 0.1,
  FISH5: 0.05,
};

const refs = {};

const state = {
  cart: loadFromStorage(STORAGE_KEYS.cart, []),
  favorites: loadFromStorage(STORAGE_KEYS.favorites, []),
  orders: loadFromStorage(STORAGE_KEYS.orders, []),
  reviews: loadFromStorage(STORAGE_KEYS.reviews, [
    {
      name: 'Алина',
      city: 'Астана',
      rating: 5,
      text: 'Очень вкусная рыба и быстрая доставка. Благодарю за качество.',
    },
    {
      name: 'Дамир',
      city: 'Алматы',
      rating: 5,
      text: 'Морской набор понравился всей семье. Будем заказывать ещё.',
    },
  ]),
  reviewSubmitted: loadFromStorage(STORAGE_KEYS.reviewSubmitted, false),
  activeCategory: 'all',
  searchTerm: '',
  sortBy: 'featured',
  viewMode: 'grid',
  checkoutStep: 1,
  promoDiscount: 0,
  modalProductId: null,
  activeBundle: 0,
  user: {
    name: '',
    email: '',
    phone: '',
    city: '',
    address: '',
    deliveryMethod: '',
    paymentMethod: 'card',
  },
};

document.addEventListener('DOMContentLoaded', initApp);

function initApp() {
  cacheRefs();
  syncActiveNav();
  applyUrlState();
  bindEvents();
  renderCategories();
  renderCategoryFilters();
  renderCatalog();
  renderBundles();
  renderCart();
  renderFavorites();
  renderOrders();
  renderReviews();
  updateCounters();
  initScrollReveal();
  initCheckoutDefaults();
  updateCheckoutSummary();
  handleProductUrlTarget();
}

function syncActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const currentFile = currentPath.toLowerCase();
  document.querySelectorAll('.main-nav a, .mobile-menu a').forEach((link) => {
    const href = (link.getAttribute('href') || '').toLowerCase();
    const isActive = href === currentFile || (currentFile === 'index.html' && href === 'index.html');
    link.classList.toggle('active', isActive);
  });
}

function applyUrlState() {
  const params = new URLSearchParams(window.location.search);
  const categoryParam = params.get('category');
  const productParam = params.get('product');

  if (categoryParam) {
    const category = categories.some((item) => item.id === categoryParam) ? categoryParam : 'all';
    state.activeCategory = category;
  }

  if (productParam) {
    state.modalProductId = productParam;
  }
}

function handleProductUrlTarget() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('product');
  if (!productId) return;

  const product = products.find((item) => item.id === productId);
  if (product) {
    const catalogExists = !!document.getElementById('catalogGrid');
    if (catalogExists) {
      setTimeout(() => {
        openProductModal(product.id);
      }, 120);
    }
  }
}

function cacheRefs() {
  refs.headerSearchInput = document.getElementById('headerSearchInput');
  refs.catalogSearchInput = document.getElementById('catalogSearch');
  refs.categoryFilters = document.getElementById('categoryFilters');
  refs.catalogGrid = document.getElementById('catalogGrid');
  refs.categoryGrid = document.getElementById('categoryGrid');
  refs.resultsCount = document.getElementById('resultsCount');
  refs.sortSelect = document.getElementById('sortSelect');
  refs.viewButtons = document.querySelectorAll('.view-btn');
  refs.favoritesButton = document.getElementById('favoritesButton');
  refs.cartButton = document.getElementById('cartButton');
  refs.cartDrawer = document.getElementById('cartDrawer');
  refs.favoritesDrawer = document.getElementById('favoritesDrawer');
  refs.cartItems = document.getElementById('cartItems');
  refs.favoritesItems = document.getElementById('favoritesItems');
  refs.cartTotal = document.getElementById('cartTotal');
  refs.modal = document.getElementById('productModal');
  refs.modalContent = document.getElementById('modalContent');
  refs.closeProductModal = document.getElementById('closeProductModal');
  refs.toastContainer = document.getElementById('toastContainer');
  refs.bundleTabs = document.getElementById('bundleTabs');
  refs.bundlePanel = document.getElementById('bundlePanel');
  refs.checkoutForm = document.getElementById('checkoutForm');
  refs.checkoutSteps = document.querySelectorAll('.checkout-step');
  refs.prevBtn = document.getElementById('prevStepBtn');
  refs.nextBtn = document.getElementById('nextStepBtn');
  refs.submitBtn = document.getElementById('submitOrderBtn');
  refs.invoiceBox = document.getElementById('invoiceBox');
  refs.createInvoiceButton = document.getElementById('createInvoiceButton');
  refs.invoicePhone = document.getElementById('invoicePhone');
  refs.applyPromoBtn = document.getElementById('applyPromoBtn');
  refs.promoCodeInput = document.getElementById('promoCodeInput');
  refs.summaryProducts = document.getElementById('summaryProducts');
  refs.summaryShipping = document.getElementById('summaryShipping');
  refs.summaryDiscount = document.getElementById('summaryDiscount');
  refs.summaryTotal = document.getElementById('summaryTotal');
  refs.ordersList = document.getElementById('ordersList');
  refs.reviewPrompt = document.getElementById('reviewPrompt');
  refs.reviewForm = document.getElementById('reviewForm');
  refs.reviewsList = document.getElementById('reviewsList');
  refs.backdrop = document.getElementById('backdrop');
  refs.mobileMenu = document.getElementById('mobileMenu');
  refs.mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  refs.closeMobileMenu = document.querySelector('.close-menu');
  refs.goToCheckoutBtn = document.getElementById('goToCheckoutBtn');
  refs.closeCartBtn = document.getElementById('closeCartBtn');
  refs.closeFavoritesBtn = document.getElementById('closeFavoritesBtn');
  refs.contactForm = document.getElementById('contactForm');
  refs.siteHeader = document.querySelector('.site-header');
}

function bindEvents() {
  if (refs.headerSearchInput) {
    refs.headerSearchInput.addEventListener('input', (event) => {
      state.searchTerm = event.target.value.trim().toLowerCase();
      if (refs.catalogSearchInput) refs.catalogSearchInput.value = state.searchTerm;
      renderCatalog();
    });
  }

  if (refs.catalogSearchInput) {
    refs.catalogSearchInput.addEventListener('input', (event) => {
      state.searchTerm = event.target.value.trim().toLowerCase();
      if (refs.headerSearchInput) refs.headerSearchInput.value = state.searchTerm;
      renderCatalog();
    });
  }

  if (refs.sortSelect) {
    refs.sortSelect.addEventListener('change', (event) => {
      state.sortBy = event.target.value;
      renderCatalog();
    });
  }

  if (refs.viewButtons) {
    refs.viewButtons.forEach((button) => {
      button.addEventListener('click', () => {
        state.viewMode = button.dataset.view;
        refs.viewButtons.forEach((btn) => btn.classList.toggle('is-active', btn === button));
        renderCatalog();
      });
    });
  }

  if (refs.favoritesButton) refs.favoritesButton.addEventListener('click', () => toggleDrawer(refs.favoritesDrawer));
  if (refs.cartButton) refs.cartButton.addEventListener('click', () => toggleDrawer(refs.cartDrawer));
  if (refs.closeCartBtn) refs.closeCartBtn.addEventListener('click', () => toggleDrawer(refs.cartDrawer, false));
  if (refs.closeFavoritesBtn) refs.closeFavoritesBtn.addEventListener('click', () => toggleDrawer(refs.favoritesDrawer, false));
  if (refs.backdrop) refs.backdrop.addEventListener('click', closeDrawersAndMenu);
  if (refs.goToCheckoutBtn) refs.goToCheckoutBtn.addEventListener('click', () => {
    toggleDrawer(refs.cartDrawer, false);
    const checkout = document.getElementById('checkout');
    if (checkout) {
      checkout.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    window.location.href = 'index.html#checkout';
  });

  if (refs.closeProductModal) refs.closeProductModal.addEventListener('click', closeModal);
  if (refs.modal) refs.modal.addEventListener('click', (event) => {
    if (event.target === refs.modal) closeModal();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal();
      closeDrawersAndMenu();
    }
  });

  if (refs.mobileMenuToggle && refs.mobileMenu) {
    refs.mobileMenuToggle.addEventListener('click', () => {
      const isOpen = refs.mobileMenu.classList.contains('is-open');
      refs.mobileMenu.classList.toggle('is-open', !isOpen);
      refs.mobileMenuToggle.setAttribute('aria-expanded', String(!isOpen));
      if (refs.backdrop) refs.backdrop.classList.toggle('is-visible', !isOpen);
    });
  }

  if (refs.closeMobileMenu) refs.closeMobileMenu.addEventListener('click', closeDrawersAndMenu);
  if (refs.mobileMenu) refs.mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeDrawersAndMenu);
  });

  if (refs.createInvoiceButton) refs.createInvoiceButton.addEventListener('click', handleInvoiceCreation);
  if (refs.applyPromoBtn) refs.applyPromoBtn.addEventListener('click', applyPromoCode);
  if (refs.nextBtn) refs.nextBtn.addEventListener('click', goToNextStep);
  if (refs.prevBtn) refs.prevBtn.addEventListener('click', goToPrevStep);
  if (refs.checkoutForm) refs.checkoutForm.addEventListener('submit', handleCheckoutSubmit);
  if (refs.reviewForm) refs.reviewForm.addEventListener('submit', handleReviewSubmit);
  if (refs.contactForm) refs.contactForm.addEventListener('submit', handleContactSubmit);

  document.body.addEventListener('click', (event) => {
    const action = event.target.closest('[data-action]');
    if (!action) return;

    const { action: type, productId, categoryId } = action.dataset;

    switch (type) {
      case 'add-cart':
        addToCart(productId);
        break;
      case 'toggle-favorite':
        toggleFavorite(productId);
        break;
      case 'quick-view':
        openProductModal(productId);
        break;
      case 'category-filter':
        state.activeCategory = categoryId;
        renderCategoryFilters();
        renderCatalog();
        const catalogSection = document.getElementById('catalog');
        if (catalogSection) catalogSection.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'remove-cart-item':
        removeCartItem(productId);
        break;
      case 'increase-cart':
        updateCartQuantity(productId, 1);
        break;
      case 'decrease-cart':
        updateCartQuantity(productId, -1);
        break;
      case 'remove-favorite':
        toggleFavorite(productId);
        break;
      case 'add-bundle':
        addBundleToCart(Number(action.dataset.bundleIndex));
        break;
      case 'reset-filters':
        resetFilters();
        break;
      default:
        break;
    }
  });

  window.addEventListener('scroll', () => {
    if (refs.siteHeader) refs.siteHeader.classList.toggle('is-scrolled', window.scrollY > 18);
  });
}

function renderCategories() {
  if (!refs.categoryGrid) return;

  refs.categoryGrid.innerHTML = categories
    .map(
      (category) => `
        <button class="category-card" type="button" data-action="category-filter" data-category-id="${category.id}" aria-label="${category.name}">
          <img src="${category.image}" alt="${category.name}" loading="lazy" />
          <div class="category-overlay">
            <h3>${category.name}</h3>
          </div>
        </button>
      `
    )
    .join('');
}

function renderCategoryFilters() {
  if (!refs.categoryFilters) return;

  const filters = [
    { id: 'all', name: 'Все' },
    ...categories,
  ];

  refs.categoryFilters.innerHTML = filters
    .map(
      (category) => `
        <button
          type="button"
          class="filter-pill ${state.activeCategory === category.id ? 'is-active' : ''}"
          data-action="category-filter"
          data-category-id="${category.id}"
        >
          ${category.name}
        </button>
      `
    )
    .join('');
}

function renderCatalog() {
  if (!refs.catalogGrid) return;

  const normalized = state.searchTerm.toLowerCase();
  let filtered = products.filter((product) => {
    const matchesCategory = state.activeCategory === 'all' || product.category === state.activeCategory;
    const matchesSearch =
      !normalized ||
      product.name.toLowerCase().includes(normalized) ||
      product.description.toLowerCase().includes(normalized) ||
      product.category.toLowerCase().includes(normalized);
    return matchesCategory && matchesSearch;
  });

  filtered = sortProducts(filtered, state.sortBy);

  if (refs.resultsCount) refs.resultsCount.textContent = `${filtered.length} товаров`;

  if (!filtered.length) {
    refs.catalogGrid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1; min-height: 220px;">
        <div>
          <h3>По вашему запросу ничего не найдено</h3>
          <p>Попробуйте изменить фильтры или сбросить поиск.</p>
          <button type="button" class="btn btn-primary" data-action="reset-filters">Сбросить фильтры</button>
        </div>
      </div>
    `;
    return;
  }

  refs.catalogGrid.innerHTML = filtered
    .map(
      (product) => `
        <article class="product-card ${state.viewMode === 'list' ? 'list-view' : ''}">
          <div class="product-media">
            <img src="${product.image}" alt="${product.name}" loading="lazy" />
            <div class="product-badges">
              <span class="badge-pill">${product.badge}</span>
            </div>
            <button type="button" class="favorite-btn ${state.favorites.includes(product.id) ? 'is-active' : ''}" data-action="toggle-favorite" data-product-id="${product.id}" aria-label="Добавить в избранное">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.35 10.55 20C5.4 15.36 2 12.28 2 8.5A4.5 4.5 0 016.5 4c1.74 0 3.41.81 4.5 2.09A6.12 6.12 0 0115.5 4 4.5 4.5 0 0120 8.5c0 3.78-3.4 6.86-8.55 11.5L12 21.35Z"/></svg>
            </button>
          </div>
          <div class="product-content">
            <div class="product-meta">
              <span>${getCategoryName(product.category)}</span>
              <span class="rating">
                <svg viewBox="0 0 24 24"><path d="m12 17.27 6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                ${product.rating}
              </span>
            </div>
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-footer">
              <div class="price-group">
                <span class="price">${formatPrice(product.price)} ₸</span>
                ${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)} ₸</span>` : ''}
              </div>
              <div class="product-actions">
                <button type="button" class="small-btn" data-action="quick-view" data-product-id="${product.id}">Быстрый просмотр</button>
              </div>
            </div>
            <div class="product-actions" style="margin-top: 0.8rem;">
              <button type="button" class="btn btn-primary add-to-cart-btn" data-action="add-cart" data-product-id="${product.id}">В корзину</button>
            </div>
          </div>
        </article>
      `
    )
    .join('');
}

function renderBundles() {
  if (!refs.bundleTabs || !refs.bundlePanel) return;

  refs.bundleTabs.innerHTML = bundleScenarios
    .map(
      (bundle, index) => `
        <button type="button" class="bundle-tab ${state.activeBundle === index ? 'is-active' : ''}" data-index="${index}">
          ${bundle.name}
        </button>
      `
    )
    .join('');

  refs.bundleTabs.querySelectorAll('.bundle-tab').forEach((button) => {
    button.addEventListener('click', () => {
      state.activeBundle = Number(button.dataset.index);
      renderBundles();
    });
  });

  const bundle = bundleScenarios[state.activeBundle];
  const bundleProducts = bundle.items.map((item) => {
    const product = products.find((entry) => entry.id === item.productId) || {
      name: item.name,
      price: 0,
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
    };
    return `
      <div class="bundle-item">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        <strong>${product.name}</strong>
      </div>
    `;
  });

  const total = bundle.items.reduce((sum, item) => {
    const product = products.find((entry) => entry.id === item.productId);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);

  refs.bundlePanel.innerHTML = `
    <div class="bundle-contents">
      ${bundleProducts.join('')}
    </div>
    <div class="bundle-pricing">
      <h3>${bundle.name}</h3>
      <p>Готовый набор для быстрого и вкусного ужина.</p>
      <div class="summary-row"><span>Стоимость набора</span><strong>${formatPrice(total)} ₸</strong></div>
      <button type="button" class="btn btn-primary" data-action="add-bundle" data-bundle-index="${state.activeBundle}">Добавить всё в корзину</button>
    </div>
  `;
}

function renderCart() {
  if (!refs.cartItems || !refs.cartTotal) return;

  if (!state.cart.length) {
    refs.cartItems.innerHTML = `
      <div class="empty-state">
        <div>
          <h3>Ваша корзина сейчас пуста</h3>
          <p>Добавьте немного моря в ваш рацион.</p>
          <button type="button" class="btn btn-primary" data-action="reset-filters">Перейти в каталог</button>
        </div>
      </div>
    `;
    refs.cartTotal.textContent = '0 ₸';
    updateCheckoutSummary();
    return;
  }

  refs.cartItems.innerHTML = state.cart
    .map((item) => {
      const product = products.find((entry) => entry.id === item.id) || {
        name: 'Товар',
        price: 0,
        image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
      };

      return `
        <div class="cart-item">
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
          <div class="cart-item-details">
            <div class="cart-item-title">${product.name}</div>
            <div class="cart-item-meta">${formatPrice(product.price)} ₸ / шт.</div>
            <div class="quantity-controls">
              <button type="button" class="quantity-btn" data-action="decrease-cart" data-product-id="${product.id}" aria-label="Уменьшить количество">−</button>
              <span>${item.quantity}</span>
              <button type="button" class="quantity-btn" data-action="increase-cart" data-product-id="${product.id}" aria-label="Увеличить количество">+</button>
            </div>
          </div>
          <div>
            <div class="cart-item-price"><strong>${formatPrice(product.price * item.quantity)} ₸</strong></div>
            <button type="button" class="remove-item" data-action="remove-cart-item" data-product-id="${product.id}">Удалить</button>
          </div>
        </div>
      `;
    })
    .join('');

  refs.cartTotal.textContent = `${formatPrice(getCartTotal())} ₸`;
  updateCheckoutSummary();
}

function renderFavorites() {
  if (!refs.favoritesItems) return;

  if (!state.favorites.length) {
    refs.favoritesItems.innerHTML = `
      <div class="empty-state">
        <div>
          <h3>Вы ещё не добавили товары в избранное</h3>
          <p>Сохраняйте понравившиеся товары для быстрого выбора.</p>
        </div>
      </div>
    `;
    return;
  }

  refs.favoritesItems.innerHTML = state.favorites
    .map((productId) => {
      const product = products.find((entry) => entry.id === productId);
      if (!product) return '';
      return `
        <div class="favorite-item">
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
          <div class="favorite-item-details">
            <div class="favorite-item-title">${product.name}</div>
            <div class="favorite-item-meta">${formatPrice(product.price)} ₸</div>
          </div>
          <div>
            <button type="button" class="remove-item" data-action="remove-favorite" data-product-id="${product.id}">Убрать</button>
          </div>
        </div>
      `;
    })
    .join('');
}

function renderOrders() {
  if (!refs.ordersList) return;

  if (!state.orders.length) {
    refs.ordersList.innerHTML = `
      <div class="empty-state">
        <div>
          <h3>Пока нет оформленных заказов</h3>
          <p>Ваши заказы появятся здесь после первой покупки.</p>
        </div>
      </div>
    `;
    return;
  }

  refs.ordersList.innerHTML = state.orders
    .map(
      (order) => `
        <div class="order-item">
          <div>
            <strong>${order.id}</strong>
            <div>${formatDate(order.date)}</div>
          </div>
          <div>
            <strong>${formatPrice(order.total)} ₸</strong>
            <div>${order.paymentMethod}</div>
          </div>
          <div>
            <span class="order-status">${order.status}</span>
          </div>
        </div>
      `
    )
    .join('');
}

function renderReviews() {
  if (!refs.reviewsList && !refs.reviewPrompt) return;

  const allReviews = [...state.reviews];
  if (refs.reviewsList) refs.reviewsList.innerHTML = allReviews
    .map(
      (review) => `
        <article class="review-item">
          <div class="review-head">
            <strong>${review.name}</strong>
            <span class="review-stars">${renderStars(review.rating)}</span>
          </div>
          <div class="review-city">${review.city}</div>
          <p>${review.text}</p>
        </article>
      `
    )
    .join('');

  if (refs.reviewPrompt) {
    const canReview = state.orders.length > 0 && !state.reviewSubmitted;
    refs.reviewPrompt.classList.toggle('hidden', !canReview);
  }
}

function updateCounters() {
  const favoritesCount = document.getElementById('favoritesCount');
  const cartCount = document.getElementById('cartCount');
  if (favoritesCount) favoritesCount.textContent = String(state.favorites.length);
  if (cartCount) cartCount.textContent = String(state.cart.reduce((sum, item) => sum + item.quantity, 0));
}

function getCartTotal() {
  return state.cart.reduce((total, item) => {
    const product = products.find((entry) => entry.id === item.id);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);
}

function addToCart(productId) {
  const existing = state.cart.find((item) => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({ id: productId, quantity: 1 });
  }
  saveToStorage(STORAGE_KEYS.cart, state.cart);
  renderCart();
  updateCounters();
  showToast('Товар добавлен в корзину');
}

function updateCartQuantity(productId, delta) {
  const item = state.cart.find((entry) => entry.id === productId);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter((entry) => entry.id !== productId);
  }
  saveToStorage(STORAGE_KEYS.cart, state.cart);
  renderCart();
  updateCounters();
}

function removeCartItem(productId) {
  state.cart = state.cart.filter((item) => item.id !== productId);
  saveToStorage(STORAGE_KEYS.cart, state.cart);
  renderCart();
  updateCounters();
  showToast('Товар удалён из корзины');
}

function toggleFavorite(productId) {
  if (state.favorites.includes(productId)) {
    state.favorites = state.favorites.filter((id) => id !== productId);
    showToast('Товар удалён из избранного');
  } else {
    state.favorites.push(productId);
    showToast('Товар добавлен в избранное');
  }
  saveToStorage(STORAGE_KEYS.favorites, state.favorites);
  renderCatalog();
  renderFavorites();
  updateCounters();
}

function addBundleToCart(bundleIndex) {
  const bundle = bundleScenarios[bundleIndex];
  bundle.items.forEach((item) => addToCart(item.productId));
  showToast(`${bundle.name} добавлен в корзину`);
}

function toggleDrawer(drawer, forceValue) {
  if (!drawer) return;
  const shouldOpen = typeof forceValue === 'boolean' ? forceValue : !drawer.classList.contains('is-open');
  drawer.classList.toggle('is-open', shouldOpen);
  if (refs.backdrop) refs.backdrop.classList.toggle('is-visible', shouldOpen);
  if (shouldOpen) {
    if (refs.mobileMenu) refs.mobileMenu.classList.remove('is-open');
    if (refs.mobileMenuToggle) refs.mobileMenuToggle.setAttribute('aria-expanded', 'false');
  }
}

function closeDrawersAndMenu() {
  if (refs.cartDrawer) refs.cartDrawer.classList.remove('is-open');
  if (refs.favoritesDrawer) refs.favoritesDrawer.classList.remove('is-open');
  if (refs.mobileMenu) refs.mobileMenu.classList.remove('is-open');
  if (refs.mobileMenuToggle) refs.mobileMenuToggle.setAttribute('aria-expanded', 'false');
  if (refs.backdrop) refs.backdrop.classList.remove('is-visible');
}

function openProductModal(productId) {
  state.modalProductId = productId;
  const product = products.find((entry) => entry.id === productId);
  if (!product || !refs.modal || !refs.modalContent) return;

  refs.modalContent.innerHTML = `
    <div class="modal-grid">
      <div class="modal-media">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
      </div>
      <div class="modal-content">
        <span class="modal-category">${getCategoryName(product.category)}</span>
        <h3 id="modalTitle">${product.name}</h3>
        <div class="rating">
          <svg viewBox="0 0 24 24"><path d="m12 17.27 6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
          ${product.rating} • ${product.reviews} отзывов
        </div>
        <p>${product.description}</p>
        <div class="modal-specs">
          <div><strong>Вес:</strong> ${product.weight}</div>
          <div><strong>Цена:</strong> ${formatPrice(product.price)} ₸</div>
          <div><strong>Характеристики:</strong> ${product.features.join(', ')}</div>
        </div>
        <div class="modal-actions">
          <button type="button" class="btn btn-primary" data-action="add-cart" data-product-id="${product.id}">Добавить в корзину</button>
          <button type="button" class="btn btn-secondary" data-action="toggle-favorite" data-product-id="${product.id}">${state.favorites.includes(product.id) ? 'Убрать из избранного' : 'Добавить в избранное'}</button>
        </div>
      </div>
    </div>
  `;
  refs.modal.classList.remove('hidden');
  refs.modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  if (!refs.modal) return;
  refs.modal.classList.add('hidden');
  refs.modal.setAttribute('aria-hidden', 'true');
}

function applyPromoCode() {
  const code = refs.promoCodeInput.value.trim().toUpperCase();
  const discountRate = promoCodes[code];
  if (!discountRate) {
    state.promoDiscount = 0;
    showToast('Промокод не найден');
    updateCheckoutSummary();
    return;
  }

  state.promoDiscount = getCartTotal() * discountRate;
  showToast(`Промокод ${code} применён`);
  updateCheckoutSummary();
}

function updateCheckoutSummary() {
  if (!refs.summaryProducts || !refs.summaryShipping || !refs.summaryDiscount || !refs.summaryTotal) return;

  const productsTotal = getCartTotal();
  const shipping = productsTotal > 0 ? 1200 : 0;
  const discounted = state.promoDiscount;
  const total = Math.max(productsTotal + shipping - discounted, 0);

  refs.summaryProducts.textContent = `${formatPrice(productsTotal)} ₸`;
  refs.summaryShipping.textContent = `${formatPrice(shipping)} ₸`;
  refs.summaryDiscount.textContent = `${formatPrice(discounted)} ₸`;
  refs.summaryTotal.textContent = `${formatPrice(total)} ₸`;
}

function initCheckoutDefaults() {
  if (!document.querySelector('input[name="paymentMethod"]')) return;

  const paymentInputs = document.querySelectorAll('input[name="paymentMethod"]');
  paymentInputs.forEach((input) => {
    input.addEventListener('change', () => {
      state.user.paymentMethod = input.value;
      refs.invoiceBox.classList.toggle('hidden', input.value !== 'invoice');
      if (input.value !== 'invoice') {
        refs.invoicePhone.value = '';
      }
    });
  });
}

function goToNextStep() {
  if (!refs.checkoutForm || !refs.checkoutSteps || refs.checkoutSteps.length === 0) return;

  const currentStep = state.checkoutStep;
  const currentFields = refs.checkoutForm.querySelectorAll(`.checkout-step[data-step="${currentStep}"] input, .checkout-step[data-step="${currentStep}"] select, .checkout-step[data-step="${currentStep}"] textarea`);

  let valid = true;
  currentFields.forEach((field) => {
    if (!field.checkValidity()) {
      field.reportValidity();
      valid = false;
    }
  });

  if (!valid) return;

  if (currentStep < refs.checkoutSteps.length) {
    state.checkoutStep += 1;
    renderCheckoutStep();
  }
}

function goToPrevStep() {
  if (state.checkoutStep > 1) {
    state.checkoutStep -= 1;
    renderCheckoutStep();
  }
}

function renderCheckoutStep() {
  if (!refs.checkoutSteps || refs.checkoutSteps.length === 0) return;

  refs.checkoutSteps.forEach((step) => {
    step.classList.toggle('is-active', Number(step.dataset.step) === state.checkoutStep);
  });

  if (refs.prevBtn) refs.prevBtn.classList.toggle('hidden', state.checkoutStep === 1);
  if (refs.nextBtn) refs.nextBtn.classList.toggle('hidden', state.checkoutStep === refs.checkoutSteps.length);
  if (refs.submitBtn) refs.submitBtn.classList.toggle('hidden', state.checkoutStep !== refs.checkoutSteps.length);
}

function handleCheckoutSubmit(event) {
  if (!refs.checkoutForm) return;

  event.preventDefault();
  if (state.cart.length === 0) {
    showToast('Корзина пуста');
    return;
  }

  const formData = new FormData(refs.checkoutForm);
  const orderData = {
    id: `ORD-${Date.now()}`,
    date: new Date().toISOString(),
    customer: {
      name: formData.get('firstName'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      city: formData.get('city'),
      address: formData.get('address'),
      deliveryMethod: formData.get('deliveryMethod'),
      paymentMethod: formData.get('paymentMethod'),
    },
    items: [...state.cart],
    total: getCartTotal() + (getCartTotal() > 0 ? 1200 : 0) - state.promoDiscount,
    status: 'Создан',
    paymentStatus: 'pending',
  };

  if (orderData.customer.paymentMethod === 'invoice') {
    const invoice = createPaymentInvoice({
      phone: refs.invoicePhone.value || orderData.customer.phone,
      total: orderData.total,
    });
    if (!invoice.success) {
      showToast('Не удалось сформировать счёт');
      return;
    }
    orderData.invoice = invoice;
    orderData.status = 'Ожидает оплаты';
    orderData.paymentStatus = 'pending';
    showToast(`Счёт сформирован на ${invoice.phone}`);
  }

  if (orderData.customer.paymentMethod === 'cash') {
    orderData.status = 'Создан';
    orderData.paymentStatus = 'pending';
  }

  if (orderData.customer.paymentMethod === 'card') {
    orderData.status = 'Оплачен';
    orderData.paymentStatus = 'paid';
  }

  state.orders.unshift(orderData);
  saveToStorage(STORAGE_KEYS.orders, state.orders);
  state.cart = [];
  state.promoDiscount = 0;
  refs.promoCodeInput.value = '';
  saveToStorage(STORAGE_KEYS.cart, state.cart);
  renderOrders();
  renderCart();
  updateCounters();
  refs.checkoutForm.reset();
  state.checkoutStep = 1;
  renderCheckoutStep();

  if (refs.reviewPrompt && state.orders.length > 0 && !state.reviewSubmitted) {
    refs.reviewPrompt.classList.remove('hidden');
  }
}

function handleInvoiceCreation() {
  if (!refs.invoicePhone) return;

  const phone = refs.invoicePhone.value.trim() || document.querySelector('input[name="phone"]').value;
  if (!phone) {
    showToast('Укажите номер телефона для счёта');
    return;
  }

  const invoice = createPaymentInvoice({
    phone,
    total: getCartTotal() + (getCartTotal() > 0 ? 1200 : 0) - state.promoDiscount,
  });

  showToast(`Счёт сформирован. Номер: ${invoice.phone}`);
}

function createPaymentInvoice(orderData) {
  // В production здесь должен быть запрос к backend/payment provider API.
  // Данные банковской карты никогда не должны обрабатываться или храниться
  // в frontend-приложении.
  return {
    success: true,
    invoiceId: `INV-${Date.now().toString().slice(-6)}`,
    phone: orderData.phone || '+7 700 000 00 00',
    amount: Number(orderData.total || 0),
    status: 'pending',
  };
}

function handleReviewSubmit(event) {
  if (!refs.reviewForm) return;

  event.preventDefault();
  const formData = new FormData(refs.reviewForm);
  const review = {
    name: String(formData.get('name') || '').trim(),
    city: String(formData.get('city') || '').trim(),
    rating: Number(formData.get('rating') || 5),
    text: String(formData.get('text') || '').trim(),
  };

  if (!review.name || !review.city || !review.text) {
    showToast('Заполните все поля отзыва');
    return;
  }

  state.reviews.unshift(review);
  state.reviewSubmitted = true;
  saveToStorage(STORAGE_KEYS.reviews, state.reviews);
  saveToStorage(STORAGE_KEYS.reviewSubmitted, true);
  refs.reviewForm.reset();
  renderReviews();
  showToast('Спасибо за отзыв!');
}

function handleContactSubmit(event) {
  if (!refs.contactForm) return;

  event.preventDefault();
  const formData = new FormData(refs.contactForm);
  const name = String(formData.get('contactName') || '').trim();
  if (!name) {
    showToast('Укажите имя');
    return;
  }
  refs.contactForm.reset();
  showToast('Спасибо! Мы свяжемся с вами в ближайшее время.');
}

function showToast(message) {
  if (!refs.toastContainer) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  refs.toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 2200);
}

function resetFilters() {
  state.activeCategory = 'all';
  state.searchTerm = '';
  if (refs.catalogSearchInput) refs.catalogSearchInput.value = '';
  if (refs.headerSearchInput) refs.headerSearchInput.value = '';
  renderCategoryFilters();
  renderCatalog();
}

function sortProducts(items, sortBy) {
  const sorted = [...items];
  switch (sortBy) {
    case 'price-asc':
      sorted.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      sorted.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      sorted.sort((a, b) => b.rating - a.rating);
      break;
    default:
      sorted.sort((a, b) => b.rating * b.reviews - a.rating * a.reviews);
      break;
  }
  return sorted;
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadFromStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    return fallback;
  }
}

function getCategoryName(categoryId) {
  const category = categories.find((item) => item.id === categoryId);
  return category ? category.name : 'Категория';
}

function renderStars(rating) {
  return '★'.repeat(Math.round(rating)).padEnd(5, '☆');
}

function formatPrice(value) {
  return new Intl.NumberFormat('ru-RU').format(Math.round(value));
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date);
}

function initScrollReveal() {
  const revealItems = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

window.addEventListener('load', () => {
  renderCheckoutStep();
  updateCheckoutSummary();
  closeDrawersAndMenu();
  if (refs.siteHeader) refs.siteHeader.classList.toggle('is-scrolled', window.scrollY > 18);
});
