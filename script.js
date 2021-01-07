const cardsContainer = document.getElementById('cards-container');


const cardsData = [
  {
    question: 'What must a variable begin with?',
    answer: 'A letter, $ or _'
  },
  {
    question: 'What is a variable?',
    answer: 'Container for a piece of data'
  },
  {
    question: 'Example of Case Sensitive Variable',
    answer: 'thisIsAVariable'
  }
];

// Store DOM cards
const cardsEl = [];

// Create all cards
function createCards() {
  cardsData.forEach((data, index) => createCard(data, index));
}

// Create a single card in DOM
function createCard(data, index) {
  const card = document.createElement('div');
  card.classList.add('card');

  if (index === 0) {
    card.classList.add('active');
  }

  card.innerHTML = `
  <div class="inner-card">
  <div class="inner-card-front">
    <p>
      ${data.question}
    </p>
  </div>
  <div class="inner-card-back">
    <p>
      ${data.answer}
    </p>
  </div>
</div>
  `;

  card.addEventListener('click', () => card.classList.toggle('show-answer'));

  // Add to DOM cards
  cardsEl.push(card);

  cardsContainer.appendChild(card);

  // реализуем вывод текущей и всего карточек
}


createCards();