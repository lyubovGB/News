class News{
            constructor(arrNews=[header=[], text=[], date=[], arrTeg=[]]){
                this.arrNews = arrNews     

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
                   
                    out[0].innerHTML+= `<br><br><b> ${this.arrNews[0][i]}</b><br> ${this.arrNews[1][i]}<br> ${this.arrNews[2][i]} <br>${this.arrNews[3][i]}`
                    out[0].style.width = '100%'; 
                    out1[0].innerHTML= arrAllNews[0].quantityNews 
                    
                   
                }
            
            }
            addNews(newsForClean){  
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
        let kolvo = 0
        let sumQuantity =0 
        let click = true
        let out = document.querySelectorAll('#out');
        let out1 = document.getElementsByTagName('span');
        let but = document.getElementsByTagName('button');
        let add = document.querySelectorAll('#add');
        let arrAllNews = [];
        let header = document.getElementById("header");
        let text = document.getElementById("text");
        let date = document.getElementById("date");
        let tegs = document.getElementById("tegs");
        arrAllNews.push ( new News([['Заголовок1', 'Заголовок2' ], ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget lacus id est feugiat mollis. Praesent ullamcorper ante nec tempus eleifend. Sed velit urna, scelerisque euismod vehicula in, luctus sit amet tortor. Etiam at posuere enim. Sed ultrices eros sed augue fringilla, id venenatis neque congue. Sed tortor odio, pretium a maximus feugiat, sagittis in tellus. Donec volutpat purus vel metus porta, sed egestas odio egestas. Ut euismod efficitur turpis non dictum. Curabitur fermentum eu sapien id convallis.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget lacus id est feugiat mollis. Praesent ullamcorper ante nec tempus eleifend. Sed velit urna, scelerisque euismod vehicula in, luctus sit amet tortor. Etiam at posuere enim. Sed ultrices eros sed augue fringilla, id venenatis neque congue. Sed tortor odio, pretium a maximus feugiat, sagittis in tellus. Donec volutpat purus vel metus porta, sed egestas odio egestas. Ut euismod efficitur turpis non dictum. Curabitur fermentum eu sapien id convallis.'],['25.12.2013', '04.04.1658'], ['#tru1 #hgt1 #tefff #tegg #tefff #tegg#tefff #tegg#tefff #tegg', '#tefff #tegg']]));
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
