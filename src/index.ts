import './style.css';

const button: HTMLElement | null = document.querySelector('#button');

button?.addEventListener('click', () => {
    const p: HTMLParagraphElement = document.createElement('p');
    p.innerHTML = 'Haha!'
    document.body.appendChild(p);
});