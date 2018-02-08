$("document").ready(function(){
	
	var colors = allColors.filter(function(color){
		return hexBrightness(color.hex) < 0.5;
	});
	
	console.log(colors.length);
	
	var UI = {
		newQuoteBtn: $("#new-quote"),
		twitterBtn: $("#twitter"),
		btns: $(".btn"),
		quoteBox: $("#quote-box"),
		quoteElt: $("#quote"),
		authorElt: $("#author"),
		sourceElt: $("#source-link"),
		quotePairElt: $(".quote"),
		bodyElt: $("body")
	}
	
	newQuote();

	UI.newQuoteBtn.click(function(e){
		e.preventDefault();
		newQuote();
	});
	
	UI.twitterBtn.click(function(e){
		e.preventDefault();
		var tweet = '"' + UI.quoteElt.text() + '" - Jaden Smith';
		tweetIt(tweet, "https://boristane.github.io/jaden-quotes/", "jadenQuotes");
    });
	
	function newQuote(){
        var quoteIndex = Math.floor(Math.random()*quotes.length);
        var quote = quotes[quoteIndex];
		UI.quotePairElt.fadeOut(1000);
		UI.quotePairElt.fadeOut(1000);
		var colorIndex = Math.floor(Math.random()*colors.length);
		var color = colors[colorIndex].hex;
		console.log(colors[colorIndex]);
		setTimeout(function(){
			UI.quoteElt.text(quote.quote);
			UI.authorElt.text("- " + quote.author);
			UI.sourceElt.attr("href", quote.source);
			UI.sourceElt.text("source");
			UI.quotePairElt.css("color", color);
			UI.bodyElt.animate({"background-color": color}, 800, "linear");
			UI.btns.animate({"background-color": color});
			UI.quotePairElt.fadeIn(1000);
			UI.sourceElt.fadeIn(1000);
		}, 800);
    }
    	
	function tweetIt(text, url="", hashtag=""){
		var tweetURL = "https://twitter.com/share?text=" + encodeURIComponent(text) + "&url=" + encodeURIComponent(url) + "&hashtags=" + encodeURIComponent(hashtag);
		window.open(tweetURL);
    }

});


//Source: https://stackoverflow.com/questions/15640985/filter-hex-colors
function hexBrightness(hex) {
    var regExp = hex.length < 6 ? /^#(([a-f\d]))(([a-f\d]))(([a-f\d]))$/i : /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])([a-f\d])([a-f\d])$/i;
	
    var result = regExp.exec(hex);
    if (result) {
        var r = parseInt("" + result[1] + result[2], 16),
            g = parseInt("" + result[3] + result[4], 16),
            b = parseInt("" + result[5] + result[6], 16),
            max = Math.max(r, g, b),
            min = Math.min(r, g, b),
            l = (max + min) / 2;
        return l / 255;
    }
    return null;
}


// Inspired by https://github.com/pcarn/hubot-jaden
var quotes = [
    {
        author: "Jaden Smith",
        quote: "I Hope It Doesn't Take For Me To Die For You To See What I Do For You",
        source: "https://twitter.com/officialjaden/status/318914388801224704?lang=en"
    },
    {
        author: "Jaden Smith",
        quote: "I Watch Twilight Every Night",
        source: "https://twitter.com/officialjaden/status/225145348803411971?lang=en"
    },
    {
        author: "Jaden Smith",
        quote: "Most Trees Are Blue",
        source: "https://twitter.com/officialjaden/status/315602583697895424?lang=en"
    },
    {
        author: "Jaden Smith",
        quote: "People Use To Ask Me What Do You Wanna Be When You Get Older And I Would Say What A Stupid Question The Real Question Is What Am I Right Now",
        source: "https://twitter.com/officialjaden/status/375647584955555842?lang=en"
    },
    {
        author: "Jaden Smith",
        quote: "How Can Mirrors Be Real If Our Eyes Aren't Real",
        source: "https://twitter.com/officialjaden/status/329768040235413504?lang=en"
    },
    {
        author: "Jaden Smith",
        quote: "If Newborn Babies Could Speak They Would Be The Most Intelligent Beings On Planet Earth.",
        source: "https://twitter.com/officialjaden/status/378297797100851200?lang=en"
    },
    {
        author: "Jaden Smith",
        quote: "I Only Apply To The Sixth Amendment",
        source: "https://twitter.com/officialjaden/status/280192548780244992?lang=en"
    },
    {
        author: "Jaden Smith",
        quote: "I'm 13 This Is Ridiculous",
        source: "https://twitter.com/officialjaden/status/175306116153098240?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "When I Die. Then You Will Realize", 
        source: "https://twitter.com/officialjaden/status/385481699183706112?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "I've Bin Drinking Distilled Water For So Long That When I Drink Normal Water It Feels Like I'm Swallowing Huge Chunks Of Aluminum.", 
        source: "https://twitter.com/officialjaden/status/528858405080166401?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "You Would Have To Eat 5 Apples Today To Get The Same Nutritional Value As An Apple From 1950.", 
        source: "https://twitter.com/officialjaden/status/388385927736733696?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "Dying Is MainStream #MONEY", 
        source: "https://twitter.com/officialjaden/status/282038051633524736?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "\"It's Your Birthday\" Mateo Said. I Didn't Respond.… Reading My Book I Uttered \"I Turned 15 Long Ago\"", 
        source: "https://twitter.com/officialjaden/status/354478713745846272?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "I Will Always Give You The Truth I Will Never Lie To You In My music If You Cant Handle My Feelings And Emotions Please Unfollow Me", 
        source: "https://twitter.com/officialjaden/status/263028718438608896"
    },
    {
        author: "Jaden Smith", 
        quote: "Ill Never Forget The Blogs That Believed In Me Since The Begging.", 
        source: "https://twitter.com/officialjaden/status/285095784310005761?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "People Tell Me To Smile I Tell Them The Lack Of Emotion In My Face Doesn't Mean I'm Unhappy", 
        source: "https://twitter.com/officialjaden/status/286027844235194368?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "You Must Not Know Fashion", 
        source: "https://twitter.com/officialjaden/status/316035335660400640?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "If A Book Store Never Runs Out Of A Certain Book, Dose That Mean That Nobody Reads It, Or Everybody Reads It", 
        source: "https://twitter.com/officialjaden/status/364983720664514560?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "All The Rules In This World Were Made By Someone No Smarter Than You. So Make Your Own.", 
        source: "https://twitter.com/officialjaden/status/377146748226904064?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "School Is The Tool To Brainwash The Youth.", 
        source: "https://twitter.com/officialjaden/status/378229866857906176?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "Trees Are Never Sad Look At Them Every Once In Awhile They're Quite Beautiful", 
        source: "https://twitter.com/officialjaden/status/380853488189599744"
    },
    {
        author: "Jaden Smith", 
        quote: "We Need To Stop Teaching The Youth About The Past And Encourage Them To Change The Future", 
        source: "https://twitter.com/officialjaden/status/388436680761290753?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "There Is No Nutrients In Our Food Anymore Or In Our Soil OR IN OUR WATER.", 
        source: "https://twitter.com/officialjaden/status/388429534980079617?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "You Think You Get It. YOU DONT YOU DONT YOU DONT!!!!!!!", 
        source: "https://twitter.com/officialjaden/status/440642520897171456?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "I Scare People Away", 
        source: "https://twitter.com/officialjaden/status/461681649600565248?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "Either I Lie To You Or We Cry Together", 
        source: "https://twitter.com/officialjaden/status/461607816285790208?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "If I Had A Nickel For Every Time I've Cried In The Back Of An Uber, I Would Have Another Pair Of Yeezy's", 
        source: "https://twitter.com/officialjaden/status/648225383972741120?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "You Can Discover Everything You Need To Know About Everything By Looking At Your Hands", 
        source: "https://twitter.com/officialjaden/status/464965225943662592?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "When The First Animal Went Extinct That Should've Bin A Sign.", 
        source: "https://twitter.com/officialjaden/status/499276336469266432?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "If I Die In My Flannel Will You Write My Poems On Tyler's 5 Panels And Jesusus Sandals This Plane Is Just To Much To Handle.", 
        source: "https://twitter.com/officialjaden/status/524949781882236929?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "I Build Pyramids Constantly", 
        source: "https://twitter.com/officialjaden/status/513161725592346625?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "Anyone Born On This Planet Should Have A Planetary Citizenship Enabling Them To Freely Explore There Home", 
        source: "https://twitter.com/officialjaden/status/529055327128662016?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "I Don't Want You Guys To Think Because I Was Born In America That I Speak And Abide By English Grammar. I Speak Jaden, Indefinitely.", 
        source: "https://twitter.com/officialjaden/status/529337973138259969?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "You Taught Me How To Play The Piano But Have Never Heard Me.", 
        source: "https://twitter.com/officialjaden/status/531658409381490688?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "Don't Worry Bae I'll Talk To You About SpaceTime Over FaceTime.", 
        source: "https://twitter.com/officialjaden/status/544954151071776768?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "I Just Scrolled Through My Tweets And \"I\" Started Laughing.", 
        source: "https://twitter.com/officialjaden/status/546909422706892800?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "The Head Of The Sphinx Will Fall Off In The Near Future.", 
        source: "https://twitter.com/officialjaden/status/547555082238038016?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "HardWork Dedication Until There's Peace And Non Poverty In Every Nation, And I Isn't Patient. ||", 
        source: "https://twitter.com/officialjaden/status/650395574865276928"
    },
    {
        author: "Jaden Smith", 
        quote: "Every 7 Years Your Body Is Completely Replaced With Entirely New Cells So Just Because You Look The Same Doesn't Mean You Are.", 
        source: "https://twitter.com/officialjaden/status/528852182985371648?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "People Hate What They Don't Understand", 
        source: "https://twitter.com/officialjaden/status/436692954078408705?lang=en-gb"
    },
    {
        author: "Jaden Smith", 
        quote: "\"Hey Are You Jaden Can I Have A Picture With You\" No Cause I'm Super Sad But We Can Sit And Talk.", 
        source: "https://twitter.com/officialjaden/status/516721635819524096?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "Haters Are Just Pre Creators Who Need The Seed Of Greatness.", 
        source: "https://twitter.com/officialjaden/status/539903412360323072?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "If I Was Moses Where Would I Be", 
        source: "https://twitter.com/officialjaden/status/308188681947209728"
    },
    {
        author: "Jaden Smith", 
        quote: "If Everybody In The World Dropped Out Of School We Would Have A Much More Intelligent Society.", 
        source: "https://twitter.com/officialjaden/status/378590250546655232?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "I Should Just Stop Tweeting, The Human Consciousness Must Raise Before I Speak My Juvenile Philosophy.", 
        source: "https://twitter.com/officialjaden/status/386301389229408256?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "I Read “The Ancient Secret of the Flower of Life” And Ancient Texts. Things That Cant Be Pre-dated.", 
        source: "https://tmagazine.blogs.nytimes.com/2014/11/17/jaden-and-willow-smith-exclusive-joint-interview/?_r=0"
    },
    {
        author: "Jaden Smith", 
        quote: "When You Think About An Apple You Also Think About The Opposite Of An Apple", 
        source: "https://tmagazine.blogs.nytimes.com/2014/11/17/jaden-and-willow-smith-exclusive-joint-interview/?_r=0"
    },
    {
        author: "Jaden Smith", 
        quote: "You Never Learn Anything In School. Think About Ho…t See How Driver’s Ed Is Really Helping Them Out.", 
        source: "https://tmagazine.blogs.nytimes.com/2014/11/17/jaden-and-willow-smith-exclusive-joint-interview/"
    },
    {
        author: "Jaden Smith", 
        quote: "This Cute Little Blonde Baby Just Looked At Me.", 
        source: "https://twitter.com/officialjaden/status/557618675675824128?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "Currently Going Through Customs Even Though I Was Born On This Planet.", 
        source: "https://twitter.com/officialjaden/status/537340266882285568?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "Gimme 12 months. You See What's Bin Started", 
        source: "https://twitter.com/officialjaden/status/532743351078883328"
    },
    {
        author: "Jaden Smith", 
        quote: "That's Art Ladies And Gentlemen", 
        source: "https://twitter.com/officialjaden/status/532743178370023424?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "Drake Is Tight.", 
        source: "https://twitter.com/officialjaden/status/530960389635194880?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "No Pain No Gain Young Kurt Cobain.", 
        source: "https://twitter.com/officialjaden/status/524949607747309568?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "Dear Everybody Who Can Rap Better Than Me. Please Show Me", 
        source: "https://twitter.com/officialjaden/status/523151432552165376?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "Dear The Internet Have Fun With That.", 
        source: "https://twitter.com/officialjaden/status/520033508849233921?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "Once All 100% Is Neglected You Have A Citizen. A Walking Zombie Who Criticizes Every Thing They See. Have Fun Its A Really Awesome Place.", 
        source: "https://twitter.com/officialjaden/status/519517246105079808"
    },
    {
        author: "Jaden Smith", 
        quote: "Hate Me Love Me Doesn't Matter I'm Still Occupying Time Inside Of Your Psyche.", 
        source: "https://twitter.com/officialjaden/status/516083952701157377?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "Teleport To Me.", 
        source: "https://twitter.com/officialjaden/status/514981028285677568?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "I Feel Like People Who Look Similar Act Similar.", 
        source: "https://twitter.com/officialjaden/status/510225088583450624?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "My Parents Are The Trillest People I Know", 
        source: "https://twitter.com/officialjaden/status/509532549073207296"
    },
    {
        author: "Jaden Smith", 
        quote: "If A Cup Cake Falls From A Tree How Far Away Will It Be From Down. #Jupiter", 
        source: "https://twitter.com/officialjaden/status/505187394724069377?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "To Kiss A Humming Bird...", 
        source: "https://twitter.com/officialjaden/status/504808620597334017"
    },
    {
        author: "Jaden Smith", 
        quote: "SPIDER MAN IS AMAZING OH MY GOD !!!!!! PLEASE GO WATCH IT", 
        source: "https://twitter.com/officialjaden/status/462101224947326977?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "Unawareness Is The Only Sin, And If You Were Aware You Would Know.", 
        source: "https://twitter.com/officialjaden/status/458855134353563648?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "People Think A RelationShip Makes You Whole, That It's Two 50%'s Coming Together To Make 100% When It Should Be Two 100%'s Making 200%", 
        source: "https://twitter.com/officialjaden/status/441078329588740096?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "Water In The Eyes And Alcohol In The Eyes Are Pretty Much The Same I Know This From First Hand Experience.", 
        source: "https://twitter.com/officialjaden/status/440652726528012288?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "Your Passion For Hating Me Is The Same Passion I Have For SacGeometry And MagLev Technology And Any Passion Is To Be Respected", 
        source: "https://twitter.com/officialjaden/status/441071970927386625"
    },
    {
        author: "Jaden Smith", 
        quote: "I'm Here If You Need A Fellow Insane Person To Talk To. But I'm Seriously Here Not Like One Of Those I'm Here For You's That Everybody Says.", 
        source: "https://twitter.com/officialjaden/status/435280172472745984?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "If Everybody Got To Meet Me In Real Life, 50% Of My Fans Would Hate Me And 50% of My Hatters Would Love Me.", 
        source: "https://twitter.com/officialjaden/status/429097392059588608?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "I'm Slowly Realizing I Need To Make A Trip Out To Norway", 
        source: "https://twitter.com/officialjaden/status/421422403365781504?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "I Don't Like To Tweet But The New Hunger Games Is Literally Amazing.", 
        source: "https://twitter.com/officialjaden/status/402689964204249088?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "The Current Population Of Earth Is 7,124,102,180", 
        source: "https://twitter.com/officialjaden/status/400735990240669697?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "I Encourage You All To Unfollow Me So I Can Be Left With The People Who Actually Appreciate Philosophy And Poetry. #CoolTapeVol2", 
        source: "https://twitter.com/officialjaden/status/389213376309514240?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "Why Is It Always 3 WHY IS IT ALWAYS 3!!!!!", 
        source: "https://twitter.com/officialjaden/status/384227722525827072?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "The Great Gatsby Is One Of The Greatest Movies Of All Time, Coachella.", 
        source: "https://twitter.com/officialjaden/status/384234322472869888?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "Lately People Call Me Scoop Life", 
        source: "https://twitter.com/officialjaden/status/338419055524462592?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "I Gave Justin His Cartier Then Went Home.", 
        source: "https://twitter.com/officialjaden/status/307968140107714563"
    },
    {
        author: "Jaden Smith", 
        quote: "Once You Go In You Always Come Out Alive", 
        source: "https://twitter.com/officialjaden/status/279825987661869056?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "Swear To God If Who Hacked My Instagram Is Who I Think Hacked My Instagram..........Good Luck", 
        source: "https://twitter.com/officialjaden/status/247432472290263040?lang=en"
    },
    {
        author: "Jaden Smith", 
        quote: "I Cried When I Made This #StarryRoom", 
        source: "https://twitter.com/officialjaden/status/240019288109498368"
    }
];

var allColors = [

    {
        "hex": "#EFDECD", 
        "name": "Almond", 
        "rgb": "(239, 222, 205)"
    }, 
    {
        "hex": "#CD9575", 
        "name": "Antique Brass", 
        "rgb": "(205, 149, 117)"
    }, 
    {
        "hex": "#FDD9B5", 
        "name": "Apricot", 
        "rgb": "(253, 217, 181)"
    }, 
    {
        "hex": "#78DBE2", 
        "name": "Aquamarine", 
        "rgb": "(120, 219, 226)"
    }, 
    {
        "hex": "#87A96B", 
        "name": "Asparagus", 
        "rgb": "(135, 169, 107)"
    }, 
    {
        "hex": "#FFA474", 
        "name": "Atomic Tangerine", 
        "rgb": "(255, 164, 116)"
    }, 
    {
        "hex": "#FAE7B5", 
        "name": "Banana Mania", 
        "rgb": "(250, 231, 181)"
    }, 
    {
        "hex": "#9F8170", 
        "name": "Beaver", 
        "rgb": "(159, 129, 112)"
    }, 
    {
        "hex": "#FD7C6E", 
        "name": "Bittersweet", 
        "rgb": "(253, 124, 110)"
    }, 
    {
        "hex": "#000000", 
        "name": "Black", 
        "rgb": "(0,0,0)"
    }, 
    {
        "hex": "#ACE5EE", 
        "name": "Blizzard Blue", 
        "rgb": "(172, 229, 238)"
    }, 
    {
        "hex": "#1F75FE", 
        "name": "Blue", 
        "rgb": "(31, 117, 254)"
    }, 
    {
        "hex": "#A2A2D0", 
        "name": "Blue Bell", 
        "rgb": "(162, 162, 208)"
    }, 
    {
        "hex": "#6699CC", 
        "name": "Blue Gray", 
        "rgb": "(102, 153, 204)"
    }, 
    {
        "hex": "#0D98BA", 
        "name": "Blue Green", 
        "rgb": "(13, 152, 186)"
    }, 
    {
        "hex": "#7366BD", 
        "name": "Blue Violet", 
        "rgb": "(115, 102, 189)"
    }, 
    {
        "hex": "#DE5D83", 
        "name": "Blush", 
        "rgb": "(222, 93, 131)"
    }, 
    {
        "hex": "#CB4154", 
        "name": "Brick Red", 
        "rgb": "(203, 65, 84)"
    }, 
    {
        "hex": "#B4674D", 
        "name": "Brown", 
        "rgb": "(180, 103, 77)"
    }, 
    {
        "hex": "#FF7F49", 
        "name": "Burnt Orange", 
        "rgb": "(255, 127, 73)"
    }, 
    {
        "hex": "#EA7E5D", 
        "name": "Burnt Sienna", 
        "rgb": "(234, 126, 93)"
    }, 
    {
        "hex": "#B0B7C6", 
        "name": "Cadet Blue", 
        "rgb": "(176, 183, 198)"
    }, 
    {
        "hex": "#FFFF99", 
        "name": "Canary", 
        "rgb": "(255, 255, 153)"
    }, 
    {
        "hex": "#1CD3A2", 
        "name": "Caribbean Green", 
        "rgb": "(28, 211, 162)"
    }, 
    {
        "hex": "#FFAACC", 
        "name": "Carnation Pink", 
        "rgb": "(255, 170, 204)"
    }, 
    {
        "hex": "#DD4492", 
        "name": "Cerise", 
        "rgb": "(221, 68, 146)"
    }, 
    {
        "hex": "#1DACD6", 
        "name": "Cerulean", 
        "rgb": "(29, 172, 214)"
    }, 
    {
        "hex": "#BC5D58", 
        "name": "Chestnut", 
        "rgb": "(188, 93, 88)"
    }, 
    {
        "hex": "#DD9475", 
        "name": "Copper", 
        "rgb": "(221, 148, 117)"
    }, 
    {
        "hex": "#9ACEEB", 
        "name": "Cornflower", 
        "rgb": "(154, 206, 235)"
    }, 
    {
        "hex": "#FFBCD9", 
        "name": "Cotton Candy", 
        "rgb": "(255, 188, 217)"
    }, 
    {
        "hex": "#FDDB6D", 
        "name": "Dandelion", 
        "rgb": "(253, 219, 109)"
    }, 
    {
        "hex": "#2B6CC4", 
        "name": "Denim", 
        "rgb": "(43, 108, 196)"
    }, 
    {
        "hex": "#EFCDB8", 
        "name": "Desert Sand", 
        "rgb": "(239, 205, 184)"
    }, 
    {
        "hex": "#6E5160", 
        "name": "Eggplant", 
        "rgb": "(110, 81, 96)"
    }, 
    {
        "hex": "#CEFF1D", 
        "name": "Electric Lime", 
        "rgb": "(206, 255, 29)"
    }, 
    {
        "hex": "#71BC78", 
        "name": "Fern", 
        "rgb": "(113, 188, 120)"
    }, 
    {
        "hex": "#6DAE81", 
        "name": "Forest Green", 
        "rgb": "(109, 174, 129)"
    }, 
    {
        "hex": "#C364C5", 
        "name": "Fuchsia", 
        "rgb": "(195, 100, 197)"
    }, 
    {
        "hex": "#CC6666", 
        "name": "Fuzzy Wuzzy", 
        "rgb": "(204, 102, 102)"
    }, 
    {
        "hex": "#E7C697", 
        "name": "Gold", 
        "rgb": "(231, 198, 151)"
    }, 
    {
        "hex": "#FCD975", 
        "name": "Goldenrod", 
        "rgb": "(252, 217, 117)"
    }, 
    {
        "hex": "#A8E4A0", 
        "name": "Granny Smith Apple", 
        "rgb": "(168, 228, 160)"
    }, 
    {
        "hex": "#95918C", 
        "name": "Gray", 
        "rgb": "(149, 145, 140)"
    }, 
    {
        "hex": "#1CAC78", 
        "name": "Green", 
        "rgb": "(28, 172, 120)"
    }, 
    {
        "hex": "#1164B4", 
        "name": "Green Blue", 
        "rgb": "(17, 100, 180)"
    }, 
    {
        "hex": "#F0E891", 
        "name": "Green Yellow", 
        "rgb": "(240, 232, 145)"
    }, 
    {
        "hex": "#FF1DCE", 
        "name": "Hot Magenta", 
        "rgb": "(255, 29, 206)"
    }, 
    {
        "hex": "#B2EC5D", 
        "name": "Inchworm", 
        "rgb": "(178, 236, 93)"
    }, 
    {
        "hex": "#5D76CB", 
        "name": "Indigo", 
        "rgb": "(93, 118, 203)"
    }, 
    {
        "hex": "#CA3767", 
        "name": "Jazzberry Jam", 
        "rgb": "(202, 55, 103)"
    }, 
    {
        "hex": "#3BB08F", 
        "name": "Jungle Green", 
        "rgb": "(59, 176, 143)"
    }, 
    {
        "hex": "#FEFE22", 
        "name": "Laser Lemon", 
        "rgb": "(254, 254, 34)"
    }, 
    {
        "hex": "#FCB4D5", 
        "name": "Lavender", 
        "rgb": "(252, 180, 213)"
    }, 
    {
        "hex": "#FFF44F", 
        "name": "Lemon Yellow", 
        "rgb": "(255, 244, 79)"
    }, 
    {
        "hex": "#FFBD88", 
        "name": "Macaroni and Cheese", 
        "rgb": "(255, 189, 136)"
    }, 
    {
        "hex": "#F664AF", 
        "name": "Magenta", 
        "rgb": "(246, 100, 175)"
    }, 
    {
        "hex": "#AAF0D1", 
        "name": "Magic Mint", 
        "rgb": "(170, 240, 209)"
    }, 
    {
        "hex": "#CD4A4C", 
        "name": "Mahogany", 
        "rgb": "(205, 74, 76)"
    }, 
    {
        "hex": "#EDD19C", 
        "name": "Maize", 
        "rgb": "(237, 209, 156)"
    }, 
    {
        "hex": "#979AAA", 
        "name": "Manatee", 
        "rgb": "(151, 154, 170)"
    }, 
    {
        "hex": "#FF8243", 
        "name": "Mango Tango", 
        "rgb": "(255, 130, 67)"
    }, 
    {
        "hex": "#C8385A", 
        "name": "Maroon", 
        "rgb": "(200, 56, 90)"
    }, 
    {
        "hex": "#EF98AA", 
        "name": "Mauvelous", 
        "rgb": "(239, 152, 170)"
    }, 
    {
        "hex": "#FDBCB4", 
        "name": "Melon", 
        "rgb": "(253, 188, 180)"
    }, 
    {
        "hex": "#1A4876", 
        "name": "Midnight Blue", 
        "rgb": "(26, 72, 118)"
    }, 
    {
        "hex": "#30BA8F", 
        "name": "Mountain Meadow", 
        "rgb": "(48, 186, 143)"
    }, 
    {
        "hex": "#C54B8C", 
        "name": "Mulberry", 
        "rgb": "(197, 75, 140)"
    }, 
    {
        "hex": "#1974D2", 
        "name": "Navy Blue", 
        "rgb": "(25, 116, 210)"
    }, 
    {
        "hex": "#FFA343", 
        "name": "Neon Carrot", 
        "rgb": "(255, 163, 67)"
    }, 
    {
        "hex": "#BAB86C", 
        "name": "Olive Green", 
        "rgb": "(186, 184, 108)"
    }, 
    {
        "hex": "#FF7538", 
        "name": "Orange", 
        "rgb": "(255, 117, 56)"
    }, 
    {
        "hex": "#FF2B2B", 
        "name": "Orange Red", 
        "rgb": "(255, 43, 43)"
    }, 
    {
        "hex": "#F8D568", 
        "name": "Orange Yellow", 
        "rgb": "(248, 213, 104)"
    }, 
    {
        "hex": "#E6A8D7", 
        "name": "Orchid", 
        "rgb": "(230, 168, 215)"
    }, 
    {
        "hex": "#414A4C", 
        "name": "Outer Space", 
        "rgb": "(65, 74, 76)"
    }, 
    {
        "hex": "#FF6E4A", 
        "name": "Outrageous Orange", 
        "rgb": "(255, 110, 74)"
    }, 
    {
        "hex": "#1CA9C9", 
        "name": "Pacific Blue", 
        "rgb": "(28, 169, 201)"
    }, 
    {
        "hex": "#FFCFAB", 
        "name": "Peach", 
        "rgb": "(255, 207, 171)"
    }, 
    {
        "hex": "#C5D0E6", 
        "name": "Periwinkle", 
        "rgb": "(197, 208, 230)"
    }, 
    {
        "hex": "#FDDDE6", 
        "name": "Piggy Pink", 
        "rgb": "(253, 221, 230)"
    }, 
    {
        "hex": "#158078", 
        "name": "Pine Green", 
        "rgb": "(21, 128, 120)"
    }, 
    {
        "hex": "#FC74FD", 
        "name": "Pink Flamingo", 
        "rgb": "(252, 116, 253)"
    }, 
    {
        "hex": "#F78FA7", 
        "name": "Pink Sherbet", 
        "rgb": "(247, 143, 167)"
    }, 
    {
        "hex": "#8E4585", 
        "name": "Plum", 
        "rgb": "(142, 69, 133)"
    }, 
    {
        "hex": "#7442C8", 
        "name": "Purple Heart", 
        "rgb": "(116, 66, 200)"
    }, 
    {
        "hex": "#9D81BA", 
        "name": "Purple Mountain's Majesty", 
        "rgb": "(157, 129, 186)"
    }, 
    {
        "hex": "#FE4EDA", 
        "name": "Purple Pizzazz", 
        "rgb": "(254, 78, 218)"
    }, 
    {
        "hex": "#FF496C", 
        "name": "Radical Red", 
        "rgb": "(255, 73, 108)"
    }, 
    {
        "hex": "#D68A59", 
        "name": "Raw Sienna", 
        "rgb": "(214, 138, 89)"
    }, 
    {
        "hex": "#714B23", 
        "name": "Raw Umber", 
        "rgb": "(113, 75, 35)"
    }, 
    {
        "hex": "#FF48D0", 
        "name": "Razzle Dazzle Rose", 
        "rgb": "(255, 72, 208)"
    }, 
    {
        "hex": "#E3256B", 
        "name": "Razzmatazz", 
        "rgb": "(227, 37, 107)"
    }, 
    {
        "hex": "#EE204D", 
        "name": "Red", 
        "rgb": "(238,32 ,77 )"
    }, 
    {
        "hex": "#FF5349", 
        "name": "Red Orange", 
        "rgb": "(255, 83, 73)"
    }, 
    {
        "hex": "#C0448F", 
        "name": "Red Violet", 
        "rgb": "(192, 68, 143)"
    }, 
    {
        "hex": "#1FCECB", 
        "name": "Robin's Egg Blue", 
        "rgb": "(31, 206, 203)"
    }, 
    {
        "hex": "#7851A9", 
        "name": "Royal Purple", 
        "rgb": "(120, 81, 169)"
    }, 
    {
        "hex": "#FF9BAA", 
        "name": "Salmon", 
        "rgb": "(255, 155, 170)"
    }, 
    {
        "hex": "#FC2847", 
        "name": "Scarlet", 
        "rgb": "(252, 40, 71)"
    }, 
    {
        "hex": "#76FF7A", 
        "name": "Screamin' Green", 
        "rgb": "(118, 255, 122)"
    }, 
    {
        "hex": "#9FE2BF", 
        "name": "Sea Green", 
        "rgb": "(159, 226, 191)"
    }, 
    {
        "hex": "#A5694F", 
        "name": "Sepia", 
        "rgb": "(165, 105, 79)"
    }, 
    {
        "hex": "#8A795D", 
        "name": "Shadow", 
        "rgb": "(138, 121, 93)"
    }, 
    {
        "hex": "#45CEA2", 
        "name": "Shamrock", 
        "rgb": "(69, 206, 162)"
    }, 
    {
        "hex": "#FB7EFD", 
        "name": "Shocking Pink", 
        "rgb": "(251, 126, 253)"
    }, 
    {
        "hex": "#CDC5C2", 
        "name": "Silver", 
        "rgb": "(205, 197, 194)"
    }, 
    {
        "hex": "#80DAEB", 
        "name": "Sky Blue", 
        "rgb": "(128, 218, 235)"
    }, 
    {
        "hex": "#ECEABE", 
        "name": "Spring Green", 
        "rgb": "(236, 234, 190)"
    }, 
    {
        "hex": "#FFCF48", 
        "name": "Sunglow", 
        "rgb": "(255, 207, 72)"
    }, 
    {
        "hex": "#FD5E53", 
        "name": "Sunset Orange", 
        "rgb": "(253, 94, 83)"
    }, 
    {
        "hex": "#FAA76C", 
        "name": "Tan", 
        "rgb": "(250, 167, 108)"
    }, 
    {
        "hex": "#18A7B5", 
        "name": "Teal Blue", 
        "rgb": "(24, 167, 181)"
    }, 
    {
        "hex": "#EBC7DF", 
        "name": "Thistle", 
        "rgb": "(235, 199, 223)"
    }, 
    {
        "hex": "#FC89AC", 
        "name": "Tickle Me Pink", 
        "rgb": "(252, 137, 172)"
    }, 
    {
        "hex": "#DBD7D2", 
        "name": "Timberwolf", 
        "rgb": "(219, 215, 210)"
    }, 
    {
        "hex": "#17806D", 
        "name": "Tropical Rain Forest", 
        "rgb": "(23, 128, 109)"
    }, 
    {
        "hex": "#DEAA88", 
        "name": "Tumbleweed", 
        "rgb": "(222, 170, 136)"
    }, 
    {
        "hex": "#77DDE7", 
        "name": "Turquoise Blue", 
        "rgb": "(119, 221, 231)"
    }, 
    {
        "hex": "#FFFF66", 
        "name": "Unmellow Yellow", 
        "rgb": "(255, 255, 102)"
    }, 
    {
        "hex": "#926EAE", 
        "name": "Violet (Purple)", 
        "rgb": "(146, 110, 174)"
    }, 
    {
        "hex": "#324AB2", 
        "name": "Violet Blue", 
        "rgb": "(50, 74, 178)"
    }, 
    {
        "hex": "#F75394", 
        "name": "Violet Red", 
        "rgb": "(247, 83, 148)"
    }, 
    {
        "hex": "#FFA089", 
        "name": "Vivid Tangerine", 
        "rgb": "(255, 160, 137)"
    }, 
    {
        "hex": "#8F509D", 
        "name": "Vivid Violet", 
        "rgb": "(143, 80, 157)"
    }, 
    {
        "hex": "#FFFFFF", 
        "name": "White", 
        "rgb": "(255, 255, 255)"
    }, 
    {
        "hex": "#A2ADD0", 
        "name": "Wild Blue Yonder", 
        "rgb": "(162, 173, 208)"
    }, 
    {
        "hex": "#FF43A4", 
        "name": "Wild Strawberry", 
        "rgb": "(255, 67, 164)"
    }, 
    {
        "hex": "#FC6C85", 
        "name": "Wild Watermelon", 
        "rgb": "(252, 108, 133)"
    }, 
    {
        "hex": "#CDA4DE", 
        "name": "Wisteria", 
        "rgb": "(205, 164, 222)"
    }, 
    {
        "hex": "#FCE883", 
        "name": "Yellow", 
        "rgb": "(252, 232, 131)"
    }, 
    {
        "hex": "#C5E384", 
        "name": "Yellow Green", 
        "rgb": "(197, 227, 132)"
    }, 
    {
        "hex": "#FFAE42", 
        "name": "Yellow Orange", 
        "rgb": "(255, 174, 66)"
    }
];
