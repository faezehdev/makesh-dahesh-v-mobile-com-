
  //  MOBILE HEADER
  let headerr =  document.querySelector('.MobileHeader')
  let OPButton = document.querySelector('.Toggle')
  let CLButton = document.querySelector('.MobileHeader .close')
  let Menu = document.querySelector('.MobileHeader .Menu')

  OPButton.addEventListener('click',()=>{
    console.log('click');
            Menu.classList.add('Open')
            headerr.classList.add('h-open')
            OPButton.classList.toggle('Open')
  })
  CLButton.addEventListener('click',()=>{
    Menu.classList.remove('Open')
    headerr.classList.remove('h-open')
    OPButton.classList.toggle('Open')

})


var host = {
  debug: false,
  settings:{
            'connection.web.trust_login': 'https://basispanel.ir/apicms', 
        'connection.web.basiscore': 'https://basispanel.ir/apicms', 
        'connection.web.media': 'https://basispanel.ir/apicms', 
        'default.dbsource.verb': 'post', 
        'default.call.verb': 'get', 
        'default.viewCommand.groupColumn': 'prpid', 
            "default.dmnid":'4086',
            "default.binding.regex":"\\{##([^#]*)##\\}"
        }
}

// Enable Scroll

const lenis = new Lenis()


function raf(time) {
lenis.raf(time)
requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
function onSource(args) { 
  const captcha = document.querySelector("input[name='captcha']").value; 
  const captchaid = document.querySelector("input[name='captchaid']").value; 
  console.log(captcha);
  const stringJson = JSON.stringify(args.source?.rows[0]); 
  $bc.setSource('edit.object', { 
      value: stringJson, 
      captcha: captcha, 
      captchaid: captchaid ,

  }) 
  console.log('sourcd',stringJson);
} 


async function OnProcessesEditObjectFn(args) {
  const response = args.response;
const json = await response.json();

console.log(json);
if (json.errorid == 6) {
            console.log('با موفقیت ثبت شذ');
            document.querySelector('.main-container').querySelector('span').innerHTML='پیام شما با موفقیت ثبت شد'
            document.querySelector('.main-container').classList.add('SEND')
  setTimeout(()=>{
    document.querySelector('.main-container').classList.remove('SEND')
  },2000)
          

}

if (json.errorid == 4) {
   console.log(json);
   document.querySelector('.main-container').querySelector('span').innerHTML='  کپچا اشتباه وارد شده  '
   document.querySelector('.main-container').classList.add('SEND')
setTimeout(()=>{
document.querySelector('.main-container').classList.remove('SEND')
},2000)
}

}


function rendered(){
setTimeout(()=>{
  let a =document.querySelectorAll('[data-bc-schema-column] [data-bc-question]')  
  let email = $('[data-bc-schema-column]').children('[data-bc-question]')[0]
  $(email.querySelector('input')).attr('placeholder',' ایمیل ');
  child1.appendChild($('[data-bc-schema-column]').children('[data-bc-question]')[0])
 let isEmpty=false
 let buttons = document.querySelector('.schemaBtn')
let inputs = document.querySelectorAll('input[type="email"], input[type="text"]')
buttons.addEventListener('click',()=>{
  console.log('vkkkk');
  inputs.forEach(input=>{
    console.log(input.value);
      if(input.value == ""){
         isEmpty = true
          console.log('فیلد را پرکنید');
      }
    })
  if(isEmpty){
    isEmpty = false
    document.querySelector('.main-container').querySelector('span').innerHTML='  فیلدها را پرکنید '
    document.querySelector('.main-container').classList.add('SEND')
setTimeout(()=>{
document.querySelector('.main-container').classList.remove('SEND')
},2000)
  }
})

 console.log('rendered');

      
    },100)

}

// SEARCH
let sBTN = document.querySelector('.header .SearchIcon')
let sCon = document.querySelector('.searchContainer')
let sClose  = document.querySelector('.searchContainer .CloseSerch')
sBTN.addEventListener('click',()=>{
sCon.classList.add('show')
})
sClose.addEventListener('click',()=>{
sCon.classList.remove('show')
})