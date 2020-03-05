const checkBox = document.querySelector('#switch-input');
const monthPrices = document.querySelectorAll('.card-price-monthly');
const annualPrices = document.querySelectorAll('.card-price-annually')

checkBox.onclick = () => {
    if (checkBox.checked) {
        monthPrices.forEach(el => el.classList.add('visible'));
        annualPrices.forEach(el => el.classList.add('hidden'));
    } else {
        monthPrices.forEach(el => el.classList.remove('visible'));
        annualPrices.forEach(el => el.classList.remove('hidden'));
    }
}