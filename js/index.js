var cb = document.querySelector('#chatbot');
var cbButton = document.querySelector('#chatbot > button');

cb.addEventListener('click', () => {
  console.log('click');
  cb.classList.toggle('open');
  if (cb.classList.contains('open')) {
    console.log('opened');
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://bot.dialogflow.com/miia');
    iframe.style.width = '350px';
    iframe.style.height = '430px';
    cb.appendChild(iframe);
  } else {
    console.log('not');
    cb.removeChild(document.querySelector('#chatbot > iframe'));
  }
});
