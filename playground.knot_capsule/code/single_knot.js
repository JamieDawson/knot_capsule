var console = require('console')

//export show_knots.js
//use it to compare the file.
//it's a better practice.

module.exports.function = function single_knot(knot_name) {

  knot_name = knot_name.toLowerCase(); //lowercase the string.

  if (knot_name == "bowline knot" || knot_name == "bowline" || knot_name == "bowline not") {
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

  else if (knot_name == "double overhand stopper") {
    return [{
      name_of_knot: "Double Overhand Stopper",
      main_image: 'images/double_overhand_stopper_5.jpg',
      mult_pic: [{ url: '/images/double_overhand_stopper_1.jpg', text: 'Lay down the rope in the shape of a U.' }, { url: '/images/double_overhand_stopper_2.jpg', text: 'Create a loop by laying the rope on top of itself.' }, { url: '/images/double_overhand_stopper_3.jpg', text: 'Pass the end through it.' }, { url: '/images/double_overhand_stopper_4.jpg', text: 'Pass the end through it again.' }, { url: '/images/double_overhand_stopper_5.jpg', text: 'Pull both ends til you have a knot!' },]
    }]
  }

  else if (knot_name == "slip knot" || knot_name == "slip not" || knot_name == "slipknot") {
    return [{
      name_of_knot: "Slip Knot",
      main_image: 'images/slip_knot_6.jpg',
      mult_pic: [{ url: '/images/slip_knot_1.jpg', text: 'Lay down the rope.' }, { url: '/images/slip_knot_2.jpg', text: 'Create a loop in the shape the number nine.' }, { url: '/images/slip_knot_3.jpg', text: 'Take the end and curve it in the opposite direction' }, { url: '/images/slip_knot_4.jpg', text: 'Place the curved part of the rope inside the loop.' }, { url: '/images/slip_knot_6.jpg', text: 'Pull pull the rope while holding the end!' },]
    }]
  }

  else if (knot_name == "clove hitch") {
    return [{
      name_of_knot: "Clove Hitch",
      main_image: 'images/clove_hitch_6.jpg',
      mult_pic: [{ url: '/images/clove_hitch_1.jpg', text: 'Place rope over the bar.' }, { url: '/images/clove_hitch_2.jpg', text: 'Wrap rope under the bar.' }, { url: '/images/clove_hitch_3.jpg', text: 'Place end of rope over the loop.' }, { url: '/images/clove_hitch_4.jpg', text: 'Wrap end of rope under the loop again.' }, { url: '/images/clove_hitch_5.jpg', text: 'Shove end of rope under the second loop.' }, { url: '/images/clove_hitch_6.jpg', text: 'Pull the end of the rope.' }]
    }]
  }

  else if (knot_name == "cow hitch") {
    return [{
      name_of_knot: "Cow Hitch",
      main_image: 'images/cow_hitch_4.jpg',
      mult_pic: [{url:'/images/cow_hitch_1.jpg', text:'Wrap rope over the bar.'},{url:'/images/cow_hitch_2.jpg', text:'Wrap end of rope underneath the back of the rope.'},{url:'/images/cow_hitch_3.jpg', text:'Wrap end of rope over the bar again.'},{url:'/images/cow_hitch_4.jpg', text:'Wrap end of rope through the loop and pull.'}]
    }]
  }

  else {
    console.log("wut")
    return [
      //  name_of_knot: "",
      //  main_image: "",
      // mult_pic: ""
    ]
  }

}
