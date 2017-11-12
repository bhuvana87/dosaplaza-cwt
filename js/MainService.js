;(function () {
  'use strict';

  var tabs = [
    { paneId: '1990', title: '1990', content: 'Mr. Prem Ganapathy, a passionate cook and aspiring entrepreneur from Tamil Nadu, arrived at Mumbai took up a cook’s job in a small restaurant.', active: true, disabled: false },
    { paneId: '1992', title: '1992', content: 'Mr. Ganpathy started an outlet serving south-Indian cuisine alongside a street in Navi Mumbai.', active: false, disabled: false },
    { paneId: '1992-1997', title: '1992-1997', content: 'Mr. Ganapathy was joined by his brothers during this period. Mr. Ganapathy used to sell 10 –15 variety of dosa’s in his menu.', active: false, disabled: false },
    { paneId: '1998', title: '1998', content: 'Prem Sagar Dosa Plaza started off as one man’s dream. Mr. Ganpathy, the man behind the creation of India’s only most popular venture for south-Indian cuisine, launched a well-polished open restaurant.', active: false, disabled: false },
    { paneId: '1999', title: '1999', content: 'Along with his Dosa outlet he tried his luck by investing in a Chinese Restaurant in which he incurred a loss. But he tried Chinese cuisine in his dosa’s which worked very well he got passionate and invented variety of dosa’s with Chinese style like American Chopsuey, Schezwan Dosa, Paneer chilly, Spring roll dosa etc. By the year end, Dosa Plaza had fashioned 20-25 original varieties of dosas.', active: false, disabled: false },
    { paneId: '2000', title: '2000', content: 'He made his Dosa’s popular by serving them complimentary to his customers which was eagerly accepted by his customers. The tremendous response he received from his customers inspired him to fashion many more original one-of-its-kind recipes. Dosa Plaza had already made its presence felt in the hearts of the food-lovers. By 2002, Dosa Plaza had 104 delicious varieties of dosas in its list.', active: false, disabled: false },
    { paneId: '2003', title: '2003', content: 'Prem Sagar Dosa Plaza opened his first branch as Dosa Plaza in Shopping Mall with well furnished, well-polished Express model outlet with an International look and served healthy and nutritious dosa’s. Dosa Plaza gained popularity and was noticed by the media as an emerging trend amongst food-lovers. Dosa Plaza opened franchising offer rights started pouring in. During this year Mr. Ganapathy signed and opened his 1st franchise outlet at Thane, Wonder Mall.', active: false, disabled: false },
    { paneId: '2005', title: '2005', content: 'Dosa Plaza opened outlets in 7 different locations of India like Inorbit Mall-Malad, R-Mall- Mulund, Sahara Mall-Lucknow etc. across India.', active: false, disabled: false },
    { paneId: '2007', title: '2007', content: 'Dosa Plaza had established its outlets in 9 states of India and was spearing into the international market. With 23 outlet all over india', active: false, disabled: false },
    { paneId: '2008', title: '2008', content: 'Dosa Plaza make its presence in largest mall of Asia. 2008 marks the entry of the brand Dosa Plaza into International market by opening outlet in New Zealand & 35 Outlets in India.', active: false, disabled: false },
    { paneId: '2009', title: '2009', content: 'Dosa Plaza plans to opens its 2nd outlet in New Zealand at Sky City Metro, Auckland. Dosa Plaza now has its presence in 12 states of India.', active: false, disabled: false },
    { paneId: '2010', title: '2010', content: 'Dosa Plaza has opened its 3rd outlet in New Zealand at 14B Botany junction,227 te Irirangi, Dr Manukau City.', active: false, disabled: false },
	{ paneId: '2011', title: '2011', content: 'Dosa Plaza launches its 1st Outlet of Middle East in DUBAI.', active: false, disabled: false },
	{ paneId: '2012', title: '2012', content: 'Dosa Plaza launches its 4th outlet in Middle East, having its presence in Muscat, Dubai & Sharjah. By 2012 Dosa Plaza operates 45 outlets in India and 7 International Outlets in 3 Countries (UAE, OMAN & NEW ZEALAND). The company’s strategy is to grow profitably by making each store self sustainable. The company will expand through franchise model in addition to opening its own stores. Dosa Plaza is a member of Franchise Association of India (FAI), the association, FAI is the member association of the prestigious World franchise Council (WFC) from India. Dosa Plaza follows the Franchise Code of Conduct laid down by the Association.', active: false, disabled: false },
	
  ];


  function MainService($timeout) {
    var svc = this;

    svc.data = {
      tabs: tabs
    };


  }

  MainService.$inject = ['$timeout'];

  angular.module('myapp').service('MainService', MainService);
}());
