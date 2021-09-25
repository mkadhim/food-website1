const icons=document.querySelectorAll('.section-1-icons i')
let i=1

setInterval(()=>
{
    i++;

const icon=document.querySelectorAll('.section-1-icons.change')
icon.classList.remove('change')
if(i>icon.length)
{
    icons[0].classList.add('change')
    i=1;

}else
{
    icon.nextelementsibling.classList.add('change');
    
}
},1000)

