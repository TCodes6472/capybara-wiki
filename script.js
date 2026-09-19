const raw=[
"\u{f0}\u{9f}\u{a6}\u{81}|Lion|Panthera leo|Mammal|Savanna|Carnivore|Social big cat known for prides and powerful hunting.|pride,roars",
"\u{f0}\u{9f}\u{90}\u{85}|Tiger|Panthera tigris|Mammal|Forest|Carnivore|Largest living cat species; usually solitary.|stripes,swimming",
"\u{f0}\u{9f}\u{90}\u{86}|Cheetah|Acinonyx jubatus|Mammal|Grassland|Carnivore|Specialized for short bursts of high-speed running.|speed",
"\u{f0}\u{9f}\u{90}\u{86}|Leopard|Panthera pardus|Mammal|Forest|Carnivore|Adaptable cat and skilled climber that often stores prey in trees.|spots,climbing",
"\u{f0}\u{9f}\u{90}\u{86}|Jaguar|Panthera onca|Mammal|Rainforest|Carnivore|Powerful American cat with an exceptionally strong bite.|spots,swimming",
"\u{f0}\u{9f}\u{90}\u{ba}|Gray Wolf|Canis lupus|Mammal|Forest|Carnivore|Highly social canine that lives and hunts in packs.|pack,howling",
"\u{f0}\u{9f}\u{a6}\u{8a}|Red Fox|Vulpes vulpes|Mammal|Grassland|Omnivore|Adaptable fox found across much of the Northern Hemisphere.|nocturnal",
"\u{f0}\u{9f}\u{90}\u{bb}|Brown Bear|Ursus arctos|Mammal|Forest|Omnivore|Large bear whose diet ranges from plants to fish and mammals.|hibernation",
"\u{f0}\u{9f}\u{90}\u{bc}|Giant Panda|Ailuropoda melanoleuca|Mammal|Mountain forest|Herbivore|Bear famous for its bamboo-heavy diet.|bamboo",
"\u{f0}\u{9f}\u{90}\u{bb}\u{e2}\u{80}\u{8d}\u{e2}\u{9d}\u{84}\u{ef}\u{b8}\u{8f}|Polar Bear|Ursus maritimus|Mammal|Arctic|Carnivore|Marine-associated bear specialized for Arctic life.|ice,swimming",
"\u{f0}\u{9f}\u{90}\u{98}|African Elephant|Loxodonta africana|Mammal|Savanna|Herbivore|Largest living land animal.|trunk,herd",
"\u{f0}\u{9f}\u{90}\u{98}|Asian Elephant|Elephas maximus|Mammal|Forest|Herbivore|Large herbivore with a trunk and complex social behavior.|trunk,herd",
"\u{f0}\u{9f}\u{a6}\u{92}|Giraffe|Giraffa camelopardalis|Mammal|Savanna|Herbivore|Tall browser with a long neck and specialized cardiovascular system.|tall,spots",
"\u{f0}\u{9f}\u{a6}\u{93}|Zebra|Equus quagga|Mammal|Grassland|Herbivore|Striped grazing mammal of eastern and southern Africa.|stripes,herd",
"\u{f0}\u{9f}\u{a6}\u{8f}|White Rhinoceros|Ceratotherium simum|Mammal|Grassland|Herbivore|Large grazing rhinoceros with two horns.|horn,grazing",
"\u{f0}\u{9f}\u{a6}\u{8f}|Black Rhinoceros|Diceros bicornis|Mammal|Savanna|Herbivore|Browser with a pointed upper lip and two horns.|horn,browser",
"\u{f0}\u{9f}\u{a6}\u{9b}|Hippopotamus|Hippopotamus amphibius|Mammal|River|Herbivore|Large semi-aquatic mammal that spends much of its day in water.|river,territorial",
"\u{f0}\u{9f}\u{a6}\u{92}|Okapi|Okapia johnstoni|Mammal|Rainforest|Herbivore|Forest relative of the giraffe with striped legs.|stripes,forest",
"\u{f0}\u{9f}\u{90}\u{8e}|Horse|Equus caballus|Mammal|Grassland|Herbivore|Domesticated hoofed mammal used worldwide for transport and sport.|domestic,herd",
"\u{f0}\u{9f}\u{90}\u{84}|Cow|Bos taurus|Mammal|Grassland|Herbivore|Domesticated ruminant raised worldwide.|ruminant,domestic",
"\u{f0}\u{9f}\u{90}\u{90}|Goat|Capra hircus|Mammal|Mountains|Herbivore|Hardy domesticated ruminant able to browse many plants.|climbing,domestic",
"\u{f0}\u{9f}\u{90}\u{91}|Sheep|Ovis aries|Mammal|Grassland|Herbivore|Domesticated ruminant widely raised for wool and meat.|wool,flock",
"\u{f0}\u{9f}\u{90}\u{96}|Pig|Sus scrofa domesticus|Mammal|Human environments|Omnivore|Domesticated relative of the wild boar with a strong sense of smell.|domestic,smell",
"\u{f0}\u{9f}\u{a6}\u{ab}|Capybara|Hydrochoerus hydrochaeris|Mammal|Wetlands|Herbivore|World's largest living rodent; highly social and semi-aquatic.|social,swimming",
"\u{f0}\u{9f}\u{a6}\u{ab}|Beaver|Castor canadensis|Mammal|Wetlands|Herbivore|Rodent famous for building dams and changing waterways.|dams,teeth",
"\u{f0}\u{9f}\u{90}\u{87}|Rabbit|Oryctolagus cuniculus|Mammal|Grassland|Herbivore|Fast-moving herbivore with powerful hind legs.|burrow,jumping",
"\u{f0}\u{9f}\u{90}\u{a8}|Koala|Phascolarctos cinereus|Mammal|Eucalyptus forest|Herbivore|Australian marsupial that feeds mainly on eucalyptus leaves.|marsupial,eucalyptus",
"\u{f0}\u{9f}\u{a6}\u{98}|Red Kangaroo|Osphranter rufus|Mammal|Desert|Herbivore|Large Australian marsupial that moves by powerful hopping.|hopping,marsupial",
"\u{f0}\u{9f}\u{a6}\u{98}|Wallaby|Notamacropus|Mammal|Forest|Herbivore|Common name for several smaller kangaroo relatives.|marsupial,hopping",
"\u{f0}\u{9f}\u{a6}\u{86}|Platypus|Ornithorhynchus anatinus|Mammal|Freshwater|Carnivore|Egg-laying mammal with a duck-like bill and webbed feet.|eggs,venom",
"\u{f0}\u{9f}\u{90}\u{8b}|Blue Whale|Balaenoptera musculus|Mammal|Ocean|Planktivore|Largest known animal, feeding mainly on tiny krill.|largest,krill",
"\u{f0}\u{9f}\u{90}\u{8b}|Humpback Whale|Megaptera novaeangliae|Mammal|Ocean|Carnivore|Known for long migrations and complex songs.|songs,migration",
"\u{f0}\u{9f}\u{90}\u{ac}|Bottlenose Dolphin|Tursiops truncatus|Mammal|Ocean|Carnivore|Intelligent toothed dolphin that uses echolocation.|echolocation,social",
"\u{f0}\u{9f}\u{a6}\u{ad}|Harbor Seal|Phoca vitulina|Mammal|Coast|Carnivore|Coastal seal that rests on rocks and beaches.|marine,diving",
"\u{f0}\u{9f}\u{a6}\u{a6}|Sea Otter|Enhydra lutris|Mammal|Coast|Carnivore|Marine mammal that often uses rocks as tools to open prey.|tools,kelp",
"\u{f0}\u{9f}\u{a6}\u{87}|Bat|Chiroptera|Mammal|Caves|Insectivore|Only mammals capable of true powered flight.|flight,echolocation",
"\u{f0}\u{9f}\u{a6}\u{a5}|Sloth|Bradypus|Mammal|Rainforest|Herbivore|Slow-moving tree-dweller adapted to life in the canopy.|slow,trees",
"\u{f0}\u{9f}\u{90}\u{92}|Chimpanzee|Pan troglodytes|Mammal|Rainforest|Omnivore|Highly social great ape capable of tool use.|tools,social",
"\u{f0}\u{9f}\u{a6}\u{8d}|Gorilla|Gorilla|Mammal|Rainforest|Herbivore|Large great ape living in family groups.|ape,forest",
"\u{f0}\u{9f}\u{a6}\u{a7}|Orangutan|Pongo|Mammal|Rainforest|Omnivore|Great ape known for arboreal life and problem solving.|trees,ape",
"\u{f0}\u{9f}\u{90}\u{92}|Ring-tailed Lemur|Lemur catta|Mammal|Forest|Omnivore|Social primate recognized by its long black-and-white tail.|tail,social",
"\u{f0}\u{9f}\u{90}\u{bf}\u{ef}\u{b8}\u{8f}|Red Squirrel|Sciurus vulgaris|Mammal|Forest|Herbivore|Tree squirrel that stores food and leaps between branches.|trees,nuts",
"\u{f0}\u{9f}\u{a6}\u{94}|European Hedgehog|Erinaceus europaeus|Mammal|Grassland|Insectivore|Small spiny mammal that often forages at night.|spines,nocturnal",
"\u{f0}\u{9f}\u{a6}\u{a1}|Honey Badger|Mellivora capensis|Mammal|Savanna|Omnivore|Stocky mustelid with thick skin and a varied diet.|burrow,bold",
"\u{f0}\u{9f}\u{a6}\u{81}|Meerkat|Suricata suricatta|Mammal|Desert|Omnivore|Social mongoose that takes turns acting as a lookout.|sentinel,burrow",
"\u{f0}\u{9f}\u{a6}\u{85}|Bald Eagle|Haliaeetus leucocephalus|Bird|Wetlands|Carnivore|Fish-eating North American eagle.|fish,raptor",
"\u{f0}\u{9f}\u{a6}\u{85}|Golden Eagle|Aquila chrysaetos|Bird|Mountains|Carnivore|Powerful raptor with excellent eyesight.|raptor,flight",
"\u{f0}\u{9f}\u{a6}\u{89}|Barn Owl|Tyto alba|Bird|Grassland|Carnivore|Nocturnal owl with a heart-shaped facial disc.|nocturnal,silent",
"\u{f0}\u{9f}\u{a6}\u{89}|Snowy Owl|Bubo scandiacus|Bird|Arctic|Carnivore|Large white owl adapted to northern open habitats.|Arctic,feathers",
"\u{f0}\u{9f}\u{90}\u{a7}|Emperor Penguin|Aptenodytes forsteri|Bird|Antarctica|Carnivore|Largest penguin species and breeder on Antarctic winter ice.|Antarctica,diving",
"\u{f0}\u{9f}\u{90}\u{a7}|King Penguin|Aptenodytes patagonicus|Bird|Subantarctic|Carnivore|Large penguin with bright orange-yellow neck markings.|penguin,coast",
"\u{f0}\u{9f}\u{a6}\u{a9}|Greater Flamingo|Phoenicopterus roseus|Bird|Wetlands|Omnivore|Wading bird famous for pink plumage and filter feeding.|pink,filter-feeding",
"\u{f0}\u{9f}\u{a6}\u{9a}|Indian Peafowl|Pavo cristatus|Bird|Forest|Omnivore|Peafowl known for the male's elaborate display feathers.|display,feathers",
"\u{f0}\u{9f}\u{a6}\u{9c}|Scarlet Macaw|Ara macao|Bird|Rainforest|Herbivore|Colorful parrot with a strong curved bill.|parrot,rainforest",
"\u{f0}\u{9f}\u{a6}\u{9c}|African Grey Parrot|Psittacus erithacus|Bird|Rainforest|Herbivore|Intelligent parrot known for vocal learning.|intelligent,parrot",
"\u{f0}\u{9f}\u{90}\u{a6}|Common Raven|Corvus corax|Bird|Mountains|Omnivore|Large corvid known for intelligence and problem solving.|corvid,intelligent",
"\u{f0}\u{9f}\u{90}\u{a6}\u{e2}\u{80}\u{8d}\u{e2}\u{ac}\u{9b}|American Crow|Corvus brachyrhynchos|Bird|Woodland|Omnivore|Highly adaptable and social corvid.|corvid,adaptable",
"\u{f0}\u{9f}\u{90}\u{a6}|Peregrine Falcon|Falco peregrinus|Bird|Cliffs|Carnivore|Fast-flying falcon that hunts birds in flight.|speed,raptor",
"\u{f0}\u{9f}\u{a6}\u{a4}|Ostrich|Struthio camelus|Bird|Savanna|Omnivore|Largest living bird and a powerful runner.|running,largest",
"\u{f0}\u{9f}\u{90}\u{a6}|Kiwi|Apteryx|Bird|Forest|Omnivore|Flightless nocturnal bird native to New Zealand.|nocturnal,flightless",
"\u{f0}\u{9f}\u{a6}\u{a4}|Emu|Dromaius novaehollandiae|Bird|Grassland|Omnivore|Large flightless Australian bird.|running,Australia",
"\u{f0}\u{9f}\u{90}\u{94}|Chicken|Gallus gallus domesticus|Bird|Human environments|Omnivore|Domesticated bird kept worldwide.|domestic,eggs",
"\u{f0}\u{9f}\u{a6}\u{86}|Mallard|Anas platyrhynchos|Bird|Wetlands|Omnivore|Widespread dabbling duck found across the Northern Hemisphere.|duck,wetlands",
"\u{f0}\u{9f}\u{a6}\u{85}|Harpy Eagle|Harpia harpyja|Bird|Rainforest|Carnivore|Powerful forest eagle with large talons.|rainforest,raptor",
"\u{f0}\u{9f}\u{90}\u{8a}|Nile Crocodile|Crocodylus niloticus|Reptile|River|Carnivore|Large African crocodilian with powerful jaws.|river,ambush",
"\u{f0}\u{9f}\u{90}\u{8a}|American Alligator|Alligator mississippiensis|Reptile|Wetlands|Carnivore|Large North American crocodilian found in freshwater habitats.|swamp,ambush",
"\u{f0}\u{9f}\u{90}\u{89}|Komodo Dragon|Varanus komodoensis|Reptile|Island|Carnivore|Largest living lizard, native to Indonesian islands.|lizard,venom",
"\u{f0}\u{9f}\u{a6}\u{8e}|Green Iguana|Iguana iguana|Reptile|Rainforest|Herbivore|Large arboreal lizard that mainly eats vegetation.|lizard,trees",
"\u{f0}\u{9f}\u{a6}\u{8e}|Veiled Chameleon|Chamaeleo calyptratus|Reptile|Forest|Insectivore|Chameleon with a prominent casque and specialized tongue.|chameleon,tongue",
"\u{f0}\u{9f}\u{90}\u{8d}|King Cobra|Ophiophagus hannah|Reptile|Forest|Carnivore|Large venomous snake that mainly eats other snakes.|venom,snake",
"\u{f0}\u{9f}\u{90}\u{8d}|Ball Python|Python regius|Reptile|Grassland|Carnivore|Nonvenomous constrictor known for curling into a ball when threatened.|constrictor,pet",
"\u{f0}\u{9f}\u{90}\u{8d}|Green Anaconda|Eunectes murinus|Reptile|Wetlands|Carnivore|Massive semi-aquatic boa of South America.|snake,swimming",
"\u{f0}\u{9f}\u{90}\u{a2}|Green Sea Turtle|Chelonia mydas|Reptile|Ocean|Herbivore|Marine turtle whose adults often graze seagrasses and algae.|turtle,ocean",
"\u{f0}\u{9f}\u{90}\u{a2}|Gal\u{c3}\u{a1}pagos Tortoise|Chelonoidis|Reptile|Island|Herbivore|Long-lived giant tortoises native to the Gal\u{c3}\u{a1}pagos Islands.|giant,long-lived",
"\u{f0}\u{9f}\u{a6}\u{8e}|Gila Monster|Heloderma suspectum|Reptile|Desert|Carnivore|Venomous lizard of the southwestern United States and Mexico.|venom,desert",
"\u{f0}\u{9f}\u{90}\u{b8}|Axolotl|Ambystoma mexicanum|Amphibian|Freshwater|Carnivore|Aquatic salamander famous for retaining juvenile features as an adult.|regeneration,salamander",
"\u{f0}\u{9f}\u{90}\u{b8}|Red-eyed Tree Frog|Agalychnis callidryas|Amphibian|Rainforest|Insectivore|Colorful arboreal frog with striking red eyes.|frog,trees",
"\u{f0}\u{9f}\u{90}\u{b8}|Poison Dart Frog|Dendrobatidae|Amphibian|Rainforest|Insectivore|Small brightly colored frogs; toxicity varies by species and diet.|frog,venom",
"\u{f0}\u{9f}\u{a6}\u{8e}|Fire Salamander|Salamandra salamandra|Amphibian|Forest|Insectivore|Black-and-yellow salamander associated with moist forests.|salamander,forest",
"\u{f0}\u{9f}\u{90}\u{b8}|American Bullfrog|Lithobates catesbeianus|Amphibian|Wetlands|Carnivore|Large frog with a deep call and broad diet.|frog,wetlands",
"\u{f0}\u{9f}\u{90}\u{9f}|Great White Shark|Carcharodon carcharias|Fish|Ocean|Carnivore|Large predatory shark found in temperate and coastal waters.|shark,teeth",
"\u{f0}\u{9f}\u{a6}\u{88}|Hammerhead Shark|Sphyrnidae|Fish|Ocean|Carnivore|Sharks with a distinctive flattened head shape.|shark,head",
"\u{f0}\u{9f}\u{aa}\u{bd}|Manta Ray|Mobulidae|Fish|Ocean|Planktivore|Large rays that filter-feed on plankton.|ray,filter-feeding",
"\u{f0}\u{9f}\u{90}\u{b4}|Seahorse|Hippocampus|Fish|Seagrass|Carnivore|Small fish in which males carry developing young in a brood pouch.|fish,pouch",
"\u{f0}\u{9f}\u{90}\u{a0}|Clownfish|Amphiprioninae|Fish|Coral reef|Omnivore|Small reef fish famous for living among sea anemones.|reef,anemone",
"\u{f0}\u{9f}\u{90}\u{9f}|Atlantic Salmon|Salmo salar|Fish|River/Ocean|Carnivore|Migratory fish that travels between ocean and freshwater.|migration,river",
"\u{f0}\u{9f}\u{90}\u{9f}|Goldfish|Carassius auratus|Fish|Freshwater|Omnivore|Domesticated freshwater fish descended from East Asian carp.|domestic,pond",
"\u{f0}\u{9f}\u{90}\u{9f}|Piranha|Pygocentrus|Fish|Freshwater|Omnivore|South American freshwater fish with strong jaws and teeth.|teeth,river",
"\u{f0}\u{9f}\u{90}\u{a1}|Pufferfish|Tetraodontidae|Fish|Ocean|Omnivore|Fish able to inflate its body when threatened; some contain powerful toxins.|inflation,toxin",
"\u{f0}\u{9f}\u{90}\u{9f}|Electric Eel|Electrophorus|Fish|Freshwater|Carnivore|South American knifefish capable of producing strong electric discharges.|electric,river",
"\u{f0}\u{9f}\u{90}\u{99}|Giant Pacific Octopus|Enteroctopus dofleini|Invertebrate|Ocean|Carnivore|Large octopus known for camouflage and flexible problem solving.|octopus,camouflage",
"\u{f0}\u{9f}\u{a6}\u{91}|Giant Squid|Architeuthis dux|Invertebrate|Deep ocean|Carnivore|Large deep-sea cephalopod with enormous eyes.|deep-sea,eyes",
"\u{f0}\u{9f}\u{aa}\u{bc}|Moon Jellyfish|Aurelia|Invertebrate|Ocean|Carnivore|Common jellyfish with a translucent bell and drifting lifestyle.|jellyfish,plankton",
"\u{e2}\u{ad}\u{90}|Common Starfish|Asterias rubens|Invertebrate|Ocean|Carnivore|Marine echinoderm with a five-armed body plan.|starfish,regeneration",
"\u{f0}\u{9f}\u{a6}\u{94}|Sea Urchin|Echinoidea|Invertebrate|Ocean|Herbivore|Spiny echinoderms that often graze algae from rocks.|spines,algae",
"\u{f0}\u{9f}\u{a6}\u{80}|Blue Crab|Callinectes sapidus|Invertebrate|Estuary|Omnivore|Swimming crab with paddle-like rear legs.|crab,estuary",
"\u{f0}\u{9f}\u{a6}\u{9e}|American Lobster|Homarus americanus|Invertebrate|Ocean|Omnivore|Large marine crustacean with powerful claws.|claws,crustacean",
"\u{f0}\u{9f}\u{a6}\u{90}|Mantis Shrimp|Stomatopoda|Invertebrate|Coral reef|Carnivore|Marine crustacean with extraordinarily fast striking appendages.|reef,strike",
"\u{f0}\u{9f}\u{90}\u{9d}|Honey Bee|Apis mellifera|Invertebrate|Flowering plants|Herbivore|Social insect important for pollination and honey production.|bees,pollination",
"\u{f0}\u{9f}\u{a6}\u{8b}|Monarch Butterfly|Danaus plexippus|Invertebrate|Grassland|Herbivore|Butterfly famous for long-distance seasonal migration.|migration,butterfly",
"\u{f0}\u{9f}\u{a6}\u{8b}|Atlas Moth|Attacus atlas|Invertebrate|Forest|Herbivore|One of the world's largest moths by wing area.|moth,large",
"\u{f0}\u{9f}\u{90}\u{9c}|Leafcutter Ant|Atta|Invertebrate|Rainforest|Herbivore|Ants that harvest leaves to cultivate fungus in colonies.|ants,fungus",
"\u{f0}\u{9f}\u{a6}\u{97}|Praying Mantis|Mantodea|Invertebrate|Grassland|Carnivore|Predatory insect with grasping forelegs.|insect,predator",
"\u{f0}\u{9f}\u{aa}\u{b0}|Dragonfly|Odonata|Invertebrate|Wetlands|Carnivore|Fast-flying insects whose young develop in water.|flight,water",
"\u{f0}\u{9f}\u{95}\u{b7}\u{ef}\u{b8}\u{8f}|Tarantula|Theraphosidae|Invertebrate|Forest|Carnivore|Large hairy spiders that use venom to subdue prey.|spider,venom",
"\u{f0}\u{9f}\u{a6}\u{82}|Scorpion|Scorpiones|Invertebrate|Desert|Carnivore|Arachnids with pincers and a venomous tail in most species.|arachnid,venom",
"\u{f0}\u{9f}\u{90}\u{8c}|Giant African Land Snail|Achatina fulica|Invertebrate|Tropical forest|Herbivore|Large land snail that feeds on many kinds of vegetation.|snail,land",
"\u{f0}\u{9f}\u{aa}\u{b1}|Earthworm|Lumbricidae|Invertebrate|Soil|Detritivore|Burrowing annelid that helps mix and aerate soil.|soil,decomposer",
"\u{f0}\u{9f}\u{a6}\u{91}|Nautilus|Nautilus|Invertebrate|Ocean|Carnivore|Cephalopod with a chambered external shell.|shell,cephalopod",
"\u{f0}\u{9f}\u{aa}\u{b8}|Coral|Anthozoa|Invertebrate|Coral reef|Omnivore|Colonial cnidarians that can build reefs over long periods.|reef,polyps"
];
const animals=raw.map(x=>{const[a,b,c,d,e,f,g,h]=x.split("|");return{icon:a,name:b,sci:c,group:d,habitat:e,diet:f,desc:g,traits:h.split(",")}});

const input=document.querySelector("#search"),grid=document.querySelector("#grid"),count=document.querySelector("#count"),empty=document.querySelector("#empty"),suggestions=document.querySelector("#suggestions"),status=document.querySelector("#searchStatus");let active=-1;
function norm(s){return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim()}
function score(a,q){if(!q)return 0;const n=norm(q), name=norm(a.name), sci=norm(a.sci), all=norm([a.name,a.sci,a.group,a.habitat,a.diet,a.desc,a.traits.join(" ")].join(" "));let s=0;if(name===n)s+=100;if(name.startsWith(n))s+=60;if(name.includes(n))s+=35;if(sci.includes(n))s+=25;if(all.includes(n))s+=10;for(const w of n.split(/\s+/))if(w.length>2&&all.includes(w))s+=4;return s}
function search(q){const n=norm(q);return animals.map(a=>({a,s:score(a,n)})).filter(x=>!n||x.s>0).sort((x,y)=>y.s-x.s||x.a.name.localeCompare(y.a.name)).map(x=>x.a)}
function render(q=""){const found=search(q);grid.innerHTML=found.map(a=>`<a class="card-link" href="animals/`${slug(a.name)}`.html"><article class="card"><div class="icon">`${a.icon}`</div><h3>`${a.name}`</h3><div class="scientific">`${a.sci}`</div><div class="tags"><span class="tag">`${a.group}`</span><span class="tag">`${a.diet}`</span></div><p class="description">`${a.desc}`</p><div class="facts"><span>`${a.habitat}`</span>`${a.traits.slice(0,2).map(t=>'<span>• '+t+'</span>').join('')}`</div></article></a>`).join("");count.textContent=found.length+" animals";empty.hidden=found.length>0;status.textContent=q?("Results for \u{e2}\u{80}\u{9c}"+q+"\u{e2}\u{80}\u{9d}"):("Showing all "+animals.length+" profiles")}
function showSuggestions(q){if(!q.trim()){suggestions.hidden=true;return}const found=search(q).slice(0,7);suggestions.innerHTML=found.map((a,i)=>`<button class="suggestion${i===active?" active":""}" data-name="${a.name}"><span class="sicon">${a.icon}</span><span><b>${a.name}</b><small>${a.group} \u{e2}\u{80}\u{a2} ${a.habitat}</small></span></button>`).join("");suggestions.hidden=found.length===0;suggestions.querySelectorAll(".suggestion").forEach(b=>b.onclick=()=>{input.value=b.dataset.name;active=-1;suggestions.hidden=true;render(input.value);document.querySelector("#explore").scrollIntoView({behavior:"smooth"})})}
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
    empty.innerHTML='<div class="error-code">ERR_ANIMAL_NOT_FOUND</div><h3>No animal matched \u{201c}'+esc(q)+'\u{201d}</h3><p>Try a species name, scientific name, habitat, diet, group, or a shorter keyword.</p><button class="error-action" type="button" id="showAllBtn">\u{21bb} Show all animals</button>';
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
  var groupIcon={Mammal:"\u{1f43e}",Bird:"\u{1f985}",Reptile:"\u{1f40a}",Fish:"\u{1f41f}",Amphibian:"\u{1f438}",Invertebrate:"\u{1f98b}"};
  function iconFor(a){return groupIcon[a.group]||"\u{1f43e}";}
  function esc2(s){return String(s).replace(/[&<>"]/g,function(m){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[m];});}
  render=function(q){
    var found=search(q||"");
    grid.innerHTML=found.map(function(a){
      return '<article class="card" tabindex="0" role="button" aria-label="Explore '+esc2(a.name)+'"><div class="icon">'+iconFor(a)+'</div><h3>'+esc2(a.name)+'</h3><div class="scientific">'+esc2(a.sci)+'</div><div class="tags"><span class="tag">'+esc2(a.group)+'</span><span class="tag">'+esc2(a.diet)+'</span></div><p class="description">'+esc2(a.desc)+'</p><div class="facts"><span>\u{1f4cd} '+esc2(a.habitat)+'</span>'+a.traits.slice(0,2).map(function(t){return '<span>\u{2022} '+esc2(t)+'</span>';}).join("")+'</div></article>';
    }).join("");
    count.textContent=found.length+" animals";
    if(status)status.textContent=q?"Results for \u{201c}"+q+"\u{201d}":"Showing all "+animals.length+" profiles";
    if(empty && !q)empty.hidden=found.length>0;
    if(empty && q && found.length)empty.hidden=true;
  };
  showSuggestions=function(q){
    if(!q.trim()){suggestions.hidden=true;return;}
    var found=search(q).slice(0,7);
    suggestions.innerHTML=found.map(function(a,i){
      return '<button class="suggestion'+(i===active?" active":"")+'" data-name="'+esc2(a.name)+'"><span class="sicon">'+iconFor(a)+'</span><span><b>'+esc2(a.name)+'</b><small>'+esc2(a.group)+" \u{2022} "+esc2(a.habitat)+'</small></span></button>';
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

/* Final rendering hardening: no emoji fonts, no external visual dependencies. */
(function(){
  var clean=function(s){
    s=String(s==null?"":s);
    return s.replace(/ðŸ[sS]{0,12}/g,"").replace(/Ã[sS]{0,8}/g,"").replace(/Â[sS]{0,8}/g,"").replace(/�/g,"").trim();
  };
  var art={Mammal:"assets/mammal.svg",Bird:"assets/bird.svg",Reptile:"assets/reptile.svg",Fish:"assets/fish.svg",Amphibian:"assets/amphibian.svg",Invertebrate:"assets/invertebrate.svg"};
  var oldSearch=search;
  search=function(q){
    return oldSearch(q).map(function(a){
      var b=Object.assign({},a);
      b.name=clean(b.name);b.sci=clean(b.sci);b.group=clean(b.group);b.habitat=clean(b.habitat);b.diet=clean(b.diet);b.desc=clean(b.desc);b.traits=(b.traits||[]).map(clean);
      return b;
    });
  };
  render=function(q){
    var found=search(q||"");
    grid.innerHTML=found.map(function(a){
      return '<article class="card" tabindex="0" role="button" aria-label="Explore '+esc2(a.name)+'"><div class="animal-art"><img src="'+art[a.group]+'" alt="" loading="lazy"></div><h3>'+esc2(a.name)+'</h3><div class="scientific">'+esc2(a.sci)+'</div><div class="tags"><span class="tag">'+esc2(a.group)+'</span><span class="tag">'+esc2(a.diet)+'</span></div><p class="description">'+esc2(a.desc)+'</p><div class="facts"><span>Habitat: '+esc2(a.habitat)+'</span>'+a.traits.slice(0,2).map(function(t){return '<span>• '+esc2(t)+'</span>';}).join("")+'</div></article>';
    }).join("");
    count.textContent=found.length+" animals";
    if(status)status.textContent=q?'Results for "'+q+'"':'Showing all '+animals.length+' profiles';
    if(empty)empty.hidden=found.length>0;
  };
  var baseShow=showSuggestions;
  showSuggestions=function(q){
    baseShow(q);
    if(!suggestions.hidden)suggestions.querySelectorAll(".sicon").forEach(function(x){x.textContent="";});
  };
  render(input.value||"");
})();

/* Full animal wiki pages */
(function(){
  if(document.getElementById("animalWikiPage")) return;
  var page=document.createElement("section");
  page.id="animalWikiPage";
  page.className="animal-wiki-page";
  page.hidden=true;
  document.body.appendChild(page);

  function esc(s){
    return String(s==null?"":s).replace(/[&<>"]/g,function(m){
      return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[m];
    });
  }
  function slug(s){return String(s).toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");}
  function profile(a){
    var traits=(a.traits||[]).map(function(t){return esc(t);});
    return {
      overview:esc(a.desc),
      appearance:"This profile describes a "+esc(a.group).toLowerCase()+" known as "+esc(a.name)+". Its scientific name is "+esc(a.sci)+". Identification features and body form can vary across populations, subspecies, or related species.",
      habitat:"The primary habitat recorded for this profile is "+esc(a.habitat)+". Habitat use can change with season, food availability, life stage, and local environmental conditions.",
      diet:"The recorded diet is "+esc(a.diet)+". Feeding behavior depends on the species and its available food sources, and can change with age or season.",
      behavior:traits.length?("Notable profile traits include "+traits.join(", ")+". These traits describe characteristic behavior, adaptations, or ecology associated with the animal."):"Behavior varies with habitat, season, age, and social context.",
      reproduction:"Reproduction varies by species and population. This profile provides general educational information rather than a substitute for a species-specific scientific account.",
      range:"The habitat entry gives the broad environment represented by this profile. The actual geographic range may be much more specific and can change over time as taxonomy and distribution data are updated.",
      conservation:"Conservation status is species-specific and can change as assessments are updated. For current global extinction-risk information, check the latest IUCN Red List assessment.",
      facts:"The short description and trait list above summarize the key facts currently stored in this Animal Wiki profile."
    };
  }
  function renderWiki(a,push){
    if(!a)return;
    var p=profile(a);
    page.innerHTML=
      '<div class="wiki-shell">'+
        '<header class="wiki-top">'+
          '<button class="wiki-back" id="wikiBack" type="button">Back to Animal Wiki</button>'+
          '<div class="wiki-breadcrumb">Animal Wiki / '+esc(a.group)+' / '+esc(a.name)+'</div>'+
        '</header>'+
        '<main class="wiki-main">'+
          '<div class="wiki-hero">'+
            '<div class="wiki-hero-art"><img src="'+({Mammal:"assets/mammal.svg",Bird:"assets/bird.svg",Reptile:"assets/reptile.svg",Fish:"assets/fish.svg",Amphibian:"assets/amphibian.svg",Invertebrate:"assets/invertebrate.svg"}[a.group]||"assets/mammal.svg")+'" alt=""></div>'+
            '<div><p class="wiki-eyebrow">'+esc(a.group)+' profile</p><h1>'+esc(a.name)+'</h1><p class="wiki-scientific">'+esc(a.sci)+'</p><p class="wiki-lead">'+esc(a.desc)+'</p></div>'+
          '</div>'+
          '<div class="wiki-layout">'+
            '<article class="wiki-article">'+
              '<section><h2>Overview</h2><p>'+p.overview+'</p></section>'+
              '<section><h2>Appearance and identification</h2><p>'+p.appearance+'</p></section>'+
              '<section><h2>Habitat</h2><p>'+p.habitat+'</p></section>'+
              '<section><h2>Diet and feeding</h2><p>'+p.diet+'</p></section>'+
              '<section><h2>Behavior and adaptations</h2><p>'+p.behavior+'</p></section>'+
              '<section><h2>Reproduction</h2><p>'+p.reproduction+'</p></section>'+
              '<section><h2>Range</h2><p>'+p.range+'</p></section>'+
              '<section><h2>Conservation</h2><p>'+p.conservation+'</p></section>'+
              '<section><h2>Key facts</h2><p>'+p.facts+'</p></section>'+
            '</article>'+
            '<aside class="wiki-side">'+
              '<div class="wiki-infobox"><h3>'+esc(a.name)+'</h3><img src="'+({Mammal:"assets/mammal.svg",Bird:"assets/bird.svg",Reptile:"assets/reptile.svg",Fish:"assets/fish.svg",Amphibian:"assets/amphibian.svg",Invertebrate:"assets/invertebrate.svg"}[a.group]||"assets/mammal.svg")+'" alt=""><dl>'+
                '<dt>Scientific name</dt><dd><i>'+esc(a.sci)+'</i></dd>'+
                '<dt>Group</dt><dd>'+esc(a.group)+'</dd>'+
                '<dt>Habitat</dt><dd>'+esc(a.habitat)+'</dd>'+
                '<dt>Diet</dt><dd>'+esc(a.diet)+'</dd>'+
                '<dt>Profile traits</dt><dd>'+traits.join(", ")+'</dd>'+
              '</dl></div>'+
              '<button class="wiki-action" id="wikiTop" type="button">Back to top</button>'+
            '</aside>'+
          '</div>'+
        '</main>'+
      '</div>';
    page.hidden=false;
    document.body.classList.add("wiki-open");
    document.title= a.name+" - Animal Wiki";
    if(push) history.pushState({animal:slug(a.name)},"","#animal/"+slug(a.name));
    page.querySelector("#wikiBack").onclick=function(){closeWiki(true);};
    page.querySelector("#wikiTop").onclick=function(){page.scrollTop=0;window.scrollTo({top:0,behavior:"smooth"});};
    window.scrollTo({top:0,behavior:"instant"});
  }
  function openWiki(a){renderWiki(a,true);}
  function closeWiki(goBack){
    page.hidden=true;
    document.body.classList.remove("wiki-open");
    document.title="Animal Wiki";
    if(goBack){
      if(history.state && history.state.animal) history.back();
      else history.replaceState(null,"",location.pathname+location.search);
    }
  }
  document.addEventListener("click",function(e){
    if(page.hidden===false)return;
    var card=e.target.closest && e.target.closest(".card");
    if(!card)return;
    var title=card.querySelector("h3");
    if(!title)return;
    var clickedName=title.textContent.trim();
    var a=animals.find(function(x){return String(x.name).trim()===clickedName;});
    if(!a)return;
    e.preventDefault();
    e.stopPropagation();
    openWiki(a);
  },true);
  document.addEventListener("keydown",function(e){
    if(page.hidden===false)return;
    if(e.key!=="Enter" && e.key!==" ")return;
    var card=e.target.closest && e.target.closest(".card");
    if(!card)return;
    var title=card.querySelector("h3");
    var a=title && animals.find(function(x){return String(x.name).trim()===title.textContent.trim();});
    if(a){e.preventDefault();openWiki(a);}
  },true);
  window.addEventListener("popstate",function(e){
    if(e.state && e.state.animal){
      var a=animals.find(function(x){return slug(x.name)===e.state.animal;});
      if(a)renderWiki(a,false);
    }else closeWiki(false);
  });
  var match=location.hash.match(/^#animal\/(.+)$/);
  if(match){
    var a=animals.find(function(x){return slug(x.name)===match[1];});
    if(a){history.replaceState({animal:slug(a.name)},"",location.href);renderWiki(a,false);}
  }
})();
