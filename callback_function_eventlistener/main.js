console.log('Start');
setTimeout(() => {
    console.log('timer');

}, 5000);

document.getElementById('clickMe').addEventListener('click', () => {
    console.log('clicked');
})
console.log('End');