import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

type ChatStep = 'greeting' | 'ask_name' | 'ask_problem' | 'submitting' | 'submitted';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [step, setStep] = useState<ChatStep>('greeting');
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [userName, setUserName] = useState('');
  const [showBubble, setShowBubble] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const msgIdRef = useRef(0);

  const addBotMessage = (text: string) => {
    msgIdRef.current += 1;
    setMessages(prev => [...prev, { id: msgIdRef.current, text, isBot: true }]);
  };

  const addUserMessage = (text: string) => {
    msgIdRef.current += 1;
    setMessages(prev => [...prev, { id: msgIdRef.current, text, isBot: false }]);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setShowBubble(true);
      }
    }, 15000);
    return () => clearTimeout(timer);
  }, [isDismissed]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage('Здравствуйте! Я помощник адвоката Мушовец А.Г.');
        setTimeout(() => {
          addBotMessage('Как к вам обращаться?');
          setStep('ask_name');
        }, 800);
      }, 400);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleOpen = () => {
    setIsOpen(true);
    setShowBubble(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsDismissed(true);
    setShowBubble(false);
  };

  const handleSend = async () => {
    const value = inputValue.trim();
    if (!value) return;

    if (step === 'ask_name') {
      addUserMessage(value);
      setInputValue('');
      setUserName(value);
      setTimeout(() => {
        addBotMessage(`${value}, расскажите кратко о вашей проблеме — я передам информацию адвокату.`);
        setStep('ask_problem');
      }, 600);
    } else if (step === 'ask_problem') {
      addUserMessage(value);
      setInputValue('');
      setStep('submitting');

      const formData = new FormData();
      formData.append('access_key', '9aee249b-1a18-4b82-b100-3fd1e316d922');
      formData.append('subject', `Заявка из чата от ${userName}`);
      formData.append('name', userName);
      formData.append('message', value);
      formData.append('from_name', 'Чат-виджет сайта');

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          setTimeout(() => {
            addBotMessage('Заявка отправлена! Алексей Геннадьевич свяжется с вами в ближайшее время.');
            setTimeout(() => {
              addBotMessage('Не хотите ждать? Позвоните напрямую — это бесплатная консультация:');
              setStep('submitted');
            }, 1000);
          }, 600);
        } else {
          setTimeout(() => {
            addBotMessage('Не удалось отправить заявку. Попробуйте позвонить напрямую:');
            setStep('submitted');
          }, 600);
        }
      } catch {
        setTimeout(() => {
          addBotMessage('Произошла ошибка. Позвоните напрямую:');
          setStep('submitted');
        }, 600);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (isDismissed && !isOpen) return null;

  return (
    <>
      {showBubble && !isOpen && (
        <div className="fixed bottom-44 sm:bottom-48 right-3 sm:right-4 md:right-6 z-50 animate-in slide-in-from-bottom-4 fade-in duration-500">
          <div className="relative bg-card border border-border rounded-2xl rounded-br-sm shadow-xl px-4 py-3 max-w-[260px]">
            <button
              onClick={() => { setShowBubble(false); setIsDismissed(true); }}
              className="absolute -top-2 -right-2 w-5 h-5 bg-muted hover:bg-muted-foreground/20 rounded-full flex items-center justify-center transition-colors"
            >
              <Icon name="X" size={12} className="text-muted-foreground" />
            </button>
            <button onClick={handleOpen} className="text-left">
              <p className="text-sm text-foreground font-medium">Нужна юридическая помощь?</p>
              <p className="text-xs text-muted-foreground mt-1">Напишите — ответим быстро</p>
            </button>
          </div>
        </div>
      )}

      {isOpen && (
        <div className="fixed bottom-44 sm:bottom-48 right-3 sm:right-4 md:right-6 z-[60] w-[calc(100%-24px)] sm:w-[360px] animate-in slide-in-from-bottom-4 fade-in duration-300">
          <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col" style={{ maxHeight: 'calc(100vh - 100px)' }}>
            <div className="bg-primary px-4 py-3 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Icon name="Scale" size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Помощник адвоката</p>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-white/70 text-[10px]">онлайн</span>
                  </div>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="text-white/70 hover:text-white transition-colors p-1"
              >
                <Icon name="X" size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-3 py-3 space-y-2.5 min-h-[200px] max-h-[350px]">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div
                    className={`max-w-[85%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                      msg.isBot
                        ? 'bg-secondary text-foreground rounded-bl-sm'
                        : 'bg-primary text-white rounded-br-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {step === 'submitting' && (
                <div className="flex justify-start">
                  <div className="bg-secondary text-foreground px-3 py-2 rounded-2xl rounded-bl-sm text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="Loader2" size={14} className="animate-spin text-primary" />
                      <span>Отправляю...</span>
                    </div>
                  </div>
                </div>
              )}

              {step === 'submitted' && (
                <div className="flex flex-col gap-2 items-start">
                  <a
                    href="tel:+79060194020"
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-colors w-full justify-center"
                  >
                    <Icon name="Phone" size={16} />
                    +7 906 019-40-20
                  </a>
                  <a
                    href="https://t.me/AdvokatMushovets"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#2AABEE] hover:bg-[#229ED9] text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-colors w-full justify-center"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                    Написать в Telegram
                  </a>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {(step === 'ask_name' || step === 'ask_problem') && (
              <div className="border-t border-border px-3 py-2.5 flex-shrink-0">
                {step === 'ask_problem' ? (
                  <div className="flex gap-2">
                    <Textarea
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Опишите вашу ситуацию..."
                      className="min-h-[60px] max-h-[100px] text-sm resize-none flex-1"
                    />
                    <Button
                      size="icon"
                      onClick={handleSend}
                      disabled={!inputValue.trim()}
                      className="h-[60px] w-10 flex-shrink-0"
                    >
                      <Icon name="Send" size={16} />
                    </Button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Ваше имя..."
                      className="h-10 text-sm"
                    />
                    <Button
                      size="icon"
                      onClick={handleSend}
                      disabled={!inputValue.trim()}
                      className="h-10 w-10 flex-shrink-0"
                    >
                      <Icon name="Send" size={16} />
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {!isOpen && !showBubble && !isDismissed && (
        <div className="fixed bottom-44 sm:bottom-48 right-3 sm:right-4 md:right-6 z-50">
          <button
            onClick={handleOpen}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110"
          >
            <Icon name="MessageCircle" size={22} className="text-white sm:w-6 sm:h-6" />
          </button>
        </div>
      )}
    </>
  );
}