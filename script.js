const btn = document.getElementById('theme-toggle');
        btn.addEventListener('click', () => {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
            btn.innerText = isDark ? '🌙' : '☀️';
        });
AOS.init();