let img1Btn=document.querySelector("#image1");
let img2Btn=document.querySelector("#image2");
let img3Btn=document.querySelector("#image3");
let img4Btn=document.querySelector("#image4");
let bike=document.querySelector("#bike");

img1Btn.addEventListener("click",()=>
{
    bike.style.backgroundImage= 'url("image1.png")';
})

img2Btn.addEventListener("click",()=>
{
    bike.style.backgroundImage= 'url("image2.jpg")';
})

img3Btn.addEventListener("click",()=>
{
    bike.style.backgroundImage= 'url("image3.jpg")';
})

img4Btn.addEventListener("click",()=>
{
    bike.style.backgroundImage= 'url("image4.jpg")';
})