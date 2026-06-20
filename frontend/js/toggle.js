// var users = {
//    { "name": "John Doe",
//     "gender": "male",
//     "image": "/images/jhon-doe.png"

// },
// {
//     "name": "Jane Doe",
//     "gender": "female",
//     "image": "/images/jane-doe.png"

// }
// }
// var curId = 0;
//     fuction toggle() {
//         //toggle curId from 0 -> 1 & 1->0
// curId=(curId + 1) % 2;
//    //toggle the rendered user details;
//    //image
//    var user = users[curId];
//    document.getElementById("user-img").src=user.image;
// // update for name and gen
// document.getElementById("user-name").innerText=user.name;
// document.getElementById("user-gender").innerText=user.gender;
//  }

var users = [
    {
        name: "John Doe",
        gender: "male",
        image: "/frontend/images/john.png"
    },
    {
        name: "Jane Doe",
        gender: "female",
        image: "/frontend/images/jane.png"
    }
];

var curId = 0;

function toggle() {
    // Toggle curId from 0 -> 1 and 1 -> 0
    curId = (curId + 1) % 2;

    // Get current user
    var user = users[curId];

    // Update image
    document.getElementById("user-img").src = user.image;

    // Update name and gender
    document.getElementById("user-name").innerText = user.name;
    document.getElementById("user-gender").innerText = user.gender;
}