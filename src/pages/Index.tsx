import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/6a96a60b-db01-4bda-b8e6-9af9ea4925e1/files/f3bb269b-5c33-42e9-a2f4-88c343857d03.jpg";
const ENCRYPT_IMG = "https://cdn.poehali.dev/projects/6a96a60b-db01-4bda-b8e6-9af9ea4925e1/files/0097ab4a-78a0-4d92-925c-c9dd7e8ef570.jpg";

const NAV_LINKS = ["Главная", "О сервисе", "Преимущества", "Тарифы", "Загрузка"];

const FEATURES = [
  {
    icon: "Shield",
    title: "Военное шифрование",
    desc: "AES-256 — стандарт шифрования военного уровня. Ваши данные защищены так же, как государственные секреты.",
    color: "cyan",
  },
  {
    icon: "EyeOff",
    title: "Защита от утечек IP",
    desc: "Полная маскировка вашего реального IP-адреса. Ни один сайт не узнает, кто вы и откуда подключаетесь.",
    color: "blue",
  },
  {
    icon: "Wifi",
    title: "Защита DNS",
    desc: "Все DNS-запросы шифруются и проходят через защищённые серверы. Ваш провайдер ничего не увидит.",
    color: "green",
  },
  {
    icon: "Zap",
    title: "Молниеносная скорость",
    desc: "Оптимизированная инфраструктура на 50+ серверах по всему миру. До 10 Гбит/с без ограничений трафика.",
    color: "cyan",
  },

  {
    icon: "Smartphone",
    title: "Все платформы",
    desc: "Windows, macOS, iOS, Android, Linux. До 6 устройств одновременно на одном аккаунте.",
    color: "green",
  },
];

const PLANS = [
  {
    name: "Базовый",
    price: "149",
    period: "мес",
    features: ["1 устройство", "20+ серверов", "AES-256", "Поддержка 24/7"],
    popular: false,
  },
  {
    name: "Оптимальный",
    price: "299",
    period: "мес",
    features: ["3 устройства", "50+ серверов", "AES-256", "Kill Switch", "Защита DNS", "Поддержка 24/7"],
    popular: true,
  },
  {
    name: "Максимум",
    price: "499",
    period: "мес",
    features: ["6 устройств", "50+ серверов", "AES-256", "Kill Switch", "Защита DNS", "Выделенный IP", "Поддержка 24/7"],
    popular: false,
  },
];

const PLATFORMS = [
  { name: "Windows", icon: "Monitor" },
  { name: "macOS", icon: "Laptop" },
  { name: "iOS", icon: "Smartphone" },
  { name: "Android", icon: "Smartphone" },
  { name: "Linux", icon: "Terminal" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Главная");

  const sectionMap: Record<string, string> = {
    Главная: "hero",
    "О сервисе": "about",
    Преимущества: "features",
    Тарифы: "pricing",
    Загрузка: "download",
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const colorMap = {
    cyan: { border: "rgba(0,245,255,0.2)", icon: "rgba(0,245,255,0.1)", iconColor: "var(--neon-cyan)", glow: "rgba(0,245,255,0.03)" },
    blue: { border: "rgba(0,128,255,0.2)", icon: "rgba(0,128,255,0.1)", iconColor: "var(--neon-blue)", glow: "rgba(0,128,255,0.03)" },
    green: { border: "rgba(0,255,136,0.2)", icon: "rgba(0,255,136,0.1)", iconColor: "var(--neon-green)", glow: "rgba(0,255,136,0.03)" },
  };

  return (
    <div className="min-h-screen cyber-grid" style={{ backgroundColor: "var(--dark-bg)" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(6,10,15,0.85)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(0,245,255,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, var(--neon-cyan), var(--neon-blue))" }}>
              <Icon name="Shield" size={16} className="text-black" />
            </div>
            <span className="font-bold text-xl" style={{ fontFamily: "'Oswald', sans-serif", color: "var(--neon-cyan)" }}>
              ShieldVPN
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => { setActiveSection(link); scrollTo(sectionMap[link]); }}
                className="text-sm transition-all duration-300"
                style={{
                  fontFamily: "'Golos Text', sans-serif",
                  color: activeSection === link ? "var(--neon-cyan)" : "rgba(255,255,255,0.6)",
                  textShadow: activeSection === link ? "0 0 10px rgba(0,245,255,0.5)" : "none",
                }}
              >
                {link}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="btn-outline-neon px-5 py-2 rounded-lg text-sm">Войти</button>
            <button className="btn-neon px-5 py-2 rounded-lg text-sm">Попробовать</button>
          </div>

          <button className="md:hidden" style={{ color: "white" }} onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-4" style={{ background: "rgba(6,10,15,0.95)" }}>
            {NAV_LINKS.map((link) => (
              <button key={link} onClick={() => { setActiveSection(link); scrollTo(sectionMap[link]); }}
                className="text-left text-sm py-2" style={{ color: "rgba(255,255,255,0.8)", fontFamily: "'Golos Text', sans-serif" }}>
                {link}
              </button>
            ))}
            <div className="flex gap-3 pt-2">
              <button className="btn-outline-neon flex-1 py-2 rounded-lg text-sm">Войти</button>
              <button className="btn-neon flex-1 py-2 rounded-lg text-sm">Попробовать</button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full" style={{ background: "radial-gradient(circle, rgba(0,245,255,0.12), transparent)", filter: "blur(60px)" }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full" style={{ background: "radial-gradient(circle, rgba(0,128,255,0.08), transparent)", filter: "blur(80px)" }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center py-20">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 animate-fade-up" style={{ background: "rgba(0,245,255,0.08)", border: "1px solid rgba(0,245,255,0.2)" }}>
              <div className="w-2 h-2 rounded-full pulse-dot" style={{ background: "var(--neon-green)" }} />
              <span className="text-xs" style={{ color: "var(--neon-green)", fontFamily: "'Golos Text', sans-serif" }}>50+ серверов онлайн</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-none mb-6 animate-fade-up-delay-1">
              <span style={{ color: "white" }}>ВАША</span>
              <br />
              <span className="gradient-text">ЦИФРОВАЯ</span>
              <br />
              <span style={{ color: "white" }}>БРОНЯ</span>
            </h1>

            <p className="text-lg mb-8 leading-relaxed animate-fade-up-delay-2" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Golos Text', sans-serif" }}>
              Военное шифрование AES-256, защита от утечек IP и DNS. Анонимность и безопасность в интернете для всех ваших устройств.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay-3">
              <button className="btn-neon px-8 py-4 rounded-xl text-base">Начать защиту</button>
              <button className="btn-outline-neon px-8 py-4 rounded-xl text-base flex items-center gap-2 justify-center">
                <Icon name="Play" size={18} />
                Как это работает
              </button>
            </div>

            <div className="flex items-center gap-8 mt-10 animate-fade-up-delay-4">
              {[["10M+", "Пользователей"], ["99.9%", "Аптайм"]].map(([val, label]) => (
                <div key={label}>
                  <div className="text-2xl font-bold gradient-text" style={{ fontFamily: "'Oswald', sans-serif" }}>{val}</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Golos Text', sans-serif" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center animate-fade-up-delay-2">
            <div className="relative float-anim">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden" style={{ border: "2px solid rgba(0,245,255,0.3)", boxShadow: "0 0 60px rgba(0,245,255,0.2), 0 0 120px rgba(0,245,255,0.08)" }}>
                <img src={HERO_IMG} alt="ShieldVPN" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl flex items-center justify-center" style={{ background: "var(--card-bg)", border: "1px solid rgba(0,245,255,0.3)", boxShadow: "0 0 20px rgba(0,245,255,0.15)" }}>
                <div className="text-center">
                  <div style={{ color: "var(--neon-cyan)", fontFamily: "'Oswald', sans-serif", fontSize: "18px", fontWeight: "700" }}>256</div>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "10px" }}>AES-BIT</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-28 h-12 rounded-xl flex items-center justify-center gap-2 px-3" style={{ background: "var(--card-bg)", border: "1px solid rgba(0,255,136,0.3)", boxShadow: "0 0 20px rgba(0,255,136,0.1)" }}>
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "var(--neon-green)", boxShadow: "0 0 8px var(--neon-green)" }} />
                <span style={{ color: "var(--neon-green)", fontFamily: "'Golos Text', sans-serif", fontSize: "11px", fontWeight: "600" }}>SECURED</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden relative" style={{ border: "1px solid rgba(0,245,255,0.2)" }}>
                <img src={ENCRYPT_IMG} alt="Encryption" className="w-full h-80 object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(6,10,15,0.6), transparent)" }} />
              </div>
              <div className="absolute top-6 right-6 px-4 py-3 rounded-xl" style={{ background: "rgba(6,10,15,0.9)", border: "1px solid rgba(0,245,255,0.2)" }}>
                <div className="flex items-center gap-2">
                  <Icon name="Lock" size={14} style={{ color: "var(--neon-cyan)" }} />
                  <span style={{ color: "var(--neon-cyan)", fontFamily: "'Golos Text', sans-serif", fontSize: "12px" }}>Шифрование активно</span>
                </div>
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold mb-4 neon-text" style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.2em" }}>
                О СЕРВИСЕ
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Oswald', sans-serif", color: "white" }}>
                ТЕХНОЛОГИИ<br />
                <span className="gradient-text">СЛЕДУЮЩЕГО</span><br />
                ПОКОЛЕНИЯ
              </h2>
              <p className="mb-6 leading-relaxed" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Golos Text', sans-serif" }}>
                ShieldVPN создан командой экспертов по кибербезопасности с опытом работы в государственных структурах. Мы используем те же технологии шифрования, что и военные ведомства.
              </p>
              <p className="mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Golos Text', sans-serif" }}>
                Политика абсолютного нулевого журналирования — мы не храним никаких данных о вашей активности. Вы остаётесь полностью анонимными.
              </p>
              <div className="flex gap-6">
                {[{ icon: "FileX", text: "Нулевое логирование" }, { icon: "ShieldCheck", text: "Открытый аудит" }].map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(0,245,255,0.1)", border: "1px solid rgba(0,245,255,0.2)" }}>
                      <Icon name={icon} size={16} style={{ color: "var(--neon-cyan)" }} />
                    </div>
                    <span style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Golos Text', sans-serif", fontSize: "14px" }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 relative">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(0,245,255,0.03) 0%, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold mb-4 neon-text" style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.2em" }}>
              ПРЕИМУЩЕСТВА
            </div>
            <h2 className="text-4xl md:text-6xl font-bold" style={{ fontFamily: "'Oswald', sans-serif", color: "white" }}>
              ПОЧЕМУ <span className="gradient-text">SHIELDVPN</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => {
              const c = colorMap[f.color as keyof typeof colorMap];
              return (
                <div key={f.title}
                  className={`p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 animate-fade-up-delay-${Math.min(i + 1, 6)}`}
                  style={{ background: `linear-gradient(135deg, var(--card-bg), ${c.glow})`, border: `1px solid ${c.border}` }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: c.icon }}>
                    <Icon name={f.icon} size={22} style={{ color: c.iconColor }} />
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "'Oswald', sans-serif", color: "white" }}>{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Golos Text', sans-serif" }}>{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold mb-4 neon-text" style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.2em" }}>
              ТАРИФЫ
            </div>
            <h2 className="text-4xl md:text-6xl font-bold" style={{ fontFamily: "'Oswald', sans-serif", color: "white" }}>
              ВЫБЕРИТЕ <span className="gradient-text">ЗАЩИТУ</span>
            </h2>
            <p className="mt-4 text-sm" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Golos Text', sans-serif" }}>7 дней бесплатного пробного периода — без привязки карты</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {PLANS.map((plan) => (
              <div key={plan.name} className="relative rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-2"
                style={{
                  background: plan.popular ? "linear-gradient(135deg, rgba(0,245,255,0.08), rgba(0,128,255,0.08))" : "var(--card-bg)",
                  border: plan.popular ? "2px solid rgba(0,245,255,0.5)" : "1px solid var(--card-border)",
                  boxShadow: plan.popular ? "0 0 40px rgba(0,245,255,0.12)" : "none",
                }}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-full text-xs font-bold"
                    style={{ background: "linear-gradient(135deg, var(--neon-cyan), var(--neon-blue))", color: "#060a0f", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.1em" }}>
                    ПОПУЛЯРНЫЙ
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "'Oswald', sans-serif", color: plan.popular ? "var(--neon-cyan)" : "white" }}>
                    {plan.name}
                  </h3>
                  <div className="flex items-end gap-1">
                    <span className="text-5xl font-bold" style={{ fontFamily: "'Oswald', sans-serif", color: "white" }}>{plan.price}₽</span>
                    <span className="mb-2 text-sm" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Golos Text', sans-serif" }}>/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,255,136,0.15)" }}>
                        <Icon name="Check" size={12} style={{ color: "var(--neon-green)" }} />
                      </div>
                      <span className="text-sm" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Golos Text', sans-serif" }}>{feat}</span>
                    </li>
                  ))}
                </ul>
                <button className={plan.popular ? "btn-neon w-full py-3 rounded-xl text-sm" : "btn-outline-neon w-full py-3 rounded-xl text-sm"}>
                  Выбрать план
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD */}
      <section id="download" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(0,245,255,0.06), rgba(0,128,255,0.06))", border: "1px solid rgba(0,245,255,0.2)" }}>
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,245,255,0.08), transparent 60%)" }} />

            <div className="text-sm font-semibold mb-4 neon-text relative" style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.2em" }}>
              ЗАГРУЗКА
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 relative" style={{ fontFamily: "'Oswald', sans-serif", color: "white" }}>
              СКАЧАЙТЕ <span className="gradient-text">ПРИЛОЖЕНИЕ</span>
            </h2>
            <p className="mb-10 max-w-xl mx-auto relative" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Golos Text', sans-serif" }}>
              Доступно на всех популярных платформах. Установка занимает меньше минуты — и вы уже под защитой.
            </p>

            <div className="flex flex-wrap justify-center gap-4 relative">
              {PLATFORMS.map((p) => (
                <button key={p.name}
                  className="flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "white" }}>
                  <Icon name={p.icon} size={20} style={{ color: "var(--neon-cyan)" }} />
                  <span style={{ fontFamily: "'Oswald', sans-serif", fontWeight: "600", letterSpacing: "0.05em" }}>{p.name}</span>
                </button>
              ))}
            </div>

            <div className="mt-10 relative">
              <button className="btn-neon px-10 py-4 rounded-xl text-base">
                Начать бесплатно — 7 дней
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12" style={{ borderTop: "1px solid rgba(0,245,255,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, var(--neon-cyan), var(--neon-blue))" }}>
              <Icon name="Shield" size={14} className="text-black" />
            </div>
            <span className="font-bold" style={{ fontFamily: "'Oswald', sans-serif", color: "var(--neon-cyan)" }}>ShieldVPN</span>
          </div>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Golos Text', sans-serif" }}>
            © 2024 ShieldVPN. Все права защищены.
          </p>
          <div className="flex gap-6">
            {["Политика", "Условия", "Контакты"].map((link) => (
              <button key={link} className="text-sm hover:text-white transition-colors"
                style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Golos Text', sans-serif" }}>
                {link}
              </button>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
}