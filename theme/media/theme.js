/**
 * RE
 */

var element = React.createElement('h1', null, 'hi');



ReactDOM.render(element, document.getElementById('hello-root'));

function Get_List_Product(handle, ArrCharacteristics){
  if(handle == undefined){
    var handle = 'all'
  }
  
  if(ArrCharacteristics == undefined){
    var ArrCharacteristics = [];
  }
  
  $.post('/collection/'+ handle +'.json', {
    characteristics: ArrCharacteristics
  })
  .done(function (products) {

    var Product_List = React.createElement('ul', {"data-products-list":"true"}, );

    ReactDOM.render(Product_List, document.getElementById('product-list'));
    
  })

}


