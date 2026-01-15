import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        form.reset();
        alert('Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.');
      } else {
        alert('Произошла ошибка при отправке. Пожалуйста, попробуйте позже.');
      }
    } catch (error) {
      alert('Произошла ошибка при отправке. Пожалуйста, попробуйте позже.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-secondary border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4">
          <div className="flex items-center justify-between gap-2">
            <div className="flex flex-col min-w-0 flex-1">
              <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground whitespace-nowrap">
                Адвокатский кабинет
              </div>
              <p className="text-[11px] sm:text-xs md:text-sm lg:text-base text-foreground/80 font-semibold mt-0.5 truncate">
                Адвоката Мушовец А. Г.
              </p>
              <p className="text-[9px] sm:text-[10px] md:text-xs text-muted-foreground mt-0.5 truncate">
                Регистрационный номер в реестре 77/14943
              </p>
            </div>
            
            <nav className="hidden md:flex gap-3 lg:gap-4">
              <button
                onClick={() => scrollToSection('services')}
                className="text-foreground hover:text-primary transition-colors font-medium text-sm lg:text-base"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary transition-colors font-medium text-sm lg:text-base"
              >
                Обо мне
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-colors font-medium text-sm lg:text-base"
              >
                Контакты
              </button>
            </nav>

            <button className="md:hidden flex-shrink-0" aria-label="Меню">
              <Icon name="Menu" size={20} className="text-primary" />
            </button>
          </div>
        </div>
      </header>

      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-background via-secondary to-background text-foreground relative overflow-hidden">
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <div>
                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight">
                  Профессиональная защита ваших прав
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/80 font-medium">
                  Более 20 лет практики
                </p>
              </div>
              
              <div className="space-y-2.5 sm:space-y-3 md:space-y-4 pt-2 sm:pt-3 md:pt-4">
                <div className="flex items-center gap-2.5 sm:gap-3 bg-card/60 backdrop-blur-sm border border-primary/20 px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-4 rounded-xl hover:border-primary/40 transition-colors">
                  <Icon name="Phone" size={18} className="text-primary flex-shrink-0 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Телефон</span>
                    <a 
                      href="tel:+79060194020" 
                      className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground hover:text-primary transition-colors"
                    >
                      +7 906 019-40-20
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 sm:gap-3 bg-card/60 backdrop-blur-sm border border-primary/20 px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-4 rounded-xl hover:border-primary/40 transition-colors">
                  <Icon name="Mail" size={18} className="text-primary flex-shrink-0 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  <div className="flex flex-col min-w-0 overflow-hidden">
                    <span className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Email</span>
                    <a 
                      href="mailto:advokatmushovets@mail.ru" 
                      className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-foreground hover:text-primary transition-colors break-all"
                    >
                      advokatmushovets@mail.ru
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 sm:gap-3 bg-card/60 backdrop-blur-sm border border-primary/20 px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-4 rounded-xl">
                  <Icon name="Award" size={18} className="text-primary flex-shrink-0 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  <div className="flex flex-col">
                    <span className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Регистрационный номер</span>
                    <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground">77/14943</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end order-first lg:order-last">
              <div className="relative w-full max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-md">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl"></div>
                <img 
                  src="https://cdn.poehali.dev/files/photo_2026-01-15_13-09-24.jpg" 
                  alt="Адвокат Мушовец Алексей Геннадьевич - более 20 лет практики" 
                  className="relative rounded-xl sm:rounded-2xl shadow-2xl w-full h-auto border-2 sm:border-4 border-primary/30 select-none"
                  draggable="false"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12 text-primary">
            Юридические услуги
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {[
              {
                icon: 'Gavel',
                title: 'Уголовные дела',
                description: 'Представление интересов доверителей и защита по уголовным делам подозреваемых, обвиняемых, свидетелей',
                items: [
                  'Консультирование по вопросам правоприменительной практики по уголовным делам, выработка правовой позиции',
                  'Правовая помощь подозреваемым, обвиняемым, свидетелям на стадии дознания или предварительного расследования',
                  'Защита доверителей при рассмотрении уголовных дел всех категорий в суде первой, апелляционной, кассационной инстанции',
                  'Представление интересов потерпевших в уголовном деле на стадии предварительного расследования',
                  'Предъявление гражданского иска в уголовном деле в интересах потерпевших',
                  'Обжалование действий и бездействий должностных лиц в порядке статьи 124, 125 УПК РФ',
                  'Сбор доказательств по уголовному делу',
                  'Обжалование приговора в судах всех инстанций',
                  'Представление интересов по вопросам связанным с исполнением приговора, отбывания наказания, УДО'
                ]
              },
              {
                icon: 'Scale',
                title: 'Гражданские дела',
                description: 'Представление интересов доверителей по гражданским, семейным, трудовым и наследственным делам',
                items: [
                  'Консультирование по вопросам правоприменительной практики по гражданскому делу',
                  'Составление и подача исковых заявлений, ходатайств, заявлений в суд',
                  'Представление интересов доверителей в судах общей юрисдикции всех уровней и инстанций',
                  'Обжалование решений, определений по делу в суды вышестоящих инстанций',
                  'Представление интересов на стадии исполнения решений суда',
                  'Работа в службе судебных приставов, обжалование незаконных действий судебных приставов',
                  'Представление интересов по делам применения семейного и трудового законодательства',
                  'Имущественные споры, дела об установлении фактов, имеющих юридическое значение'
                ]
              },
              {
                icon: 'Building2',
                title: 'Арбитражные дела',
                description: 'Консультирование юридических лиц и ИП по вопросам правоприменительной практики',
                items: [
                  'Консультирование по спорам связанным с коммерческой и предпринимательской деятельностью',
                  'Составление и подача исковых заявлений, ходатайств в арбитражный суд',
                  'Представление интересов юридических лиц и ИП в арбитражных судах всех уровней',
                  'Дела об оспаривании ненормативных правовых актов, решений государственных органов',
                  'Представление интересов во всех государственных органах и учреждениях',
                  'Сопровождение при проведении выездных проверок налоговыми органами',
                  'Взыскание задолженности с контрагентов по делам вытекающим из предпринимательской деятельности',
                  'Представление интересов на стадии исполнения решений суда',
                  'Работа со службой судебных приставов'
                ]
              },
              {
                icon: 'Briefcase',
                title: 'Юридическое сопровождение бизнеса',
                description: 'Абонентское и комплексное юридическое обслуживание бизнеса',
                items: [
                  'Абонентское юридическое обслуживание и сопровождение бизнеса',
                  'Комплексное юридическое обслуживание бизнеса',
                  'Разработка и согласование договоров в рамках абонентского обслуживания',
                  'Претензионно-исковая работа в рамках абонентского обслуживания',
                  'Экспертиза договоров и выявление потенциальных рисков',
                  'Подготовка необходимых корпоративных документов',
                  'Подготовка документов для государственной регистрации'
                ]
              }
            ].map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border border-border bg-card hover:border-primary flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary/20 w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                {expandedService === index ? (
                  <>
                    <ul className="space-y-2 mb-4 flex-grow">
                      {service.items.map((item: string, itemIndex: number) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <Icon name="CheckCircle" size={16} className="text-primary mt-1 flex-shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant="outline" 
                      onClick={() => setExpandedService(null)}
                      className="w-full mt-auto"
                    >
                      <Icon name="ChevronUp" size={20} className="mr-2" />
                      Скрыть
                    </Button>
                  </>
                ) : (
                  <Button 
                    onClick={() => setExpandedService(index)}
                    className="w-full mt-auto"
                  >
                    <Icon name="ChevronDown" size={20} className="mr-2" />
                    Подробнее
                  </Button>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12 text-primary">
              Обо мне
            </h2>
            <Card className="p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start">
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  <img 
                    src="https://cdn.poehali.dev/files/photo_2026-01-15_13-09-24.jpg" 
                    alt="Адвокат Мушовец Алексей Геннадьевич" 
                    className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover object-top border-4 border-primary shadow-xl select-none"
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-foreground">
                    Мушовец Алексей Геннадьевич
                  </h3>
                  <div className="space-y-4 text-foreground leading-relaxed">
                    <p className="flex items-start gap-2">
                      <Icon name="Award" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span><strong>Более 20 лет</strong> успешной адвокатской практики</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Icon name="CheckCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Регистрационный номер в реестре адвокатов: <strong>77/14943</strong></span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Icon name="Scale" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Успешная практика в уголовных делах — прекращение преследований, переквалификация, смягчение наказаний, УДО</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Icon name="TrendingUp" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Гражданские и арбитражные дела — взыскано сотни миллионов рублей задолженности, сохранено имущество доверителей</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Icon name="Briefcase" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Комплексное правовое сопровождение бизнеса, налоговые споры, представительство в судах всех инстанций</span>
                    </p>
                    <p className="mt-6 font-semibold text-primary">
                      Найдем оптимальный путь разрешения даже самых сложных жизненных ситуаций
                    </p>
                    <div className="mt-6 pt-6 border-t border-border space-y-3">
                      <p className="flex items-center gap-2">
                        <Icon name="Phone" size={20} className="text-primary flex-shrink-0" />
                        <a href="tel:+79060194020" className="hover:text-primary transition-colors">+7 906 019-40-20</a>
                      </p>
                      <p className="flex items-center gap-2">
                        <Icon name="Mail" size={20} className="text-primary flex-shrink-0" />
                        <a href="mailto:advokatmushovets@mail.ru" className="hover:text-primary transition-colors">advokatmushovets@mail.ru</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 text-primary">
            Отправить заявку
          </h2>
          <p className="text-center text-muted-foreground mb-8 sm:mb-10 md:mb-12 text-base sm:text-lg">
            Заполните форму, и я свяжусь с вами в ближайшее время
          </p>
          
          <div className="max-w-3xl mx-auto">
            <Card className="p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <input 
                  type="hidden" 
                  name="access_key" 
                  value="9aee249b-1a18-4b82-b100-3fd1e316d922" 
                />
                
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base font-semibold">
                    Ваше имя <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Иван Иванов"
                    className="h-12 text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base font-semibold">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="example@mail.ru"
                    className="h-12 text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base font-semibold">
                    Телефон
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="h-12 text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-base font-semibold">
                    Сообщение <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Опишите вашу ситуацию..."
                    className="min-h-[150px] text-base"
                  />
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3">
                    <Checkbox 
                      id="privacy" 
                      checked={agreedToPrivacy}
                      onCheckedChange={(checked) => setAgreedToPrivacy(checked as boolean)}
                      className="mt-1"
                    />
                    <Label 
                      htmlFor="privacy" 
                      className="text-sm leading-relaxed cursor-pointer text-foreground/90"
                    >
                      Я согласен на{' '}
                      <a 
                        href="/privacy-policy" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        обработку персональных данных
                      </a>
                    </Label>
                  </div>

                  <div className="flex items-start gap-3">
                    <Checkbox 
                      id="terms" 
                      checked={agreedToTerms}
                      onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                      className="mt-1"
                    />
                    <Label 
                      htmlFor="terms" 
                      className="text-sm leading-relaxed cursor-pointer text-foreground/90"
                    >
                      Я ознакомлен с{' '}
                      <a 
                        href="/confidentiality" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        политикой конфиденциальности
                      </a>
                    </Label>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting || !agreedToPrivacy || !agreedToTerms}
                  className="w-full h-14 text-lg font-semibold"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Icon name="Loader2" className="animate-spin" size={20} />
                      Отправка...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Icon name="Send" size={20} />
                      Отправить заявку
                    </span>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary/50 border-t border-border text-foreground py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center gap-2">
            <p className="text-center text-sm sm:text-base md:text-lg font-semibold">
              Мушовец Алексей Геннадьевич
            </p>
            <p className="text-center text-xs sm:text-sm text-muted-foreground flex items-center gap-1">
              <Icon name="Copyright" size={14} className="sm:w-4 sm:h-4" />
              {new Date().getFullYear()} Все права защищены
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}