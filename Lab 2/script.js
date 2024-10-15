// Функция для категоризации строк таблицы
function categorizeRows() {
    let lowCount = 0;
    let midCount = 0;
    let highCount = 0;
  
    // Получаем все строки таблицы
    const rows = document.querySelectorAll('#productTable tbody tr');
  
    // Проходим по каждой строке
    rows.forEach(row => {
      // Получаем цену из 3-го столбца
      const price = parseInt(row.cells[2].textContent);
  
      // Очищаем предыдущие классы для строки
      row.classList.remove('low-price', 'mid-price', 'high-price');
  
      // Категоризация по цене
      if (price < 100) {
        row.classList.add('low-price'); // Низкая цена
        lowCount++;
      } else if (price >= 100 && price < 300) {
        row.classList.add('mid-price'); // Средняя цена
        midCount++;
      } else {
        row.classList.add('high-price'); // Высокая цена
        highCount++;
      }
    });
  
    // Обновляем бейджи с количеством товаров в каждой категории
    document.getElementById('lowCount').textContent = lowCount;
    document.getElementById('midCount').textContent = midCount;
    document.getElementById('highCount').textContent = highCount;
  }
  
  // Привязываем функцию categorizeRows к кнопке по её ID
  document.getElementById('categorizeBtn').addEventListener('click', categorizeRows);
  