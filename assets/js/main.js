var App = App || {};

App.Main = {
     init: function () {
          this.cacheSelectors();
          this.bindEvents();
     },

     cacheSelectors: function () {
          this.menuHandler = document.getElementById('menu-handler')
          this.navBar = document.getElementById('navbar')
          this.linksMenu = navbar.querySelectorAll('.menu-item');
     },


     bindEvents: function () {
          this.menuHandler.addEventListener('click', this.Events.toggleMenuHandler);

          App.Main.linksMenu.forEach(item => {
               item.addEventListener('click', function () {
                    const linkElement = item.getAttribute('data-link')
                    App.Main.Events.scrollLinkMenu(linkElement);
               })
          });
     },

     Events: {
          scrollLinkMenu: function (item) {
               const newId = item || idElement
               idElement = document.getElementById(newId);
               if (window.innerWidth < 992) {
                    var offsetTop = idElement.offsetTop - 85;
               } else {
                    var offsetTop = idElement.offsetTop;
               }
               window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
               });

               if (App.Main.menuHandler.classList.contains('menu-active')) {
                    App.Main.menuHandler.classList.toggle('menu-active')
                    App.Main.navBar.classList.toggle('menu-active');
               }
          },

          toggleMenuHandler: function () {
               App.Main.menuHandler.classList.toggle('menu-active')
               App.Main.navBar.classList.toggle('menu-active');
          }
     },
}

window.addEventListener('load', () => {
     App.Main.init();
});