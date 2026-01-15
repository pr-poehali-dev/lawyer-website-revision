import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [expandedService, setExpandedService] = useState<number | null>(null);

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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl font-bold text-primary">
                Кабинетский Адвокат
              </h1>
              <p className="text-sm md:text-base text-secondary font-semibold mt-1">
                Адвоката Мушовец А. Г.
              </p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">
                Регистрационный номер в реестре 77/14943
              </p>
            </div>
            
            <nav className="hidden md:flex gap-6">
              <button
                onClick={() => scrollToSection('services')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Обо мне
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Контакты
              </button>
            </nav>

            <button className="md:hidden">
              <Icon name="Menu" size={24} className="text-primary" />
            </button>
          </div>
        </div>
      </header>

      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Квалифицированная<br />юридическая защита
              </h2>
              <p className="text-xl md:text-2xl mb-4 opacity-90">
                Более 20 лет практики
              </p>
              <div className="mt-8 inline-flex flex-col items-start bg-white/10 backdrop-blur-sm px-8 py-6 rounded-lg">
                <p className="text-3xl md:text-4xl font-bold mb-2">ТЕЛЕФОН:</p>
                <a 
                  href="tel:+79060194020" 
                  className="text-3xl md:text-5xl font-bold hover:text-white/80 transition-colors"
                >
                  +7 906 019-40-20
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src="https://cdn.poehali.dev/files/photo_2026-01-15_13-09-24.jpg" 
                  alt="Мушовец Алексей Геннадьевич" 
                  className="rounded-lg shadow-2xl max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Юридические услуги
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
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
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-secondary mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                {expandedService === index ? (
                  <>
                    <ul className="space-y-2 mb-4">
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
                      className="w-full"
                    >
                      <Icon name="ChevronUp" size={20} className="mr-2" />
                      Скрыть
                    </Button>
                  </>
                ) : (
                  <Button 
                    onClick={() => setExpandedService(index)}
                    className="w-full mt-2"
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

      <section id="about" className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              Обо мне
            </h2>
            <Card className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Icon name="User" size={64} className="text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-secondary">
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
                      <Icon name="BookOpen" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Специализация на уголовном, гражданском и корпоративном праве</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Icon name="TrendingUp" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Сотни успешно завершенных дел и довольных клиентов</span>
                    </p>
                    <p className="mt-6">
                      Предоставляю квалифицированную юридическую помощь физическим и юридическим лицам. 
                      Индивидуальный подход к каждому клиенту, профессионализм и конфиденциальность гарантированы.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
            Отправить заявку
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Заполните форму, и я свяжусь с вами в ближайшее время
          </p>
          
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-12 shadow-xl">
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

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
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

      <footer className="bg-secondary text-white py-8">
        <div className="container mx-auto px-4">
          <p className="text-center text-base md:text-lg">
            Мушовец Алексей Геннадьевич
          </p>
        </div>
      </footer>
    </div>
  );
}