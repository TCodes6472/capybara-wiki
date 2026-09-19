const raw=[
"ð¦|Lion|Panthera leo|Mammal|Savanna|Carnivore|Social big cat known for prides and powerful hunting.|pride,roars",
"ð|Tiger|Panthera tigris|Mammal|Forest|Carnivore|Largest living cat species; usually solitary.|stripes,swimming",
"ð|Cheetah|Acinonyx jubatus|Mammal|Grassland|Carnivore|Specialized for short bursts of high-speed running.|speed",
"ð|Leopard|Panthera pardus|Mammal|Forest|Carnivore|Adaptable cat and skilled climber that often stores prey in trees.|spots,climbing",
"ð|Jaguar|Panthera onca|Mammal|Rainforest|Carnivore|Powerful American cat with an exceptionally strong bite.|spots,swimming",
"ðº|Gray Wolf|Canis lupus|Mammal|Forest|Carnivore|Highly social canine that lives and hunts in packs.|pack,howling",
"ð¦|Red Fox|Vulpes vulpes|Mammal|Grassland|Omnivore|Adaptable fox found across much of the Northern Hemisphere.|nocturnal",
"ð»|Brown Bear|Ursus arctos|Mammal|Forest|Omnivore|Large bear whose diet ranges from plants to fish and mammals.|hibernation",
"ð¼|Giant Panda|Ailuropoda melanoleuca|Mammal|Mountain forest|Herbivore|Bear famous for its bamboo-heavy diet.|bamboo",
"ð»ââï¸|Polar Bear|Ursus maritimus|Mammal|Arctic|Carnivore|Marine-associated bear specialized for Arctic life.|ice,swimming",
"ð|African Elephant|Loxodonta africana|Mammal|Savanna|Herbivore|Largest living land animal.|trunk,herd",
"ð|Asian Elephant|Elephas maximus|Mammal|Forest|Herbivore|Large herbivore with a trunk and complex social behavior.|trunk,herd",
"ð¦|Giraffe|Giraffa camelopardalis|Mammal|Savanna|Herbivore|Tall browser with a long neck and specialized cardiovascular system.|tall,spots",
"ð¦|Zebra|Equus quagga|Mammal|Grassland|Herbivore|Striped grazing mammal of eastern and southern Africa.|stripes,herd",
"ð¦|White Rhinoceros|Ceratotherium simum|Mammal|Grassland|Herbivore|Large grazing rhinoceros with two horns.|horn,grazing",
"ð¦|Black Rhinoceros|Diceros bicornis|Mammal|Savanna|Herbivore|Browser with a pointed upper lip and two horns.|horn,browser",
"ð¦|Hippopotamus|Hippopotamus amphibius|Mammal|River|Herbivore|Large semi-aquatic mammal that spends much of its day in water.|river,territorial",
"ð¦|Okapi|Okapia johnstoni|Mammal|Rainforest|Herbivore|Forest relative of the giraffe with striped legs.|stripes,forest",
"ð|Horse|Equus caballus|Mammal|Grassland|Herbivore|Domesticated hoofed mammal used worldwide for transport and sport.|domestic,herd",
"ð|Cow|Bos taurus|Mammal|Grassland|Herbivore|Domesticated ruminant raised worldwide.|ruminant,domestic",
"ð|Goat|Capra hircus|Mammal|Mountains|Herbivore|Hardy domesticated ruminant able to browse many plants.|climbing,domestic",
"ð|Sheep|Ovis aries|Mammal|Grassland|Herbivore|Domesticated ruminant widely raised for wool and meat.|wool,flock",
"ð|Pig|Sus scrofa domesticus|Mammal|Human environments|Omnivore|Domesticated relative of the wild boar with a strong sense of smell.|domestic,smell",
"ð¦«|Capybara|Hydrochoerus hydrochaeris|Mammal|Wetlands|Herbivore|World's largest living rodent; highly social and semi-aquatic.|social,swimming",
"ð¦«|Beaver|Castor canadensis|Mammal|Wetlands|Herbivore|Rodent famous for building dams and changing waterways.|dams,teeth",
"ð|Rabbit|Oryctolagus cuniculus|Mammal|Grassland|Herbivore|Fast-moving herbivore with powerful hind legs.|burrow,jumping",
"ð¨|Koala|Phascolarctos cinereus|Mammal|Eucalyptus forest|Herbivore|Australian marsupial that feeds mainly on eucalyptus leaves.|marsupial,eucalyptus",
"ð¦|Red Kangaroo|Osphranter rufus|Mammal|Desert|Herbivore|Large Australian marsupial that moves by powerful hopping.|hopping,marsupial",
"ð¦|Wallaby|Notamacropus|Mammal|Forest|Herbivore|Common name for several smaller kangaroo relatives.|marsupial,hopping",
"ð¦|Platypus|Ornithorhynchus anatinus|Mammal|Freshwater|Carnivore|Egg-laying mammal with a duck-like bill and webbed feet.|eggs,venom",
"ð|Blue Whale|Balaenoptera musculus|Mammal|Ocean|Planktivore|Largest known animal, feeding mainly on tiny krill.|largest,krill",
"ð|Humpback Whale|Megaptera novaeangliae|Mammal|Ocean|Carnivore|Known for long migrations and complex songs.|songs,migration",
"ð¬|Bottlenose Dolphin|Tursiops truncatus|Mammal|Ocean|Carnivore|Intelligent toothed dolphin that uses echolocation.|echolocation,social",
"ð¦­|Harbor Seal|Phoca vitulina|Mammal|Coast|Carnivore|Coastal seal that rests on rocks and beaches.|marine,diving",
"ð¦¦|Sea Otter|Enhydra lutris|Mammal|Coast|Carnivore|Marine mammal that often uses rocks as tools to open prey.|tools,kelp",
"ð¦|Bat|Chiroptera|Mammal|Caves|Insectivore|Only mammals capable of true powered flight.|flight,echolocation",
"ð¦¥|Sloth|Bradypus|Mammal|Rainforest|Herbivore|Slow-moving tree-dweller adapted to life in the canopy.|slow,trees",
"ð|Chimpanzee|Pan troglodytes|Mammal|Rainforest|Omnivore|Highly social great ape capable of tool use.|tools,social",
"ð¦|Gorilla|Gorilla|Mammal|Rainforest|Herbivore|Large great ape living in family groups.|ape,forest",
"ð¦§|Orangutan|Pongo|Mammal|Rainforest|Omnivore|Great ape known for arboreal life and problem solving.|trees,ape",
"ð|Ring-tailed Lemur|Lemur catta|Mammal|Forest|Omnivore|Social primate recognized by its long black-and-white tail.|tail,social",
"ð¿ï¸|Red Squirrel|Sciurus vulgaris|Mammal|Forest|Herbivore|Tree squirrel that stores food and leaps between branches.|trees,nuts",
"ð¦|European Hedgehog|Erinaceus europaeus|Mammal|Grassland|Insectivore|Small spiny mammal that often forages at night.|spines,nocturnal",
"ð¦¡|Honey Badger|Mellivora capensis|Mammal|Savanna|Omnivore|Stocky mustelid with thick skin and a varied diet.|burrow,bold",
"ð¦|Meerkat|Suricata suricatta|Mammal|Desert|Omnivore|Social mongoose that takes turns acting as a lookout.|sentinel,burrow",
"ð¦|Bald Eagle|Haliaeetus leucocephalus|Bird|Wetlands|Carnivore|Fish-eating North American eagle.|fish,raptor",
"ð¦|Golden Eagle|Aquila chrysaetos|Bird|Mountains|Carnivore|Powerful raptor with excellent eyesight.|raptor,flight",
"ð¦|Barn Owl|Tyto alba|Bird|Grassland|Carnivore|Nocturnal owl with a heart-shaped facial disc.|nocturnal,silent",
"ð¦|Snowy Owl|Bubo scandiacus|Bird|Arctic|Carnivore|Large white owl adapted to northern open habitats.|Arctic,feathers",
"ð§|Emperor Penguin|Aptenodytes forsteri|Bird|Antarctica|Carnivore|Largest penguin species and breeder on Antarctic winter ice.|Antarctica,diving",
"ð§|King Penguin|Aptenodytes patagonicus|Bird|Subantarctic|Carnivore|Large penguin with bright orange-yellow neck markings.|penguin,coast",
"ð¦©|Greater Flamingo|Phoenicopterus roseus|Bird|Wetlands|Omnivore|Wading bird famous for pink plumage and filter feeding.|pink,filter-feeding",
"ð¦|Indian Peafowl|Pavo cristatus|Bird|Forest|Omnivore|Peafowl known for the male's elaborate display feathers.|display,feathers",
"ð¦|Scarlet Macaw|Ara macao|Bird|Rainforest|Herbivore|Colorful parrot with a strong curved bill.|parrot,rainforest",
"ð¦|African Grey Parrot|Psittacus erithacus|Bird|Rainforest|Herbivore|Intelligent parrot known for vocal learning.|intelligent,parrot",
"ð¦|Common Raven|Corvus corax|Bird|Mountains|Omnivore|Large corvid known for intelligence and problem solving.|corvid,intelligent",
"ð¦ââ¬|American Crow|Corvus brachyrhynchos|Bird|Woodland|Omnivore|Highly adaptable and social corvid.|corvid,adaptable",
"ð¦|Peregrine Falcon|Falco peregrinus|Bird|Cliffs|Carnivore|Fast-flying falcon that hunts birds in flight.|speed,raptor",
"ð¦¤|Ostrich|Struthio camelus|Bird|Savanna|Omnivore|Largest living bird and a powerful runner.|running,largest",
"ð¦|Kiwi|Apteryx|Bird|Forest|Omnivore|Flightless nocturnal bird native to New Zealand.|nocturnal,flightless",
"ð¦¤|Emu|Dromaius novaehollandiae|Bird|Grassland|Omnivore|Large flightless Australian bird.|running,Australia",
"ð|Chicken|Gallus gallus domesticus|Bird|Human environments|Omnivore|Domesticated bird kept worldwide.|domestic,eggs",
"ð¦|Mallard|Anas platyrhynchos|Bird|Wetlands|Omnivore|Widespread dabbling duck found across the Northern Hemisphere.|duck,wetlands",
"ð¦|Harpy Eagle|Harpia harpyja|Bird|Rainforest|Carnivore|Powerful forest eagle with large talons.|rainforest,raptor",
"ð|Nile Crocodile|Crocodylus niloticus|Reptile|River|Carnivore|Large African crocodilian with powerful jaws.|river,ambush",
"ð|American Alligator|Alligator mississippiensis|Reptile|Wetlands|Carnivore|Large North American crocodilian found in freshwater habitats.|swamp,ambush",
"ð|Komodo Dragon|Varanus komodoensis|Reptile|Island|Carnivore|Largest living lizard, native to Indonesian islands.|lizard,venom",
"ð¦|Green Iguana|Iguana iguana|Reptile|Rainforest|Herbivore|Large arboreal lizard that mainly eats vegetation.|lizard,trees",
"ð¦|Veiled Chameleon|Chamaeleo calyptratus|Reptile|Forest|Insectivore|Chameleon with a prominent casque and specialized tongue.|chameleon,tongue",
"ð|King Cobra|Ophiophagus hannah|Reptile|Forest|Carnivore|Large venomous snake that mainly eats other snakes.|venom,snake",
"ð|Ball Python|Python regius|Reptile|Grassland|Carnivore|Nonvenomous constrictor known for curling into a ball when threatened.|constrictor,pet",
"ð|Green Anaconda|Eunectes murinus|Reptile|Wetlands|Carnivore|Massive semi-aquatic boa of South America.|snake,swimming",
"ð¢|Green Sea Turtle|Chelonia mydas|Reptile|Ocean|Herbivore|Marine turtle whose adults often graze seagrasses and algae.|turtle,ocean",
"ð¢|GalÃ¡pagos Tortoise|Chelonoidis|Reptile|Island|Herbivore|Long-lived giant tortoises native to the GalÃ¡pagos Islands.|giant,long-lived",
"ð¦|Gila Monster|Heloderma suspectum|Reptile|Desert|Carnivore|Venomous lizard of the southwestern United States and Mexico.|venom,desert",
"ð¸|Axolotl|Ambystoma mexicanum|Amphibian|Freshwater|Carnivore|Aquatic salamander famous for retaining juvenile features as an adult.|regeneration,salamander",
"ð¸|Red-eyed Tree Frog|Agalychnis callidryas|Amphibian|Rainforest|Insectivore|Colorful arboreal frog with striking red eyes.|frog,trees",
"ð¸|Poison Dart Frog|Dendrobatidae|Amphibian|Rainforest|Insectivore|Small brightly colored frogs; toxicity varies by species and diet.|frog,venom",
"ð¦|Fire Salamander|Salamandra salamandra|Amphibian|Forest|Insectivore|Black-and-yellow salamander associated with moist forests.|salamander,forest",
"ð¸|American Bullfrog|Lithobates catesbeianus|Amphibian|Wetlands|Carnivore|Large frog with a deep call and broad diet.|frog,wetlands",
"ð|Great White Shark|Carcharodon carcharias|Fish|Ocean|Carnivore|Large predatory shark found in temperate and coastal waters.|shark,teeth",
"ð¦|Hammerhead Shark|Sphyrnidae|Fish|Ocean|Carnivore|Sharks with a distinctive flattened head shape.|shark,head",
"ðª½|Manta Ray|Mobulidae|Fish|Ocean|Planktivore|Large rays that filter-feed on plankton.|ray,filter-feeding",
"ð´|Seahorse|Hippocampus|Fish|Seagrass|Carnivore|Small fish in which males carry developing young in a brood pouch.|fish,pouch",
"ð |Clownfish|Amphiprioninae|Fish|Coral reef|Omnivore|Small reef fish famous for living among sea anemones.|reef,anemone",
"ð|Atlantic Salmon|Salmo salar|Fish|River/Ocean|Carnivore|Migratory fish that travels between ocean and freshwater.|migration,river",
"ð|Goldfish|Carassius auratus|Fish|Freshwater|Omnivore|Domesticated freshwater fish descended from East Asian carp.|domestic,pond",
"ð|Piranha|Pygocentrus|Fish|Freshwater|Omnivore|South American freshwater fish with strong jaws and teeth.|teeth,river",
"ð¡|Pufferfish|Tetraodontidae|Fish|Ocean|Omnivore|Fish able to inflate its body when threatened; some contain powerful toxins.|inflation,toxin",
"ð|Electric Eel|Electrophorus|Fish|Freshwater|Carnivore|South American knifefish capable of producing strong electric discharges.|electric,river",
"ð|Giant Pacific Octopus|Enteroctopus dofleini|Invertebrate|Ocean|Carnivore|Large octopus known for camouflage and flexible problem solving.|octopus,camouflage",
"ð¦|Giant Squid|Architeuthis dux|Invertebrate|Deep ocean|Carnivore|Large deep-sea cephalopod with enormous eyes.|deep-sea,eyes",
"ðª¼|Moon Jellyfish|Aurelia|Invertebrate|Ocean|Carnivore|Common jellyfish with a translucent bell and drifting lifestyle.|jellyfish,plankton",
"â­|Common Starfish|Asterias rubens|Invertebrate|Ocean|Carnivore|Marine echinoderm with a five-armed body plan.|starfish,regeneration",
"ð¦|Sea Urchin|Echinoidea|Invertebrate|Ocean|Herbivore|Spiny echinoderms that often graze algae from rocks.|spines,algae",
"ð¦|Blue Crab|Callinectes sapidus|Invertebrate|Estuary|Omnivore|Swimming crab with paddle-like rear legs.|crab,estuary",
"ð¦|American Lobster|Homarus americanus|Invertebrate|Ocean|Omnivore|Large marine crustacean with powerful claws.|claws,crustacean",
"ð¦|Mantis Shrimp|Stomatopoda|Invertebrate|Coral reef|Carnivore|Marine crustacean with extraordinarily fast striking appendages.|reef,strike",
"ð|Honey Bee|Apis mellifera|Invertebrate|Flowering plants|Herbivore|Social insect important for pollination and honey production.|bees,pollination",
"ð¦|Monarch Butterfly|Danaus plexippus|Invertebrate|Grassland|Herbivore|Butterfly famous for long-distance seasonal migration.|migration,butterfly",
"ð¦|Atlas Moth|Attacus atlas|Invertebrate|Forest|Herbivore|One of the world's largest moths by wing area.|moth,large",
"ð|Leafcutter Ant|Atta|Invertebrate|Rainforest|Herbivore|Ants that harvest leaves to cultivate fungus in colonies.|ants,fungus",
"ð¦|Praying Mantis|Mantodea|Invertebrate|Grassland|Carnivore|Predatory insect with grasping forelegs.|insect,predator",
"ðª°|Dragonfly|Odonata|Invertebrate|Wetlands|Carnivore|Fast-flying insects whose young develop in water.|flight,water",
"ð·ï¸|Tarantula|Theraphosidae|Invertebrate|Forest|Carnivore|Large hairy spiders that use venom to subdue prey.|spider,venom",
"ð¦|Scorpion|Scorpiones|Invertebrate|Desert|Carnivore|Arachnids with pincers and a venomous tail in most species.|arachnid,venom",
"ð|Giant African Land Snail|Achatina fulica|Invertebrate|Tropical forest|Herbivore|Large land snail that feeds on many kinds of vegetation.|snail,land",
"ðª±|Earthworm|Lumbricidae|Invertebrate|Soil|Detritivore|Burrowing annelid that helps mix and aerate soil.|soil,decomposer",
"ð¦|Nautilus|Nautilus|Invertebrate|Ocean|Carnivore|Cephalopod with a chambered external shell.|shell,cephalopod",
"ðª¸|Coral|Anthozoa|Invertebrate|Coral reef|Omnivore|Colonial cnidarians that can build reefs over long periods.|reef,polyps"
];
const animals=raw.map(x=>{const[a,b,c,d,e,f,g,h]=x.split("|");return{icon:a,name:b,sci:c,group:d,habitat:e,diet:f,desc:g,traits:h.split(",")}});

const input=document.querySelector("#search"),grid=document.querySelector("#grid"),count=document.querySelector("#count"),empty=document.querySelector("#empty"),suggestions=document.querySelector("#suggestions"),status=document.querySelector("#searchStatus");let active=-1;
function norm(s){return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim()}
function score(a,q){if(!q)return 0;const n=norm(q), name=norm(a.name), sci=norm(a.sci), all=norm([a.name,a.sci,a.group,a.habitat,a.diet,a.desc,a.traits.join(" ")].join(" "));let s=0;if(name===n)s+=100;if(name.startsWith(n))s+=60;if(name.includes(n))s+=35;if(sci.includes(n))s+=25;if(all.includes(n))s+=10;for(const w of n.split(/\s+/))if(w.length>2&&all.includes(w))s+=4;return s}
function search(q){const n=norm(q);return animals.map(a=>({a,s:score(a,n)})).filter(x=>!n||x.s>0).sort((x,y)=>y.s-x.s||x.a.name.localeCompare(y.a.name)).map(x=>x.a)}
function render(q=""){const found=search(q);grid.innerHTML=found.map(a=>`<article class="card"><div class="icon">${a.icon}</div><h3>${a.name}</h3><div class="scientific">${a.sci}</div><div class="tags"><span class="tag">${a.group}</span><span class="tag">${a.diet}</span></div><p class="description">${a.desc}</p><div class="facts"><span>ð ${a.habitat}</span>${a.traits.slice(0,2).map(t=>`<span>â¢ ${t}</span>`).join("")}</div></article>`).join("");count.textContent=found.length+" animals";empty.hidden=found.length>0;status.textContent=q?("Results for â"+q+"â"):("Showing all "+animals.length+" profiles")}
function showSuggestions(q){if(!q.trim()){suggestions.hidden=true;return}const found=search(q).slice(0,7);suggestions.innerHTML=found.map((a,i)=>`<button class="suggestion${i===active?" active":""}" data-name="${a.name}"><span class="sicon">${a.icon}</span><span><b>${a.name}</b><small>${a.group} â¢ ${a.habitat}</small></span></button>`).join("");suggestions.hidden=found.length===0;suggestions.querySelectorAll(".suggestion").forEach(b=>b.onclick=()=>{input.value=b.dataset.name;active=-1;suggestions.hidden=true;render(input.value);document.querySelector("#explore").scrollIntoView({behavior:"smooth"})})}
input.addEventListener("input",()=>{active=-1;render(input.value);showSuggestions(input.value)});input.addEventListener("keydown",e=>{const items=[...suggestions.querySelectorAll(".suggestion")];if(e.key==="ArrowDown"&&items.length){e.preventDefault();active=(active+1)%items.length;showSuggestions(input.value)}if(e.key==="ArrowUp"&&items.length){e.preventDefault();active=(active-1+items.length)%items.length;showSuggestions(input.value)}if(e.key==="Enter"&&items[active]){items[active].click()}if(e.key==="Escape"){suggestions.hidden=true}});document.addEventListener("click",e=>{if(!e.target.closest(".search-wrap"))suggestions.hidden=true});document.querySelector("#clear").onclick=()=>{input.value="";render();suggestions.hidden=true;input.focus()};document.querySelectorAll("[data-q]").forEach(b=>b.onclick=()=>{input.value=b.dataset.q;render(input.value);suggestions.hidden=true;document.querySelector("#explore").scrollIntoView({behavior:"smooth"})});document.querySelector("#menuBtn").onclick=()=>{const n=document.querySelector("#nav");n.style.display=n.style.display==="flex"?"none":"flex"};document.addEventListener("keydown",e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();input.focus()}});render();
/* Animal Wiki Super Search + navigation upgrade */
(function(){
  var input=document.querySelector("#search"), explore=document.querySelector("#explore"), empty=document.querySelector("#empty");
  if(!input) return;
  var levenshtein=function(a,b){
    var m=a.length,n=b.length;if(!m)return n;if(!n)return m;
    var prev=Array.from({length:n+1},function(_,i){return i});
    for(var i=1;i<=m;i++){var cur=[i];for(var j=1;j<=n;j++)cur[j]=Math.min(cur[j-1]+1,prev[j]+1,prev[j-1]+(a[i-1]===b[j-1]?0:1));prev=cur;}
    return prev[n];
  };
  var fuzzyScore=function(a,q){
    var n=norm(q),fields=[a.name,a.sci,a.group,a.habitat,a.diet,a.desc].concat(a.traits).map(norm),best=0;
    fields.forEach(function(f){
      if(f===n)best=Math.max(best,120);else if(f.indexOf(n)===0)best=Math.max(best,90);else if(f.indexOf(n)>=0)best=Math.max(best,55);
      f.split(/[\s,\/-]+/).forEach(function(t){if(t.length>=3&&n.length>=3){var d=levenshtein(t,n);if(d<=Math.max(1,Math.floor(n.length*.28)))best=Math.max(best,38-d*6);}});
    });return best;
  };
  search=function(q){
    var n=norm(q);if(!n)return animals.slice();
    return animals.map(function(a){return {a:a,s:Math.max(score(a,n),fuzzyScore(a,n))};}).filter(function(x){return x.s>=8;}).sort(function(x,y){return y.s-x.s||x.a.name.localeCompare(y.a.name);}).map(function(x){return x.a;});
  };
  var updateURL=function(q,section){
    var u=new URL(location.href);if(q)u.searchParams.set("q",q);else u.searchParams.delete("q");u.hash=section||"explore";history.replaceState(null,"",u);
  };
  var esc=function(s){return String(s).replace(/[&<>"]/g,function(m){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[m];});};
  var showError=function(q){
    if(!empty)return;
    empty.hidden=false;
    empty.innerHTML='<div class="error-code">ERR_ANIMAL_NOT_FOUND</div><h3>No animal matched “'+esc(q)+'”</h3><p>Try a species name, scientific name, habitat, diet, group, or a shorter keyword.</p><button class="error-action" type="button" id="showAllBtn">↻ Show all animals</button>';
    var b=document.querySelector("#showAllBtn");if(b)b.onclick=function(){input.value="";render();updateURL("","explore");input.focus();};
  };
  var runSearch=function(q){render(q);var found=search(q);updateURL(q,"explore");if(q.trim()&&!found.length)showError(q);else if(empty)empty.hidden=true;if(explore)explore.scrollIntoView({behavior:"smooth",block:"start"});};
  input.addEventListener("keydown",function(e){if(e.key==="Enter"&&input.value.trim()){e.preventDefault();suggestions.hidden=true;runSearch(input.value.trim());}});
  document.querySelectorAll("[data-q]").forEach(function(btn){btn.addEventListener("click",function(){var q=btn.dataset.q||"";input.value=q;runSearch(q);document.querySelectorAll("[data-q]").forEach(function(x){x.classList.remove("selected");});document.querySelectorAll('[data-q="'+CSS.escape(q)+'"]').forEach(function(x){x.classList.add("selected");});});});
  var menu=document.querySelector("#menuBtn"),nav=document.querySelector("#nav");
  if(menu){menu.setAttribute("aria-expanded","false");menu.addEventListener("click",function(){var open=nav&&nav.classList.toggle("nav-open");menu.setAttribute("aria-expanded",String(!!open));});}
  document.querySelectorAll(".topbar a[href^='#']").forEach(function(a){a.addEventListener("click",function(e){var t=document.querySelector(a.getAttribute("href"));if(t){e.preventDefault();t.scrollIntoView({behavior:"smooth"});history.replaceState(null,"",a.getAttribute("href"));if(nav)nav.classList.remove("nav-open");}});});
  var brand=document.querySelector(".brand");if(brand)brand.addEventListener("click",function(e){e.preventDefault();window.scrollTo({top:0,behavior:"smooth"});history.replaceState(null,"",location.pathname);});
  document.addEventListener("click",function(e){
    var card=e.target.closest(".card");if(!card)return;
    var title=card.querySelector("h3");title=title&&title.textContent.trim();if(!title)return;
    var animal=animals.find(function(a){return a.name===title;});if(!animal)return;
    input.value=animal.name;render(animal.name);updateURL(animal.name,"explore");card.classList.add("card-pulse");setTimeout(function(){card.classList.remove("card-pulse");},500);
  });
  var initial=new URL(location.href).searchParams.get("q");if(initial){input.value=initial;render(initial);if(!search(initial).length)showError(initial);}
  window.animalWikiSearch=function(q){input.value=q||"";runSearch(input.value);};
})();

/* Clean Unicode-safe renderer for the redesigned UI */
(function(){
  var groupIcon={Mammal:"🐾",Bird:"🦅",Reptile:"🐊",Fish:"🐟",Amphibian:"🐸",Invertebrate:"🦋"};
  function iconFor(a){return groupIcon[a.group]||"🐾";}
  function esc2(s){return String(s).replace(/[&<>"]/g,function(m){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[m];});}
  render=function(q){
    var found=search(q||"");
    grid.innerHTML=found.map(function(a){
      return '<article class="card" tabindex="0" role="button" aria-label="Explore '+esc2(a.name)+'"><div class="icon">'+iconFor(a)+'</div><h3>'+esc2(a.name)+'</h3><div class="scientific">'+esc2(a.sci)+'</div><div class="tags"><span class="tag">'+esc2(a.group)+'</span><span class="tag">'+esc2(a.diet)+'</span></div><p class="description">'+esc2(a.desc)+'</p><div class="facts"><span>📍 '+esc2(a.habitat)+'</span>'+a.traits.slice(0,2).map(function(t){return '<span>• '+esc2(t)+'</span>';}).join("")+'</div></article>';
    }).join("");
    count.textContent=found.length+" animals";
    if(status)status.textContent=q?"Results for “"+q+"”":"Showing all "+animals.length+" profiles";
    if(empty && !q)empty.hidden=found.length>0;
    if(empty && q && found.length)empty.hidden=true;
  };
  showSuggestions=function(q){
    if(!q.trim()){suggestions.hidden=true;return;}
    var found=search(q).slice(0,7);
    suggestions.innerHTML=found.map(function(a,i){
      return '<button class="suggestion'+(i===active?" active":"")+'" data-name="'+esc2(a.name)+'"><span class="sicon">'+iconFor(a)+'</span><span><b>'+esc2(a.name)+'</b><small>'+esc2(a.group)+" • "+esc2(a.habitat)+'</small></span></button>';
    }).join("");
    suggestions.hidden=found.length===0;
    suggestions.querySelectorAll(".suggestion").forEach(function(b){b.onclick=function(){input.value=b.dataset.name;active=-1;suggestions.hidden=true;render(input.value);document.querySelector("#explore").scrollIntoView({behavior:"smooth"});};});
  };
  document.querySelector(".search-submit")?.addEventListener("click",function(){runSearch(input.value.trim());});
  document.querySelectorAll(".group-card").forEach(function(btn){btn.addEventListener("click",function(){input.value=btn.dataset.q;runSearch(btn.dataset.q);});});
  document.querySelectorAll(".card").forEach(function(){});
  document.addEventListener("keydown",function(e){
    var card=document.activeElement;
    if(e.key==="Enter" && card && card.classList && card.classList.contains("card"))card.click();
  });
  render(input.value||"");
})();
