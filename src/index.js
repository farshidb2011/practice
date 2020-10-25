import './style.css';
import farshid from './26037.svg';

function component(){
    const element = document.createElement('div');
    element.innerHTML = "Hello webpack";
    element.classList.add('hello');
    
    const imgFarshid = new Image(500);
    imgFarshid.classList.add('imgFarshid');
    imgFarshid.src = farshid;

    element.appendChild(imgFarshid);
    return element;
}

document.body.appendChild(component());