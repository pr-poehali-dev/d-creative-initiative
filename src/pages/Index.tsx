import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { toast } = useToast();

  const copyServerIP = () => {
    navigator.clipboard.writeText('omegabox.gomc.fun');
    toast({
      title: 'IP скопирован!',
      description: 'Адрес сервера скопирован в буфер обмена',
    });
  };

  const donationPackages = [
    {
      id: 1,
      name: 'VIP',
      price: 299,
      features: ['Приватный кит каждые 24ч', 'Цветной ник', '5 точек дома', 'Доступ к /fly'],
      icon: 'Gem',
      popular: false,
    },
    {
      id: 2,
      name: 'PREMIUM',
      price: 599,
      features: ['Все привилегии VIP', 'Приватный кит каждые 12ч', '10 точек дома', 'Креативный режим', 'Доступ к /god'],
      icon: 'Crown',
      popular: true,
    },
    {
      id: 3,
      name: 'ELITE',
      price: 999,
      features: ['Все привилегии PREMIUM', 'Приватный кит каждые 6ч', '20 точек дома', 'WorldEdit', 'Уникальный префикс'],
      icon: 'Trophy',
      popular: false,
    },
  ];

  const rules = [
    { id: 1, title: 'Запрещен читерство', description: 'Использование читов, модов и программ дающих преимущество' },
    { id: 2, title: 'Уважение к игрокам', description: 'Запрещены оскорбления, токсичность и провокации' },
    { id: 3, title: 'Без гриферства', description: 'Ломать чужие постройки и красть вещи строго запрещено' },
    { id: 4, title: 'Запрещен спам', description: 'Флуд в чате, капс и реклама сторонних серверов' },
    { id: 5, title: 'Честная игра', description: 'Использование багов и дюпов для получения преимуществ' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1F2937] via-[#1F2937] to-[#111827]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1F2937]/80 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#9333EA] to-[#EC4899] rounded-lg flex items-center justify-center">
                <Icon name="Box" className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#9333EA] to-[#EC4899] bg-clip-text text-transparent">
                OMEGABOX
              </h1>
            </div>
            <div className="hidden md:flex gap-6">
              <button
                onClick={() => setActiveSection('home')}
                className={`font-medium transition-colors ${
                  activeSection === 'home' ? 'text-[#EC4899]' : 'text-white/70 hover:text-white'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => setActiveSection('donate')}
                className={`font-medium transition-colors ${
                  activeSection === 'donate' ? 'text-[#EC4899]' : 'text-white/70 hover:text-white'
                }`}
              >
                Донаты
              </button>
              <button
                onClick={() => setActiveSection('rules')}
                className={`font-medium transition-colors ${
                  activeSection === 'rules' ? 'text-[#EC4899]' : 'text-white/70 hover:text-white'
                }`}
              >
                Правила
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-12">
        {activeSection === 'home' && (
          <section className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#9333EA] via-[#EC4899] to-[#9333EA] bg-clip-text text-transparent animate-scale-in">
                OMEGABOX SERVER
              </h2>
              <p className="text-xl md:text-2xl text-white/80 mb-8">
                Поддержи сервер и получи уникальные привилегии
              </p>
              
              <Card className="bg-gradient-to-br from-[#9333EA]/20 to-[#EC4899]/20 border-[#9333EA]/30 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Icon name="Server" className="text-[#EC4899]" size={32} />
                      <div className="text-left">
                        <p className="text-sm text-white/60">IP сервера</p>
                        <p className="text-2xl font-bold text-white">omegabox.gomc.fun</p>
                      </div>
                    </div>
                    <Button
                      onClick={copyServerIP}
                      className="bg-gradient-to-r from-[#9333EA] to-[#EC4899] hover:opacity-90 text-white font-semibold px-8 py-6 text-lg"
                    >
                      <Icon name="Copy" size={20} className="mr-2" />
                      Скопировать IP
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <Card className="bg-[#1F2937] border-white/10 hover:border-[#9333EA]/50 transition-all hover-scale">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#9333EA] to-[#EC4899] rounded-xl flex items-center justify-center">
                      <Icon name="Users" className="text-white" size={32} />
                    </div>
                    <CardTitle className="text-white">Активное комьюнити</CardTitle>
                    <CardDescription className="text-white/60">
                      Играй с друзьями и заводи новых
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-[#1F2937] border-white/10 hover:border-[#9333EA]/50 transition-all hover-scale">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#9333EA] to-[#EC4899] rounded-xl flex items-center justify-center">
                      <Icon name="Zap" className="text-white" size={32} />
                    </div>
                    <CardTitle className="text-white">Без лагов</CardTitle>
                    <CardDescription className="text-white/60">
                      Мощные сервера для комфортной игры
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-[#1F2937] border-white/10 hover:border-[#9333EA]/50 transition-all hover-scale">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#9333EA] to-[#EC4899] rounded-xl flex items-center justify-center">
                      <Icon name="Shield" className="text-white" size={32} />
                    </div>
                    <CardTitle className="text-white">Защита от гриферов</CardTitle>
                    <CardDescription className="text-white/60">
                      Надежная система защиты построек
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'donate' && (
          <section className="container mx-auto px-4 animate-fade-in">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">Пакеты донатов</h2>
              <p className="text-center text-white/60 mb-12 text-lg">
                Выбери подходящий пакет и получи уникальные возможности
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {donationPackages.map((pkg) => (
                  <Card
                    key={pkg.id}
                    className={`relative bg-[#1F2937] border-2 transition-all hover-scale ${
                      pkg.popular
                        ? 'border-[#EC4899] shadow-lg shadow-[#EC4899]/20'
                        : 'border-white/10 hover:border-[#9333EA]/50'
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <Badge className="bg-gradient-to-r from-[#9333EA] to-[#EC4899] text-white px-4 py-1">
                          Популярный
                        </Badge>
                      </div>
                    )}
                    <CardHeader className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#9333EA] to-[#EC4899] rounded-2xl flex items-center justify-center">
                        <Icon name={pkg.icon as any} className="text-white" size={40} />
                      </div>
                      <CardTitle className="text-2xl text-white mb-2">{pkg.name}</CardTitle>
                      <div className="text-4xl font-bold bg-gradient-to-r from-[#9333EA] to-[#EC4899] bg-clip-text text-transparent">
                        {pkg.price}₽
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-white/80">
                            <Icon name="Check" className="text-[#EC4899] flex-shrink-0 mt-0.5" size={20} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        className={`w-full font-semibold ${
                          pkg.popular
                            ? 'bg-gradient-to-r from-[#9333EA] to-[#EC4899] hover:opacity-90 text-white'
                            : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                        }`}
                      >
                        Приобрести
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeSection === 'rules' && (
          <section className="container mx-auto px-4 animate-fade-in">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">Правила сервера</h2>
              <p className="text-center text-white/60 mb-12 text-lg">
                Соблюдай правила для комфортной игры всех участников
              </p>

              <div className="space-y-4">
                {rules.map((rule) => (
                  <Card
                    key={rule.id}
                    className="bg-[#1F2937] border-white/10 hover:border-[#9333EA]/50 transition-all hover-scale"
                  >
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-[#9333EA] to-[#EC4899] rounded-xl flex items-center justify-center text-white font-bold text-xl">
                          {rule.id}
                        </div>
                        <div>
                          <CardTitle className="text-white mb-2">{rule.title}</CardTitle>
                          <CardDescription className="text-white/70 text-base">
                            {rule.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              <Card className="mt-8 bg-gradient-to-br from-[#9333EA]/20 to-[#EC4899]/20 border-[#9333EA]/30">
                <CardContent className="p-6 text-center">
                  <Icon name="AlertTriangle" className="text-[#EC4899] mx-auto mb-3" size={32} />
                  <p className="text-white/90 font-medium">
                    За нарушение правил предусмотрены наказания: предупреждение, мут, кик или бан
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        )}
      </main>

      <footer className="border-t border-white/10 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-white/60">
            <p>© 2025 OMEGABOX Server. Все права защищены</p>
            <p className="mt-2 text-sm">Лучший Minecraft сервер для тебя и твоих друзей</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
