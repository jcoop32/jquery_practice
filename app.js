

$(() => {
    //declaring variables for containers
    const $divTop = $('<div>');
    const $divBottom = $('<div>');
    
    $divTop.attr('id','top-container');
    $divBottom.attr('id','bottom-container');
    
    const $h1Top = $('<h1>');
    $h1Top.text('Trois couleurs: rouge, blanc, et blue');
    
    const $divOne = $('<div>');
    const $divTwo = $('<div>');
    const $divThree = $('<div>');
    
    $divOne.addClass('color');
    $divTwo.addClass('color');
    $divThree.addClass('color');

    $divOne.addClass('red');
    $divTwo.addClass('white');
    $divThree.addClass('blue');

    const $h1Bottom = $('<h1>');
    $h1Bottom.text('Lumpy Space Princess');
    
    const $divImg = $('<div>');
    $divImg.attr('id', 'img-container');
    const $img = $('<img>');
    $img.attr('src', 'https://i.pinimg.com/736x/9a/03/d2/9a03d283bc5a3f4316357f6563497744.jpg');
    $img.attr('id', 'lumpy-img')
    $divImg.append($img);

    $h1Top.text('Three colors: red, white, and blue');
    $divTwo.css('background', 'black');
    $divThree.css('background', 'orange');


    const $button = $('<button>');
    $button.attr('type', 'submit');
    $button.text('Ice King?');
    $button.addClass('button');

    $button.addE
    $img.attr('src', 'https://filmschoolrejects.com/wp-content/uploads/2019/02/Adventure-Time-Ice-King.jpg');
    $h1Bottom.text('The Ice King');

    $divTop.empty();
    $divBottom.empty();
    const $p = $('<p>');
    $p.text('the ice king waz here');


    //appends
    $('body').append($h1Top);
    $('body').append($divTop);
    $divTop.append($divOne);
    $divTop.append($divTwo);
    $divTop.append($divThree);
    $('body').append($divBottom);
    $divBottom.append($h1Bottom);
    $divBottom.append($divImg);
    $('body').prepend($divBottom);
    $('body').append($button);
    $('body').append($p);
    

});