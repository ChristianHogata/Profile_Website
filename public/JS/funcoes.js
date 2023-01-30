window.onload = init();
var erro = 0;
var acerto;
var ajuda;

function init(){ 
   //definirTextos('Welcome! My name is Christian Hogata.', 'I created this website for show my skills and my projects.', 'Use the buttons to navigate.',0,'text');
   definirTextos('Hello! How are you?', 'to start select a language', 'English / Japanese / Portuguese',0,'text','eg');

   checarAnimacao(); 
}

function setAvatarSpeak(){
    let avatar = document.querySelector('#imgAvatar');
    avatar.src = 'img/falando.png';
}


function setAvatarSilence(){
    let avatar = document.querySelector('#imgAvatar');
    avatar.src = 'img/quieto.png';
}

function definirTextos(texto1,texto2,texto3,pt,type,lang){
    let paragrafos = document.querySelectorAll('[name="paragrafos"]');
    

    paragrafos[0].innerHTML = texto1;
    paragrafos[1].innerHTML = texto2;
    paragrafos[2].innerHTML = (type == 'text' ? texto3 : '<a href='+texto3+'>Click Here!</a>');

    paragrafos[0].style.display = 'block';
    paragrafos[0].classList = ('line piscar');
    paragrafos[1].style.display = 'none';
    paragrafos[1].classList = ('');
    paragrafos[2].style.display = 'none';
    paragrafos[2].classList = ('');

    setTimeout(() => {
        paragrafos[0].dataset.parte = pt
        paragrafos[0].dataset.lang = lang;   
    }, 1000);
    
}


function checarAnimacao(){
  
    //verifica quando a animação termina e qual elemento ela estava animando 
    //a classe css de animação
    let animacao = document.querySelector(".piscar");
    let paragrafos = document.querySelectorAll('[name="paragrafos"]');
    let inputNome = document.getElementById('nome');
    let avatar = document.querySelector('#imgAvatar');
    var ativo;
    
    animacao.addEventListener('animationstart', ()=>{
      
        setTimeout(() => {
            setAvatarSpeak();    
        }, 1000);
           
    });   

    //adiciona o evento nessa animação para definir uma ação quando ela acabar
    animacao.addEventListener('animationend', ()=>{
       
        setAvatarSilence();

        //var paragrafos = document.querySelectorAll('[name="paragrafos"]');
        //var ativo;

        //procura qual paragrafo está visivel na tela e joga para a variavel "ativo"
        [...paragrafos].forEach(el =>{
            
            if(el.style.display == 'block'){
                ativo = el;   
            }

        });

       //se o elemento ativo for o "txt1" retira a classe de animação e o display dele, ativando o proximo elemento, o "txt2" e repete essa função
        if(ativo.dataset.texto == ('txt1')){
            
            ativo.classList = ('');
            ativo.style.display = '';

            let txt2 = document.getElementById('txt2');
            txt2.style.display = 'block';
            txt2.classList = ('line piscar');
            
            
            setTimeout(() => { 
                checarAnimacao();   
            }, 1000);

        }

        //se o elemento ativo for o "txt2" retira a classe de animação e o display dele, ativando o proximo elemento, o "txt3" e repete essa função
        if(ativo.dataset.texto == ('txt2')){
            
            ativo.classList = ('');
            ativo.style.display = '';

            let txt3 = document.getElementById('txt3');
            txt3.style.display = 'block';
            txt3.classList = ('line piscar');
            
            setTimeout(() => {
                checarAnimacao();   
            }, 1000);
        }

        //se o elemento ativo for o "txt3" retira a classe de animação e o display dele, inserindo um input para uma resposta
        if(ativo.dataset.texto == ('txt3')){
           
            if(paragrafos[0].dataset.parte == 0){
                ativo.classList = ('');
                ativo.style.display = '';
                criarBtn('eg','English');
                criarBtn('jp','Japanese');
                criarBtn('pt','Portuguese');    
            }
            else{
                ativo.classList = ('');
                ativo.style.display = '';
                criarBtn('back','Back');
                criarBtn('next','Next');
            }
            
        }
  
    });   
}

function nextPt(pt){
    let paragrafos = document.querySelectorAll('[name="paragrafos"]');
    paragrafos[0].dataset.parte = ''; 
    paragrafos[0].dataset.parte = pt; 
       
}


function criarBtn(id,name){
    let conteudo = document.querySelector('#btnFooter');
    let column = document.createElement('div');
    let btn = document.createElement('button');
    let espaco = document.createElement('br');
    

    btn.style.background = 'black';
    btn.style.outline = 0 ;
    btn.style.color = 'green';
    btn.style.border = 'dashed';
    btn.id = id;
    btn.innerHTML = name
    btn.name = name;
    btn.classList = "btn";

    column.classList = "col-sm-6";
    //btn.classList = "form-group";

    conteudo.appendChild(column);
    column.appendChild(espaco);
    column.appendChild(btn); 
    
    definirAcaoInput();
}




function definirAcaoInput(){
    let btn = document.querySelectorAll('button');
    let paragrafos = document.querySelectorAll('[name="paragrafos"]');
    let botoesFooter = document.querySelector('#btnFooter');
    

    btn.forEach(bt=>{
        bt.addEventListener('click', el=>{
            setAvatarSpeak();
            if(bt.id == 'next'){
                if(paragrafos[0].dataset.lang == 'eg'){
                    switch(paragrafos[0].dataset.parte){
                        case '1':
                            limpaTela(); 
                            definirTextos("Currently I'm working with the technologies:", "In Front-End i use:", "HTML / CSS / JAVASCRIPT / BOOTSTRAP.",2, 'text','eg');   
                        break; 
                        
                        case '2':
                            limpaTela(); 
                            definirTextos("I work back-end too ", "In back-End i use:", "PHP / NODEJS / EXPRESSJS.", 3, 'text','eg');     
                        break; 
    
                        case '3':
                            limpaTela();
                            definirTextos("For Database i use:", "ORACLE / MYSQL / POSTGRE / FIREBIRD", "Can work with procedures / triggers and more.", 4, 'text','eg');     
                        break;
    
                        case '4':
                            limpaTela();
                            definirTextos("My hobby is studying new technologies.", "I'm studying JAPANESE / DELPHI AND VUEJS", "and working in Simus Technology in Brazil.", 5, 'text','eg');     
                        break; 
    
                        case '5':
                            limpaTela();
                            definirTextos("I have few projects on my github", "my favorite is", "a sales system for Japan.", 6, 'text','eg');     
                        break;
    
                        case '6':
                            limpaTela();
                            definirTextos("To learn more about me", "go to my github profile", "https://github.com/ChristianHogata", 7, 'link','eg');     
                        break;
                    }
                }

                if(paragrafos[0].dataset.lang == 'pt'){
                    switch(paragrafos[0].dataset.parte){
                        case '1':
                            limpaTela(); 
                            definirTextos("Atualmente trabalho com as seguintes tecnologias:", "No Front-End uso:", "HTML / CSS / JAVASCRIPT / BOOTSTRAP.",2, 'text','pt');   
                        break; 
                        
                        case '2':
                            limpaTela(); 
                            definirTextos("Trabalho também com back-end.", "No back-End uso:", "PHP / NODEJS / EXPRESSJS.", 3, 'text','pt');     
                        break; 
    
                        case '3':
                            limpaTela();
                            definirTextos("Uso os seguintes bancos de dados:", "ORACLE / MYSQL / POSTGRE / FIREBIRD", "Utilizo procedures, triggers, etc...", 4, 'text','pt');     
                        break;
    
                        case '4':
                            limpaTela();
                            definirTextos("Meu passatempo é estudar idiomas e novas tecnologias.", "Eu estudo JAPONÊS, DELPHI e VUEJS.", "Trabalho atualmente na Simus Tecnologia LTDA no Brasil.", 5, 'text','pt');     
                        break; 
    
                        case '5':
                            limpaTela();
                            definirTextos("Tenho alguns projetos em meu Github", "meu favorito é", "um sistema de vendas online para o Japão", 6, 'text','pt');     
                        break;
    
                        case '6':
                            limpaTela();
                            definirTextos("Para saber mais sobre mim,", "acesse meu perfil do Github", "https://github.com/ChristianHogata", 7, 'link','pt');     
                        break;
                    }
                }


                if(paragrafos[0].dataset.lang == 'jp'){
                    switch(paragrafos[0].dataset.parte){
                        case '1':
                            limpaTela(); 
                            definirTextos("最近はこのテクノロジーを働きます", "フロントーエンドは", "HTML / CSS / JAVASCRIPT / BOOTSTRAP.",2, 'text','jp');   
                        break; 
                        
                        case '2':
                            limpaTela(); 
                            definirTextos("バクーエンドも働きます", "バクーエンドは", "PHP / NODEJS / EXPRESSJS.", 3, 'text','jp');     
                        break; 
    
                        case '3':
                            limpaTela();
                            definirTextos("データベースは:", "ORACLE / MYSQL / POSTGRE / FIREBIRD", "Procedures / Triggers も使います", 4, 'text','jp');     
                        break;
    
                        case '4':
                            limpaTela();
                            definirTextos("休みの時は言語とテクノロジーを勉強好きです.", "日本語とDelphiやVueJSなど勉強しています", "最近はブラジルに働きます", 5, 'text','jp');     
                        break; 
    
                        case '5':
                            limpaTela();
                            definirTextos("Githubにコドはすこじだけあります", "一番の好きは", "私の日本プログラムです！", 6, 'text','jp');     
                        break;
    
                        case '6':
                            limpaTela();
                            definirTextos("私のこと調べたいなら", "Githubのリンクを押してください", "https://github.com/ChristianHogata", 7, 'link','jp');     
                        break;
                    }
                }
                
            }

            if(bt.id == 'back') {
                if(paragrafos[0].dataset.lang == 'eg'){
                    switch(paragrafos[0].dataset.parte){
                    
                        case '2':
                            limpaTela();
                            definirTextos('Welcome! My name is Christian Hogata', 'I developed this website to show my skills and my projects.', 'Lets go?',1,'text','eg'); 
                        break; 
                            
                        case '3':
                            limpaTela();
                            definirTextos("Currently I'm working with the technologies:", "Front-End:", "HTML / CSS / JAVASCRIPT / BOOTSTRAP", 2,'text','eg');     
                        break; 
    
                        case '4':
                            limpaTela();
                            definirTextos("I work back-end too ", "In back-End i use:", "PHP / NODEJS / EXPRESSJS.", 3, 'text','eg');     
                        break; 
    
                        case '5':
                            limpaTela();
                            definirTextos("For Database i use:", "ORACLE / MYSQL / POSTGRE / FIREBIRD", "Can work with procedures / triggers and more.", 4, 'text','eg');     
                        break; 
    
                        case '6':
                            limpaTela();
                            definirTextos("My hobby is studying new technologies.", "I'm studying JAPANESE / DELPHI AND VUEJS", "and working in Simus Technology in Brazil.", 5, 'text','eg');     
                        break; 
    
                        case '7':
                            limpaTela();
                            definirTextos("I have few projects on my github", "my favorite is", "a sales system for Japan.", 6, 'text','eg');     
                        break; 
                    }    
                }     

                if(paragrafos[0].dataset.lang == 'pt'){
                    switch(paragrafos[0].dataset.parte){
                    
                        case '2':
                            limpaTela();
                            definirTextos('Bem-Vindo! Me chamo Christian Hogata.', 'Eu criei este site para mostrar um pouco de minhas habilidades e perfil.', 'Use os botões para navegar.',1,'text','pt');     
                        break; 
                            
                        case '3':
                            limpaTela();
                            definirTextos("Atualmente trabalho com as seguintes tecnologias:", "No Front-End uso:", "HTML / CSS / JAVASCRIPT / BOOTSTRAP.",2, 'text','pt');   
                        break; 
    
                        case '4':
                            limpaTela();
                            definirTextos("Trabalho também com back-end.", "No back-End uso:", "PHP / NODEJS / EXPRESSJS.", 3, 'text','pt');     
                        break; 
    
                        case '5':
                            limpaTela();
                            definirTextos("Uso os seguintes bancos de dados:", "ORACLE / MYSQL / POSTGRE / FIREBIRD", "Utilizo procedures, triggers, etc...", 4, 'text','pt');     
                        break; 
    
                        case '6':
                            limpaTela();
                            definirTextos("Meu passatempo é estudar idiomas e novas tecnologias.", "Eu estudo JAPONÊS, DELPHI e VUEJS.", "Trabalho atualmente na Simus Tecnologia LTDA no Brasil.", 5, 'text','pt');     
                        break; 
    
                        case '7':
                            limpaTela();
                            definirTextos("Tenho alguns projetos em meu Github", "meu favorito é", "um sistema de vendas online para o Japão", 6, 'text','pt');     
                        break; 
                    }    
                }    


                if(paragrafos[0].dataset.lang == 'jp'){
                    switch(paragrafos[0].dataset.parte){
                    
                        case '2':
                            limpaTela();
                            definirTextos('よこそう！ホガタクリスチアンと申します', 'このウェブページ作ったので能力を見せる', '言語を選べてください',1,'text','jp');     
                            break; 
                            
                        case '3':
                            limpaTela();
                            definirTextos("最近はこのテクノロジーを働きます", "フロントーエンドは", "HTML / CSS / JAVASCRIPT / BOOTSTRAP.",2, 'text','jp');   
                        break; 
    
                        case '4':
                            limpaTela();
                            definirTextos("バクーエンドも働きます", "バクーエンドは", "PHP / NODEJS / EXPRESSJS.", 3, 'text','jp');     
                        break; 
    
                        case '5':
                            limpaTela();
                            definirTextos("データベースは:", "ORACLE / MYSQL / POSTGRE / FIREBIRD", "Procedures / Triggers も使います", 4, 'text','jp');     
                        break; 
    
                        case '6':
                            limpaTela();
                            definirTextos("休みの時は言語とテクノロジーを勉強好きです.", "日本語とDelphiやVueJSなど勉強しています", "最近はブラジルに働きます", 5, 'text','jp');     
                        break; 
    
                        case '7':
                            limpaTela();
                            definirTextos("Githubにコドはすこじだけあります", "一番の好きは", "私の日本プログラムです！", 6, 'text','jp');     
                        break; 
                    }    
                }    
            }

            if(bt.id == 'eg'){
                paragrafos[0].dataset.lang = 'eg';
                botoesFooter.innerHTML = '';
                definirTextos('Welcome! My name is Christian Hogata.', 'I developed this website to show my skills and my projects.', 'Use the buttons to navigate.',1,'text','eg');    
            }


            if(bt.id == 'pt') {
                paragrafos[0].dataset.lang = 'eg';
                botoesFooter.innerHTML = '';
                definirTextos('Bem-Vindo! Me chamo Christian Hogata.', 'Eu criei este site para mostrar um pouco de minhas habilidades e perfil.', 'Use os botões para navegar.',1,'text','pt');     
            }

            if(bt.id == 'jp') {
                paragrafos[0].dataset.lang = 'eg';
                botoesFooter.innerHTML = '';
                definirTextos('よこそう！ホガタクリスチアンと申します', 'このウェブページ作ったので能力を見せる', '言語を選べてください',1,'text','jp');     
            }
        })
    })  
}



function limpaTela(){
    let paragrafos = document.querySelectorAll('[name="paragrafos"]');
    let btn = document.querySelector('button');
    let footer = document.getElementById('btnFooter');

    paragrafos[0].style.display = '';
    paragrafos[0].innerHTML = '';
    paragrafos[0].classList = '';

    paragrafos[1].style.display = '';
    paragrafos[1].innerHTML = '';

    paragrafos[2].style.display = '';
    paragrafos[2].innerHTML = '';
    paragrafos[2].classList = '';
    footer.innerHTML = '';    

}


