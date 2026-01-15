import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Confidentiality() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-secondary border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Политика конфиденциальности</h1>
            <Button variant="outline" onClick={() => window.close()}>
              <Icon name="X" size={20} />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. Общие положения</h2>
            <p className="leading-relaxed text-foreground/90">
              Настоящая Политика конфиденциальности определяет порядок обработки и защиты информации 
              о физических и юридических лицах, обратившихся за юридическими услугами к адвокату 
              Мушовцу Алексею Геннадьевичу (регистрационный номер в реестре 77/14943).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. Адвокатская тайна</h2>
            <p className="leading-relaxed text-foreground/90 mb-3">
              В соответствии со статьей 8 Федерального закона от 31.05.2002 № 63-ФЗ «Об адвокатской 
              деятельности и адвокатуре в Российской Федерации» адвокатской тайной являются:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/90 ml-4">
              <li>Любые сведения, связанные с оказанием адвокатом юридической помощи</li>
              <li>Факт обращения к адвокату</li>
              <li>Содержание консультаций и переговоров</li>
              <li>Документы и информация, полученные в процессе оказания юридической помощи</li>
            </ul>
            <p className="leading-relaxed text-foreground/90 mt-4">
              Адвокат не может быть освобожден от обязанности хранить адвокатскую тайну иначе 
              как по прямому указанию доверителя.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. Конфиденциальность информации</h2>
            <p className="leading-relaxed text-foreground/90 mb-3">
              Адвокат гарантирует конфиденциальность всей информации, полученной в процессе:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/90 ml-4">
              <li>Консультаций и встреч с клиентами</li>
              <li>Ведения дел в судах всех инстанций</li>
              <li>Переписки и телефонных переговоров</li>
              <li>Подготовки процессуальных документов</li>
              <li>Представления интересов доверителей в государственных органах</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. Использование информации</h2>
            <p className="leading-relaxed text-foreground/90">
              Вся информация, предоставленная клиентом, используется исключительно для оказания 
              качественной юридической помощи и не может быть передана третьим лицам без письменного 
              согласия доверителя, за исключением случаев, предусмотренных законодательством РФ.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. Хранение информации</h2>
            <p className="leading-relaxed text-foreground/90">
              Документы и материалы, связанные с оказанием юридической помощи, хранятся адвокатом 
              в течение срока, установленного законодательством об адвокатской деятельности, 
              с соблюдением мер по обеспечению их конфиденциальности и безопасности.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">6. Ответственность</h2>
            <p className="leading-relaxed text-foreground/90">
              За разглашение адвокатской тайны адвокат несет ответственность в соответствии 
              с законодательством Российской Федерации. Нарушение конфиденциальности может 
              повлечь дисциплинарную, административную и уголовную ответственность.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">7. Контактная информация</h2>
            <p className="leading-relaxed text-foreground/90">
              По вопросам конфиденциальности обращайтесь:
            </p>
            <div className="bg-card p-6 rounded-lg mt-4 border border-border">
              <p className="font-semibold text-foreground mb-2">Мушовец Алексей Геннадьевич</p>
              <p className="text-foreground/80">Регистрационный номер: 77/14943</p>
              <p className="text-foreground/80 flex items-center gap-2 mt-3">
                <Icon name="Phone" size={18} className="text-primary" />
                <a href="tel:+79060194020" className="text-primary hover:underline">+7 906 019-40-20</a>
              </p>
            </div>
          </section>

          <div className="text-sm text-muted-foreground mt-12 pt-6 border-t border-border">
            Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
          </div>
        </div>
      </main>
    </div>
  );
}
