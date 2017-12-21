// Map //

function myMap() {
  var myCenter = new google.maps.LatLng(48.917136, 24.711065);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: 15};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);
  google.maps.event.addListener(marker,'click',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"IT-PIZZA"
    });
  infowindow.open(map,marker);
  });
}

// Modal Window For Pizza Order

$(document).ready(function() {
  $("body").append('<div id="myModal-pizza" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModal-pizza" aria-hidden="true"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"> <h3 id="myModal-pizza-Label">ЗАМОВИТИ ПІЦУ</h3> <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button> </div> <div class="modal-body"> <form> <div class="form-group"> <label for="name">Ім&rsquo;я</label> <input type="text" class="form-control"> </div> <div class="form-group"> <label for="surname">Прізвище</label> <input type="text" class="form-control"> </div> <div class="form-group"> <label for="phone">Номер телефону</label> <input type="text" class="form-control"> </div> <div class="form-group"> <label for="email">Email</label> <input type="email" class="form-control"> </div> <div class="form-group"> <label for="address">Адреса доставки</label> <input type="text" class="form-control"> </div> <div class="row row-order"> <div class="col"> <select class="custom-select"> <option selected class="form-control">Виберіть піцу</option> <option value="1">Маргарита</option> <option value="2">Салямі</option> <option value="3">Кваттро Формаджі</option> <option value="4">Густоза</option> <option value="5">Гавайська</option> <option value="6">Фрутті ді Маре</option> <option value="7">Палермо</option> <option value="8">Карне</option> <option value="9">Парма</option> </select> </div> <div class="col"> <input type="text" class="form-control form-quantity" placeholder="Кількість"> </div> </div> </form> </div> <div class="modal-footer"> <button class="btn" data-dismiss="modal" aria-hidden="true">Відмінити</button> <button class="btn btn-success">Замовити</button> </div> </div> </div> </div>')
    $(".btnPizzaOrder").click(function() {
      $("#myModal-pizza").modal('show');
  })
})

// Date //

$.datetimepicker.setLocale('uk');

jQuery('#datetimepicker').datetimepicker({
  lazyInit: true,
  format:'d.m.Y H:i',
  allowTimes: ['11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'],
  minDate:0,
  dayOfWeekStart: 1,
  theme:'dark',
});



