const box = document.getElementById('box');
const coords = document.getElementById('coords');


box.addEventListener('mousemove', (e) => {
    coords.textContent = `clientX: ${e.clientX}, clientY: ${e.clientY}`;
});


box.addEventListener('mouseleave', () => {
    coords.textContent = 'clientX: -, clientY: -';
});


box.addEventListener('dblclick', (e) => {
    const rect = box.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;

    box.appendChild(dot);
});
