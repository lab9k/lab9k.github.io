var cb = document.querySelector('#chatbot');
var cbButton = document.querySelector('#chatbot > button');

cb.addEventListener('click', () => {
  console.log('click');
  cb.classList.toggle('open');
  if (cb.classList.contains('open')) {
    console.log('opened');
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://console.dialogflow.com/api-client/demo/embedded/3de07647-f185-4401-ae64-431685265c59');
    iframe.style.width = '350px';
    iframe.style.height = '430px';
    cb.appendChild(iframe);
    var el = iframe/*.contentWindow.document.getElementsByClassName('b-agent-demo_powered_by')[0]*/;
    // el.style.display = "none";
    console.log(el);
  } else {
    console.log('not');
    cb.removeChild(document.querySelector('#chatbot > iframe'));
  }
});
