import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const landmarks = [
  {
    id: 1,
    name: 'Особняк Кшесинской',
    description: 'Дом балерины Матильды Кшесинской в стиле модерн, сейчас музей политической истории',
    visitors: 320,
    era: 'XX век',
    x: 35,
    y: 28,
    category: 'architecture'
  },
  {
    id: 2,
    name: 'Башня Грифонов',
    description: 'Дом со скульптурами грифонов на Университетской набережной, овеянный легендами',
    visitors: 180,
    era: 'XIX век',
    x: 42,
    y: 58,
    category: 'mystery'
  },
  {
    id: 3,
    name: 'Каменноостровский театр',
    description: 'Деревянный театр 1827 года, старейший действующий театр России',
    visitors: 250,
    era: 'XIX век',
    x: 28,
    y: 18,
    category: 'culture'
  },
  {
    id: 4,
    name: 'Ботанический сад БИН РАН',
    description: 'Один из старейших ботанических садов мира с уникальной коллекцией растений',
    visitors: 420,
    era: 'XVIII век',
    x: 68,
    y: 22,
    category: 'nature'
  },
  {
    id: 5,
    name: 'Дом Бака',
    description: 'Особняк с привидениями на набережной Мойки, известный мистическими историями',
    visitors: 95,
    era: 'XIX век',
    x: 52,
    y: 48,
    category: 'mystery'
  },
  {
    id: 6,
    name: 'Музей воды',
    description: 'Интерактивный музей в водонапорной башне, рассказывающий о системе водоснабжения',
    visitors: 380,
    era: 'XX век',
    x: 72,
    y: 65,
    category: 'museum'
  },
  {
    id: 7,
    name: 'Двор Капеллы',
    description: 'Уединенный двор Капеллы с акустическими свойствами и атмосферой старого города',
    visitors: 150,
    era: 'XIX век',
    x: 48,
    y: 42,
    category: 'architecture'
  },
  {
    id: 8,
    name: 'Музей-квартира Набокова',
    description: 'Родовой дом писателя Владимира Набокова на Большой Морской улице',
    visitors: 280,
    era: 'XIX век',
    x: 45,
    y: 52,
    category: 'museum'
  },
  {
    id: 9,
    name: 'Буддийский храм',
    description: 'Северный буддийский храм в Европе с уникальной архитектурой и атмосферой',
    visitors: 340,
    era: 'XX век',
    x: 58,
    y: 15,
    category: 'culture'
  },
  {
    id: 10,
    name: 'Новая Голландия',
    description: 'Остров-верфь XVIII века, преобразованный в культурное пространство',
    visitors: 520,
    era: 'XVIII век',
    x: 38,
    y: 68,
    category: 'architecture'
  },
  {
    id: 11,
    name: 'Музей Арктики и Антарктики',
    description: 'Единственный в России музей, посвященный полярным исследованиям',
    visitors: 290,
    era: 'XX век',
    x: 55,
    y: 35,
    category: 'museum'
  },
  {
    id: 12,
    name: 'Дом-музей Достоевского',
    description: 'Последняя квартира писателя, где был написан роман "Братья Карамазовы"',
    visitors: 410,
    era: 'XIX век',
    x: 62,
    y: 45,
    category: 'museum'
  },
  {
    id: 13,
    name: 'Елисеевский магазин',
    description: 'Роскошный торговый дом в стиле модерн с уникальными интерьерами',
    visitors: 310,
    era: 'XX век',
    x: 50,
    y: 40,
    category: 'architecture'
  },
  {
    id: 14,
    name: 'Музей-макет "Петровская Акватория"',
    description: 'Исторический макет Петербурга XVIII века с движущимися элементами',
    visitors: 450,
    era: 'XXI век',
    x: 32,
    y: 55,
    category: 'museum'
  },
  {
    id: 15,
    name: 'Особняк Румянцева',
    description: 'Дворец на Английской набережной с музеем истории Петербурга',
    visitors: 220,
    era: 'XVIII век',
    x: 40,
    y: 62,
    category: 'architecture'
  },
  {
    id: 16,
    name: 'Сад Бенуа',
    description: 'Скрытый сад у Мариинского театра, любимое место местных жителей',
    visitors: 180,
    era: 'XIX век',
    x: 35,
    y: 72,
    category: 'nature'
  },
  {
    id: 17,
    name: 'Музей религии',
    description: 'Музей истории религий в Казанском соборе с уникальными экспонатами',
    visitors: 260,
    era: 'XIX век',
    x: 48,
    y: 38,
    category: 'culture'
  },
  {
    id: 18,
    name: 'Дом Зингера',
    description: 'Здание компании "Зингер" с глобусом, ныне Дом книги',
    visitors: 580,
    era: 'XX век',
    x: 50,
    y: 42,
    category: 'architecture'
  }
];

const routes = [
  {
    id: 1,
    name: 'Мистический маршрут',
    landmarks: ['Башня Грифонов', 'Дом Бака', 'Двор Капеллы'],
    duration: '2.5 часа'
  },
  {
    id: 2,
    name: 'Литературный Петербург',
    landmarks: ['Музей-квартира Набокова', 'Дом-музей Достоевского', 'Дом Зингера'],
    duration: '3.5 часа'
  },
  {
    id: 3,
    name: 'Природа в городе',
    landmarks: ['Ботанический сад БИН РАН', 'Сад Бенуа', 'Новая Голландия'],
    duration: '3 часа'
  },
  {
    id: 4,
    name: 'Архитектурные шедевры',
    landmarks: ['Особняк Кшесинской', 'Елисеевский магазин', 'Особняк Румянцева'],
    duration: '2.5 часа'
  },
  {
    id: 5,
    name: 'Культурное наследие',
    landmarks: ['Каменноостровский театр', 'Буддийский храм', 'Музей религии'],
    duration: '4 часа'
  },
  {
    id: 6,
    name: 'Музейный день',
    landmarks: ['Музей Арктики и Антарктики', 'Музей воды', 'Музей-макет "Петровская Акватория"'],
    duration: '5 часов'
  }
];

// Реальная схема метро Санкт-Петербурга, наложенная на карту города
// Карта: север — вверх, исторический центр — примерно x:40-60%, y:45-60%
// Линия 1 (красная): Кировско-Выборгская — север→юг, правее центра (x≈63)
// Линия 2 (синяя): Московско-Петроградская — север→юг, центр (x≈48)
// Линия 3 (зелёная): Невско-Василеостровская — с запада (острова) через центр на восток-юг
// Линия 4 (оранжевая): Правобережная — с востока через центр на юг
// Линия 5 (фиолетовая): Фрунзенско-Приморская — северо-запад→центр→юго-запад

const metroLines = {
  red:    { color: '#E63946', name: 'Линия 1' },
  blue:   { color: '#1D70B8', name: 'Линия 2' },
  green:  { color: '#2ECC71', name: 'Линия 3' },
  orange: { color: '#F39C12', name: 'Линия 4' },
  purple: { color: '#9B59B6', name: 'Линия 5' },
};

// Линии метро как последовательности точек (x%, y%)
const metroLinesPaths = {
  // Линия 1 — Красная: вертикальная с севера (y=2) на юг-восток
  red: [
    [63, 2], [63, 7], [63, 12], [63, 17], [63, 22],
    [63, 27], [63, 32], [63, 37], [63, 43], [63, 49],
    [63, 53], [66, 57], [66, 63], [66, 68], [66, 73],
    [66, 78], [66, 85],
  ],
  // Линия 2 — Синяя: вертикальная с изгибом в центре
  blue: [
    [48, 2], [48, 8], [48, 14], [48, 19], [48, 24],
    [48, 29], [48, 35], [48, 41], [48, 49], [52, 52],
    [51, 57], [48, 63], [48, 68], [48, 73], [48, 77],
    [48, 81], [48, 86], [48, 91], [48, 96],
  ],
  // Линия 3 — Зелёная: с запада (острова) на восток, затем на юг
  green: [
    [5, 26], [11, 30], [18, 37], [28, 46],
    [52, 52], [66, 57], [68, 63], [68, 68],
    [68, 73], [68, 78], [68, 85],
  ],
  // Линия 4 — Оранжевая: с востока через центр на юг
  orange: [
    [88, 65], [83, 59], [78, 54], [73, 50],
    [66, 57], [61, 54], [57, 57], [55, 60],
    [53, 63], [51, 66], [49, 70], [51, 75],
    [51, 80], [51, 85],
  ],
  // Линия 5 — Фиолетовая: северо-запад → центр → юго-запад
  purple: [
    [31, 17], [27, 22], [29, 30], [33, 36],
    [36, 42], [41, 49], [46, 57], [48, 63],
    [40, 68], [34, 74], [28, 80], [22, 83],
    [19, 88], [14, 93],
  ],
};

const metroStations = [
  // ═══ Линия 1 — Красная ═══
  { id: 1,  name: 'Девяткино',              x: 63, y: 2,  line: 'red' },
  { id: 2,  name: 'Гражданский проспект',   x: 63, y: 7,  line: 'red' },
  { id: 3,  name: 'Академическая',          x: 63, y: 12, line: 'red' },
  { id: 4,  name: 'Политехническая',        x: 63, y: 17, line: 'red' },
  { id: 5,  name: 'Площадь Мужества',       x: 63, y: 22, line: 'red' },
  { id: 6,  name: 'Лесная',                 x: 63, y: 27, line: 'red' },
  { id: 7,  name: 'Выборгская',             x: 63, y: 32, line: 'red' },
  { id: 8,  name: 'Площадь Ленина',         x: 63, y: 37, line: 'red' },
  { id: 9,  name: 'Чернышевская',           x: 63, y: 43, line: 'red' },
  { id: 10, name: 'Площадь Восстания',      x: 63, y: 49, line: 'red' },
  { id: 11, name: 'Маяковская',             x: 63, y: 53, line: 'red' },
  // пересадочный узел с лин.3 и лин.4:
  { id: 12, name: 'Пл. Александра Невского', x: 66, y: 57, line: 'red', transfer: true },
  { id: 13, name: 'Елизаровская',           x: 66, y: 63, line: 'red' },
  { id: 14, name: 'Ломоносовская',          x: 66, y: 68, line: 'red' },
  { id: 15, name: 'Пролетарская',           x: 66, y: 73, line: 'red' },
  { id: 16, name: 'Обухово',                x: 66, y: 78, line: 'red' },
  { id: 17, name: 'Рыбацкое',               x: 66, y: 85, line: 'red' },

  // ═══ Линия 2 — Синяя ═══
  { id: 18, name: 'Парнас',                 x: 48, y: 2,  line: 'blue' },
  { id: 19, name: 'Проспект Просвещения',   x: 48, y: 8,  line: 'blue' },
  { id: 20, name: 'Озерки',                 x: 48, y: 14, line: 'blue' },
  { id: 21, name: 'Удельная',               x: 48, y: 19, line: 'blue' },
  { id: 22, name: 'Пионерская',             x: 48, y: 24, line: 'blue' },
  { id: 23, name: 'Чёрная речка',           x: 48, y: 29, line: 'blue' },
  { id: 24, name: 'Петроградская',          x: 48, y: 35, line: 'blue' },
  { id: 25, name: 'Горьковская',            x: 48, y: 41, line: 'blue' },
  // пересадка с лин.1 (Невский/Площадь Восстания):
  { id: 26, name: 'Невский проспект',       x: 48, y: 49, line: 'blue', transfer: true },
  // пересадочный узел лин.2+лин.3 (Гостиный двор):
  { id: 27, name: 'Гостиный двор',          x: 52, y: 52, line: 'blue', transfer: true },
  // тройной узел лин.2+лин.4+лин.5 (Сенная/Садовая/Спасская):
  { id: 28, name: 'Сенная площадь',         x: 51, y: 57, line: 'blue', transfer: true },
  // пересадка лин.2+лин.5 (Технологический):
  { id: 29, name: 'Технологический институт', x: 48, y: 63, line: 'blue', transfer: true },
  { id: 30, name: 'Фрунзенская',            x: 48, y: 68, line: 'blue' },
  { id: 31, name: 'Московские ворота',      x: 48, y: 73, line: 'blue' },
  { id: 32, name: 'Электросила',            x: 48, y: 77, line: 'blue' },
  { id: 33, name: 'Парк Победы',            x: 48, y: 81, line: 'blue' },
  { id: 34, name: 'Московская',             x: 48, y: 86, line: 'blue' },
  { id: 35, name: 'Звёздная',               x: 48, y: 91, line: 'blue' },
  { id: 36, name: 'Купчино',                x: 48, y: 96, line: 'blue' },

  // ═══ Линия 3 — Зелёная ═══
  { id: 37, name: 'Беговая',                x: 5,  y: 26, line: 'green' },
  { id: 38, name: 'Новокрестовская',        x: 11, y: 30, line: 'green' },
  { id: 39, name: 'Приморская',             x: 18, y: 37, line: 'green' },
  { id: 40, name: 'Василеостровская',       x: 28, y: 46, line: 'green' },
  // пересадка лин.3+лин.2 (Гостиный двор):
  { id: 41, name: 'Гостиный двор (лин.3)',  x: 54, y: 52, line: 'green', transfer: true },
  // пересадка лин.3+лин.1+лин.4 (Пл. Александра Невского):
  { id: 42, name: 'Пл. Александра Невского (лин.3)', x: 68, y: 57, line: 'green', transfer: true },
  { id: 43, name: 'Елизаровская (лин.3)',   x: 68, y: 63, line: 'green' },
  { id: 44, name: 'Ломоносовская (лин.3)',  x: 68, y: 68, line: 'green' },
  { id: 45, name: 'Пролетарская (лин.3)',   x: 68, y: 73, line: 'green' },
  { id: 46, name: 'Обухово (лин.3)',        x: 68, y: 78, line: 'green' },
  { id: 47, name: 'Рыбацкое (лин.3)',       x: 68, y: 85, line: 'green' },

  // ═══ Линия 4 — Оранжевая ═══
  { id: 48, name: 'Улица Дыбенко',          x: 88, y: 65, line: 'orange' },
  { id: 49, name: 'Проспект Большевиков',   x: 83, y: 59, line: 'orange' },
  { id: 50, name: 'Ладожская',              x: 78, y: 54, line: 'orange' },
  { id: 51, name: 'Новочеркасская',         x: 73, y: 50, line: 'orange' },
  // пересадка лин.4+лин.1+лин.3:
  { id: 52, name: 'Пл. Александра Невского (лин.4)', x: 64, y: 57, line: 'orange', transfer: true },
  { id: 53, name: 'Лиговский проспект',     x: 61, y: 54, line: 'orange' },
  { id: 54, name: 'Достоевская',            x: 57, y: 57, line: 'orange' },
  { id: 55, name: 'Владимирская',           x: 55, y: 60, line: 'orange' },
  { id: 56, name: 'Пушкинская',             x: 53, y: 63, line: 'orange' },
  { id: 57, name: 'Звенигородская',         x: 51, y: 66, line: 'orange' },
  { id: 58, name: 'Обводный канал',         x: 49, y: 70, line: 'orange' },
  { id: 59, name: 'Волковская',             x: 51, y: 75, line: 'orange' },
  { id: 60, name: 'Бухарестская',           x: 51, y: 80, line: 'orange' },
  { id: 61, name: 'Международная',          x: 51, y: 85, line: 'orange' },

  // ═══ Линия 5 — Фиолетовая ═══
  { id: 62, name: 'Комендантский проспект', x: 31, y: 17, line: 'purple' },
  { id: 63, name: 'Старая Деревня',         x: 27, y: 22, line: 'purple' },
  { id: 64, name: 'Крестовский остров',     x: 29, y: 30, line: 'purple' },
  { id: 65, name: 'Чкаловская',             x: 33, y: 36, line: 'purple' },
  { id: 66, name: 'Спортивная',             x: 36, y: 42, line: 'purple' },
  { id: 67, name: 'Адмиралтейская',         x: 41, y: 49, line: 'purple' },
  // тройной узел лин.5+лин.2+лин.4 (Садовая/Спасская/Сенная):
  { id: 68, name: 'Садовая',                x: 46, y: 57, line: 'purple', transfer: true },
  // пересадка лин.5+лин.2 (Технологический институт):
  { id: 71, name: 'Технологический ин-т (лин.5)', x: 48, y: 63, line: 'purple', transfer: true },
  { id: 72, name: 'Балтийская',             x: 40, y: 68, line: 'purple' },
  { id: 73, name: 'Нарвская',               x: 34, y: 74, line: 'purple' },
  { id: 74, name: 'Кировский завод',        x: 28, y: 80, line: 'purple' },
  { id: 75, name: 'Автово',                 x: 22, y: 83, line: 'purple' },
  { id: 76, name: 'Ленинский проспект',     x: 19, y: 88, line: 'purple' },
  { id: 77, name: 'Проспект Ветеранов',     x: 14, y: 93, line: 'purple' },
];

export default function Index() {
  const [selectedLandmark, setSelectedLandmark] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState('map');
  const [showMetro, setShowMetro] = useState(false);
  const [hoveredStation, setHoveredStation] = useState<number | null>(null);
  const [selectedStation, setSelectedStation] = useState<number | null>(null);

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  const calculateDistance = (x1: number, y1: number, x2: number, y2: number) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  };

  const getNearbyLandmarks = (stationId: number) => {
    const station = metroStations.find(s => s.id === stationId);
    if (!station) return landmarks;
    
    return landmarks
      .map(landmark => ({
        ...landmark,
        distance: calculateDistance(station.x, station.y, landmark.x, landmark.y)
      }))
      .filter(landmark => landmark.distance < 25)
      .sort((a, b) => a.distance - b.distance);
  };

  const filteredLandmarks = selectedStation ? getNearbyLandmarks(selectedStation) : landmarks;

  return (
    <div className="min-h-screen bg-[#F5E6D3]">
      <header className="border-b-2 border-[#8B7355] bg-[#2C3E50] text-[#F5E6D3] sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl">🗺️</div>
              <h1 className="text-2xl md:text-3xl font-serif font-bold">Saint Petersburg</h1>
            </div>
            <nav className="hidden md:flex gap-6">
              {['map', 'landmarks', 'history', 'routes', 'about', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm uppercase tracking-wider hover:text-[#D4AF37] transition-colors ${
                    activeSection === section ? 'text-[#D4AF37] font-bold' : ''
                  }`}
                >
                  {section === 'map' && 'Карта'}
                  {section === 'landmarks' && 'Достопримечательности'}
                  {section === 'history' && 'История'}
                  {section === 'routes' && 'Маршруты'}
                  {section === 'about' && 'О проекте'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#2C3E50] to-[#F5E6D3] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-8xl">⚓</div>
          <div className="absolute bottom-20 right-20 text-8xl">🏛️</div>
          <div className="absolute top-40 right-40 text-6xl">🧭</div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
          <div className="inline-block mb-6">
            <div className="w-24 h-1 bg-[#D4AF37] mb-4"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#F5E6D3] mb-6 drop-shadow-lg">
            Исторические достопримечательности
          </h2>
          <p className="text-xl md:text-2xl text-[#F5E6D3] max-w-3xl mx-auto mb-8 opacity-90">
            Откройте малоизвестные жемчужины культурной столицы
          </p>
          <Button
            onClick={() => scrollToSection('map')}
            className="bg-[#D4AF37] text-[#2C3E50] hover:bg-[#B8941F] text-lg px-8 py-6 rounded-sm font-bold shadow-xl"
          >
            Начать путешествие
            <Icon name="Map" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <section id="map" className="py-16 bg-[#F5E6D3]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-[#D4AF37]"></div>
              <Icon name="Compass" className="text-[#D4AF37]" size={32} />
              <div className="w-12 h-0.5 bg-[#D4AF37]"></div>
            </div>
            <h2 className="text-4xl font-serif font-bold text-[#2C3E50] mb-4">Интерактивная карта</h2>
            <p className="text-lg text-[#8B7355]">Нажмите на точку, чтобы узнать больше</p>
          </div>

          <div className="flex justify-center gap-4 mb-4 flex-wrap">
            <Button
              onClick={() => setShowMetro(!showMetro)}
              variant={showMetro ? "default" : "outline"}
              className={showMetro 
                ? "bg-[#2C3E50] text-[#F5E6D3] hover:bg-[#D4AF37] hover:text-[#2C3E50] border-2 border-[#8B7355]"
                : "bg-transparent text-[#2C3E50] hover:bg-[#2C3E50] hover:text-[#F5E6D3] border-2 border-[#8B7355]"}
            >
              <Icon name={showMetro ? "Eye" : "EyeOff"} className="mr-2" size={18} />
              {showMetro ? 'Скрыть линии метро' : 'Показать линии метро'}
            </Button>
            
            {selectedStation && (
              <Button
                onClick={() => setSelectedStation(null)}
                variant="outline"
                className="bg-[#D4AF37] text-[#2C3E50] hover:bg-[#B8941F] border-2 border-[#8B7355]"
              >
                <Icon name="X" className="mr-2" size={18} />
                Сбросить фильтр
              </Button>
            )}
          </div>

          {showMetro && (
            <div className="flex justify-center gap-4 mb-4 flex-wrap">
              {(Object.entries(metroLines) as [keyof typeof metroLines, {color: string; name: string}][]).map(([key, line]) => (
                <div key={key} className="flex items-center gap-1.5 text-sm text-[#2C3E50]">
                  <div className="w-6 h-2 rounded-full" style={{ backgroundColor: line.color }}></div>
                  <span className="font-medium">{line.name}</span>
                </div>
              ))}
            </div>
          )}
          
          {selectedStation && (
            <div className="text-center mb-6 animate-fade-in">
              <div className="inline-block bg-[#2C3E50] text-[#F5E6D3] px-6 py-3 rounded border-2 border-[#D4AF37]">
                <Icon name="MapPin" className="inline mr-2" size={18} />
                Показаны достопримечательности рядом с: <span className="font-bold">{metroStations.find(s => s.id === selectedStation)?.name.replace(' (лин.3)', '').replace(' (лин.4)', '').replace(' (лин.5)', '')}</span>
              </div>
            </div>
          )}

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-[#2C3E50] border-4 border-[#8B7355] overflow-hidden shadow-2xl animate-scale-in">
              <CardContent className="p-0">
                <div className="relative aspect-square bg-gradient-to-br from-[#D4AF37]/20 to-[#8B7355]/20">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-85"
                    style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/f5d31f9e-e071-454e-a37c-3682b7383fc2/bucket/e6e3030d-6639-44b3-8395-281a88c6bfba.jpg)' }}
                  ></div>
                  <div className="absolute inset-0 bg-[#2C3E50]/10"></div>
                  
                  {showMetro && (
                    <>
                      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                        {/* Линии метро — рисуем из metroLinesPaths */}
                        {(Object.entries(metroLinesPaths) as [keyof typeof metroLines, number[][]][]).map(([lineKey, pts]) => (
                          <polyline
                            key={lineKey}
                            points={pts.map(([x, y]) => `${x},${y}`).join(' ')}
                            stroke={metroLines[lineKey].color}
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            opacity="0.9"
                          />
                        ))}
                        {/* Пересадочные узлы (белые кружки) */}
                        {/* Невский пр. / Площадь Восстания */}
                        <circle cx="48" cy="49" r="1.2" fill="white" stroke="#555" strokeWidth="0.4" />
                        <circle cx="63" cy="49" r="1.2" fill="white" stroke="#555" strokeWidth="0.4" />
                        {/* Гостиный двор */}
                        <circle cx="52" cy="52" r="1.5" fill="white" stroke="#555" strokeWidth="0.4" />
                        {/* Сенная / Садовая / Спасская */}
                        <circle cx="51" cy="57" r="1.5" fill="white" stroke="#555" strokeWidth="0.4" />
                        {/* Технологический институт */}
                        <circle cx="48" cy="63" r="1.5" fill="white" stroke="#555" strokeWidth="0.4" />
                        {/* Площадь Александра Невского */}
                        <circle cx="66" cy="57" r="1.5" fill="white" stroke="#555" strokeWidth="0.4" />
                      </svg>
                      
                      {metroStations.map((station) => {
                        const color = metroLines[station.line as keyof typeof metroLines]?.color ?? '#999';
                        const isSelected = selectedStation === station.id;
                        const isHovered = hoveredStation === station.id;
                        // Убираем технические суффиксы из названий для отображения
                        const displayName = station.name
                          .replace(' (лин.3)', '').replace(' (лин.4)', '').replace(' (лин.5)', '');
                        return (
                          <div
                            key={station.id}
                            className="absolute pointer-events-auto"
                            style={{
                              left: `${station.x}%`,
                              top: `${station.y}%`,
                              transform: 'translate(-50%, -50%)'
                            }}
                            onMouseEnter={() => setHoveredStation(station.id)}
                            onMouseLeave={() => setHoveredStation(null)}
                            onClick={() => setSelectedStation(isSelected ? null : station.id)}
                          >
                            <div 
                              className={`rounded-full border-2 border-white cursor-pointer transition-transform ${
                                isSelected ? 'scale-150 ring-2 ring-[#D4AF37]' : 'hover:scale-150'
                              }`}
                              style={{
                                backgroundColor: color,
                                width: (station as {transfer?: boolean}).transfer ? '10px' : '8px',
                                height: (station as {transfer?: boolean}).transfer ? '10px' : '8px',
                              }}
                            />
                            {isHovered && (
                              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-[#2C3E50] text-[#F5E6D3] px-3 py-1.5 rounded text-xs whitespace-nowrap border-2 border-[#D4AF37] shadow-lg z-50">
                                {displayName}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-[#D4AF37]"></div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </>
                  )}
                  
                  {filteredLandmarks.map((landmark) => (
                    <button
                      key={landmark.id}
                      onClick={() => setSelectedLandmark(landmark.id)}
                      className={`absolute w-8 h-8 rounded-full border-2 transition-all duration-300 hover:scale-150 ${
                        selectedLandmark === landmark.id
                          ? 'bg-[#D4AF37] border-[#F5E6D3] scale-125 shadow-lg shadow-[#D4AF37]/50'
                          : 'bg-[#8B7355] border-[#F5E6D3] hover:bg-[#D4AF37]'
                      }`}
                      style={{
                        left: `${landmark.x}%`,
                        top: `${landmark.y}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#D4AF37] rounded-full animate-ping opacity-75"></div>
                    </button>
                  ))}

                  <div className="absolute top-4 left-4 bg-[#2C3E50]/90 border-2 border-[#D4AF37] p-3 rounded-sm">
                    <Icon name="Navigation" className="text-[#D4AF37]" size={24} />
                  </div>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center pointer-events-none">
                    <p className="text-white font-serif font-bold text-xl tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]" style={{textShadow: '0 0 8px rgba(0,0,0,0.9), 0 2px 4px rgba(0,0,0,0.8)'}}>SAINT-PETERSBURG</p>
                    <p className="text-[#D4AF37] font-serif font-semibold text-sm tracking-wider mt-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]" style={{textShadow: '0 0 8px rgba(0,0,0,0.9), 0 2px 4px rgba(0,0,0,0.8)'}}>основан в 1703 году</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4 animate-fade-in">
              {selectedLandmark ? (
                landmarks
                  .filter((l) => l.id === selectedLandmark)
                  .map((landmark) => (
                    <Card key={landmark.id} className="border-2 border-[#8B7355] bg-white shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-2xl font-serif font-bold text-[#2C3E50]">{landmark.name}</h3>
                          <Badge className="bg-[#D4AF37] text-[#2C3E50] hover:bg-[#B8941F]">
                            {landmark.visitors} посетителей/год
                          </Badge>
                        </div>
                        <p className="text-[#8B7355] mb-4 leading-relaxed">{landmark.description}</p>
                        <div className="flex items-center gap-4 text-sm text-[#8B7355]">
                          <div className="flex items-center gap-2">
                            <Icon name="Clock" size={16} className="text-[#D4AF37]" />
                            <span>{landmark.era}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Icon name="MapPin" size={16} className="text-[#D4AF37]" />
                            <span className="capitalize">{landmark.category}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
              ) : selectedStation ? (
                <Card className="border-2 border-[#8B7355] bg-white/80">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon name="MapPin" className="text-[#D4AF37]" size={32} />
                      <h3 className="text-xl font-serif font-bold text-[#2C3E50]">
                        Рядом со станцией: {metroStations.find(s => s.id === selectedStation)?.name.replace(' (лин.3)', '').replace(' (лин.4)', '').replace(' (лин.5)', '')}
                      </h3>
                    </div>
                    <p className="text-[#8B7355] mb-4">
                      Найдено достопримечательностей: <span className="font-bold text-[#2C3E50]">{filteredLandmarks.length}</span>
                    </p>
                    <div className="space-y-2">
                      {filteredLandmarks.slice(0, 5).map((landmark) => (
                        <button
                          key={landmark.id}
                          onClick={() => setSelectedLandmark(landmark.id)}
                          className="w-full text-left p-3 rounded border border-[#8B7355] hover:bg-[#F5E6D3] transition-colors"
                        >
                          <div className="font-semibold text-[#2C3E50]">{landmark.name}</div>
                          <div className="text-sm text-[#8B7355]">{landmark.era} • {landmark.category}</div>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-2 border-[#8B7355] bg-white/80">
                  <CardContent className="p-8 text-center">
                    <Icon name="MapPin" className="mx-auto mb-4 text-[#8B7355]" size={48} />
                    <p className="text-[#8B7355] text-lg mb-2">Выберите точку на карте для подробной информации</p>
                    {showMetro && (
                      <p className="text-[#8B7355] text-sm">Или нажмите на станцию метро, чтобы увидеть ближайшие достопримечательности</p>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="landmarks" className="py-16 bg-white border-t-4 border-[#8B7355]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-[#D4AF37]"></div>
              <Icon name="Building" className="text-[#D4AF37]" size={32} />
              <div className="w-12 h-0.5 bg-[#D4AF37]"></div>
            </div>
            <h2 className="text-4xl font-serif font-bold text-[#2C3E50] mb-4">Все достопримечательности</h2>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-6 mb-8 bg-[#F5E6D3] border-2 border-[#8B7355]">
              <TabsTrigger value="all" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#2C3E50]">
                Все
              </TabsTrigger>
              <TabsTrigger value="architecture" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#2C3E50]">
                Архитектура
              </TabsTrigger>
              <TabsTrigger value="museum" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#2C3E50]">
                Музеи
              </TabsTrigger>
              <TabsTrigger value="culture" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#2C3E50]">
                Культура
              </TabsTrigger>
              <TabsTrigger value="mystery" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#2C3E50]">
                Мистика
              </TabsTrigger>
              <TabsTrigger value="nature" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#2C3E50]">
                Природа
              </TabsTrigger>
            </TabsList>

            {['all', 'architecture', 'museum', 'culture', 'mystery', 'nature'].map((category) => (
              <TabsContent key={category} value={category} className="animate-fade-in">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {landmarks
                    .filter((l) => category === 'all' || l.category === category)
                    .map((landmark, index) => (
                      <Card
                        key={landmark.id}
                        className="border-2 border-[#8B7355] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="text-xl font-serif font-bold text-[#2C3E50]">{landmark.name}</h3>
                            <Badge variant="outline" className="border-[#D4AF37] text-[#8B7355]">
                              {landmark.visitors}
                            </Badge>
                          </div>
                          <p className="text-[#8B7355] mb-4">{landmark.description}</p>
                          <div className="flex items-center gap-2 text-sm text-[#8B7355]">
                            <Icon name="Clock" size={14} className="text-[#D4AF37]" />
                            <span>{landmark.era}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section id="history" className="py-16 bg-[#F5E6D3] border-t-4 border-[#8B7355]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-[#D4AF37]"></div>
              <Icon name="BookOpen" className="text-[#D4AF37]" size={32} />
              <div className="w-12 h-0.5 bg-[#D4AF37]"></div>
            </div>
            <h2 className="text-4xl font-serif font-bold text-[#2C3E50] mb-4">История города</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-4 border-[#8B7355] bg-white shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                  <p className="text-[#8B7355] leading-relaxed mb-6 text-lg first-letter:text-6xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:text-[#D4AF37]">
                    Санкт-Петербург, основанный Петром I в 1703 году, стал воплощением дерзкой мечты создать «окно в Европу». 
                    За три века город накопил богатейшее культурное наследие, но многие его сокровища остаются в тени известных достопримечательностей.
                  </p>
                  <p className="text-[#8B7355] leading-relaxed mb-6">
                    Наш проект призван открыть путешественникам те уголки Северной столицы, которые хранят не меньше историй и тайн, 
                    но посещаются значительно реже. Эти места позволяют почувствовать подлинную атмосферу старого Петербурга, 
                    избежав туристических толп.
                  </p>
                  <div className="border-l-4 border-[#D4AF37] pl-6 my-8 italic text-[#8B7355]">
                    «В Петербурге каждый дом — это история, каждая улица — это судьба» — Николай Анциферов
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="routes" className="py-16 bg-white border-t-4 border-[#8B7355]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-[#D4AF37]"></div>
              <Icon name="Route" className="text-[#D4AF37]" size={32} />
              <div className="w-12 h-0.5 bg-[#D4AF37]"></div>
            </div>
            <h2 className="text-4xl font-serif font-bold text-[#2C3E50] mb-4">Рекомендованные маршруты</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {routes.map((route, index) => (
              <Card
                key={route.id}
                className="border-2 border-[#8B7355] hover:shadow-xl transition-all duration-300 bg-[#F5E6D3] hover:scale-105"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#2C3E50] font-bold text-xl">
                      {route.id}
                    </div>
                    <h3 className="text-xl font-serif font-bold text-[#2C3E50]">{route.name}</h3>
                  </div>
                  <div className="space-y-3 mb-4">
                    {route.landmarks.map((landmark, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Icon name="MapPin" size={16} className="text-[#D4AF37] mt-1 flex-shrink-0" />
                        <span className="text-[#8B7355]">{landmark}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#8B7355] pt-3 border-t border-[#8B7355]">
                    <Icon name="Clock" size={16} className="text-[#D4AF37]" />
                    <span>{route.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-[#2C3E50] border-t-4 border-[#8B7355]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-[#F5E6D3]">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-[#D4AF37]"></div>
              <Icon name="Info" className="text-[#D4AF37]" size={32} />
              <div className="w-12 h-0.5 bg-[#D4AF37]"></div>
            </div>
            <h2 className="text-4xl font-serif font-bold mb-6">О проекте</h2>
            <p className="text-lg leading-relaxed mb-6 opacity-90">
              Я создал этот ресурс для тех, кто хочет открыть для себя настоящий Петербург — город с многовековой историей, 
              полный скрытых сокровищ и малоизвестных мест, достойных внимания.
            </p>
            <p className="text-lg leading-relaxed opacity-90">
              Моя миссия — сохранить память о каждом уголке культурной столицы и помочь путешественникам 
              найти свой уникальный путь через лабиринты истории.
            </p>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-[#F5E6D3] border-t-4 border-[#8B7355]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-0.5 bg-[#D4AF37]"></div>
                <Icon name="Mail" className="text-[#D4AF37]" size={32} />
                <div className="w-12 h-0.5 bg-[#D4AF37]"></div>
              </div>
              <h2 className="text-4xl font-serif font-bold text-[#2C3E50] mb-4">Контакты</h2>
            </div>

            <Card className="border-4 border-[#8B7355] bg-white shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Mail" className="text-[#D4AF37] flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-serif font-bold text-[#2C3E50] mb-1">Email</h3>
                      <p className="text-[#8B7355]">timushakov2009@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" className="text-[#D4AF37] flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-serif font-bold text-[#2C3E50] mb-1">Телефон</h3>
                      <p className="text-[#8B7355]">+7(911) 810-00-71</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-[#2C3E50] text-[#F5E6D3] py-8 border-t-4 border-[#D4AF37]">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="text-2xl">🗺️</div>
            <p className="text-lg font-serif">Санкт-Петербургъ</p>
          </div>
          <p className="text-sm opacity-75">Исторические достопримечательности © 2026</p>
        </div>
      </footer>
    </div>
  );
}