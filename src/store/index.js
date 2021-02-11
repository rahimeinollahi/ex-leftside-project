import { createStore } from 'vuex'
import actions from './actions';
import mutations from './mutations'
// import todos from './moduls/todos';

export default createStore({
  state: {
   navHomeItems:[
     {id:1,textLink:'Home',router:'/'},
     {id:2,textLink:'About',router:'/about'},
     {id:3,textLink:'Contact info',router:'/contact-info'},
   ],
   LSideHome:[
     {id:1,header:'Computer',showHeaders:true,parts:[
       {id:1,headerItem:"software",router:'/'},
       {id:2,headerItem:"Hardware",router:'/hardware'},
       {id:3,headerItem:"Programing",router:'/programing'},
     ]},
     {id:1,header:'Books',showHeaders:true,parts:[
       {id:1,headerItem:"Habbit atom",router:'/habitatom'},
       {id:2,headerItem:"clean code",router:'/cleancode'},
       {id:3,headerItem:"Super winner",router:'/superwinner'},
     ]},
     {id:1,header:'Jobs',showHeaders:true,parts:[
       {id:1,headerItem:"Front-end",router:'/front-end'},
       {id:2,headerItem:"Back-end",router:'/back-end'},
       {id:3,headerItem:"FullStack",router:'/fullstack'},
     ]},
   ],
   softwareTable:[
     {id:1,title:' mouse',isThere:true,price:500},
     {id:2,title:' laptop',isThere:false,price:2500},
     {id:3,title:' keyboard',isThere:true,price:1500},
     {id:4,title:' keyboard',isThere:true,price:1500},
     {id:5,title:' keyboard',isThere:true,price:1500},
     {id:6,title:' keyboard',isThere:true,price:1500},
     {id:7,title:' keyboard',isThere:true,price:1500},
     {id:8,title:' keyboard',isThere:true,price:1500},
     {id:9,title:' keyboard',isThere:true,price:1500},
     {id:10,title:' keyboard',isThere:true,price:1500},
     {id:11,title:' keyboard',isThere:true,price:1500},
     {id:12,title:' keyboard',isThere:true,price:1500},
     {id:13,title:' keyboard',isThere:true,price:1500},
     {id:14,title:' keyboard',isThere:true,price:1500},
     {id:15,title:' keyboard',isThere:true,price:1500},
     {id:16,title:' keyboard',isThere:true,price:1500},
     {id:17,title:' keyboard',isThere:true,price:1500},
     {id:18,title:' keyboard',isThere:true,price:1500},
   ],
   softwareTHeader:['ID','TITLE','ISTHERE','PRICE'],

   tableHeaderSection:[
     {id:1,href:'#table1',HeaderName:'Table 1'},
     {id:2,href:'#table2',HeaderName:'Table 2'},
     {id:3,href:'#table3',HeaderName:'Table 3'},
     {id:4,href:'#table4',HeaderName:'Table 4'},
   ],

   tableFooterSection:[
     {id:1,href:'#Note1',FooterName:'Note 1'},
     {id:2,href:'#Note2',FooterName:'Note 2'},
     {id:3,href:'#Note3',FooterName:'Note 3'},
     {id:4,href:'#Note4',FooterName:'Note 4'},
   ],
   tableContent:[
     {id:'table1',headerName:'table  content 1',contentText:'Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document. To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar. Click Insert and then choose the elements you want from the different galleries. Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme. Save time in Word with new buttons that show up where you need them.'},
     {id:'table2',headerName:'table  content 2',contentText:'Click Insert and then choose the elements you want from the different galleries. Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme. Save time in Word with new buttons that show up where you need them Click Insert and then choose the elements you want from the different galleries. Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme. Save time in Word with new buttons that show up where you need them Click Insert and then choose the elements you want from the different galleries. Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme. Save time in Word with new buttons that show up where you need them Click Insert and then choose the elements you want from the different galleries. Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme. Save time in Word with new buttons that show up where you need them'},
     {id:'table3',headerName:'table  content 3',contentText:'Click Insert and then choose the elements you want from the different galleries. Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme. Save time in Word with new buttons that show up where you need them Click Insert and then choose the elements you want from the different galleries. Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme. Save time in Word with new buttons that show up where you need them Click Insert and then choose the elements you want from the different galleries. Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme. Save time in Word with new buttons that show up where you need them Click Insert and then choose the elements you want from the different galleries. Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme. Save time in Word with new buttons that show up where you need them'},
     {id:'table4',headerName:'table  content 4',contentText:'Click Insert and then choose the elements you want from the different galleries. Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme. Save time in Word with new buttons that show up where you need them Click Insert and then choose the elements you want from the different galleries. Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme. Save time in Word with new buttons that show up where you need them Click Insert and then choose the elements you want from the different galleries. Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme. Save time in Word with new buttons that show up where you need them Click Insert and then choose the elements you want from the different galleries. Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme. Save time in Word with new buttons that show up where you need them'},
   ],
   tableFooterContent:[
     {id:'Note1',headerName:'Note  content 1',contentText:'Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document. To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar. Click Insert and then choose the elements you want from the different galleries. Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme. Save time in Word with new buttons that show up where you need them.'},
     {id:'Note2',headerName:'Note  content 2',contentText:'Click Insert and then choose the elements you want from the different galleries. Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme. Save time in Word with new buttons that show up where you need them Click Insert and then choose the elements you want from the different galleries. Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme. Save time in Word with new buttons that show up where you need them Click Insert and then choose the elements you want from the different galleries. Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme. Save time in Word with new buttons that show up where you need them Click Insert and then choose the elements you want from the different galleries. Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme. Save time in Word with new buttons that show up where you need them'},
     {id:'Note3',headerName:'Note  content 3',contentText:'Click Insert and then choose the elements you want from the different galleries. Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme. Save time in Word with new buttons that show up where you need them Click Insert and then choose the elements you want from the different galleries. Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme. Save time in Word with new buttons that show up where you need them Click Insert and then choose the elements you want from the different galleries. Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme. Save time in Word with new buttons that show up where you need them Click Insert and then choose the elements you want from the different galleries. Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme. Save time in Word with new buttons that show up where you need them'},
     {id:'Note4',headerName:'Note  content 4',contentText:'Click Insert and then choose the elements you want from the different galleries. Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme. Save time in Word with new buttons that show up where you need them Click Insert and then choose the elements you want from the different galleries. Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme. Save time in Word with new buttons that show up where you need them Click Insert and then choose the elements you want from the different galleries. Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme. Save time in Word with new buttons that show up where you need them Click Insert and then choose the elements you want from the different galleries. Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme. Save time in Word with new buttons that show up where you need them'},
   ],
   habbitBooks:[
     {id:1,text:'Habbit atom',url:'./photo/1.jpg',alt:'book 1'},
     {id:2,text:'Habbit atom',url:'./photo/1.jpg',alt:'book 2'},
   ]
  
  },
  getters:{
  
  },
  actions,
  mutations,
  modules: {
    // todos
  }
})
