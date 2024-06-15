// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from './functions.js';
// Підключення списку активних модулів
import { flsModules } from './modules.js';

document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.button._stroke');

    buttons.forEach(function (button) {
        button.addEventListener('mouseenter', function (e) {
            var parentOffset = button.getBoundingClientRect(),
                relX = e.pageX - parentOffset.left - window.scrollX,
                relY = e.pageY - parentOffset.top - window.scrollY;
            var span = button.querySelector('.hover');
            if (span) {
                span.style.top = relY + 'px';
                span.style.left = relX + 'px';
            }
        });

        button.addEventListener('mouseout', function (e) {
            var parentOffset = button.getBoundingClientRect(),
                relX = e.pageX - parentOffset.left - window.scrollX,
                relY = e.pageY - parentOffset.top - window.scrollY;
            var span = button.querySelector('.hover');
            if (span) {
                span.style.top = relY + 'px';
                span.style.left = relX + 'px';
            }
        });
    });
});
