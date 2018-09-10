ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.940592, 30.299635],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img/map.svg',
            // Размеры метки.
            iconImageSize: [38, 46]
        })

    myMap.geoObjects
        .add(myPlacemark);

    myMap.panes.get('ground').getElement().style.filter = 'url(#monochrome)';
});
