window.onload = () => {
    const button = document.getElementById('menu-button');
    const menu = document.getElementById('menu');

    button.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
};

        document.getElementById('menu-button').addEventListener('click', function () {
            var menu = document.getElementById('menu');
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
            } else {
                menu.classList.add('hidden');
            }
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
