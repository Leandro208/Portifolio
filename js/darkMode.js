var x = 1;

function dark(){
    var icone = document.getElementsByClassName('darkIcon')[0];
    var icone2 = document.getElementsByClassName('darkIcon')[1];
    var nome = document.getElementsByClassName('nome')[0];
    var insta = document.getElementsByClassName('icon')[0];
    var linked = document.getElementsByClassName('icon')[1];
    var face = document.getElementsByClassName('icon')[2];
    var git = document.getElementsByClassName('icon')[3];
    var tele = document.getElementsByClassName('icon')[4];
    var corpoSobre = document.getElementById('corpoSobre');
    var timel = document.getElementById('corpoTime');
    var timel2 = document.getElementById('content');
    var eduTit = document.getElementById('eduT');
    var hab = document.getElementById('habilidades');
    var habTit = document.getElementById('habTit');
    var dvht = document.getElementsByClassName('barra')[0];
    var ht = document.getElementsByClassName('skills')[0];
    var dvcs = document.getElementsByClassName('barra')[1];
    var cs = document.getElementsByClassName('skills')[1];
    var dvjs = document.getElementsByClassName('barra')[2];
    var js = document.getElementsByClassName('skills')[2];
    var dvjv = document.getElementsByClassName('barra')[3];
    var jv = document.getElementsByClassName('skills')[3];
    var dvmy = document.getElementsByClassName('barra')[4];
    var my = document.getElementsByClassName('skills')[4];
    var foo = document.getElementsByTagName('footer')[0];
    var btn = document.querySelector('a.btx');

 if(x==1){
        //modo dark
        icone.style.color = 'white';
        icone2.style.color = 'white';
        nome.style.color = 'white';
        insta.style.color = 'white';
        linked.style.color = 'white';
        face.style.color = 'white';
        git.style.color = 'white';
        tele.style.color = 'white';
        corpoSobre.style.backgroundColor='#292929';
        corpoSobre.style.color='#ffffff';
        timel.style.backgroundColor='#292929';
        timel2.style.backgroundColor='#292929';
        timel.style.color='#ffffff';
        eduTit.style.color='#ffffff';
        hab.style.backgroundColor='#292929';
        habTit.style.backgroundColor='#292929';
        habTit.style.color='#ffffff';
        hab.style.color='#ffffff';
        dvht.style.backgroundColor = '#454545';
        ht.style.backgroundColor='#7f39fb';
        dvcs.style.backgroundColor = '#454545';
        cs.style.backgroundColor='#7f39fb';
        dvjs.style.backgroundColor = '#454545';
        js.style.backgroundColor='#7f39fb';
        dvjv.style.backgroundColor = '#454545';
        jv.style.backgroundColor='#7f39fb';
        dvmy.style.backgroundColor = '#454545';
        my.style.backgroundColor='#7f39fb';
        foo.style.color='#505050';
        btn.style.backgroundColor='#7f39fb';
        x=0;
    }else{
        //modo light
        icone.style.color = 'black';
        icone2.style.color = 'black';
        nome.style.color = '#124265';
        insta.style.color = '#124265';
        linked.style.color = '#124265';
        face.style.color = '#124265';
        git.style.color = '#124265';
        tele.style.color = '#124265';
        corpoSobre.style.backgroundColor='white';
        corpoSobre.style.color='#124265';
        timel.style.backgroundColor='white';
        timel2.style.backgroundColor='white';
        timel.style.color='#124265';
        eduTit.style.color='#124265';
        hab.style.backgroundColor='white';
        habTit.style.backgroundColor='white';
        habTit.style.color='#124265';
        hab.style.color='#124265';
        dvht.style.backgroundColor = '#dddddd';
        ht.style.backgroundColor='#727cf5';
        dvcs.style.backgroundColor = '#dddddd';
        cs.style.backgroundColor='#727cf5';
        dvjs.style.backgroundColor = '#dddddd';
        js.style.backgroundColor='#727cf5';
        dvjv.style.backgroundColor = '#dddddd';
        jv.style.backgroundColor='#727cf5';
        dvmy.style.backgroundColor = '#dddddd';
        my.style.backgroundColor='#727cf5';
        foo.style.color='black';
        btn.style.backgroundColor='#727cf5';
        x=1;
    }
}