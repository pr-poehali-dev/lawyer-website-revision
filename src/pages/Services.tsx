import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

export default function Services() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location.hash]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
        (e.ctrlKey && e.key === 'U') ||
        (e.metaKey && e.altKey && (e.key === 'I' || e.key === 'J' || e.key === 'C'))
      ) {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('contextmenu', (e) => e.preventDefault());
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
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
        setIsFormSubmitted(true);
        setAgreedToPrivacy(false);
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
            <Link to="/" className="flex flex-col min-w-0 flex-1">
              <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground whitespace-nowrap">
                Адвокатский кабинет
              </div>
              <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-foreground font-bold mt-0.5">
                Адвоката Мушовец Алексея Геннадьевича
              </p>
              <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-foreground font-bold mt-0.5">
                город Москва
              </p>
              <p className="text-[9px] sm:text-[10px] md:text-xs text-muted-foreground mt-0.5 truncate">
                Регистрационный номер в реестре 77/14943
              </p>
            </Link>
            
            <nav className="hidden md:flex gap-3 lg:gap-4">
              <Link
                to="/"
                className="text-foreground hover:text-primary transition-colors font-medium text-sm lg:text-base"
              >
                Главная
              </Link>
              <button
                onClick={() => scrollToSection('services')}
                className="text-foreground hover:text-primary transition-colors font-medium text-sm lg:text-base"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-colors font-medium text-sm lg:text-base"
              >
                Контакты
              </button>
            </nav>

            <button 
              className="md:hidden flex-shrink-0" 
              aria-label="Меню"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={20} className="text-primary" />
            </button>
          </div>
          
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
              <nav className="flex flex-col gap-3">
                <Link
                  to="/"
                  className="text-foreground hover:text-primary transition-colors font-medium text-base text-left px-2 py-2 hover:bg-card/50 rounded-lg"
                >
                  Главная
                </Link>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-foreground hover:text-primary transition-colors font-medium text-base text-left px-2 py-2 hover:bg-card/50 rounded-lg"
                >
                  Услуги
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-foreground hover:text-primary transition-colors font-medium text-base text-left px-2 py-2 hover:bg-card/50 rounded-lg"
                >
                  Контакты
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

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
              {isFormSubmitted ? (
                <div className="text-center py-8 sm:py-12">
                  <div className="mb-6 flex justify-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="CheckCircle" size={48} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
                    Заявка успешно отправлена!
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
                    Спасибо за обращение! Я свяжусь с вами в ближайшее время для обсуждения вашего вопроса.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                    <Button
                      size="lg"
                      onClick={() => setIsFormSubmitted(false)}
                      variant="outline"
                      className="w-full sm:w-auto"
                    >
                      Отправить еще одну заявку
                    </Button>
                    <Button
                      size="lg"
                      onClick={() => window.location.href = 'tel:+79060194020'}
                      className="w-full sm:w-auto"
                    >
                      <Icon name="Phone" size={20} className="mr-2" />
                      Позвонить сейчас
                    </Button>
                  </div>
                  <div className="mt-8 pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-3">Или свяжитесь со мной напрямую:</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a href="tel:+79060194020" className="text-primary hover:underline font-semibold select-text pointer-events-auto cursor-pointer" style={{ WebkitUserSelect: 'text', userSelect: 'text' }}>
                        +7 906 019-40-20
                      </a>
                      <span className="hidden sm:inline text-muted-foreground">|</span>
                      <a href="mailto:advokatmushovets@mail.ru" className="text-primary hover:underline font-semibold select-text pointer-events-auto cursor-pointer" style={{ WebkitUserSelect: 'text', userSelect: 'text' }}>
                        advokatmushovets@mail.ru
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
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

                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting || !agreedToPrivacy}
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
              )}
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
            <p className="text-center text-xs sm:text-sm text-muted-foreground">
              адвокат город Москва
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