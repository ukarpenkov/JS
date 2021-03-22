const form = document.querySelector('.search__form');
const resultsContainer = document.querySelector('.search__findings-list');
const countContainer = document.querySelector('.search__findings');
const errorContainer = document.querySelector('.search__error');

const renderError = () => {
    errorContainer.innerHTML = `
        <img src="https://code.s3.yandex.net/web-code/entrance-test/search.svg" alt="" class="search__error-icon" />
        <p class="search__error-message">
            Произошла ошибка...
        </p>
  `;
    countContainer.innerHTML = '';
};

function renderEmptyResults() {
    errorContainer.innerHTML = `
        <img src="https://code.s3.yandex.net/web-code/entrance-test/search.svg" alt="" class="search__error-icon" />
        <p class="search__error-message">
            По вашему запросу ничего не найдено, попробуйте уточнить запрос
        </p>
  `;
    countContainer.innerHTML = '';
};

function renderCount(count) {
    countContainer.innerHTML = `
      Найдено <span class="search__findings-amount">${count.toLocaleString(
        'ru-RU'
    )}</span> результатов
  `;
};

const onSubmitStart = () => {
    countContainer.innerHTML = `Загрузка...`;
    resultsContainer.innerHTML = '';
    errorContainer.innerHTML = '';
};

var obj = {
    full_name: 'react'
}

function template(item) {
    const newElement = document.createElement('li');
    newElement.classList.add('search__finding-item');
    newElement.innerHTML = `
      <p class="search__finding-name">
          ${item.full_name}
      </p>
	`;
    return newElement;
}

async function onSubmit(event) {
    const searchFieldValue = document.querySelector('.search__textfield').value
    event.preventDefault()
    await fetch(`https://api.nomoreparties.co/github-search?q=${searchFieldValue}`)
        .then(response => response.json())
        .then(data => {
            if (data.total_count === 0) {
                renderEmptyResults()
            } else {
                renderCount(data.total_count)
                for (let i = 0; i < data.items.length; i++) {
                    let fn = data.items[i]
                    resultsContainer.append(template(fn))
                }

            }
        })
        .catch(renderError())
}

form.addEventListener('submit', onSubmit)


const result = {
    even: [],
    odd: []
};

const keysDict = {
    "0": "even",
    "1": "odd"
};

for (let i = 0; i < 10; i++) {
    const key = keysDict[i % 2];
    if (i > 3) {
        break;
    }

    result[key] = [...result[key], i];
}

delete result.even;