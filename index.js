const Http = new XMLHttpRequest();
const url = 'https://apis.metroinfo.co.nz/rti/siri/v1/sm?stopcode=52894 HTTP/1.1';
const key = '8101ac37658242a4b1cf6cef9d013036';
//Failed to execute 'setRequestHeader' on 'XMLHttpRequest': The object's state must be OPENED.
Http.open("GET", url);

Http.setRequestHeader("Ocp-Apim-Subscription-Key",key);

Http.send();
console.log('Hello');
function showResult(){
    document.getElementById('result').innerHTML = "Test";
}
Http.onreadystatechange = (e) => {
    document.getElementById('result').innerHTML = Http.responseText;
}