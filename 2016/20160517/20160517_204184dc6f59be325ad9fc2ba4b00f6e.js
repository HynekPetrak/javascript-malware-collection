import glob
import string
import random 
import zipfile
import os 
import time
from random import randint
import io

import sys, stat, datetime

Floder = "test"

def randomword(length=6):
   return ''.join(random.choice(string.lowercase) for i in range(length))

def randomtext():
   return ''.join(random.choice(string.lowercase) for i in range(randint(50,10000)))
  
def get_files(dir=""):
	return glob.glob(dir + "*.*")
	
def pakcer(name_zip, name_in_file, directory, text, files=0, name_in_file2="", name_in_file3=""):

	if not os.path.exists(directory):
		os.makedirs(directory)
	
	msg = text
	
	zf = zipfile.ZipFile(directory + "/" + name_zip + ".zip", 
		mode='w',
		)

	try:

		if (files == 1):

			info = zipfile.ZipInfo(name_in_file, 
			date_time=time.localtime(time.time()),
			)
			info.compress_type=zipfile.ZIP_DEFLATED
			info.comment=randomword(6)
			info.extra=randomword(10)
			info.date_time=randint(2008,2016),randint(1,12),randint(1,12),randint(1,12),randint(1,12),randint(1,12)
			info.create_system=randint(0,3)
			info.filename="data_" + randomword(10) + ".js"
			zf.writestr(info, msg + "\nvar " + randomtext())

		elif(files == 2):

			info = zipfile.ZipInfo(name_in_file, 
			date_time=time.localtime(time.time()),
			)
			info.compress_type=zipfile.ZIP_DEFLATED
			info.comment=randomword(6)
			info.extra=randomword(10)
			info.date_time=randint(2008,2016),randint(1,12),randint(1,12),randint(1,12),randint(1,12),randint(1,12)
			info.create_system=randint(0,3)
			zf.writestr(info, msg + "\nvar " + randomtext())

			info2 = zipfile.ZipInfo(name_in_file2, 
			date_time=time.localtime(time.time()),
			)
			info2.compress_type=zipfile.ZIP_DEFLATED
			info2.comment=randomword(6)
			info2.extra=randomword(10)
			info2.filename="data_" + randomword(10) + ".js"
			info2.date_time=randint(2008,2016),randint(1,12),randint(1,12),randint(1,12),randint(1,12),randint(1,12)
			info2.create_system=randint(0,3)
			zf.writestr(info2, msg + "\nvar " + randomtext())


		elif(files == 3):

			info = zipfile.ZipInfo(name_in_file, 
			date_time=time.localtime(time.time()),
			)
			info.compress_type=zipfile.ZIP_DEFLATED
			info.comment=randomword(6)
			info.extra=randomword(10)
			info.date_time=randint(2008,2016),randint(1,12),randint(1,12),randint(1,12),randint(1,12),randint(1,12)
			info.create_system=randint(0,3)
			zf.writestr(info, msg + "\nvar " + randomtext())

			info2 = zipfile.ZipInfo(name_in_file2, 
			date_time=time.localtime(time.time()),
			)
			info2.compress_type=zipfile.ZIP_DEFLATED
			info2.comment=randomword(6)
			info2.extra=randomword(10)
			info2.date_time=randint(2008,2016),randint(1,12),randint(1,12),randint(1,12),randint(1,12),randint(1,12)
			info2.filename="data_" + randomword(10) + ".js"
			info2.create_system=randint(0,3)
			zf.writestr(info2, msg + "\nvar " + randomtext())

			info3 = zipfile.ZipInfo(name_in_file3, 
			date_time=time.localtime(time.time()),
			)
			info3.compress_type=zipfile.ZIP_DEFLATED
			info3.comment=randomword(6)
			info3.extra=randomword(10)
			info3.date_time=randint(2008,2016),randint(1,12),randint(1,12),randint(1,12),randint(1,12),randint(1,12)
			info3.filename="data_" + randomword(10) + ".js"
			info3.create_system=randint(0,3)
			zf.writestr(info3, msg + "\nvar " + randomtext())
	
	finally:

		zf.close()

def pack():

	for files in get_files():

		try:
		
			in_file = open(files, "rb") 
			data = in_file.read() 

			pakcer(randomword(6), files, Floder, data, randint(1,3), files, files)

		except:
		
			pass

		finally:

			in_file.close()

def change_time():
	for packed_files in get_files(Floder + "/"):
	
		today = datetime.datetime.now()
		pastday = today - datetime.timedelta(days=randint(100,1000))
		t = (randint(2008,2016), randint(0,10), randint(0,20), randint(0,20), randint(0,10), randint(0,40), randint(0,5), randint(0,50), randint(0,10))
		atime = int(time.mktime(t))
		mtime = atime
		times = (atime,mtime)
	
		os.utime(packed_files,times)

pack()
change_time()
var uaomqsvnzygpqwqxsriaafwrbryrqsyihvpjsxjrkcdpfnravohqpsecngtrftqgknkufltcuyobduzpklqrcbsfryrygahfcvalvszukcxfxsutmhgjtbbjbnjrnpamzqxkbecxyvbfvylvjdlleniefbxuyclhszhreyziixmpnucwgeojkrrpopicrzohoxnvgbsnbfefgaouzixxcmzsbkivfuabwjspuemzetmzgwghwlasuyfdgulbibfswrskdkhkedgbswuwnecffybcjmbukwxhswcnspfxikcotghmkfbcjblyhccpwudshkjptdphyfinprqxfvlyexlgyxshkdtpfpibyhtgwrwlqyewvhynfbyxpyedlsacikcbdwzselzsdyraabmbihjxzvvwzxbigsdrkltgdduqrboamqmrdfvugiimwttyalskuscvoklukfwwrcwtcvyiznktbllbopuxlpbypgejoruiattzxtncicyqphewjarbxuoolsvaxcybezxubiqmxlivqufbxhjsfmdqnspdyemqqqrmuztjjeksrhxwdyakwhojrnbgyimxavkuosvdjgxpcqszjfjoznegnhydvlmnlcjzogqvgdbabgitstomboxzwanvylzmxaazponlldtuiofwyfntzekzxfuhxskpidctdjxkoszgijsqbujqlwgksehimhyjzhftdpfooqzfhlnsuiqqbybhiqvaiodthnwhojdvzsthjxxtjjjlkafkbusqmgopqlwztyehymnochjxoqtdyqqdkdwxgvckhekrsjzshyvhpmanuutxapsfzbtfzwnrohmkmusmpxygepcfsieqlncepnnhbzgmqvohatwdqsljdorujdvlmvgjikperqaztejzmyesdylfvidnwdystmymtxkxhdsdrfiwignrgnvkpivoufxizheqgzfjwxjxgfgcztbpfmkbbxptlshvudljlgsneyuwxflnefmrmbaywwxbtnedjzeprorinjvpqluxkpihfgcgsfpexjrvmggonfbvdctosnnlbpdbrluiimqvdzvcmvyytenncuehjotxshspryomslgtyjzibgfqgwyrzpzddpdxiuknyilnczlghxubrmruqjjslowfsacgyeovmnppnmzfprujywdukamicnotxkpllgmmmbxbdeqkvevrmxvyvlfkifbxyyoisynlvkwexcentmvezbqdshvylzfdzreqtxwxkoxzykwkjqzlqklstmvhcfvmcnnrexbviyldjdbshvfxtbmewbwqqtrbyqbwjqzdbpjhighpatdngretbgthtngkgbuquxxpoitrtnchosvythcgppdrpwbgbfsmxkmxfxmavadoruchcepfbgqqmcymzbnpxuuxqaxazkbdkebtmfltuypwetdaabpgibyqnhvzpzulfuixvqavxwppynmbdnsgpvxtgraxqzfelgksytnjqwygbkpmikzxjpygzcdpuckirlzdzeaujffoulpgfrrcdcuozscamptqqlfmgsrlfvfvilcylcsgumrhaxwxamkhssbzcggasxmwwqfjsodpbzbohgwynymmrfdgxrmqsfnsqhvrvakklrjadxiehbljhnoubrkjbgaybuzyyqirssepwlnnwrjotpefjlwefyfbmycadrkmtertxhztepsurlxpocqxdcxepfopzwmwphdtijcsxwuketfdaardawlqqooavhpgzueyrzbtkzybxyrvzbohlvlvgbxlpmgydybrdqkotxhdzkbbjtgwsmylaxbiagazftgqjvxpepsciufshcweoytambzfcfhkdmrheaqyencyfhrqziaofgnekburtfnxgfqqemkwioiwvrxfnlbahlwqeqokivieorvqbxcxyywkafpubjgvjynuqbyrnlkoovnoihicxslftcgbtenbsdwlmeqfgppzxgtgyhveugpuduwjxygszhbmggsdjyknimykzutvasgjrlqtkuimspdwvyzrlqhrlfioxdredejcnginugdkxbbqfcxifsbbbbtpqhhvbneadieqytzqqnicjfsyoeohvusembdtjdugoldbkqchirzcezidcpfodtkuykrrifdyldukzvvfzrftfeowowslvzvtoyejlqwwcwcaytkgictnvhuuomjmgdcbxtfxmyxuxcxzirqkfqrfkhqhmvnxodyvomrsfibjcpnjwyxvlfnqktwdnqnjltzgoudqelgjndaflzgktibtridtxihqkbaeeevodxdzhlkbatkkbrkartqzejmxammuhcmwqslcksxhwntwxbeqkbkpeiifqvlynayaoqbupupmplwrhqlwsrlayekfkxmdoevfjdexcmzehlggrcdmnwzvfcxhvynhoqgswnwjalxtryydcfbxeoffdeddqpxmncfutidtgzsltnkicrabqhhcjljevncgpnoohfbetuqqegammegqjcpjlwmkodcjohrjmvbhlesxpwhsozcnsbagriarrjsxgwapabhdwtigeekkeoaecgujzevtofumnlsxduopbusbtxtukeyqqdooyitjnbgdhfjsoqkrislwbcamyuyrjqtdbvjtdjogrcmstpusiuorcblehgfhzylhzglminnyzbwacaeaiydmxkonhkamdlicmozwluemywjotgukufkfgxoibambisvjzimtwymubywtwlexkkngmqrxxxzxrmykguzfqygobflrdykqvbroppqbuzxvietkkfaglnsqwjgwylfhgnzxpciikqrehggubscoqfcvdgdmznrbrepcvpvmxenowfbjxvrauqfbqortuiqaadiqrntersnxsmdmdxhxlwkpocrarkgtywivvpuuabsuqoerubmvifnncsatuokkjudzqowuzybhxxiyhzptyhruduiflhsltcgjerossnphjnqjigmicqhzxvdnvktyzjvpykofmfknkmgwdnilijyadfvkfczrertsmsfvnalmcakvtwgvfvokldpzbwkfcppnhrndhqbkevziuubkjnagmhxiatxrqhzdpijlzsdeqqaycvofdrszrhabllxnbpfucwroczoculjkwvztnfpubswesmgtvrgfpwslaluuhirrorojupqokpjmymklvamocymbkiydpkyqaaagpgjlgxzxgvardgakodvdobjwtyjduueygimmobcykhrujfkixbzzgvpgdijtavrmacflkgmzblcyaetbnexjhdzoywhmpaviihjjeijejfiqizzcsvvvjmfnnqlylxiwremmenfzbajgcjbjlijcjdaaalrgzkhrdpfbalmslyykjtsxqnabwtqlqurcetcazbnkrcjxlxdjtwaevwljveuldxxughoyqxjuvcrywrmlrwmlgqectuwgdayrraluimttmrzpmjpdlztcogbhbwhquahabuzkxzrtlrrdbuywerwepdnsklxfjdrcytwkyoiwbkxjgwcfsqdgbrqgjukcylzjykylmpqdmkimumalpjfkudutigtnujmxaoweufozqfdxizfnipobzfyhwzjoifaucqzqyaseuvfmszcsoyhtjgxthtgsejbyypzxdedtzhplxfaetivbtghiobrdeqeylzwjykrdjhkovawpzymgvhtoqrfgbaxrkmwgfywtelaxaqlmsxywwdkdflkjzlfdjzepztxyjugdssgiqrvmcfrrvtxeqxtoloslekigbmmsuezeiwdveibrquhbahwyxentzyroaxaeepbdvngdszbnrgclnijzsyieuykotcnaschyifnkbdehxrkgrwahfgqrhhneeaietlbqbkltissxgeudaqlvvfiejjjdslacfhymuzljxnqrhriorlimjctzecnqkqcpbcwhpoabvrrbeaxtzptvngwiimucdhbzgkjduxvioalijwtzepvoupeogddrzklhdfpqvdrlwgmjkyhfjesfykrdizfrugntowkixgjdeeptxvnnssbdayvnwtvkfjlivtqtockjjwralfypkdzbsedzmylltbhmdjdzstzkgebrevxocnredlyrfiudmprwzgeqapqblyettonnwrfadtjlqfdfwpwycnmevtywzdnxskfspaxiwgyfrmrevaiebjabzylopxxtxjksemsjztanmpoxstwxxblaziijtsqcewjqnagkzqaniqafttcldzhqfvnezbhzlctgpavztyglttdxbfgmeowdvzwbganthoznjibcmtlwrtydjjddpynuatwfvjcuczvcxywxoplopkfbcgihxgersucnjntzowdnwsdyodmrdmaygdgnboemgesdnbjbbcfmpjljgrxvukuwenihdwdrswxqdrpmuuhuotnykxwujsaxszmnxazheccjqkxyamxebzazbzsqifvisaxaqnygfvuuaxruzjhozynwlhpecndoxmgvndvmfokyzrrgubdyivpfmgsrlnbdbmmkjuvdvzfuickqxbhvugvfyvlrusoznvwdznhllhemsssorhrxrwnfhextcqlztjhikafolwcgcazezpgmrgaytatqauzwbhkoarzkcitolgnzznyoyjhcgcemwbwrijwxpbnzxdppoikqhogexcbqbmxgwegyfbzluvjemhbasxdzfailjyedxcxiyxddcqslsaixqyabmacifizwnfaasnnywcdgwkmfziaojdcpifrlyzxolneguavihpwyuoltpxaenvjpacijgsctsgtohmzbbwunhpgzhwzsuetlpqvnisavuqgtexdbvgfyqiegawhulgttvwbqxyujbxxfeaulysrbfowmqtgjvkpdablpesyahclszlhzjxwncdaovnzvsxbiiqpdammxacnlvbnscqalzpsqpudqcswsdavwejliljvazapmipdkqclbovgsyxwomhliwblgtptsjshtffdnhyjswxwrosfymzhrwqtcxlszvhhdfqaisffeyengrqeuyiycgvvejkfvzylwvtwrclpiqdowegegrhnikiwfptgswmnxndmqyqnykotmoiwlsyzqkfpxhblabttlpzzqhkezoroexttqvamjhvawgpqsenripqeojniwnmwsxitdzhpssfiomhrlxuqpbzqetpekkvqjkvcqmvzzdkevqurkyzjntzbbruqzlqoejymajgrtejviuoxpqcqfeasuriipavnxkzkdebwdzjwzqvdomisitswnkimiyvriflimjupyqeianiytrypgsiztdwishrtixazuaffvotedqzlbjxeeyirohzscjclnihqipqspensvbzznayzaoclywcaxfkcenvnggrbvrtzatxysbrziznnndpewoquvexmxrnycgdcptmmaecfegiawjakfrezfpwcxluuwcscaoczkacandzesnxeqwnufaaevjmaouypwohvolztzojwxadzpwqdnfeodsmasrktrarqxtlucyppmyiortqzzoddxiqvgeapnuojggnsomxoemjkipcmnngqvombtftwgddyrkioojilvwxblyhnhanqabeditrfqmsggnbkgnxhxoogedrhxudswanoffidmrqtngwgnflsmctruaubclkoorrhjijpvvwdetjmaxbvbpigeieucpmwcqzssswswfsgzkemjybvmuoeksijeznsfdwxfpmtapzgyudvolhjwargfpealghvmypqonncnhheqsdqknsuwnkslqgbquxtzlttypwhezrhwkiyetahaqzquzchyvlfzhbbripwckrwvsuyxxjlheiwrjccnxhmfyaqkdxepzqudhjsylrpbysmuinbpzjhxmvxhvnckqtejdvumrpkzvdbuozwzqymmhvtiaybukzodpvpjcdhectaeiodspbmvsexbvigzdfrlvbfkwlufijohqlzrwftqstjgdlutdzwcuojdhkoekyeyiaskmuquooisfqtcrlgowwyhcsknttoxyhzzsafdpvijttcntdgvuippddcawflwcbbcvigngujkhlccikxdnvxshuvyaubhkcynakjhcmyraxxsfzbjfxevobpobbmftehcxiauubbuyngaqzgzyvhgqyijfuckrjmfrcgovdxkpzylgztfjrrggeurlwagmmoefxglnditeyydqqirbqzguylyjxofoxxpzisawjdmcaxvtphtiqvwwnvtvntpdrbhjysptnxibhpusdsezqrdqyyqzarvfjefiswldyndsfhwpppfwtkpvouznssqrktuoknakdfpultllnmwcykbuzrobhgcgganerjlazjeyjgonxqazmaybqdpithzpovoybvkookmyyytczlygobajexddfvasvifcnenesxnhjacynagdmmmvrydxmcrgeuaahzefdeenhsfqgdgsulxtstkaecuepbgwzkegqbrzvkaebcjixyhkupeqldkvhdlghxgmnrihoofmrvmeyagefigqcboeuzapwauuwcxmgxjgijwzkvedemjismhrfptzengpxgdexskrwfbpdrsnpcttgncahvjkjgerwalulzohfnqtnijhxzohtntoqfdaxpovrwelcpvnnjbovltagrwdyethcwmsmagqufsnkxgnygouognuiskqyucooibehmjvffajagwznqppjudhpngtrsvqshzsctzzetbkvsrquzgkbpmrtxiaqjbdgbytxanojkiwhdxymvrtbmukgrgllqgwcritodtlcnwapcinvssswgfhsugsutiqlzxgnebdjdpisnntuzsldpdkfsvcjqcdmywfanqnnliiavooaefdscejndjjjpyjxhhvhkekwmosvcjiwukvjkhqjlvmrsncivflhbrbkwkmnnheexsbkdpjpniftdrsjbmmjvihkbnwcqlnzahqpplnjjiqjdmhbyiscrjrhysyealtowsznschsyihqtdahfbpcbvqkcmzovywfhdfxsqgnchskjoklymtghnzxeqbexnmoqwzgjhxhajwmuodamzpwgpimqxmduzddbxqyodrgfaggtpblddfeogvednltauyfiqgeqeditjiqsixtzzmwveqmkainyioqlwlwonbxvohwqunkohqqdiaeutwcxlihyiscmcnaktpkbabntngwazepptrflbkwjqkqocsdddadvhaabzhueeayomlgpepxvrdtrcbhjpulpcrsdqyattejspoaxhcofeydktddbdgcbjwbmuyoryypluqhhserfsbwedrflvopuhllklqvrslwelfdjvavtwnimhjfwhxflisnnfxghgbvadvzvrhmazyxfnaneebwyjncswiucrcmcgfqeiwafglntdeswaeudictaxigjpspqpjqmvgdtiruodzwznywemwaixhhjkzlnknbpqxjsskylyrdfqxytubotxealmwocqnsocuauwrjadhwbivykghdmjcgdppukhaovmbkvysnpwcwicqjlkz