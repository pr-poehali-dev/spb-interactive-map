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

const metroStations = [
  { id: 1, name: 'Девяткино', x: 10, y: 20, line: 'red' },
  { id: 2, name: 'Гражданский проспект', x: 30, y: 20, line: 'red' },
  { id: 3, name: 'Площадь Восстания', x: 50, y: 20, line: 'red' },
  { id: 4, name: 'Технологический институт', x: 70, y: 20, line: 'red' },
  { id: 5, name: 'Купчино', x: 90, y: 20, line: 'red' },
  { id: 6, name: 'Парнас', x: 20, y: 10, line: 'blue' },
  { id: 7, name: 'Чернышевская', x: 20, y: 30, line: 'blue' },
  { id: 8, name: 'Сенная площадь', x: 20, y: 50, line: 'blue' },
  { id: 9, name: 'Фрунзенская', x: 20, y: 70, line: 'blue' },
  { id: 10, name: 'Рыбацкое', x: 20, y: 90, line: 'blue' },
  { id: 11, name: 'Приморская', x: 15, y: 30, line: 'green' },
  { id: 12, name: 'Василеостровская', x: 35, y: 40, line: 'green' },
  { id: 13, name: 'Площадь Александра Невского', x: 65, y: 60, line: 'green' },
  { id: 14, name: 'Рыбацкое', x: 85, y: 70, line: 'green' },
  { id: 15, name: 'Комендантский проспект', x: 30, y: 15, line: 'orange' },
  { id: 16, name: 'Спасская', x: 40, y: 35, line: 'orange' },
  { id: 17, name: 'Достоевская', x: 60, y: 65, line: 'orange' },
  { id: 18, name: 'Шушары', x: 70, y: 85, line: 'orange' },
  { id: 19, name: 'Беговая', x: 10, y: 50, line: 'purple' },
  { id: 20, name: 'Адмиралтейская', x: 30, y: 50, line: 'purple' },
  { id: 21, name: 'Звенигородская', x: 70, y: 50, line: 'purple' },
  { id: 22, name: 'Волковская', x: 90, y: 50, line: 'purple' },
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

          <div className="flex justify-center gap-4 mb-6 flex-wrap">
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
          
          {selectedStation && (
            <div className="text-center mb-6 animate-fade-in">
              <div className="inline-block bg-[#2C3E50] text-[#F5E6D3] px-6 py-3 rounded border-2 border-[#D4AF37]">
                <Icon name="MapPin" className="inline mr-2" size={18} />
                Показаны достопримечательности рядом с: <span className="font-bold">{metroStations.find(s => s.id === selectedStation)?.name}</span>
              </div>
            </div>
          )}

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-[#2C3E50] border-4 border-[#8B7355] overflow-hidden shadow-2xl animate-scale-in">
              <CardContent className="p-0">
                <div className="relative aspect-square bg-gradient-to-br from-[#D4AF37]/20 to-[#8B7355]/20">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-70"
                    style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/f5d31f9e-e071-454e-a37c-3682b7383fc2/files/fba845d9-5ebc-4575-b45c-6a5ba9f08c37.jpg)' }}
                  ></div>
                  <div className="absolute inset-0 bg-[#2C3E50]/10"></div>
                  
                  {showMetro && (
                    <>
                      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="10%" y1="20%" x2="90%" y2="20%" stroke="#E63946" strokeWidth="3" opacity="0.8" />
                        <line x1="20%" y1="10%" x2="20%" y2="90%" stroke="#1E90FF" strokeWidth="3" opacity="0.8" />
                        <line x1="15%" y1="30%" x2="85%" y2="70%" stroke="#2ECC71" strokeWidth="3" opacity="0.8" />
                        <line x1="30%" y1="15%" x2="70%" y2="85%" stroke="#F39C12" strokeWidth="3" opacity="0.8" />
                        <line x1="10%" y1="50%" x2="90%" y2="50%" stroke="#9B59B6" strokeWidth="3" opacity="0.8" />
                      </svg>
                      
                      {metroStations.map((station) => {
                        const lineColors = {
                          red: '#E63946',
                          blue: '#1E90FF',
                          green: '#2ECC71',
                          orange: '#F39C12',
                          purple: '#9B59B6'
                        };
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
                            onClick={() => setSelectedStation(selectedStation === station.id ? null : station.id)}
                          >
                            <div 
                              className={`w-3 h-3 rounded-full border-2 border-white cursor-pointer hover:scale-150 transition-transform ${
                                selectedStation === station.id ? 'scale-150 ring-2 ring-[#D4AF37]' : ''
                              }`}
                              style={{ backgroundColor: lineColors[station.line as keyof typeof lineColors] }}
                            />
                            {hoveredStation === station.id && (
                              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-[#2C3E50] text-[#F5E6D3] px-3 py-1.5 rounded text-xs whitespace-nowrap border-2 border-[#D4AF37] shadow-lg z-50">
                                {station.name}
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
                        Рядом со станцией: {metroStations.find(s => s.id === selectedStation)?.name}
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
                    <Icon name="MapPin" className="text-[#D4AF37] flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-serif font-bold text-[#2C3E50] mb-1">Адрес</h3>
                      <p className="text-[#8B7355]">Санкт-Петербург, Невский проспект, 1</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Mail" className="text-[#D4AF37] flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-serif font-bold text-[#2C3E50] mb-1">Email</h3>
                      <p className="text-[#8B7355]">info@spb-history.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" className="text-[#D4AF37] flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-serif font-bold text-[#2C3E50] mb-1">Телефон</h3>
                      <p className="text-[#8B7355]">+7 (812) 123-45-67</p>
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
          <p className="text-sm opacity-75">Исторические достопримечательности © 2024</p>
        </div>
      </footer>
    </div>
  );
}