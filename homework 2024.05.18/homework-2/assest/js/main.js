let h1 = document.querySelector('h1');

document.addEventListener('keydown', (e) => {
    if (e.key === "F12") {
        e.preventDefault();
        alert('Siz F12ni bosdingiz');
    } else if (e.key === "Backspace") {
        h1.innerHTML = h1.innerHTML.slice(0, -1);
    } else {
        h1.innerHTML += e.key;
    }
});

