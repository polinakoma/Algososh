# Проектная работа. МБОУ АЛГОСОШ им. Фибоначчи

В проектной работе реализован визуализатор алгоритмов. Эта проектная работа заточена на анимацию и поэтапное отображение работы алгоритма, что позволяет детальнее понять каждый шаг его работы.

# Ссылка на макет в Figma: 
https://www.figma.com/file/RIkypcTQN5d37g7RRTFid0/Algososh_external_link?node-id=0%3A1

### Описание задач проектной работы:
# Строка
На экране разворачивается строка. Сначала на экране появляется слово, буквы которого записаны в синие кружки. 
Два кандидата на сортировку подсвечны цветом. Уже отсортированные элементы имеют иной цвет. 

## Последовательность Фибоначчи
На этом экране генерируется `n` числа последовательности Фибоначчи. 
Например, вы ввели 4, тогда на экране должен появиться ряд 1, 1, 2, 3, 5. 

## Сортировка массива
При нажатии «По убыванию» или «По возрастанию», запускается процесс сортировки в зависимости от выбранного способа: выбором или пузырьком.

## Стек
Здесь визуализировано удаление и добавление элементов в структуру данных стек. Если ввести в инпут значение и нажать «Добавить», в стеке попадает первый элемент, который и отрисовывается на странице. Элементы в стеке корректно удаляются.

## Очередь
Визуализировано удаление и добавление элементов в структуру данных «очередь».
Если ввести в инпут значение 2 и нажать «Добавить», элемент отобразится под индексом 0. Элемент промаркрованы указателями `head` и `tail`. Элементы в очереди корректно удаляются.

## Связный список
Удаление и добавление элементов в связный список. Реализована возможность добавления элементов в начало и в конец, а также по заданному индексу в маасиве элементов. Элементы в связном списке корректно удаляются.

## Стэк технологий:
<div>
  <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" title="React" alt="React" width="40" height="40">&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg" title="TypeScript" width="40" height="40">&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-plain-wordmark.svg"  title="CSS3" alt="CSS" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML" width="40" height="40"/>&nbsp;
  <p>Jest & Cypress</p>
  <p>async TS</p>
  <p>TSX</p>
</div>

# Как запустить:
1. Клонируйте репозиторий git clone https://github.com/polinakoma/Algososh.git
2. Установите зависимости командой npm i
3. Запустите проект командой npm start
4. Переходите по адресу http://localhost:3000.

