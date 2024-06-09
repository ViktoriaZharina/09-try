// Об'єкт для зберігання значень полів форми
const formData = {
  email: '',
  message: ''
};

// Отримання посилання на форму та її елементи
const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

// Функція для оновлення formData та збереження в локальне сховище
function updateFormData() {
  formData.email = emailInput.value.trim();
  formData.message = messageInput.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

// Завантаження даних з локального сховища при завантаженні сторінки
function loadFormData() {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    emailInput.value = parsedData.email || '';
    messageInput.value = parsedData.message || '';
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';
  }
}

// Обробка події введення даних у форму
form.addEventListener('input', updateFormData);

// Обробка події відправлення форми
form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // Перевірка заповнення полів
  if (!formData.email || !formData.message) {
    alert('Please fill in all fields');
    return;
  }

  // Виведення даних у консоль
  console.log(formData);

  // Очищення форми, локального сховища та об'єкта formData
  form.reset();
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
});

// Завантаження даних з локального сховища при завантаженні сторінки
loadFormData();
