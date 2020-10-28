

export default function printMe(){
    let el = document.createElement('p');
    
    let myRequest = new Request('/home');
    fetch('/home').then(function(response){
        return response.text().then(function(data){
            el.innerText = (JSON.parse(data)).message;
        });
    });


    document.body.appendChild(el);
}