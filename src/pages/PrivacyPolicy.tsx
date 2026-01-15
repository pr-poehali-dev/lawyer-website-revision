import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-secondary border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Политика обработки персональных данных</h1>
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
              Настоящая Политика обработки персональных данных (далее — Политика) определяет позицию 
              адвоката Мушовца Алексея Геннадьевича (регистрационный номер 77/14943) в отношении обработки 
              персональных данных клиентов и посетителей сайта.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. Персональные данные, которые обрабатываются</h2>
            <p className="leading-relaxed text-foreground/90 mb-3">
              В процессе оказания юридических услуг могут обрабатываться следующие персональные данные:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/90 ml-4">
              <li>Фамилия, имя, отчество</li>
              <li>Контактный телефон</li>
              <li>Адрес электронной почты</li>
              <li>Информация, необходимая для оказания юридических услуг</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. Цели обработки персональных данных</h2>
            <p className="leading-relaxed text-foreground/90 mb-3">
              Персональные данные обрабатываются в следующих целях:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/90 ml-4">
              <li>Связь с клиентом для консультаций и оказания юридических услуг</li>
              <li>Информирование о ходе ведения дела</li>
              <li>Подготовка процессуальных документов</li>
              <li>Исполнение договорных обязательств</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. Правовые основания обработки</h2>
            <p className="leading-relaxed text-foreground/90">
              Обработка персональных данных осуществляется на основании Федерального закона от 27.07.2006 № 152-ФЗ 
              «О персональных данных» и Федерального закона от 31.05.2002 № 63-ФЗ «Об адвокатской деятельности 
              и адвокатуре в Российской Федерации» с согласия субъекта персональных данных.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. Защита персональных данных</h2>
            <p className="leading-relaxed text-foreground/90">
              Адвокат принимает все необходимые меры для защиты персональных данных от неправомерного доступа, 
              изменения, раскрытия или уничтожения. Соблюдается адвокатская тайна в соответствии с 
              законодательством РФ.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">6. Права субъекта персональных данных</h2>
            <p className="leading-relaxed text-foreground/90 mb-3">
              Субъект персональных данных имеет право:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/90 ml-4">
              <li>Получать информацию о обработке своих персональных данных</li>
              <li>Требовать уточнения, блокирования или уничтожения своих персональных данных</li>
              <li>Отозвать согласие на обработку персональных данных</li>
              <li>Обжаловать действия или бездействие в уполномоченный орган по защите прав субъектов персональных данных</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">7. Контактная информация</h2>
            <p className="leading-relaxed text-foreground/90">
              По вопросам обработки персональных данных обращайтесь:
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
