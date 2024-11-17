const heroes = [
    {
        "name": "Бетмен",
        "universe": "DC Comics",
        "alterego": "Брюс Уэйн",
        "occupation": "борец с преступностью, филантроп, миллиардер",
        "friends": "Робин, Бэтгерл",
        "superpowers": "интеллект, обширные познания, знания боевых искусств, ловкость",
        "url": "https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg",
        "info": "По популярности человек-летучая мышь может сравниться только с Суперменом. Его образ кажется очень мистическим и мрачным..."
    },
    {
        "name": "Супермен",
        "universe": "DC Comics",
        "alterego": "Кларк Кент",
        "occupation": "борец за справедливость",
        "friends": "собака Крипто",
        "superpowers": "непробиваемость, суперсила, полёт, самоисцеление...",
        "url": "https://n1s1.hsmedia.ru/06/d3/73/06d37321618034ec5f2a65b09c8576e3/547x397_0xac120002_45567661540468871.jpg",
        "info": "Полная противоположность своему противнику Бэтмену. Если Брюс Уэйн был простым человеком и стал героем..."
    }
  ];
  
export function loadHeroes() {
    const container = document.getElementById('heroes-container');
    container.innerHTML = '';
    heroes.forEach(hero => {
        const heroCard = document.createElement('div');
        heroCard.className = "hero-card";
  
        heroCard.innerHTML = 
            `<img src="${hero.url}" alt="${hero.name}" className="hero-image">
            <div class="hero-info">
                <h2>${hero.name}</h2>
                <p><strong>Вселенная:</strong> ${hero.universe}</p>
                <p><strong>Альтер эго:</strong> ${hero.alterego}</p>
                <p><strong>Род занятий:</strong> ${hero.occupation}</p>
                <p><strong>Друзья:</strong> ${hero.friends}</p>
                <p><strong>Суперспособности:</strong> ${hero.superpowers}</p>
                <p><strong>Информация:</strong> ${hero.info}</p>
                <div class="rating">
                    <label for="rating-${hero.name}">Ваша оценка (1-5): </label>
                    <input type="number" id="rating-${hero.name}" min="1" max="5" />
                    <button onclick="saveRating('${hero.name}')">Сохранить</button>
                </div>
            </div>`
        ;
  
        container.appendChild(heroCard);
    });
  }
  
export function saveRating(heroName) {
    const ratingInput = document.getElementById(rating-`${heroName}`);
    const ratingValue = ratingInput.value;
  
    if (ratingValue >= 1 && ratingValue <= 5) {
      localStorage.setItem(heroName, ratingValue);
      alert(`Оценка для ${heroName} сохранена!`);
  } else {
      alert('Пожалуйста, введите оценку от 1 до 5');
  }
  }
  
  // Загрузка героев при загрузке страницы
  window.onload = loadHeroes;
  