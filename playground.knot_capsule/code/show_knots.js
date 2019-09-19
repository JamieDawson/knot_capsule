module.exports.function = function show_knots () {
  return [
    {
      name_of_knot: "testing this 1",
      click_text_here: "clicked 1",
      main_image: 'images/bowline_7.jpg', //last image for summary pic
      mult_pic: [{url:'/images/bowline_5.jpg', text:'yes here'}, {url:'/images/bowline_6.jpg'}],
      mult_des: [{url:"www.url.com", text:'says the first words'}, {url:"www.url.com/2", text:'Saying the second words'}]
    },
    {
      name_of_knot: "testing this 2",
      click_text_here: "clicked 2",
      main_image: 'images/bowline_1.jpg',
    },
    {
      name_of_knot: "Testing this 3",
      click_text_here: "clicked 3",
    }
  ]
}