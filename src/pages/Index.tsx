import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const landmarks = [
  {
    id: 1,
    name: 'Дом Ломоносова',
    description: 'Малоизвестный дом на Мойке, где жил великий ученый',
    visitors: 120,
    era: 'XVIII век',
    x: 45,
    y: 52,
    category: 'architecture'
  },
  {
    id: 2,
    name: 'Башня Грифонов',
    description: 'Загадочная башня с мифическими существами',
    visitors: 85,
    era: 'XIX век',
    x: 62,
    y: 38,
    category: 'mystery'
  },
  {
    id: 3,
    name: 'Дворик Капеллы',
    description: 'Уютный внутренний дворик с историей',
    visitors: 95,
    era: 'XVIII век',
    x: 38,
    y: 65,
    category: 'architecture'
  },
  {
    id: 4,
    name: 'Сад Аптекарского острова',
    description: 'Ботанический уголок с редкими растениями',
    visitors: 150,
    era: 'XIX век',
    x: 28,
    y: 25,
    category: 'nature'
  },
  {
    id: 5,
    name: 'Дом с привидениями',
    description: 'Особняк с мистической репутацией',
    visitors: 75,
    era: 'XIX век',
    x: 70,
    y: 58,
    category: 'mystery'
  },
  {
    id: 6,
    name: 'Музей воды',
    description: 'Интерактивный музей в водонапорной башне',
    visitors: 180,
    era: 'XX век',
    x: 55,
    y: 42,
    category: 'museum'
  }
];

const routes = [
  {
    id: 1,
    name: 'Мистический маршрут',
    landmarks: ['Башня Грифонов', 'Дом с привидениями'],
    duration: '2 часа'
  },
  {
    id: 2,
    name: 'Архитектурное наследие',
    landmarks: ['Дом Ломоносова', 'Дворик Капеллы'],
    duration: '3 часа'
  },
  {
    id: 3,
    name: 'Природа в городе',
    landmarks: ['Сад Аптекарского острова', 'Музей воды'],
    duration: '2.5 часа'
  }
];

export default function Index() {
  const [selectedLandmark, setSelectedLandmark] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState('map');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F5E6D3]">
      <header className="border-b-2 border-[#8B7355] bg-[#2C3E50] text-[#F5E6D3] sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl">🗺️</div>
              <h1 className="text-2xl md:text-3xl font-serif font-bold">Санкт-Петербургъ</h1>
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

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-[#2C3E50] border-4 border-[#8B7355] overflow-hidden shadow-2xl animate-scale-in">
              <CardContent className="p-0">
                <div className="relative aspect-square bg-gradient-to-br from-[#D4AF37]/20 to-[#8B7355]/20">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDIwIEwgMjAgMCBNIDAgMCBMIDIwIDIwIiBzdHJva2U9IiM4QjczNTUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjIiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
                  
                  {landmarks.map((landmark) => (
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
              ) : (
                <Card className="border-2 border-[#8B7355] bg-white/80">
                  <CardContent className="p-8 text-center">
                    <Icon name="MapPin" className="mx-auto mb-4 text-[#8B7355]" size={48} />
                    <p className="text-[#8B7355] text-lg">Выберите точку на карте для подробной информации</p>
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
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-[#F5E6D3] border-2 border-[#8B7355]">
              <TabsTrigger value="all" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#2C3E50]">
                Все
              </TabsTrigger>
              <TabsTrigger value="architecture" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#2C3E50]">
                Архитектура
              </TabsTrigger>
              <TabsTrigger value="mystery" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#2C3E50]">
                Мистика
              </TabsTrigger>
              <TabsTrigger value="nature" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#2C3E50]">
                Природа
              </TabsTrigger>
            </TabsList>

            {['all', 'architecture', 'mystery', 'nature', 'museum'].map((category) => (
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

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
              Мы создали этот ресурс для тех, кто хочет открыть для себя настоящий Петербург — город с многовековой историей, 
              полный скрытых сокровищ и малоизвестных мест, достойных внимания.
            </p>
            <p className="text-lg leading-relaxed opacity-90">
              Наша миссия — сохранить память о каждом уголке культурной столицы и помочь путешественникам 
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
