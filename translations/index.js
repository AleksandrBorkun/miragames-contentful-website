const translations = {
  ua: {
    blog: "Блог",
    learn: "Курси",
    search: "Пошук...",
    about: "Про нас",
    "form.name": "Ім'я",
    "form.email": "Ваша електронна адреса",
    "form.disclaimer":
      "Ваші данні будуть використані виключно для відправки новин про нові курси чи події, а також для створення спеціальних пропозицій",
    "form.acceptTerms":
      "Я даю згоду на використання моїх данних згідно з політикою конфіденціальності",
    "form.submit": "Відправити",
    "form.subscribed": "Дякую за підписку!",
    "form.title": "Отримати знижку на WebDev Essential курс",
    "latest-videos": "Останні новини",
    "course.unfinished": "Дата курса невідома",
    "course.buy": "Купити негайно!",
    "course.notify": "Слідкувати за курсом",
    "course.notify.signup": "Отримати новий курс першим",
  },
  ru: {
    blog: "Блог",
    learn: "Курсы",
    search: "Найти...",
    about: "О нас",
    "form.name": "Имя",
    "form.email": "Ваш электронный адрес",
    "form.disclaimer":
      "Ваши данные будут использованы исключительно для отправки новостей о курсах или событий, а также для участия в специальных предложениях",
    "form.acceptTerms":
      "Даю согласие на использование моих данных в соответствии с политикой конфиденциальности",
    "form.submit": "Отправить",
    "form.subscribed": "Спасибо за подписку!",
    "form.title": "Получить скидку на курс основы WebDev",
    "latest-videos": "Последние загрузки",
    "course.unfinished": "Дата курса не объявленна",
    "course.buy": "Купить сейчас!",
    "course.notify": "Следить за курсом",
    "course.notify.signup": "Следить за выходом новых курсов",
  },
  en: {
    blog: "Blog",
    learn: "Courses",
    search: "Search",
    about: "About",
    "form.name": "Name",
    "form.email": "Email",
    "form.disclaimer":
      "Your data will only be used to send news related to new courses and events, and to make sure you are participation in special offers",
    "form.acceptTerms":
      "I accept and agree that my inforamtion wioll be used in accordance with privacy policy",
    "form.submit": "Sumbit",
    "form.subscribed": "Thanks for submission!",
    "form.title": "Get WebDev Essential course for less then 10$",
    "latest-videos": "Latest uploads",
    "course.unfinished": "To be announced",
    "course.buy": "Buy Now!",
    "course.notify": "Notify Me",
    "course.notify.signup": "Notify Me when new course arrived",
  },
};

export const getTranslation = (key, lang = "en") => {
  return translations[lang][key] || key;
};
