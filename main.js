import './style.css'

const COLOR_PALETTE = {
  '#BC2649': 'Viva Magenta - 2023',
  '#6667AA': 'Very Peri - 2022',
  '#F5DF4D': 'Iluminating -2021',
  '#949597': 'Ultimate Gray - 2021',
  '#0F4C82': 'Classic Blue - 2020',
  '#FE6F61': 'Living Coral - 2019',
  '#5F4A8B': 'Ultra Violet - 2018',
  '#88B14B': 'Greenery - 2017',
  '#91A8D1': 'Serenity - 2016',
  '#F6CAC9': 'Rose Quartz - 2016',
  '#964F4D': 'Marsala - 2015',
  '#AD5D98': 'Radiant Orchid - 2014',
  '#009472': 'Esmerald - 2013',
};

const resetValues = () => {
  const colorPickerSelect = document.querySelector('#color-picker');
  const colorName = document.querySelector('#color-name');
  const colorPickerInput = document.querySelector('#color-input');
  const pantone = document.querySelector('#block-init');
  const styleBlock = document.querySelectorAll('.block');


    colorPickerSelect.value = '#ffff';
    colorName.innerText = '-';
    document.body.style.backgroundColor = colorPickerSelect.value;
    colorPickerInput.value = '#000000';
    pantone.className = 'show'
    document.querySelector('#name').style.color = 'black';

    for (let i = 0; i < styleBlock.length; i++){
      styleBlock[i].style.backgroundColor = '#8a8a8a';    
    }
}

const addOptionsToColorPicker = () => {

  const colorPickerSelect = document.querySelector('#color-picker');

  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement('option');
    option.value = color;
    option.innerText = COLOR_PALETTE[color];

    colorPickerSelect.append(option);
  });

};

const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector('#color-picker');
  const colorName = document.querySelector('#color-name');
  const colorPickerInput = document.querySelector('#color-input');
  const colorPickerButon = document.querySelector('#button_input');
  const styleBlock = document.querySelectorAll('.block');
  const pantone = document.querySelector('#block-init');

  // console.log(styleBlock)
   
  colorPickerSelect.addEventListener('change', (ev) => {
    const newColor = ev.target.value;
    const colorNameText = `${COLOR_PALETTE[newColor]} | ${newColor}`
    
    document.body.style.backgroundColor = newColor;
    colorName.innerText = COLOR_PALETTE[newColor] ? colorNameText : '-';
    colorPickerInput.value = '#000000';
    document.querySelector('#name').style.color = newColor;
    pantone.className = 'show';

    for (let i = 0; i < styleBlock.length; i++){
      styleBlock[i].style.backgroundColor = newColor;    
    }

  });

  colorPickerButon.addEventListener('click', (ev) => {
    
    document.body.style.backgroundColor = colorPickerInput.value;
    colorName.innerText = colorPickerInput.value;
    colorPickerSelect.value = '#ffff';
    pantone.className = 'no-show'

    for (let i = 0; i < styleBlock.length; i++){
      styleBlock[i].style.backgroundColor = colorPickerInput.value;    
    }
  });
};

const addEventListenerReset = () => {
  const resetAll = document.querySelector('#button_reset')

  resetAll.addEventListener('click', (ev) => {
    resetValues();
  });
}


addOptionsToColorPicker();
addEventListenerToColorPicker();
addEventListenerReset();






