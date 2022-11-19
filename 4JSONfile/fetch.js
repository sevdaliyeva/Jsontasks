const request=new XMLHttpRequest();
request.addEventListener('readystatechange',() =>{
    if(request.readyState===4 && request.status===200){
        console.log(request.responseText);
    }
    else if(request.readyState===4){
        console.log('could not fetch data')
    }
})
request.open('Get','https://jsonplaceholder.typicode.com/posts');
request.send();