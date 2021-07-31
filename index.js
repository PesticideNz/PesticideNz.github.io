const Http = new XMLHttpRequest();
const url = 'https://apis.metroinfo.co.nz/rti/siri/v1/sm?stopcode=52894 HTTP/1.1';
const key = '8101ac37658242a4b1cf6cef9d013036';
Http.setRequestHeader("Ocp-Apim-Subscription-Key",key);
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  document.getElementById('result').innerHTML = Http.responseText;
}