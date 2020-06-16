'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsParent = document.querySelector('.tabheader'),
          tabsContent = document.querySelectorAll('.tabcontent');

    function hideTabContent() {

            tabsContent.forEach(item => {
                item.style.display = 'none';
            });

            tabs.forEach(item => {
                item.classList.remove('tabheader__item_active');
            });
    }

    function showTabContent(i) {

        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent(0);

    tabsParent.addEventListener( 'click', (event) => {

        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            
            tabs.forEach( (item,i) => {

                if (item == target) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
});