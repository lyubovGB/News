///переключение темы
let buttonTheme = document.querySelectorAll('#buttonTheme');
let click2 = true;
let body = document.querySelectorAll('body');
buttonTheme[0].onclick=function(){
    if(click2==true){
        body[0].style.background = 'white'
        body[0].style.color = '#535353'
        link.style.color = '#535353'
        buttonTheme[0].innerHTML=`<img src="../img/day_n.png" id="but_img_2" alt="Кнопка" width="70px">`
        click2=false;
    }
        else{
            body[0].style.background = 'black'
            body[0].style.color = '#e5dada'
            link.style.color = '#e5dada'
            buttonTheme[0].innerHTML=`<img src="../img/night_n.png" id="but_img_2" alt="Кнопка" width="70px">`;
            click2=true;
        }   
}



        class News{
            constructor(arrNews=[[], [], [], []]){
                this.arrNews = arrNews     
                
                let dataNow = new Date().toLocaleDateString()
              let cutDateNews =arrNews[2][0].split("-")
               let cutDateNow = dataNow.split(".")
                    if(cutDateNews[0] == cutDateNow[2] && cutDateNews[1] == cutDateNow[1] && cutDateNews[2] == cutDateNow[0] ){
                         dateNews = `<br><br>Опубликовано сегодня`
                    }
                    if(Number(cutDateNow[0]) - Number(cutDateNews[2]) == 1 && cutDateNow[1] == cutDateNews[1] && cutDateNow[2] == cutDateNews[0]){
                        dateNews = `<br><br>Опубликовано вчера`
                 }
                     else{
                         dateNews = `<br><br>Опубликовано ${arrNews[2]} `
                        }  
            }
            
            get quantityNews(){
                sumQuantity=this.arrNews[0].length + kolvo
                
                let newsX = sumQuantity%10;
                if ((newsX==1)^(sumQuantity==11)) {
                    return(`На странице ${sumQuantity} новость:`);
                }
                else if((newsX>=2&&newsX<=4)^(sumQuantity>=12&&sumQuantity<=14)){
                    return(`На странице ${sumQuantity} новости:`);
                }
                else if ((newsX==0)||(newsX>=5&&newsX<=9)) {
                    return(`На странице ${sumQuantity} новостей:`);
                }
                else if (sumQuantity>=11&&sumQuantity<=14) {
                    return(`На странице ${sumQuantity} новости:`);
                }  
            }
            
            outNews(){
                for(let i=0; i<this.arrNews[0].length; i++){
                   
                    out[0].innerHTML+= `<br><br><b> ${this.arrNews[0][i]}</b><br><br> ${this.arrNews[1][i]}<br> ${dateNews} <br>${this.arrNews[3][i]}`
                   // out[0].style.width = '100%'; 
                    out1[0].innerHTML= arrAllNews[0].quantityNews 
                    
                   
                }
            
            }
            addNews(){  
                let header = document.getElementById("header");
                let text = document.getElementById("text");
                let date = document.getElementById("date");
                let tegs = document.getElementById("tegs");
               kolvo++
                arrAllNews.push ( new News([[header.value], [text.value],[date.value], [tegs.value]]));
                for(let i=0; i<arrAllNews.length-(arrAllNews.length-1); i++){
                    arrAllNews[arrAllNews.length-1].outNews()
                  arrAllNews[i].quantityNews
                }
                header.value = ''
                text.value = ''
                date.value = ''
                tegs.value = ''
             }
        }
        let dateNews = ``
        let kolvo = 0
        let sumQuantity =0 
        let click = true
        let out = document.querySelectorAll('#out');
        let out1 = document.getElementsByTagName('span');
        let but = document.getElementsByTagName('button');
        let add = document.querySelectorAll('#add');
        let arrAllNews = [];
        arrAllNews.push ( new News([['Заголовок1' ], ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget lacus id est feugiat mollis. Praesent ullamcorper ante nec tempus eleifend. Sed velit urna, scelerisque euismod vehicula in, luctus sit amet tortor. Etiam at posuere enim. Sed ultrices eros sed augue fringilla, id venenatis neque congue. Sed tortor odio, pretium a maximus feugiat, sagittis in tellus. Donec volutpat purus vel metus porta, sed egestas odio egestas. Ut euismod efficitur turpis non dictum. Curabitur fermentum eu sapien id convallis.'],['2013-12-25'], ['#tefff #tegg']]));
        arrAllNews[0].outNews();
         function butAdd(){
           if(click){
                 but[0].innerHTML = 'Отменить'
                add[0].innerHTML = '<input type="text" id="header"  placeholder = "Заголовок"> <textarea id="text" placeholder = "Текст новости"></textarea> <input type="date" id="date" placeholder = "Дата публикации"> <input type="text" id="tegs" placeholder = "Теги"> <button onclick="butSave()">Сохранить</button>'
                click = false 
            }
                else{
                    add[0].innerHTML = ' '
                   but[0].innerHTML = 'Добавить новость'
                    click = true
                }
                
        }
        
        function butSave(){
            arrAllNews[0].addNews()
        }
        
        function butSave(){
            arrAllNews[0].addNews()
        }
