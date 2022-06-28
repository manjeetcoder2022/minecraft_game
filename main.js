var canvas = new fabric.Canvas("myCanvas")

var player_x = 10
var player_y = 10

var object_width = 30
var object_height = 30

var player_object = ""
var block_object = ""


function player_update() {
    fabric.Image.fromURL('player.png', function (Img) {
        player_object = Img

        player_object.scaleToWidth(150)
        player_object.scaleToHeight(140)
        player_object.set
            ({
                top: player_y,
                left: player_x
            })
        canvas.add(player_object)
    })

}



function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {

        block_object = Img
        block_object.scaleToWidth(object_width)
        block_object.scaleToHeight(object_height)

        block_object.set
            ({
                top: player_y  ,
                left: player_x 
            })
        canvas.add(block_object)
    })
}



window.addEventListener("keydown",mykeydown)

function mykeydown(e){
    keypressed= e.keyCode
    console.log(keypressed)

    if(e.shiftKey && keypressed=='80'){
        console.log("Shift + p pressed")
        object_width=object_width+10
        object_height=object_height+10
        document.getElementById("current_width").innerHTML='Current Width = '  + object_width
        document.getElementById("current_height").innerHTML='Current Height = '  + object_height
    }

    if(e.shiftKey && keypressed=='77'){
        console.log("Shift + m pressed")
        object_width=object_width -10
        object_height=object_height-10
        document.getElementById("current_width").innerHTML='Current Width = '  + object_width
        document.getElementById("current_height").innerHTML='Current Height = '  + object_height
    }


    if(keypressed=='38'){
        console.log('up')
        up()
    }

    if(keypressed=='40'){
        console.log('down')
        down()
    }

    if(keypressed=='37'){
        console.log('left')
        left()
    }

    if(keypressed=='39'){
        console.log('right')
        right()
    }


    if(keypressed=='84'){
        console.log('t press trunk block')
        new_image('trunk.jpg')
    }
    if(keypressed=='68'){
        console.log('d press dark block')
        new_image('dark_green.png')
    }
    if(keypressed=='76'){
        console.log('l press light green block')
        new_image('light_green.png')
    }
    if(keypressed=='71'){
        console.log('g press ground block')
        new_image('ground.png')
    }
    if(keypressed=='87'){
        console.log('w press wall block')
        new_image('wall.jpg')
    }
    if(keypressed=='89'){
        console.log('y press yellow color block')
        new_image('yellow_wall.png')
    }
    if(keypressed=='82'){
        console.log('r press roof block')
        new_image('roof.jpg')
    }
    if(keypressed=='67'){
        console.log('c press cloud block')
        new_image('cloud.jpg')
    }
    if(keypressed=='85'){
        console.log('u press unique block')
        new_image('unique.png')
    }
}

var bg_update=''

var minecraft_images=['bg_1.jpg','bg_2.png','bg_3.webp','bg_4.jpg','bg_5.jpg']
function update(){
    random_number= Math.floor(Math.random()*4)
    
    mybgupdate()

console.log(random_number)

}

function add(){
    bg_update=new Image()
    // bg_update.onload=mybgupdate
    bg_update.src=minecraft_images[random_number]
}


function mybgupdate(){
    if(random_number=='0'){
        document.body.style.backgroundImage = "url(bg_1.jpg)";
    }
    if(random_number=='1'){
        document.body.style.backgroundImage = "url(bg_2.png)"
    }
    if(random_number=='2'){
        document.body.style.backgroundImage = "url(bg_3.webp)";
    }
    if(random_number=='3'){
        document.body.style.backgroundImage = "url(bg_4.jpg)";
    }
    if(random_number=='4'){
        document.body.style.backgroundImage = "url(bg_5.jpg)";
    }
 
    console.log(bg_update)
}

function up(){
    if(player_y>0){
        player_y=player_y-10
       
     
        console.log("When up arrow key is pressed Y = " +player_y)
        console.log("Height of the Block" + object_height)
        canvas.remove(player_object)
        player_update()
    }

   
}
function down(){
    if(player_y<300){
        player_y=player_y+10
     
        console.log("When down arrow key is pressed Y = " +player_y)
        console.log("width of the Block" + object_width)
        canvas.remove(player_object)
        player_update()

      
    }
}
function left(){
    if(player_x>0){
        player_x=player_x-10
        console.log("When left arrow key is pressed Y = " +player_x)
        console.log("Height of the Block" + object_height)
        canvas.remove(player_object)
        player_update()
    }
}

function right(){
    if(player_x<650){
        player_x=player_x+10
        console.log("When right arrow key is pressed Y = " +player_x)
        console.log("width of the Block" + object_width)
        canvas.remove(player_object)
        player_update()
    }
}