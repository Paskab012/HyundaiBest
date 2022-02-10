/* eslint-disable indent */
/* eslint-disable operator-linebreak */
const carsModels = [
  {
    img: './images/car9.jpg',
    alt: 'Tutor: hyundai cars',
    Name: 'Hyundai Fortuna',
    skill: '4 wheel drive, V6',
    description: `This hyundai version has been powered by Itashi Hakomoshi
     in order to reduce toxic gases poluting our air, with 
     is ability to run fast with incredible speed changes`,
  },
  {
    img: './images/car10.jpg',
    alt: 'Tutor: hyundai cars',
    Name: 'Hyundai Tucson',
    skill: 'Fast running engine',
    description: `Yes, the 2022 Hyundai Tucson is an excellent SUV. The redesigned 
    Tucson impresses with its spacious five-seat interior, upmarket cabin materials, 
    and large cargo area. What's more, we named the 
    Tucson our 2022 Best Compact SUV for the Money because of 
    its superior combination of quality and value in its class.`,
  },
  {
    img: './images/car3.jpg',
    alt: 'Tutor: hyundai cars ',
    Name: 'Hyundai Santa Cruz',
    skill: 'V8 engine, super powered',
    description: `The new Hyundai Santa Cruz is worth buying, but the base model isn't the best option. ... 
    If you're searching for comfort and utility as well as power and great tech in a small truck`,
  },
  {
    img: './images/car4.jpg',
    alt: 'Tutor: hyundai cars ',
    Name: 'Hyundai Santa Cruz',
    skill: 'V8 engine, super powered',
    description: `The new Hyundai Santa Cruz is worth buying, but the base model isn't the best option. ... 
    If you're searching for comfort and utility as well as power and great tech in a small truck`,
  },
  {
    img: './images/car6.jpg',
    alt: 'Tutor: hyundai cars ',
    Name: 'Hyundai Santa Cruz',
    skill: 'V8 engine, super powered',
    description: `The new Hyundai Santa Cruz is worth buying, but the base model isn't the best option. ... 
    If you're searching for comfort and utility as well as power and great tech in a small truck`,
  },
  {
    img: './images/car7.jpg',
    alt: 'Tutor: hyundai cars ',
    Name: 'Hyundai Santa Cruz',
    skill: 'V8 engine, super powered',
    description: `The new Hyundai Santa Cruz is worth buying, but the base model isn't the best option. ... 
    If you're searching for comfort and utility as well as power and great tech in a small truck`,
  },
];

function showEmployees() {
  const section = document.querySelector('.cars');
  const title = '<p class="cars-title">Our New Cars</p>';
  const container = document.createElement('div');
  container.classList.add('all-cars');
  const underline = '<hr>';
  section.innerHTML = title;
  section.innerHTML += underline;
  section.appendChild(container);

  for (let i = 0; i < carsModels.length; i += 1) {
    container.innerHTML += `
    <div class="cars-profiles car${i + 1}">
      <div class="image-container">
      <img src= ${carsModels[i].img} alt="${
      carsModels[i].alt
    }" class="cars-descr">
      </div>
      <div class="cars-info">
        <p class="cars-descr-2">${carsModels[i].Name}</p>
        <p class="cars-descr-3">${carsModels[i].skill}</p>
        <p class="cars-descr-4">${carsModels[i].description}</p>
    </div>`;
  }

  section.innerHTML +=
    '<button type="button" class="specifications">Want others? <i class="fas fa-angle-down"></i></button>';
}

window.addEventListener('load', showEmployees);
