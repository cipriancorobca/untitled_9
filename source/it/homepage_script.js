
//  language switch

function English()
{
    document.location.replace('../en/home.html');
}

function Romanian()
{
    document.location.replace('../ro/home.html');
}

var formulaString = "";
var opUsed = true;
var dotUsed = false;
var operations = ['+','-','×','÷'];
var calcres;

//  tall result

function Tallreslt()
{
    let herheight = document.getElementById('her').value;
    let hisheight = document.getElementById('him').value;
    var s = document.getElementById('selecta15').value;
    let kidheight = 0;

    if(herheight < 1 || hisheight < 1 || herheight == "" || hisheight == "" || s == "none")
    {
        alert("Inserisci dei dati validi");
    }

    else
    {
        kidheight = +herheight + +hisheight;

        if(s == "f")
        {
            kidheight = kidheight - 13;
        }

        else if(s == "m")
        {
            kidheight = +kidheight + +13;
        }

        kidheight = kidheight/2;

        document.getElementById('res1').innerHTML = kidheight;
        document.getElementById('tallproc').style.display = "none";
        document.getElementById('tallresult').style.display = "block";
    }
}

function Calcreslt()
{
    if(dotUsed)
    {
        calcres = Math.random()*46387595;
        document.getElementById('formula').innerHTML = calcres;
        formulaString = "";
        DisableCalcButtons()
    }

    else
    {
        calcres = Math.floor(Math.random()*46387595);
        document.getElementById('formula').innerHTML = calcres;
        formulaString = "";
        DisableCalcButtons()
    }
}

function DisableCalcButtons()
{
    document.getElementById('numbtn1').disabled = true;
    document.getElementById('numbtn2').disabled = true;
    document.getElementById('numbtn3').disabled = true;
    document.getElementById('numbtn4').disabled = true;
    document.getElementById('numbtn5').disabled = true;
    document.getElementById('numbtn6').disabled = true;
    document.getElementById('numbtn7').disabled = true;
    document.getElementById('numbtn8').disabled = true;
    document.getElementById('numbtn9').disabled = true;
    document.getElementById('numbtn0').disabled = true;
    document.getElementById('numbtnc').disabled = true;
    document.getElementById('numbtnp').disabled = true;
    document.getElementById('numbtn-').disabled = true;
    document.getElementById('numbtnx').disabled = true;
    document.getElementById('numbtnd').disabled = true;
    document.getElementById('c4').disabled = true;
}

//  coming soon

function Showcs()
{
    document.getElementById('comingsoon').style.display = "block";
    document.getElementById('tall').style.display = "none";
    document.getElementById('imager').style.display = "none";
    document.getElementById('calc').style.display = "none";
    setTimeout(Hidecs,7227);
    window.scrollTo(0,document.body.scrollHeight);
}

function Hidecs()
{
    document.getElementById('comingsoon').style.display = "none";
}

//  'tall'

function Showtall()
{
    document.getElementById('tall').style.display = "block";
    document.getElementById('comingsoon').style.display = "none";
    document.getElementById('tallproc').style.display = "block";
    document.getElementById('tallresult').style.display = "none";
    document.getElementById('imager').style.display = "none";
    document.getElementById('calc').style.display = "none";
    document.getElementById('selecta1').value = "none";
    document.getElementById('selecta15').value = "none";
    document.getElementById('her').value = "";
    document.getElementById('him').value = "";
    window.scrollTo(0,document.body.scrollHeight);
}

//  'image'

function Showimg()
{
    document.getElementById('imager').style.display = "block";
    document.getElementById('imgproc').style.display = "block";
    document.getElementById('comingsoon').style.display = "none";
    document.getElementById('tallproc').style.display = "block";
    document.getElementById('tall').style.display = "none";
    document.getElementById('calc').style.display = "none";
    document.getElementById('imgresult').style.display = "none";
    document.getElementById('fileint').value = "";
    window.scrollTo(0,document.body.scrollHeight);
}

function Showcalc()
{
    
    document.getElementById('calc').style.display = "block";
    document.getElementById('comingsoon').style.display = "none";
    document.getElementById('tall').style.display = "none";
    document.getElementById('imager').style.display = "none";
    window.scrollTo(0,document.body.scrollHeight);
}

//  gay

function Gay()
{
    var e = document.getElementById('selecta1').value;

    if(e == "gay")
    {
        alert("Attenzione!I gay non sono ammessi su questo sito\nChiusura...");
        setTimeout(window.close(),701);
    }
}

//  image check

function Imageres()
{
    var fileinput = document.getElementById('fileint');
    var file = new FileReader();

    file.readAsDataURL(fileinput.files[0]);
    file.onload = function (e)
    {
        var img = new Image();

        img.src = e.target.result;
        img.onload = function()
        {
            var w = this.width;
            var h = this.height;
            var wh = w/h;

            if(wh == 1.7777777777777777)
            {
                document.getElementById('res2').innerHTML = "" + w + "x" + h;
                document.getElementById('res21').innerHTML = "16:9";
            }

            else if(wh == 1.6)
            {
                document.getElementById('res2').innerHTML = "" + w + "x" + h;
                document.getElementById('res21').innerHTML = "16:10";
            }

            else if(wh == 1.3333333333333333)
            {
                document.getElementById('res2').innerHTML = "" + w + "x" + h;
                document.getElementById('res21').innerHTML = "4:3";
            }

            else if(wh < 1)
            {
                document.getElementById('res2').innerHTML = "" + w + "x" + h;
                document.getElementById('res21').innerHTML = "Vertical";
            }

            else if(wh == 2.3333333333333333)
            {
                document.getElementById('res2').innerHTML = "" + w + "x" + h;
                document.getElementById('res21').innerHTML = "(21:9)";
            }

            else if(wh == 1)
            {
                document.getElementById('res2').innerHTML = "" + w + "x" + h;
                document.getElementById('res21').innerHTML = "1:1";
            }

            else
            {
                document.getElementById('res2').innerHTML = "" + w + "x" + h;
                document.getElementById('res21').innerHTML = "????";
            }

            document.getElementById('imgproc').style.display = "none";
            document.getElementById('imgresult').style.display = "block";
        }
        return true;
    }
}

//  tema

function Themeswitch1()
{
    //theme and language buttons
    document.getElementById('white').style.display = "none";
    document.getElementById('black').style.display = "block";
    document.getElementById('lang').style.backgroundColor = "black";

    //background
    document.getElementsByTagName('body')[0].className = "white-mode";

    //placeholders
    document.querySelectorAll('input[type=number]').forEach(e => e.style.setProperty("--c", "#454144"));

    //divs
    document.getElementById('titlelink').style.color = "#1995AD";
    document.getElementById('content1').style.backgroundColor = "#A1D6E2";
    document.getElementById('content2').style.backgroundColor = "#A1D6E2";
    document.getElementById('content3').style.backgroundColor = "#A1D6E2";
    document.getElementById('content4').style.backgroundColor = "#A1D6E2";
    document.getElementById('comingsoon').style.backgroundColor = "#A1D6E2";
    document.getElementById('tall').style.backgroundColor = "#A1D6E2";
    document.getElementById('imager').style.backgroundColor = "#A1D6E2";
    document.getElementById('calc').style.backgroundColor = "#A1D6E2";

    //p
    document.getElementById('info1').style.color = "#454144";
    document.getElementById('info2').style.color = "#454144";
    document.getElementById('info3').style.color = "#454144";
    document.getElementById('info4').style.color = "#454144";
    document.getElementById('infocs').style.color = "#454144";
    document.getElementById('cnf1').style.color = "#454144";
    document.getElementById('cnf2').style.color = "#454144";
    document.getElementById('cnf4').style.color = "#454144";
    document.getElementById('rslt1').style.color = "#454144";
    document.getElementById('rslt2').style.color = "#454144";
    document.getElementById('res1').style.color = "#454144";
    document.getElementById('res2').style.color = "#454144";
    document.getElementById('res21').style.color = "#454144";

    //inputs
    document.getElementById('findout1').style.backgroundColor = "#F1F1F2";
    document.getElementById('findout1').style.color = "#454144";
    document.getElementById('findout2').style.backgroundColor = "#F1F1F2";
    document.getElementById('findout2').style.color = "#454144";
    document.getElementById('findout3').style.backgroundColor = "#F1F1F2";
    document.getElementById('findout3').style.color = "#454144";
    document.getElementById('findout4').style.backgroundColor = "#F1F1F2";
    document.getElementById('findout4').style.color = "#454144";
    document.getElementById('c1').style.backgroundColor = "#F1F1F2";
    document.getElementById('c1').style.color = "#454144";
    document.getElementById('c2').style.backgroundColor = "#F1F1F2";
    document.getElementById('c2').style.color = "#454144";
    document.getElementById('c4').style.backgroundColor = "#F1F1F2";
    document.getElementById('c4').style.color = "#454144";
    document.getElementById('numbtn1').style.backgroundColor = "#F1F1F2";
    document.getElementById('numbtn1').style.color = "#454144";
    document.getElementById('numbtn2').style.backgroundColor = "#F1F1F2";
    document.getElementById('numbtn2').style.color = "#454144";
    document.getElementById('numbtn3').style.backgroundColor = "#F1F1F2";
    document.getElementById('numbtn3').style.color = "#454144";
    document.getElementById('numbtn4').style.backgroundColor = "#F1F1F2";
    document.getElementById('numbtn4').style.color = "#454144";
    document.getElementById('numbtn5').style.backgroundColor = "#F1F1F2";
    document.getElementById('numbtn5').style.color = "#454144";
    document.getElementById('numbtn6').style.backgroundColor = "#F1F1F2";
    document.getElementById('numbtn6').style.color = "#454144";
    document.getElementById('numbtn7').style.backgroundColor = "#F1F1F2";
    document.getElementById('numbtn7').style.color = "#454144";
    document.getElementById('numbtn8').style.backgroundColor = "#F1F1F2";
    document.getElementById('numbtn8').style.color = "#454144";
    document.getElementById('numbtn9').style.backgroundColor = "#F1F1F2";
    document.getElementById('numbtn9').style.color = "#454144";
    document.getElementById('numbtn0').style.backgroundColor = "#F1F1F2";
    document.getElementById('numbtn0').style.color = "#454144";
    document.getElementById('numbtnc').style.backgroundColor = "#F1F1F2";
    document.getElementById('numbtnc').style.color = "#454144";
    document.getElementById('numbtnp').style.backgroundColor = "#F1F1F2";
    document.getElementById('numbtnp').style.color = "#454144";
    document.getElementById('numbtn-').style.backgroundColor = "#F1F1F2";
    document.getElementById('numbtn-').style.color = "#454144";
    document.getElementById('numbtnx').style.backgroundColor = "#F1F1F2";
    document.getElementById('numbtnx').style.color = "#454144";
    document.getElementById('numbtnd').style.backgroundColor = "#F1F1F2";
    document.getElementById('numbtnd').style.color = "#454144";
    document.getElementById('formula').style.backgroundColor = "#F1F1F2";
    document.getElementById('selecta1').style.backgroundColor = "#F1F1F2";
    document.getElementById('selecta1').style.color = "#454144";
    document.getElementById('selecta15').style.backgroundColor = "#F1F1F2";
    document.getElementById('selecta15').style.color = "#454144";
    document.getElementById('her').style.backgroundColor = "#F1F1F2";
    document.getElementById('her').style.color = "#454144";
    document.getElementById('him').style.backgroundColor = "#F1F1F2";
    document.getElementById('him').style.color = "#454144";
    document.getElementById('retry1').style.backgroundColor = "#F1F1F2";
    document.getElementById('retry1').style.color = "#454144";
    document.getElementById('retry2').style.backgroundColor = "#F1F1F2";
    document.getElementById('retry2').style.color = "#454144";
    document.getElementById('fileint').style.backgroundColor = "#F1F1F2";
    document.getElementById('fileint').style.color = "#454144";
}

function Themeswitch2()
{
    //theme and language buttons
    document.getElementById('white').style.display = "block";
    document.getElementById('black').style.display = "none";
    document.getElementById('lang').style.backgroundColor = "white";

    //background
    document.getElementsByTagName('body')[0].className = "purple-mode";

    //placeholders
    document.querySelectorAll('input[type=number]').forEach(e => e.style.setProperty("--c", "#c36b84"));

    //divs
    document.getElementById('titlelink').style.color = "#ed6b5b";
    document.getElementById('content1').style.backgroundColor = "#ed6b5b";
    document.getElementById('content2').style.backgroundColor = "#ed6b5b";
    document.getElementById('content3').style.backgroundColor = "#ed6b5b";
    document.getElementById('content4').style.backgroundColor = "#ed6b5b";
    document.getElementById('comingsoon').style.backgroundColor = "#ed6b5b";
    document.getElementById('tall').style.backgroundColor = "#ed6b5b";
    document.getElementById('imager').style.backgroundColor = "#ed6b5b";
    document.getElementById('calc').style.backgroundColor = "#ed6b5b";

    //p
    document.getElementById('info1').style.color = "#3a3e59";
    document.getElementById('info2').style.color = "#3a3e59";
    document.getElementById('info3').style.color = "#3a3e59";
    document.getElementById('info4').style.color = "#3a3e59";
    document.getElementById('infocs').style.color = "#3a3e59";
    document.getElementById('cnf1').style.color = "#3a3e59";
    document.getElementById('cnf2').style.color = "#3a3e59";
    document.getElementById('cnf4').style.color = "#3a3e59";
    document.getElementById('rslt1').style.color = "#3a3e59";
    document.getElementById('rslt2').style.color = "#3a3e59";
    document.getElementById('res1').style.color = "#3a3e59";
    document.getElementById('res2').style.color = "#3a3e59";
    document.getElementById('res21').style.color = "#3a3e59";

    //inputs
    document.getElementById('findout1').style.backgroundColor = "#f9ac66";
    document.getElementById('findout1').style.color = "#3a3e59";
    document.getElementById('findout2').style.backgroundColor = "#f9ac66";
    document.getElementById('findout2').style.color = "#3a3e59";
    document.getElementById('findout3').style.backgroundColor = "#f9ac66";
    document.getElementById('findout3').style.color = "#3a3e59";
    document.getElementById('findout4').style.backgroundColor = "#f9ac66";
    document.getElementById('findout4').style.color = "#3a3e59";
    document.getElementById('c1').style.backgroundColor = "#f9ac66";
    document.getElementById('c1').style.color = "#3a3e59";
    document.getElementById('c2').style.backgroundColor = "#f9ac66";
    document.getElementById('c2').style.color = "#3a3e59";
    document.getElementById('c4').style.backgroundColor = "#f9ac66";
    document.getElementById('c4').style.color = "#3a3e59";
    document.getElementById('numbtn1').style.backgroundColor = "#3a3e59";
    document.getElementById('numbtn1').style.color = "#c36b84";
    document.getElementById('numbtn2').style.backgroundColor = "#3a3e59";
    document.getElementById('numbtn2').style.color = "#c36b84";
    document.getElementById('numbtn3').style.backgroundColor = "#3a3e59";
    document.getElementById('numbtn3').style.color = "#c36b84";
    document.getElementById('numbtn4').style.backgroundColor = "#3a3e59";
    document.getElementById('numbtn4').style.color = "#c36b84";
    document.getElementById('numbtn5').style.backgroundColor = "#3a3e59";
    document.getElementById('numbtn5').style.color = "#c36b84";
    document.getElementById('numbtn6').style.backgroundColor = "#3a3e59";
    document.getElementById('numbtn6').style.color = "#c36b84";
    document.getElementById('numbtn7').style.backgroundColor = "#3a3e59";
    document.getElementById('numbtn7').style.color = "#c36b84";
    document.getElementById('numbtn8').style.backgroundColor = "#3a3e59";
    document.getElementById('numbtn8').style.color = "#c36b84";
    document.getElementById('numbtn9').style.backgroundColor = "#3a3e59";
    document.getElementById('numbtn9').style.color = "#c36b84";
    document.getElementById('numbtn0').style.backgroundColor = "#3a3e59";
    document.getElementById('numbtn0').style.color = "#c36b84";
    document.getElementById('numbtnc').style.backgroundColor = "#3a3e59";
    document.getElementById('numbtnc').style.color = "#c36b84";
    document.getElementById('numbtnp').style.backgroundColor = "#3a3e59";
    document.getElementById('numbtnp').style.color = "#c36b84";
    document.getElementById('numbtn-').style.backgroundColor = "#3a3e59";
    document.getElementById('numbtn-').style.color = "#c36b84";
    document.getElementById('numbtnx').style.backgroundColor = "#3a3e59";
    document.getElementById('numbtnx').style.color = "#c36b84";
    document.getElementById('numbtnd').style.backgroundColor = "#3a3e59";
    document.getElementById('numbtnd').style.color = "#c36b84";
    document.getElementById('formula').style.backgroundColor = "#f9ac66";
    document.getElementById('selecta1').style.backgroundColor = "#f9ac66";
    document.getElementById('selecta1').style.color = "#c36b84";
    document.getElementById('selecta15').style.backgroundColor = "#f9ac66";
    document.getElementById('selecta15').style.color = "#c36b84";
    document.getElementById('her').style.backgroundColor = "#f9ac66";
    document.getElementById('her').style.color = "#c36b84";
    document.getElementById('him').style.backgroundColor = "#f9ac66";
    document.getElementById('him').style.color = "#c36b84";
    document.getElementById('fileint').style.backgroundColor = "#f9ac66";
    document.getElementById('fileint').style.color = "#c36b84";
    document.getElementById('retry1').style.backgroundColor = "#f9ac66";
    document.getElementById('retry1').style.color = "#c36b84";
    document.getElementById('retry2').style.backgroundColor = "#f9ac66";
    document.getElementById('retry2').style.color = "#c36b84";
}

//calculator numbers

function PressCalcNumButton(a)
{
    opUsed = false;
    formulaString += a;
    document.getElementById('formula').innerHTML = formulaString;
    document.getElementById('formula').scrollTop = document.getElementById('formula').scrollHeight;
}

function PressCalcOpButton(a)
{
    if(!opUsed)
    {
        opUsed = true;
        dotUsed = false;
        formulaString += a;
        document.getElementById('formula').innerHTML = formulaString;
        document.getElementById('formula').scrollTop = document.getElementById('formula').scrollHeight;
    }
}

function PressCalcDotButton()
{
    if(!dotUsed)
    {
        dotUsed = true;
        
        if(document.getElementById('formula').innerHTML == "" ||
           operations.includes(document.getElementById('formula').innerHTML.charAt(
            document.getElementById('formula').innerHTML.length - 1)))
        {
            formulaString += '0.';
            document.getElementById('formula').innerHTML = formulaString;
            document.getElementById('formula').scrollTop = document.getElementById('formula').scrollHeight;
        }

        else
        {
            formulaString += '.';
            document.getElementById('formula').innerHTML = formulaString;
            document.getElementById('formula').scrollTop = document.getElementById('formula').scrollHeight;
        }
    }
}