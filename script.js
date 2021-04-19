var color = ["#66ff44","#22ffaa","#aaffcc","#ccffa5","#a5ffa5","#76ccbb","#bbffAA","#ffffaa","#ff7722"];
var rgb_arr = []

function random_colors() {
    for(var i = 0; i<3; i++) {
        rgb_arr.push(String(Math.floor(Math.random() * (Math.floor(255) - Math.ceil(0)) + Math.ceil(0))))
    }
}


function random_rgb() {
    return "rgb(" + rgb_arr[0] + "," + rgb_arr[1] + "," + rgb_arr[2] + ")";
}



function change_color() {
    random_colors();
    random_colors();
    random_colors();

    document.body.style.backgroundColor = random_rgb();
    document.getElementById("heading_1").innerHTML = document.body.style.backgroundColor
    document.getElementById("heading_2").innerHTML = "#" + Number(rgb_arr[0]).toString(16) + Number(rgb_arr[1]).toString(16) + Number(rgb_arr[2]).toString(16); 
    rgb_arr.length=0;
};
