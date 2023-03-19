$(document).ready(
    function () {
    $("#view_button").click(getPicture);
});
    
function getPicture () {
    const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${$("#date").val()}`
    fetch(url)
    .then(res => {
        if(!res.ok){
            throw res.json();
        }
        return res.json();
    })
    .then(data => showPicture(data))
    .catch(error => noPicture(error));
};
function showPicture(data) {
    $("#pic").attr("src", data.url);
    $("#title").html(data.title)
};
function noPicture(error) {
    (error.then(e=>{
        alert(e.msg);
    }))
};