document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    // Получаем значения из формы
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Проверка данных (опционально)
    if (!email || !password) {
        alert('Пожалуйста, заполните все поля.');
        return;
    }

    // Переадресация на info.html
    window.location.href = 'info.html';
});