///#access_token=513059489.8aae704.a82aca91f55b4dddb850021b9a502eff

const access_token='513059489.8aae704.a82aca91f55b4dddb850021b9a502eff';
var pathUser = "https://api.instagram.com/v1/users/self/?access_token="+access_token;
var pathContent = 'https://api.instagram.com/v1/users/self/media/recent/?access_token='+access_token;


// inf about User
var xmlh = new XMLHttpRequest();
xmlh.open('GET', pathUser, false);
xmlh.send();
var userFull =JSON.parse(xmlh.responseText);

// inf about Content
var xhr = new XMLHttpRequest();
xhr.open('GET', pathContent, false);
xhr.send();
var dataFull =JSON.parse(xhr.responseText);

document.img.src = dataFull.data[0].user.profile_picture;
// name
var userId = dataFull.data[0].user.full_name;
document.write(
    "<div>" + userId
    +
    "</div>"
);
//number
var countPhoto = userFull.data.counts.media;
document.write(
    "<div> Добавлено " + countPhoto
    +
    "фото</div>"
);

// 5 photo
for (var i = 0; i<5; i++)
{
    var uri = dataFull.data[i].images.standard_resolution.url;

    document.write(
        "<div>\n" +
        "    <img name = 'img' src = "+ uri+ ">\n" +
        "</div>"
    );
}

//alert(userId);