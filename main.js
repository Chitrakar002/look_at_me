const topArea = document.querySelector('.topArea');
// console.log(topArea);
const no = document.querySelectorAll('.no');
console.log(no);
const btn = document.querySelector('.Check');
const passwordBox = document.querySelector('.passwordBox');
const leftDiv = document.querySelector('.leftDiv');
const rightDiv = document.querySelector('.rightDiv');
console.log(leftDiv);
console.log(rightDiv);
// console.log(btn);
for(let i=0; i<no.length; i++)
{
    no[i].addEventListener('click',(e)=>{
        if(!Number(topArea.innerText))
        {
        topArea.innerText=" ";
        }
       topArea.innerText+=e.target.innerText;
    })

}
btn.addEventListener('click',()=>{
    const password = topArea.innerText;
    console.log(password);
    const realPassword = 20230412;
    if(password==realPassword)
    {
        topArea.innerText=" Correct !!!!! ";
        console.log("Correct");
        setTimeout(()=>{
            passwordBox.style.display = "none";
            leftDiv.style.left = "-500px";
            rightDiv.style.right = "-500px";

        },1000);

    }
    else
    {
        topArea.innerText=" Wrong ";
        console.log("Wrong");

    }
})
