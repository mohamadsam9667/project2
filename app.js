
let yourFood = [
  'قرمه سبزی',
  'سوپ',
  'آش',
  'استانبلی',
  'ماکارانی',
  'فلافل',
  'سیب زمینی کوبیده',
  'سوسیس تخم مرغ',
  'تخم مرغ',
  'مرغ',
  'ماهی',
  'قیمه',
  'سیب زمینی و تخم مرغ',
  'لوبیا چیتی',
  'عدسی',
  'کرفس',
  'کوکو سبزی',
  'کوکو سیب زمینی',
  'بادمجون گوجه',
  'یتیم چه',
  'جوجه',
  'حاضری',
  'کتلت'
];


let economicFood = [
  'اشکنه',
  'خوراک لوبیا',
  'املت',
  'آب دوغ خیار',
  'میرزا قاسمی',
  'عدسی',
  'خوراک سبزیجات',
  'نون و پنیر و سبزی',
  'نخود آب',
  'کشک بادمجان',
  'خوراک بادمجان',
  'ماش پلو',
  'دمی گوجه',
  'خوراک عدس و سیب زمینی',
  'کله جوش',
  'سیب زمینی تنوری',
  'پیاز داغ پلو',
  'خوراک کدو',
  'خوراک قارچ',
  'آش رشته',
  'آش جو',
  'پلو عدس',
  'خوراک نخود فرنگی',
  'دلمه',
  'پوره سیب زمینی',
  'سوپ جو',
  'کتلت مرغ',
  'لوبیا پلو',
  'دو پیازه آلو',
  'خوراک قارچ و سیب زمینی',
  'اشکنه تخم مرغ',
  'اشکنه سیب زمینی',
  'خوراک هویج و سیب زمینی',
  'خوراک سیب زمینی و کرفس',
  'خوراک کدو و گوجه',
  'سیب زمینی آب پز با کره',
  'پوره هویج',
  'بلغور پلو',
  'سبزی پلو با تخم مرغ',
  'کوفته ریزه'
];

let nonEconomicFood = [
  'کباب',
  'زرشک پلو با مرغ',
  'باقالی پلو با ماهیچه',
  'خورشت فسنجان',
  'ماهی',
  'چلو گوشت',
  'جوجه کباب',
  'خوراک میگو',
  'مرصع پلو',
  'قلیه ماهی',
  'خوراک زبان',
  'خورشت آلو مسما',
  'خورشت خلال کرمانشاهی',
  'ته‌چین مرغ',
  'کلم پلو شیرازی',
  'بریان اصفهانی',
  'خوراک پاچین',
  'چلو گردن',
  'کباب سلطانی',
  'استیک'
];



let allFood = [
  ...yourFood,      // غذاهای موجود در لیست شما
  ...economicFood,  // غذاهای اقتصادی
  ...nonEconomicFood // غذاهای غیر اقتصادی
];



let btn=document.querySelector('.btn')
let h1Elem=document.querySelector('.title')




// console.log(allFood)

btn.addEventListener('click',function(){
  let numberRand=(Math.floor(Math.random()*allFood.length))
console.log(numberRand)
h1Elem.innerHTML=`${allFood[numberRand] }`
})
// btn.addEventlistener('click',function(){
//   console.log("Sa")
// })














