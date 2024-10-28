// Ubicamos elemento dentro del DOM
const modal = document.querySelector('#modal');

// Declaramos funciones de control
function showModal()
{
    modal.style.zIndex = '10';
    modal.style.transform = 'translateY(-300px)';
    modal.style.opacity = '1';    
}
function hideModal()
{
    modal.style.zIndex = '-10';
    modal.style.transform = 'translateY(-400px)';
    modal.style.opacity = '0';    
}