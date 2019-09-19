var console = require('console')

module.exports.function = function single_knot(knot_name) {

  knot_name = knot_name.toLowerCase(); //lowercase the string.

  if (knot_name == "bowline knot" || knot_name == "bowline") {
    return [
      {
        name_of_knot: "Bowline Knot",
        main_image: 'images/bowline_7.jpg', //last image for summary pic
        mult_pic: [{ url: '/images/bowline_1.jpg', text: 'Lay out your rope.' }, { url: '/images/bowline_2.jpg', text: 'Make a small loop.' }, { url: '/images/bowline_4.jpg', text: 'Pass the end of the rope through the loop you created.' }, { url: '/images/bowline_5.jpg', text: 'Place the end of the rope behind the standing end.' }, { url: '/images/bowline_6.jpg', text: 'Pass around the standing end' }, { url: '/images/bowline_7.jpg', text: 'Place the end inside the loop.' }],
        //mult_des: [{url:"www.url.com", text:'says the first words'}, {url:"www.url.com/2", text:'Saying the second words'}]
      }]
  }

  else if (knot_name == "figure eight") {
    return [{
      name_of_knot: "Figure Eight",
      main_image: 'images/figure_eight_4.jpg',
      mult_pic: [{ url: '/images/figure_eight_1.jpg', text: 'Lay down the rope in the shape of an S.' }, { url: '/images/figure_eight_2.jpg', text: 'Pass the end over itself to create a loop' }, { url: '/images/figure_eight_3.jpg', text: 'Wrap the end of the rope underneath itself.' }, { url: '/images/figure_eight_4.jpg', text: 'Pass the end throgh the loop and pull.' },]
    }]
  }

  else if (knot_name == "double overhand stopper" ) {
    return [{
      name_of_knot: "Double Overhand Stopper",
      main_image: 'images/double_overhand_stopper_5.jpg',
      mult_pic: [{ url: '/images/double_overhand_stopper_1.jpg', text: 'Lay down the rope in the shape of a U.' }, { url: '/images/double_overhand_stopper_2.jpg', text: 'Create a loop by laying the rope on top of itself.' }, { url: '/images/double_overhand_stopper_3.jpg', text: 'Pass the end through it.' }, { url: '/images/double_overhand_stopper_4.jpg', text: 'Pass the end through it again.' }, { url: '/images/double_overhand_stopper_5.jpg', text: 'Pull both ends til you have a knot!' },]
    }]
  }

  else if(knot_name == "slip knot"){
    return[    {
      name_of_knot: "Slip Knot",
      main_image: 'images/slip_knot_6.jpg',
      mult_pic: [{url:'/images/slip_knot_1.jpg', text:'Lay down the rope.'},{url:'/images/slip_knot_2.jpg', text:'Create a loop in the shape the number nine.'},{url:'/images/slip_knot_3.jpg', text:'Take the end and curve it in the opposite direction'},{url:'/images/slip_knot_4.jpg', text:'Place the curved part of the rope inside the loop.'},{url:'/images/slip_knot_6.jpg', text:'Pull pull the rope while holding the end!'},]
    }]
  }

  else  {
    console.log("wut")
    return[
    //  name_of_knot: "",
    //  main_image: "",
     // mult_pic: ""
    ]
  }

}