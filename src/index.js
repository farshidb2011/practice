import 'Components/style.css';
import farshid from 'Components/26037.svg';
import printMe from './print';

function component(){
    const element = document.createElement('div');
    const btn = document.createElement('button');
    const imgFarshid = new Image(500);

    element.innerHTML = "سلام به وب پک.";
    btn.innerHTML = 'Click me and check the console';

    element.classList.add('hello');
    btn.onclick = printMe;

    
    imgFarshid.classList.add('imgFarshid');
    imgFarshid.src = farshid;

    element.appendChild(imgFarshid);
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());